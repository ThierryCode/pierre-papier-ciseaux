import React, { useEffect, useState, useRef } from 'react'
import pierre from "../images/pierre.png"
import papier from "../images/papier.png"
import ciseaux from "../images/ciseaux.png"

export const Game = () => {
    const [pcRespons, setPcRespons] = useState (""); 
    const buttonRef = useRef("")
    const computerRespons = () =>{
        const touchPlayer = buttonRef.current.getAttribute('data-value');
        let random = Math.random();
        if (random >= 0 && random < 1/3){
            setPcRespons ('pierre');
            if(touchPlayer==="pierreTouch"){
                console.log("egalité");
            } else if(touchPlayer==="papierTouch"){
                console.log("perdu");
            } else if(touchPlayer==="ciseauTouch"){
                console.log("gagné");
            }
        }else if(random >= 1/3 && random <2/3){
            setPcRespons ('papier');
        }else if(random >= 2/3 && random < 1){
            setPcRespons ('ciseaux');
        }
    }
    useEffect(()=>
    {
        console.log(pcRespons);
    } 
    ,[pcRespons]);


  return (
    <>
        <h1>Pierre Papier Ciseaux</h1>
        <div className="buttonPlayer">
            <button ref={buttonRef} className="pierre pierreTouche" onClick={computerRespons} data-value="pierreTouch">
                <img src={pierre} alt=""/>-
            </button>
            <button className="papier papierTouche" onClick={computerRespons} data-value="papierTouch">
                <img src={papier} alt=""/>
            </button>
            <button className="ciseaux ciseauxTouche" onClick={computerRespons} data-value="ciseauTouch">
                <img src= {ciseaux} alt=""/>
            </button>
        </div>
    </>
  )
}
