import React, { useState } from 'react';
import SVGIcon from './SVGIcon'
import { connect } from "react-redux";
import changeBirth from './actionCreators/Header/changeBirth';
const BirthInput = props => {



    return (
        <div className={"form-group row flex-nowrap align-items-center " + (props.className || "")}>

            <SVGIcon className="mb-n4" viewBox="0 0 120 50" fill="#3d91b8" name={props.label} />


            <div className="col-sm-8 mr-auto">
                <input type="text" className="form-control header__input"
                    value={props.birth}
                    onChange={e => { props.UpdateBirth(e.target.value) }}
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({ birth }) => ({
    birth
});

const mapDispatchToProps = dispatch => ({
    UpdateBirth: birth => dispatch(changeBirth(birth))
})


export default connect(mapStateToProps, mapDispatchToProps)(BirthInput);