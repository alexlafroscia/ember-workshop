import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

const UserModel =  Model.extend({
  name: attr('string'),
  messages: hasMany('message', { async: true })
});

UserModel.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Alex LaFroscia', messages: [1, 2, 3, 4] },
    { id: 2, name: 'Tim James', messages: [5, 6, 7, 8] }
  ]
});

export default UserModel;
