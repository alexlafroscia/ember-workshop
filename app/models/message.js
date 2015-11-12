import DS from 'ember-data';

const { Model, attr } = DS;

const MessageModel = Model.extend({
  content: attr('string'),
  sent: attr('boolean', { defaultValue: false })
});

MessageModel.reopenClass({
  FIXTURES: [
    { id: 1, content: 'Lipsum Lorem' },
    { id: 2, content: 'Lipsum Lorem', sent: true },
    { id: 3, content: 'Lipsum Lorem', sent: true },
    { id: 4, content: 'Lipsum Lorem' },
    { id: 5, content: 'Lipsum Lorem', sent: true },
    { id: 6, content: 'Lipsum Lorem' },
    { id: 7, content: 'Lipsum Lorem', sent: true },
    { id: 8, content: 'Lipsum Lorem' }
  ]
});

export default MessageModel;
