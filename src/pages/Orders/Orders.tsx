import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Select,
  Flex,
  Divider,
} from "antd";
import { MinusOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

// Types for our menu items and orders
interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

// Sample menu data
const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Crispy Chicken",
    price: 100,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "American Breakfast",
  },
  {
    id: "2",
    name: "Cajun Fries",
    price: 100,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "American Breakfast",
  },
  {
    id: "3",
    name: "Kung Pao Chicken",
    price: 100,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "American Breakfast",
  },
  {
    id: "4",
    name: "SmokeShack",
    price: 100,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "American Breakfast",
  },
  {
    id: "5",
    name: "Tea",
    price: 50,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "Beverage",
  },
  {
    id: "6",
    name: "Coffee",
    price: 70,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "Beverage",
  },
];

// Generate table data
const tables = Array.from({ length: 20 }, (_, i) => ({
  id: `tb${i + 1}`,
  name: `Tb${i + 1}`,
}));

// Static current orders data
const currentOrders: OrderItem[] = [
  {
    id: "1",
    name: "Crispy Chicken",
    price: 100,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "American Breakfast",
    quantity: 2,
  },
  {
    id: "5",
    name: "Tea",
    price: 50,
    image: "https://v0.dev/placeholder.svg?height=200&width=200",
    category: "Beverage",
    quantity: 1,
  },
];

const Orders: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>();
  const total = currentOrders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Flex>
      <Flex
        vertical
        flex={1}
        style={{
          padding: "24px",
        }}
      >
        {/* Table Selection */}
        <Flex justify="space-between">
          <Title level={4}>Select a Table</Title>
          <Select
            style={{ width: "50%" }}
            placeholder="Select a table"
            onChange={setSelectedTable}
            value={selectedTable}
          >
            {tables.map((table) => (
              <Select.Option key={table.id} value={table.id}>
                {table.name}
              </Select.Option>
            ))}
          </Select>
        </Flex>
        <Divider />
        {/* Menu Items Grid */}
        <Title level={4}>Menu Items</Title>
        <Row gutter={[16, 16]}>
          {menuItems.map((item) => (
            <Col xs={24} sm={12} md={8} lg={4} key={item.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={item.name}
                    src={item.image}
                    style={{ height: 100, objectFit: "cover" }}
                  />
                }
              >
                <Card.Meta
                  title={item.name}
                  description={`${item.price} NPR`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Flex>

      {/* Permanent Order Section */}
      <Flex
        vertical
        style={{
          borderLeft: "1px solid #f0f0f0",
          padding: "24px",
        }}
      >
        <Title level={4}>{"Current Orders"}</Title>
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          {currentOrders.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Space align="center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Space direction="vertical" size={4}>
                  <Text strong>{item.name}</Text>
                  <Text type="secondary">{item.price} NPR</Text>
                </Space>
              </Space>
              <Space>
                <Button icon={<MinusOutlined />} />
                <Text style={{ width: 32, textAlign: "center" }}>
                  {item.quantity}
                </Text>
                <Button icon={<PlusOutlined />} />
                <Button icon={<CloseOutlined />} />
              </Space>
            </div>
          ))}
        </Space>
        <Flex justify="space-between">
          <Text strong>Total:</Text>
          <Text strong>{total} NPR</Text>
        </Flex>
        <Button type="primary" block style={{ marginTop: "16px" }}>
          Place Order
        </Button>
      </Flex>
    </Flex>
  );
};

export default Orders;
