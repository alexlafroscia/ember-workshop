import DS from 'ember-data';

const { Model, attr } = DS;

const MessageModel = Model.extend({
  content: attr('string'),
  sent: attr('boolean', { defaultValue: false })
});

MessageModel.reopenClass({
  FIXTURES: [
    { id: 1, content: "Look at that, it's exactly three seconds before i honk your nose and pull your underwear over your head. brain freeze." },
    { id: 2, content: "Good morning, oh in case i don't see you, good afternoon, good evening and goodnight.", sent: true },
    { id: 3, content: "look ma i'm road kill it's because i'm green isn't it!", sent: true },
    { id: 4, content: "Excuse me, i'd like to ass you a few questions." },
    { id: 5, content: 'here she comes to wreck the day.', sent: true },
    { id: 6, content: 'our entrance was good, his was better.' },
    { id: 7, content: "alrighty then we're going for a ride on the information super highway.", sent: true },
    { id: 8, content: 'hey, maybe i will give you a call sometime. your number still 911?' }
  ]
});

export default MessageModel;
