import { Layout, Space, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const HeaderSection = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 15
        }}
      >
        <Title
          style={{ color: "white" }}
          responsive={{
            xs: { fontSize: "16px" },
            sm: { fontSize: "18px" },
            md: { fontSize: "20px" },
            lg: { fontSize: "22px" },
            xl: { fontSize: "24px" },
            xxl: { fontSize: "26px" }
          }}
        >
          Laravel React Restful Api
        </Title>
      </Space>
    </Header>
  );
};

export default HeaderSection;
