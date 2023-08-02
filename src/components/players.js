import '../App.css'

export default function Players({selectedPlayer, handleBackClick, score1, score2}){

    return (
        <div className='players'>
            <p className='player1'>Player 1 <span>{score1}</span> </p>
            <p className='player2' > {selectedPlayer} <span>{score2}</span>  </p>
            <button className='reset' onClick={handleBackClick} >reset</button>
        </div>
    )
}