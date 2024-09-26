import { AiFillDashboard } from "react-icons/ai";
import { IoSchool } from "react-icons/io5";
// import { useLayout } from "./zustand/layout";
// import { PERMISSIONS } from "@/enum/permission.enum";
import { ROUTES } from "@/prefixs/router";

export function useMenuSetting() {
  // const { permissions } = useLayout();
  const PAGEMENU = [
    {
      show: true,
      icon: <AiFillDashboard />,
      url: ROUTES.USER,
      name: "Dashboard",
    },
    {
      // show: permissions.includes(PERMISSIONS.SCHOOL),
      icon: <IoSchool />,
      url: ROUTES.LOGIN,
      name: "Data Sekolah",
    },
  ];

  return { PAGEMENU };
}
