#!/usr/bin/env python3
"""
Run the complete Antenna RUL Digital Twin pipeline.

Usage:
  python project/run_project.py              # prints summary + generates figures
  python project/run_project.py --ppt        # also builds PowerPoint

Steps replicated from course methodology:
  1. Define physics-based RUL model (verification via sanity checks)
  2. Full-factorial DoE (40 runs) — HEEDS Example 4 equivalent
  3. Sensitivity + Pareto ranking
  4. Response surface + operating envelope
  5. Export CSV + PNG figures for presentation
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))

from antenna_digital_twin.doe import build_design_matrix, heeds_mapping, sensitivity_analysis
from antenna_digital_twin.model import sanity_checks
from antenna_digital_twin.visualize import generate_all

OUT = ROOT / "outputs"
PUBLIC_OUT = ROOT.parent / "public" / "project" / "outputs"


def main() -> None:
    parser = argparse.ArgumentParser(description="Antenna RUL Digital Twin")
    parser.add_argument("--ppt", action="store_true", help="Generate PowerPoint presentation")
    args = parser.parse_args()

    print("=" * 60)
    print("ANTENNA RUL DIGITAL TWIN — Prof. Dr. Adele Nasti")
    print("=" * 60)

    checks = sanity_checks()
    print("\n[1] VERIFICATION — sanity checks")
    print(f"    RUL at  5 m/s, 20°C: {checks['5ms_20C_days']:>8.0f} days ({checks['5ms_20C_days']/365:.1f} yr)")
    print(f"    RUL at 15 m/s, 35°C: {checks['15ms_35C_days']:>8.0f} days ({checks['15ms_35C_days']/365:.1f} yr)")
    print(f"    RUL at 35 m/s, 65°C: {checks['35ms_65C_days']:>8.0f} days ({checks['35ms_65C_days']/365:.1f} yr)")

    df = build_design_matrix()
    print(f"\n[2] DoE — {len(df)} runs (4 wind × 10 temp)")
    print(df.groupby("wind_ms")["rul_years"].mean().round(1).to_string())

    s = sensitivity_analysis()
    print("\n[3] SENSITIVITY / PARETO")
    print(f"    ΔRUL wind:  {s['delta_wind_days']:.0f} days")
    print(f"    ΔRUL temp:  {s['delta_temp_days']:.0f} days")
    print(f"    Wind dominance: {s['wind_dominance_ratio']:.1f}×")

    print("\n[4] HEEDS mapping (Example 4 — Coil Spring DoE)")
    for row in heeds_mapping():
        print(f"    {row['heeds']}")
        print(f"      → {row['antenna']}")

    print("\n[5] Generating figures...")
    paths = generate_all(OUT)
    PUBLIC_OUT.mkdir(parents=True, exist_ok=True)
    for p in paths:
        dest = PUBLIC_OUT / p.name
        dest.write_bytes(p.read_bytes())
        print(f"    ✓ {p.name}")

    csv_src = OUT / "doe_results.csv"
    if csv_src.exists():
        (PUBLIC_OUT / "doe_results.csv").write_bytes(csv_src.read_bytes())

    if args.ppt:
        print("\n[6] Building PowerPoint...")
        import subprocess

        for script in ("generate_presentation.py", "generate_srh_presentation.py"):
            p = ROOT.parent / "scripts" / script
            if p.exists():
                subprocess.run([sys.executable, str(p)], check=True)

    print("\nDone. Open public/project/ for web assets.")


if __name__ == "__main__":
    main()
