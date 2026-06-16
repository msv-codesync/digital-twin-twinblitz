"""
Design of Experiments — full factorial 4×10 = 40 runs.

WHY full factorial (not fractional):
  - Only 2 factors, 40 runs is cheap for analytical model; captures interaction
    for response surface — same logic as HEEDS Example 4 (Coil Spring DoE).

METHOD follows Montgomery DoE + HEEDS POST workflow:
  1. Define factors & levels
  2. Build design matrix
  3. Run model at each point
  4. Sensitivity sweep (one factor at a time, other at midpoint)
  5. Pareto ranking of factor impact
"""

from __future__ import annotations

import pandas as pd

from .constants import TEMP_LEVELS, WIND_LEVELS
from .model import rul_days, rul_years


def build_design_matrix() -> pd.DataFrame:
    rows = []
    for w in WIND_LEVELS:
        for t in TEMP_LEVELS:
            d = rul_days(w, t)
            rows.append(
                {
                    "wind_ms": w,
                    "temp_C": t,
                    "rul_days": d,
                    "rul_years": rul_years(w, t),
                    "wind_factor": (w / 5.0) ** 1.6,
                    "temp_factor": 2 ** ((t - 20) / 15),
                }
            )
    return pd.DataFrame(rows)


def sensitivity_analysis() -> dict[str, float]:
    """One-factor-at-a-time sweeps; returns deltas and dominance ratio."""
    temp_mid = 42.5
    wind_mid = 20.0

    delta_wind = rul_days(5, temp_mid) - rul_days(35, temp_mid)
    delta_temp = rul_days(wind_mid, 20) - rul_days(wind_mid, 65)
    ratio = delta_wind / delta_temp if delta_temp else float("inf")

    return {
        "delta_wind_days": delta_wind,
        "delta_temp_days": delta_temp,
        "wind_dominance_ratio": ratio,
        "temp_mid": temp_mid,
        "wind_mid": wind_mid,
    }


def heeds_mapping() -> list[dict[str, str]]:
    """Maps antenna workflow to HEEDS Getting Started Guide Example 4."""
    return [
        {"heeds": "Process Automation — link solver", "antenna": "Python RUL function (replaces spring FEA exe)"},
        {"heeds": "Parameters — coil_diam, wire_diam, num_coils", "antenna": "wind_ms, temp_C (tagged inputs)"},
        {"heeds": "Responses — deflection, stress, mass", "antenna": "rul_days, rul_years (tagged outputs)"},
        {"heeds": "Study — DOE Screening/Response Surface", "antenna": "Full factorial 4×10 = 40 runs"},
        {"heeds": "POST — Pareto, main effects, 3D surface", "antenna": "Pareto chart + contour envelope plot"},
    ]
