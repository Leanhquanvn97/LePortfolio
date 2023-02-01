import * as React from 'react';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';
import './root.scss';

const IndexPage = () => {
    return (
        <>
            <Header/>
            <main>
            </main>
            <Footer/>
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
