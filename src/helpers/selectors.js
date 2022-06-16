// Return all the appointments for a specific day
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

// Return all the interviewers for a specific day
export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.filter(eachday => eachday.name === day);

  let interviewerList = [];

  if (selectedDay.length === 0) {
    return interviewerList;
  }

  for (let eachInterviewer in state.interviewers) {
    if (selectedDay[0].interviewers.includes(state.interviewers[eachInterviewer].id)) {
      interviewerList.push(state.interviewers[eachInterviewer]);
    }
  }
  return interviewerList;

}


// Return an interview object that contains student and interviewer information
export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }

  const detailedInterview = {};
  detailedInterview["student"] = interview.student;
  detailedInterview["interviewer"] = {};
  detailedInterview["interviewer"]["id"] = interview.interviewer;
  detailedInterview["interviewer"]["name"] = state.interviewers[interview.interviewer].name;
  detailedInterview["interviewer"]["avatar"] = state.interviewers[interview.interviewer].avatar;

  return detailedInterview;

}

