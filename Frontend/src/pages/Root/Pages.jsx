import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import RootLayout from "./Route";
import Login from "../home/Register/Login";
import Signup from "../home/Register/Signup";
import PropertyInfo from "../property/PropertyInfo";
import Home from "../home/Home";
import Admin from "../admin/Admin";

// const Pages = () => {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/services" component={Services} />
//           <Route exact path="/blog" component={Blog} />
//           <Route exact path="/pricing" component={Pricing} />
//           <Route exact path="/contact" component={Contact} />
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signin", element: <Signup /> },
      { path: "property", element: <PropertyInfo /> },
    ],
  },
  { path: "admin", element: <Admin /> },
]);

function Pages() {
  return <RouterProvider router={router} />;
}

export default Pages;
