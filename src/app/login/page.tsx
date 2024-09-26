"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import Button from "@/components/button/Button";
import AntEmail from "@/components/input/AntEmail";
import AntPass from "@/components/input/AntPass";
import { Form } from "antd";
import React from "react";

export default function Login() {
  return (
    <>
      <BackgroundVideo />
      <div className="grid place-items-center h-screen grid-cols-1">
        <div className="flex flex-col bg-white p-10 drop-shadow-md rounded-lg items-center justify-center">
          <Form>
            <AntEmail labelName="Email / Username" require />
            <AntPass labelName="Password" />
            <div className="flex justify-center">
              <Button>Masuk</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
