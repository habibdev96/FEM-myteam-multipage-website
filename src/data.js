import featureIconOne from './assets/icon-person.svg';
import featureIconTwo from './assets/icon-cog.svg';
import featureIconThree from './assets/icon-chart.svg';

import testimonialsAvatarOne from './assets/avatar-kady.jpg';
import testimonialsAvatarTwo from './assets/avatar-aiysha.jpg';
import testimonialsAvatarThree from './assets/avatar-arthur.jpg';

export const featuresData = [
  {
    id: 1,
    icon: featureIconOne,
    title: 'Experienced Individuals',
    description:
      'Our network is made up of highly experienced professionals who are passionate about what they do.',
  },
  {
    id: 2,
    icon: featureIconTwo,
    title: 'Easy to Implement',
    description:
      'Our processes have been refined over years of implementation meaning our teams always deliver.',
  },
  {
    id: 3,
    icon: featureIconThree,
    title: 'Enhanced Productivity',
    description:
      'Our customized platform with in-built analytics helps you manage your distributed teams.',
  },
];

export const testimonialsData = [
  {
    id: 1,
    quote:
      '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
    user: 'Kady Baker',
    role: 'Product Manager at Bookmark',
    avatar: testimonialsAvatarOne,
  },
  {
    id: 2,
    quote:
      '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gonethrough the roof!”',
    user: 'Aiysha Reese',
    role: 'Found of Manage',
    avatar: testimonialsAvatarTwo,
  },
  {
    id: 3,
    quote:
      '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
    user: 'Arthur Clarke',
    role: 'Co-founder of MyPhysio',
    avatar: testimonialsAvatarThree,
  },
];
