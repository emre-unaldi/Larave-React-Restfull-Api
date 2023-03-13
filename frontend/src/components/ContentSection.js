import { Layout, Card, Button, Modal, Space, Typography  } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import CardItem from "./CardItem";
import AddForm from "./AddForm";

const ContentSection = () => {
  const [movie, setMovie] = useState("");
  const { Title } = Typography;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movie/show")
      .then((result) => {
        const response = result.data;
        setMovie(response);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [movie]);

  const [openAddModal, setOpenAddModal] = useState(false);
  const { Content } = Layout;

  return (
    <>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            padding: "5px 50px 50px 50px",
            minWidth: "100vw",
          }}
        >
          <Card
            style={{
              paddingBottom: 10 
            }}
          >
            {movie.length > 0
              ? Array.from(movie).map((movie) => {
                  return (
                    <Card.Grid key={movie.id} style={{ width: "20%" }}>
                      <CardItem
                        title={movie.title}
                        description={movie.description}
                        image={movie.image}
                        id={movie.id}
                      />
                    </Card.Grid>
                  );
                })
              : 
              <Title style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }} level={2}>
                There are no records to list!
              </Title>
              }
          </Card>
        </Content>
      </Space>
    </>
  );
};

export default ContentSection;
