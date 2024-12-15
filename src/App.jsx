import { useState } from 'react';
import React from 'react';
import { FaCode, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa'; 
import MarkdownPreview from './MarkdownToHTML';

export default function App() {
  const [markdown, setMarkdown] = useState('# Heading 1\n## Heading 2\n### Heading 3\n'
    +'\n**bold text**\n'
    +'\n*italic text*\n'
    +'1. Ordered list first item\n2. Ordered list second item'
    +'\n\n[Link](https://www.freecodecamp.org)'
    +'\n\nan element of code between backticks `<div></div>`'
    +'\n\n```\n//This is multi-line code:\n<header>\n\t<h1>Title<h1>\n</header>\n```'
    +'\n\n\> Block Quotes!\n'
    +'\n![image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)');
  
  const [showEditor, setShowEditor] = useState(true);
  const [showPreviewer, setShowPreviewer] = useState(true);
  
  const toggleEditor = () => {
    setShowPreviewer(!showPreviewer);
  };

  const togglePreviewer = () => {
    setShowEditor(!showEditor);
  };
  
  return (
    <div className='container'>
      {showEditor && (
        <div className='container-editor'>
          <header>
            <FaCode />
            <h4>Markdown Editor</h4>
            <a href='#' onClick={(e) => { e.preventDefault(); toggleEditor(); }}>
              {(showEditor && !showPreviewer) ? <FaWindowMinimize /> : <FaWindowMaximize />}
            </a>
          </header>
          <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} id="editor"></textarea>
        </div>
      )}
      {showPreviewer && (
        <div className='container-previewer'>
          <header>
            <FaCode />
            <h4>Previewer</h4>
            <a href='#' onClick={(e) => { e.preventDefault(); togglePreviewer(); }}>
              {(showPreviewer && !showEditor) ? <FaWindowMinimize /> : <FaWindowMaximize />}
            </a>
          </header>
          <MarkdownPreview markdown={markdown} />
        </div>
      )}
    </div>
  )
}
