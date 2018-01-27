import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LayoutDefaultSettings } from '../../layout/layout.settings';

@Component({
  selector: 'vr-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  items: ToolbarUserButtonItems[];

  constructor(settings:LayoutDefaultSettings) {
    this.items = settings.getUserButtonItems();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}

export interface ToolbarUserButtonItems {
  title?: string;
  icon?: string;
  routerLink?: string;
  isDivider: boolean
}