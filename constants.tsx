import { Project, SkillCategory, Certification, Education } from './types';

export const PROJECTS: Project[] = [
  {
    title: "IoT-Based Smart Home Prototype",
    description: "Remote monitoring and control of home appliances using IoT architectures and secure dashboarding.",
    tags: ["IoT", "Arduino", "Sensor Networks", "Automation"],
    image: "https://picsum.photos/seed/smarthome/600/400"
  },
  {
    title: "Indoor Position Tracking System",
    description: "High-precision indoor localization utilizing BLE beacons and tags with a LoRaWAN gateway for long-range data backhaul.",
    tags: ["IoT", "BLE", "LoRaWAN", "Tracking", "Gateway"],
    image: "https://picsum.photos/seed/tracking/600/400",
    links: { demo: "https://drive.google.com/file/d/1MGf2Dx2SF2VupHznsfVrq0oebKuhEdgL/view?usp=sharing" }
  },
  {
    title: "Helmet & Vehicle Detection System",
    description: "AI-powered real-time detection for rider safety and traffic applications using YOLO and OpenCV.",
    tags: ["Python", "OpenCV", "YOLO", "AI/ML"],
    image: "https://picsum.photos/seed/yolo/600/400",
    links: { demo: "https://drive.google.com/file/d/1cK95fGcyIoYrnmBPtWKRHMTBVhsSi2lr/view" }
  },
  {
    title: "Smart IoT College Administrator",
    description: "Automation of administrative tasks using IoT for improved efficiency in educational environments.",
    tags: ["IoT", "Web App", "Automation", "Database"],
    image: "https://picsum.photos/seed/college/600/400",
    links: { demo: "https://smartiotbasedcollegeadministrative.netlify.app/" }
  },
  {
    title: "IoT Pothole Detector (Concept)",
    description: "Advanced prototype for real-time pothole detection and reporting using onboard sensors and Arduino.",
    tags: ["IoT", "Sensors", "Concept", "Arduino"],
    image: "https://picsum.photos/seed/pothole/600/400"
  },
  {
    title: "Air Mouse Using OpenCV",
    description: "Hand-gesture cursor control system for touch-free human-computer interaction.",
    tags: ["Python", "OpenCV", "Computer Vision", "Gesture Control"],
    image: "https://picsum.photos/seed/airmouse/600/400",
    links: { code: "https://github.com/aadhish16/Air_Mouse_Using_OpenCV" }
  },
  {
    title: "Certificate Builder",
    description: "Automated high-volume certificate generation system with bulk data inputs and PDF generation.",
    tags: ["Web App", "Automation", "JavaScript", "PDF"],
    image: "https://picsum.photos/seed/certbuilder/600/400",
    links: { code: "https://github.com/aadhish16/Certificate-Builder-for-Organizations" }
  },
  {
    title: "SGPA & CGPA Calculator",
    description: "Efficient grade calculation engine with a polished UI for academic performance tracking.",
    tags: ["Web App", "JavaScript", "Education", "Calculator"],
    image: "https://picsum.photos/seed/calculator/600/400",
    links: {
      demo: "https://aadhish16.github.io/sgpa_and_cgpa_calculator/",
      code: "https://github.com/aadhish16/sgpa_and_cgpa_calculator"
    }
  },
  {
    title: "Interactive Resume Builder",
    description: "Modern web-based tool for creating dynamic resumes with real-time previews and PDF export.",
    tags: ["Web App", "React", "PDF Export", "Templates"],
    image: "https://picsum.photos/seed/resbuilder/600/400"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "fa-code",
    description: "Proficient in multiple languages for different application domains.",
    skills: ["Python", "C", "Java", "JavaScript", "MySQL"]
  },
  {
    name: "IoT & Embedded",
    icon: "fa-microchip",
    description: "Hands-on with prototyping and connected device systems.",
    skills: ["Arduino", "Embedded C", "Sensor Networks", "Automation"]
  },
  {
    name: "AI/ML & Data",
    icon: "fa-brain",
    description: "Modeling, inference, and computer vision pipelines.",
    skills: ["TensorFlow", "OpenCV", "Data Processing", "NLP"]
  },
  {
    name: "Web Development",
    icon: "fa-laptop-code",
    description: "Responsive, performant, and accessible experiences.",
    skills: ["HTML/CSS", "JavaScript", "React", "Firebase"]
  },
  {
    name: "Tools & Platforms",
    icon: "fa-screwdriver-wrench",
    description: "Daily drivers and project tooling.",
    skills: ["VS Code", "Arduino IDE", "AutoCAD", "CoppeliaSim", "Wamp Server", "phpMyAdmin"]
  },
  {
    name: "Languages",
    icon: "fa-language",
    description: "Clear communication across teams.",
    skills: ["English (Fluent)", "Tamil (Native)"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "NCC A Certificate",
    issuer: "National Cadet Corps"
  },
  {
    title: "IoT Fundamentals Certification",
    issuer: "Industry Certification"
  },
  {
    title: "Python for Beginners",
    issuer: "Cisco"
  },
  {
    title: "HPE Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise"
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Amazon Web Services"
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte Australia"
  },
  {
    title: "CyberSecurity Master Class",
    issuer: "Scholar Peak"
  },
  {
    title: "Network Ninja's Firewall Defense Hack",
    issuer: "DevTown"
  },
  {
    title: "Micro-Internship in Data Visualization",
    issuer: "TATA"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Diploma in Computer Engineering & IoT",
    institution: "T.S. Srinivasan Polytechnic College",
    grade: "9.95/10.0 GPA",
    description: "Specializing in IoT, Embedded Systems, and AI/ML. Active in robotics and IoT workshops. Led team projects and technical presentations.",
    year: "Current"
  },
  {
    degree: "Secondary Education",
    institution: "Kola Perumal Chetty Vaishnav Senior Secondary School",
    grade: "73%",
    description: "Served as NCC Troop Leader (2022). Developed strong leadership and discipline within the National Cadet Corps while completing core academic curriculum.",
    year: "2022"
  }
];