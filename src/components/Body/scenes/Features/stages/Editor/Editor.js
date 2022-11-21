import React, { useEffect } from 'react';
import './Editor.css'

function Editor() {
    useEffect(() => {

    }, []);

    return (
        <div id='editor'>
            <div id='editor__panel'>
                <p id='editor__mainMessage' className='reveal'>Integrate our editor with your data sources. Or upload files in .csv, .sql, and more.</p>
                <div id='editor__img' className='reveal'></div>
            </div>
            <div id='EDITOR'></div>
        </div>
    );
}
export default Editor;