export default function FrontPage({ handleClick }){
    return(
        <>
         <div>How do you <br></br>want to play</div>
        <button onClick={handleClick} >One Player</button>
        <button onClick={handleClick} >Two Player</button>
        </>
    )
}