import React, {Component} from "react";
import APIURL from "../helpers/environment";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

type acceptedProps = {
  token: string | null;
  journalId: number | null;
  title: string | null;
  text: string | null;
};

type acceptedState = {
  journalId: 0;
  title: "";
  text: "";
  notes: [];
};

export default class UpdateNote extends Component<
  acceptedProps,
  acceptedState
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      journalId: 0,
      title: "",
      text: "",
      notes: [],
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }
  fetchNotes = () => {
    if (this.props.token) {
      console.log(this.props.journalId);
      fetch(`${APIURL}/notes/noteUpdate/${this.props.journalId}`, {
        method: "GET",
        headers: new Headers({
          Authorization: this.props.token,
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({journalId: data.id});
          this.setState({title: data.title});
          this.setState({text: data.text});
          console.log(this.state.text, "text log");
        })
        .catch((err) => console.log(err));
    }
  };

  handleUpdateNote = (e: any) => {
    console.log("handleUpdateNote");
    if (this.props.token) {
      console.log(this.props.journalId);
      fetch(`${APIURL}`);
    }
  };

  render() {
    return (
      <div>
        {console.log(this.props.journalId)}
        <h1 style={{textAlign: "center"}}>Update Comment</h1>
        <div>
          <form
            style={{
              marginLeft: "auto",
              marginRight: "none",
              width: "45%",
              display: "block",
              // backgroundColor: "#FFFFFF",
            }}
            onSubmit={this.handleUpdateNote}
          >
            <TextField
              // onChange={(e) => this.setState({ text: e.target.value })}
              id="text"
              label="Update journal note"
            />
            <br />
            <Button variant="contained" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
