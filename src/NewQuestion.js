import React from "react";
import { connect } from "react-redux";
import addQuiz from "./actionCreators/Header/addQuiz";
import addCorrect from "./actionCreators/Header/addCorrect";

class NewQuestion extends React.Component {
  state = { test: [{ A: "...", B: "..." }], i: 0, max: 0 };

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/alidadaashi/dikteh/db")
      // Call the fetch function passing the url of the API as a parameter
      .then(resp => resp.json())
      .then(data => {
        console.log(data.posts);
        this.setState({ test: data.posts, max: data.posts.length });
        // Your code for handling the data you get from the API
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      });
  }
  nextQuestion = answer => {
    console.log(this.props);
    this.state.i < this.state.max - 1
      ? this.setState({ i: this.state.i + 1 })
      : alert("Ended");
  };

  render() {
    return (
      <div className="row text-center mt-5">
        <div className="col-lg-6">
          <button
            value="A"
            onClick={e => this.props.nextQ(e.target.value)}
            className="questions__case"
          >
            {this.state.test[this.state.i].A}
          </button>
        </div>
        <div className="col-lg-6">
          <button
            value="B"
            onClick={e => this.props.nextQ(e.target.value)}
            className="questions__case"
          >
            {this.state.test[this.state.i].B}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quiz }) => ({
  test: quiz
});

const mapDispatchToProps = dispatch => ({
  nextQ(test) {
    dispatch(addQuiz(test));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
