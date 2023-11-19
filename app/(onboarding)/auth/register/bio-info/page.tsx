"use client";
import { states } from "@/app/(onboarding)/auth/data";
import { AddCircleIcon } from "@/components/svgs/icons";
import { bioInfoRouteAtom, lgasAtom, schoolRouteAtom } from "@/store";
import { Input } from "@nextui-org/input";
import {
	Link,
	Radio,
	RadioGroup,
	Select,
	SelectItem,
	Textarea,
} from "@nextui-org/react";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BioInfo() {
	const [, setSelectedState] = useState("");
	const [lgas, setLgas] = useAtom(lgasAtom);
	const [, setLga] = useState("");
	const [schoolData, setSchoolData] = useAtom(schoolRouteAtom);
	const [bioInfoData, setBioInfoData] = useAtom(bioInfoRouteAtom);
	const handleState = (e: any) => {
		setSchoolData({
			...schoolData,
			[e.target.name]: e.target.value,
		});
		setSelectedState(e.target.value);
		const selectedState = states.find((stat) => stat?.state === e.target.value);
		setLgas(selectedState ? selectedState.lgas : []);
	};
	const handleLGA = (e: any) => {
		setSchoolData({
			...schoolData,
			[e.target.name]: e.target.value,
		});
		setLga(e.target.value);
	};
	const router = useRouter();
	return (
		<>
			<form action='#' method='POST' className='grid gap-4'>
				<div>
					<Textarea
						label='What is the name of your school?'
						placeholder='Example: John Hopkins University'
						description='In a sentence or two, say something interesting you want people to know about you when they view your profile.'
						name='bio'
						isRequired
						value={bioInfoData?.bio}
						onChange={(e) => {
							setBioInfoData({
								...bioInfoData,
								[e.currentTarget.name]: e.currentTarget.value,
							});
						}}
					/>
					<div className='flex justify-end'>
						<span className='text-gray-500 italic '>200 max</span>
					</div>
				</div>
				<div>
					<RadioGroup
						className='w-full'
						label='What type of institution is it?'
						orientation='horizontal'
						isRequired
						name='type'
						value={schoolData?.type}
						onChange={(e) => {
							setSchoolData({
								...schoolData,
								[e.currentTarget.name]: e.currentTarget.value,
							});
						}}>
						<Radio value='high-school'>High School</Radio>
						<Radio value='sydney'>Higher Institution</Radio>
						<Radio value='other'>Other</Radio>
					</RadioGroup>
				</div>
				<div className=''>
					<h3 className='text-gray-500 mb-2'>Where is the School located?</h3>
					<div className='grid grid-cols-2 gap-6'>
						<div>
							<Select
								label='Select State'
								placeholder='Select a state'
								className='max-w-xs selectShadowed'
								onChange={handleState}
								name='state'
								isRequired
								defaultSelectedKeys={schoolData?.state}>
								{states.map((stat) => (
									<SelectItem key={stat.state} value={stat.state}>
										{stat.state}
									</SelectItem>
								))}
							</Select>
						</div>
						<div>
							<Select
								label='Select LGA'
								placeholder='Select a lga'
								className='max-w-xs selectShadowed'
								onChange={handleLGA}
								name='lga'
								defaultSelectedKeys={schoolData?.lga}
								isRequired>
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
						className='w-full'
						label='What is your status in reference to the school?'
						orientation='horizontal'
						isRequired
						name='status'
						value={schoolData?.status}
						onChange={(e) => {
							setSchoolData({
								...schoolData,
								[e.currentTarget.name]: e.currentTarget.value,
							});
						}}>
						<Radio value='student'>Student</Radio>
						<Radio value='alumnus-alumna'>Alumnus/Alumna</Radio>
						<Radio value='other'>Other</Radio>
					</RadioGroup>
				</div>
				<div>
					<Input
						type='text'
						label='What do/did you study at the school?'
						placeholder='Example: Electrical Engineering'
						name='course'
						value={schoolData?.course}
						onChange={(e) => {
							setSchoolData({
								...schoolData,
								[e.currentTarget.name]: e.currentTarget.value,
							});
						}}
					/>
				</div>
				<div className='flex justify-center'>
					<a href='#' className='btn-gradient unset-width pill outlined'>
						<div className='btn-container'>
							<AddCircleIcon className='primary' />
							<span className='text-sm font-semibold leading-6 uppercase text-prim'>
								Add School
							</span>
						</div>
					</a>
				</div>

				<div className='flex items-center justify-end'>
					<div className='text-sm leading-6'>
						<Link href='/auth/login' className='font-semibold text-sec'>
							Already have an look?{" "}
							<span className='font-extrabold ml-2'>Login</span>
						</Link>
					</div>
				</div>

				<div>
					<button
						onClick={() => router.push("/auth/register/bio-info")}
						className='btn-gradient'>
						NEXT
					</button>
				</div>
			</form>
		</>
	);
}
