import Button from "./Button";

const Hero = () => {
  return (
    <div
      className={`w-full h-screen bg-background relative bg-center bg-cover bg-fixed`}
    >
      <div className="absolute w-full h-full bg-[#000000c6] flex justify-center items-center space-y-4 flex-col text-white">
        <div className="text-[20px] md:text-[30px]">Welcome to AjCash</div>
        <div className="text-[35px] text-center md:text-[70px] uppercase">
          We are <span className="text-violet-500 font-extrabold">fintech</span>{" "}
          solution
        </div>
        <div className="flex gap-5 items-center justify-between">
          <Button text="LEARN MORE" />
          <Button
            className="bg-violet-500 px-4 py-2 rounded-[40px]"
            text="GET STARTED"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
