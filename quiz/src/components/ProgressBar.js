function ProgressBar(props) {
    const fillerStyle = {
        width: `${props.width}%`,
    }
    const addStyle =() => {
        if (props.width >80){
            return "progressbar green"
        }
        if (props.width >20 && props.width < 60){
            return "progressbar orange"
        }
        if (props.width >=60 && props.width <= 80){
            return "progressbar yellow"
        }
        return "progressbar"
    }
    return (
       <div>
           <div className={addStyle()} style={fillerStyle}></div>
       </div>
    )
}
export default ProgressBar