import React from "react";
import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import Confirm from "./Confirm";
import Form from "./Form";
import Error from "./Error";

// Implement logic for Appointment component from one state to another state depends on user's input
export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // Save interviewers and student info
  function save(name, interviewer) {

    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  }

  // Remove an appointment 
  function remove() {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  }

  function confirm() {
    transition(CONFIRM);
  }

  function edit() {
    transition(EDIT);
  }


  return <article className="appointment" data-testid="appointment">
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
        onEdit={edit}
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
    {mode === EDIT && (
      <Form
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
        interviewer={props.interview.interviewer.id}
        student={props.interview.student}
      />
    )}
    {mode === ERROR_DELETE && (
      <Error
        message='Could not cancel appointment.'
        onClose={back}
      />
    )}
    {mode === ERROR_SAVE && (
      <Error
        message='Could not save appointment.'
        onClose={back}
      />
    )}

  </article>;
}