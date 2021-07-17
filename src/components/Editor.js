import React from 'react'
import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/snippets/javascript';
import 'ace-builds/src-min-noconflict/mode-css';
import 'ace-builds/src-min-noconflict/snippets/css';
import 'ace-builds/src-noconflict/theme-vibrant_ink'
import 'ace-builds/src-noconflict/theme-pastel_on_dark'
import 'ace-builds/src-noconflict/theme-merbivore'

export default function Editor(props) {
    const { lang, theme, onChange, value } = props
    let onEditorChange = (value) => {
        onChange(value)
    }
    return (
        <div className="editor-container">
            <AceEditor
                mode={lang}
                onChange={onEditorChange}
                value={value}
                width="100%"
                theme={theme}
                focus={true}
                editorProps={{ $blockScrolling: true }}
                wrapEnabled={true}
                highlightActiveLine={true}
                autoScrollEditorIntoView={true}
                fontSize={16}
                className="ace-wrapper"
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                    showGutter: true
                }}
            />
        </div>

    )
}