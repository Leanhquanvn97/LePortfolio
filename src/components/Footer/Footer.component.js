import React from 'react';
import CustomerLogo from '../CustomerLogo/CustomerLogo.component';
import './Footer.scss';
import { FOOTER_TAB } from './Footer.config';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';

const renderNavigationCotent = (text) => {
    return text.map(el => {
        return <p key={el}>
            {el}
        </p>;
    });
};

const renderFooterTabs = () => {
    return Object.entries(FOOTER_TAB).map(el => {
        return (
            <div key={el[0]} className="Footer-Navigation">
                <div className='Navigation-Title'>
                    {el[0]}
                </div>
                <div className='Navigation-ContentWrapper'>
                    {renderNavigationCotent(el[1])}
                </div>
            </div>
        );
    });
};

export const Footer = () => {
    return (
        <footer>
            <div className='Content-Wrapper'>
                <div className='Icon-Wrapper'>
                    <CustomerLogo></CustomerLogo>
                    <div className='Footer-Text'>
                        2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
                    </div>
                    <div className='Footer-Icons'>
                        <img src={facebook}/>
                        <img src={twitter}/>
                        <img src={instagram}/>
                    </div>
                </div>
                <div className='Navigation-Wrapper'>
                    {renderFooterTabs()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
