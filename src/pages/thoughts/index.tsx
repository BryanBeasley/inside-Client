import "./styles.css";

import React from "react";

import JournalList from "../../components/journalList";


class Thoughts extends React.Component {

    render() {
        return (
            <div className='container'>
                <JournalList></JournalList>
            </div>
        );
    }
}

export default Thoughts;