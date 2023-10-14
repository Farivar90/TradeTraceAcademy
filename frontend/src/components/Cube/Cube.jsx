import React from 'react';
import './Cube.css';
import { Link } from 'react-router-dom';


const Cube = () => {
  return (
    <div className="cube-container">
      	<div className="cube">
        {/* Front Face  */}
        <div className="face front" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>A1</span>
            <span style={{"--i": "2"}}>A2</span>
            <span style={{"--i": "1"}}>A3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>A4</span>
            <span style={{"--i": "2"}}>A5</span>
            <span style={{"--i": "1"}}>A6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>A7</span>
            <span style={{"--i": "2"}}>A8</span>
            <span style={{"--i": "1"}}>A9</span>
        </div>
		{/* Front Face */}
        <div className="face front" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>B1</span>
            <span style={{"--i": "2"}}>B2</span>
            <span style={{"--i": "1"}}>B3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>B4</span>
            <span style={{"--i": "2"}}>B5</span>
            <span style={{"--i": "1"}}>B6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>B7</span>
            <span style={{"--i": "2"}}>B8</span>
            <span style={{"--i": "1"}}>B9</span>
        </div>
		{/* Front Face  */}
        <div className="face front" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>C1</span>
            <span style={{"--i": "2"}}>C2</span>
            <span style={{"--i": "1"}}>C3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>C4</span>
            <span style={{"--i": "2"}}>C5</span>
            <span style={{"--i": "1"}}>C6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>C7</span>
            <span style={{"--i": "2"}}>C8</span>
            <span style={{"--i": "1"}}>C9</span>
        </div>
	</div>
	<div className="cube">
		{/* Front Face  */}
        <div className="face front" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>D1</span>
            <span style={{"--i": "2"}}>D2</span>
            <span style={{"--i": "1"}}>D3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>D4</span>
            <span style={{"--i": "2"}}>D5</span>
            <span style={{"--i": "1"}}>D6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>D7</span>
            <span style={{"--i": "2"}}>D8</span>
            <span style={{"--i": "1"}}>D9</span>
        </div>
		{/* Front Face  */}
        <div className="face front" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>E1</span>
            <span style={{"--i": "2"}}>E2</span>
            <span style={{"--i": "1"}}>E3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>E4</span>
            <span style={{"--i": "2"}}>E5</span>
            <span style={{"--i": "1"}}>E6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>E7</span>
            <span style={{"--i": "2"}}>E8</span>
            <span style={{"--i": "1"}}>E9</span>
        </div>
		{/* Front Face  */}
        <div className="face front" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>F1</span>
            <span style={{"--i": "2"}}>F2</span>
            <span style={{"--i": "1"}}>F3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>F4</span>
            <span style={{"--i": "2"}}>F5</span>
            <span style={{"--i": "1"}}>F6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>F7</span>
            <span style={{"--i": "2"}}>F8</span>
            <span style={{"--i": "1"}}>F9</span>
        </div>
	</div>
	<div className="cube">
		{/* Front Face  */}
        <div className="face front" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>G1</span>
            <span style={{"--i": "2"}}>G2</span>
            <span style={{"--i": "1"}}>G3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>G4</span>
            <span style={{"--i": "2"}}>G5</span>
            <span style={{"--i": "1"}}>G6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "-1", "--y": "0"}}>
            <span style={{"--i": "3"}}>G7</span>
            <span style={{"--i": "2"}}>G8</span>
            <span style={{"--i": "1"}}>G9</span>
        </div>
		{/* Front Face  */}
        <div className="face front" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>USD/CHF</span>
            <span style={{"--i": "2"}}>H2</span>
            <span style={{"--i": "1"}}>H3</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>H4</span>
            <span style={{"--i": "2"}}>H5</span>
            <span style={{"--i": "1"}}>H6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "0", "--y": "0"}}>
            <span style={{"--i": "3"}}>H7</span>
            <span style={{"--i": "2"}}>H8</span>
            <span style={{"--i": "1"}}>H9</span>
        </div>
		{/* Front Face  */}
        <div className="face front" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}} onClick={() => window.location.href='https://www.tradingview.com/symbols/EURUSD/'}
            >EUR/USD</span>
            <span style={{"--i": "2"}} onClick={() => window.location.href='https://www.tradingview.com/symbols/USDJPY/'}
            >USD/JPY</span>
            <span style={{"--i": "1"}} onClick={() => window.location.href='https://www.tradingview.com/symbols/GBPUSD/'}
            >GBP/USD</span>
        </div>
        {/* Top Face  */}
        <div className="face top" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>I4</span>
            <span style={{"--i": "2"}}>I5</span>
            <span style={{"--i": "1"}}>I6</span>
        </div>
        {/* Left Face  */}
        <div className="face left" style={{"--x": "1", "--y": "0"}}>
            <span style={{"--i": "3"}}>I7</span>
            <span style={{"--i": "2"}}>I8</span>
            <span style={{"--i": "1"}}>I9</span>
        </div>
	</div>
    </div>
  );
};

export default Cube;
