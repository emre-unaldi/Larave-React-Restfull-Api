import { Image, Typography, Button, Modal, Space } from "antd";
import {
  DeleteOutlined,
  FormOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useState } from "react";
import UpdateForm from "./UpdateForm";

function CardItem() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { Text } = Typography;

  return (
    <>
      <Space
        direction="vertical"
        style={{
          backgroundColor: "#f5f5f5",
          textAlign: "center"
        }}
      >
        <Modal
          title="Update Record"
          centered
          open={openAddModal}
          onCancel={() => setOpenAddModal(false)}
          width={"50%"}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <UpdateForm />
        </Modal>
        <Modal
          title="Delete Record"
          centered
          open={openDeleteModal}
          onOk={() => {
            console.warn("delete");
            setOpenDeleteModal(false);
          }}
          okType="danger"
          okText="Yes"
          onCancel={() => {
            console.warn("cancel");
            setOpenDeleteModal(false);
          }}
          cancelText="No"
          icon={<ExclamationCircleFilled />}
        >
          Are you sure you want to delete the record?
        </Modal>
        <Image src="https://source.unsplash.com/random" />
        <Text strong>Title</Text>
        <Text type="secondary">Description</Text>
        <Space
          direction="horizontal"
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            shape="circle"
            icon={<FormOutlined />}
            onClick={() => setOpenAddModal(true)}
            size="large"
            type="primary"
          />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            size="large"
            onClick={() => setOpenDeleteModal(true)}
            type="primary"
            danger
          />
        </Space>
      </Space>
    </>
  );
}

export default CardItem;
