import React from 'react';
import {storiesOf} from '@storybook/react';
import Avatar from './Avatar';

storiesOf('components|Avatar', module)
    .add('default',
        () => {
            const simpsons = [
                {
                    name: 'homer',
                    image: 'http://www.simpsoncrazy.com/content/pictures/homer/HomerSimpson13.gif'
                },
                {
                    name: 'marge',
                    image: 'http://www.simpsoncrazy.com/content/pictures/marge/MargeSimpson2.gif'
                },
                {
                    name: 'bart',
                    image: 'https://vignette.wikia.nocookie.net/de.simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20171106184048'
                },
                {
                    name: 'lisa',
                    image: 'https://media.proprofs.com/images/QM/user_images/2165479/1509021108.png'
                },
                {
                    name: 'maggie',
                    image: 'https://pbs.twimg.com/profile_images/802778138711232513/MkA6OMNq_400x400.jpg'
                }
            ];

            const avatarStyle = {
                width: 100,
                height: 100
            };

            return (
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    {
                        simpsons
                            .map(({name, image}) =>
                                <Avatar style={avatarStyle}
                                        source={image}
                                        accessibilityLabel={`avatar of ${name} simpson`}
                                />)
                    }
                </div>
            )
        },
        {info: {components: {Avatar}}});
