// IMPORTS
import { useState } from "react"
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import starterText from './starterText'
import "./App.css"

function App() {

  // VARIABLES
  const [text, setText] = useState(starterText)

  return (
    <div className="App">
      <section className="split">
      <p className="section-title">Markdown</p>
      <textarea 
        autoFocus
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      </section>
      <section>
      <p className="section-title">Preview</p>
      <ReactMarkdown 
        children={text}
        className="markdown"
        renders={{
          code: Component, 
        }}
      />
      </section>
    </div>
  );
}
const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language == null ? '' : language} style={docco}>
      {value == null ? '' : value}
    </SyntaxHighlighter>
  );
};
export default App;