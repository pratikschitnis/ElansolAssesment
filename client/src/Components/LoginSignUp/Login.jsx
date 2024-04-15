import './Login.css'
import user_icon from '../../assets/person.png'
import password_icon from '../../assets/password.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleSignupClick = () => {
    navigate('/'); // Redirect to the '/login' route when clicked
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Login
        </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Email'/>
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
            Login
          </div>
        </div>
        <div className="signup-button">
          Don&apos;t have an Account? <span onClick={handleSignupClick}>Sign up</span>
        </div>
      </div>
    </div>
  )
}

export default Login