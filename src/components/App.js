import React, { useState, useEffect } from "react";
import Editor from "./Editor";

function App() {
    // code content
    const [html, setHTML] = useState('')
    const [css, setCSS] = useState('')
    const [javascript, setJavaScript] = useState('')

    // set live view content
    const [srcDoc, setSrcDoc] = useState('fd')

    // reload everytime code changes
    useEffect(() => {
        console.log(html)
        setSrcDoc(`<html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${javascript}</script>
        </html>`)
    }, [html, css, javascript])

    // switch code tabs
    const selectSection = (event, navbarName) => {
        let navbarContent, navbarLinks;
        navbarContent = document.getElementsByClassName("navbar-content");
        for (let i = 0; i < navbarContent.length; i++) {
            navbarContent[i].style.display = "none";
        }
        navbarLinks = document.getElementsByClassName("navbar-links");
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].className = navbarLinks[i].className.replace(" active", "");
        }
        document.getElementsByClassName(navbarName)[0].style.display = "block";
        event.currentTarget.className += " active";
    }

    return (
        <div className="container">
            <div className="navbar nav-head">
                <div className="navbar-title">
                    CODE EDITOR
                </div>
                <div className="navbar-button">
                    <button className="navbar-links active html-button" autoFocus autofocus onClick={(event) => selectSection(event, 'htmlcontent')}>index.html</button>
                    <button className="navbar-links" onClick={(event) => selectSection(event, 'csscontent')}>index.css</button>
                    <button className="navbar-links" onClick={(event) => selectSection(event, 'jscontent')}>index.js</button>
                </div>
            </div>
            <div className="navbar live-head">Live View</div>
            <div className="section code">
                <div className="navbar-content htmlcontent active">
                    <Editor className="editor" lang="html" theme="vibrant_ink" value={html} onChange={setHTML} />
                </div>
                <div className="navbar-content csscontent">
                    <Editor className="editor" lang="css" theme="pastel_on_dark" value={css} onChange={setCSS} />
                </div>
                <div className="navbar-content jscontent">
                    <Editor className="editor" lang="javascript" theme="merbivore" value={javascript} onChange={setJavaScript} />
                </div>
            </div>
            <div className="section live">
                <iframe
                    title="live"
                    srcDoc={srcDoc}
                    sandbox="allow-script"
                    width="100%"
                    height="100%"
                    frameBorder="none"
                />
            </div>
        </div>
    );
}

export default App;