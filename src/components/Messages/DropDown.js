import { NavLink } from "react-router-dom";

const buttons = [
  {
    name: "View Account",
    link: "/Alt/ProductsPage",
  },
  {
    name: "Report",
    link: "/AccountReporting/AccountReports",
  },
];

const drawButtons = (button) => (
  <NavLink to={button.link}>
    <li key={button.name} className="p-2 rounded-xl hover:bg-green-900 ">
      {button.name}
    </li>
  </NavLink>
);

export default function DropDown(props) {
  const isOpen = props.isOpen;
  return (
    <div className="">
      <div className="flex justify-end cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="p-2 w-14 h-14 items-end rounded-full hover:bg-green-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
      <div>
        {isOpen && (
          <ul className="flex flex-col bg-green-700  rounded-2xl p-2">
            {buttons.map(drawButtons)}
          </ul>
        )}
      </div>
    </div>
  );
}
