import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function App() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      setFile(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    }
  });


  return (
    <div className="App">
      <header className="App-header">
      <div className="upload-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p className="dropzone-text">Drop the file here ...</p>
          ) : (
            <p className="dropzone-text">Drag 'n' drop or click to upload</p>
          )
        }
      </div>
      {file && (
        <div className="uploaded-image-container">
          <img src={preview} alt="Uploaded Image" />
          <p className="uploaded-image-text">Uploaded Image</p>
        </div>
      )}
    </div>
      </header>
    </div>
  );
}

export default App;
