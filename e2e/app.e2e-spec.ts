import { FRMAngularPage } from './app.po';

describe('frm-angular App', () => {
  let page: FRMAngularPage;

  beforeEach(() => {
    page = new FRMAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
