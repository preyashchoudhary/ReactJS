import './index.css'

function Info(props) {
    return(
       <div className="info-card">
          <center><img src={props.image}></img></center> 
            <h3>{props.heading}</h3>
              <p>{props.p}</p>
       </div> 

    );
}
export default Info