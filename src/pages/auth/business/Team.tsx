import TeamCard, { iTeam } from "./TeamCard";
import { teamData } from "./data";

const Team = () => {
  return (
    <div className="my-20 ">
      <center className="mb-10">
        <div className="text-[24px] font-bold">Team Expert</div>
        <div className="line w-[30px] border-violet-500 border border-dashed" />
      </center>

      <div className="w-full flex justify-center">
        <div className="w-[90%] xl:w-[70%] grid md:grid-cols-2 xl:grid-cols-4 justify-center gap-5">
          {teamData.map((el: iTeam, i: number) => (
            <TeamCard img={el.img} name={el.name} role={el.role} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
