import React from "react";

function App1() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const Lock=e.target.lock1.value;
    const Time=e.target.time1.value;
    console.log("Amount to lock : " +Lock,"\n","Liquidity unlock time : " +Time);
  }
        return (
            <div className="app">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="Lock">Amount to lock</label>
                <input type="text" id="Amount to lock" name="lock1"/>
              </div>
              <div className="input-group">
                <label htmlFor="time">Liquidity unlock time</label>
                <input type="text" id="Liquidity unlock time" name="time1"/>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="approave" className="approave-btn">
               
                Approave
              </button>
            </form>
          </div>
        );
        }
    
    

export default App1;