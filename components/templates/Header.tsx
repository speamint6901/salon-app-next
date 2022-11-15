import { Navbar, Text, Dropdown, Avatar } from "@nextui-org/react";
import Humbergar from "@/components/molecules/Humbergar";
import CustomInput from "@/components/atoms/CustomInput";

const collapseItems = ["リラク", "エステ", "ネイル", "まつげ"];

const Header = () => {
  return (
    <Navbar
      isBordered
      variant="static"
      maxWidth="xl"
      style={{
        maxWidth: "100vw",
        margin: 0,
      }}
      css={{
        "@lg": {
          paddingLeft: 210,
          paddingRight: 210,
        },
      }}
    >
      {/* <Container css={{ margin: "0 auto" }}> */}
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit">
          SalonApp
        </Text>
      </Navbar.Brand>

      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Navbar.Item
          showIn="xs"
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <CustomInput isSp={true} />
        </Navbar.Item>
        <Navbar.Item
          hideIn="xs"
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <CustomInput isSp={false} />
        </Navbar.Item>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="warning"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="warning"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                プロフィール
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              設定
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              ログイン
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              ログアウト
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Humbergar collapseItems={collapseItems} />
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;
