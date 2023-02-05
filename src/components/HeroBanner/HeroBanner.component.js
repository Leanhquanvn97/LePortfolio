import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import './HeroBanner.scss';
import HeroBannerImage from '../Svg/HeroBannerImage.component';

const displayText = async (textString) => {
    const title = document.querySelector('.HeroBanner-Title');
    const time = 50;

    await [...textString].forEach((el, i) => {
        setTimeout(() => {
            title.innerHTML += el;
        }, time * i);
    });
};

const HeroBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulHeroBanner {
                buttonText
                id
                image1 {
                description
                url
                }
                description {
                    description
                }
                title
            }
        }
    `);

    if (!data.contentfulHeroBanner) {
        return '';
    }

    const {
        contentfulHeroBanner: {
            buttonText = '',
            description: {
                description = ''
            } = {},
            title = ''
        } = {}
    } = data;
    console.log(title);
    useEffect(() => {
        displayText(title);
    }, []);

    return (
        <>
            <div className='HeroBanner'>
                <div className='HeroBanner-Conent'>
                    <h1 className='HeroBanner-Title'></h1>
                    <div>
                        <p>{description}</p>
                        <button>{buttonText}</button>
                    </div>
                </div>
                <div className='HeroBanner-Image'>
                    <HeroBannerImage/>
                </div>
            </div>
            <div className="empty-div"></div>
        </>

    );
};

export default HeroBanner;
