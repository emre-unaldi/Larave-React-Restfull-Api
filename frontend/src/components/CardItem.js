import { useState } from "react";
import { Image, Typography, Button, Modal, Space, message } from "antd";
import {
  DeleteOutlined,
  FormOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import UpdateForm from "./UpdateForm";
import axios from "axios";

function CardItem(props) {
  const { title, description, image, id } = props;
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { Text } = Typography;

  const deleteMovie = () => {
    setOpenDeleteModal(false);
    messageApi
      .open({
        type: "loading",
        content: "Deleting in progress",
        duration: 2,
      })
      .then(() => {
        axios
          .post(
            "http://localhost:8000/movie/delete",
            { id },
            {
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
            }
          )
          .then((result) => {
            console.log("deleted :", result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => message.success("Delete finished", 1));
  };

  return (
    <>
      {contextHolder}
      <Space
        direction="vertical"
        style={{
          backgroundColor: "#f5f5f5",
          textAlign: "center"
        }}
      >
        <Modal
          centered
          open={openAddModal}
          onCancel={() => setOpenAddModal(false)}
          width={"50%"}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <UpdateForm recordId={id} />
        </Modal>
        <Modal
          title="Delete Record"
          centered
          open={openDeleteModal}
          onOk={() => {
            deleteMovie();
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
        <Image src={image} />
        <Text strong>{title}</Text>
        <Text type="secondary">{description}</Text>
        <Space
          direction="horizontal"
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-around"
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
