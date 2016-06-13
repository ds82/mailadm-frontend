import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators';

import {MailadmNavComponent} from './nav/nav.component';
import {MailadmFooterComponent} from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'mailadm-frontend-app',
  templateUrl: 'mailadm-frontend.component.html',
  styleUrls: ['mailadm-frontend.component.css'],
  directives: [
    MailadmNavComponent,
    MailadmFooterComponent
  ],
  providers: [ HTTP_PROVIDERS ]
})
export class MailadmFrontendAppComponent {
  title = 'mailadm-frontend works!';
}
