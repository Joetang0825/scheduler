import React from "react";
import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Status from "components/Appointment/Status";
import Form from "./Form";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {

    if (!name) {
      name = '';
    }

    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW));
  }


  return <article className="appointment">
    <Header
      time={props.time}
    />
    {/* {(props.interview) ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />} */}

    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
    )}
    {mode === CREATE && (
      <Form
        interviewers={props.interviewers}
        onCancel={() => back()}
        onSave={save}
      />
    )}
    {mode === SAVING && (
      <Status
        message='Saving'
      />
    )}

  </article>;
}