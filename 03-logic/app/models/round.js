DutyTwist.Round = Ember.Object.extend({
  number: 0,
  schedule: null,

  assignments: function() {
    var self = this;
    return this.get("schedule.people").map(function(person, i) {
      return DutyTwist.Assignment.create({
        duty: schedule.dutyAt(self.get("number"), i),
        person: person
      });
    });
  }.property("number", "schedule")
});
