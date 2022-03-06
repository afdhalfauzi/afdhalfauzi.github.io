import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: 'Afdhal',
    lastName: 'Fauzi',
    grettings: {
      nickName: 'Afdhal',
      subTitle: 'A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact',
    },
    links: {
      github: 'https://github.com/afdhalfauzi',
      linkedin: 'https://www.linkedin.com/in/afdhal-fauzi-180650190/',
      instagram: 'https://www.instagram.com/afdhalfauzi_/',
      gmail: 'afdhalfauzi17@gmail.com',
      gitlab: 'https://gitlab.com/afdhalfauzi17',
      facebook: 'https://www.facebook.com/afd.fauzi/',
      whatsapp: 'https://wa.me/+6285161671706',
      resume: 'https://drive.google.com/file/d/1ZVJc35YAvV6tPMD30iFepwMElbp9S9mS/view?usp=sharing',
    },
    education: [
      {
        id: 1,
        universityName: 'Tadulako University',
        Stream: 'Bachelor Degree in Informatics Engineering',
        batch: 'August 2018 - Present',
        achivements: [
          'Lorem ipsum dolar sit amet, consecteur adipisicng elit',
          'Lorem ipsum dolar sit amet, consecteur adipisicng elit',
          'Lorem ipsum dolar sit amet, consecteur adipisicng elit',
        ],
      },
      {
        id: 2,
        universityName: 'SMAN 2 Palu',
        Stream: 'Science Major',
        batch: 'June 2015 - June 2018',
        achivements: [
          'Lorem ipsum dolar sit amet, consecteur adipisicng elit',
          'Lorem ipsum dolar sit amet, consecteur adipisicng elit',
          'Lorem ipsum dolar sit amet, consecteur adipisicng elit',
        ],
      },
    ],
    experiences: [
      {
        id: 1,
        companyName: 'PT Stechoq Robotika Indonesia',
        designation: 'Software Engineer',
        duration: 'February 2022 - Present',
        about: 'Developing AR/VR applications for Medical Students and online learning platform for muslim students.',
      },
      {
        id: 2,
        companyName: 'TVRI SULTENG',
        designation: 'IT Staff',
        duration: 'September 2021 - January 2022',
        about: 'Build an inventory information system and doing network troubleshooting',
      },
    ],
    projects: [
      {
        id: 1,
        projectName: 'Android Todo List App',
        projectDescp: 'Free daily schedule planner, task organizer, to do reminder app',
        projectTech: ['Kotlin', 'XML', 'SQLite'],
        gitHubLink: 'https://gitlab.com/afdhalfauzi17/todolist-app',
        image: 'https://drive.google.com/uc?export=view&id=1aToC4Z6lNxrQKt9KykAsFbqidDrH-Nw7',
      },
      {
        id: 2,
        projectName: 'Smart Fish Feeder',
        projectDescp: 'Control and monitor your fish feeding by phone',
        projectTech: ['Kotlin', 'XML', 'Firebase'],
        gitHubLink: 'https://github.com/',
        image: 'https://drive.google.com/uc?export=view&id=1eQrRUouorXEeP8VFMQNbv_F7Jtvu2Nv2',
      },
    ],
    footer: {
      location: '🗺️ Yogyakarta, Indonesia',
    },
  },
  mutations: {
  },
  actions: {},
});
