import './Login.css'
import user_icon from '../../assets/person.png'
import password_icon from '../../assets/password.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleSignupClick = () => {
    navigate('/'); // Redirect to the '/signup' route when clicked
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:3000/user/login', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.status, response.data.msg);

        // Redirect the user after successful sign-up
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token)
            navigate('/userList'); // Redirect to login page
        }
    } catch (error) {
        alert(error.response.data.message)
        console.error('Error login:', error);
    }
};


  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Login
        </div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <div className='input'>
            <img src={user_icon} alt="" />
            <input 
              type="text" 
              placeholder='Email'
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              placeholder='Password'
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="forgot-password">
            <span>Forgot Password?</span>
          </div>
          <div className="submit-container">
            <button type="submit" className='submit'>
              Login
            </button>
          </div>
          <div className="signup-button">
            Don&apos;t have an Account? <span onClick={handleSignupClick}>Sign up</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
