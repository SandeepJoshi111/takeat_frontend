import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Row,
  Col,
  notification,
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IRegisterRequest } from "../../types/auth.types";
import { registerAPI } from "../../api/auth";
import { REGISTER_SUCCESS } from "../../message";
import { handleFormError } from "../../utils/errorHanlder";

const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: IRegisterRequest) => {
    if (!form) {
      return;
    }
    setLoading(true);
    registerAPI(values)
      .then(() => {
        notification.success({
          message: REGISTER_SUCCESS,
        });
        navigate("/login");
      })
      .catch((err) => handleFormError(form, err))
      .finally(() => {
        form.resetFields(["password"]);
        setLoading(false);
      });
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Col xs={24} sm={16} md={12} lg={8}>
        <Card
          variant="borderless"
          style={{
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "40px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
          }}
        >
          <Title level={3} style={{ textAlign: "center" }}>
            Create an Account
          </Title>
          <Form
            name="signup_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#1890ff",
                  borderColor: "#1890ff",
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              <div style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
