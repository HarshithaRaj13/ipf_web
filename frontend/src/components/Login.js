import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios"; // Add axios import
import { useNavigate } from "react-router-dom"; // Add useHistory import
import image5 from "../assets/image5.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate(); // Initialize useHistory

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data === "exist") {
        history.push("/signup", { state: { id: email } }); // Redirect to signup page
      } else if (res.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      console.log(error);
      alert("Wrong details");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 flex-column"
      style={{
        backgroundImage: `url(${image5})`,
        backgroundSize: "cover",
      }}
    >
      <h1>Login Page</h1>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email id"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 10,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <a href="/Signup">Go to Signup </a>
    </div>
  );
};

export default Login;
