import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Textdata from './Textdata';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formdetal, setformdetal] = useState(false);
  const [cardDetails, setcardDetails] = useState([]);
  const [totalpages, settotalpages] = useState(1);
  const [pageno, setpageno] = useState(1);
  const [loading, setloading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      setFile(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    }
  });


  useEffect(() => {

   if(file){ const formdata = new FormData();

    formdata.append('image', file);
    setloading(true) 

    axios.post("https://schoolback.vercel.app/airdeal/upload", formdata).then((response) => {

    

      if (response.data.status === 200) {
        setformdetal(true);
        getCardData();
        toast.success(response.data.msg, { autoClose: 3000 });
      } else {
        toast.error(response.data.msg, { autoClose: 3000 });
      }

    }).finally(()=>setloading(false))}


  }, [file])




  const getCardData = () => {
    setloading(true)

    axios.post("https://schoolback.vercel.app/airdeal/cards", { page: pageno }).then((dataResponse) => {

    
      settotalpages(dataResponse.data.totalPages)
      setcardDetails(dataResponse.data.data);
    }).finally(()=>setloading(false));
  }


  useEffect(() => {
    getCardData();
  }, [pageno])






  return (
    <div className="App">
      <ToastContainer />
      {
        loading && (<Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={true}          
        >
          <CircularProgress color="inherit" />
        </Backdrop>)
      }
      <header className="App-header">
        <div className="upload-container">
          {!formdetal && <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {
              isDragActive ? (
                <p className="dropzone-text">Drop the file here ...</p>
              ) : (
                <p className="dropzone-text">Drag 'n' drop or click to upload</p>
              )
            }
          </div>}
          {formdetal && file && (
            <>
              <div className="uploaded-image-container">
                <img src={preview} alt="Uploaded Image" />
                <p className="uploaded-image-text">Uploaded Image</p>
              </div>
              <button className='buttonstyle' onClick={() => { setformdetal(false) }} >Upload another Card</button>
            </>
          )}
        </div>
        {
          cardDetails.length > 0 && (
            <Textdata cardDetails={cardDetails} totalpages={totalpages} setpageno={setpageno} />
          )
        }
      </header >
    </div >
  );
}

export default App;
