export const profile = {
  name: 'Xiang Jia',
  shortName: 'XJ',
  title: 'Mechatronics & Embedded AI Engineer',
  intro: 'I build embodied systems where AI meets hardware.',
  summary:
    'Mechatronics and Robotic Systems student focused on bridging high-level AI algorithms with low-level hardware actuation through robust embedded system design.',
  education: 'BEng in Mechatronics and Robotic Systems · Xi’an Jiaotong-Liverpool University',
  educationMeta: 'Suzhou, China · Sep 2024 — Present',
  academicHighlights: ['GPA 4.0 / 4.0', 'Academic Excellence Award', 'Sophomore · Year 2'],
  researchInterests: [
    'Embodied AI',
    'Robot Control Systems',
    'Sim-to-Real Transfer',
    'Soft Robotics',
  ],
  experience: [
    {
      name: 'Bionic Face',
      context: 'High-Fidelity Humanoid Robotics Project',
      role: 'Core Hardware & Control Engineer',
      period: 'Sep 2025 — Present',
      accent: 'blue',
      highlights: [
        'Designed a high-DOF bionic facial structure in Fusion 360 for natural micro-expressions.',
        'Developed low-level motor control and S-curve motion planning for smooth servo actuation.',
        'Engineered a custom packet protocol to synchronize Python control software with the embedded controller.',
      ],
      tags: ['Fusion 360', 'Motion Planning', 'Python', 'Embedded Control'],
    },
    {
      name: 'Oxidome',
      context: 'Rust-Based Embedded Access Control System',
      role: 'Hardware & Embedded Software Developer',
      period: 'Oct 2025 — Present',
      accent: 'sage',
      highlights: [
        'Building a secure intelligent access-control system on ESP32 with Rust memory safety.',
        'Writing a hardware abstraction layer for BLE, NFC, and Wi-Fi modules.',
        'Validating the full prototype through PCB checks, functional tests, and power analysis.',
      ],
      tags: ['Rust', 'ESP32', 'HAL', 'BLE / NFC / Wi-Fi'],
    },
    {
      name: 'Zen Server Probe',
      context: 'Rebuild-Z Hardware Hackathon',
      role: 'Team Lead & Lead Developer',
      period: 'Aug 2025',
      accent: 'terracotta',
      highlights: [
        'Built a real-time server monitoring probe on ESP32-C6 with LVGL status rendering.',
        'Optimized hardware resources for smooth UI transitions alongside active Wi-Fi polling.',
      ],
      tags: ['ESP32-C6', 'LVGL', 'Real-Time Monitoring'],
    },
    {
      name: 'Baidu Training Camp',
      context: 'Smart Toy Development',
      role: 'Embedded Developer',
      period: 'Jul 2025 — Sep 2025',
      accent: 'blue',
      highlights: [
        'Developed an educational programming toy using ESP32-S3 for processing and control tasks.',
      ],
      tags: ['ESP32-S3', 'Embedded Systems', 'Education'],
    },
  ],
  projects: [
    {
      name: 'Edge AI Deployment & Knowledge Base Agent',
      period: 'Mar 2025 — Jun 2025',
      description:
        'Trained and deployed an animal-emotion analysis model on ESP32-S3, then built an LLM agent that combines APIs with a custom knowledge base to automate technical report sections.',
      tags: ['Edge AI', 'ESP32-S3', 'LLM Agent'],
      accent: 'terracotta',
    },
    {
      name: 'DevUtility Open Source Project',
      period: 'Jun 2025 — Aug 2025',
      description:
        'Open-source backend tools on GitHub, including an RSA key analyzer and a URL analysis tool, to help developers debug cryptography.',
      tags: ['Open Source', 'Backend Tools', 'Cryptography'],
      accent: 'sage',
    },
  ],
  skills: [
    {
      label: 'Programming',
      value: 'Rust · C/C++ · Python · JSX',
    },
    {
      label: 'Embedded Systems',
      value: 'ESP32 / STM32 · UART / I2C / SPI · HAL · RTOS',
    },
    {
      label: 'Robotics & Tools',
      value: 'ROS 2 · Fusion 360 · Bambu Studio · PCB Design',
    },
    {
      label: 'Software & Design',
      value: 'Figma · Dify · Linux Environment',
    },
  ],
  leadership: [
    'President, Science and Innovation Association (SIA)',
    'Organizer, Dify Hackathon',
    'Designed an automated workflow for question classification to optimize LLM application context length.',
  ],
  languages: 'English · IELTS 7.0 (Reading 7.5, Listening 7.5, Speaking 7.0, Writing 6.5) · Chinese · Native',
} as const;
