import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultLayoutService, LayoutOptions } from '../../layout/layout.settings';

@Component({
  selector: 'vr-toolbar-gamma',
  templateUrl: './toolbar-gamma.component.html',
  styleUrls: ['./toolbar-gamma.component.scss']
})
export class ToolbarGammaComponent implements OnInit {

  @Input() quickpanelOpen: boolean;

  @Output() toggledSidenav = new EventEmitter();
  @Output() toggledQuickpanel = new EventEmitter();

  options: LayoutOptions;
  
  constructor(layout: DefaultLayoutService) {
    this.options = layout.options;
   }

  ngOnInit() {}

  toggleSidenav() {
    this.toggledSidenav.emit();
  }

  toggleQuickpanel() {
    this.toggledQuickpanel.emit();
  }
}
