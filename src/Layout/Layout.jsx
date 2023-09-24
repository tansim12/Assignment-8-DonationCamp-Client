import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Loader from "../Components/Loader Spinner/Loader";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 my-5">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center">
            <Loader></Loader>
          </div>
        ) : (
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Layout;
