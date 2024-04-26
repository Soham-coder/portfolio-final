﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Soham Mondal',
  title: "Soham",
  subTitle: emoji('Technologist and silicon product developer 💻 by profession | A passionate product developer 📦 who keeps on exploring the fast evolving tech world, learn and take inspirations from them | Continuous fast paced learner 📖, improver 🏃‍♂️, team-worker 🤝 | Experienced product professional with a history of working in semiconductor product development industry for 5+ years. Skilled in core engineering disciplines of semiconductor industry of architecture, design, software/firmware and verification. Experienced in silicon, software and systems product development. Passionate about research and strategic product specification analysis, technology leadership, silicon product and project management'),
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
  instagram : 'https://www.instagram.com/soh.mn/',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'Languages , tools and skills',
  skills: [
    emoji(
      '⚡Experienced in silicon product development, end-to-end ASIC development cycle, architecture, design and verification'
    ),
    emoji('⚡Extensive coursework in Product management, and experience in end-to-end product development and lifecycle. Adept in product discovery, user-research, product analytics, hypothesis and validation, product requirement gathering, product roadmap and wireframing, prototyping, A/B testing, engineering sprint management and go-to-market strategy'
          ),
    emoji('⚡Valuable exposure to marketing strategies, SWOT, PESTEL analysis, market research, customer segment, marketing and distribution channels, business recommendations, product-market-fit, product launch, go-to-market and launch strategies through real world not-for-profit consulting experience and business case studies'),
    emoji('⚡Used product design and collaboration tools like Canva, Mural, Figma and project management tools like JIRA and Confluence'),
    emoji('⚡Skilled in C/C++, embedded programming, python for embedded systems development and engineering automation, Skilled in Java/Javascript, HTML, CSS, NodeJs, React and SQL for front-end development and database management'
          ),
    emoji(
      '⚡Hands on in verilog, system-verilog, system-c, multiple EDA softwares for comprehensive hardware design, verification and validation'
    ),
    emoji(
      '⚡Used Shell scripting, TCL, CMake for automation, tool-chain integration and silicon synthesis'
    ),
    emoji(
      '⚡Have extensive knowledge in various industry standard and native protocols including RISCV, low power design and verification, sparse CNN and DNN inference accelerator architectures, neural networks, Tensorflow, PyTorch, building customised neural nets for edge AI applications'
    ),
    emoji(
      '⚡Exploring domain specific accelerators, sparse DNN training/inference accelerators, low power verification automation, Spiking Neural Networks and design verification automation' ),
    emoji(
        '⚡Have experience in Version Control Systems and robust deployment and backend development in Netlify, Heroku, Flask, Docker'
      ),
    emoji('⚡Passionate about technical product management(sw & hw), power, performance and security efficient silicon and systems, hitech products and technology' ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Verilog, System Verilog, FPGA protyping',
      fontAwesomeClassname: 'fas fa-microchip',
    },
    {
      skillName: 'Object Oriented Programming',
      fontAwesomeClassname: 'fas fa-sitemap',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'C, C++, Java, Make, TCL, Shell, System-C, JavaScript, HTML, CSS, NodeJS',
      fontAwesomeClassname: 'fas fa-code',
    },
    {
      skillName: 'SQL',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Linux',
      fontAwesomeClassname: 'fab fa-linux',
    },
    {
      skillName: 'Jenkins',
      fontAwesomeClassname: 'fab fa-jenkins',
    },
    {
      skillName: 'React',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'JIRA',
      fontAwesomeClassname: 'fab fa-jira',
    },
    {
      skillName: 'Confluence',
      fontAwesomeClassname: 'fab fa-confluence',
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-github',
    },
    {
      skillName: 'SVN, Perforce, Clearcase',
      fontAwesomeClassname: 'fas fa-code-branch',
    },
    {
      skillName: 'Mural, Canva',
      fontAwesomeClassname: 'fas fa-marker',
    },
    {
      skillName: 'Figma',
      fontAwesomeClassname: 'fab fa-figma',
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
        'Several publications in neuromorphic chip development, applied computational neuroscience, application development for cryptography',
        'Undergraduate researcher under prof Dr. Amitava Mukherjee and Dr. Janet L. Paluh in embedded systems laboratory JU and SUNY Polytechnic Institute, USA',
        'Undegraduate researcher in CMATER Lab JU on medical image processing',
        'Undergraduate researcher in DSP Lab JU on cryptography',
        'Marketing expansion strategist at Mentored Research (2017)- increased customer base by 20% to new colleges',
        'Marketing Analyst at Qrius (2018)-Conducted a consulting thesis on Psychology of Persuasion (Robert Cialdini) and devise competitive and conclusive strategies to increase sales of E-commerce',
        'Equity researcher at Money Roller (2017)-global financial market research on Gold price valuation and financial modeling',
        'Network Management intern at ONGC (2018) and Nettech pvt ltd (2016) – systems programming, computer networks, network and information security, firewall, DoS and cyber attacks setted up realtime startopology LAN network of 25+ workstations and a HTTP application server',
        'Instructor for Physics, Mathematics for 20+ JEE and NEET aspirants (2016-2019)',
        'Assistant-VP JU Science Club; Organized annual techfest Srijan; increased footfall from 400 to 700+; Mentored a team of 7+ (1st runners up  prize in 1 competition)', 
        'Marketing management certificate under Professor Sameer Mathur, IIM Lucknow | Trained in marketing strategy and business case studies (HBS) (2017)',
        'Acted as student partner for Internshala (2016), for Jadavpur University and conducted marketing campaigns, social media marketing, social outreach programs to increase members by 125+',
        'Moderated general assembly debate and won 2nd prize in Jadavpur University Model United Nations(JUMUN’ 2016) with 200+ delegates and Chief Secretary of State (West Bengal) Mr. Alapan Bandyopadhyay, as chief guest',
        'Assistant Product Management consultant - Cogno AI (acquired by Exotel) based in Dubai & India - UX mockup and wireframe, alignment with stakeholders, product roadmap enhancement, increased new customer satisfaction by ~15%',
        'Assistant Engineer - Samsung Semiconductor India R&D (Bangalore) - Researched and performed 10-15 A/B tests of resource and run-time heavy march algorithms of proprietary MBIST (DDR4 controller). Made recommendations to senior management a hardware-centric algorithm to enhance testing time by 35%. Engineered and prototyped the solution in a FPGA platform.',
        'Graduated with First Class – CGPA (8.13/10) - Class rank 13'
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
        'Stage-1 Qualifier in NTSE by MHRD, India (4000+ students) (2011) ',
        '3rd prize in fine arts inter-school competition (25 schools @ Kolkata) in the state of West Bengal by the Government of India (2007)',
        'W.B.S.E (10th)- 90.28%',
        'W.B.C.H.S.E (12th)- 85%',
      ],

    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Technical Product Management', //Insert stack or technology you have experience in
      progressPercentage: '60%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '75%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '50%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '90%',
    },
    {
      Stack: 'ASIC Development',
      progressPercentage: '100%',
    },
    {
      Stack: 'Project Management', //Insert stack or technology you have experience in
      progressPercentage: '70%', //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: 'Lead Product Engineer - IC Design',
      company: 'Silicon Laboratories',
      companylogo: require('./assets/images/silicon-labs.jfif'),
      date: 'Apr 2024 – Present',
      desc:
        'Hyderabad, India - Central R&D',
        descBullets: [
        'Executed functional and power-aware verification of host subsystem, comprising NVMe IC top and Power Management IC of client Solid State Drives',
        'Created test cases, power sequence assertions and checkers from TCL app query function, ensured that power coverage met ~100%, performed gate-level simulations to ensure the chip met power requirements according to power architecture',
        'Implemented a SOP for in-house power-aware verification and vendor regression tool integration and usage flow',
        'Trained 4+ members on Unified power format and Gate level synthesis',
        ],
    },

    {
      role: 'Senior Engineer',
      company: 'Qualcomm',
      companylogo: require('./assets/images/Qualcomm.jfif'),
      date: 'Jun 2023 – Apr 2024',
      desc:
        'Cork, Ireland - GPU Top Power Team',
        descBullets: [
        'Executed functional and power-aware verification of host subsystem, comprising NVMe IC top and Power Management IC of client Solid State Drives',
        'Created test cases, power sequence assertions and checkers from TCL app query function, ensured that power coverage met ~100%, performed gate-level simulations to ensure the chip met power requirements according to power architecture',
        'Implemented a SOP for in-house power-aware verification and vendor regression tool integration and usage flow',
        'Trained 4+ members on Unified power format and Gate level synthesis',
        ],
    },


    {
      role: 'Associate Staff Engineer',
      company: 'Samsung Semiconductor',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'Oct 2021 – Jun 2023',
      desc:
        'Bangalore, India & Seoul, Korea - Memory Solutions Design Platform Team',
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
        ' Bangalore, India - Emerging Growth Incubation',
        descBullets: [
        'Provided end-to-end functional verification, test bench, test case, assertions, and checkers creation at subsystem and IP level for power management unit and clock control unit of Application Specific Integrated Circuits targeted towards ML and AI workloads for the automotive industry',
        'Managed the setting up of gate-level simulation test bench for power-aware verification of netlist',
        'Used scripting to manage weekly regressions and generate report for team and also to optimize on resource utilization through fast and fair retrieval of licenses which reduced process time by a factor of ~6',
        ],
    },
    {
      role: 'Senior Engineer',
      company: 'Samsung Semiconductor',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'Jun 2019 – May 2021',
      desc:
        'Bangalore, India & Seoul, Korea - Memory Solutions, SoC and HSS Design-Platform Team',
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
      company: 'Samsung Semiconductor',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'May 2018 – Jul 2018 (Internship)',
      desc:
        'Bangalore, India - DRAM IP (Intellectual Property) Design Team',
      descBullets: [
        'Researched to improve proprietary MBIST (Memory Built-In Self-Test IP) with new features for march algorithm tests',
        'Developed RTL for glue logic unit to facilitate forward compatibility of MBIST commands from DDR3 to DDR4 and validated the same in FPGA',
        'Received Pre-placement offer on basis of work',
      ]
    },
    {
      role: 'Assistant Product Management Consultant',
      company: 'Cogno AI - now part of Exotel',
      companylogo: require('./assets/images/cognoAI.webp'),
      date: 'Aug 2018 – Jan 2019 (Internship)',
      desc:
        'Product Development and Management team - Cogno Chatbot',
      descBullets: [
        'UX mock-up and design, wire-framing, alignment with product roadmap catering to financial markets- bluechip mutual funds, private and public banks, PSUs and Unicorn Startups',
        'Came up with improved features and success metrics for the flagship product Cogno Chatbot - AI & NLP Bots for Automated Support Automatically answer most common support queries using AI & NLP Bots',
        'Defined user stories for new features resulting in 30% increase in customer satisfaction and 20% decrease in customer churn',
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
  title: 'Others',
  subtitle: 'Some presentations, old portfolios and website',
  projects: [
    {
      image: require('./assets/images/SARL.webp'),
      link: 'https://www.slideshare.net/slideshow/business-development-plan-for-sawaya-for-agriculture-trading-sarl/267512569',
      text: 'Business Development Consulting for a SME, Sawaya for Africulture & Trading (SARL), Lebanon as part of a local NGO initiative',
    },
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'https://www.youtube.com/watch?v=-S6CcDYZVu0&feature=youtu.be',
      text: 'A Strategic case study on Red Bull, one of the most popular energy drinks worldwide- its marketing srategy and techniques, 4 Ps analysis, product lifecycle management',
    },

    {
      image: require('./assets/images/PG.webp'),
      link: 'https://slideshare.net/sohammondal7/pg-hbs-presentation',
      text: 'A Strategic case study on the consumer goods manufacturing company P&G, its history, unique marketing and branding strategies, competitor analysis, SWOT analysis, customer segment, product positioning and branding',
    },

    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'https://www.slideshare.net/slideshow/product-and-marketing-strategy-of-an-android-gaming-app/267497898',
      text: 'A strategic business case study and recommendations for a World War 3 Android Gaming Application - starting with executive summary, market research, product strategy, hypothesis and validation, MVP features, user journey, wireframes, product market fit, market segments, competitor analysis, pricing strategy, budgeting analysis, product pricing, go-to-market and launch strategy',
    },
    {
      image: require('./assets/images/about_me.webp'),
      link: 'https://www.slideshare.net/slideshow/introductiongoalssohammondalpresentation/267470610',
      text: 'A short Canva based introduction template about me briefly specifying my journey till date, my interests, hobbies and my future aspirations',
    },
    {
      image: require('./assets/images/IOT.webp'),
      link: 'https://youtube.com/playlist?list=PLQD0GIREOfOf8ELlVIwzk95K5T5sR9oaD&si=bN8EuNYnG0q7E5m5',
      text: 'Some IoT DIY fun projects I did during early days of my college. Technologies used API programming, embedded C, Arduino microcontroller, ESP8266 Microcontroller',
    },
    {
      image: require('./assets/images/machine_learning.webp'),
      link: 'https://github.com/Soham-coder/image_caption',
      text: 'One of the machine learning practice projects done during my days in college. Technologies used are Keras, Numpy, Flask etc., You can find other similar projects in my open source section',
    },
    {
      image: require('./assets/images/GUI.webp'),
      link: 'https://github.com/Soham-coder/Bill-Generator.git',
      text: 'A brief practice in GUI development using a very basic and easy framework of python called Tkinter. This excercise was done in order to understand the drawbacks of python based GUI development which is very slow and takes lot of resources and run time',
    },
    {
      image: require('./assets/images/portfolio.webp'),
      link: 'https://soham-coder.github.io/site/',
      text: 'My first created old portfolio mentioning my experiences in the beginning of my career. Technologies used React, NodeJS, HTML, CSS',
    },
    {
      image: require('./assets/images/chatbot_adoption.webp'),
      link: 'https://soham-coder.github.io/chatbot-resume/',
      text: 'An old portfolio based on conversational chatbots, where one can pings and get outputs. The outputs are hardcoded off-course and is not supoorted by conversational AI',
    },

    {
      image: require('./assets/images/terminal.webp'),
      link: 'https://soham-coder.github.io/resume-master/',
      text: 'An experimental old portfolio based on unix terminal, where one gives input prompts and get outputs. It is a old portfolio so the contents are mostly not updated',
    },

    {
      image: require('./assets/images/search-engine.webp'),
      link: 'https://github.com/Soham-coder/search_engine',
      text: 'A software prototype of a text based search engine which will work on millions of wikipedia pages retrived in xml format and automatically bring-up and analyse the top 10 relevant Wikipedia documents that matches the input query of user. This takes Wikipedia corpus in XML format which is available at Wikipedia.org as input. Then it indices millions of Wikipedia pages involving a comparable number of distinct terms. Given a query, it retrieves relevant ranked documents and their titles using index. It uses OOPs application, ranking algorithms and indexation techniques used in modern search engines. It also showcases high level system design, software architecture modelling and development sprints/implementations',
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Certifications, Achievements 🏆 & Extra-Curriculars'),
  subtitle:
    'Certifications, Achievements and Extra-Curriculars!',

  achievementsCards: [

    {
      title: 'Product Management Certification @ Product School',
      subtitle: 'Product strategy, user research, product requirement gathering, product roadmap and prototyping, A/B testing and go-to-market strategy along with a final project submission specifying product management, roadmap and strategy for a software product',
      image: require('./assets/images/PMC.webp'),
      footerLink: [
        { name: 'Credential', url: 'https://certificate.productschool.com/97975d86-f050-4c7b-958a-e2b8fd4a0b65#gs.7x55f4' },
      ],
    },

    {
      title: 'MasterCamp in Product Management @ Masters Union',
      subtitle: 'Product discovery, product analytics, agile and waterfall methodologies',
      image: require('./assets/images/masters_union.jfif'),
      footerLink: [
        { name: 'Diploma', url: 'https://mastersunion.org/view-certificate/634545bc5591749d3a4d3fb2' },
      ],
    },
    
    {
      title: 'Professional Certification in Product Management @ LinkedIn',
      subtitle: 'Product Management, Product Road Mapping, Product Strategy, Technical Product Management',
      image: require('./assets/images/LinkedIn_PM1.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://www.linkedin.com/learning/certificates/9d15b079e37a688d0b560007f9e09f906200e67ffe5eb1a0c5a382d2723c888b'},
      ],
    },

    {
      title: 'Other Certifications in Product Management @ LinkedIn',
      subtitle: 'Product Management, Product Road Mapping, Product Strategy, Technical Product Management',
      image: require('./assets/images/LinkedIn_PM2.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://www.linkedin.com/learning/certificates/42433f9c0c641f839c9011fb38ee437094d287211c98f906b84c4f7097eebf98?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FRImS33tQm%2BAxUpsAZhmbg%3D%3D'},
      ],
    },
    {
      title: 'Marketing Management Certificate @ IIM Lucknow',
      subtitle: 'Product Road Mapping, Product Strategy, Marketing Strategy, Brand Positioning',
      image: require('./assets/images/iiml.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://www.slideshare.net/slideshow/final-completion-certificate-of-marketing-management-internship/267528125'},
      ],
    },
    {
      title: 'Business Development and Product Strategy for a SME named SARL based in Lebanon as part of a local NGO (Zahle Casa) initiative - Certificate',
      subtitle: 'Go-to-market strategy, Business Development, Product Marketing, Product Strategy',
      image: require('./assets/images/NGO.webp'),
      footerLink: [
        { name: 'Acknowledgement', url: 'https://www.slideshare.net/slideshow/business-development-and-product-strategy-for-a-sme-named-sarl-based-in-lebanon-as-part-of-a-local-ngo-zahle-casa-initiativecertificate/267528925'},
      ],
    },

    {
      title: 'Network Management intern @Nettech Pvt. Ltd and IT management intern @ONGC Pvt. Ltd',
      subtitle: 'Internship and hands-on-training in systems programming, computer networks, network and information security, firewall, DoS and cyber attacks setted up realtime startopology LAN network of 25+ workstations and a HTTP application server',
      image: require('./assets/images/nw_mgt.webp'),
      footerLink: [
        { name: 'Internship', url: 'https://www.slideshare.net/slideshow/network-management-internship-at-nettech-pvt-ltd-and-ongc-pvt-ltd/267531986' },
      ],
    },
    {
      title: 'Coding Blocks',
      subtitle: 'Development of Chatbots using Python and basic NLP and libraries and frameworks like NLTK and deployment',
      image: require('./assets/images/chatbot.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://www.slideshare.net/slideshow/development-of-chatbots-using-python-and-basic-nlp/267536699' },
      ],
    },
    {
      title: 'Low-Power Simulation with IEEE Std 1801 UPF v18.09 Exam',
      subtitle: 'Low power silicon product development, architecture, design, verification',
      image: require('./assets/images/Low-Power_Simulation_with_IEEE_Std_1801_UPF_v18.09_Exam_600x600.webp'),
      footerLink: [
        { name: 'Badge', url: 'https://www.credly.com/badges/f6b3f0ce-d198-4447-8c1f-9c6414dfff90?source=linked_in_profile' },
      ],
    },
    {
      title: 'SystemVerilog Accelerated Verification with UVM v1.2.5 Exam',
      subtitle: 'Scalable Testbench Infrastructure development focusing on OOP capabilities and modularity and reusability',
      image: require('./assets/images/sv.webp'),
      footerLink: [
        { name: 'Badge', url: 'https://www.youracclaim.com/badges/cd96f36a-a508-414f-a9da-2fcfe3bd37ec?source=linked_in_profile' },
      ],
    },
    {
      title: 'Xcelium Simulator v19.03 Exam',
      subtitle: 'Industry leading unified simulation infrastructure programming, usability and features',
      image: require('./assets/images/Xcelium.webp'),
      footerLink: [
        { name: 'Badge', url: 'https://www.youracclaim.com/badges/5b737b9d-edbb-47c3-91d3-e71886d7b176?source=linked_in_profile' },
      ],
    },
    {
      title: 'Low power performance efficient high-quality silicon design',
      subtitle: 'Low power architecture and design concepts and applications in ultra-low power silicon product development',
      image: require('./assets/images/udemy.webp'),
      footerLink: [
        { name: 'UPF aware design and verification', url: 'https://www.udemy.com/certificate/UC-eb6d2f43-820a-4297-b169-a5c3ddd68c9c/' },
        { name: 'SV assertion for design and verification', url: 'https://www.udemy.com/certificate/UC-3fc08d5e-10dc-4270-88ad-15aad1f1d4fb/' },
        { name: 'Timing constraints and STA', url: 'https://verified.sertifier.com/en/verify/21774893908771/' },
      ],
    },
    {
      title: 'Programming Essentials',
      subtitle: 'C standard library, C programming for Embedded Applications, Bash scripting',
      image: require('./assets/images/bash.webp'),
      footerLink: [
        { name: 'STL', url: 'https://www.linkedin.com/learning/certificates/cbef356e07b3817ed12155a279d9c0285d6bad9b8130d00e5b99921fe7df6dad?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFPRv2JaPSjqVt5MkT71Z%2Fg%3D%3D' },
        { name: 'Embedded C', url: 'https://www.linkedin.com/learning/certificates/e5d28f3828949888f1a105cce543599cf429cb9a32bd0e5e7548d24d40a78771?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFPRv2JaPSjqVt5MkT71Z%2Fg%3D%3D' },
        { name: 'Bash Scripting', url: 'https://www.linkedin.com/learning/certificates/15752e13a61bfc0e3d47c090d947854a3fee27c16bb32aadcac476b91f0284f2?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFPRv2JaPSjqVt5MkT71Z%2Fg%3D%3D' },
      ],
    },
    {
      title: 'Student Partner for Internshala (2016)',
      subtitle: 'Acted as student partner for Internshala in 2016, for Jadavpur University and conducted marketing campaigns, social media marketing, social outreach programs to increase members by 125+, increase product reach by 15% (new market) and customer satisfaction by 70%',
      image: require('./assets/images/internshala.webp'),
      footerLink: [
        { name: 'Acknowledgement', url: 'https://www.slideshare.net/slideshow/internshala-student-partner-60-jadavpur-university-certificate/267549729' },
      ],
    },
    {
      title: 'Marketing Expansion Strategist at Mentored Research (2017)',
      subtitle: 'Increased customer base by 20% of new products of Mentored Research to new colleges, increased revenue by 6% and helped in business development',
      image: require('./assets/images/m_r.webp'),
      footerLink: [
        { name: 'Acknowledgement', url: 'https://www.slideshare.net/slideshow/marketing-expansion-strategist-at-mentored-research/267550151' },
      ],
    },

    {
      title: 'Marketing Analyst at Qrius (formerly the Indian Economist) (2018)',
      subtitle: 'Conducted a consulting thesis on Psychology of Persuasion (Robert Cialdini) and devise competitive and conclusive strategies to increase sales of E-commerce. Got exposure to sales management of brick and mortar business and risk management',
      image: require('./assets/images/theqrius_logo.webp'),
      footerLink: [
        { name: 'Acknowledgement', url: 'https://www.slideshare.net/slideshow/experience-certificate-marketing-analystsoham-mondalpdf/267551673' },
      ],
    },

    {
      title: 'Equity Researcher at Money Roller (2017)',
      subtitle: 'Conducted global financial market research on Gold price valuation and financial modeling',
      image: require('./assets/images/the_money_roller_logo.webp'),
      footerLink: [
        { name: 'Acknowledgement', url: 'https://drive.google.com/file/d/0BxM540VPs0PdUVlSbmp0dGNqNHc/view' },
      ],
    },
    {
      title: '3rd prize (work smart category) in One Solution Conference by Samsung Global R&D',
      subtitle:
        'Host - Solution Product & Development | Sponsor - Memory Business - Device Solutions Korea | One Solution Samsung Global Engineering Conference award is the highest honor that can be bestowed on a developer in Memory Solution Product & Development. The recipient should have a body of work that has had significant impacts on Storage Solution in general, and One Solution in particular. More than 2600 staff within solution Product & Development participated in the forum from global R&D centers across the world || Participants • Technology Enabling and Development - San Jose USA • Memory Solutions Lab - San Diego, USA • Samsung Semiconductor India Research - India • Samsung R&D Institute China - Xian • Samsung Israel R&D Center - Israel • Samsung Semiconductor Denmark Research - Denmark; Awarded 3rd prize among 144+ competitive shortlisted publications; Cultivated global recognition to the group and increase in technical influence',
      image: require('./assets/images/osvc.webp'),
      footerLink: [
        {
          name: 'Award Certificate',
          url:
            'https://www.slideshare.net/slideshow/osvc-wall-of-fame-memory-solutions-product-and-development/267554201',
        },
        //{
          //name: 'Abstract Slides (Raw Version)',
          //url:
            //'https://www.slideshare.net/slideshow/osvcmetadata-based-simulation-automation-to-overcome-verification-challenges-of-soc-interconnect-bus-matrixpptx/267554329',
        //},
      ],
    },
    

    {
      title: 'Novel encryption algorithm and software development',
      subtitle: 'Awarded 2nd prize in the event Papier (scientific paper presentation) conducted by Jadavpur University Electrical Engineering Department, named Convolution, under the aegis of IET and IEEE Signal Processing Society in 2018',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Prize', url: 'https://github.com/Soham-coder/ecc_vs_rsa#prizes' },
      ],
    },
    
    {
      title: 'Employee of the month at Samsung Semiconductor India Research',
      subtitle: 'Awarded 2 Employee of the Month Awards across 2 years among 700+ employees in Samsung memory subdivision for my contribution to 2 novel EDA software product development with far improved features and performance than external market products and also for my contribution to memory solutions product development and verification',
      image: require('./assets/images/eom.webp'),
      footerLink : [
        { name: 'Prize 1', url: 'https://www.slideshare.net/slideshow/employee-of-the-month-samsung-semiconductor-india-research/267528754' },
      ],
    },

    {
      title: 'Other Awards',
      subtitle: '3rd prize in fine arts inter-school competition UDAAN (25 schools participated in Kolkata) in the state of West Bengal by the Government of India (2007); Stage-1 Qualifier in NTSE by MHRD, India (4000+ students) (2011)',
      image: require('./assets/images/ntse_sphs.webp'),
      footerLink : [
        { name: 'South Point High School', url: 'https://www.linkedin.com/school/south-point-high-school/?originalSubdomain=in' },
        { name: 'National Talent Search Examination', url: 'https://ncert.nic.in/national-talent-examination.php' },
      ],
    },

    {
      title: 'Student Mentor at Jadavpur University Science Club',
      subtitle: 'Assistant-VP JU Science Club; Organized annual techno-management fest Srijan; increased footfall from 400 to 700+; Mentored a junior team of 7+ (1st runners up prize in 1 competition)',
      image: require('./assets/images/ju_sc_srijan.webp'),
      footerLink : [
        { name: 'Jadavpur University Science Club', url: 'https://www.linkedin.com/school/jadavpur-university-science-club/posts/?feedView=all' },
        { name: 'Techno-Management fest Srijan', url: 'https://srijanju.in/' },
      ],
    },
    {
      title: 'Moderator of Jadavpur University Model United Nations (2016)',
      subtitle: 'Moderated general assembly debate and won 2nd prize in Jadavpur University Model United Nations(JUMUN’2016) with 200+ delegates and Chief Secretary of State (West Bengal) Mr. Alapan Bandyopadhyay, as chief guest',
      image: require('./assets/images/ju_mun.webp'),
      footerLink : [
        { name: 'Jadavpur University Model United Nations', url: 'https://www.linkedin.com/company/jadavpur-university-model-united-nations/?originalSubdomain=in' },
      ],
    },
    {
      title: 'Toastmaster',
      subtitle: 'Involved in debate, discussions, delivering speeches and organising the events. Acted as toasmaster (3+ months) in spiritual talk speaker series in Toastmaster International Intel Corporation Chapter (2021-2022); ',
      image: require('./assets/images/toastmaster.webp'),
      footerLink : [
        { name: 'Toastmaster International', url: 'https://www.toastmasters.org/' },
      ],
    },
    {
      title: 'Community Service',
      subtitle: 'Donated educational resources and stationery items for sensitization of 70 underprivileged students in an NGO under the aegis of Bharat Sevasram Trust (2021)',
      image: require('./assets/images/BSS.webp'),
      footerLink : [],
    },
    {
      title: 'Other Community Service',
      subtitle: 'Instructor for Physics, Mathematics for 20+ JEE and NEET aspirants (2016-2019); Volunteer in Doddanakundi (largest natural lake in Bangalore India) cleaning drive as part of ESG initiative and CSR activities',
      image: require('./assets/images/community_service.webp'),
      footerLink : [],
    },

],
display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and let others know what I have learnt. But, unfortunately 😞 this blog is currently not maintained anymore and will be revamped later',

  blogs: [
    {
      url: 'https://reverent-northcutt-8163cd.netlify.app/blog/apb/',
      title: 'verification-blog',
      description:
        'Different concepts and applications of ultra-low power silicon development has been noted down. Many interview questions and prototype design and tesbench infrastructure development from scratch are incorporated which have helped many engineers, product developers (junior mid as well as senior level practitioners) currently working in well-known companies in their job search and placement journey',
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
      title: 'PreSyNC: Hardware realization of the Presynaptic Region of a Biologically Extensive Neuronal Circuitry',
      subtitle: 'A computationally extensive application-specific neuromorphic silicon to mimic synaptic functions in floating point and posit number system',
      slides_url: 'https://ieeexplore.ieee.org/document/9407457',
      event_url: 'https://github.com/Soham-coder/Presync/tree/main/',
    },

    {
      title: 'SyNC, a Computationally Extensive and Realistic Neural Net to Identify Relative Impacts of Synaptopathy Mechanisms on Glutamatergic Neurons and Their Networks in Autism and Complex Neurological Disorders',
      subtitle: 'Improved hardware with incorporation of complete end-to-end features of post-synaptic pathways and defective scenarios in glutamatergic neurons',
      slides_url: 'https://www.frontiersin.org/articles/10.3389/fncel.2021.674030/full',
      event_url: 'https://github.com/RnkC/SyNC',
    },
    {
      title: 'Leveraging UPF-Extracted Checkers using UPF Query Functions for Verifying Power Intent of Memory Controller',
      subtitle: 'A novel performance efficient software EDA product for automation of low power silicon product engineering and auto verification of critical power and performance KPIs and associated bug discovery, resolution and low-power coverage closure making use of advanced query APIs of UPF 3.0 and RTL and low power design information extraction through simulation database',
      slides_url: 'https://drive.google.com/drive/search?q=upf%20paper',
    },
    {
      title: 'Meta-Data based Simulation Automation to overcome Verification Challenges of SoC Interconnect Bus Matrix',
      subtitle: 'A custom novel performance efficient software EDA product for auto-generation of error-free verification infrastructure for a customizable Network-interconnect with key features for specific interconnect architecture, performance characterization, security testing, injection of error scenarios etc',
      slides_url: 'https://www.slideshare.net/slideshow/osvcmetadata-based-simulation-automation-to-overcome-verification-challenges-of-soc-interconnect-bus-matrixpptx/267554329',
    },
    {
      title: 'Comparative analysis of low power full adders',
      subtitle: 'Comparative analysis of low power CMOS architectures of adder circuits which is a basic cell which is widely used across in any silicon products. Novel architecture modelling in silicon level of an ultra-low power and performance efficient adder and strategic analysis of comparative advantages gained on existing adder circuits commercially used',
      slides_url: 'https://github.com/Soham-coder/UG-Thesis',
    },
  ],
  
  
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Hobbies ⚽ and Passion ❤️‍🔥'),
  subtitle: '❤️‍🔥 Passionate about creation and delivery of impactful and user-centric solutions that resonate with both stakeholders and end-users',
  // Please Provide with Your Podcast embeded Link
  subsubtitle: '❤️‍🔥 Passionate about technical product management (software & hardware), power, performance and security efficient silicon and systems, hitechnology products and technology, AI, GenAI',
  subsubsubtitle: '⚽ Hobbies - Karate, Yoga, Cycling, Travelling, Blogging, Reading Books and Watching Anime! 💡 Interest in socio-economic micro and macro factors impacting the world',
  podcast: [
    //'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss an opportunity in product management or just want to say hi? My Inbox is open for all.",
  number: "+91-8335805583",
  email_address: "sohammondal39@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: '', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
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