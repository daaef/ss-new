"use client";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/svgs/icons";
import { countriesAtom, nameRouteAtom } from "@/store";
import { Input } from "@nextui-org/input";
import { Link, Select, SelectItem } from "@nextui-org/react";
import { useAtom } from "jotai/index";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter()
  const [countries] = useAtom(countriesAtom);
  const [nameData, setNameData] = useAtom(nameRouteAtom);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  return (
    <>
      <form action="#" method="POST" className="grid gap-4">
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
          <div>
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
          <div className="addon-input">
            <Select
              items={countries}
              placeholder="Select an animal"
              className="max-w-xs addon-field selectShadowed"
              label="Country"
              selectedKeys={nameData?.country}
              name="code"
              onChange={(e) => {
                setNameData({
                  ...nameData,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              {(country) => (
                <SelectItem textValue={country.label} key={country.value}>
                  {country.label}
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
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="Example: a@b.c"
              description="It will not be public"
              name="email"
              value={nameData?.username}
              onChange={(e) => {
                setNameData({
                  ...nameData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
          </div>
          <div>
            <Input
              label="What should be your password?"
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
          <div>
            <Input
              label="Re-enter your password?"
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

        <div className="flex items-center justify-end">
          <div className="text-sm leading-6">
            <Link href="/auth/login" className="font-semibold text-sec">
              Already have an look? <span className="font-bold">Login</span>
            </Link>
          </div>
        </div>

        <div>
          <button onClick={()=> router.push('/auth/register/school')} className="btn-gradient">NEXT</button>
        </div>
      </form>
    </>
  );
}
