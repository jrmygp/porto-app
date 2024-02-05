/* eslint-disable react/jsx-no-target-blank */
function Button({ title, href, onClick }) {
  return (
    <a
      className="w-fit py-3 px-8 rounded-full text-2xl bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]"
      href={!onClick ? href : null}
      target="_blank"
      onClick={onClick ? onClick : null}
    >
      {title}
    </a>
  );
}

export default Button;
