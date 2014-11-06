DutyTwist.ScheduleIndexController = Ember.ObjectController.extend({
  rounds: function() {
    // round = this.currentRound
    var rounds = [];
    for(var i = -1; i < 5; i++) {
      rounds.push(this.get("model").findRound(this.get("model.currentRoundNumber") + i));
    }
    return rounds;
  }.property("model.currentRoundNumber")
});
