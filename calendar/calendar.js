function createEvent(title, month, day) {
  if (day <= 31 && day > 0){
    let event = {
      title: title,
      month: month,
      day: day
    };

    return event;3
  } else {

    return `Error: ${day} is not a valid day`
  };
}

function createCalendar(name, events) {
  let calendar = {
    owner: name,
    events: events
  };

  return calendar;
}

function reportMonthlyEvents(calendar, month) {
  let events = [];
  
  for (let i=0; i < calendar.events.length; i++){
    if (calendar.events[i].month === month){
      events.push(calendar.events[i])
    };
  };

  return events;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents,
  };
