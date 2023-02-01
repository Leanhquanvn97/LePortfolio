import React, { PureComponent } from 'react';
import CustomerLogo from '../CustomerLogo/CustomerLogo.component';
import './Header.scss';

export class Header extends PureComponent {
    render () {
        return (
            <header>
                <div className='Content-Wrapper'>
                    <CustomerLogo></CustomerLogo>
                    <div className='Tab-Wrapper'>
                        <p>
                            Calculator
                        </p>
                        <p>
                            Services
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
