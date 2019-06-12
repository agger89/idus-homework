import React, { useState, useEffect } from 'react';
import HomeworkView from '../presentational/HomeworkView';

const HomeworkAction = () => {
    const [value, setValue] = useState('')
    const [length, setLength] = useState(300)

    const cards = [
        {
            image: '',
            subTitle: 'Card Label',
            mainTitle: 'Card Title',
            bottomTitle: 'Bottom Title',
            ratings: ['star', 'star', 'star', '', ''],
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            image: '',
            subTitle: 'Card Label',
            mainTitle: 'Card Title',
            bottomTitle: 'Bottom Title',
            ratings: ['star', 'star', '', '', ''],
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ];

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const handleKeyup = (e) => {
        let content = e.target.value;
        setLength(length - content.length);
    }

    useEffect(() => {
        $('.write-textarea').placeholder();
        window.addEventListener('keyup', handleKeyup);
        return () => {
            window.removeEventListener('keyup', handleKeyup);
        }
    }, [])

    return (
        <HomeworkView 
          cards={cards}
          onChangeInput={onChangeInput}
          value={value}
          length={length}
        />
    )
}

export default HomeworkAction;