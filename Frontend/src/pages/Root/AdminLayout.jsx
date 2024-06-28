import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

export default function AdminLayout() {
  const navigation = useNavigation();

  return (
    <>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
      
    </>
  );
}
