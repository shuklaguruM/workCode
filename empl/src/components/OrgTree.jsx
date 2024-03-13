import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import axios from "axios";
import { useCenteredTree } from "./helper";
import EmplDetails from "./EmplDetails";
import { BiBold } from "react-icons/bi";

const containerStyles = {
  width: "100%",
  height: "100vh",
  marginBottom: "20px",
  background: "white",
  borderRadius: "30px",
  overflow: "hidden",
};

const buttonStyle = {
  position: "relative",
  bottom: "0px",
  width: "250px",
  height: "210px",
  paddingTop: "16px",
  background: "pink",
  borderRadius: "50px",
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const nameStyle = {
  fontSize: "20px",
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  //handleNodeClick,
  handleDownNodeClick,
  handleUpNodeClick,
  id,
  managerIdForUpButton,
  toggleUpBottun,
}) => (
  <>
    <g>
      <foreignObject {...foreignObjectProps}>
        {console.log("managerId in forienObject: " + managerIdForUpButton)}
        {console.log("This is ndoedatum", nodeDatum)}
        {nodeDatum.attributes.managerId !== null &&
          nodeDatum.attributes.id === managerIdForUpButton &&
          toggleUpBottun && (
            <div style={{ textAlign: "center", marginTop: 1 }}>
              <button
                style={{
                  ...buttonStyle,
                  width: "5%",
                  height: "5%",
                  fontSize: "24px",
                  lineHeight: "inherit",
                  padding: 0,
                  //backgroundColor: "#28292D",
                  marginLeft: "113px",
                }}
                onClick={(event) =>
                  handleUpNodeClick(event, nodeDatum, toggleNode)
                }
              >
                +
              </button>
            </div>
          )}
        <button
          style={buttonStyle}
          //onClick={(event) => handleNodeClick(nodeDatum)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <img
                src={nodeDatum.attributes.img}
                alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={nameStyle}>
              {nodeDatum.name} {id === nodeDatum.attributes.id ? "(ME)" : ""}
            </div>
            {/* <div>Designation: {nodeDatum.attributes.designation}</div> */}
            {/* <div>Level: {nodeDatum.attributes.level}</div> */}
            <div>Id: {nodeDatum.attributes.id}</div>
          </div>
        </button>
        {nodeDatum.attributes.reportees !== 0 && (
          <div style={{ textAlign: "center", marginTop: 1 }}>
            <button
              style={{
                ...buttonStyle,
                width: "5%",
                height: "5%",
                fontSize: "24px",
                lineHeight: "inherit",
                padding: 0,
                //backgroundColor: "#28292D",
                marginLeft: "113px",
              }}
              onClick={(event) =>
                handleDownNodeClick(event, nodeDatum, toggleNode)
              }
            >
              {nodeDatum.__rd3t.collapsed || nodeDatum.children.length === 0
                ? "+"
                : "-"}
            </button>
          </div>
        )}
      </foreignObject>
    </g>
  </>
);

const UserTree = ({ id, managerid, setCurrUser }) => {
  const [myTreeData, setMyTreeData] = useState(null);
  const [toggleUpBottun, settoggleUpBottun] = useState(true);
  const [managerIdForUpButton, setmanagerIdForUpButton] = useState(managerid);
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 320 };
  const foreignObjectProps = {
    width: nodeSize.x,
    y: -100,
    height: nodeSize.y,
    x: -120,
  };

  // const handleNodeClick = async (nodeDatum) => {
  //   console.log("Clicked the node");
  //   console.log(nodeDatum);
  //   const emplData = await axios.get(
  //     `http://localhost:8080/employees/id/${nodeDatum.attributes.id}`
  //   );
  //   console.log("On clikcing the details to be rendered", emplData);
  //   setCurrUser(emplData.data);
  // };

  const handleDownNodeClick = async (e, nodeDatum, toggleNode) => {
    console.log("Reached down node click");
    console.log(nodeDatum);
    if (nodeDatum !== undefined && nodeDatum.attributes !== undefined) {
      const { id } = nodeDatum.attributes;
      console.log(id);
      console.log("id is", id);
      try {
        const reportees = await axios.get(
          `http://localhost:8080/byManager/${id}`
        );
        let reporteesList = reportees.data;
        console.log("Reporties List", reporteesList);
        for (let i = 0; i < reporteesList.length; i++) {
          const element = reporteesList[i];
          if (element === null) continue;
          const node = {
            name: element?.name,
            attributes: {
              id: element?.empId,
              reportees: reporteesList.length,
              managerId: element?.managerDto.managerId,
              img: element?.personalPhotoLink,
            },
            children: [],
          };
          setMyTreeData((prevData) => {
            return bfsdownwards(id, prevData, node);
          });
        }
      } catch (error) {
        // message: error.message;
      }
    }
    toggleNode();
  };

  const handleUpNodeClick = async (e, nodeDatum, toggleNode) => {
    console.log("Reached Up node click");

    if (nodeDatum !== undefined && nodeDatum.attributes !== undefined) {
      const { id } = nodeDatum.attributes;
      if (id !== undefined) {
        const { data } = await axios.get(
          `http://localhost:8080/employees/id/${id}`
        );
        if (data.managerDto !== null) {
          const managerId = data.managerDto.managerId;
          console.log("Managar id is here : ", managerId);
          const managerData = await axios.get(
            `http://localhost:8080/manager/${managerId}`
          );
          console.log("manager node detail start :");
          const node = {
            name: managerData?.data.managerName,
            attributes: {
              id: managerData.data?.managerId,
              reportees: 1,
              managerId: managerId,
              img: data.personalPhotoLink,
            },
            children: [],
          };
          setMyTreeData((prevData) => {
            return bfsUpwards(id, prevData, node);
          });
          setMyTreeData(node);
          console.log(myTreeData);
          setmanagerIdForUpButton(managerId);
        }
      }
    }
    settoggleUpBottun(false);
    toggleNode();
    settoggleUpBottun(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/manager/${managerid}`
      );
      console.log("Data", data);
      const reportees = await axios.get(
        `http://localhost:8080/byManager/${managerid}`
      );
      console.log("Reporties", reportees);
      let reporteesList = reportees.data;
      const children = [];
      for (let i = 0; i < reporteesList.length; i++) {
        const element = reporteesList[i];
        console.log("Elements : ", element);
        if (element === null) continue;
        const childData = {
          name: element.name,
          attributes: {
            id: element.empId,
            reportees: reporteesList.length,
            managerId: element?.managerDto.managerId,
            img: element?.personalPhotoLink,
          },
          children: [],
        };
        children.push(childData);
      }
      console.log(data);
      const manData = await axios.get(
        `http://localhost:8080/employees/id/${data.managerId}`
      );
      console.log("Manager Data : ", manData);
      const newData = {
        name: data.managerName,
        attributes: {
          id: data.managerId,
          reportees: reporteesList.length,
          managerId:
            manData.data.managerDto === null
              ? 1
              : manData.data.managerDto.managerId,
          img: manData.data.personalPhotoLink,
        },
        children: children,
      };
      setMyTreeData(newData);
    };
    fetchData();
  }, []);

  function bfsdownwards(id, tree, node) {
    const queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      const currNode = queue.pop();
      if (currNode.attributes?.id === id) {
        if (
          !currNode.children.some(
            (child) => child.attributes.id === node.attributes.id
          )
        ) {
          currNode.children.push(node);
          return { ...tree };
        }
      }
      const len = currNode.children.length;
      for (let i = 0; i < len; i++) {
        queue.unshift(currNode.children[i]);
      }
    }
    return tree;
  }

  function bfsUpwards(id, tree, node) {
    const queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      const currNode = queue.pop();
      if (currNode.attributes?.id === id) {
        node.children.push(currNode);
        return { ...tree };
      }
      const len = currNode.children.length;
      for (let i = 0; i < len; i++) {
        queue.unshift(currNode.children[i]);
      }
    }
    return tree;
  }

  return (
    <div className="App">
      <div id="treeWrapper" style={containerStyles} ref={containerRef}>
        {myTreeData && (
          <Tree
            data={myTreeData}
            pathFunc="curve"
            separation={{ siblings: 1, nonSiblings: 1 }}
            orientation="vertical"
            translate={translate}
            dimensions={dimensions}
            nodeSize={nodeSize}
            centeringTransitionDuration={200}
            allowForeignObjects
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({
                ...rd3tProps,
                foreignObjectProps,
                //handleNodeClick,
                handleDownNodeClick,
                id,
                handleUpNodeClick,
                managerIdForUpButton,
                toggleUpBottun,
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default UserTree;
