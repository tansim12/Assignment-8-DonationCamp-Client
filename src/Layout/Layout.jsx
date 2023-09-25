import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Loader from "../Components/Loader Spinner/Loader";
import { useEffect } from "react";

const Layout = () => {
  const navigation = useNavigation();
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Home";
    } else if (loc.pathname === "/donation") {
      document.title = "Total Donation";
    } else if (loc.pathname === "/statistics") {
      document.title = "Donation Pie Chart";
    } else {
      document.title = `${loc.state?.category_name}`;
    }
  }, [loc.pathname, loc.state?.category_name]);
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 my-5  ">
      <div>
        {" "}
        <Navbar></Navbar>
      </div>
      <div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center">
            <Loader></Loader>
          </div>
        ) : (
          <div className="min-h-[50vh]">
            <Outlet></Outlet>
          </div>
        )}
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Layout;
