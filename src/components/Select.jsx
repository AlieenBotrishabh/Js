import React, { useState } from 'react';
import './select.css';
import image1 from '../assets/A.png';

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectText, setSelectText] = useState('Select Social Media');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectText(option);
        setIsOpen(false);
    };

    return (
        <div className='hero'>
            <div className='selector'>
                {/* Select Field */}
                <div id='selectField' onClick={handleToggle}>
                    <p>{selectText}</p>
                    <img src={image1} alt="dropdown" />
                </div>

                {/* Dropdown List */}
                {isOpen && (
                    <ul id='list'>
                        <li onClick={() => handleSelect('Github')}>Github</li>
                        <li onClick={() => handleSelect('LinkedIn')}>LinkedIn</li>
                        <li onClick={() => handleSelect('Portfolio')}>Portfolio</li>
                        <li onClick={() => handleSelect('Hackerank')}>Hackerank</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Select;
