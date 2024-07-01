import profile_img1 from "@/assets/profile-hd2.jpg";
import Button from "./Button";

const AboutMe = () => {

  const downloadResumeHandler = () => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = "http://localhost:5173/src/assets/resume.pdf";
    a.download = "resume jeremy gerald puglisi";
    a.click();
    a.remove();
  };

  return (
    <div className="flex flex-col gap-24">
      <h1 className="text-6xl z-10">About Me</h1>

      <div className="flex gap-12 flex-col lg:flex-row z-10 items-center">
        <img
          src={profile_img1}
          className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover rounded-full flex-shrink-0"
          alt="profile-pic1-img"
        />

        <p className="text-white text-3xl text-center md:text-left">
          Graduated in 2021 as a Mining Engineer (B.E.). But not long after that realised, mining might not be my true
          passion. So I started to pursue my developer career in Purwadhika Digital School as a student. Graduated as
          the best student at my batch. Started my first job as a Front End Developer with lots of project developed. A
          full stack developer with front end speciality (web app and mobile app). Currently working as full stack
          engineer for Sprint Asia Technology
          <br />
          <br />
          {`Contact me if you're looking for a guy who gets the job done!`}
          <br />
          <br />
          <Button title="Download resume" onClick={downloadResumeHandler} />
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
