import React from "react";
import { useState } from "react";
// import { abi } from '../abi.json';
import Web3 from 'web3';


function App() {
 const [tokenAddress,setTokenAddress] = useState(null);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const token=e.target.tokeninfo.value;
  
    console.log("Token : " +token,"\n");
  }
  const handleChange=async(e)=>{
    const web3 = new Web3('https://ds2.spvnetwork.io');
    try{
      // const tokenContract = new web3.eth.Contract(abi, tokenAddress);
      // const symbol = await tokenContract.methods.symbol().call();
      // const name = await tokenContract.methods.name().call();
      if(symbol){
        console.log('valid');
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