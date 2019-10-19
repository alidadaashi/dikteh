import React from 'react';
import HeaderInput from './HeaderInput'
import HeaderInput_2 from './HeaderInput_2'
const Header = () => {
    const [NameInput] = HeaderInput_2("اسم", "bosh", 'doldur');
    return (
        <header className="d-flex align-items-center row mt-4">
            <div className="header__right col-lg-4">
                <HeaderInput label="نام شما" />
                <HeaderInput label="جنسیت" />
            </div>
            <div className="header__title col-lg-4 text-center">barge</div>
            <div className="header__left col-lg-4">
                <HeaderInput label="تحصیلات" />
                <HeaderInput label="سال تولد" />
                <NameInput />
            </div>
        </header>
    )
}

export default Header;