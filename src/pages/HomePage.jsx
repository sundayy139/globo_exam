/* eslint-disable no-unused-vars */
import {
  Badge,
  Button,
  Icon,
  IndexTable,
  LegacyCard,
  Text,
} from "@shopify/polaris";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import {
  AttachmentMajor,
  CodeMajor,
  CapitalMajor,
  ToolsMajor,
  FlipCameraMajor,
} from "@shopify/polaris-icons";

const HomePage = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const res = await axios
      .get(
        "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks?page=1&limit=5"
      )
      .then((res) => {
        setUserData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowMarkup = userData?.map(
    ({ id, type, title, description, status, createdAt, closed }, index) => (
      <IndexTable.Row id={id} key={id} position={index}>
        <IndexTable.Cell>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              fontSize: "12px",
            }}
          >
            <Icon
              source={
                type === "Producer"
                  ? AttachmentMajor
                  : type === "Developer"
                  ? CodeMajor
                  : type === "Engineer"
                  ? ToolsMajor
                  : type === "Director"
                  ? FlipCameraMajor
                  : CapitalMajor
              }
            />
            <span
              style={{
                color: "#86d4ef",
                background: "#fafafa",
                padding: "1px 4px",
                borderRadius: "5px",
              }}
            >
              {type}
            </span>
          </span>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {`#${id}`}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                color: "#86d4ef",
              }}
            >
              <Text variant="bodySm" as="p" fontWeight="semibold">
                {title}
              </Text>
            </span>
            <Text variant="bodySm" as="p">
              {description}
            </Text>
          </div>
        </IndexTable.Cell>
        <IndexTable.Cell>
          {status === true ? (
            <Badge status="success" progress="complete">
              active
            </Badge>
          ) : (
            <Badge progress="incomplete" status="attention">
              cancelled
            </Badge>
          )}
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span" fontWeight="semibold">
            {moment(createdAt).format("DD MMM YYYY")}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span" fontWeight="semibold">
            {moment(closed).format("DD MMM YYYY")}
          </Text>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <div
      style={{
        padding: "40px",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: " 0 40px",
          marginBottom: "100px",
        }}
      >
        <Text variant="heading2xl" as="h1" fontWeight="bold">
          Hey John, welcome to CarsonDash
        </Text>
        <Text variant="headingsm" as="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          sequi facilis sapiente consequatur modi
        </Text>
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Button>Submit new task</Button>
          <Button primary>Subcribe & Save</Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Text variant="heading2xl" as="h3" fontWeight="bold">
          Recent Task
        </Text>
        <LegacyCard>
          <IndexTable
            itemCount={userData.length}
            headings={[
              { title: "Type" },
              { title: "Task ID" },
              { title: "Task Name" },
              { title: "Status" },
              { title: "First Deliverable" },
              { title: "Closed" },
            ]}
            rows={userData}
            selectable={false}
          >
            {rowMarkup}
          </IndexTable>
        </LegacyCard>
      </div>
    </div>
  );
};

export default HomePage;
