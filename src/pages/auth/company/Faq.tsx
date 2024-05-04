import { useState, useEffect } from "react";

const Faq = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const onScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // Use useEffect to add the event listener on component mount and remove it on unmount
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center min-h-[100vh]">
        <div className="w-[95%] flex items-center ">
          <div className={`w-[200px]  h-[100vh] ${scroll ? "z-[100] sticky top-5" : ""}`}>
            <div className="my-3">Hello</div>
            <div className="my-3">Hello</div>
            <div className="my-3">Hello</div>
            <div className="my-3">Hello</div>
            <div className="my-3">Hello</div>
            <div className="my-3">Hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
