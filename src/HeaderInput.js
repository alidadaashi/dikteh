import React, { useState } from 'react';
import SVGIcon from './SVGIcon'
const HeaderInput = props => {
    const [state, setState] = useState("")


    return (
        <div className={"form-group row flex-nowrap align-items-center " + (props.className || "")}>

            <SVGIcon className="mb-n4" viewBox="0 0 120 50" fill="#3d91b8" name={props.label} />


            <div className="col-sm-8 mr-auto">
                <input type="text" className="form-control header__input"
                    value={state}
                    onChange={e => { setState(e.target.value) }}
                />
            </div>
        </div>
    );
};

export default HeaderInput;