import '../button/button.css'
const Button =({bgclr,btnText,border,textColor})=>{

    return(
        <div className='btndisplaypage'>
           <button
           className="commonButton"
        style={{
            backgroundColor:bgclr,
            border:border,
            color:textColor,
        
        }}>{btnText}</button>
        </div>
    )
}

export default Button