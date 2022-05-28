export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter(eachday => eachday.name === day);

  let appointmentList = [];

  if (selectedDay.length === 0) {
    return appointmentList;
  }

  for (let eachAppointment in state.appointments) {
    if (selectedDay[0].appointments.includes(state.appointments[eachAppointment].id)) {
      appointmentList.push(state.appointments[eachAppointment]);
    }
  }
  return appointmentList;

}
