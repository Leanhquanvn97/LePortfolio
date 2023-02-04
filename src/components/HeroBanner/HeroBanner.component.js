import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './HeroBanner.scss';
import HeroBannerImage from '../Svg/HeroBannerImage.component';

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

    return (
        <>
            <div className='HeroBanner'>
                <div className='HeroBanner-Conent'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button>{buttonText}</button>
                </div>
                <div className='HeroBanner-Image'>
                    <HeroBannerImage/>
                </div>
            </div>
            <div className="fullscreen empty-div gradient-overlay"></div>
        </>

    );
};

export default HeroBanner;
