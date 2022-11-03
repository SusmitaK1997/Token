import React from "react";
import Web3 from 'web3';
import { useState } from "react";
const abi1=require('../abi1.json');

function App1() {
   const [amount,setamount] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const Lock=e.target.lock1.value;
    const Time=e.target.time1.value;
    console.log("Amount to lock : " +Lock,"\n","Liquidity unlock time : " +Time);
  }
    const check=async(e)=>{
   
      const web3 = new Web3('https://bsc-dataseed1.binance.org/');
      
      
     try{
        const lptoken_ADDRESS= '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE';
        const spenderAddr= '0xd1b508360a1286d5A4071a67224Be387d85cb75E';
        const Contract = new web3.eth.Contract(abi1, lptoken_ADDRESS);
        const owner = '0x763702343200F8f851450EA514DD7488BFd2d408';
      
       const allow = await Contract.methods.allowance(spenderAddr, owner).call();
       
       
       if(allow>0){
        console.log('allowence',allow);
       }
       else{
       await Contract.methods.approve(spenderAddr, amount).send({ from: owner });
        console.log('Approave');
       }
       
       
      }
     catch(err){
       console.log('error');
 
     }
   
  }
        return (
            <div className="app">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="Lock">Amount to lock</label>
                <input type="text" value = {amount} id="Amount to lock" name="lock1" onChange={(e)=>setamount(e.target.value)}/>
              </div>
              <div className="input-group">
                <label htmlFor="time">Liquidity unlock time</label>
                <input type="text"  id="Liquidity unlock time" name="time1" />
              </div>
              <button type="submit" className="submit-btn" onClick={check}>
                Submit
              </button>
              <button type="approave" className="approave-btn" >
               
                Approave
              </button>
            </form>
          </div>
        );
        }
    
    

export default App1;