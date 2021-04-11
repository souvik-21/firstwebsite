import React from 'react';
import PIC_souvik from './Images/PIC_souvik.jpeg';
const Header=()=>{
    return(
        <>
        <div className='header'>
            <img src={PIC_souvik} alt="logo" width='70' height='50'/>
            <h1>Souvik Keep</h1>
        </div>
        </>
    );
};
export default Header;