import { Layout } from "antd";
import HeaderSection from "./components/HeaderSection";
import ContentSection from "./components/ContentSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <Layout>
      <HeaderSection/>
      <ContentSection/>
      <FooterSection/>
    </Layout>
  )
}

export default App

