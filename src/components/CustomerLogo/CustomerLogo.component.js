import React, { PureComponent } from 'react';
import './CustomerLogo.scss';

export class CustomerLogo extends PureComponent {
    render () {
        return (
            <div className='Name-Wrapper'>
                <div className='Header-Icon'>
                K
                </div>
                <div className='Name'>
                Kinka <br />Finance
                </div>
            </div>
        );
    }
}

export default CustomerLogo;
