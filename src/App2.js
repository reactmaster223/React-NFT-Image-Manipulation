import logo from './logo.svg';
import './App.css';
import './custom.css'
import React, {useEffect, useState, useRef} from 'react';
import * as htmlToImage from 'html-to-image';
function App() {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [hue_rotate, setHueRotate] = useState(0);
  const [thought_x_move, setThoughtXMove] = useState(0);
  const [thought_y_move, setThoughtYMove] = useState(0);
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
  const changeMouth = (mouthID) => {
    document.getElementById("changed_image4").src = require("./assets/mouth/" + mouthID + ".png");
  }
  return (
    <div className="App">
      <h2>React Image Manipulation App</h2>
      <div className='row'>
        <div className='col-4'>
          <h2>Source Image</h2>
          <h3>Original NFT Image</h3>
          <img className="image" src={require("./assets/NFT/" + tokenID + ".png")} alt="original image"/>
        </div>
        <div className='col-4'>
          <h2>Apply filter effects</h2>
          <h3>Brightness</h3>
          <div className="slidecontainer">
          <input type="range" min="1" max="100" value={brightness} onChange={(e)=>setBrightness(e.target.value)} className="slider" />
          </div>
          <h3>Contrast</h3>
          <div className="slidecontainer">
          <input type="range" min="1" max="100" value={contrast} onChange={(e)=>setContrast(e.target.value)} className="slider" />
          </div>
          <h3>Saturate</h3>
          <div className="slidecontainer">
          <input type="range" min="1" max="100" value={saturate} onChange={(e)=>setSaturate(e.target.value)} className="slider" />
          </div>
          <h3>Sepia</h3>
          <div className="slidecontainer">
          <input type="range" min="1" max="100" value={sepia} onChange={(e)=>setSepia(e.target.value)} className="slider" />
          </div>
          <h3>Hue Rotate</h3>
          <div className="slidecontainer">
          <input type="range" min="0" max="360" value={hue_rotate} onChange={(e)=>setHueRotate(e.target.value)} className="slider" />
          </div>
          <h3>Thought bubble</h3>
          <h3>Horizontal</h3>
          <div className="slidecontainer">
          <input type="range" min="0" max="65" value={thought_x_move} onChange={(e)=>setThoughtXMove(e.target.value)} className="slider" />
          </div>
          {/* <input type="checkbox" /><label>Horizontal Flip</label> */}
          <h3>Vertical</h3>
          <div className="slidecontainer">
          <input type="range" min="0" max="65" value={thought_y_move} onChange={(e)=>setThoughtYMove(e.target.value)} className="slider" />
          </div>
          <h3>Overlay Image - Mouth</h3>
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
          <h3>Thought Text</h3>
          <input type="text" value={thought_text} onChange={(e)=>setThoughtText(e.target.value)}/>
        </div>
        <div className='col-4'>
          <h2>Output</h2>
            <div className="old-paper" ref={exportRef} id="exportImage"
            style={{
              filter : "brightness(" + brightness + "%)" +
                "contrast(" + contrast + "%)" + 
                "saturate(" + saturate + "%)" + 
                "sepia(" + sepia + "%)" + 
                "hue-rotate(" + hue_rotate + "deg)"
                
              }}>
                <img className="original-image Zindex1" id='changed_image1' src={require("./assets/NFT/" + tokenID + "/1.png")} alt="background"/>
                <img className="original-image Zindex2" id='changed_image2' src={require("./assets/NFT/" + tokenID + "/2.png")} alt="body"/>
                <img className="original-image Zindex3" id='changed_image3' src={require("./assets/NFT/" + tokenID + "/3.png")} alt="clothes"/>
                <img className="original-image Zindex4" id='changed_image4' src={require("./assets/NFT/" + tokenID + "/4.png")} alt="head"/>
                <img className="original-image Zindex5" id='changed_image5' src={require("./assets/NFT/" + tokenID + "/5.png")} alt="eye"/>
                <img className="original-image Zindex6" id='changed_image6' src={require("./assets/NFT/" + tokenID + "/6.png")} alt="none"/>
                <img className="original-image Zindex7" id='changed_image7' src={require("./assets/NFT/" + tokenID + "/7.png")} alt="cap"/>
                <img className="thought-image Zindex8" id='thought' src={require("./assets/thought.png")} style={{
                  top : thought_x_move + "%",
                  left : thought_y_move + "%"
                }}/>
                <h1 className='thought-text Zindex9' src={require("./assets/thought.png")} style={{
                  top : thought_x_move + "%",
                  left : thought_y_move + "%"
                }}>{thought_text}</h1>
            </div>
            
            <button onClick={()=>screenShot()}
            >Capture</button>
        </div>
      </div>
    </div>
  );
}

export default App;
