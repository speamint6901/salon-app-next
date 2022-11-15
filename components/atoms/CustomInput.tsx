import { Input } from "@nextui-org/react";
import SearchIcon from "./SearchIcon";

type Props = {
  isSp: boolean;
  onEnter?: () => void;
};

const SearchInput = (props: Props) => {
  const { isSp, onEnter } = props;

  const mediaWidth: string = isSp ? "150px" : "250px";

  return (
    <Input
      clearable
      contentLeft={
        <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
      }
      contentLeftStyling={false}
      css={{
        w: mediaWidth,
        width: "auto",
        "& .nextui-input-content--left": {
          h: "100%",
          ml: "$4",
          dflex: "center",
        },
      }}
      placeholder="Search..."
      onKeyDown={onEnter}
    />
  );
};

export default SearchInput;
