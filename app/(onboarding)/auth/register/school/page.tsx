"use client"
import { states } from '@/app/(onboarding)/auth/data';
import { lgasAtom, schoolRouteAtom } from "@/store";
import { Input } from "@nextui-org/input";
import { Link, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

  const [, setSelectedState] = useState("")
  const [lgas, setLgas] = useAtom(lgasAtom)
  const [, setLga] = useState("")
  const [schoolData, setSchoolData] = useAtom(schoolRouteAtom);
  const handleState = (e: any) => {
      setSchoolData({
        ...schoolData,
        [e.target.name]: e.target.value
      })
      setSelectedState(e.target.value)
      const selectedState = states.find(stat => stat?.state === e.target.value);
      setLgas(selectedState ? selectedState.lgas : [])
  }
  const handleLGA = (e: any) => {
      setSchoolData({
        ...schoolData,
        [e.target.name]: e.target.value
      })
      setLga(e.target.value)
  }
  const router = useRouter()
  return (
    <>
      <form action="#" method="POST" className="grid gap-4">
          <div>
            <Input
              type="text"
              label="What is the name of your school?"
              placeholder="Example: John Hopkins University"
              description="Tell us the name of the school you attended or are currently attending. You have the option to add more schools below."
              name="name"
              value={schoolData?.name}
              onChange={(e) => {
                setSchoolData({
                  ...schoolData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
          </div>
          <div>
            <RadioGroup
              className="w-full"
              label="What type of institution is it?"
              orientation="horizontal"
              isRequired
            >
              <Radio value="high-school">High School</Radio>
              <Radio value="sydney">Higher Institution</Radio>
              <Radio value="other">Other</Radio>
            </RadioGroup>
          </div>
          <div className="">
            <h3 className='text-gray-500 mb-2'>Where is the School located?</h3>
            <div className="grid grid-cols-2 gap-6">
                      <div>
                          <Select
                              label="Select State"
                              placeholder="Select a state"
                              className="max-w-xs selectShadowed"
                              onChange={handleState}
                              name="state"
                              isRequired
                          >
                              {states.map((stat) => (
                                  <SelectItem key={stat.state} value={stat.state}>
                                      {stat.state}
                                  </SelectItem>
                              ))}
                          </Select>
                      </div>
                      <div>
                          <Select
                              label="Select LGA"
                              placeholder="Select a lga"
                              className="max-w-xs selectShadowed"
                              onChange={handleLGA}
                              name="lga"
                              isRequired
                          >
                              {lgas.map((lga) => (
                                  <SelectItem key={lga} value={lga}>
                                      {lga}
                                  </SelectItem>
                              ))}
                          </Select>
                      </div>
            </div>
          </div>
          <div>
            <RadioGroup
            className="w-full"
              label="What is your status in reference to the school?"
              orientation="horizontal"
              isRequired
            >
              <Radio value="student">Student</Radio>
              <Radio value="alumnus-alumna">Alumnus/Alumna</Radio>
              <Radio value="other">Other</Radio>
            </RadioGroup>
          </div>

        <div className="flex items-center justify-end">
          <div className="text-sm leading-6">
            <Link href="/auth/login" className="font-semibold text-sec">
              Already have an look? <span className="font-extrabold ml-2">Login</span>
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