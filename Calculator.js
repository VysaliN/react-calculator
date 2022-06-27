import React, { useState} from "react";
import "./Calculator.css";

const Calculator = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState("0");

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const enter = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      try {
        setResult(eval(data));
      } catch {
        alert("error");
      }
    };
  };
  const handleCalculate = (e) => {
    e.preventDefault();
    try {
      setResult(eval(data));
    } catch {
      alert("error");
    }
  };
  const clear = (e) => {
    e.preventDefault();
    setData("");
    setResult("0");
  };
  const back = (e) => {
    e.preventDefault();
    setData(data.slice(0, -1));
  };

  return (
    <div tabIndex="0" onKeyDown={enter}>
      <center>
        <h1>Calculator</h1>
        <div className="cal">
          <input
            type="text"
            name="result"
            className="input"
            value={data}
            onChange={handleChange}
          />
          <input type="text" name="data" className="res" value={result} />
          <br></br>
          <br></br>
          <button className="highlight" onClick={clear}>
            AC
          </button>
          <button className="highlight" onClick={back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-backspace-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 
        2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 
        2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"
              />
            </svg>
          </button>
          <button className="highlight" onClick={() => setData(data + "%")}>
            %
          </button>
          <button className="highlight" onClick={() => setData(data + "/")}>
            /
          </button>
          <br></br>

          <button onClick={() => setData(data + "7")}>7</button>
          <button onClick={() => setData(data + "8")}>8</button>
          <button onClick={() => setData(data + "9")}>9</button>
          <button className="highlight" onClick={() => setData(data + "*")}>
            *
          </button>
          <br></br>

          <button onClick={() => setData(data + "4")}>4</button>
          <button onClick={() => setData(data + "5")}>5</button>
          <button onClick={() => setData(data + "6")}>6</button>
          <button className="highlight" onClick={() => setData(data + "-")}>
            -
          </button>
          <br></br>

          <button onClick={() => setData(data + "1")}>1</button>
          <button onClick={() => setData(data + "2")}>2</button>
          <button onClick={() => setData(data + "3")}>3</button>
          <button className="highlight" onClick={() => setData(data + "+")}>
            +
          </button>
          <br></br>

          <button onClick={() => setData(data + "0")}>0</button>
          <button onClick={() => setData(data + ".")}>.</button>
          <button className="equal" onClick={handleCalculate}>
            =
          </button>
        </div>
      </center>
    </div>
  );
};

export default Calculator;
