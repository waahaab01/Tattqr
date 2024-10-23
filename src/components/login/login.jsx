import { useNavigate } from "react-router-dom";
import loginHero from '../../assets/images/login-hero.jpg';
import axios from "axios";
import { message, Form, Input, Button } from "antd"; 
import '../login/login.css';

const Login = ({ handleSwitch }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;
    console.log(email,password)
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email,password });
      if (response.status === 200) {
        message.success("Logged in successfully");
        navigate('/generateQR');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        message.error("invalid email and password");
      }
      if(error.response && error.response.status === 404) {
        message.error("user not found")
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="form-title">Sign In</h1>
        <Form onFinish={onFinish} layout="vertical">
          {/* Email Input */}
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Please enter a valid Email!" }
            ]}
            className="login-input"
            label="Email"
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            name="password"
            className="login-input"
            rules={[
              { required: true, message: "Please input your Password!" },
            ]}
            label="Password"
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <p className="forgot-password">
          Forgot your password? <a href="#" className="link-text">Click here</a>
        </p>

        <p className="signup-text">
          Don't have an account? <button onClick={handleSwitch} className="link-button">Sign up</button>
        </p>
      </div>

      {/* Image Section */}
      <div className="login-image">
        <img src={loginHero} alt="Login Visual" className="hero-image" />
      </div>
    </div>
  );
};

export default Login;
