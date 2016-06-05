import { MailadmFrontendPage } from './app.po';

describe('mailadm-frontend App', function() {
  let page: MailadmFrontendPage;

  beforeEach(() => {
    page = new MailadmFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mailadm-frontend works!');
  });
});
