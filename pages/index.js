import React from "react";
import Web3 from "web3";
import { useState } from "react";
import { useAppContext } from '../context/AppContext';
const abi1 = require("../abi1.json");
const BigNumber = require('bignumber.js');

function App1() {
  //const web3 = new Web3(window.ethereum);
  // const web3 = new Web3("https://bsc-dataseed1.binance.org/");
  const spenderAddr = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
  const lptoken_ADDRESS = "0x6C64f62123A33827268667BCE5c8472C0a584F87";
  const [amount, setamount] = useState("");
  const [show, setshow] = useState(true);
  
  let { connectWallet,address,web3}= useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const Lock = e.target.lock1.value;
    //const Time = e.target.time1.value;
    // console.log(
    //   "Amount to lock : " + Lock,
    //   "\n",
    //   "Liquidity unlock time : " + Time
    // );
  };
  const check = async (e) => {
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
    
    try {
      const Contract = new web3.eth.Contract(abi1, lptoken_ADDRESS);
      const allow = await Contract.methods.allowance(address,spenderAddr).call();
      console.log("allowence",Number(allow));
      if (Number(allow) > Number(e.target.value)){
        console.log("allowence", allow);
        setshow(true);
      } else {
        
        //Approave();
        setshow(false);
        
      }
    } catch (err) {
      console.log("error");
    }
  };

  const handleAmountChange = (e) => {
    setamount(e.target.value);
    check(e);
  };
  
  const Approave =async(e)=>{
    
   try{
      const Contract = new web3.eth.Contract(abi1, lptoken_ADDRESS);
      // let amount = new BigNumber('99999999999999999999');
      // console.log(amount);
      await Contract.methods.approve(spenderAddr, '9999999999').send({ from: address })
      console.log("Approave");
      location.reload();
    }
   catch(err){
    console.log(err);
   }
  }
  
  return (
    <div className="app">
      <button  onClick={connectWallet}>
                Connect Wallet        
      </button>
      { address ?(
      <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="Lock">Amount to lock</label>
          <input
            type="text"
            value={amount}
            id="Amount to lock"
            name="lock1"
            onChange={handleAmountChange}
          />
         </div> 
        <div className="input-group">
          <label htmlFor="time">Liquidity unlock time</label>
          <input type="text" id="Liquidity unlock time" name="time1" />
        </div>
        {show ? (
          <button type="submit" className="submit-btn" onClick={check} >
            Submit
          </button>
        ) : (
          <button type="approave" className="approave-btn" onClick={Approave}>
            Approave
          </button>
        )}
        </form>
          </>
        ):(
          <></>
          )}  
    </div>
    
  );
}

export default App1;
