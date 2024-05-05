import ServiceCard, { iService } from "./ServiceCard";
import { data } from "./data";

const Services = () => {
  return (
    <div className="my-20 ">
      <center className="mb-10">
        <div className="text-[24px] font-bold">Services</div>
        <div className="line w-[30px] border-violet-500 border border-dashed" />
      </center>

      <div className="w-full flex justify-center">
        <div className="w-[90%] xl:w-[70%] grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {data.map((el: iService, i: number) => (
            <ServiceCard
              heading={el.heading}
              icon={el.icon}
              key={i}
              text={el.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
