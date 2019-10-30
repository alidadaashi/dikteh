import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import Header from './Header'
import Canvas from './Canvas';

const App = () => {

    return (
        <React.StrictMode>
            <div className="container">
                <Header />
                {/* <Pet name="ali" animal="DOG" /> */}
                <Canvas />
            </div>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));