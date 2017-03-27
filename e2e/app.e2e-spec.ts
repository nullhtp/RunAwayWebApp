import { RunAwayAppPage } from './app.po';

describe('run-away-app App', () => {
  let page: RunAwayAppPage;

  beforeEach(() => {
    page = new RunAwayAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
