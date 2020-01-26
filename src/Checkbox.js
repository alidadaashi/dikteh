import React from "react";
import { connect } from "react-redux";
import { removeNote } from "./actionCreators/removeNotes";

class Checkbox extends React.Component {
  removeNote = index => {
    this.props.removeNote(index);
  };

  render() {
    const a = ["a", "b", "c", "v"];
    const quizes = this.props.quizes;
    const answers = this.props.answers;

    return (
      <ul className="text-center my-5">
        {quizes.map((quize, index) =>
          quize === answers[index] ? (
            <li key={index}> true</li>
          ) : (
            <li key={index}>false</li>
          )
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.quiz,
    answers: state.correct
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(Checkbox);
