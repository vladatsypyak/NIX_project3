export default function CloseBtn(props){
   return <button onClick={props.onClick} className={props.className}><img src={require("../../assets/close.png")} alt=""/></button>

}