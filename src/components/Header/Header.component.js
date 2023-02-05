import React, { useEffect, useState } from 'react';
import CustomerLogo from '../CustomerLogo/CustomerLogo.component';
import './Header.scss';

const useScrollDirection = () => {
    const [show, setShow] = useState('show');

    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;

        window.addEventListener('scroll', function (e) {
            // Get the new Value
            currentScrollPosition = window.pageYOffset;

            // Subtract the two and conclude
            if (previousScrollPosition - currentScrollPosition < 0) {
                setShow('hide');
            } else if (previousScrollPosition - currentScrollPosition > 0 && currentScrollPosition > 40) {
                setShow('mini');
            } else if (previousScrollPosition - currentScrollPosition > 0) {
                setShow('show');
            }

            // Update the previous value
            previousScrollPosition = currentScrollPosition;
        });
    }, []);

    return show;
};

const onClickHandler = () => {
    const scrollToEl = document.querySelector('.MortgageCalculatorBlock');

    scrollToEl.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`${scrollDirection}`}>
            <div className='Content-Wrapper'>
                <CustomerLogo></CustomerLogo>
                <div className='Tab-Wrapper'>
                    <button onClick={onClickHandler}>Calculator</button>
                    <p>Services</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
