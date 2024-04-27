const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use("/images", express.static("/images"));
app.use(express.json());

// Load data from JSON files
const loadData = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Error reading ${filePath} file:`, error);
    return [];
  }
};

// Write data to JSON file
// const writeDataToFile = (filePath, data, res, successMessage) => {
//   fs.writeFile(filePath, JSON.stringify(data), (err) => {
//     if (err) {
//       console.error(`Error writing to ${filePath}:`, err);
//       res.status(500).send("Internal Server Error");
//       return;
//     }
//     console.log(successMessage);
//     res.status(200).send("Data added successfully");
//   });
// };
const writeDataToFile = (filePath, data, res, successMessage) => {
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.error(`Error writing to ${filePath}:`, err);
      res.status(500).json({ error: "Internal Server Error" }); // Send error response as JSON
      return;
    }
    console.log(successMessage);
    res.status(200).json({ message: "Data added successfully" }); // Send success response as JSON
  });
};

// Route to get list data
app.get("/list", (req, res) => {
  const listData = loadData("./data/list.json");
  res.json(listData);
});

// Route to get location data
app.get("/location", (req, res) => {
  const locationData = loadData("./data/location.json");
  res.json(locationData);
});

// Route to get footer data
app.get("/footer", (req, res) => {
  const footerData = loadData("./data/footer.json");
  res.json(footerData);
});

// Route to get enquiries data
app.get("/enquiries", (req, res) => {
  const enquiriesData = loadData("./data/enquiries.json");
  res.json(enquiriesData);
});

// Route to add new enquiry
app.post("/enquiries", (req, res) => {
  const newEnquiry = req.body;
  const enquiriesData = loadData("./data/enquiries.json");
  enquiriesData.push(newEnquiry);
  writeDataToFile(
    "./data/enquiries.json",
    enquiriesData,
    res,
    "Enquiry added successfully"
  );
});

// Route to add new list entry
app.post("/list", (req, res) => {
  const newListEntry = req.body;
  const listData = loadData("./data/list.json");
  listData.push(newListEntry);
  writeDataToFile(
    "./data/list.json",
    listData,
    res,
    "List entry added successfully"
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// const fs = require("fs"); // Import the fs module
// const app = express();
// let list = require("./data/list.json");
// const location = require("./data/location.json");
// const footer = require("./data/footer.json");
// let enquiries = require("./data/enquiries.json");

// app.use(cors());

// app.use("/images", express.static("/images"));
// app.use(express.json()); // Middleware to parse JSON request bodies

// app.get("/list", (req, res) => {
//   res.json(list);
// });

// app.get("/location", (req, res) => {
//   res.json(location);
// });

// app.get("/footer", (req, res) => {
//   res.json(footer);
// });

// // Serve enquiries data
// app.get("/enquiries", (req, res) => {
//   res.json(enquiries);
// });

// enquiries = [];
// try {
//   const enquiriesData = fs.readFileSync("./data/enquiries.json", "utf8");
//   enquiries = JSON.parse(enquiriesData);
// } catch (error) {
//   console.error("Error reading enquiries file:", error);
// }

// // Route to handle new enquiries
// app.post("/enquiries", (req, res) => {
//   const newEnquiry = req.body;

//   // Add the new enquiry to the enquiries array
//   enquiries.push(newEnquiry);

//   // Update enquiries.json file with the latest data
//   fs.writeFile("./data/enquiries.json", JSON.stringify(enquiries), (err) => {
//     if (err) {
//       console.error("Error writing to enquiries.json:", err);
//       res.status(500).send("Internal Server Error");
//       return;
//     }
//     console.log("Enquiry added successfully");
//     res.status(200).send("Enquiry added successfully");
//   });
// });

// // Farmhouse
// list = [];
// try {
//   const listData = fs.readFileSync("./data/list.json", "utf8");
//   list = JSON.parse(listData);
// } catch (error) {
//   console.error("Error reading list file:", error);
// }

// // Route to handle new list
// app.post("/list", (req, res) => {
//   const newEnquiry = req.body;

//   // Add the new enquiry to the list array
//   list.push(newEnquiry);

//   // Update list.json file with the latest data
//   fs.writeFile("./data/list.json", JSON.stringify(list), (err) => {
//     if (err) {
//       console.error("Error writing to list.json:", err);
//       res.status(500).send("Internal Server Error");
//       return;
//     }
//     console.log("Enquiry added successfully");
//     res.status(200).send("Enquiry added successfully");
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
