import React from "react";

import "components/InterviewerList.scss";
import classnames from "classnames";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map((interviewer) => (
          <InterviewerListItem
            id={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            setInterviewer={props.setInterviewer}
            selected={interviewer.id === props.interviewer}
          />
        ))}
      </ul>
    </section>

  );
}