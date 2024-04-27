import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
