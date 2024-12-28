/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Soham Mondal',
  title: "About Me",
  subTitle: emoji('I am a Product Management Professional and Semiconductor Specialist with 6 years of experience in edge AI silicon, ultra-low-power architectures, high-performance GPUs, high-bandwidth memory solutions, and IoT ecosystems. My work bridges edge IoT, AI client compute, and HPC data centers, driving scalable growth and operational efficiency through cutting-edge technology aligned with strategic objectives. I specialize in translating complex business needs into advanced semiconductor solutions by combining technical expertise, market intelligence, and cross-functional leadership. My initiatives have consistently delivered value to stakeholders, fostered innovation, and created sustainable competitive advantages in dynamic industries. Currently pursuing my Master’s in Product Management at Carnegie Mellon University’s Tepper School of Business, I am sharpening my skills in product management, technology strategy, technical product marketing, business leadership, and product innovation. Passionate about intelligent, connected, and energy-efficient systems, I aim to leverage advancements in AI, IoT, and HPC to develop transformative solutions that meet emerging industry needs. Let’s connect to explore opportunities where I can contribute to impactful product strategies and groundbreaking innovations.'),
  resumeLink:
    //'https://www.slideshare.net/slideshow/rsum-2-pager-12-ft-standard-syntax/267677575', //2 pager for cmu mspm application
    //'https://docs.google.com/document/d/1awYV_XeFQWCzqCU24BWFU7MgoTpyNoIP/edit?usp=sharing&ouid=104985239470202936383&rtpof=true&sd=true', //Rishabh's Version
    'https://docs.google.com/document/d/1_1QjLOvuaoduAve89MZGMc0Ern25WjoU/edit?usp=sharing&ouid=104985239470202936383&rtpof=true&sd=true',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: 'https://www.linkedin.com/in/sohammn',
  researchgate: 'https://www.researchgate.net/profile/Soham-Mondal-3',
  github: 'https://github.com/Soham-coder',
  git_repo: 'https://github.com/Soham-coder?tab=repositories',
  gmail: 'sohammon@andrew.cmu.edu',

  //medium: 'https://medium.com/@saadpasta',
  //stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  instagram : 'https://www.instagram.com/soh.mn/',
  
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'Programming',
  subTitle: 'Languages and tools ',
  skills: [
    emoji(
      '⚡ Expert in Ultra-Low-Power Silicon and Edge AI Ecosystems: • Proven experience in end-to-end silicon development and energy-efficient architecture design, specializing in ultra-low-power systems and AI accelerators for edge computing'
    ),
    emoji('⚡Driving Innovation at the Intersection of Hardware, Software, and Ecosystems: • Passionate about integrating edge AI into products to enhance capabilities, scalability, and impact, with expertise in co-designing silicon, software, and scalable ecosystems'
          ),
    emoji('⚡Comprehensive Product Management and Marketing Expertise: • Skilled in product discovery, user research, roadmap creation, go-to-market strategies, and building ecosystems aligned with market and user needs • Real-world business development and consulting experience, including market research, product-market fit, SWOT, PESTEL analysis, and launching impactful products'),
    emoji('⚡Technical and Business Versatility • Proficient in embedded programming (C/C++, Python), hardware design & verification (Verilog, SystemVerilog), and software development (React, Node.js, SQL). • Hands-on with AI/ML models, sparse DNN accelerators, and power-performance optimization for scalable edge solutions'),
    emoji('⚡Passionate About High-Tech Product Leadership • Committed to leading and marketing cutting-edge, energy-efficient technology products, bridging technical innovation with strategic business impact'),
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
      skillName: 'Mural, Canva, Office, Visio',
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
      schoolName: 'Carnegie Mellon University - Tepper School of Business',
      logo: require('./assets/images/cmu.jpg'),
      subHeader: 'MSPM (Product Management)',
      duration: 'Jan 2025 - Dec 2025',
      desc: 'An elite, STEM-designated, accelerated Tech MBA, precision-engineered for high-tech product management, seamlessly integrating advanced business strategy, AI, design, and leadership. Offered by the world-renowned Tepper School of Business (#9, Bloomberg) in collaboration with the #1-ranked School of Computer Science (US News) and the prestigious Human-Computer Interaction Institute, this ultra-competitive program delivers an unrivaled fusion of business and cutting-edge technology expertise',
     /* desc: 'An ultra-competitive STEM-designated accelerated tech-MBA program razor focused towards high technology product management coursework integrating the right mix of business, high-technology, design, AI strategy and leadership skills from global #9 (Bloomberg Businessweek) Tepper School of Business and #1 (US News & World Report) School of Computer Science and Human Computer Interaction Institute',*/
      descBullets: [
        'The Accelerate Leadership',
        'Business Fundamentals for High Technology Product Management',
        'Design of Artificial Intelligent Products',
        'Technology Product Marketing',
        'Data Science for Product Managers',
        'HCI',
        'High Technology Product Strategy',
        'Business Communications and Presentations',
        'Managing People and Teams',
        'Business Schools Electives from Tepper Course Catalog',
        'Capstone Project',


        'Technical Product Skills: DNN, LLM, AI/ML, Computer Vision, Robotics',
      ],
    },
    

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
        'Undertook courses in STL, Embedded C++ and Bash scripting from LinkedIn',
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
        'W.B.S.E (10th)- 90.28%',
        'W.B.C.H.S.E (12th)- 85%',
        '3rd prize in fine arts inter-school competition (25 schools @ Kolkata) in the state of West Bengal (2007)',
        'NTSE (2011)'
        
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
      Stack: 'Product Lifecycle Management', //Insert stack or technology you have experience in
      progressPercentage: '75%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Technical Leadership',
      progressPercentage: '100%',
    },
    {
      Stack: 'Engineering Management',
      progressPercentage: '90%',
    },
    {
      Stack: 'Market Research',
      progressPercentage: '100%',
    },
    {
      Stack: 'Product Marketing',
      progressPercentage: '90%',
    },
    {
    Stack: 'Business Development',
    progressPercentage: '95%',
    },
    {
      Stack: 'Project Management', //Insert stack or technology you have experience in
      progressPercentage: '60%', //Insert relative proficiency in percentage
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
      companylogo: require('./assets/images/silabs.webp'),
      date: 'Apr 2024 – Present',
      desc:
        'Hyderabad, India - Central R&D and IoT Solutions development',
        descBullets: [
        'Silicon product development, design, verification, engineering management, central r&d',
        'Leading teams for IoT hardware solutions development, subsystem and SoC level development and validation of critical KPIs'
        ],
    },

    {
      role: 'Senior GPU Product Engineer',
      company: 'Qualcomm',
      companylogo: require('./assets/images/Qualcomm.jfif'),
      date: 'Jun 2023 – Apr 2024',
      desc:
        'Cork, Ireland - GPU product engineering',
        descBullets: [
        'Leadership and Training Development: Established and led a team of 7+, including senior engineers, to develop GPU product engineering capabilities in Ireland; built training modules that reduced new hire ramp-up time by 60% and increased team productivity by 40%, with these modules later adopted globally',
        'Innovative Product Development: Implemented a custom API using UPF to automate power management verification, significantly reducing turnaround time by 45%; developed a scalable tool across 4 GPU versions, enhancing product adaptability in compute, mobile, auto, and HPC markets',
        'Cost Reduction and IP Management: Achieved a $5M reduction in ARM IP licensing costs by integrating efficient in-house IPs into the architecture; spearheaded the redesign of GPU interfaces, saving $1M annually and strengthening Qualcomm’s market competitiveness',
        'Cross-functional Team Coordination: Facilitated collaboration across application engineering, software, architecture, and platform teams in the USA, Canada, and India; managed product requirements and updates, contributing to a fourfold increase in the product’s total addressable market from $190B to $300B',
        'Strategic Feature Management: Owned the end-to-end management of product features and functional verification, improving key performance indicators such as power efficiency and throughput; this strategic focus supported the launch of Snapdragon-X-Elite with advanced on-device AI capabilities',
        ],
    },


    {
      role: 'Associate Staff Product Engineer',
      company: 'Samsung Semiconductor',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'Oct 2021 – Jun 2023',
      desc:
        'Bangalore, India & Seoul, Korea - Memory Solutions Design Platform Team',
        descBullets: [
        'Engineering Leadership and Problem Solving: Defined SoC product requirements and established system KPIs including latency and secure access for SSD and UFS memory solutions; led a team of four advanced degree holders in R&D to optimize $1B silicon products for GPU, edge, and HPC markets, resulting in a 4.5% revenue increase within 12 months',
        'Strategic Product Development: Conducted a competitive analysis of in-house power verification methodologies, identified efficiency improvements, and developed a scalable software product roadmap for memory controller designs; this reduced product engineering turnaround time by 68% and achieved an estimated annual saving of $220K in engineering costs, contributing to a 7% Y-o-Y revenue improvement',
        'Innovation and Industry Contribution: Authored a paper on novel verification methodologies presented at a prestigious in-house technical conference, enhancing the company knowledge base',
        ],
    },
    

    
    {
      role: 'Pre-Silicon Verification Engineer (Grade 6)',
      company: 'Intel Corporation',
      companylogo: require('./assets/images/intel.jfif'),
      date: 'May 2021 – Oct 2021',
      desc:
        ' Bangalore, India - IPU and Automotive/Robotics: Emerging Growth Incubation',
        descBullets: [
        'Process Automation and Efficiency: Developed a software tool to automatically triage weekly regressions and simulation failures, processing approximately 50 gigabytes of data per week; this resulted in a 25% improvement in engineering productivity and a 30% reduction in debug time, shortening the product development lifecycle by 15%; also enhanced user experience by refining user flows based on feedback from over 50 user interviews and market analysis, expanding the user base from 12 to 110 in four months',
        'Advanced Data Analysis and Cost Saving: Identified and addressed technical debt by automating the analysis of waveform metadata from 3-4 terabytes of design data, which doubled testing efficiency and increased feature coverage by 28%, saving $130K per development cycle; led a team of nine to oversee coverage closure activities across IP, SS, and SoC scales, meeting over 10 functional safety standards for automotive silicon products and achieving 100% reliability',
        ],
    },
    {
      role: 'Senior Product Engineer',
      company: 'Samsung Semiconductor',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'Jun 2019 – May 2021',
      desc:
        'Bangalore, India & Seoul, Korea - Memory Solutions Team',
      descBullets: [
        'Strategic Product Development and Cost Reduction: Identified critical inefficiencies leading to a $1.7M excess expense in product engineering; led the development and global deployment of a novel software for automatic verification infrastructure creation, reducing integration and testing cycle times by over 70 man-hours and accelerating time-to-first-test by 60%, resulting in $4.5M annual savings and eliminating error counts entirely. Facilitated a 4-member cross-cultural team in Seoul for comprehensive end-to-end testing and lifecycle management, enhancing product adoption and prototype testing',
        'User-Centric Design and Market Analysis: Conducted over 120 user interviews and comprehensive market analysis to pinpoint essential product features, achieving 100% user adoption and an 80% increase in user satisfaction; recognized with an appreciation award from the VP of Engineering',
        'Innovation and Recognition: Authored and presented a white paper at the Samsung Global Engineering Conference, which significantly raised the technical profile and influence of the group; received the 3rd prize among 150+ entries, highlighting the innovative approach to semiconductor engineering', 
      ],
    },
   
     
    {
      role: 'Assistant Engineer',
      company: 'Samsung Semiconductor',
      companylogo: require('./assets/images/samsung.jfif'),
      date: 'May 2018 – Jul 2018 (Internship)',
      desc:
        'Bangalore, India - DRAM IP Product Development Team',
      descBullets: [
        'Problem Solving and Engineering: Researched and performed 10-15 A/B tests of resource and run-time heavy march algorithms of proprietary memory built-in self-test IP of Samsung. Made recommendations to senior management a hardware-centric algorithm to enhance testing time by 35%. Engineered and prototyped the solution and validated the same in a FPGA platform',
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
      link: 'https://www.slideshare.net/slideshow/business-development-and-product-strategy-for-a-sme-named-sarl-based-in-lebanon-as-part-of-a-local-ngo-zahle-casa-initiativecertificate/267528925',
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
  title: emoji('Some Certifications 📄 & Co/Extra-Curriculars 🏃'),
  subtitle:
    'Some Certifications & Co/Extra-Curriculars',

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
      title: 'Professional Certification in Product Management and other certification @ LinkedIn',
      subtitle: 'Product Management, Product Road Mapping, Product Strategy, Technical Product Management',
      image: require('./assets/images/LinkedIn_PM1.webp'),
      footerLink: [
        { name: 'Certificate', url: 'https://www.linkedin.com/learning/certificates/9d15b079e37a688d0b560007f9e09f906200e67ffe5eb1a0c5a382d2723c888b'},
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
/*
    {
      title: 'Network Management intern @Nettech Pvt. Ltd and IT management intern @ONGC Pvt. Ltd',
      subtitle: 'Internship and hands-on-training in systems programming, computer networks, network and information security, firewall, DoS and cyber attacks setted up realtime startopology LAN network of 25+ workstations and a HTTP application server',
      image: require('./assets/images/nw_mgt.webp'),
      footerLink: [
        { name: 'Internship', url: 'https://www.slideshare.net/slideshow/network-management-internship-at-nettech-pvt-ltd-and-ongc-pvt-ltd/267531986' },
      ],
    },
    */
    {
      title: 'Silicon Engineering Professional Certifications',
      subtitle: 'Low power silicon product development, architecture, design, verification, scalable testbench infrsatructure creation, and simulation infrastructure programming',
      image: require('./assets/images/Low-Power_Simulation_with_IEEE_Std_1801_UPF_v18.09_Exam_600x600.webp'),
      footerLink: [
        { name: 'Low-Power Simulation with IEEE Std 1801 UPF v18.09 Exam', url: 'https://www.credly.com/badges/f6b3f0ce-d198-4447-8c1f-9c6414dfff90?source=linked_in_profile' },
        { name: 'SystemVerilog Accelerated Verification with UVM v1.2.5 Exam', url: 'https://www.youracclaim.com/badges/cd96f36a-a508-414f-a9da-2fcfe3bd37ec?source=linked_in_profile' },
        { name: 'Xcelium Simulator v19.03 Exam', url: 'https://www.youracclaim.com/badges/5b737b9d-edbb-47c3-91d3-e71886d7b176?source=linked_in_profile' },
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
    /* 
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
*/
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
/*
    {
      title: 'Equity Researcher at Money Roller (2017)',
      subtitle: 'Conducted global financial market research on Gold price valuation and financial modeling',
      image: require('./assets/images/the_money_roller_logo.webp'),
      footerLink: [
        { name: 'Acknowledgement', url: 'https://drive.google.com/file/d/0BxM540VPs0PdUVlSbmp0dGNqNHc/view' },
      ],
    },
    */
   /*
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
      ],
    },
    */
/*
    {
      title: 'Novel encryption algorithm and software development',
      subtitle: 'Awarded 2nd prize in the event Papier (scientific paper presentation) conducted by Jadavpur University Electrical Engineering Department, named Convolution, under the aegis of IET and IEEE Signal Processing Society in 2018',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Prize', url: 'https://github.com/Soham-coder/ecc_vs_rsa#prizes' },
      ],
    },
    */
   /*
    
    {
      title: 'Employee of the month at Samsung Semiconductor India Research',
      subtitle: 'Awarded 2 Employee of the Month Awards across 2 years among 700+ employees in Samsung memory subdivision for my contribution to 2 novel EDA software product development with far improved features and performance than external market products and also for my contribution to memory solutions product development and verification',
      image: require('./assets/images/eom.webp'),
      footerLink : [
        { name: 'Prize 1', url: 'https://www.slideshare.net/slideshow/employee-of-the-month-samsung-semiconductor-india-research/267528754' },
      ],
    },
    */
   
    {
      title: 'Fine Arts 🎨',
      subtitle: '3rd prize in fine arts inter-school competition UDAAN (25 schools participated in Kolkata) in the state of West Bengal by the Government of India (2007)',
      image: require('./assets/images/ntse_sphs.webp'),
      footerLink : [
        { name: 'South Point High School', url: 'https://www.linkedin.com/school/south-point-high-school/?originalSubdomain=in' },
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
      title: 'Community Services',
      subtitle: 'Donated educational resources and stationery items for sensitization of 70 underprivileged students in an NGO under the aegis of Bharat Sevasram Trust (2021). Instructor for Physics, Mathematics for 20+ JEE and NEET aspirants (2016-2019); Volunteer in Doddanakundi (largest natural lake in Bangalore India) cleaning drive as part of ESG initiative and CSR activities',
      image: require('./assets/images/community_service.webp'),
      footerLink : [],
    }, 
    /*
    {
      title: 'Outdoor games',
      subtitle: 'Playing Cricket 🏏',
      image: require('./assets/images/cricket.webp'),
      footerLink : [],
    },*/

],
display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'I previously maintained a blog on ultra-low-power silicon development, offering insights on VLSI architecture design and testbench concepts that supported engineers and product developers in their careers.',

  blogs: [
    {
      url: 'https://reverent-northcutt-8163cd.netlify.app/blog/apb/',
      title: 'Blog',
      description:
        'APB Bus Interface Testbench Infrastructure Prototype',
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
      title: 'Novel encryption algorithm and software development',
      subtitle: 'Improved performance ECC algorithm implementation and application and comprative benefits with RSA',
      slides_url: 'https://www.slideshare.net/slideshow/novel-encryption-algorithm-and-software-development-ecc-and-rsa/267604257',
      event_url: 'https://github.com/Soham-coder/ecc_vs_rsa',
    },
    {
      title: 'Comparative analysis of low power full adders (UG Thesis)',
      subtitle: 'Comparative analysis of low power CMOS architectures of adder circuits which is a basic cell which is widely used across in any silicon products. Novel architecture modelling in silicon level of an ultra-low power and performance efficient adder and strategic analysis of comparative advantages gained on existing adder circuits commercially used',
      slides_url: 'https://github.com/Soham-coder/UG-Thesis',
    },

  ],
  
  
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Hobbies ⚽ and Passion ❤️‍🔥'),
  subtitle: '❤️‍🔥 Passionate about creation and delivery of impactful and user-centric products & solutions that resonate with both stakeholders and end-users, together as a team and utilising our own unique strengths, fostering inclusivity and properity',
  // Please Provide with Your Podcast embeded Link
  subsubtitle: '❤️‍🔥 Passionate about technical product management (software & hardware), power, performance and security efficient silicon and systems, high-technology products and services, AI & GenAI',
  subsubsubtitle: '🧘 Hobbies - Karate, Yoga, Cycling, Travelling, Blogging, Reading Books and watching global news about economics and current affairs! 💡 Interest in socio-economic micro/macro factors impacting the world, spiritual discussions. Outside work love to take part in constructive debates and discussions',
  podcast: [
    //'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji(""),
  subtitle:"☎️ +1 412 567 2918",
  number: "+91-8335805583",
  email_address: "sohammon@andrew.cmu.edu"
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
