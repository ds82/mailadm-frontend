import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MailadmFrontendAppComponent } from '../app/mailadm-frontend.component';

beforeEachProviders(() => [MailadmFrontendAppComponent]);

describe('App: MailadmFrontend', () => {
  it('should create the app',
      inject([MailadmFrontendAppComponent], (app: MailadmFrontendAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mailadm-frontend works!\'',
      inject([MailadmFrontendAppComponent], (app: MailadmFrontendAppComponent) => {
    expect(app.title).toEqual('mailadm-frontend works!');
  }));
});
