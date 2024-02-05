import { useEffect, useState } from "react";

import axiosInstance from "@/config/api";

const AdditionalTech = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const res = await axiosInstance.get("/skill");
      setSkills(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const excludedSkills = ["React", "React Native", "Next.js", "Express.js", "Node.js", "JavaScript"];

  const filteredSkills = skills.filter((skill) => !excludedSkills.includes(skill.title));

  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10 break-words">Additional technologies and skills</h1>

      <div className="flex flex-wrap gap-4">
        {filteredSkills.length > 0 &&
          filteredSkills.map((skill) => {
            return (
              <li key={skill.id} className="text-white text-3xl">
                <span>{skill.title}</span>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default AdditionalTech;
