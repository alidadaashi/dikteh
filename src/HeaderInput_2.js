import React, { useState } from 'react';
const HeaderInput_2 = (label, defaultState, placeholder) => {
    const [state, updateState] = useState(defaultState);
    const Input = () => (
        <div className="form-group row">
            <label htmlFor={label}>{label}</label>
            <div className="col-sm-10 mr-auto">
                <input id={label} type="text" className="form-control" placeholder={placeholder}
                    value={state}
                    onChange={e => updateState(e.target.value)}
                />
                <p>{state}</p>
            </div>
        </div>
    );
    return [Input, state, updateState];

}

export default HeaderInput_2;