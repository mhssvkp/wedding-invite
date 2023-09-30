import { Component } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-config',
  templateUrl: './nav-config.component.html',
  styleUrls: ['./nav-config.component.sass'],
  providers: [NgbNavConfig],
})
export class NavConfigComponent {
  public isCollapsed = false;
  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }
}
