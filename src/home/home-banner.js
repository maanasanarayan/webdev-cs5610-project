import React from "react";
import { useSelector } from "react-redux";

const HomePageBanner = () => {
  const { user, loggedIn } = useSelector((state) => state.user);

  return (
    <div className="wd-home-banner p-5">
      <div className="col-md-12 col-sm-12 text-center">
        {!loggedIn && (
          <>
            <h2 className="text-white">Start investing today!</h2>
            <button className="btn btn-light rounded-pill mt-3 ps-4 pe-4 wd-color-blue">
              Get Started
            </button>
          </>
        )}
        {loggedIn && (
          <>
            <h2 className="text-white">Start investing today!</h2>
            <p className="text-white">
              Look up your favorite companies and explore what others are up
              to...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePageBanner;
