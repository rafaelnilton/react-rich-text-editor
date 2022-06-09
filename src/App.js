import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function App() {
  const [value, setValue] = useState('');

  const handleChange = (v) => {
    setValue(v)
    console.log(v)
  }


  return (
    <>
      <h1>Editor</h1>
      <ReactQuill theme="snow" value={value} onChange={(v) => handleChange(v)}/>
    </>
  );
}