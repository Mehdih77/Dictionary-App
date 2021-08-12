import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className='header pt-4'>
            <h2>Word....</h2>
            <input type="text" placeholder='Search a word...' />
        </div>
    )
}
