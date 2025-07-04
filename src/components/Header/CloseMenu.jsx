const CloseMenu = ({ onOpenMenu }) => {
  return (
    <svg
      className="md:hidden"
      width="14"
      height="13"
      onClick={onOpenMenu}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z"
        fill="#333D4B"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CloseMenu;
