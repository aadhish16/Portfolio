import { Project, SkillCategory, Certification, Education, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Hyderabad  Airport  MRO (GMR) Indoor  Location  Tracking  System",
    description: "Real-time indoor positioning system using BLE beacons, RSSI-based localization, trackers, and LoRaWAN/MQTT communication for zone and coordinate-based tracking.",
    tags: ["IoT", "BLE", "LoRaWAN", "MQTT", "Tracking"],
    image: "https://picsum.photos/seed/smarthome/600/400"
  },
  {
    title: "IoT-Based Smart Home Prototype",
    description: "Remote monitoring and control of home appliances using IoT architectures and secure dashboarding.",
    tags: ["IoT", "Arduino", "Sensor Networks", "Automation"],
    image: "https://picsum.photos/seed/smarthome/600/400"
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
    title: "Vision-Language Controlled Robot",
    description: "Local VLM and LLM integration with robotic systems for command-based and vision-guided cube-picking tasks.",
    tags: ["VLM", "LLaVA", "Ollama", "Robotics", "Computer Vision"],
    image: "https://picsum.photos/seed/vlmrobotics/600/400"
  },
  {
    title: "Vision-Language Robotic Manipulation",
    description: "Robot learning system using LeRobot, ROS 2, cameras, and VLA/VLM models for dataset collection, training, and vision-guided robotic manipulation.",
    tags: ["Physical AI", "VLA", "LeRobot", "ROS 2", "Computer Vision"],
    image: "https://picsum.photos/seed/robotmanipulation/600/400"
  },
  {
    title: "Edge AI Safety Detection Platform",
    description: "Real-time PPE and person detection using custom YOLO models, OpenCV, C++, and edge-device inference with optimized model deployment.",
    tags: ["Edge AI", "YOLO", "OpenCV", "C++", "Computer Vision"],
    image: "https://picsum.photos/seed/edgeaisafety/600/400"
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
    skills: ["Python", "C", "Java", "JavaScript", "SQL", "C++", "Bash / Shell", "Git"]
  },
  {
    name: "IoT & Embedded",
    icon: "fa-microchip",
    description: "Hands-on with prototyping and connected device systems.",
    skills: ["Arduino", "Raspberry Pi", "ESP32","Embedded C", "Sensor Networks", "LiDAR", "LoRaWAN", "Depth Cameras", "GPS", "MQTT"]
  },
  {
    name: "AI/ML & Data",
    icon: "fa-brain",
    description: "Modeling, inference, and computer vision pipelines.",
    skills: ["TensorFlow", "PyTorch", "Hugging Face Transformers", "OpenCV", "YOLO / Object Detection", "CUDA", "Data Processing", "NLP/VLMs","Local LLMs", "LLM Integration / RAG", "Model Fine-tuning"]
  },
  {
    name: "Web Development",
    icon: "fa-laptop-code",
    description: "Responsive, performant, and accessible experiences.",
    skills: ["HTML/CSS", "JavaScript", "React", "WebRTC", "Firebase", "WebSocket", "REST APIs", "Flask", "Node.js", "FastAPI","API Integration"]
  },
  {
    name: "Tools & Platforms",
    icon: "fa-screwdriver-wrench",
    description: "Daily drivers and project tooling.",
    skills: [
      "Arduino IDE",
      "AutoCAD",
      "CoppeliaSim",
      "Wamp Server",
      "PHP Admin",
      "GitHub",
      "Docker",
      "Postman",
      "Blender",
      "ChirpStack",
      "Jira",
      "The Things Network (TTN)",
      "OpenClaw"
    ]
  },
  {
    name: "Robotics & Simulation",
    icon: "fa-robot",
    description: "Experience with robotic systems",
    skills: [
      "ROS, ROS 2",
      "MoveIt / MoveIt 2",
      "Gazebo",
      "LeRobot (6 Axis)",
      "UR Robots (6 Axis)",
      "PiPER-X (6 Axis)",
      "Flex IV Robots (7 Axis)",      
      "MuJoCo",
      "Isaac Sim",
      "Robot Kinematics",
      "Teleoperation",
      "Robot Data Collection",
      "Robot Policy Training",
    ]
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
    degree: "B.Tech in Information Technology",
    institution: "SSN College of Engineering",
    grade: "In Progress",
    description: "Pursuing a Bachelor of Technology in Information Technology with a focus on software development, intelligent systems, and emerging technologies.",
    year: "2026 - 2029"
  },
  {
    degree: "Diploma in Computer Engineering & IoT",
    institution: "T.S. Srinivasan Polytechnic College",
    grade: "9.94/10.0 GPA",
    description: "Specializing in IoT, Embedded Systems, and AI/ML. Active in robotics and IoT workshops. Led team projects and technical presentations.",
    year: "2023 - 2026"
  },
  {
    degree: "Secondary Education",
    institution: "Kola Perumal Chetty Vaishnav Senior Secondary School",
    grade: "73%",
    description: "Served as NCC Troop Leader (2022). Developed strong leadership and discipline within the National Cadet Corps while completing core academic curriculum.",
    year: "2023"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Junior Software Engineer",
    company: "Sprilte Software",
    period: "Nov 2025 - Jul 2026"
  },
  {
    role: "AI Engineer Intern",
    company: "OMSEVVEL Software",
    period: "May 2024"
  }
];