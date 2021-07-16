import "./styles.css";

import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { nanoid } from 'nanoid';

class Note extends React.Component {
    // constructor(props: string) {
    //   super(props);
    //   this.state = {
    //     id: "",
    //     text: "",
    //     date: ""
    //   };
    //   console.log(this.state);
    constructor(props: string) {
        super(props);
        this.state = {
            id: nanoid(),
            text: "This is My Note!",
            date: "07/13/2021"
        };
        console.log('%c Journal Object!', 'font-weight: bold; background-color: cyan; color: navy; padding: 15px;', this.state);
        // !this.state is an object 

    }
    render() {
        return (
            <div className=" note">
                <span> My first note! </span>
                <div className=" note-footer" >
                    <small> 13/04/2021</small>
                    <MdDeleteForever className='delete-icon' size='1.3em' />
                </div>
            </div>
        );
    }
}

export default Note;
