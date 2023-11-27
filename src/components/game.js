import React, { useEffect, useState } from 'react';
import pierre from "../images/pierre.png";
import papier from "../images/papier.png";
import ciseaux from "../images/ciseaux.png";

export const Game = () => {

    //   const ButonPlayer = document.querySelectorAll('.buttonPlay');
    
    //   ButonPlayer.forEach(ButonPlayerEl => {
        //     ButonPlayerEl.addEventListener("click", () => {
            //       // Retirer la classe active de tous les boutons
            //       ButonPlayer.forEach(button => button.classList.remove('active'));
            
            //       // Ajouter la classe active uniquement au bouton cliqué
            //       ButonPlayerEl.classList.add('active');
            //     });
            //   });
const [playerGame, setPlayerGame] = useState("");     

const handleClick = (playerGame) => {
    // Utilisez buttonValue comme nécessaire
    
    // Ajoutez le reste de votre logique ici

    // Mettez à jour l'état si nécessaire
    console.log(playerGame);
    setPlayerGame(playerGame);
};
const [pcRespons, setPcRespons] = useState("");     
  const computerRespons = () => {
    const random = Math.random();
    if (random >= 0 && random < 1/3){
      setPcRespons('pierre');
      if(playerGame==="pierre"){
        console.log("egalité");
      } else if(playerGame==="papier"){
        console.log("gagné");
      }else if(playerGame==="ciseaux"){
        console.log("perdu");
      }
    } else if(random >= 1/3 && random <2/3){
      setPcRespons('papier');
      if(playerGame==="pierre"){
        console.log("perdu");
      } else if(playerGame==="papier"){
        console.log("egalité");
      }else if(playerGame==="ciseaux"){
        console.log("gagné");
      }
    } else if(random >= 2/3 && random <= 1){
      setPcRespons('ciseaux');
      if(playerGame==="pierre"){
        console.log("gagné");
      } else if(playerGame==="papier"){
        console.log("perdu");
      }else if(playerGame==="ciseaux"){
        console.log("egalité");
      }
    }
  }

  useEffect(() => {
    console.log(pcRespons);
  }, [pcRespons]);

  
  return (
    <>
      <h1>Pierre Papier Ciseaux</h1>
      <div className="buttonPlayer">
        <button className="buttonPlay pierre pierreTouche" onClick={() => {computerRespons(); handleClick("pierre")}}>
          <img src={pierre} alt=""/>-
        </button>
        <button className="buttonPlay papier papierTouche" onClick={() => {computerRespons(); handleClick("papier")}}>
          <img src={papier} alt=""/>
        </button>
        <button className="buttonPlay ciseaux ciseauxTouche" onClick={() => {computerRespons(); handleClick("ciseaux")}}>
          <img src={ciseaux} alt=""/>
        </button>
      </div>
    </>
  )
}