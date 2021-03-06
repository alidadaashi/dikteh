import React, { useState } from 'react';
import SVGIcon from './SVGIcon'
import { connect } from "react-redux";
import changeName from './actionCreators/Header/changeName';
const HeaderInput = props => {


    return (
        <div className={"form-group row flex-nowrap align-items-center " + (props.className || "")}>

            <SVGIcon className="mb-n4" viewBox="0 0 120 50" fill="#3d91b8" name={props.label} />


            <div className="col-sm-8 mr-auto">
                <input type="text" className="form-control header__input"
                    value={props.name}
                    onChange={e => { props.updateName(e.target.value) }}
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({ name }) => ({
    name
});

const mapDispatchToProps = dispatch => ({
    updateName: name => dispatch(changeName(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderInput);