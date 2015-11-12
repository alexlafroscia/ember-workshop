import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'Alex LaFroscia',
        chats: [
          { content: 'Test' }
        ]
      }, {
        id: 2,
        name: 'Tim James',
        chats: [
          { content: 'Test' }
        ]
      }
    ];
  }
});
