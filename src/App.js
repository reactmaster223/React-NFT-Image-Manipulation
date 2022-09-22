import logo from './logo.svg';
import './App.css';
import './custom.css'
import React, {useEffect, useState, useRef} from 'react';
import * as htmlToImage from 'html-to-image';
function App() {
  const [thought_text, setThoughtText] = useState("");
  const exportRef = useRef();
  const tokenID = 1;

  const screenShot = () => {
    var node = document.getElementById('exportImage');
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        var el = document.createElement("a");
        el.setAttribute("href", img.src);
        el.setAttribute("download", "fileName");
        document.body.appendChild(el);
        el.click();
        el.remove();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  const OldPaperOverlay = (classNameToAdd) => {
    var secondClassName = Array.from(document.getElementById("exportImage").classList)[1]
    document.getElementById("exportImage").classList.remove(secondClassName)
    document.getElementById("exportImage").classList.add(classNameToAdd)
  }
  const changeMouth = (mouthID) => {
    document.getElementById("changed_image4").src = require("./assets/mouth/" + mouthID + ".png");
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" style={{justifyContent : 'space-between'}}>
          <div >
            <p>NFT Image Manipulation</p>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='row'>
        <div className='col-5'>
          <h2>Output</h2>
            <div className="old-paper original" ref={exportRef} id="exportImage">
              <div     style={{mixBlendMode : 'multiply', display: 'inline-block'}}>
                <img className="original-image Zindex1" id='changed_image1' src={require("./assets/NFT/" + tokenID + "/1.png")} alt="background"/>
                <img className="original-image Zindex2" id='changed_image2' src={require("./assets/NFT/" + tokenID + "/2.png")} alt="body"/>
                <img className="original-image Zindex3" id='changed_image3' src={require("./assets/NFT/" + tokenID + "/3.png")} alt="clothes"/>
                <img className="original-image Zindex4" id='changed_image4' src={require("./assets/NFT/" + tokenID + "/4.png")} alt="head"/>
                <img className="original-image Zindex5" id='changed_image5' src={require("./assets/NFT/" + tokenID + "/5.png")} alt="eye"/>
                <img className="original-image Zindex6" id='changed_image6' src={require("./assets/NFT/" + tokenID + "/6.png")} alt="none"/>
                <img className="original-image Zindex7" id='changed_image7' src={require("./assets/NFT/" + tokenID + "/7.png")} alt="cap"/>
                <img className="thought-image Zindex8" id='thought' src={require("./assets/thought.png")}/>
                <h1 className='thought-text Zindex9' src={require("./assets/thought.png")} style={{color : 'black', fontFamily : 'Laffayette Comic Pro'}}>{thought_text}</h1>
                </div>
                <div class="overlay Zindex10">
                  <img src={require("./assets/old_paper.png")}/>
                </div>
            </div>
            
        </div>
        <div className='col-6'>
          <h3>CHOOSE MOUTH</h3>
          <div className='row'>
            <div className='col-3 change-mouth-btn' onClick={() => changeMouth(1)}>
              <img className="image" src={require("./assets/mouth/1.png")} alt="replace1"/>
            </div>
            <div className='col-3 change-mouth-btn' onClick={() => changeMouth(2)}>
              <img className="image" src={require("./assets/mouth/2.png")} alt="replace2"/>
            </div>
            <div className='col-3 change-mouth-btn' onClick={() => changeMouth(3)}>
              <img className="image" src={require("./assets/mouth/3.png")} alt="replace3"/>
            </div>
            <div className='col-3 change-mouth-btn' onClick={() => changeMouth(4)}>
              <img className="image" src={require("./assets/mouth/4.png")} alt="replace4"/>
            </div>
          </div>
          <h2>CHOOSE FILTER</h2>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('original')}}>Old Paper Overlay</button>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('black-and-white')}}>Black and White</button>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('sepia')}}>Sepia</button>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('warm')}}>Warm Colors</button>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('cold')}}>Cold Colors</button>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('tint-green')}}>Green Tint</button>
            <button type="button" className="btn btn-primary" onClick={()=>{OldPaperOverlay('tint-magenta')}}>Magenta Tint</button>
          <h3>ADD TEXT TO THOUGHT BOX</h3>
          <input type="text" value={thought_text} onChange={(e)=>setThoughtText(e.target.value)} style={{color : 'black'}}/>
          <br/>
          <button onClick={()=>screenShot()} type="button" className="btn btn-success">Capture</button>
        </div>
      </div>
    </div>
  );
}

export default App;
