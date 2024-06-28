// const BASE_URL = "http://localhost:5000"; // Update the URL with your backend URL

import { useEffect } from "react";

// // Function to send an enquiry to the backend
// export const sendEnquiry = async (data) => {
//   try {
//     const response = await fetch(`${BASE_URL}/enquiries`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send enquiry");
//     }

//     const responseData = await response.json();
//     return responseData; // You can modify this to return any data from the response if needed
//   } catch (error) {
//     console.error("Error sending enquiry:", error);
//     throw error;
//   }
// };

// // Function to fetch list data from the backend
// export const getListData = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/list`);

//     if (!response.ok) {
//       throw new Error("Failed to fetch list data");
//     }

//     const listData = await response.json();
//     return listData;
//   } catch (error) {
//     console.error("Error fetching list data:", error);
//     throw error;
//   }
// };

// // Add more functions for fetching other types of data as needed (e.g., location, footer, etc.)

const BASE_URL = "http://localhost:5000"; // Update the URL with your backend URL

// Function to fetch data from the backend
// export const fetchData = async (endpoint) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${endpoint}`);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${endpoint} data`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Error fetching ${endpoint} data:`, error);
//     throw error;
//   }
// };

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:5000${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Function to add data to the backend
export const addData = async (newData, endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error(`Failed to add data to ${endpoint}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Error adding data to ${endpoint}:`, error);
    throw error;
  }
};

// Function to delete data from the backend
export const deleteData = async (id, endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete data from ${endpoint}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Error deleting data from ${endpoint}:`, error);
    throw error;
  }
};


export function useFetchData(endpoint, setData) {
  useEffect(() => {
    async function fetchDataFromBackend() {
      try {
        const data = await fetchData(endpoint);
        console.log("Fetched data:", data); // Log the fetched data
        setData(data);
        console.log("Data set successfully:", data); // Log to confirm that data is set in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataFromBackend();
  }, [endpoint, setData]);
}


export const getDataById = async (id, endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to retrieve data from ${endpoint}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Error retrieving data from ${endpoint}:`, error);
    throw error;
  }
};


export const updateDataById = async (id, updatedData, endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update data in ${endpoint}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Error updating data in ${endpoint}:`, error);
    throw error;
  }
};
