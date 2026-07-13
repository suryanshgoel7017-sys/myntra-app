import "./Categorycard.css";
function Categorycard(props){
  return(
    <div className="card">
      <h3>{props.title}</h3>
    </div>
  );
}
export default Categorycard;