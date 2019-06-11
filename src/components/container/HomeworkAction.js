import React from 'react';
import HomeworkView from '../presentational/HomeworkView';

const HomeworkAction = () => {
    const cards = [
        {
            image: '',
            subTitle: 'Card Label',
            mainTitle: 'Card Title',
            bottomTitle: 'Bottom Title',
            ratings: ['star', 'star', 'star', '', ''],
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: '',
            subTitle: 'Card Label',
            mainTitle: 'Card Title',
            bottomTitle: 'Bottom Title',
            ratings: ['star', 'star', 'star', 'star', ''],
            review: ''
        },
        {
            image: '',
            subTitle: 'Card Label',
            mainTitle: 'Card Title',
            bottomTitle: 'Bottom Title',
            ratings: ['star', 'star', '', '', ''],
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: '',
            subTitle: 'Card Label',
            mainTitle: 'Card Title',
            bottomTitle: 'Bottom Title',
            ratings: ['star', 'star', '', '', ''],
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]

    return (
        <HomeworkView 
          cards={cards}
        />
    )
}

export default HomeworkAction;