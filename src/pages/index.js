import * as React from 'react';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';
import HeroBanner from '../components/HeroBanner/HeroBanner.component';
import IntroBlock from '../components/IntroBlock/IntroBlock.component';
import MortgageCalculatorBlock from '../components/MortgageCalculatorBlock/MortgageCalculatorBlock.component';
import './root.scss';
import RecipeCalculation from '../components/RecipeCalculation/RecipeCalculation';

const IndexPage = () => {
    return (
        <>
            <Header/>
            <main>
                <HeroBanner/>
                <IntroBlock/>
                <MortgageCalculatorBlock/>
                <RecipeCalculation/>
            </main>
            <Footer/>
        </>
    );
};

export default IndexPage;

export const Head = () => {
    return (
        <>
            <meta name="x-robots-tag" content="all" />
            <meta name="description" content="My page" />
            <title>Home</title>
        </>
    );
};
