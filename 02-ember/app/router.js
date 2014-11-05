DutyTwist.Router.map(function() {
  this.resource("people", { path: "/" });
  this.resource("person", { path: "/:personId"});
})
