import './skills.css';

interface SkillCardProps {
    name: string;
    logo: string;
}

const SkillCard = (props: SkillCardProps) => (
    <div className="skill-card">
        <img src={props.logo} alt={`${props.name} logo`} className="skill-image"/>
        <h4>{props.name}</h4>
    </div>
);

export default SkillCard;