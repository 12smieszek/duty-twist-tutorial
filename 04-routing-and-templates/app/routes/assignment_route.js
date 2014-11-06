DutyTwist.AssignmentRoute = Ember.Route.extend({
  model: function(params) {
    var round = this.modelFor("schedule").findRound(params.roundNumber || this.modelFor("schedule").get("currentRoundNumber"));
    return round.get("assignments").find(function(assignment) {
      return assignment.get("person.id") == params.personId;
    });
  }
});
