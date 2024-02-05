import { IoMdMenu } from "react-icons/io";

function MobileMenuButton({ toggle, isOpen }) {
  return (
    <a onClick={toggle}>
      <IoMdMenu
        className={`transition ease-in-out delay-150 text-5xl  ${isOpen ? "text-text-primary" : "text-white"}`}
      />
    </a>
  );
}

export default MobileMenuButton;
