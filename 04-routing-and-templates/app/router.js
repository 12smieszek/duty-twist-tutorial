DutyTwist.Router.map(function() {
  this.resource("schedule", { path: "/" }, function() {
    this.resource("assignment", { path: "/:personId/:roundNumber"});
  });
})
