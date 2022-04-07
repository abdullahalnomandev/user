import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavBar from "./NavBar";
import Pagination from "./Pagination";

const Home = () => {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    const { data } = axios
      .get("https://randomuser.me/api/?results=50")

      .then(({ data }) => setData(data.results));
  }, []);

  // GET CURRENT POST

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const allUsers = data.slice(firstIndex, lastIndex);

  return (
    <div className=" px-4 mb-5">
      <h3 className="ps-3">User List</h3>
      <NavBar />
      <Table striped hover>
        <thead className="text-center">
          <tr>
            <th> Name</th>
            <th> Registration Date </th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map(
            ({
              name: { first, last },
              picture: { large },
              email,
              registered: { date },
              login: { username },
            }) => (
              <tr>
                <td className="d-flex gap-2  align-items-center">
                  <img
                    src={large}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <h6> {`${first} ${last}`} </h6>
                    <span className="text-secondary">{email}</span>
                  </div>
                </td>
                <td className="text-center">{date.slice(0, 10)}</td>
                <td>@ {username}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <Pagination totalUsers={data.length} setCurrentPage={setCurrentPage} usersPerPage={usersPerPage} />
    </div>
  );
};

export default Home;
