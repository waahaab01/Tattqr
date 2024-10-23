import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';
import '../signup/signup.css';
import loginHero from '../../assets/images/login-hero.jpg';

const Signup = ({ handleSwitch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      message.error('Please fill out all fields');
      return;
    }

    const newUser = { username, email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', newUser);
      console.log(response.data);
      console.log(newUser)
      message.success('User created successfully');
      handleSwitch()
    } catch (error) {
      if(error.response && error.response.status == 409 ){
        message.error("user already exists")
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-title">Create Account</h1>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={formData}
          onValuesChange={(changedValues) => setFormData({ ...formData, ...changedValues })}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="signup-input"
              placeholder="Name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' },{ type: "email", message: "Please enter a valid Email!" }]}
          >
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="signup-btn">
              Sign up
            </Button>
          </Form.Item>
        </Form>

        <p className="signup-switch">
          Already have an account?{' '}
          <Button type="link" onClick={handleSwitch} className="signup-link">
            Sign in
          </Button>
        </p>
      </div>

      <div className="signup-hero">
        <img src={loginHero} alt="Login Visual" className="signup-hero-img" />
      </div>
    </div>
  );
};

export default Signup;
