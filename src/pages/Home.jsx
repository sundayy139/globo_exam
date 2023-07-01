import {
  Frame,
  Navigation,
  TopBar,
  Badge,
  Avatar,
  Icon,
  Button,
} from "@shopify/polaris";
import {
  HomeMinor,
  AppsMajor,
  CirclePlusOutlineMinor,
  ManagedStoreMajor,
  OrdersMinor,
  ArchiveMinor,
  GiftCardMajor,
  CustomerPlusMajor,
  ChatMajor,
  QuestionMarkInverseMajor,
  SettingsMajor,
  CirclePlusMajor,
  NotificationMajor,
} from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const handleItemClick = (url) => {
    console.log(1);
    navigate(url);
  };

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const avatarMarkup = (
    <div style={{ width: "40px", height: "40px" }}>
      <Avatar
        customer
        size="medium"
        name="John Doe"
        source="https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999"
      />
    </div>
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Shop Name 1"
      detail="Subcribe now !"
      avatar={avatarMarkup}
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={NotificationMajor} />
        </span>
      }
    />
  );

  const thirdMenuMarkup = (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <TopBar.Menu
        activatorContent={
          <span
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <span>Avaiable credit:</span>
            <span>4</span>
          </span>
        }
      />
      <TopBar.Menu
        activatorContent={
          <span>
            <Icon source={CirclePlusMajor} />
          </span>
        }
      />
      <TopBar.Menu activatorContent={<Button>Submit a new task</Button>} />
    </div>
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
      secondaryMenu={secondaryMenuMarkup}
      // searchField={thirdMenuMarkup}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/home",
            label: "Home",
            excludePaths: ["#"],
            icon: HomeMinor,
            selected:
              location.pathname === "/home" || location.pathname === "/",
          },
          {
            url: "/task_catalog",
            label: "TaskCatalog",
            icon: AppsMajor,
            badge: "46",
            selected: location.pathname === "/task_catalog",
          },
        ].map(({ url, label, icon: Icon, selected, badge }) => {
          return {
            label,
            icon: Icon,
            onClick: () => handleItemClick(url),
            selected,
            ...(badge && { badge }),
          };
        })}
      />
      <Navigation.Section
        title="MY PROJECTS"
        action={{
          accessibilityLabel: "Add project channel",
          icon: CirclePlusOutlineMinor,
          onClick: () => {},
        }}
        items={[
          {
            url: "/active",
            label: "Active",
            icon: ManagedStoreMajor,
            badge: <Badge status="info">12</Badge>,
            selected: location.pathname === "/active",
          },
          {
            url: "/complete",
            label: "Complete",
            icon: OrdersMinor,
            selected: location.pathname === "/complete",
          },
          {
            url: "/closed",
            label: "Closed",
            icon: ArchiveMinor,
            selected: location.pathname === "/closed",
          },
        ].map(({ url, label, icon: Icon, selected, badge }) => {
          return {
            label,
            icon: Icon,
            onClick: () => handleItemClick(url),
            selected,
            ...(badge && { badge }),
          };
        })}
      />
      <Navigation.Section
        title="MY PLAN"
        items={[
          {
            url: "/subcribe",
            label: "Subcribe",
            icon: GiftCardMajor,
            badge: <Badge status="success">Save 40%</Badge>,
            badgeColor: "primary",
            selected: location.pathname === "/subcribe",
          },
        ].map(({ url, label, icon: Icon, selected, badge }) => {
          return {
            label,
            icon: Icon,
            onClick: () => handleItemClick(url),
            selected,
            ...(badge && { badge }),
          };
        })}
      />
      <Navigation.Section
        fill
        title="MORE"
        items={[
          {
            url: "/member_perks",
            label: "Member Perks",
            icon: HomeMinor,
            selected: location.pathname === "/member_perks",
          },
          {
            url: "/invite_friend",
            label: "Invite Friends",
            icon: CustomerPlusMajor,
            badge: <Badge status="success">Earn 10$</Badge>,
            selected: location.pathname === "/invite_friend",
          },
          {
            url: "/contact_us",
            label: "Contact Us",
            icon: ChatMajor,
            selected: location.pathname === "/contact_us",
          },
          {
            url: "/faq",
            label: "FAQ",
            icon: QuestionMarkInverseMajor,
            selected: location.pathname === "/faq",
          },
        ].map(({ url, label, icon: Icon, selected, badge }) => {
          return {
            label,
            icon: Icon,
            onClick: () => handleItemClick(url),
            selected,
            ...(badge && { badge }),
          };
        })}
      />
      <Navigation.Section
        items={[
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsMajor,
          },
        ]}
      />
    </Navigation>
  );

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
    url: "/",
    accessibilityLabel: "Jaded Pixel",
  };

  return (
    <Frame
      logo={logo}
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      <Outlet />
    </Frame>
  );
};

export default Home;
