
import { ToolbarUserButtonItems } from '../toolbar/toolbar-user-button/toolbar-user-button.component'

export interface LayoutOptions {
    quickpanelEnabled: boolean;
    toolbarNatificationsEnabled: boolean;
    toolbarUserButtonEnalbed: boolean;
    toolbarSearchEnabled: boolean;
}

export class LayoutDefaultSettings {

    public getOptions(): LayoutOptions {
        return {
            quickpanelEnabled: true,
            toolbarNatificationsEnabled: true,
            toolbarUserButtonEnalbed: true,
            toolbarSearchEnabled: true,
        };
    }

    public getUserButtonItems(): ToolbarUserButtonItems[] {
        return [];
    }
}
