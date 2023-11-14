import { BioInfoTabIcon, ConfirmTabIcon, ImageTabIcon, NameTabIcon, SchoolTabIcon } from '@/components/svgs/icons';
import { atom } from 'jotai';
import { nanoid } from 'nanoid';

type CatType = {
  name: string;
  age: string;
  id: string;
};

const navigation = [
  {name: "Name", href: "/auth/register", icon: NameTabIcon},
  {name: "School", href: "/auth/register/school", icon: SchoolTabIcon},
  {name: "Bio&info", href: "/auth/register/bio-info", icon: BioInfoTabIcon},
  {name: "Image", href: "/auth/register/image", icon: ImageTabIcon},
  {name: "Confirm", href: "/auth/register/confirm", icon: ConfirmTabIcon},
]

const pageContent = [
  {
    route: '/auth/login',
    title: 'Login to you ScoutSity Account',
    subTitle: 'Connect with  peers and like-minds',
  },
  {
    route: '/auth/register',
    title: 'Create a new look',
    subTitle: 'A Look is an account on SityWatch. When someone creates a Look, that person becomes a Sitizen of SityWatch. Use the progress bar to navigate between steps.',
  },
  {
    route: '/auth/register/school',
    title: 'Create a new look',
    subTitle: 'A school represents any institution where you received a formal education. It could bea high school, a college, a university, a polytechnic,an academy, etc.',
  },
  {
    route: '/auth/register/bio-info',
    title: 'Create a new look',
    subTitle: 'What would you like people to know about you? This information would enable you connect with others and have a better experience on the platform',
  },
  {
    route: '/auth/register/image',
    title: 'Create a new look',
    subTitle: 'The alignment of the backdrop and the profile picture is a representation of how your profile would look like.',
  },
  {
    route: '/auth/register/confirm',
    title: 'Create a new look',
    subTitle: 'Cross check to make sure all the details are how you’d want them to be. Use the progress bar in navigating back to previous steps to make any changes. Welcome to SityWatch!',
  },
]

export const pageAtom = atom(pageContent);
export const navigationAtom = atom(navigation);