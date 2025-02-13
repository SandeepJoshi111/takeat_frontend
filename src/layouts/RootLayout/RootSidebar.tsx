import {
  RightOutlined,
  LeftOutlined,
  OrderedListOutlined,
  UserOutlined,
  LogoutOutlined,
  TableOutlined,
  SettingOutlined,
  BookOutlined,
  MoneyCollectOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Space, Avatar, Flex } from "antd";
import { CSSProperties, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const { Sider } = Layout;

const items = [
  {
    key: "/orders",
    label: "Orders",
    icon: <OrderedListOutlined />,
  },
  {
    key: "/orders-history",
    label: "Orders History",
    icon: <MenuOutlined />,
  },
  {
    key: "/menus",
    label: "Menus",
    icon: <BookOutlined />,
  },

  {
    key: "/tables",
    label: "Tables",
    icon: <TableOutlined />,
  },
  {
    key: "/bills",
    label: "Billing",
    icon: <MoneyCollectOutlined />,
  },
  {
    key: "/settings",
    label: "Settings",
    icon: <SettingOutlined />,
  },
];
const siderStyle: CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  padding: "40px 0",
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};
const RootSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width={210}
      style={siderStyle}
      theme="light"
      collapsible={false}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Flex vertical style={{ height: "100%" }} justify="space-between">
        <div>
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={items}
            onClick={({ key }) => navigate(key)}
            style={{ borderRight: "none" }}
          />
          <Button
            className="toggle"
            shape="circle"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </Button>
        </div>

        <Flex vertical gap={8} align="center">
          <Space>
            <Avatar icon={<UserOutlined />} />
            {!collapsed && "Sandeep Joshi"}
          </Space>
          <Button
            icon={<LogoutOutlined />}
            type="text"
            onClick={() => logout()}
          >
            {!collapsed && "Log Out"}
          </Button>
        </Flex>
      </Flex>
    </Sider>
  );
};

export default RootSidebar;
