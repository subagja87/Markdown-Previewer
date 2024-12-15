import { Remarkable } from 'remarkable';
import React from 'react';

const md = new Remarkable();

function renderMarkdownToHTML(markdown) {
    const renderedHTML = md.render(markdown);
    return { __html: renderedHTML };
}

export default function MarkdownPreview({markdown}) {
    const markup = renderMarkdownToHTML(markdown);
    
    return (
        <div dangerouslySetInnerHTML={markup} id='preview'/>
    )
}