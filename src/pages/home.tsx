import React, {Component} from "react";
import Note from "../components/note";
import Journal from "../components/journal";
import {Row, Col} from "reactstrap";
import Habits from "../components/habits";
import Quill from "../assets/poetry.svg";

// import UpdatePage from "../../components/diary/updatePage";

type acceptedProps = {
  token: string | null;
  noteId: number | null;
  habitId: number | null;
  title: string | null;
  text: string | null;
  addPage: any[];
  note: any[];
  updateNoteId: (newNoteId: number) => void;
  updateHabitId: (newHabitId: number) => void;
};
type acceptedState = {
  noteId: number;
  habitId: number;
  title: string;
  text: string;
};

export default class HomePage extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      noteId: 0,
      habitId: 0,
      title: "",
      text: "",
    };
  }

  render() {
    return (
      <div className="home-page">
        <Col style={{margin: "10"}} sm={{size: "auto", offset: 1}}>
          <Habits
            token={this.props.token}
            habitId={this.props.habitId}
            updateHabitId={this.props.updateHabitId}
          />
        </Col>
        <Col sm={{size: "auto", offset: 1}}>
          <Journal />
        </Col>

        <Row className="journal-page">
          <Col sm={{size: "auto", offset: 1}} className="journal-list">
            <Note
              token={this.props.token}
              noteId={this.props.noteId}
              updateNoteId={this.props.updateNoteId}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
