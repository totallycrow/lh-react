import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>LH React</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/usememo">UseMemo</Link> |{" "}
        <Link to="/paginatedtable">tableWithPagination</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}
