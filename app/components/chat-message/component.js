import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({

  message: null,

  content: alias('message.content')

});
