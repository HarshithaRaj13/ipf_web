import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import image8 from "../assets/image8.jpg";
// import image2 from "../assets/image2.jpg";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundImage: `url(${image8})`,
        backgroundSize: "cover",
      }}
    >
      {/* <div style={{ position: "absolute", top: 0, right: 0 }}>
        <img
          src={""}
          alt="Side Image"
          style={{ height: "100vh", maxWidth: "50vw" }}
        />
      </div> */}
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
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
          <Input.Password />
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
