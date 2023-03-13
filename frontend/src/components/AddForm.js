import { SyncOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, message } from "antd";
import axios from "axios";
import { useState } from "react";

const AddForm = () => {
  const [loadings, setLoadings] = useState(false);
  const [formFieldError, setFormFieldError] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const { Title } = Typography;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log("onFinish Values: ", values);
    setFormFieldError(false);
    form.resetFields();
    messageApi
      .open({
        type: "loading",
        content: "Recording in progress",
        duration: 2,
      })
      .then(() => {
        axios
          .post(
            "http://localhost:8000/movie/create",
            {
              title: values.title,
              description: values.description,
              image: "https://source.unsplash.com/random"
            },
            {
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
            }
          )
          .then((result) => {
            console.log("created :", result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => message.success("Recording finished", 1))
      .then(() => window.location.reload(true));
  };

  const onFinishFailed = (values) => {
    setFormFieldError(true);
    console.log("onFinishFailed Values: ", values);
  };

  const handleLoading = () => {
    setLoadings(true);
    setTimeout(() => {
      setLoadings(false);
    }, 3000);
  };

  return (
    <>
      {contextHolder}
      <Title
        level={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Add Record
      </Title>
      <Form
        name="addRecord"
        {...layout}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          title: "",
          description: "",
          image: "",
        }}
        form={form}
        labelAlign="left"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
            {
              type: "string",
              whitespace: true,
              message: "Please, the title should not contain only spaces !"
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your description!"
            },
            {
              type: "string",
              whitespace: true,
              message:
                "Please, the description should not contain only spaces !"
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="İmage"
          name="image"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your image!",
            },
            {
              type: "string",
              whitespace: true,
              message: "Please, the image should not contain only spaces !"
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            onClick={() => {
              handleLoading();
            }}
            style={{
              width: "100%",
            }}
            size="middle"
            type="primary"
            htmlType="submit"
          >
            {loadings && formFieldError === false ? (
              <SyncOutlined spin={loadings} />
            ) : (
              "Add"
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddForm;
