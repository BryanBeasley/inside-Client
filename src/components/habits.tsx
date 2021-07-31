import React, {Component} from "react";
import APIURL from "../helpers/environment";
import Calendar from "react-calendar";

type acceptedProps = {
  token: string | null;
  habitId: number | null;
  updateHabitId: (newHabitId: number) => void;
};
type acceptedState = {
  habitTracked: string;
  title: string;
  completed: Boolean;
};

export default class Habits extends Component<acceptedProps, acceptedState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      habitTracked: "",
      title: "",
      completed: false,
    };
  }
  fetchHabits = () => {
    if (this.props.token) {
      fetch(`${APIURL}/habits/allHabits`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${this.props.token}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, data.habitId, "console.log data");
        })
        .catch((err) => console.log(err));
    }
  };

  addHabit = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/habits/create`, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        completed: this.state.completed,
      }),
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

  handleUpdateHabit = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/habitshabitUpdate/1`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Habits PUT fetch");
      })
      .catch((err) => console.log(err));
  };

  handleDeleteNote = (habitId: number | null) => {
    if (this.props.token) {
      fetch(`${APIURL}/habits/habitDelete/1`, {
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

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}
