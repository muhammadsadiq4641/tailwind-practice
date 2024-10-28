import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 40, color: "#fff" }} spin />
);

const OverlayLoader = () => {
  return (
    <div className="cover-spin">
      <Space size="middle">
        <Spin size="large" indicator={antIcon} />
      </Space>
    </div>
  );
};

export default OverlayLoader;
