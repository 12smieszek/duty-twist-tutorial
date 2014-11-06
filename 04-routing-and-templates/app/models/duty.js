DutyTwist.Duty = Ember.Object.extend({
  id: null,
  name: "",

  iconUrl: function() {
    return "images/duties/" + this.get("id") + "-icon.png"
  }.property(),

  imageUrl: function() {
    return "images/duties/" + this.get("id") + ".jpg"
  }.property(),
});
