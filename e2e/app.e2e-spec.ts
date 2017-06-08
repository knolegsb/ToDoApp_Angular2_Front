import { TodoappPage } from './app.po';

describe('todoapp App', () => {
  let page: TodoappPage;

  beforeEach(() => {
    page = new TodoappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
