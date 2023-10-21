import React, { useState } from 'react';
function FormText(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked!');
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert('Converted to uppercase', 'success');
  };
  const handleLoClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleUndo = () => {
    let undoText = text;
    console.log(undoText);
    let lastIndex = undoText.lastIndexOf(' ');
    undoText = undoText.substring(0, lastIndex);
    setText(undoText);
  };
  const handleOnchange = (event) => {
    console.log('onchange');
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#1c1b1b' : '#fff',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary ms-2' onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-secondary ms-2' onClick={handleUndo}>
          Undo
        </button>
      </div>
      <div
        className='container my-3'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <p>
          {
            text
              .replace(/\n/g, ' ')
              .split(' ')
              .filter((value) => value != '').length
          }{' '}
          Words {text.trim().length} characters
        </p>
        <p>{(text.split(' ').length * 0.008).toFixed(2)} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : 'Enter your text in the textarea to preview here'}
        </p>
      </div>
    </>
  );
}

export default FormText;
