"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/svgs/icons";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "@nextui-org/react";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <form action="#" method="POST" className="space-y-6">
        <div>
          <div>
            <Input
              type="text"
              label="Phone Number"
              placeholder="Phone number, alias, or email address"
            />
          </div>
        </div>

        <div>
          <div className="mt-2">
            <Input
              label="Password"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm leading-6">
            <a href="#" className="font-semibold text-sec">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button className="btn-gradient">LOGIN</button>
        </div>
      </form>
      <div className="mt-5 text-center text-sec">
        <Link href="/auth/register">
          <span>New to ScoutSity?</span>{" "}
          <span className="font-semibold">Create new Look</span>
        </Link>
      </div>
    </>
  );
}
