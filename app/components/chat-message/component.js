import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({

  classNameBindings: ['sent'],

  message: null,

  content: alias('message.content'),

  sent: alias('message.sent')

});
