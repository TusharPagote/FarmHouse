// import React, { useRef, useState } from "react";
// import FarmhouseCard from "./FarmhouseCard";
// import { useFetchData } from "../../../assets/data/http";
// // import EnquiryModal from "../../../components/modal/MessageModal";
// import FarmhouseForm from "../../../components/modal/FarmhouseForm";
// import FormModal from "../../../components/modal/FormModal";

// const FarmhouseList = () => {
//   const [farmhouseList, setFarmhouseList] = useState([]);
//   useFetchData("/list", setFarmhouseList, (error) => {
//     console.error("Error fetching data:", error);
//   });

//   console.log("Farmhouse List: " + farmhouseList);

//   const handleEdit = (id) => {
//     console.log(`Editing farmhouse with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     console.log(`Deleting farmhouse with ID ${id}`);
//   };

//   const handleView = (id) => {
//     console.log(`Viewing details of farmhouse with ID ${id}`);
//   };

//   const dialog = useRef();

//   function handleClick() {
//     dialog.current.open();
//   }

//   if (!farmhouseList) {
//     return <div></div>;
//   }

//   return (
//     <>
//       <FormModal
//         ref={dialog}
//         endpont="list"
//         message="Your enquiry has been successfully submitted."
//       >
//         <FarmhouseForm />
//       </FormModal>
//       <main className="admin-container">
//         <div className="main-title">
//           <h2>All Farmhouse</h2>
//           <button className="view-button" onClick={handleClick}>
//             Add farmhouse
//           </button>
//         </div>
//         <div className="farmhouse-list">
//           {farmhouseList.map((farmhouse) => (
//             <FarmhouseCard
//               key={farmhouse.id}
//               id={farmhouse.id}
//               name={farmhouse.name}
//               location={farmhouse.location}
//               category={farmhouse.category}
//               price={farmhouse.price}
//               onEdit={() => handleEdit(farmhouse.id)}
//               onDelete={() => handleDelete(farmhouse.id)}
//               onView={() => handleView(farmhouse.id)}
//             />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };

// export default FarmhouseList;

import React, { useRef, useState } from "react";
import FarmhouseCard from "./FarmhouseCard";
import { deleteData, useFetchData } from "../../../assets/data/http";
import FarmhouseForm from "../../../components/modal/FarmhouseForm";
import FormModal from "../../../components/modal/FormModal";
import ShowDetailModal from "../../../components/modal/ShowDetailModal";
import RecentCard from "../../home/recent/RecentCard";

const FarmhouseList = () => {
  const [farmhouseList, setFarmhouseList] = useState([]);
  // const [selectedFarmhouse, setSelectedFarmhouse] = useState(null);
  useFetchData("/list", setFarmhouseList, (error) => {
    console.error("Error fetching data:", error);
  });

  const formDialog = useRef();
  const detailDialog = useRef();

  console.log("Farmhouse List: " + farmhouseList);

  const handleEdit = (id) => {
    console.log(`Editing farmhouse with ID ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      // Perform deletion logic here, using the deleteData function from the HTTP file
      await deleteData(id, "list");
      // Update farmhouseList state to reflect the deletion
      setFarmhouseList(
        farmhouseList.filter((farmhouse) => farmhouse.id !== id)
      );
      console.log(`Deleted farmhouse with ID ${id}`);
    } catch (error) {
      console.error(`Error deleting farmhouse with ID ${id}:`, error);
    }
  };

  const handleView = (farmhouse) => {
    console.log("Viewing farmhouse:", farmhouse);
    detailDialog.current.open({ farmhouse });
    console.log(`Viewing details of farmhouse with ID ${farmhouse.id}`);
  };

  function handleClick() {
    formDialog.current.open();
  }

  if (!farmhouseList) {
    return <div></div>;
  }

  return (
    <>
      <FormModal
        ref={formDialog}
        endpont="list"
        message="Your enquiry has been successfully submitted."
      >
        <FarmhouseForm defaultValues={{}} />
      </FormModal>
      <ShowDetailModal ref={detailDialog} tag="farmhouse" />
      <main className="admin-container">
        <div className="main-title">
          <h2>All Farmhouse</h2>
          <button className="view-button" onClick={handleClick}>
            Add farmhouse
          </button>
        </div>
        <div className="farmhouse-list">
          {farmhouseList.map((farmhouse) => (
            <FarmhouseCard
              key={farmhouse.id}
              id={farmhouse.id}
              name={farmhouse.name}
              location={farmhouse.location}
              category={farmhouse.category}
              price={farmhouse.price}
              onEdit={() => handleEdit(farmhouse.id)}
              onDelete={() => handleDelete(farmhouse.id)} // Pass handleDelete function
              onView={() => handleView(farmhouse)}
            />
          ))}
        </div>
        {/* <section className="recent">
          <div className="">
            <RecentCard />
          </div>
        </section> */}
      </main>
    </>
  );
};

export default FarmhouseList;
