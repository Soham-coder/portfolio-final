/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Soham Mondal',
  title: "Soham",
  subTitle: emoji(
    'Nope! not a frontend dev! Rather a hardware engineer 💻 by profession | A passionate techie 🚀 who keeps on exploring the fast evolving tech world, learn and take inspirations from them | Continuous fast paced learner 📖 , improver 🏃‍♂️, team-worker 🤝 | Experienced senior SoC design verification engineer with a demonstrated history of working in consumer electronics industry 📱 | Responsible for design, verification of complex proprietary SoCs 👨‍💻'
  ),
  resumeLink:
    'https://drive.google.com/file/d/188ClATxAnAKTPjuVLfzdpVAmRwY4Ao4z/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Soham-coder',
  linkedin: 'https://www.linkedin.com/in/sohammn',
  gmail: 'sohammondal39@gmail.com',
  //gitlab: 'https://www.researchgate.net/profile/Soham-Mondal-3',
  facebook: 'https://www.facebook.com/soham.mondal.792/',
  git_repo: 'https://github.com/Soham-coder?tab=repositories',
  researchgate: 'https://www.researchgate.net/profile/Soham-Mondal-3',
  //medium: 'https://medium.com/@saadpasta',
  //stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  //Instagram : 'https://www.instagram.com/soh.mn/',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'Languages , tools and skills',
  skills: [
    emoji(
      '⚡ Design and verify complex SoCs with industry standard methodologies and techniques'
    ),
    emoji('⚡ Skilled in python, sv, verilog, UVM, UPF, GLS, testbench automation, prototyping'),
    emoji('⚡ Passionate about High-technology program management, neural chips, DNN accelerators, DV automation and acceleration' ),
    emoji(
      '⚡ Protocols:- AXI, AHB, Unipro, UFS, Mphy, ToggleNAND, I2C, PCIe, NVMe, DDR'
    ),
    emoji(
      '⚡ Exploring domain specific accelerators, sparse DNN training/inference accelerators, low power verification automation, Spiking Neural Networks and design verification automation'
    ),
    emoji(
      '⚡ Hands on in Git, Xcelium, VCS, Vmanager, Verdi, Simvision, JIRA'
    ),
    emoji(
      '⚡ Moderate knowledge on Neuromorphic chips, power saving techniques, IPXACT, parsing, design and testbench automation'
    ),
    emoji(
      '⚡ Standard knowledge on frontend web dev/deployment'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Verilog & System Verilog',
      fontAwesomeClassname: 'fas fa-microchip',
    },
    {
      skillName: 'Universal Verification Methodology',
      fontAwesomeClassname: 'fas fa-sitemap',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'C/C++',
      fontAwesomeClassname: 'fas fa-code',
    },
    {
      skillName: 'Make',
      fontAwesomeClassname: 'fas fa-code',
    },
    {
      skillName: 'TCL',
      fontAwesomeClassname: 'fas fa-code',
    },
    {
      skillName: 'Shell',
      fontAwesomeClassname: 'fas fa-code',
    },
    {
      skillName: 'Latex',
      fontAwesomeClassname: 'far fa-file',
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-github',
    },
    {
      skillName: 'Bitbucket',
      fontAwesomeClassname: 'fab fa-bitbucket',
    },
    {
      skillName: 'Linux',
      fontAwesomeClassname: 'fab fa-linux',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Jadavpur University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'Bachelor of Engineering in Electronics & Telecommunication Engineering',
      duration: '2015 - 2019',
      desc: 'Participated in undergraduate research in labs, participated in multiple internships and got a taste of technical and operational roles',
      descBullets: [
        'HPC Architecture (CS6290) from Udacity (2019) | Learnt theoretical concepts of pipelined out-of-order processor.',
        'Undegraduate researcher in CMATER Lab JU on medical image processing',
        'Undergraduate researcher in DSP Lab JU on cryptography',
        'Network Management certificate from Nettech Pvt Ltd | Trained in network management and security (2016)', 
        'Marketing management certificate under Professor Sameer Mathur, IIM Lucknow | Trained in marketing strategy through analysis of HBS case studies (2017)',
        'Acted as student partner for Internshala in 2016, for Jadavpur University and conducted marketing campaigns, social media marketing, social outreach programs to increase members by 125+',
        'Network management@ONGC ltd. (2018, India)',
        'Organised Jadavpur University Science club Technical fest Srijan in 2017, with footfall of 700+ and mentored juniors in developing line follower robot, which won 3rd prize in the competition.',
        'Member@Jadavpur University IET (2015-19, India)',
      ],
    },
    {
      schoolName: 'South Point High School',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'School and High School',
      duration: '2001 - 2015',
      desc:
        'Consistent performer; ranked within top 1%ile in class from classes 1 to 12',
      descBullets: [
        'Qualifier for National Talent Search Examination by MHRD',
        'First prize in Mathematics for 2 times',
        'W.B.S.E (10th)- 90.28%',
        'W.B.C.H.S.E (12th)- 85%',
      ],

    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      //progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      //progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    
    {
      role: 'Associate Staff Engineer',
      company: 'Samsung Semiconductor India Research',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'Oct 2021 – Present',
      desc:
        'Storage Controller HSS and SoC DV',
        descBullets: [
        'Executed functional and power-aware verification of host subsystem, comprising NVMe IC top and Power Management IC of client Solid State Drives',
        'Created test cases, power sequence assertions and checkers from TCL app query function, ensured that power coverage met ~100%, performed gate-level simulations to ensure the chip met power requirements according to power architecture',
        'Implemented a SOP for in-house power-aware verification and vendor regression tool integration and usage flow',
        'Trained 4+ members on Unified power format and Gate level synthesis',
        ],
    },
    

    
    {
      role: 'Pre-Silicon Verification Engineer (Grade 6)',
      company: 'Intel Corporation',
      companylogo: require('./assets/images/intel.jfif'),
      date: 'May 2021 – Oct 2021',
      desc:
        ' Imaging and Camera group (ICG) under Emerging Growth Incubation group (EGI)-IPU chips- IP, SS, and SoC verification',
        descBullets: [
        'Provided end-to-end functional verification, test bench, test case, assertions, and checkers creation at subsystem and IP level for power management unit and clock control unit of Application Specific Integrated Circuits targeted towards ML and AI workloads for the automotive industry',
        'Managed the setting up of gate-level simulation test bench for power-aware verification of netlist',
        'Used scripting to manage weekly regressions and generate report for team and also to optimize on resource utilization through fast and fair retrieval of licenses which reduced process time by a factor of ~6',
        ],
    },
    {
      role: 'Senior Engineer',
      company: 'Samsung Semiconductor India Research',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'June 2019 – May 2021',
      desc:
        'Storage SoC DV (DPDV)',
      descBullets: [
        'Developed and launched a novel auto-test bench tool for automatic creation of error-free verification environment for AMBA Network Interconnect, deployed it in several teams of Samsung Electronics, Korea and appreciated by VP of Samsung memory div., Korea; Tool saved 70+ man hours and reduced turn-around-time by ~60%',
        'Published whitepaper in Samsung global one solution conference participated by all Samsung Semiconductor Research centres. Was awarded 3rd prize among 200+ shortlisted publications.',
        'Pioneered end-to-end engineering automation efforts with a 4-member cross-cultural global team to lead the development, gather the requirements from stakeholders, set up of tool infrastructure and standardization in adherence to IPXACT format.',
        'Delivered functional verification of UniPro (Unified Protocol) and UFS (Unified Flash Storage) subsystem of high end mobile SoC through supporting in setting up test bench, developing of layering sequence to translate protocol, feature verification of Data link Layer and Phy adapter layer.',
        'Verified I2C and SMBus (System Management Bus) through both vendor and custom UVC (Universal Verification Component) creation and integration.',
        'Awarded 2 employee of the month awards across 2 years from 1000+ employees in the memory subdivision',
      ],
    },
   /*{
      role: 'Front-End Developer',
      company: 'Quora',
      companylogo: require('./assets/images/quoraLogo.png'),
      date: 'May 2017 – May 2018',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },*/
    {
      role: 'Assistant Engineer',
      company: 'Samsung Semiconductor India Research',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'May 2018 – July 2018',
      desc:
        'DRAM IP Design',
      descBullets: [
        'Researched to improve proprietary MBIST (Memory Built-In Self-Test IP) with new features for march algorithm tests',
        'Developed RTL for glue logic unit to facilitate forward compatibility of MBIST commands from DDR3 to DDR4 and validated the same in FPGA',
        'Received Pre-placement offer on basis of work',
      ]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Soham-coder', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Tidbits',
  subtitle: 'Some old websites, presentations and graphic designs',
  projects: [
    {
      image: require('./assets/images/portfolio.webp'),
      link: 'https://soham-coder.github.io/site/',
      text: 'Old site',
    },
    {
      image: require('./assets/images/chatbot_adoption.webp'),
      link: 'https://soham-coder.github.io/chatbot-resume/',
      text: 'Chatbot based cv',
    },
    {
      image: require('./assets/images/terminal.webp'),
      link: 'https://soham-coder.github.io/resume-master/',
      text: 'Terminal based cv',
    },
    {
      image: require('./assets/images/Web_App.webp'),
      link: 'https://marks-prediction39.herokuapp.com/',
      text: 'Simple web app',
    },
    {
      image: require('./assets/images/deck_electron.webp'),
      link: 'https://drive.google.com/file/d/0BxM540VPs0PdbjVoQU8zWjRCRDJKZjA1RE13cTJ3bnFqNmw0/view',
      text: 'About me',
    },
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'https://www.youtube.com/watch?v=-S6CcDYZVu0&feature=youtu.be',
      text: 'Red Bull marketing presentation',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'https://drive.google.com/file/d/0BxM540VPs0PdUURjRHVsbVd2R3c/view?usp=sharing',
      text: 'Marketing plan for a game app',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters !',

  achievementsCards: [
    {
      title: '3rd prize(work smart category) in One Solution Virtual Conference by Samsung Global R&D',
      subtitle:
        'Host - Solution Product & Development | Sponsor - Memory Business - Device Solutions Korea | One Solution Virtual Conference award is the highest honor that can be bestowed on a developer in Solution Product & Development. The recipient should have a body of work that has had significant impacts on Storage Solution in general, and One Solution in particular. More than 2600 staff within solution P&D participated in OSVC forum from global R&D centers across the world || Participants • Technology Enabling and Development - San Jose USA • Memory Solutions Lab - San Diego, USA • Samsung Semiconductor India Research - India • Samsung R&D Institute China - Xian • Samsung Israel R&D Center - Israel • Samsung Semiconductor Denmark Research - Denmark',
      image: require('./assets/images/osvc.webp'),
      footerLink: [
        {
          name: 'Award Certificate',
          url:
            'https://drive.google.com/file/d/1XRTx6uZc7UrKyeR3miD3uHY3MYllnrmO/view?usp=sharing',
        },
        {
          name: 'Participants',
          url:
            'https://drive.google.com/file/d/1OuKtaG-55ZHjgEB1gMQTIpMoLSeO88eC/view?usp=sharing',
        },
      ],
    },
    

    {
      title: 'Convolution 2nd prize',
      subtitle: 'Won 2nd prize in the event PAPIER(Convolution) conducted by JU Electrical Engg., department sponsored by IET & IEEE Signal Processing Society',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Prize', url: 'https://github.com/Soham-coder/ecc_vs_rsa#prizes' },
      ],
    },
    
    {
      title: 'Employee of the month @ Samsung Semiconductor',
      subtitle: 'Slave NOC/NIC automated error free verification of enterprise SSD in minimal time with custom designed tool. Multiple bugs filed in DUT by the setup and efforts are appreciated by DS-Korea memory VP',
      image: require('./assets/images/eom.webp'),
      footerLink : [],
    },

    {
      title: 'SystemVerilog Accelerated Verification with UVM v1.2.5 Exam',
      subtitle: 'Undertook certification and passed examination',
      image: require('./assets/images/sv.webp'),
      footerLink: [
        { name: 'Badge', url: 'https://www.youracclaim.com/badges/cd96f36a-a508-414f-a9da-2fcfe3bd37ec?source=linked_in_profile' },
      ],
    },
    {
      title: 'Xcelium Simulator v19.03 Exam',
      subtitle: 'Undertook certification and passed examination',
      image: require('./assets/images/Xcelium.webp'),
      footerLink: [
        { name: 'Badge', url: 'https://www.youracclaim.com/badges/5b737b9d-edbb-47c3-91d3-e71886d7b176?source=linked_in_profile' },
      ],
    },
    {
      title: 'Low-Power Simulation with IEEE Std 1801 UPF v18.09 Exam',
      subtitle: 'Undertook certification and passed examination',
      image: require('./assets/images/Low-Power_Simulation_with_IEEE_Std_1801_UPF_v18.09_Exam_600x600.webp'),
      footerLink: [
        { name: 'Badge', url: 'https://www.credly.com/badges/f6b3f0ce-d198-4447-8c1f-9c6414dfff90?source=linked_in_profile' },
      ],
    },
    {
      title: 'Essential SystemVerilog for UVM v1.2.5rev3',
      subtitle: 'Online course by Cadence',
      image: require('./assets/images/cadence.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://drive.google.com/file/d/1DmaL_OhHaW_CbTAvmf7wBBneg1Lx-jxF/view' },
      ],
    },
    {
      title: 'UPF Power Aware Design and Verification',
      subtitle: 'Udemy',
      image: require('./assets/images/udemy.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://www.udemy.com/certificate/UC-eb6d2f43-820a-4297-b169-a5c3ddd68c9c/' },
      ],
    },
  {
    title: 'MasterCamp in Product Management',
    subtitle: 'Masters Union',
    image: require('./assets/images/masters_union.jfif'),
    footerLink: [
      { name: 'Certificate', url: 'https://mastersunion.org/view-certificate/634545bc5591749d3a4d3fb2' },
    ],
  },
],
display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and let others know what I have learnt. (Currently under maintenance !)',

  blogs: [
    {
      url: 'https://reverent-northcutt-8163cd.netlify.app/',
      title: 'verification-blog',
      description:
        'Different concepts of SV, UVM ,Verilog, C, UPF as and when I face them in real life scenarios noted down in a blog.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'Publications',
  subtitle: emoji(
    'TO INVENT, YOU NEED A GOOD IMAGINATION AND A PILE OF JUNK. — THOMAS A. EDISON 💡'
  ),

  talks: [
    {
      title: 'VLSID-2021',
      subtitle: 'PreSyNC',
      slides_url: 'https://ieeexplore.ieee.org/document/9407457',
      event_url: 'https://github.com/Soham-coder/Presync/tree/main/',
    },

    {
      title: 'Frontiers in cellular neuroscience',
      subtitle: 'SyNC',
      slides_url: 'https://www.frontiersin.org/articles/10.3389/fncel.2021.674030/full',
      event_url: 'https://github.com/RnkC/SyNC',
    },
  ],
  
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Interests 💡'),
  subtitle: '💡 High-technology program management, neural chips, DNN accelerators, DV automation and acceleration',
  // Please Provide with Your Podcast embeded Link
  subsubtitle: '💡 Domain Specific Accelerators, Brain Computer Interface Devices, Neuromorphics',
  subsubsubtitle: '💡 Technology management, Analysis and prediction of market based on macro and micro-economy',
  podcast: [
    //'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8335805583",
  email_address: "sohammondal39@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
