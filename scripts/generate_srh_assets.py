#!/usr/bin/env python3
"""Generate SRH-styled visual assets for Antenna RUL exam presentation."""

from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "project" / "ppt-assets"
FIG = ROOT / "public" / "project" / "outputs"

# SRH brand from Exercises PDF (sampled)
SRH_ORANGE = "#DF4707"
SRH_ORANGE_RGB = (223, 71, 7)
SRH_NAVY = "#0B1D35"
SRH_TEXT = "#2D2D2D"
SRH_MUTED = "#666666"
SRH_CREAM = "#FDD9C9"
CYAN = "#00B5D8"


def _save(fig, name: str) -> Path:
    OUT.mkdir(parents=True, exist_ok=True)
    p = OUT / name
    fig.savefig(p, dpi=200, bbox_inches="tight", facecolor="white", edgecolor="none")
    plt.close(fig)
    return p


def title_background() -> Path:
    """Dark navy title slide background with antenna wireframe aesthetic."""
    fig, ax = plt.subplots(figsize=(16, 9))
    ax.set_xlim(0, 16)
    ax.set_ylim(0, 9)
    ax.axis("off")
    fig.patch.set_facecolor(SRH_NAVY)

    # gradient overlay
    for i in range(50):
        ax.axhspan(0, 9, xmin=0, xmax=1, color=SRH_NAVY, alpha=0.02)

    # Antenna tower wireframe (right side)
    tower_x = 11.5
    heights = np.linspace(1, 7.5, 20)
    for h in heights:
        w = 0.15 + (h - 1) * 0.04
        rect = mpatches.Rectangle((tower_x - w, h), 2 * w, 0.08, fill=False, edgecolor=CYAN, linewidth=0.8, alpha=0.7)
        ax.add_patch(rect)
    ax.plot([tower_x, tower_x], [1, 7.8], color=CYAN, linewidth=2, alpha=0.9)
    # dish
    theta = np.linspace(-0.8, 0.8, 30)
    r = 1.2
    ax.plot(tower_x + r * np.sin(theta), 7.5 + r * np.cos(theta) * 0.4, color=CYAN, linewidth=1.5, alpha=0.85)
    # signal waves
    for i, rad in enumerate([1.5, 2.2, 2.9]):
        arc = mpatches.Arc((tower_x, 7.8), rad * 2, rad * 1.2, angle=0, theta1=20, theta2=160, color=CYAN, linewidth=1.2, alpha=0.5 - i * 0.1)
        ax.add_patch(arc)

    # HUD panel (like PDF engine slide)
    panel = FancyBboxPatch((9.5, 2.5), 5.5, 3.5, boxstyle="round,pad=0.02", facecolor=(0, 0, 0, 0.35), edgecolor=CYAN, linewidth=1, alpha=0.6)
    ax.add_patch(panel)
    ax.text(10, 5.2, "Tower 5G-A01", color="white", fontsize=14, fontweight="bold")
    ax.text(10, 4.5, "Wind: 12 m/s", color=CYAN, fontsize=11)
    ax.text(10, 4.0, "Temp: 28 °C", color=CYAN, fontsize=11)
    ax.text(10, 3.3, "RUL: 12.4 years", color="#4ADE80", fontsize=12, fontweight="bold")

    # cream footer curve
    curve_x = np.linspace(0, 8, 100)
    curve_y = 0.8 + 0.4 * np.sin(curve_x * 0.5) + curve_x * 0.05
    ax.fill_between(curve_x, 0, curve_y, color=SRH_CREAM, alpha=0.95)
    ax.text(0.6, 0.55, "Srivardhan Varma Mudunuri  ·  Matric. 100001259", color=SRH_TEXT, fontsize=11)
    ax.text(0.6, 0.25, "Prof. Dr. Adele Nasti  ·  Modeling, Simulation & Digital Twin", color=SRH_MUTED, fontsize=10)

    return _save(fig, "bg_title_antenna.png")


def lifecycle_diagram() -> Path:
    fig, ax = plt.subplots(figsize=(12, 5))
    ax.set_xlim(0, 12)
    ax.set_ylim(0, 5)
    ax.axis("off")
    stages = [
        ("Design", "CAD model"),
        ("Manufacture", "Factory QC"),
        ("Build", "As-built scan"),
        ("Test", "Lab validation"),
        ("Service", "RUL live"),
    ]
    colors = [SRH_ORANGE, "#E85D04", "#F97316", "#FB923C", CYAN]
    for i, (title, sub) in enumerate(stages):
        x = 0.5 + i * 2.3
        box = FancyBboxPatch((x, 1.5), 2, 2, boxstyle="round,pad=0.05", facecolor=colors[i], edgecolor="white", linewidth=2, alpha=0.92)
        ax.add_patch(box)
        ax.text(x + 1, 2.6, title, ha="center", va="center", color="white", fontsize=13, fontweight="bold")
        ax.text(x + 1, 2.0, sub, ha="center", va="center", color="white", fontsize=9, alpha=0.95)
        if i < len(stages) - 1:
            ax.annotate("", xy=(x + 2.15, 2.5), xytext=(x + 2.05, 2.5),
                        arrowprops=dict(arrowstyle="->", color=SRH_TEXT, lw=2))
    ax.set_title("Digital Twin Across Product Lifecycle", fontsize=16, fontweight="bold", color=SRH_TEXT, pad=12)
    return _save(fig, "viz_lifecycle.png")


def workflow_pipeline() -> Path:
    fig, ax = plt.subplots(figsize=(12, 4))
    ax.set_xlim(0, 12)
    ax.set_ylim(0, 4)
    ax.axis("off")
    steps = [
        ("DRONE", "2D→3D\nScan", SRH_NAVY),
        ("GEOM", "As-built\nModel", "#1E3A5F"),
        ("PHYS", "RUL\nPhysics", SRH_ORANGE),
        ("DOE", "40\nRuns", "#E85D04"),
        ("OPS", "Safe\nEnvelope", CYAN),
    ]
    for i, (icon, label, col) in enumerate(steps):
        x = 0.4 + i * 2.35
        c = FancyBboxPatch((x, 1), 2, 2, boxstyle="round,pad=0.08", facecolor=col, edgecolor="white", linewidth=2)
        ax.add_patch(c)
        ax.text(x + 1, 2.55, icon, ha="center", fontsize=9, fontweight="bold", color="white", alpha=0.85)
        ax.text(x + 1, 1.55, label, ha="center", va="center", color="white", fontsize=10, fontweight="bold", linespacing=1.3)
        if i < len(steps) - 1:
            ax.annotate("", xy=(x + 2.1, 2), xytext=(x + 2.0, 2), arrowprops=dict(arrowstyle="-|>", color=SRH_ORANGE, lw=2.5))
    ax.text(6, 3.5, "Industrial pipeline ≈ €220K  ·  USA telecom client", ha="center", fontsize=11, color=SRH_MUTED)
    return _save(fig, "viz_workflow.png")


def formula_panel() -> Path:
    fig, ax = plt.subplots(figsize=(10, 5))
    ax.axis("off")
    fig.patch.set_facecolor("white")
    ax.text(0.5, 0.85, "Physics-Based RUL Model", fontsize=18, fontweight="bold", color=SRH_TEXT, transform=ax.transAxes)
    ax.text(0.5, 0.62, r"$RUL_{\mathrm{days}} = \dfrac{175{,}200}{f_{wind}\,\times\, f_{temp}\,\times\, 24}$",
            fontsize=22, ha="center", color=SRH_NAVY, transform=ax.transAxes)
    ax.text(0.5, 0.42, r"$f_{wind}(v) = (v/5)^{1.6}$     ·     $f_{temp}(T) = 2^{(T-20)/15}$",
            fontsize=16, ha="center", color=SRH_ORANGE, transform=ax.transAxes)
    boxes = [
        ("5 m/s, 20°C", "20 years", "#4ADE80"),
        ("15 m/s, 35°C", "1.7 years", "#FBBF24"),
        ("35 m/s, 65°C", "41 days", "#EF4444"),
    ]
    for i, (cond, res, col) in enumerate(boxes):
        x = 0.12 + i * 0.3
        b = FancyBboxPatch((x, 0.08), 0.22, 0.22, boxstyle="round,pad=0.02", transform=ax.transAxes,
                           facecolor=col, alpha=0.2, edgecolor=col, linewidth=2)
        ax.add_patch(b)
        ax.text(x + 0.11, 0.2, cond, ha="center", fontsize=10, color=SRH_TEXT, transform=ax.transAxes)
        ax.text(x + 0.11, 0.12, res, ha="center", fontsize=12, fontweight="bold", color=col, transform=ax.transAxes)
    return _save(fig, "viz_formula.png")


def sanity_cards() -> Path:
    return formula_panel()  # combined


def heeds_mapping() -> Path:
    fig, ax = plt.subplots(figsize=(12, 5.5))
    ax.axis("off")
    ax.text(0.5, 0.95, "HEEDS Example 4  ↔  Antenna RUL Project", fontsize=15, fontweight="bold", ha="center", color=SRH_TEXT, transform=ax.transAxes)
    rows = [
        ("Spring FEA exe", "Python rul_days()"),
        ("coil_diam, wire_diam", "wind_ms, temp_C"),
        ("deflection, stress", "rul_days, rul_years"),
        ("DOE 2³ = 8 runs", "Full factorial 4×10 = 40"),
        ("POST 3D surface", "Response surface plot"),
    ]
    for i, (left, right) in enumerate(rows):
        y = 0.78 - i * 0.14
        ax.add_patch(FancyBboxPatch((0.05, y - 0.04), 0.38, 0.1, transform=ax.transAxes, boxstyle="round", facecolor=SRH_NAVY, alpha=0.9))
        ax.add_patch(FancyBboxPatch((0.55, y - 0.04), 0.38, 0.1, transform=ax.transAxes, boxstyle="round", facecolor=SRH_ORANGE, alpha=0.9))
        ax.text(0.24, y + 0.01, left, ha="center", va="center", color="white", fontsize=10, transform=ax.transAxes)
        ax.text(0.74, y + 0.01, right, ha="center", va="center", color="white", fontsize=10, transform=ax.transAxes)
        ax.annotate("", xy=(0.53, y + 0.01), xytext=(0.45, y + 0.01), xycoords=ax.transAxes,
                    arrowprops=dict(arrowstyle="-|>", color=SRH_TEXT, lw=2))
    ax.text(0.24, 0.88, "HEEDS Coil Spring", ha="center", fontsize=11, fontweight="bold", color=SRH_NAVY, transform=ax.transAxes)
    ax.text(0.74, 0.88, "Your Antenna Twin", ha="center", fontsize=11, fontweight="bold", color=SRH_ORANGE, transform=ax.transAxes)
    return _save(fig, "viz_heeds_map.png")


def key_results() -> Path:
    fig, ax = plt.subplots(figsize=(12, 4))
    ax.axis("off")
    stats = [
        ("3.5×", "Wind dominates\ntemperature", SRH_ORANGE),
        ("≤12 m/s", "Safe wind\nlimit", CYAN),
        ("≤30 °C", "Safe temp\nlimit", "#4ADE80"),
        (">10 yr", "RUL in safe\nenvelope", SRH_NAVY),
    ]
    for i, (num, label, col) in enumerate(stats):
        x = 0.08 + i * 0.23
        ax.add_patch(FancyBboxPatch((x, 0.15), 0.2, 0.7, transform=ax.transAxes, boxstyle="round,pad=0.03", facecolor=col, alpha=0.15, edgecolor=col, linewidth=2.5))
        ax.text(x + 0.1, 0.62, num, ha="center", fontsize=28, fontweight="bold", color=col, transform=ax.transAxes)
        ax.text(x + 0.1, 0.32, label, ha="center", fontsize=11, color=SRH_TEXT, transform=ax.transAxes, linespacing=1.4)
    ax.text(0.5, 0.92, "Key Results — Predictive Maintenance", ha="center", fontsize=16, fontweight="bold", color=SRH_TEXT, transform=ax.transAxes)
    return _save(fig, "viz_key_results.png")


def problem_visual() -> Path:
    fig, ax = plt.subplots(figsize=(12, 5))
    ax.axis("off")
    ax.text(0.5, 0.92, "The Problem", fontsize=18, fontweight="bold", ha="center", color=SRH_TEXT, transform=ax.transAxes)
    items = [
        ("OUTAGE", "5G/6G towers fail\nwithout warning", SRH_NAVY),
        ("RISK", "Climber inspections\ncostly & risky", "#B45309"),
        ("COST", "Revenue loss from\ndowntime", SRH_ORANGE),
    ]
    for i, (icon, txt, col) in enumerate(items):
        x = 0.1 + i * 0.3
        ax.add_patch(FancyBboxPatch((x, 0.2), 0.22, 0.55, transform=ax.transAxes, boxstyle="round,pad=0.04", facecolor=col, alpha=0.12, edgecolor=col, linewidth=2))
        ax.text(x + 0.11, 0.62, icon, ha="center", fontsize=11, fontweight="bold", color=col, transform=ax.transAxes)
        ax.text(x + 0.11, 0.38, txt, ha="center", fontsize=12, color=SRH_TEXT, transform=ax.transAxes, linespacing=1.35)
    ax.text(0.5, 0.08, "Gap: geometry alone is NOT a digital twin — we need predictive RUL", ha="center", fontsize=11, style="italic", color=SRH_MUTED, transform=ax.transAxes)
    return _save(fig, "viz_problem.png")


def vv_visual() -> Path:
    fig, ax = plt.subplots(figsize=(12, 4.5))
    ax.axis("off")
    ax.text(0.5, 0.9, "Verification & Validation", ha="center", fontsize=16, fontweight="bold", color=SRH_TEXT, transform=ax.transAxes)
    for x, title, q, ex, col in [
        (0.15, "VERIFICATION", "Maths right?", "Sanity checks at 5/15/35 m/s", SRH_NAVY),
        (0.55, "VALIDATION", "Right maths?", "Compare RUL vs field failures", SRH_ORANGE),
    ]:
        ax.add_patch(FancyBboxPatch((x, 0.15), 0.35, 0.6, transform=ax.transAxes, boxstyle="round", facecolor=col, alpha=0.12, edgecolor=col, linewidth=2))
        ax.text(x + 0.175, 0.65, title, ha="center", fontsize=13, fontweight="bold", color=col, transform=ax.transAxes)
        ax.text(x + 0.175, 0.5, q, ha="center", fontsize=14, style="italic", color=SRH_TEXT, transform=ax.transAxes)
        ax.text(x + 0.175, 0.32, ex, ha="center", fontsize=10, color=SRH_MUTED, transform=ax.transAxes)
    return _save(fig, "viz_vv.png")


def section_divider(num: str, title: str) -> Path:
    """Orange section slide like Exercises PDF."""
    fig, ax = plt.subplots(figsize=(16, 9))
    ax.set_xlim(0, 16)
    ax.set_ylim(0, 9)
    ax.axis("off")
    fig.patch.set_facecolor(SRH_ORANGE)
    # decorative arcs
    for r, alpha in [(6, 0.15), (8, 0.1), (10, 0.06)]:
        arc = mpatches.Arc((16, 0), r * 2, r * 2, angle=0, theta1=60, theta2=180, color="white", linewidth=2, alpha=alpha)
        ax.add_patch(arc)
    ax.text(1.2, 5.2, title, color="white", fontsize=36, fontweight="bold")
    ax.text(1.2, 3.2, num, color="white", fontsize=120, fontweight="bold", alpha=0.95)
    ax.text(1.2, 0.5, "SRH University  ·  Adele Nasti", color="white", fontsize=11, alpha=0.85)
    return _save(fig, f"section_{num.zfill(2)}_{title.lower().replace(' ', '_')}.png")


def main():
    print("Generating SRH visual assets...")
    title_background()
    lifecycle_diagram()
    workflow_pipeline()
    formula_panel()
    heeds_mapping()
    key_results()
    problem_visual()
    vv_visual()
    for n, t in [
        ("01", "Problem"), ("02", "Digital Twin"), ("03", "Approach"),
        ("04", "RUL Model"), ("05", "DoE Results"), ("06", "HEEDS"),
        ("07", "Key Results"), ("08", "V and V"),
    ]:
        section_divider(n, t)
    print(f"Done → {OUT}")


if __name__ == "__main__":
    main()
