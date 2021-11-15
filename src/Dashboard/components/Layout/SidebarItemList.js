import {
  AiFillHome,
  AiFillRightSquare,
  AiFillProject,
  AiFillRocket,
  AiOutlineAreaChart,
  AiFillSetting,
  AiFillLayout,
  AiOutlineLogout,
} from "react-icons/ai";

const initialItemInSideBar = [
  {
    name: "Home",
    icon: <AiFillHome className="" size="24px" />,
    link: "/home",
  },
  {
    name: "Project",
    icon: <AiFillRightSquare className="" size="24px" />,
    link: "/home/project",
  },
  {
    name: "Background",
    icon: <AiFillProject className="" size="24px" />,
    link: "/home/background",
  },
  // {
  //   name: "Explore",
  //   icon: <AiFillRocket className="" size="24px" />,
  //   link: "/home/explore",
  // },
  {
    name: "Analytics",
    icon: <AiOutlineAreaChart className="" size="24px" />,
    link: "/home/analytics",
  },
  {
    name: "Setting",
    icon: <AiFillSetting className="" size="24px" />,
    link: "/home/setting",
  },
  // {
  //   name: "Themes",
  //   icon: <AiFillLayout className="" size="24px" />,
  //   link: "/home/theme",
  // },
  {
    name: "Logout",
    icon: <AiOutlineLogout className="" size="24px" />,
    link: "",
    logout: true,
  },
];

export default initialItemInSideBar;
