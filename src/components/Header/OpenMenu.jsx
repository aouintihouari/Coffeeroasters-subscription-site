const OpenMenu = ({ onOpenMenu }) => {
  return (
    <svg
      className="md:hidden"
      onClick={onOpenMenu}
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
        fill="#333D4B"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default OpenMenu;
