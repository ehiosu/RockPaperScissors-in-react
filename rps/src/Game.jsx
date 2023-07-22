import React, { useEffect, useRef, useState } from "react";
import pentagon from "/images/bg-pentagon.svg";
import Scissors from "/images/icon-scissors.svg";
import Paper from "/images/icon-paper.svg";
import Spock from "/images/icon-spock.svg";
import Rock from "/images/icon-rock.svg";
import Lizard from "/images/icon-lizard.svg";
import close from "/images/icon-close.svg";
import rules from "/images/image-rules-bonus.svg";





export const Game = () => {
  const plays = {
    'scissors': ["paper", "lizard"],
    'paper': ["rock", "spock"],
    'rock': ["lizard", "scissors"],
    'spock': ["scissors", "rock"],
    'lizard': ["paper", "spock"],
    
  };


  const [gameState, setGameState] = useState({
    choiceSelected: false,
    userSelection: "",
    houseSelection: "",
    winner: "",
    score: 0,
  });

  const[modal,setModal]=useState(false)
  const modalRef=useRef(null)

  useEffect(() => {
    if (!gameState.choiceSelected) return;
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    const houseSelection = choices[Math.floor(Math.random() * choices.length)];

    setGameState((state) => ({
      ...state,
      houseSelection,
    }));

    
    
 
    
  }, [gameState.choiceSelected]);

  useEffect(()=>{
    if(gameState.houseSelection!='')
    {
      setTimeout(() => {
        resolveWinner();
      }, 2500);
    }
  },[gameState.houseSelection])
  const setSelection=(name)=>{
    setGameState((state) => ({
      ...state,
      choiceSelected: true,
      userSelection: name,
    }));
  }



  const restartGame = () => {
    setGameState((state) => ({
      ...state,
      score:state.winner=='player1'?state.score:state.winner=='draw'?state.score:0,
      winner: "",
      houseSelection: "",
      choiceSelected:false
    }));
  };




const resolveWinner = () => {
  const { userSelection, houseSelection } = gameState;
  let winner = "";

  if (plays[userSelection].includes(houseSelection)) {
    winner = "player1";
    setGameState((state) => ({
      ...state,
      score: state.score + 1,
    }));
  } else if (plays[houseSelection].includes(userSelection)) {
    winner = "player2";
  } else {
    winner = "draw";
  }

  setGameState((state) => ({
    ...state,
    winner,
  }));
  setTimeout(() => {
    restartGame();
  }, 2000);
};
  const resolveBgColour=(name)=>{
    const colors={
      'scissors':' bg-gradient-to-t from-ScissorsGradient-to    to-ScissorsGradient-from  scissors border-2 border-ScissorsGradient-to',
      'spock':'bg-gradient-to-t    from-spockFrom  to-spockTo  spock',
      'paper':'bg-gradient-to-t    from-paperFrom  to-paperTO  paper s',
      'lizard':'bg-gradient-to-t    from-paperFrom  to-paperTO  paper ',
      'rock':'bg-gradient-to-t    from-paperFrom  to-paperTO  paper'
    }
    return  colors[name]
  }

  const resolveImage=(name)=>{
    const images={
      'scissors':Scissors,
      'spock':Spock,
      'paper':Paper,
      'lizard':Lizard,
      'rock':Rock
    }
    return  images[name]
  }

  return (
    <main className="h-screen w-full  bg-rad-gradient from-grad-1   to-grad-2 overflow-hidden">
      <div className="h-full lg:w-[60%] mx-auto xl:w-[60%] 2xl:w-[45%]    mt-10   flex    flex-col    sm:w-full   md:w-[70%]">
        <div className="w-full  h-32    border-2   border-HeaderOutline     rounded-lg  flex    justify-between p-3 ">
          <div className="flex-col    flex    justify-center      text-2xl   text-[white]   font-bold">
            <p>Rock</p>
            <p>Paper</p>
            <p>Scissors</p>
          </div>
          <div className="h-full  w-28    bg-[white]  rounded-md  flex    flex-col  items-center  p-4">
            <p className="text-xs   text-ScoreText  font-semibold">SCORE</p>
            <p className="text-6xl font-bold   text-DarkText">{gameState.score}</p>
          </div>
        </div>
        <div className={` h-[80vh]  w-full     p-4   relative  `}>
            <div className={`  h-[80%]     absolute   w-full     top-0   z-20    transition-all     grid    place-items-center  ${gameState.choiceSelected?'hidden':'visible'}`}>
            <div    className="lg:w-[70%] w-[60%]  h-[90%]  relative grid    place-items-center  sm:w-[85%] xs:w-[70%] md:w-[80%]">
            <img src={pentagon} alt=""  className="h-[80%]  object-contain  " />
            <div className="  absolute    top-0   grid place-items-center     md:w-24 md:h-24 sm:w-24 sm:h-24 sm:top-4  xs:w-20 xs:h-20 xs:top-12 ">
            <button className="w-32 z-40   h-32   rounded-full bg-gradient-to-t from-ScissorsGradient-to    to-ScissorsGradient-from  scissors border-2 border-ScissorsGradient-to     p-3  sm:w-24 sm:h-24 md:w-24 md:h-24  hover:cursor-pointer  focus:scale-110 transition-all  xs:w-20 xs:h-20" onClick={()=>setSelection('scissors')}>
              <div className="w-full   h-full  bg-[white]  rounded-full    p-4  Container xs:p-2">
                <img
                  src={Scissors}
                  className="w-full   h-full  object-contain"
                  alt=""
                />
              </div>
            </button>
            </div>

            <div className="absolute    grid    items-center     w-32    h-32   top-24  -right-8  sm:w-24 sm:h-24 md:w-28 md:h-28 sm:top-36 xs:w-20 xs:h-20">
            <button className="w-32  h-32  rounded-full bg-gradient-to-t    from-spockFrom  to-spockTo  spock   p-4 sm:w-24 sm:h-24 md:w-28 md:h-28 hover:cursor-pointer  focus:scale-110 transition-all  xs:w-20 xs:h-20"  onClick={()=>setSelection('paper')}>
              <div className="w-full   h-full  bg-[white]  rounded-full    p-4 overflow-hidden Container  xs:p-2">
                <img
                  src={Paper}
                  className="w-full   h-full  object-contain"
                  alt=""
                />
              </div>
            </button>
          </div>


          <div className="absolute    grid    items-center     w-32    h-32    -left-8 top-24 sm:w-24 sm:h-24 md:w-28 md:h-28 sm:top-36 xs:w-20 xs:h-20">
            <button className="w-32  h-32  rounded-full bg-gradient-to-t    from-paperFrom  to-paperTO  paper   p-4 sm:w-24 sm:h-24 md:w-28 md:h-28   hover:cursor-pointer  focus:scale-110 transition-all  xs:w-20 xs:h-20"  onClick={()=>setSelection('spock')}>
              <div className="w-full   h-full  bg-[white]  rounded-full    p-4 overflow-hidden  Container xs:p-2">
                <img
                  src={Spock}
                  className="w-full   h-full  object-contain"
                  alt=""
                />
              </div>
            </button>
          </div>


          <div className="absolute    grid    items-center     w-32    h-32   bottom-4  left-0  sm:w-24 sm:h-24 md:w-28 md:h-28 sm:bottom-10  xs:w-20 xs:h-20 xs:bottom-12  xs:left-2">
            <button className="w-32  h-32  rounded-full bg-gradient-to-t    from-paperFrom  to-paperTO  paper   p-4 sm:w-24 sm:h-24 md:w-28 md:h-28 hover:cursor-pointer  focus:scale-110 transition-all  xs:w-20 xs:h-20"  onClick={()=>setSelection('lizard')}>
              <div className="w-full   h-full  bg-[white]  rounded-full    p-4 overflow-hidden  Container xs:p-2">
                <img
                  src={Lizard}
                  className="w-full   h-full  object-contain  xs:object-scale-down"
                  alt=""
                />
              </div>
            </button>
          </div>

          <div className="absolute    grid    items-center     w-32    h-32   bottom-4  right-0 sm:w-24 sm:h-24 md:w-28 md:h-28 sm:bottom-10   xs:w-16 xs:h-20  xs:bottom-12  xs:right-6">
            <button className="w-32  h-32  rounded-full bg-gradient-to-t    from-paperFrom  to-paperTO  paper   p-4 sm:w-24 sm:h-24 md:w-28 md:h-28 hover:cursor-pointer  focus:scale-110 transition-all   xs:w-20 xs:h-20"  onClick={()=>setSelection('rock')}>
              <div className="w-full   h-full  bg-[white]  rounded-full    p-4 overflow-hidden  Container xs:p-2">
                <img
                  src={Rock}
                  className="w-full   h-full  object-contain  xs:object-scale-down"
                  alt=""
                />
              </div>
            </button>
          </div>




</div>
            </div>
            <div className={`  w-full  h-[80%]        top-0     duration-300 left-0  transition-all  flex   p-4 ${gameState.choiceSelected?'visible z-10 ':'invisible -z-10'}`}>
                 <div className={`w-full h-full  flex  flex-col  items-center  justify-center  gap-4 ${gameState.choiceSelected?'visible':'hidden'}`}>
                <p className="text-lg  text-[white] font-bold">
                  You Selected
              </p>
                 

                  <div className="w-60  flex-1  flex  items-center  justify-center  xs:w-32">
                    <div className={`w-60  h-60  rounded-full  p-4 ${resolveBgColour(gameState.userSelection)}  relative ${gameState.choiceSelected?'visible':'hidden'} z-40  xs:w-28 xs:h-28`}>
                        <div className="w-full  h-full  bg-[white]  rounded-full   overflow-hidden flex  items-center  justify-center  bigContainer  p-4">
                            <img src={resolveImage(gameState.userSelection)} alt="" className="  h-[80%]  object-contain  "/>
                        </div>
                       {
                        gameState.winner=='player1'&& <div className="absolute  rounded-full  w-80  h-80   bg-[white]  bg-opacity-10    -top-10 -left-10  z-10  xs:w-36 xs:h-36 xs:-top-4  xs:-left-4">
                          

                        </div>
                      
                       }
                        {
                        gameState.winner=='player1'&& <div className="absolute  w-[24rem]  h-[24rem]   bg-[white]  bg-opacity-10    top-[-4.6rem] left-[-4.6rem]  rounded-full  z-10  xs:w-44 xs:h-44   xs:-top-8  xs:-left-8">
                          

                        </div>
                      
                       }
                    </div>
                  </div>
                 </div>


                 <div className="w-full h-full  flex  flex-col  items-center  justify-center  gap-4">
               <p className={`text-lg  font-bold text-[white]  ${gameState.choiceSelected?'visible':'hidden'}`}>
                      The House Selects...
                  </p>
                  
                 {
                  gameState.houseSelection!=''&& <div className={`w-60  flex-1  ${gameState.choiceSelected?'visible':'hidden'} flex items-center  justify-center `}>
                  <div className={`w-60  h-60  rounded-full  p-4 ${resolveBgColour(gameState.houseSelection)} relative z-40 xs:w-28 xs:h-28` }>
                      <div className="w-full  h-full  bg-[white]  rounded-full   overflow-hidden flex  items-center  justify-center  bigContainer  p-4  ">
                          <img src={resolveImage(gameState.houseSelection)} alt="" className="  h-[80%]  object-contain  "/>
                        
                      </div>
                      {
                        gameState.winner=='player2'&& <div className=" absolute  rounded-full  w-80  h-80   bg-[white]  bg-opacity-10    -top-10 -left-10  z-10  xs:w-36 xs:h-36 xs:-top-4  xs:-left-4">
                          

                        </div>
                      
                       }
                        {
                        gameState.winner=='player2'&& <div className="absolute  w-[24rem]  h-[24rem]   bg-[white]  bg-opacity-10    top-[-4.6rem] left-[-4.6rem]  rounded-full  z-10   xs:w-44 xs:h-44   xs:-top-8  xs:-left-8">
                          

                        </div>
                      
                       }
                  </div>
                </div>
                 }
                 </div>
                
            </div>
            {gameState.winner&&
                  <div className="flex-1  ">
                      <p className="text-3xl  text-center text-[white]  font-bold">
                        {gameState.winner=='draw'?'Draw':gameState.winner+ ' Wins!'}
                      </p>
                  </div>
                 }
        </div>

        
      </div>
      <button className={`absolute right-[10px]  bottom-[10px]  border-[white]  border  w-28  h-8 p-2 text-[white]  flex  items-center  justify-center  rounded-md z-[90]`}  onClick={(e)=>{setModal(true)}}>Rules</button>

      {
        modal&&<div className="w-full h-screen  backdrop-blur-md  bg-opacity-20 absolute  z-[1000]  flex  items-center  justify-center  top-0 left-0  " onClick={(e)=>{
          if(!modalRef.current.contains(e.target))
          {
            setModal(false)
           
          }
        
        }}>
            <div className="w-[25vw]  h-[60vh]  bg-[white]  p-2 rounded-lg  xs:w-[80vw] xs:h-[80vh] sm:w-[80vw] sm:h-[80vh]" ref={modalRef}>
              <div className="w-full  h-[10%]  flex  justify-end items-center  ">
                  <img src={close} alt="" onClick={()=>{setModal(false)}}/>
              </div>
              <div className="w-full  h-[90%]  p-3">
              <img src={rules} className="w-full h-full  object-contain"     alt="" />
              </div>

            </div>
        </div>
      }
    </main>
  );
};
