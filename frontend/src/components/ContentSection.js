import { Layout, Card, Button, Modal, Space } from "antd";
import { useState } from "react";
import CardItem from "./CardItem";
import { PlusOutlined } from "@ant-design/icons";
import AddForm from "./AddForm";
const { Content } = Layout;

const ContentSection = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Modal
          title="Add Record"
          centered
          open={openAddModal}
          onCancel={() => setOpenAddModal(false)}
          width={"50%"}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <AddForm />
        </Modal>
        <Button
          style={{
            marginTop: 10,
            width: "20vw",
          }}
          icon={<PlusOutlined />}
          onClick={() => setOpenAddModal(true)}
          size="large"
          type="primary"
        >
          Add Record
        </Button>

        <Content
          className="site-layout"
          style={{
            padding: "0 50px 50px 50px"
          }}
        >
          <Card>
            <Card.Grid style={{ width: "20%" }}>
              <CardItem />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <CardItem />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <CardItem />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <CardItem />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <CardItem />
            </Card.Grid>
          </Card>
        </Content>
      </Space>
    </>
  );
};

export default ContentSection;
