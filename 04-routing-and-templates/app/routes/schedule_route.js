DutyTwist.ScheduleRoute = Ember.Route.extend({
  model: function() {
    var schedule = DutyTwist.Schedule.create();

    schedule.set("people", [
      DutyTwist.Person.create({ id: "jas", name: "Jaś", schedule: schedule }),
      DutyTwist.Person.create({ id: "kasia", name: "Kasia", schedule: schedule }),
      DutyTwist.Person.create({ id: "wojtus", name: "Wojtuś", schedule: schedule }),
      DutyTwist.Person.create({ id: "izka", name: "Izka", schedule: schedule })
    ]);

    schedule.set("duties", [
      DutyTwist.Duty.create({ id: "bathroom", name: "Łazienka", schedule: schedule }),
      DutyTwist.Duty.create({ id: "hall", name: "Przedpokój", schedule: schedule }),
      DutyTwist.Duty.create({ id: "kitchen", name: "Kuchnia", schedule: schedule }),
      DutyTwist.Duty.create({ id: "trash", name: "Śmieci", schedule: schedule })
    ]);

    return schedule;
  }
});
