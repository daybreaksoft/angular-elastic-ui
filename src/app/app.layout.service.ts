import { Injectable } from '@angular/core';
import { LayoutDefaultSettings, LayoutOptions } from './core/layout/layout.settings';
import { ToolbarUserButtonItems } from './core/toolbar/toolbar-user-button/toolbar-user-button.component';

@Injectable()
export class AppLayoutSettings extends LayoutDefaultSettings {

  constructor() {
    super();
  }

  public getOptions(): LayoutOptions {
    return {
      quickpanelEnabled: true,
      toolbarNatificationsEnabled: true,
      toolbarUserButtonEnalbed: true,
      toolbarSearchEnabled: true,
    };
  }

  public getUserButtonItems(): ToolbarUserButtonItems[] {
    return [
      { title: 'Profile', icon: 'account_circle', routerLink: '/pages/profile', isDivider: false },
      { title: 'Settings', icon: 'settings', routerLink: '/pages/profile', isDivider: false },
      { title: 'Online', icon: 'person', isDivider: false },
      { title: 'Help', icon: 'help', isDivider: false },
      { isDivider: true },
      { title: 'Logout', icon: 'exit_to_app', routerLink: '/auth/login', isDivider: false },
    ]
  }
}
