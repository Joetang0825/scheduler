import React from "react";
import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import Confirm from "./Confirm";
import Form from "./Form";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
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

  function remove() {
    transition(DELETING);
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY));
  }

  function confirm() {
    transition(CONFIRM);
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
        onDelete={confirm}
      />
    )}
    {mode === CREATE && (
      <Form
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
      />
    )}
    {mode === SAVING && (
      <Status
        message='Saving'
      />
    )}
    {mode === DELETING && (
      <Status
        message='Deleting'
      />
    )}
    {mode === CONFIRM && (
      <Confirm
        message='Are you sure you would like to delete?'
        onCancel={back}
        onConfirm={remove}
      />
    )}

  </article>;
}