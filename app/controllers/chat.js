import Ember from 'ember';

const { Controller, computed } = Ember;
const { alias } = computed;

export default Controller.extend({

  chatMessageContent: '',

  messages: alias('model.messages'),

  actions: {
    sendMessage() {
      const content = this.get('chatMessageContent');
      const message = this.store.createRecord('message', {
        content,
        sent: true
      });
      this.get('messages').pushObject(message);
      this.set('chatMessageContent', '');
    }
  }

});
