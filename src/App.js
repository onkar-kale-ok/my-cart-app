import React, { useState } from 'react';
import './App.css'; // You can create your CSS file for styling

function App() {
  const [middleBoxExpanded, setMiddleBoxExpanded] = useState(false);
  const [bottomBoxExpanded, setBottomBoxExpanded] = useState(false);
  const [topBoxExpanded, setTopBoxExpanded] = useState(false);
  const [totalAmount,setTotalAmount] = useState(360)

  const toggleMiddleBox = () => {
    setTotalAmount(345)

    setMiddleBoxExpanded(!middleBoxExpanded);
    if (bottomBoxExpanded) {
      setBottomBoxExpanded(!bottomBoxExpanded);
    }
    if (topBoxExpanded) {
      setTopBoxExpanded(!topBoxExpanded);
    }

  };

  const toggleBottomBox = (e) => {
    console.log('e.target', e.target, "e", e)
    setTotalAmount(528)

    setBottomBoxExpanded(!bottomBoxExpanded);

    if (topBoxExpanded) {
      setTopBoxExpanded(!topBoxExpanded);
    }
    if (middleBoxExpanded) {
      setMiddleBoxExpanded(!middleBoxExpanded);
    }
  };

  const toggleTopBox = () => {
    setTotalAmount(195)
    setTopBoxExpanded(!topBoxExpanded);
    if (bottomBoxExpanded) {
      setBottomBoxExpanded(!bottomBoxExpanded);
    }
    if (middleBoxExpanded) {
      setMiddleBoxExpanded(!middleBoxExpanded);
    }
  };

  const selectedValue = (e) => {
    console.log('e.target.value -- selectedValue', e)
  }

  return (

    <div className="container">
      <h2 className='pageTitle'>Bundle & Save</h2>
      <div className="box">

        <input
          type="radio"
          name="address"
          value={topBoxExpanded}
          checked={topBoxExpanded == true}
          onClick={toggleTopBox}
        />

        <h4>1 pair</h4>
        <p style={{ textAlign: 'right', color: 'black' }}>50% OFF </p>

        <h4>DKK 195.000</h4>
        {topBoxExpanded && (
          <><div className="options">
            <label className="labelStyle">colour</label>
            <div className="colorOptions">
              <select name="topColor">
                <option value="red">Colour</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div><br />
            <div className="options2">
              <label>Size</label>

              <select name="topSize">
                <option value="small">S</option>
                <option value="small">M</option>
                <option value="medium"></option>
              </select>
            </div>
          </div>
            <div>

              <label className="labelStyle">Colour</label>
              <select name="topColor2" className="dropdownStyle">
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
              </select>
              <label>Size</label>
              <select name="topSize">
                <option value="small">S</option>
                <option value="small">M</option>
              </select>            </div></>

        )}
      </div>

      <div className="box">

        <input
          type="radio"
          name="address"
          value={middleBoxExpanded}
          checked={middleBoxExpanded == true}
          onClick={toggleMiddleBox}
        />

        <h4>2 pair</h4>
        <p style={{ textAlign: 'right', color: 'green' }}>Most Popular</p>
        <p style={{ textAlign: 'right', color: 'black' }}>40% OFF </p>

        <h4>DKK 345.000</h4>
        {middleBoxExpanded && (
          <><div className="options">
            <label className="labelStyle">colour</label>
            <div className="colorOptions">
              <select name="topColor">
                <option value="red">Colour</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div><br />
            <div className="options2">
              <label>Size</label>

              <select name="topSize">
                <option value="small">S</option>
                <option value="small">M</option>
                <option value="medium"></option>
              </select>
            </div>
          </div>
            <div>

              <label className="labelStyle">Colour</label>
              <select name="topColor2" className="dropdownStyle">
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
              </select>
              <label>Size</label>
              <select name="topSize">
                <option value="small">S</option>
                <option value="small">M</option>
              </select>            </div></>

        )}
      </div>

      <div className="box" >
        <input
          type="radio"
          name="address"
          value={bottomBoxExpanded}
          checked={bottomBoxExpanded == true}
          onClick={toggleBottomBox}
        />
        <h4>3 pair</h4>
        <p style={{ textAlign: 'right', color: 'black' }}>60% OFF </p>
        <h4>DKK 528.00</h4>
        {bottomBoxExpanded && (
          <>    <div className="options">
            <label className="labelStyle">colour</label>
            <div className="colorOptions">
              <select name="topColor" onChange={selectedValue()}>
                <option value="red">Colour</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div><br />
            <div className="options2">
              <label>Size</label>

              <select name="topSize">
                <option value="small">S</option>
                <option value="small">M</option>
                <option value="medium"></option>
              </select>
            </div>
          </div>
            <div>

              <label className="labelStyle">Colour</label>
              <select name="topColor2" className="dropdownStyle">
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
              </select>
              <label>Size</label>
              <select name="topSize">
                <option value="small">S</option>
                <option value="small">M</option>
              </select>            </div></>

        )}
      </div>
      <div>
        <h4>Free 2 days shipping           Total : DKK {totalAmount}  </h4>

        <button type='text' className="customButton" >+ Add to Cart</button>

      </div>

    </div>



  );
}

export default App;
