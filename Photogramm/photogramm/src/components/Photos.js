export default function Photos(props){

    return (
        <div className={"photos_container"}>
            {props.photos.map((el)=>{
                if(!el)return
                return <div className={"photo"}>
                    <img src={el.image.url} alt={el.name}/>
                </div>
            })}
        </div>
    )
}