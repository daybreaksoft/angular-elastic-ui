import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultLayoutService, LayoutOptions } from '../../layout/layout.settings';

@Component({
  selector: 'vr-toolbar-alpha',
  templateUrl: './toolbar-alpha.component.html',
  styleUrls: ['./toolbar-alpha.component.scss']
})
export class ToolbarAlphaComponent implements OnInit {

  @Input() sidenavCollapsed: boolean;
  @Input() quickpanelOpen: boolean;
  @Output() toggledSidenav = new EventEmitter();
  @Output() toggledQuickpanel = new EventEmitter();

  options: LayoutOptions;

  constructor(layout: DefaultLayoutService) {
    this.options = layout.options;
   }

  ngOnInit() { }

  toggleSidenav() {
    this.toggledSidenav.emit();
  }

  toggleQuickpanel() {
    this.toggledQuickpanel.emit();
  }
}
