import React from "react";
import NavigationBar from "../components/nav/index";
import Auth from "../auth/Auth";
// import Pages from "../pagesList";

type sessionState = {
  token: string | null;
  role: string | null;
  email: string | null;
  journalId: number | null;
  noteId: number | null;
  pageId: number | null;
  habitId: number | null;
};
export default class App extends React.Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      token: "",
      role: "",
      email: "",
      journalId: 0,
      noteId: 0,
      pageId: 0,
      habitId: 0,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({token: localStorage.getItem("token")});
    }
  }
  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({token: newToken});
    console.log(newToken);
  };
  updateRole = (newRole: string) => {
    this.setState({role: newRole});
    console.log(newRole);
  };
  clearToken = () => {
    localStorage.clear();
    this.setState({token: "", role: ""});
  };

  updateJournalId = (newJournalId: number) => {
    this.setState({journalId: newJournalId});
    console.log("journalId from App: ", newJournalId);
  };
  updateNoteId = (newNoteId: number) => {
    this.setState({noteId: newNoteId});
    console.log("journalId from App: ", newNoteId);
  };
  updateHabitId = (newHabitId: number) => {
    this.setState({habitId: newHabitId});
    console.log("habitId from App: ", newHabitId);
  };
  updateEmail = (newEmail: string) => {
    localStorage.setItem("email", newEmail);
    this.setState({email: newEmail});
    console.log(newEmail);
  };
  protectedViews = () => {
    return this.state.token === localStorage.getItem("token") ? (
      <div className="App">
        <NavigationBar token={this.state.token} clickLogout={this.clearToken} />
      </div>
    ) : (
      <Auth updateToken={this.updateToken} updateRole={this.updateRole}></Auth>
    );
  };
  render() {
    return <div>{this.protectedViews()}</div>;
  }
}
