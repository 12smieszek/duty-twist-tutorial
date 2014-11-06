DutyTwist.Round = Ember.Object.extend({
  number: 0,
  schedule: null,

  assignments: function() {
    var self = this;
    return this.get("schedule.people").map(function(person, i) {
      return DutyTwist.Assignment.create({
        duty: self.get("schedule").dutyAt(self.get("number"), i),
        person: person,
        round: self
      });
    });
  }.property("number", "schedule"),

  previousNumber: function() {
    return this.get("number") - 1;
  }.property("number"),

  nextNumber: function() {
    return this.get("number") + 1;
  }.property("number"),

  startTime: function() {
    return this.get("schedule.startTime") + this.get("number") * this.get("schedule.interval");
  }.property("schedule.startTime", "number", "schedule.interval"),

  startsOn: function() {
    return new Date(this.get("startTime"));
  }.property("startTime"),

  endsOn: function() {
    return new Date(this.get("startTime") + this.get("schedule.interval") - 24 * 60 * 60 * 1000);
  }.property("startTime", "schedule.interval"),

  isCurrent: function() {
    return this.get("schedule.currentRoundNumber") == this.get("number");
  }.property("schedule.currentRoundNumber", "number")
});
