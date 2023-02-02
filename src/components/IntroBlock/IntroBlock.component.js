import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './IntroBlock.scss';

const IntroBlock = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
        contentfulIconIntroBlock {
            iconIntro1 {
                icon {
                    url
                    description
                }
                description {
                    description
                }
                title
            }
            iconIntro2 {
                icon {
                    description
                    url
                }
                title
                description {
                    description
                }
            }
            iconIntro3 {
                icon {
                    description
                    url
                }
                description {
                    description
                }
                title
            }
            }
        }
    `);

    return (
        <div className='IntroBlock'>
            <h2>High Quality Output, Awesome Service</h2>
            <div>
                {renderBlocks(data)}
            </div>
        </div>
    );
};

const renderBlocks = (blocks) => {
    const {
        contentfulIconIntroBlock: blockData
    } = blocks;

    return (Object.entries(blockData).map(([_, el], i) => {
        const {
            description: {
                description
            } = {},
            icon: {
                url
            } = {},
            title = ''
        } = el;

        return (
            <div key={`IntroBlock-${i}`} className='IntroBlock-Wrapper'>
                <div className='IntroBlock-Image'>
                    <img src={url}/>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        );
    }));
};

export default IntroBlock;
