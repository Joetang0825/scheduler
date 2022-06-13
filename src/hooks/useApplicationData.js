import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const setDay = day => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      //console.log(all[0].data);
    })
  }, []);


  function calculateIndex(id) {
    if (id % 5 > 0) {
      return Math.floor(id / 5);
    }
    else {
      return Math.floor(id / 5) - 1;
    }

  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = [...state.days];
        if (!state.appointments[id].interview) {
          days[calculateIndex(id)].spots--;
        }
        setState(prev => ({ ...prev, appointments, days }));
      })

  }



  function cancelInterview(id) {

    // console.log(state.appointments[id]);

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    // console.log(appointment);

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const days = [...state.days];
        days[calculateIndex(id)].spots++;
        setState(prev => ({ ...prev, appointments, days }));
      })
  }

  return { state, setDay, bookInterview, cancelInterview };
}