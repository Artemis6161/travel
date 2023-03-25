import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import "./destination.css"
export default function destinetionData(props) {
  return (
    <div className={props.cname}>
    <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}
        </p>
    </div>
    <div className="image">
        <img src={props.img1} alt="img" />
        <img src={props.img2} alt="img" />
    </div>
   
   
</div>
  )
}
