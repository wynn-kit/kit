# Changelog

All significant changes to this package will be documented here.

## [1.2.0] - 2025-06-16

- Refactored the `Tooltip` component by removing the `framer-motion` dependency and replacing animations with Tailwind CSS transitions (`transition`, `scale`, `opacity`, etc.).
- Added support for the `position` prop with values `"top"`, `"bottom"`, `"left"`, `"right"`, and `"auto"`, allowing either fixed or automatic placement.
- Improved smart positioning logic to avoid tooltip overflow outside the viewport.

## [1.0.3] - 2025-06-15

### ✨ Added

- New `blur` variant for buttons with glassmorphism effect.
- Support for `transparent` and `blur` colors in input components.
- Renamed `ButtonColor` to `SchemeColor` for shared use across components.
- Added new `SchemeColor` values: `black` and `white`.

### ♻️ Changed

- Removed `ghost` and `link` variants from buttons.
- Renamed `standard` variant to `filled`.

### 🛠 Fixed

- Fixed hover styles for the `accent` color.
- Fixed button component action behavior.

## [1.0.0] - 2025-04-01

- Initial release.
