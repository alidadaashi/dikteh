import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import Header from './Header'
import Canvas from './Canvas';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

    return (

        <Provider store={store}>
            <div className="container">
                <Header />
                {/* <Pet name="ali" animal="DOG" /> */}
                <Canvas />
            </div>
        </Provider>

    );
};

ReactDOM.render(<App />, document.getElementById("root"));