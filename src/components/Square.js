 import '../App.css'
 
 export default function Square({selectedOption}) {
    console.log(selectedOption)
    return (
        <div>
            
            <button className='square'>{selectedOption.toString()}</button>
        </div>
    )
  }