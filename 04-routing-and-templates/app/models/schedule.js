DutyTwist.Schedule = Ember.Object.extend({
  interval: 7 * 24 * 60 * 60 * 1000,
  startTime: new Date("2014-11-03").getTime(),
  people: [],
  duties: [],
  _rounds: [],

  currentRoundNumber: function() {
    return Math.floor((new Date().getTime() - this.get("startTime")) / this.get("interval"))
  }.property("startTime", "interval"),

  dutyAt: function (roundNumber, offset) {
    var index = ((roundNumber + offset) % this.get("duties.length") + this.get("duties.length")) % this.get("duties.length") ;
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
