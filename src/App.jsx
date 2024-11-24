import './App.css'
import React, { useState, useEffect } from 'react'
import NavBar from './Components/NavBar'
import OutputContainer from './Components/OutputContainer'
import Editor from './Components/Editor'
import useLocalStorage from './hooks/useLcalStorage'

function App() {

  const [html, setHtml] = useLocalStorage('html','');
  const [css, setCss] = useLocalStorage('css','');
  const [js, setJs] = useLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `);

  return () => clearTimeout(timeOut);
    }, 500);
  }, [html, css, js])




  return (
    <>
      <NavBar />
      <div className='flex flex-col w-[100vw] h-[93vh] bg-slate-700 justify-between'>
        <div className="bg-[#121212] flex-1 w-full h-1/2 flex gap-5 p-2 overflow-x-scroll md:overflow-x-hidden">
          <Editor value={html} onChange={setHtml} langColor='#ff5c4e' langTag='</>' displayName='HTML' language='xml' />
          <Editor value={css} onChange={setCss} langColor='#57a0ff' langTag='#' displayName='CSS' language='css' />
          <Editor value={js} onChange={setJs} langColor='#f9ff43' langTag='{ }' displayName='JS' language='javascript' />
        </div>
        <OutputContainer srcDoc={srcDoc} />
      </div>
    </>
  )
}

export default App
