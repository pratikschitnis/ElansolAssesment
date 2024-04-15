import './Signup.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import dob_icon from '../../assets/dob.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the '/login' route when clicked
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Sign up
        </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>
        <div className='input'>
          <img src={dob_icon} alt="" />
          <input type="date" placeholder='Date of Birth'/>
        </div>

        <div className='input'>
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div>
        <div className="forgot-password">
          <span>Forgot Password?</span>
        </div>
        <div className="submit-container">
          <div className='submit'>
            Sign up
          </div>
        </div>
        <div className="login-button">
          Already have an Account? <span onClick={handleLoginClick}>Login</span>
        </div>
      </div>
    </div>
  )
}

export default Signup