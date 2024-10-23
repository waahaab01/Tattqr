import React from "react";
import { Form, Input, Button } from "antd";
import "./contact-us.css";
const ContactUs = () => {
  const [form] = Form.useForm();

  // Handle form submission
  const onFinish = (values) => {
    console.log("Form submitted: ", values);
  };

  // Handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log("Form submission failed: ", errorInfo);
  };
  return (
    <div className="contact-us-section">
      <div className="contact-us-content">
        <h2 className="contact-section-head">Contact Us</h2>
        <p className="contact-section-text">
          Fill Out This Form to <span>Get Started</span>
        </p>
        <p className="contact-section-text-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less.
        </p>
      </div>
      <div className="contact-us-form">
        <Form
          form={form}
          name="about-us"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        //   style={styles.form}
        >
          {/* Name Input */}
          <Form.Item
            label="Name"
            name="name"
            className="form-item"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" className="form-input" />
          </Form.Item>

          {/* Email Input */}
          <Form.Item
            label="Email"
            name="email"
            className="form-item"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Enter your email" className="form-input" />
          </Form.Item>

          {/* Message Input */}
          <Form.Item
            label="Message"
            name="message"
            className="form-item"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter your message" className="form-input" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block className="submit-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
