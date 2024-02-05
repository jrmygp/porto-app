import { useEffect, useState } from "react";

import TechStackItem from "./TechStackItem";
import axiosInstance from "@/config/api";

function TechStacks() {
  const [techs, setTechs] = useState([]);

  const fetchTechs = async () => {
    try {
      const res = await axiosInstance.get("/tech");
      setTechs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTechs();
  }, []);
  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">Tech Stacks</h1>

      <section className="flex flex-col gap-10">
        {techs.length > 0 &&
          techs.map((tech) => {
            return <TechStackItem key={tech.id} image={tech.image} name={tech.title} value={tech.percentage} />;
          })}
      </section>
    </div>
  );
}

export default TechStacks;
