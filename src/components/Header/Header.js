import React from 'react';
import './Header.css';
import categories from '../../lib/Categories';


export default function Header({word,setWord,setCategory}) {
    return (
        <header className='header pt-4'>
            <h2>{word ? word : 'Dictionary App'}</h2>
            <div>
                <input value={word} onChange={(e) => setWord(e.target.value)} 
                type="text" placeholder='Search a word...' />

                <select onChange={(e) => setCategory(e.target.value)}>

                {categories.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                ))}

                </select>
            </div>
        </header>
    )
}
