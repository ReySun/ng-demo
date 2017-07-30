import { RealNg4Page } from './app.po';

describe('real-ng4 App', () => {
  let page: RealNg4Page;

  beforeEach(() => {
    page = new RealNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
