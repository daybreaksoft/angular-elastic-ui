import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DefaultLayoutService, ToolbarUserButtonOptions } from '../../layout/layout.settings';

@Component({
  selector: 'vr-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  options: ToolbarUserButtonOptions;

  constructor(layout:DefaultLayoutService) {
    this.options = layout.options.toolbarUserButton;
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

