// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Okko',
  imageBackground: true,
  openInNewTab: false,

  // Greetings
  greetingMorning: 'Rise and shine,',
  greetingAfternoon: 'Greetings,',
  greetingEvening: 'Have a great evening,',
  greetingNight: "Have a good night's sleep,",

  // Weather
  weatherKey: '28ab79e105acf332be4c914ffe12f862',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '60.169857',
  weatherLongitude: '24.938379',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Gmail',
      icon: 'mail',
      link: 'https://mail.google.com',
    },
    {
      id: '2',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com',
    },
    {
      id: '3',
      name: 'Wilma',
      icon: 'book',
      link: 'https://helsinki.inschool.fi',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '6',
      name: 'Maps',
      icon: 'map-pin',
      link: 'https://www.google.com/maps',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'briefcase',
  secondListIcon: 'tv',

  // Links
  lists: {
    firstList: [
      {
        name: 'Drive',
        link: 'https://drive.google.com',
      },
      {
        name: 'Classroom',
        link: 'https://classroom.google.com',
      },
      {
        name: 'Keep',
        link: 'https://keep.google.com',
      },
      {
        name: 'Translate',
        link: 'https://translate.google.com',
      },
    ],
    secondList: [
      {
        name: 'Helsingin Sanomat',
        link: 'https://hs.fi',
      },
      {
        name: 'Yle Uutiset',
        link: 'https://yle.fi',
      },
      {
        name: 'Mikrobitti',
        link: 'https://www.mikrobitti.fi',
      },
      {
        name: 'Google News',
        link: 'https://news.google.com',
      },
    ],
  },
};
