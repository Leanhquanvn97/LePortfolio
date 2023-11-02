import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import './HeroBanner.scss';
import HeroBannerImage from '../Svg/HeroBannerImage.component';

const displayText = async (textString) => {
    const title = document.querySelector('.HeroBanner-Description');
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
                description {
                    description
                }
                title
                resume {
                    url
                }
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
            title = '',
            resume: {
                url
            }
        } = {}
    } = data;

    useEffect(() => {
        displayText(description);
    }, []);

    return (
        <>
            <div className='HeroBanner'>
                <div className='HeroBanner-Conent'>
                    <h1 className='HeroBanner-Title' data-text={title}>{title}</h1>
                    <div>
                        <p className='HeroBanner-Description'></p>
                        <a className="Button" href={url} target="_blank" rel="noreferrer">{buttonText}</a>
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
