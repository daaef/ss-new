"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/svgs/icons";
import { useState } from "react";
import { useAtom } from "jotai/index";
import { countriesAtom, nameRouteAtom } from "@/store";
import { Select, SelectItem } from "@nextui-org/react";

export default function Register() {
  const [countries] = useAtom(countriesAtom);
  const [nameData, setNameData] = useAtom(nameRouteAtom);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  return (
    <>
      <form action="#" method="POST" className="space-y-6">
        <div>
          <div>
            <Input
              type="text"
              label="What is your name?"
              placeholder="Example: Jon Snow"
              description="Tell us your name. Preferably your first and last name. You can add a middle name if you like."
              name="username"
              value={nameData?.username}
              onChange={(e) => {
                setNameData({
                  ...nameData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
          </div>
        </div>
        <div>
          <div className="mt-2">
            <Input
              type="text"
              label="How should we refer to you on ScoutSity?"
              placeholder="Example: Jon Snow"
              description="This will be your alias, so that other Sitizens can easily cite you. It can be your nickname, a
combination of letters and numbers, or anything you like, Just make it unique to you."
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">@</span>
                </div>
              }
              name="handle"
              value={nameData?.handle}
              onChange={(e) => {
                setNameData({
                  ...nameData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
          </div>
        </div>
        <div>
          <div className="mt-2 addon-input">
            <Select
              items={countries}
              placeholder="Select an animal"
              className="max-w-xs addon-field selectShadowed"
              label="Code"
              selectedKeys={nameData?.code}
              onChange={(e) => {
                setNameData({
                  ...nameData,
                  code: e.target.value,
                });
              }}
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <span>{item?.data?.value}</span>
                    </div>
                  </div>
                ));
              }}
            >
              {(country) => (
                <SelectItem textValue={country.label} key={country.value}>
                  {country.value}
                </SelectItem>
              )}
            </Select>
            <Input
              type="tel"
              label="Phone Number"
              placeholder="+1 234 5678 910"
              description="It will not be made public."
              name="phoneNumber"
              value={nameData?.phoneNumber}
              onChange={(e) => {
                setNameData({
                  ...nameData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
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
        <div>
          <div className="mt-2">
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility2}
                >
                  {isVisible2 ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible2 ? "text" : "password"}
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm leading-6">
            <a href="#" className="font-semibold text-sec">
              Already have an Look? <span className="font-bold">Login</span>
            </a>
          </div>
        </div>

        <div>
          <button className="btn-gradient">NEXT</button>
        </div>
      </form>
      <div className="mt-5 text-center text-sec">
        <a href="#">
          <span>New to ScoutSity?</span>{" "}
          <span className="font-semibold">Create new Look</span>
        </a>
      </div>
    </>
  );
}
