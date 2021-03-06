import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/Action";

const Dashboard = () => {
  const { users, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState();
  const [query, setQuery] = React.useState("");

  const search = () => {
    dispatch(fetchUser(query, page));
  };

  React.useEffect(() => {
    search();
  }, [page]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Enter User Name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => search()}>SEARCH</button>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "20px",
          gap: "20px"
        }}
      >
        {users?.map((data) => (
          <div key={data.id}>
            <h4>{data.login}</h4>
            <img src={data.avatar_url} alt="avatar" />
            <a href={data.html_url} target="_blank">PROFILE</a>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        PREV
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
        NEXT
      </button>
    </div>
  );
};

export default Dashboard;