import React from 'react';
import HeaderInput from './HeaderInput'
import HeaderInput_2 from './HeaderInput_2'
import SVGIcon from './SVGIcon'
import SexInput from './SexInput';
import EduInput from './EduInput';
import BirthInput from './BirthInput';
const Header = () => {
    const [NameInput] = HeaderInput_2("اسم", "bosh", 'doldur');
    return (
        <header className="d-flex align-items-center w-100 mt-4 header">
            <div className="header__right col-lg-3">
                <HeaderInput label="name" />
                <SexInput label="sex" />
            </div>
            <div className="header__title col-lg-6 text-center">
                <div className="col-lg-5 col-sm-10 text-center mx-auto"><SVGIcon fill="#3d91b8" name="title" viewBox="0 0 120 50" /></div>
            </div>
            <div className="header__left col-lg-3">
                <EduInput label="education" />
                <BirthInput label="birth" />

                {/* <NameInput /> */}
            </div>
        </header>
    )
}

export default Header;