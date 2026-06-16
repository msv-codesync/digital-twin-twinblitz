"""Generate all exam figures to project/outputs/."""

from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

from .constants import AMBER, CYAN, NAVY, SAFE_RUL_YEARS, SAFE_TEMP_C, SAFE_WIND_MS, TEAL, TEMP_LEVELS, WIND_LEVELS
from .constants import NOMINAL_LIFE_HOURS
from .doe import sensitivity_analysis
from .model import rul_days, rul_years, wind_factor, temp_factor


def _style():
    plt.rcParams["font.family"] = "DejaVu Sans"
    plt.rcParams["axes.spines.top"] = False
    plt.rcParams["axes.spines.right"] = False
    plt.rcParams["figure.dpi"] = 150


def plot_rul_curves(out: Path) -> Path:
    _style()
    fig, ax = plt.subplots(figsize=(9, 5))
    colors = [NAVY, TEAL, CYAN, AMBER]
    markers = ["o", "s", "^", "D"]
    for w, c, m in zip(WIND_LEVELS, colors, markers):
        ys = [rul_days(w, t) for t in TEMP_LEVELS]
        ax.plot(
            TEMP_LEVELS,
            ys,
            color=c,
            linewidth=2.5,
            marker=m,
            markersize=8,
            label=f"Wind = {w} m/s",
            markeredgecolor="white",
        )
    ax.set_xlabel("Average operating temperature (°C)", fontweight="bold")
    ax.set_ylabel("Remaining Useful Life (days)", fontweight="bold")
    ax.set_title("Antenna RUL vs Temperature & Wind", fontsize=13, fontweight="bold", color=NAVY)
    ax.grid(True, axis="y", linestyle="--", alpha=0.4)
    ax.legend(title="Wind exposure")
    plt.tight_layout()
    p = out / "01_rul_curves.png"
    fig.savefig(p, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    return p


def plot_response_surface(out: Path) -> Path:
    _style()
    fig = plt.figure(figsize=(9, 6))
    ax = fig.add_subplot(111, projection="3d")
    w = np.linspace(5, 35, 30)
    t = np.linspace(20, 65, 30)
    ww, tt = np.meshgrid(w, t)
    rul = NOMINAL_LIFE_HOURS / (wind_factor(ww) * temp_factor(tt) * 24)
    surf = ax.plot_surface(ww, tt, rul, cmap="viridis", alpha=0.9, edgecolor="white", linewidth=0.2)
    ax.set_xlabel("Wind (m/s)", fontweight="bold")
    ax.set_ylabel("Temp (°C)", fontweight="bold")
    ax.set_zlabel("RUL (days)", fontweight="bold")
    ax.set_title("DoE Response Surface", fontsize=13, fontweight="bold", color=NAVY)
    fig.colorbar(surf, shrink=0.6, aspect=15, pad=0.1, label="RUL (days)")
    ax.view_init(elev=22, azim=-58)
    plt.tight_layout()
    p = out / "02_response_surface_3d.png"
    fig.savefig(p, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    return p


def plot_pareto(out: Path) -> Path:
    _style()
    s = sensitivity_analysis()
    fig, ax = plt.subplots(figsize=(9, 5))
    factors = ["Wind speed\n(5 → 35 m/s)", "Temperature\n(20 → 65 °C)"]
    values = [s["delta_wind_days"], s["delta_temp_days"]]
    bars = ax.bar(factors, values, color=[CYAN, AMBER], edgecolor=NAVY, linewidth=1.5, width=0.55)
    for bar, v in zip(bars, values):
        ax.text(
            bar.get_x() + bar.get_width() / 2,
            bar.get_height() + max(values) * 0.02,
            f"{v:.0f} days\nRUL reduction",
            ha="center",
            fontweight="bold",
            color=NAVY,
            fontsize=11,
        )
    ax.set_ylabel("RUL reduction (days)", fontweight="bold")
    ax.set_title(
        f"Sensitivity / Pareto — wind dominates ({s['wind_dominance_ratio']:.1f}×)",
        fontsize=13,
        fontweight="bold",
        color=NAVY,
    )
    ax.grid(True, axis="y", linestyle="--", alpha=0.4)
    ax.set_ylim(0, max(values) * 1.25)
    plt.tight_layout()
    p = out / "03_pareto_sensitivity.png"
    fig.savefig(p, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    return p


def plot_operating_envelope(out: Path) -> Path:
    _style()
    fig, ax = plt.subplots(figsize=(9, 5.5))
    w2 = np.linspace(5, 35, 50)
    t2 = np.linspace(20, 65, 50)
    ww, tt = np.meshgrid(w2, t2)
    rul_y = NOMINAL_LIFE_HOURS / (wind_factor(ww) * temp_factor(tt) * 24) / 365
    cf = ax.contourf(ww, tt, rul_y, levels=20, cmap="RdYlGn")
    cs = ax.contour(ww, tt, rul_y, levels=[1, 2, 5, 10, 15], colors="black", linewidths=1.2, linestyles="--")
    ax.clabel(cs, inline=True, fontsize=9, fmt="%d yrs")
    ax.scatter(
        [SAFE_WIND_MS],
        [SAFE_TEMP_C],
        s=220,
        c=CYAN,
        edgecolor="white",
        linewidth=2.5,
        zorder=5,
        marker="*",
        label=f"Recommended ops (RUL > {SAFE_RUL_YEARS} yrs)",
    )
    ax.set_xlabel("Wind speed (m/s)", fontweight="bold")
    ax.set_ylabel("Temperature (°C)", fontweight="bold")
    ax.set_title("Operating Envelope — RUL contours (years)", fontsize=13, fontweight="bold", color=NAVY)
    fig.colorbar(cf, ax=ax, label="RUL (years)", shrink=0.85)
    ax.legend(loc="upper right")
    plt.tight_layout()
    p = out / "04_operating_envelope.png"
    fig.savefig(p, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    return p


def plot_doe_matrix_heatmap(df: pd.DataFrame, out: Path) -> Path:
    _style()
    pivot = df.pivot(index="temp_C", columns="wind_ms", values="rul_years")
    fig, ax = plt.subplots(figsize=(8, 5))
    im = ax.imshow(pivot.values, aspect="auto", cmap="RdYlGn", origin="lower")
    ax.set_xticks(range(len(pivot.columns)))
    ax.set_xticklabels([f"{c} m/s" for c in pivot.columns])
    ax.set_yticks(range(len(pivot.index)))
    ax.set_yticklabels([f"{r} °C" for r in pivot.index])
    ax.set_xlabel("Wind speed", fontweight="bold")
    ax.set_ylabel("Temperature", fontweight="bold")
    ax.set_title("Full factorial DoE — RUL (years) heatmap", fontweight="bold", color=NAVY)
    fig.colorbar(im, label="RUL (years)")
    plt.tight_layout()
    p = out / "05_doe_heatmap.png"
    fig.savefig(p, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    return p


def generate_all(out_dir: Path) -> list[Path]:
    from .doe import build_design_matrix

    out_dir.mkdir(parents=True, exist_ok=True)
    df = build_design_matrix()
    df.to_csv(out_dir / "doe_results.csv", index=False)
    paths = [
        plot_rul_curves(out_dir),
        plot_response_surface(out_dir),
        plot_pareto(out_dir),
        plot_operating_envelope(out_dir),
        plot_doe_matrix_heatmap(df, out_dir),
    ]
    return paths
