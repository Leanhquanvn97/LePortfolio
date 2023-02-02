import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './HeroBanner.scss';

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
    const {
        contentfulHeroBanner: {
            buttonText,
            description: {
                description
            },
            image1: {
                url
            },
            title
        }
    } = data;

    return (
        <div className='HeroBanner'>
            <div className='HeroBanner-Conent'>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
            <div className='HeroBanner-Image'>
                <img src={`${url}`}/>
            </div>
        </div>
    );
};

export default HeroBanner;
