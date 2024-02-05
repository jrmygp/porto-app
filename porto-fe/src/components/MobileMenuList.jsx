function MobileMenuList({ onClick }) {
  return (
    <div className="text-text-primary py-28 px-10 flex flex-col gap-10">
      <a className="text-3xl" href="#projects" onClick={onClick}>
        Projects
      </a>
      <a className="text-3xl" href="#technologies" onClick={onClick}>
        Technologies
      </a>
      <a className="text-3xl" href="#about-me" onClick={onClick}>
        About me
      </a>
    </div>
  );
}

export default MobileMenuList;
