DutyTwist.Person = Ember.Object.extend({
  id: null,
  name: "",
  schedule: null,

  dutyAt: function(roundNumber) {
    return this.get("schedule").dutyAt(roundNumber, this.get("offset"));
  }
});
