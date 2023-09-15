import '../button/button.css'
// const Button =({bgclr,btnText,border,textColor})=>{

//     return(
//         <div className='btndisplaypage'>
//            <button
//            className="commonButton"
//         style={{
//             backgroundColor:bgclr,
//             border:border,
//             color:textColor,
        
//         }}>{btnText}</button>
//         </div>
//     )
// }


const Button = ({ text, className, onClick }) => {
    return (
        <div className='btndisplaypage'>
      <button className={`custom-button ${className}`} onClick={onClick}>
        {text}
      </button>
      </div>
    );
  };

export default Button