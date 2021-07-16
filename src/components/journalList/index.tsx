import "./styles.css";

import React from 'react';
import Note from '../notes/index';

class JournalList extends React.Component {
    render() {
        return (
            <div className=" journal-list" >
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        );
    }
}

export default JournalList;
