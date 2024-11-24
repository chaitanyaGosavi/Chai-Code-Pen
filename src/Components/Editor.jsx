import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

const Editor = (props) => {
  const { value, onChange, langColor, langTag, displayName, language } = props;
  const handleChange = function (editor, data, editorVal) {
    onChange(editorVal);
  };

  const [open, setOpen] = useState(true)

  return (
    <div className={`${open ? '' : 'flex-grow-0'} flex-1 h-full flex flex-col flex-grow justify-between w-full bg-[#313131] border-2 border-[#363636] border-t-transparent rounded-xl text-white`}>
      <div className='flex justify-between w-full'>
        <div className="flex justify-between items-center w-50% rounded-lg bg-[#8282827d] border-2" style={{ borderColor: langColor }}>
          <span className={`rounded-md flex-1 mx-2 w-[25px] md:w-[40px] text-sm md:text-xl text-center text-gray-950`} style={{ backgroundColor: langColor }}>{langTag}</span>
          <h2 className='p-1 text-sm md:text-lg text-gray-300 rounded-2xl flex-1'>{displayName}</h2>
        </div>
        <div className='bg-[#0f0f0f] flex-1 flex justify-end items-center'>
          <button className='left-1 w-6' onClick={() => setOpen(prevOpen => !prevOpen)}
          ><img src={`${open ? '/compress.png' : '/expand.png' }`} alt="" /></button>
        </div>
      </div>
      <div className='h-full p-2 max-h-full overflow-y-hidden overflow-x-hidden'>
        <ControlledEditor
          className='w-full bg-[#363636] h-full max-h-full scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-300'
          onBeforeChange={handleChange}
          value={value}
          options={{
            lineWrapping: true,
            lint: false,
            mode: language,
            theme: 'material',
            lineNumbers: true,
          }}
        />
      </div>
    </div>
  )
}

export default Editor
