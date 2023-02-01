import React, { PureComponent } from 'react';
import CustomerLogo from '../CustomerLogo/CustomerLogo.component';
import './Footer.scss';
import { FOOTER_TAB } from './Footer.config';

export class Footer extends PureComponent {
    renderNavigationCotent = (text) => {
        return text.map(el => {
            return <p key={el}>
                {el}
            </p>;
        });
    };

    renderFooterTabs = () => {
        return Object.entries(FOOTER_TAB).map(el => {
            return (
                <div key={el[0]} className="Footer-Navigation">
                    <div className='Navigation-Title'>
                        {el[0]}
                    </div>
                    <div className='Navigation-ContentWrapper'>
                        {this.renderNavigationCotent(el[1])}
                    </div>
                </div>
            );
        });
    };

    render () {
        return (
            <footer>
                <div className='Content-Wrapper'>
                    <div className='Icon-Wrapper'>
                        <CustomerLogo></CustomerLogo>
                        <div className='Footer-Text'>
                            2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
                        </div>
                        <div className='Footer-Icons'>
                        </div>
                    </div>
                    <div className='Navigation-Wrapper'>
                        {this.renderFooterTabs()}
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
