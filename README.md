# Explorer Focus & Hide

> **ℹ️ This is a fork of the original [Explorer Focus & Hide](https://github.com/d3Ex22/vscode_explorer-focus-hide) extension by d3Ex22. It is not published on the VS Code Marketplace. See [Installation](#installation) below for manual setup.**

**Explorer Focus & Hide** allows you to take control of your VS Code file explorer. Hide distracting files or focus only on what matters for your current task.

## Features

### 🎯 Focus Mode
Keep only the files relevant to your current task visible.
- **Right-click** a file or folder and select **"Mark for Focus"**.
- Toggle **Focus Mode** using the target icon in the explorer title bar.
- When active, everything else is hidden, except the path to your focused items.

### 👁️ Hide Mode
Quickly hide distracting files or generated folders.
- **Right-click** a file or folder and select **"Mark for Hide"**.
- Toggle **Hide Mode** using the eye icon in the explorer title bar.
- Hidden items are added to your workspace exclusion list efficiently.

### ⚡ Mixed Mode
Both modes can work together with smart priority logic:
- If a folder is hidden but contains a focused item, the folder remains visible to allow access to the focused content.
- **Focus** takes precedence over **Hide** when conflicts occur in the hierarchy.

### 🔄 Reset
- Easily **Reset** an item's status (remove it from both Focus and Hide lists) via the context menu.

## Visual Indicators

Files are marked with subtle badges in the explorer:
- **F**: Item is marked for **Focus**.
- **H**: Item is marked for **Hide**.

---

## 🍴 Fork Additions (Les)

This fork adds the following features not present in the original:

- **⌨️ Hotkey support**: All commands can be assigned custom keyboard shortcuts.
- **🖱️ Multi‑select**: Mark multiple files/folders at once via the context menu or a hotkey.
- **🔄 Cycle command**: `explorer-focus-hide.cycleItemState` cycles an item through **Hide → Focus → Reset → Hide**.
- **🛠️ TypeScript fixes**: Added missing type annotations.

## Installation

> **This fork is not available on the VS Code Marketplace.** You must install it manually.

### Option 1: Install from VSIX (recommended)

1. Download or build the `.vsix` file
2. In VS Code, open the Extensions view (`Ctrl+Shift+X`).
3. Click the `...` menu (top-right) and select **Install from VSIX...**.
4. Choose the `.vsix` file and reload VS Code if prompted.

### Option 2: Run in Development Mode

1. Clone this repository.
2. Run `npm install` and `npm run compile` in the project folder.
3. Open the folder in VS Code and press `F5` to start an Extension Development Host window.

## Credits & Acknowledgments

This extension was created by **d3Ex22**.

It is heavily inspired by the [Workspace](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace) extension created by **Fooxly**.
Big thanks to Fooxly for the original idea and initial work on the concept.
Original repository: [https://github.com/Fooxly/workspace](https://github.com/Fooxly/workspace)

Fork with additional features by **Les**.

## License

This project is licensed under the MIT License (same as original).