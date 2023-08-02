import '../App.css'

export default function Players({selectedPlayer, handleBackClick, score}){

    return (
        <div className='players'>
            <p className='player1'>Player 1 <span>{score}</span> </p>
            <p className='player2' > {selectedPlayer} <span>{score}</span>  </p>
            <button className='reset' onClick={handleBackClick} >reset</button>
        </div>
    )
}