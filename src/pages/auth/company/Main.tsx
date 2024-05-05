import { useState, useEffect } from "react";

const Main = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const onScroll = () => {
    console.log("Scrolling...");
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  console.log("Scroll state:", scroll);

  return (
    <>
      <div className="w-full min-h-[100vh] flex flex-col items-center relative">
        <div className="w-[95%] min-h-[550px] mt-5 flex items-center justify-center ">
          Main
        </div>
        <div className="w-[95%] min-h-[100vh] flex ">
          <div
            className={`w-[200px]  border-r-4 h-[100vh]    mr-3`}
          >
            <div className="my-2">Why Ajcash</div>
          </div>
          <div className="max-md:w-full">Right</div>
        </div>
      </div>
    </>
  );
};

export default Main;
