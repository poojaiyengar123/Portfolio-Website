import './experience.css';

interface ExperienceCardProps {
    title: string;
    company: string;
    timeframe: string;
    logo: string;
}

const ExperienceCard = (props: ExperienceCardProps) => (
    <div className="experience-card">
        <img src={props.logo} alt={`${props.company} logo`} className="experience-image"/>
        <h3>{props.title}</h3>
        <h4>{props.company}</h4>
        <p>{props.timeframe}</p>
    </div>
);

export default ExperienceCard;