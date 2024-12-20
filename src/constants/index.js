export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [

    {
      title: 'DSA Domination: From Basics to Breakthroughs',
      desc: 'I have solved 500+ DSA problems across platforms like LeetCode, GeeksforGeeks, and Coding Ninja, showcasing my strong analytical and problem-solving skills. With a 1500+ rating in LeetCode contests and being ranked 1st in my university on GeeksforGeeks, I consistently strive to excel in competitive programming and algorithmic thinking. ',
      subdesc:
        'My journey reflects a deep passion for tackling challenging problems and refining my expertise in data structures and algorithms.',
      href: 'https://codolio.com/profile/Divya108',
      texture: '/textures/project/codilo.mp4',
      logo: '/assets/codilo.GIF',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Leetcode',
          path: '/assets/leetcode.logo.circle.png',
        },
        {
          id: 2,
          name: 'GFG',
          path: 'assets/gfg_logo.png',
        },
        {
          id: 3,
          name: 'Coding Ninja',
          path: '/assets/Coding_Ninjas_logo.jpeg',
        },
       
      ],
    },
   
    {
      title: ' Magma Clone',
      desc: 'Sucessfully replicated the design and functionality of Thismagma.com using HTML, CSS, JavaScript, HTML Canvas and G-Sap ',
      subdesc:
        'Recreated interactive elements such as animations, hover effects and dynamic content loading to match the original website ',
      href: 'https://github.com/thakurDivya1008/Magma',
      texture: '/textures/project/magma.mp4',
      logo: '/assets/magma.png',
      logoStyle: {
        backgroundColor: '#252A88',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
        
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          path: '/assets/js.webp',
        },
        {
          id: 2,
          name: 'HTML',
          path: 'assets/html.png',
        },
        {
          id: 3,
          name: 'CSS',
          path: '/assets/css.png',
        },
        {
          id: 4,
          name: 'ThreeJs',
          path: '/assets/three.png',
        },
      ],
    },
   
    {
      title: 'Job-Board',
      desc: 'Created a comprehensive Job-Board website with HTML, CSS and JavaScript ensuring it adapts seamlessly to various devices and screen size',
      subdesc:
        'Designed an intutive and user-friendly interface , including job listing, search filters, and applicationforms, enhancing the overall user experience.',
      href: 'https://github.com/thakurDivya1008/codSoft/tree/main/job',
      texture: '/textures/project/job.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.webp',
        },
      ],
    },
    {
      title: 'Quiz App',
      desc: 'Designed an intuitive interface for quiz creation and partcipation , incorporating user-friendly elements such as drag and drop question placement and customizable quiz settings',
      subdesc:
        'Implemented  JavaScript for dynamic functionality, including real-time feedback, score calculation and progress tracking enhancing the user experience. ',
      href: 'https://github.com/thakurDivya1008/codSoft/tree/main/quiz-app',
      texture: '/textures/project/quiz.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.webp',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
 