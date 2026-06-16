"""
Physics-based RUL model for 5G/6G telecom tower antennas.

WHY physics-based (not purely empirical):
  - Wind fatigue and thermal aging have known scaling laws from structural
    reliability literature; we calibrate exponents (1.6, 15°C doubling)
    but keep interpretable first-principles form (Prof: physics + empirical).

WHY this is a digital twin component:
  - As-used prognostics layer on top of as-built geometry from drone pipeline.
"""

from __future__ import annotations

from .constants import NOMINAL_LIFE_HOURS


def wind_factor(v: float) -> float:
    """Wind-induced fatigue accelerator. Baseline 1.0 at v = 5 m/s."""
    return (v / 5.0) ** 1.6


def temp_factor(t_c: float) -> float:
    """Arrhenius-style thermal aging. Rate doubles every 15 °C above 20 °C."""
    return 2 ** ((t_c - 20) / 15)


def rul_days(v: float, t_c: float, hours_per_day: float = 24) -> float:
    """
    Remaining Useful Life in days.

    RUL(days) = L_nom / (f_wind × f_temp × 24)
    """
    return NOMINAL_LIFE_HOURS / (wind_factor(v) * temp_factor(t_c) * hours_per_day)


def rul_years(v: float, t_c: float) -> float:
    return rul_days(v, t_c) / 365.0


def sanity_checks() -> dict[str, float]:
    """Verification checks — known anchor points for oral exam."""
    return {
        "5ms_20C_days": rul_days(5, 20),
        "15ms_35C_days": rul_days(15, 35),
        "35ms_65C_days": rul_days(35, 65),
    }
