import './index.css'

function Card(props) {
    return(
       <div className="card">
        <img src={props.image}></img>
        <div className="card-details">
            <h3>{props.bonus}</h3>
                <p><i class="fa-solid fa-circle-check"></i>{props.li1}</p>
                <p><i class="fa-solid fa-circle-check"></i>{props.li2}</p>
                <p><i class="fa-solid fa-circle-check"></i>{props.li3}</p>
            <center><button><a href={props.url} target="_blank">Play Now!</a></button></center>
        </div> 
       </div> 

    );
}
export default Card