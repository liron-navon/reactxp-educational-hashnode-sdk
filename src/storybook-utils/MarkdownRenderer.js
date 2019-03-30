import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {prism} from "react-syntax-highlighter/dist/styles/prism";
import ReactMarkdown from "react-markdown";

// highlight the syntax of code blocks
const CodeHighlightRenderer = ({value, language = null}) => {
    return (
        <div style={{overflow: 'scroll', padding: '8px'}}>
            <SyntaxHighlighter language={language} style={prism}>
                {value}
            </SyntaxHighlighter>
        </div>
    );
};

const inlineCodeHighlighter = ({value}) => (
    <code style={{
        backgroundColor: 'rgb(245, 242, 240)',
        borderRadius: '3px',
        padding: '1px 2px'
    }}>
    {value}
    </code>
);
// renders markdown content
const MarkdownRenderer = ({source}) => {
    return <ReactMarkdown
        source={source}
        renderers={{
            code: CodeHighlightRenderer,
            inlineCode: inlineCodeHighlighter
        }}/>
};

export default MarkdownRenderer;
