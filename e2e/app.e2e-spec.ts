import { Ng2RruPage } from './app.po';

describe('ng2-rru App', function() {
  let page: Ng2RruPage;

  beforeEach(() => {
    page = new Ng2RruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
