import React from "react";
import { useState } from "react";
const abi=require('../abi.json');
import Web3 from 'web3';

//  import { ethers } from "ethers";


function App() {
 const [tokenAddress,setTokenAddress] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const token=e.target.tokeninfo.value;
  
    console.log("Token : " +token,"\n");
  }
  const handleChange=async(e)=>{
    //  const provider = new ethers.providers.Web3Provider(window.ethereum);
     const web3 = new Web3('https://ds2.exx.network/');
    try{
      const tokenContract = new web3.eth.Contract(abi, tokenAddress);
      const symbol = await tokenContract.methods.symbol().call();
      const name = await tokenContract.methods.name().call();
      if(symbol){
        console.log('valid',name);
      }
      else
      {
        console.log('not valid');
      }
    }
    catch(err){
      console.log(err);

    }
  }
  
        
        return (
            <div className="Homepage">
            <h1>
                Hello Homepage
            </h1>
             <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="token">tokeninfo</label>
                <input type="text" value = {tokenAddress} id="tokeninfo" onChange={(e)=>setTokenAddress(e.target.value)}  />
                
              </div>
              <button type="proceed" className="proceed-btn" onClick={handleChange}>
                Proceed
              </button>
            </form>
            
          </div>
          
        );
        }
        
    

export default App;