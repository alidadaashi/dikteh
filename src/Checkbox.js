import React from "react";
import { connect } from "react-redux";
import { removeNote } from "./actionCreators/removeNotes";

class Checkbox extends React.Component {
  removeNote = index => {
    this.props.removeNote(index);
  };

  render() {
    const a = ["a", "b", "c", "v"];
    const notesItems = this.props.notes.toString();

    return <ul className="text-center my-5">{notesItems}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    notes: state.quiz
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(Checkbox);
