/**
 * Implementation of Header Component
 */
import "./header.css";
import { PageHeader, Input } from "antd";
const { Search } = Input;

const Header = ({ getQuery }: any) => {
  return (
    <div 
     className="header">
      <PageHeader
        title="Jokes Mania"
        extra={[
          <Search
            key = "search"
            placeholder="Search Jokes"
            onSearch={(value: string) => getQuery(value)}
            enterButton
          />,
        ]}
      />
    </div>
  );
};

export default Header;
