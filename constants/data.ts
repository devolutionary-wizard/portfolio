import { NavItemType, passionType, projectType, skillType } from "./type";
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram,
    AiOutlineFacebook,
  } from "react-icons/ai";
  import { RiTelegramLine } from "react-icons/ri";
export const NAV_ITEMS: Array<NavItemType> = [
    {
      label: "Home",
      page: "home",
    },
   
    {
      label: "About",
      page: "about",
    },
     
    {
      label: "Passion",
      page: "passion",
    },
    // {
    //   label: "Projects",
    //   page: "projects",
    // },
   
  ];

  export  const SOCIAL_MEDIA = [
    {
      link: "https://github.com/seanglayz",
      icon: AiOutlineGithub,
    },
    {
      link: "https://www.linkedin.com/in/sasuke-uchiha-9a0584209/",
      icon: AiOutlineLinkedin,
    },
    {
      link: "https://web.facebook.com/li.seanglay.2k/",
      icon: AiOutlineFacebook,
    },
    {
      link: "https://www.instagram.com/scarysnoopy/",
      icon: AiOutlineInstagram,
    },
    {
      link: "https://t.me/SeangLayz",
      icon: RiTelegramLine,
    },
  ];

 
export const SKILLS: Array<skillType> = [
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React JS" },
    { skill: "Next JS" },
    { skill: "Node JS" }, { skill: "Nest JS" },
    { skill: "MongoDB" }, { skill: "MySQL" },
    { skill: "React Native" },
    { skill: "Tailwind CSS" },
    { skill: "Chakra UI" },
    { skill: "Material UI" },
    { skill: "Flutter" },
    { skill: "Laravel" },
  ];

  export const PASSIONS : Array<passionType> =[{
    "title":"Front-end",
    "src":'/frontend.png',
    "desc":"Creativity is nothing but the way to solve new problems. It’s through mistakes that you actually can grow. You have to get bad in order to get good",
  },{
    "title":"Back-end",
    "desc":"Networks don't want a show with a continuing story. There's no backend potential.",
    "src":'/backend.png',
  },{
    "title":"Mobile",
    "desc":"Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.",  "src":'/mobile.png',
  }];

  export const PROJECTS: Array<projectType> = [
    
    {
      name: "ChatTask",
      description:
        "ChatTask is a productivity application crafted to empower users to independently create, monitor, and assign tasks, while facilitating effective team communication akin to that of a project management system. Our objective is to establish ChatTask as a robust tool, enabling individuals to meticulously plan and organize their endeavors towards specific objectives or targets, ensuring timely completion with minimal communication and task tracking efforts.",
      image: "/chat_task.png",
      link: "https://play.google.com/store/apps/details?id=com.chat_task.app",
    },
    {
      name: "Mechant MakFood",
      description: "With MakFood Merchant, both you and your esteemed clientele will experience an elevated level of satisfaction at your restaurant. This remarkable solution facilitates seamless order placement for your customers, allowing them to conveniently order remotely or directly from their table within your establishment. The ease of tracking orders and processing payments has never been more effortless. By harnessing the capabilities of MakFood Merchant, you can efficiently manage incoming orders while maintaining optimal staffing and operational arrangements. Embrace this innovative tool to enhance your restaurant's efficiency and ensure a delightful dining experience for all patrons.",
      image: "/makfood_merchant.png",
      link: "https://play.google.com/store/apps/details?id=com.mcircle.merchantapp",
    },
    {
      name: "MakFood Central",
      description: "The MakFood Central project is an ambitious and comprehensive endeavor designed to develop a robust platform for publishing products and managing multiple restaurants. With MakFood Central, businesses can effortlessly showcase their food offerings, manage menus, and efficiently handle orders from various restaurants under one centralized system. This project aims to provide an intuitive and user-friendly interface for restaurant owners, allowing them to easily update menus, track inventory, and monitor sales performance. Additionally, MakFood Central facilitates seamless communication between restaurants and customers, ensuring a smooth ordering process and timely delivery. By undertaking this project, participants will gain valuable experience in building a powerful tool for product publishing and restaurant management, streamlining operations for food establishments.",
      image: "/makfood_central.png",
      link: "https://apps.microsoft.com/store/detail/makfood-central/9N9BKW7XT9KT?hl=km-kh&gl=kh",
    },
    {
      name: "Davane",
      description:
        "With Davane, you will find an enhanced level of appreciation for dining at your favorite restaurants. This innovative platform enables you to conveniently place orders from a remote location or directly at your table within the restaurant, eliminating the need for assistance from waitstaff. Furthermore, Davane provides you with a broader range of payment options, ensuring a seamless and flexible experience when settling the bill. Experience the utmost convenience and satisfaction with Davane, as it revolutionizes the way you enjoy dining out.",
      image: "/davane.png",
      link: "https://play.google.com/store/apps/details?id=com.makcircle.davanemobilecustomer",
    },
    {
      name: "Realtime Todo",
      description:
        "A real-time Todo application built with Next.js, TypeScript, and Firebase is a sophisticated and powerful productivity tool that enables users to create, manage, and track tasks seamlessly. Leveraging the Next.js framework, the application ensures fast and responsive user interfaces, while TypeScript provides strong typing and enhanced code reliability. The integration with Firebase, a robust cloud-based platform, enables real-time data synchronization, allowing multiple users to collaborate and view updates instantly. This comprehensive solution enables users to create task lists, set due dates, prioritize tasks, and mark them as complete, all in real-time. With its advanced features and seamless integration, this application offers an efficient and organized approach to managing tasks, enhancing productivity and enabling effective task management in real-time.",
      image:'/real_time_todo.png',
        github: "https://github.com/seanglayz/next_firebase_todo",
      link: "next-firebase-todo-ivory.vercel.app",
    },
    {
      name: "Portfolio",
      description:
        "Portfolio is a meticulously curated and thoughtfully organized collection of work that showcases an individual's skills, accomplishments, and professional achievements. Serving as a comprehensive representation of one's capabilities, a portfolio demonstrates expertise in a specific field or discipline through a diverse range of projects, designs, artworks, or other relevant materials. It serves as a powerful tool for individuals, such as artists, designers, or professionals, to showcase their talents and competencies to potential clients, employers, or collaborators. A well-structured portfolio highlights the individual's unique style, creativity, and problem-solving abilities, providing an impactful means of conveying their expertise and leaving a lasting impression on viewers.",
      image:'/portfolio.png',
        github: "https://github.com/seanglayz/portfolio",
      link: "https://seanglay-portfolio.vercel.app/",
    },
     {
      name: "Movie",
      description:
        "The Pet Grooming Website project is an engaging and educational undertaking that focuses on mastering Redux while developing a feature-rich platform for pet grooming services. In addition to Redux, the project incorporates the MovieDB API to enhance the user experience. Learners will construct a comprehensive website where pet owners can explore various grooming services, schedule appointments, and view pricing information. The integration of the MovieDB API allows for displaying relevant pet-related movies and recommendations to engage and entertain visitors. By undertaking this project, participants will gain valuable experience in Redux state management, API integration, and creating dynamic web applications tailored to the pet grooming industry.",
      image:'/movie.png',
      link: "https://movie-website-with-redux.vercel.app/",
    },
    {
      name: "Pet Grooming",
      description:
        "The Pet Grooming Website project is a comprehensive and educational endeavor aimed at learning React.js and Tailwind CSS frameworks while constructing a visually stunning and user-friendly platform for pet grooming services. By leveraging the power of React.js for building dynamic and interactive components, and incorporating the versatile styling capabilities of Tailwind CSS, learners will develop a fully functional website where pet owners can explore grooming services, schedule appointments, and access information about grooming packages and pricing. The project will showcase responsive design, intuitive navigation, and appealing visuals, providing an immersive experience for visitors. By undertaking this project, participants will enhance their skills in React.js and Tailwind CSS, gaining valuable experience in front-end development for creating exceptional pet grooming websites.",
      image:'/dog_grooming.png',
      link: "https://dog-website-orcin.vercel.app/",
    },
    {
      name: "Youtube Clone",
      description:
        "The YouTube Clone project is an ambitious and enlightening endeavor that serves as a comprehensive learning opportunity for both Vue.js and Laravel frameworks. By combining the front-end capabilities of Vue.js and the back-end functionalities of Laravel, this project aims to replicate the core features of the popular video-sharing platform, YouTube. Learners will gain practical experience in developing a full-stack application, encompassing aspects such as user authentication, video uploading, commenting, likes, and subscriptions. Through this project, participants will enhance their proficiency in Vue.js and Laravel, while gaining valuable insights into the intricacies of building a complex web application that emulates the functionality and user experience of YouTube.",
      image:'/youtube_clone.jpeg',
        github: "https://github.com/seanglayz/youtube_clone",
      link: "https://github.com/seanglayz/youtube_clone",
    },
    {
      name: "Anime Tracker",
      description:
        "The Anime Tracker project is an immersive and educational endeavor focused on learning the Vue.js framework while building a sophisticated application. With Vue.js as the core technology, this project aims to develop a robust platform that enables users to track and manage their favorite anime series. Through this hands-on experience, learners will gain a comprehensive understanding of Vue.js concepts such as components, directives, state management, and routing. The application will allow users to search for anime series, create personalized watchlists, mark episodes as watched, and receive notifications for new releases. By embarking on this project, learners will enhance their proficiency in Vue.js while creating a functional and user-friendly anime tracking solution.",
      image:'/anime_tracker.png',
        github: "https://github.com/seanglayz/anime_tracker",
      link: "https://anime-tracker-lnh8nuos2-seanglyseanglay.vercel.app/",
    },
    {
      name: "Music Player",
      description:
        "The Music Player project is a comprehensive and engaging endeavor designed to facilitate the learning of Vue.js while constructing a feature-rich application. This project focuses on building a dynamic music player that allows users to enjoy their favorite tunes with a seamless and immersive experience. By utilizing Vue.js as the core technology, learners will gain valuable insights into Vue.js concepts such as components, data binding, event handling, and routing. The music player will incorporate functionalities such as playlist creation, playback controls, volume adjustment, and song progress tracking. Through this project, learners will enhance their Vue.js skills while developing a fully functional and aesthetically pleasing music player application.",
      image:'/music_player.png',
        github: "https://github.com/seanglayz/music_player",
      link: "https://music-player-kappa-sand.vercel.app/",
    },
    {
      name: "Power Blog",
      description:
        "The Blog Website project is an immersive and educational endeavor that focuses on learning Next.js and Chakra UI frameworks while constructing a visually appealing and dynamic blog platform. Utilizing the Next.js framework for efficient server-side rendering and routing, and incorporating the Chakra UI library for creating sleek and responsive user interfaces, learners will develop a fully functional blog website. The project will encompass features such as blog post creation, editing, and categorization, along with the ability to view and comment on posts. By building this project, participants will gain practical experience in front-end development, mastering Next.js and Chakra UI for creating captivating and user-friendly blog websites.",
      image:'/power_blog.png',
        github: "https://github.com/seanglayz/power-blog",
      link: "https://github.com/seanglayz/power-blog",
    },
    {
      name: "Automata App",
      description:
        "Automata refers to a cutting-edge field of study and application that involves the design, development, and analysis of mechanical systems capable of autonomous and programmable behavior. These intricate machines, known as automata, are constructed with precision and intricacy to perform specific tasks or replicate human-like movements. Employing a combination of mechanics, electronics, and computer programming, automata possess the ability to respond to external stimuli and execute pre-defined sequences of actions. With their potential to simulate human actions and perform complex operations with precision, automata find applications in various industries, including manufacturing, robotics, and artificial intelligence research, contributing to advancements in efficiency, productivity, and innovation.",
      image:'/automata.png',
        github: "https://github.com/seanglayz/automata",
      link: "https://github.com/seanglayz/automata",
    },
    {
      name: "Travel App",
      image:"/no_ui.png",
      description:
        "The Travel app is a sophisticated and comprehensive platform that empowers users to plan, organize, and embark on unforgettable journeys with ease. With its intuitive interface and extensive range of features, the app serves as a one-stop solution for all travel-related needs. Users can explore a wealth of destinations, discover popular attractions, book flights, hotels, and rental cars, and access personalized itineraries tailored to their preferences. The app also provides real-time updates on travel advisories, weather conditions, and flight statuses, ensuring a smooth and informed travel experience. With its seamless integration and efficient navigation, the Travel app is a trusted companion for both leisure and business travelers, facilitating seamless exploration and creating lifelong memories.",
      github: "https://github.com/seanglayz/travel_app",
      link: "https://github.com/seanglayz/travel_app",
    },
    {
      name: "Food Delivery",
      image:"/no_ui.png",
      description:
        "The Food Delivery app is a sophisticated and efficient platform that revolutionizes the way users access and enjoy a wide variety of culinary delights. With its user-friendly interface and extensive network of partner restaurants, the app provides a seamless and convenient solution for ordering food from the comfort of one's home or office. Users can browse through an extensive menu selection, customize their orders, and securely make payments within the app. The app also offers real-time order tracking, ensuring transparency and timely delivery. With its robust delivery infrastructure and commitment to customer satisfaction, the Food Delivery app offers a hassle-free and delightful experience, bringing the finest cuisines directly to the users' doorstep.",
      github: "https://github.com/seanglayz/Food_Delivery",
      link: "https://github.com/seanglayz/Food_Delivery",
    },
    {
      name: "Music App",
      image:"/no_ui.png",
      description:
        "The Music app is a sophisticated and feature-rich platform that provides users with a seamless and immersive music listening experience. With its extensive library of songs spanning various genres and artists, the app offers a vast collection of musical content to suit diverse preferences. Users can easily navigate through the app's intuitive interface to discover new music, create personalized playlists, and enjoy uninterrupted playback. Furthermore, the app provides curated recommendations based on user preferences, enhancing the discovery of new artists and songs. With its high-quality audio streaming capabilities and user-friendly controls, the Music app ensures that users can indulge in their favorite tunes with exceptional sound clarity and convenience.",
      github: "https://github.com/seanglayz/music_app",
      link: "https://github.com/seanglayz/music_app",
    },
     {
      name: "Todo App",
      image:"/no_ui.png",
      description:
        "The Todo app is a sophisticated and comprehensive application that provides users with a highly efficient and organized approach to managing their tasks and responsibilities. With its user-friendly interface and advanced features, this app enables individuals to effectively prioritize, track, and complete their tasks in a systematic manner. Users can effortlessly create task lists, set due dates, assign priorities, and establish reminders to ensure timely completion. Additionally, the app offers the ability to categorize tasks, attach relevant files, and collaborate with others, making it an indispensable tool for both personal and professional task management. By leveraging the Todo app, users can enhance their productivity, streamline their workflow, and accomplish their goals with utmost efficiency.",
      github: "https://github.com/seanglayz/todo_app",
      link: "https://github.com/seanglayz/todo_app",
    },
  
  ];