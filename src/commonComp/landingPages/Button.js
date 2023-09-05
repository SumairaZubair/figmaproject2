// import ButtonGroup from "antd/es/button/button-group"

const Button =({bgclr,btnText, width,height,radius,border,textColor,textSize})=>{

    // const buttonStyle = {
    //     backgroundColor: props.backgroundColor || 'blue',
    //     color: props.color || 'white',
    //     fontSize: props.fontSize || '16px',
        
    //   };

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