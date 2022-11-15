import { Navbar, Link } from "@nextui-org/react";

type Props = {
  collapseItems: string[];
};

const Humbergar = (props: Props) => {
  const { collapseItems } = props;
  return (
    <Navbar.Collapse disableAnimation>
      {collapseItems.map((item, index) => (
        <Navbar.CollapseItem
          key={item}
          activeColor="warning"
          css={{
            color: index === collapseItems.length - 1 ? "$error" : "",
          }}
          isActive={index === 2}
        >
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href="#"
          >
            {item}
          </Link>
        </Navbar.CollapseItem>
      ))}
    </Navbar.Collapse>
  );
};

export default Humbergar;
