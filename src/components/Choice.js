export default function Choice({ handlePlay, handleClick }){
    return (
        <div>
            <p>Would you like to <br></br>be X or O?</p>
            <button onClick={() => handlePlay('X')} >X</button>
            <button onClick={() => handlePlay('O')} >O</button>
            <button onClick={handleClick}>Back</button>
        </div>
    )
}