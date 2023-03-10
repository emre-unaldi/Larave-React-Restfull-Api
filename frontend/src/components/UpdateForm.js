import { Button, Form, Input, Space } from "antd";

const UpdateForm = () => {
  //const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  }

  const onFinish = (values) => {
    //form.resetFields();
    console.log("Success:", values);
  }

  const onFinishFailed = (errorInfo) => {
    //form.resetFields();
    console.log("Failed:", errorInfo);
  }

  return (
    <Form
      name="basic"
      {...layout}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        title: "",
        description: "",
        image: ""
      }}
      //form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your title!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input your description!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="İmage"
        name="image"
        rules={[
          {
            required: true,
            message: "Please input your image!"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Space
          direction="horizontal"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            style={{
              width: "20vw",
            }}
            size="middle"
            type="primary"
            htmlType="submit"
          >
            Update
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default UpdateForm;
