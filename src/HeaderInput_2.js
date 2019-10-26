import React, { useState } from 'react';
const HeaderInput_2 = (label, defaultState, placeholder) => {




    const getData = () => {
        fetch('https://my-json-server.typicode.com/alidadaashi/dikteh/db')
            // Call the fetch function passing the url of the API as a parameter
            .then((resp) => resp.json())
            .then(function (data) {
                console.log(data)
                // Your code for handling the data you get from the API
            })
            .catch(function () {
                // This is where you run code if the server returns any errors
            });
    }

    const [state, updateState] = useState(defaultState);
    const Input = () => (
        <div className="form-group row">
            <label htmlFor={label}>{label}</label>
            <div className="col-sm-10 mr-auto">
                <input id={label} type="text" className="form-control" placeholder={placeholder}
                    value={state}
                    onChange={e => {
                        updateState(e.target.value);
                        getData();
                    }
                    }
                />
                <p>{state}</p>
            </div>
        </div>
    );
    return [Input, state, updateState];

}

export default HeaderInput_2;