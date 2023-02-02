import * as React from 'react';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';
import HeroBanner from '../components/HeroBanner/HeroBanner.component';
import IntroBlock from '../components/IntroBlock/IntroBlock.component';
import MortgageCalculatorBlock from '../components/MortgageCalculatorBlock/MortgageCalculatorBlock.component';
import './root.scss';

const IndexPage = () => {
    return (
        <>
            <Header/>
            <main>
                <HeroBanner/>
                <IntroBlock/>
                <MortgageCalculatorBlock/>
            </main>
            <Footer/>
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
