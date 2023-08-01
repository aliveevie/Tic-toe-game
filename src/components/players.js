import '../App.css'

export default function Players({selectedPlayer, handleBackClick}){

    return (
        <div className='players'>
            <p className='player1'>Player 1 <span>0</span> </p>
            <p className='player2' > {selectedPlayer} <span>0</span>  </p>
            <button className='reset' onClick={handleBackClick} >reset</button>
        </div>
    )
}