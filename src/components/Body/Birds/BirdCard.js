import '../../../styles/birds.css';

function BirdCard(props) {
  const { title, image } = props;
  const toUpperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
  return (
    <div className="birds__card" id={title}>
      <img src={image} alt={title} className="birds__card-img" />
      <h3 className="title card__title">{toUpperFirstLetter(title)}</h3>
    </div>
  );
}

export default BirdCard;
