import { useState } from "react";
import { useSelector } from "react-redux";
import { serviceName, requests } from "./Utils/requests";
import { IJokes } from "./Interfaces/initialState";
import CardItem from "./Components/CardItem";
import Header from "./Components/Header";
import { Pagination } from "antd";
import { useAPIDispatch } from "./Utils/useAPIDispatch";
import "./index.css";

const App = () => {
  const state = useSelector((state: IJokes) => state);

  // getting data from Redux store
  const { jokesData, isLoading, totalPages, errorMessage } = state;

  // state to update page Number
  const [pageNo, setPageNo] = useState<number>(1);

  // state to update search Query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // custom hook to dispatch an action for API call
  useAPIDispatch(
    requests.search(searchQuery, pageNo),
    serviceName.search,
    pageNo,
    searchQuery
  );

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      <Header
        getQuery={(query: string) => {
          setSearchQuery(query);
          setPageNo(1);
        }}
      />
      <div className="card-container">
        {jokesData &&
          jokesData.map((item: any, index: number) => (
            <CardItem key={index} isLoading={isLoading} joke={item.joke} />
          ))}
      </div>
      <div className="paginate">
        <Pagination
          current={pageNo}
          total={totalPages}
          onChange={(pageNumber: number) => {
            setPageNo(pageNumber);
          }}
        />
      </div>
    </div>
  );
};

export default App;
