import '../../../styles/team.css';
import MemberCard from './MemberCard';

import andrew from '../../../images/team/andrew.svg';
import alex from '../../../images/team/alex.svg';
import wlodzimierz from '../../../images/team/wlodzimierz.svg';
import tina from '../../../images/team/tina.svg';
import paul from '../../../images/team/paul.svg';

const members = [
  { name: 'andrew', role: 'Project Manager', image: andrew },
  { name: 'alex', role: 'Web developer', image: alex },
  { name: 'wlodzimierz', role: 'Team Lead', image: wlodzimierz },
  { name: 'paul', role: 'Designer', image: paul },
  { name: 'tina', role: 'Social Media Manager', image: tina },
];

function Team() {
  return (
    <div id="team" className="container team__container">
      <h2 className="title team__title">Our team</h2>
      <p className="text team__text">Our wonderful team of professionals</p>
      <div className="team__members">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
