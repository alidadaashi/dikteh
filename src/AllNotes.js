import React, { Component } from 'react'
import { connect } from 'react-redux';
class AllNotes extends Component {



    render() {
        const notesItems = this.props.notes.map((note, index) =>
            <li key={index}>
                <b>{note.title}</b>
                <span>{note.content}</span>
            </li>
        );

        return (
            <React.Fragment>
                <h3>All Notes</h3>

                <ul>
                    {notesItems}
                </ul>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        notes: state.rootReducer.notes
    };
};


export default connect(mapStateToProps)(AllNotes);