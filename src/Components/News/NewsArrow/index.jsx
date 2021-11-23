import { NavLink } from 'react-router-dom';
import YellowBackArrow from '../NewsImages/YellowBackArrow.png';
import '../index.css';

function BackArrowBtn() {
  return (
    <div>
      <NavLink to="/news" className="backArrowBtn">
        <img src={YellowBackArrow} alt="Back Arrow" />
      </NavLink>
    </div>
  );
}

export default BackArrowBtn;
