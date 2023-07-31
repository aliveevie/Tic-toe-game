export default function Choice({ handlePlay, handleClick }){
    return (
        <div>
            <p>Would you like to <br></br>be X or O?</p>
            <button onClick={handlePlay} >X</button>
            <button onClick={handlePlay} >O</button>
            <button onClick={handleClick}>back</button>
        </div>
    )
}