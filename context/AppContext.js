import React, {useState,createContext, useContext} from 'react';
import Web3 from "web3";
const AppContext = createContext();

export const AppContextWrapper=({children})=>{
  
  const [web3, setWeb3] = useState({});
  const [address, setAddress] = useState(null);
  
 
    const connectWallet=async( )=>{
      if
          (window.ethereum ){
            window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
              setAddress(accounts[0])
              let w3 = new Web3(window.ethereum)
              setWeb3(w3)
             console.log('account',accounts)
            }).catch((err) => console.log(err))
          }
          else{
            console.log("install metamask");
          }
        
    }
    let sharedState={
      web3,
      setWeb3,
      address,
      setAddress,
      connectWallet,
      
      
      
      

    }
   
    return(
      
         
      <AppContext.Provider value={sharedState}> {children}</AppContext.Provider>
            
            
    )
    
}
export function useAppContext() {
  return useContext(AppContext);
}


