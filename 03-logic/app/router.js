DutyTwist.Router.map(function() {
  this.resource("schedule", { path: "/" });
  this.resource("person", { path: "/:personId"});
})
