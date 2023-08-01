export default function FrontPage({ handlePlay }){
    return(
        <>
         <div>How do you <br></br>want to play</div>
        <button onClick={() => handlePlay('Computer') } >One Player</button>
        <button onClick={() => handlePlay('Player 2')} >Two Player</button>
        </>
    )
}