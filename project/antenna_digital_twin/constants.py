"""Physical constants and DoE levels for the antenna RUL digital twin."""

NOMINAL_LIFE_HOURS = 175_200  # ≈ 20 years continuous operation

WIND_LEVELS = [5, 15, 25, 35]  # m/s — full-factorial factor A (4 levels)
TEMP_LEVELS = list(range(20, 66, 5))  # °C — factor B (10 levels)

# Recommended safe operating envelope (exam result)
SAFE_WIND_MS = 12
SAFE_TEMP_C = 30
SAFE_RUL_YEARS = 10

# Plot styling (matches notebook + presentation)
NAVY = "#0B2447"
TEAL = "#0E7C7B"
CYAN = "#00B5D8"
AMBER = "#F59E0B"
