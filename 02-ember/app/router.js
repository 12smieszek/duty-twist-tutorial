DutyTwist.Router.map(function() {
  this.resource("schedule", { path: "/" });
  this.resource("assignment", { path: "/:personId"});
})
