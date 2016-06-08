import { Component } from '@angular/core';

import {MailadmNavComponent} from './nav/mailadm-nav.component';

@Component({
  moduleId: module.id,
  selector: 'mailadm-frontend-app',
  templateUrl: 'mailadm-frontend.component.html',
  styleUrls: ['mailadm-frontend.component.css']
})
export class MailadmFrontendAppComponent {
  title = 'mailadm-frontend works!';
}
