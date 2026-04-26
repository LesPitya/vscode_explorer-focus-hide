import * as vscode from 'vscode';
import { StateManager } from './state';
import { DecorationProvider } from './decoration';

export function activate(context: vscode.ExtensionContext) {
    const stateManager = new StateManager(context);
    const decorationProvider = new DecorationProvider(stateManager);

    // Helper to get URIs from selection or arg
    const getUris = async (arg?: vscode.Uri): Promise<vscode.Uri[]> => {
        let uris = await StateManager.getSelectedResourceUris();
        if (uris.length === 0 && arg) {
            uris = [arg];
        }
        return uris;
    };

    context.subscriptions.push(
        decorationProvider, // Ensure internal event emitter is disposed
        vscode.window.registerFileDecorationProvider(decorationProvider),
        
        // Item Toggles
        vscode.commands.registerCommand('explorer-focus-hide.toggleHideItem', async (arg?: vscode.Uri) => {
            const uris = await getUris(arg);
            await Promise.all(uris.map(uri => stateManager.toggleHideItem(uri.fsPath)));
        }),
        vscode.commands.registerCommand('explorer-focus-hide.toggleFocusItem', async (arg?: vscode.Uri) => {
            const uris = await getUris(arg);
            await Promise.all(uris.map(uri => stateManager.toggleFocusItem(uri.fsPath)));
        }),
        vscode.commands.registerCommand('explorer-focus-hide.resetItem', async (arg?: vscode.Uri) => {
            const uris = await getUris(arg);
            await Promise.all(uris.map(uri => stateManager.resetItem(uri.fsPath)));
        }),

        // Cycle state (Hide -> Focus -> None -> Hide)
        vscode.commands.registerCommand('explorer-focus-hide.cycleItemState', async (arg?: vscode.Uri) => {
            const uris = await getUris(arg);
            await Promise.all(uris.map(uri => stateManager.cycleItemState(uri.fsPath)));
        }),

        // Mode Toggles
        vscode.commands.registerCommand('explorer-focus-hide.enableHideMode', async () => {
            await stateManager.setHideMode(true);
        }),
        vscode.commands.registerCommand('explorer-focus-hide.disableHideMode', async () => {
            await stateManager.setHideMode(false);
        }),
        vscode.commands.registerCommand('explorer-focus-hide.enableFocusMode', async () => {
            await stateManager.setFocusMode(true);
        }),
        vscode.commands.registerCommand('explorer-focus-hide.disableFocusMode', async () => {
            await stateManager.setFocusMode(false);
        })
    );

    // Initial sync of contexts
    vscode.commands.executeCommand('setContext', 'explorer-focus-hide.hideMode', stateManager.hideMode);
    vscode.commands.executeCommand('setContext', 'explorer-focus-hide.focusMode', stateManager.focusMode);
}

export function deactivate() {}
