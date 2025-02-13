import React from "react";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Badge, Card, Flex } from "antd";

const initialData = [
  {
    id: 1,
    title: "Table 1",
    orders: [
      { orderName: "Milk Tea", quantity: 2 },
      { orderName: "Coffee", quantity: 2 },
      { orderName: "Green Tea", quantity: 1 },
      { orderName: "Black Tea", quantity: 1 },
    ],
    status: "Completed",
    color: "green",
  },
  {
    id: 2,
    title: "Table 2",
    orders: [{ orderName: "Latte", quantity: 1 }],
    status: "In Progress",
    color: "blue",
  },
  {
    id: 3,
    title: "Table 3",
    orders: [
      { orderName: "Cappuccino", quantity: 2 },
      { orderName: "Tea", quantity: 1 },
      { orderName: "Mocha", quantity: 1 },
      { orderName: "Americano", quantity: 2 },
    ],
    status: "Pending",
    color: "orange",
  },
  {
    id: 4,
    title: "Table 4",
    orders: [
      { orderName: "Cappuccino", quantity: 2 },
      { orderName: "Tea", quantity: 1 },
      { orderName: "Mocha", quantity: 1 },
      { orderName: "Americano", quantity: 2 },
    ],
    status: "Paid",
    color: "grey",
  },
  {
    id: 5,
    title: "Table 5",
    orders: [
      { orderName: "Cappuccino", quantity: 2 },
      { orderName: "Tea", quantity: 1 },
      { orderName: "Mocha", quantity: 1 },
      { orderName: "Americano", quantity: 2 },
    ],
    status: "Cancelled",
    color: "red",
  },
];

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <EyeOutlined key="info" />,
];

const Tables: React.FC = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      {initialData.map((item) => (
        <Badge.Ribbon key={item.id} text={item.status} color={item.color}>
          <Card actions={actions}>
            <Card.Meta
              title={item.title}
              style={{ height: 80, minWidth: 150 }}
              description={
                <>
                  {item.orders.slice(0, 2).map((order, index) => (
                    <Flex justify="space-between" key={index}>
                      <p>{order.orderName}</p>
                      <p>x{order.quantity}</p>
                    </Flex>
                  ))}
                  {item.orders.length > 2 && (
                    <p
                      style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "35%",
                      }}
                    >
                      ...
                    </p>
                  )}
                </>
              }
            />
          </Card>
        </Badge.Ribbon>
      ))}
    </Flex>
  );
};

export default Tables;
