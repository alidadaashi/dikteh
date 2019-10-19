import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import Header from './Header'

const App = () => {

    return (
        <React.StrictMode>
            <div className="container">
                <Header />
                <h1 > adopt me </h1>
                <Pet name="ali" animal="DOG" />
            </div>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));