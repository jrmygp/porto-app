/* eslint-disable no-unused-vars */

import { IoReader, IoLink } from "react-icons/io5";

import Button from "./Button";

function ProjectCard({ title, description, url, image, stacks = [], onClick }) {
  const hostName = import.meta.env.VITE_PUBLIC_API;

  return (
    <div className="h-[550px] shadow-[0px_0px_3px_0px_#fff] rounded-xl z-20 flex flex-col items-center gap-7 p-6 bg-primary">
      <img
        className="h-64 w-full object-contain rounded-xl bg-primary"
        src={`${hostName}/${image}`}
        alt={`${title}-img`}
      />

      <h2 className="text-4xl text-center h-[60px]">{title}</h2>

      <div className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] h-1 w-full" />

      <section className="w-full flex flex-col gap-2">
        <p className="text-white text-2xl">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {stacks?.length > 0 &&
            stacks.map((stack) => {
              return (
                <img
                  key={stack.id}
                  src={`${hostName}/${stack.image}`}
                  className="h-10 w-10 object-contain rounded-lg"
                />
              );
            })}
        </div>
      </section>

      <section className="flex items-center gap-4">
        <Button
          title={
            <div className="flex items-center gap-2">
              <IoReader /> <p className="m-0 text-xl">Read</p>
            </div>
          }
          onClick={() => onClick(description)}
        />

        <Button
          title={
            <div className="flex items-center gap-2">
              <IoLink /> <p className="m-0 text-xl">Check</p>
            </div>
          }
          href={url}
        />
      </section>
    </div>
  );
}

export default ProjectCard;
