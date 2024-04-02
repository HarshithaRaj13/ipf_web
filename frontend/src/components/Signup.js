import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import image8 from "../assets/image8.jpg";

const Signup = () => {
  const [message, setMessage] = useState("");

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        values
      );
      if (
        response.data.error &&
        response.data.error.includes("duplicate key error")
      ) {
        setMessage("The user already exists. Please provide another username.");
      } else {
        setMessage("User created successfully");
        alert("User created successfully");
      }
    } catch (error) {
      setMessage("Error creating user");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 flex-column"
      style={{
        backgroundImage: `url(${image8})`,
        backgroundSize: "cover",
      }}
    >
      <h1>Signup Page</h1>
      <Form
        name="basic"
        onFinish={onFinish}
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
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {message && <p style={{ color: "blue" }}>{message}</p>}
    </div>
  );
};

export default Signup;
