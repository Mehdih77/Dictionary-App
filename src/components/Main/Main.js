import React from 'react';
import './Main.css';

export default function Main({meanings,word}) { 

    return (
        <div className='main'>
            { word && 
            <>
            <div className='main-definitions'>
            <audio src="" controls></audio>
            
            {meanings.map(mean => mean.meanings.map(item =>
             item.definitions.map(def => (
                <div className='definitions'>
                 <div className='definition'> <p>Definition:</p> {def.definition}</div>
                 <div className='example'> <p>Example:</p> {def.example}</div>
                 <div className='synonyms-word'> <p>Synonyms:</p> 
                    {def.synonyms.map(s => <span>{s}</span> )}
                 </div>
                </div>
             ))
             ))}
            
            </div>
            </>}
        
        </div>
    )
}
