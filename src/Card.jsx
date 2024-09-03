import './index.css'

function Card(props) {
    return(
       <div className="card">
        <img src={props.image}></img>
        <div className="card-details">
            <h3>{props.bonus}</h3>
                <p><i class="fa-solid fa-circle-check"></i>{props.p1}</p>
                <p><i class="fa-solid fa-circle-check"></i>{props.p2}</p>
                <p><i class="fa-solid fa-circle-check"></i>{props.p3}</p>
            <center><button><a href={props.url} target="_blank">Play Now!</a></button></center>
        </div> 
       </div> 

    );
}
export default Card