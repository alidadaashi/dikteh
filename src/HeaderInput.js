import React, { useState } from 'react';

const HeaderInput = props => {
    const [state, setState] = useState("")
    return (
        <div className="form-group row">
            <label htmlFor="value">{props.label}</label>
            <div className="col-sm-10 mr-auto">
                <input type="text" className="form-control"
                    value={state}
                    onChange={e => setState(e.target.value)}
                />
                <p>{state}</p>
            </div>
        </div>
    );
};

export default HeaderInput;