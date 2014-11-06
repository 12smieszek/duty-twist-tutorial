DutyTwist.Schedule = Ember.Object.extend({
  people: [],
  duties: [],
  _rounds: [],

  dutyAt: function (roundNumber, offset) {
    var index = (roundNumber + offset) % this.get("duties.length");
    return this.get("duties")[index];
  },

  findPerson: function(personId) {
    return this.get("people").findBy("id", personId);
  },

  findRound: function(number) {
    number = parseInt(number);

    if(!this.get("_rounds")[number]) {
      this.get("_rounds")[number] = DutyTwist.Round.create({ number: number, schedule: this });
    }
    return this.get("_rounds")[number];
  }
});
