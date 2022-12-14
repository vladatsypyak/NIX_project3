function ProgressBar(props) {
    const fillerStyle = {
        width: `${props.width}%`,

    }
    return (
        <div className={"progressbar"} style={fillerStyle}></div>
    )
}
export default ProgressBar