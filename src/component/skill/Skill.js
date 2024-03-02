import "./skill.css";

function Skill(props) {
    
    return (
        <div className="skill-item">
            { props.logo && 
                <div className="skill-item-icon">
                    {props.logo}
                </div>
            }
            <div className={"skill-item-content " + (props.className ?? "")}>{props.text}</div>
        </div>
    );
  }
  
  export default Skill;