export class MailadmFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mailadm-frontend-app h1')).getText();
  }
}
