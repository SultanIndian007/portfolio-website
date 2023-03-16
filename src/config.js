module.exports = {
  siteTitle: 'Aman Tiwari | Software Engineer',
  siteDescription:
    'Aman Tiwari is a pre-final from Thakur College of Engineering and Technology who specializes in full stack web development.',
  siteKeywords: 'Aman Tiwari, Aman, Tiwari, aman-tiwari, software engineer, web developer, tcet',
  siteUrl: 'https://amantiwari.live',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-CJZ4NM2JE1',
  googleVerification: 'todo',
  name: 'Aman Tiwari',
  location: 'Mumbai, India',
  email: 'amantiwari201608@gmail.com',
  github: 'https://github.com/SultanIndian007',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SultanIndian007',
    },
    {
      name: 'Codechef',
      url: 'https://leetcode.com/SultanIndian/',
    },
    {
      name: 'cc',
      url: 'https://www.codechef.com/users/aman_offical',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aman-tiwari-603245200/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Aman53736842',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#53F79E',
    navy: '#151629',
    darkNavy: '#0C0D21',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
