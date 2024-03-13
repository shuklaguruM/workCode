import React, { useEffect, useState } from "react";
import UserTree from "../components/OrgTree";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import EmplDetails from "../components/EmplDetails";
import "../index.css";

const PageLayout = () => {
  //const [currUser, setCurrUser] = useState();
  const [empData, setEmpData] = useState();
  const { username } = useParams();
  console.log(username);
  //console.log("Username: ", state.username);
  //const username = state.username;
  const getEmpData = async () => {
    const empData = await axios.get(
      `http://localhost:8080/employees/username/${username}`
    );
    console.log("Emp Data : ", empData);
    return empData;
  };

  useEffect(() => {
    (async () => {
      const data = await getEmpData();

      setEmpData(data);
    })();
  }, []);

  return (
    <div className="wrapper bg-image overflow-hidden">
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/3 p-4">
          {/* <h2 className="text-xl font-bold mb-4">Details Section</h2> */}
          {empData && <EmplDetails data={empData} />}
        </div>

        <div className="w-2/3 bg-white-300 p-4 ">
          <section className="h-[75vh] overflow-hidden w-2/3  p-4 absolute top-[14rem] left-[35rem] bg-white rounded-2xl">
            <div className="overflow-hidden">
              {empData && (
                <UserTree
                  id={empData.empId}
                  managerid={empData.data.managerDto.managerId}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PageLayout;
