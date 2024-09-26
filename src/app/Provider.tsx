"use client";

import BackButton from "@/components/layout/BackButton";
import TopNav from "@/components/layout/navbar/TopNav";
import SideBar from "@/components/layout/sidebar/SideBar.";
import SideMenu from "@/components/layout/sidebar/SideMenu";
import api from "@/config/axiosConfig";
import { useLayout } from "@/hooks/zustand/layout";
// import { useAdminProfile } from "@/hooks/zustand/useAdminProfile";
import { NextUIProvider } from "@nextui-org/react";
import { Breadcrumb, ConfigProvider } from "antd";
import id_ID from "antd/lib/locale/id_ID";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
// import { usePathname, useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  console.log(path);
  const {
    isLoading,
    isError,
    setError,
    isSuccess,
    setIsSuccess,
    isMessage,
    // setPermissions,
  } = useLayout();

  // const router = useRouter();
  // const path = usePathname();

  const token = getCookie("_token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  // const { setAdminProfile } = useAdminProfile();

  // const getMe = async () => {
  //   try {
  //     const res = await api.get(`/auth/admin/me`);
  //     console.log("here", res);
  //     setPermissions(res.data.data.role.permissions);
  //     setAdminProfile({
  //       name: res.data.data.name,
  //     });
  //     if (path === "/") {
  //       router.push("/user");
  //     }
  //   } catch (error) {
  //     deleteCookie("_token");
  //     router.push("/");
  //   }
  // };

  useEffect(() => {
    if (isSuccess && isMessage) {
      toast.success(isMessage);
      setIsSuccess(false, "");
    }
    if (isError && isMessage) {
      toast.error(isMessage);
      setError(false, "");
    }
    // getMe();
  }, [isSuccess, isError, isLoading]);

  return (
    <NextUIProvider>
      <NextTopLoader
        color="#7FC7D9"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        zIndex={100000}
        showSpinner={true}
        easing="ease"
      />
      <Toaster />
      <ConfigProvider locale={id_ID}>
        {path !== "/login" ? (
          <>
            <TopNav />
            <div className="hidden lg:block z-30">
              <SideMenu />
            </div>
            <SideBar />
            <div className="mt-16 z-0 lg:ml-64 bg-gray-100 p-3">
              <div className="flex items-center justify-start pb-2 border-b gap-5">
                <div>
                  <BackButton />
                </div>
                <div className="overflow-x-scroll no-scrollbar">
                  <Breadcrumb />
                </div>
              </div>
              <div className="mt-2">{children}</div>
              {/* <Bottom /> */}
            </div>
          </>
        ) : (
          <>{children}</>
        )}
      </ConfigProvider>
    </NextUIProvider>
  );
}
