import React, { useState, useEffect } from "react";

const Main = () => {
  const [openExplainer, setExplainer] = useState(false);
  const [pageOn, setPageOn] = useState(0);

  const toggleExplainer = () => {
    console.log("explainer!");
    setPageOn(0); // Correctly reset the page to 0 using the setter function
    setExplainer(!openExplainer);
  };

  const increasePage = () => {
    setPageOn((prevPage) => Math.min(prevPage + 1, pages.length)); // Ensure it does not go beyond the maximum pages
  };

  const decreasePage = () => {
    setPageOn((prevPage) => Math.max(prevPage - 1, 0)); // Ensure it does not go below 0
  };

  useEffect(() => {
    console.log(`page on ${pageOn}`);
  }, [pageOn]);

  const pages = [
    "Page 1 content",
    "Page 2 content",
    "Page 3 content",
    "Page 4 content",
  ];

  return (
    <div className="h-screen w-screen p-4 relative">
      <div>hi friend</div>
      <div className="absolute bottom-10">
        {!openExplainer && (
          <button
            onClick={toggleExplainer}
            className="bg-red-600 mb-4 ml-4 rounded-full h-16 w-16 flex justify-center items-center"
          >
            Open
          </button>
        )}
        {openExplainer && (
          <div className="bg-yellow-500 h-64 w-64 flex flex-col justify-between p-4 transition duration-300 ease-in-out">
            <div className="font-bold">How to use our app</div>
            <div className="bg-pink-500 w-full h-[50%] flex items-center justify-center">
              {pageOn > 0 ? pages[pageOn - 1] : "Welcome! Click Next to start."}
            </div>
            <div className="flex justify-between">
              <button
                onClick={toggleExplainer}
                className="bg-red-600 rounded-full h-16 w-16 flex justify-center items-center"
              >
                Close
              </button>
              {pageOn > 0 && (
                <button
                  onClick={decreasePage}
                  className="bg-green-600 rounded-full h-16 w-16 flex justify-center items-center"
                >
                  Back
                </button>
              )}
              {pageOn < pages.length && (
                <button
                  onClick={increasePage}
                  className="bg-blue-600 rounded-full h-16 w-16 flex justify-center items-center"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
