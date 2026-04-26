# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-04-26

### Changed
- **Performance**: Batch commands now use parallel execution (`Promise.all`) for faster multi‑select.

## [1.1.0] - 2026-04-18

### Added
- **Hotkey support**: All commands can now be assigned custom keyboard shortcuts.
- **Multi‑select**: Multiple files/folders can be marked at once via context menu or hotkey.
- **Cycle command**: `explorer-focus-hide.cycleItemState` cycles an item through Hide → Focus → Reset → Hide.
- Command added to explorer context menu for cycle action.

### Fixed
- Missing TypeScript type annotation for `uri`.
- Updated `tsconfig.json` with `skipLibCheck` and explicit `types` to avoid global type conflicts.
- Corrected license field in `package-lock.json` to match `package.json` (MIT).

### Changed
- Version bumped to 1.1.0.

## [1.0.0] - 2025-11-20
- Initial release by d3Ex22.