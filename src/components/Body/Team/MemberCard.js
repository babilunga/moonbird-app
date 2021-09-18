import '../../../styles/team.css';

function MemberCard(props) {
  const { name, role, image } = props;
  const toUpperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

  return (
    <div className={`member-card ${name}`}>
      <img src={image} alt={name} className="member-card__image" />
      <h2 className="title member-card__title">{toUpperFirstLetter(name)}</h2>
      <p className="text member-card__text">{role}</p>
    </div>
  );
}

export default MemberCard;
