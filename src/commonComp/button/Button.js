
const Button =({bgclr,btnText, width,height,radius,border,textColor,textSize})=>{

    return(
        <div>
           <button
        style={{backgroundColor:bgclr,
            width:width,
            height:height,
            borderRadius:radius,
            border:border,
            color:textColor,
            fontSize:textSize
        
        }}>{btnText}</button>
        </div>
    )
}

export default Button