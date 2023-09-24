import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="z-50">
      <div className="flex justify-between items-center">
        <div>
          <img
            className="w-[70%] sm:w-full "
            src="https://i.ibb.co/tKVSCr8/Logo.png"
            alt=""
          />
        </div>
        <div>
          <ol className="flex gap-4 text-black text-xs sm:text-base font-bold">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/donation"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
