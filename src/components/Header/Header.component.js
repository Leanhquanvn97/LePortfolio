import React, { PureComponent } from 'react';

import './Header.scss';

export class Header extends PureComponent {
    render () {
        return (
            <header>
                <div className='Content-Wrapper'>
                    <div className='Name-Wrapper'>
                        <div className='Header-Icon'>
                            K
                        </div>
                        <div className='Name'>
                            Kinka <br />Finance
                        </div>
                    </div>
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
