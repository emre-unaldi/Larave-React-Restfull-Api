import { Typography, Layout } from "antd";
const { Text } = Typography;
const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <Text strong>Design UNALDİ ©2023</Text>
    </Footer>
  );
};

export default FooterSection;
