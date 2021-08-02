import React from "react";
import APIURL from "../helpers/environment";
import {Card, CardText, Row, Col} from "reactstrap";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

type acceptedProps = {
  token: string | null;
  noteId: number | null;
  notes: {title: string; text: string}[];
  updateNoteId: (newCommentId: number) => void;
};
type acceptedState = {
  noteId: number;
  title: string;
  text: string;
  note: {id: number; title: string; text: string}[];
};

export default class Note extends React.Component<
  acceptedProps,
  acceptedState
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      title: "",
      text: "",
      noteId: 0,
      note: [],
    };
    // console.log(props);
  }

  // componentDidMount() {
  //   this.fetchNotes();
  // }
  // fetchNotes = () => {
  //   if (this.props.token) {
  //     console.log(this.state.note[0]);
  //     fetch(`${APIURL}/notes/collection`, {
  //       method: "GET",
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         accept: "application/json",
  //         Authorization: `${this.props.token}`,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);

  //         // console.log(data, data.noteId, "console.log data");
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  addNote = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/notes/create`, {
      method: "POST",
      body: JSON.stringify({title: this.state.title, text: this.state.text}),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  handleUpdateNote = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/notes/noteUpdate/2`, {
      method: "PUT",
      body: JSON.stringify({
        title: this.state.title,
        text: this.state.text,
        note: this.state.note,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //   this.setState({noteId: data.id});
        //   this.setState({title: data.title});
        //   this.setState({text: data.text});
        console.log(data, "text log");
      })
      .catch((err) => console.log(err));
  };

  handleDeleteNote = (card: number | null) => {
    if (this.props.token) {
      fetch(`${APIURL}/notes/noteBurn/1`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${this.props.token}`,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };
  cardmapper = () => {
    return (
      <Col sm="6">
        <Card
          className="note"
          body
          inverse
          style={{
            backgroundColor: "#0D7377",
            borderColor: "#EB6E02",
            color: "#EEEEEE",
          }}
        >
          <TextField
            autoComplete="off"
            defaultValue={this.state.title}
            value={this.state.title}
            size="small"
            onChange={(e) => this.setState({title: e.target.value})}
          />

          <TextField
            autoComplete="off"
            defaultValue={this.state.text}
            value={this.state.text}
            size="small"
            onChange={(e) => this.setState({title: e.target.value})}
          />
          <CardText className="note-footer">
            <Button
              onClick={this.handleUpdateNote}
              size="small"
              variant="contained"
            >
              Edit
            </Button>
            <Button>Delete</Button>
          </CardText>
        </Card>
      </Col>
    );
  };
  render() {
    return (
      <div className="notes-list">
        <Row>
          <Col sm="9" className="btt-grp">
            <Button type="submit" variant="contained">
              Notes
            </Button>
            <Button
              onClick={() => this.handleDeleteNote(this.state.noteId)}
              type="submit"
              variant="contained"
            >
              Delete
            </Button>
            <Button
              type="submit"
              variant="contained"
              // onClick={(e) => {
              //   this.setState({noteId: data.id});
              //   this.props.updateNoteId(data.id);
              // }}
            >
              Update
            </Button>
          </Col>
          <Col sm="6">
            <Card
              className="note"
              body
              inverse
              style={{
                backgroundColor: "#0D7377",
                borderColor: "#EB6E02",
                color: "#EEEEEE",
              }}
            >
              <TextField
                placeholder="Title"
                onChange={(e) => this.setState({title: e.target.value})}
              />

              <TextField
                onChange={(e) => this.setState({text: e.target.value})}
              />
              <CardText className="note-footer">
                <Button
                  onClick={this.handleUpdateNote}
                  size="small"
                  variant="contained"
                >
                  Edit
                </Button>
                <Button variant="contained" onClick={this.addNote}>
                  Add
                </Button>
              </CardText>
            </Card>
          </Col>
        </Row>
        <div>blah</div>
      </div>
    );
  }
}
