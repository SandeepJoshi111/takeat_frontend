import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const PageLoading = () => {
  return (
    <Flex justify="center" align="center" style={{ height: "100%" }}>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </Flex>
  );
};

export default PageLoading;
