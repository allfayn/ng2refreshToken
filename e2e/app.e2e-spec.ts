import { Token2ngPage } from './app.po';

describe('token2ng App', () => {
  let page: Token2ngPage;

  beforeEach(() => {
    page = new Token2ngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
