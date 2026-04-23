export default {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    resume: 'Resume',
  },
  hero: {
    greeting: 'Hi, my name is',
    name: 'Zhuoqi Li.',
    tagline: 'I build things at the intersection of hardware and intelligence.',
    description:
      'Graduate student in Electrical and Computer Engineering at',
    descriptionHighlight: 'Carnegie Mellon University',
    descriptionEnd: ', working on AI-driven multimodal systems and distributed computing.',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
  },
  about: {
    label: 'About',
    title: 'A bit about me',
    p1: "I'm Zhuoqi (Alan) Li, a graduate student pursuing my M.S. in Electrical and Computer Engineering at",
    p1School1: 'Carnegie Mellon University',
    p1End: '(expected Dec 2026). I hold a B.S. in Computer Engineering from the',
    p1School2: 'University of California, Irvine',
    p1End2: ", where I was on the Dean's Honor List for 7 quarters.",
    p2: 'My research focuses on AI-driven multimodal systems — currently developing a corrective coaching framework for sports training under Prof. Priya Narasimhan and Prof. Giulia Fanti at CMU. I\'m passionate about the convergence of computer vision, deep learning, and distributed systems.',
    eduTitle: 'Education',
    cmu: 'Carnegie Mellon University',
    cmuDegree: 'M.S. Electrical & Computer Engineering',
    cmuYear: '2025 — 2026',
    uci: 'UC Irvine',
    uciDegree: 'B.S. Computer Engineering',
    uciYear: '2020 — 2024',
  },
  experience: {
    label: 'Experience',
    title: 'Research & Work',
    items: [
      {
        title: 'Motion Instruction Generation',
        role: 'Research',
        org: 'Carnegie Mellon University',
        supervisor: 'Prof. Priya Narasimhan & Prof. Giulia Fanti',
        period: 'Feb 2026 — Present',
        points: [
          'Developing an AI-driven multimodal corrective coaching framework for tennis serve training using the THETIS dataset (8,374 video sequences)',
          'Employing YOLOv9 for person tracking, WHAM/HybrIK for skeleton extraction, and LLMs for data labeling',
          'Applying ResNet-50 with DTW for motion encoding and GCN for pose-error representation',
          'Evaluating model outputs using G-eval scoring across multiple coaching dimensions',
        ],
      },
      {
        title: 'System Level Modeling in SystemC',
        role: 'Research Assistant',
        org: 'UC Irvine — Center for Embedded & Cyber-Physical Systems',
        supervisor: 'Prof. Rainer Doemer',
        period: 'Oct 2023 — Dec 2023',
        points: [
          'Generated simulation modules for RISC-V testing by producing SystemC code from TGFF tool outputs',
          'Extracted graph data with C++ and built Node/Edge data structures for dynamic module generation',
        ],
      },
      {
        title: 'RISC-V Data Transmission Efficiency',
        role: 'Research Assistant',
        org: 'UC Irvine — Center for Embedded & Cyber-Physical Systems',
        supervisor: 'Prof. Rainer Doemer',
        period: 'Apr 2023 — Jun 2023',
        points: [
          'Analyzed data transfer capabilities of an 8-core RISC-V module, recording runtime and finding maximum data limits with C',
          'Designed a new higher-efficiency module structure for continued simulation testing',
        ],
      },
    ],
  },
  projects: {
    label: 'Projects',
    title: "Things I've Built",
    items: [
      {
        title: 'Building Reliable Distributed Systems',
        period: 'Sep 2025 — Dec 2025',
        description:
          'Designed a reliable distributed system with Distributed Fault-Tolerance mechanism supporting collaborative work of multiple replica servers and clients.',
        details: [
          'Implemented Active & Passive Replication with a replication manager and Global Fault Detector',
          'Built robust TCP/IP protocol for real-time synchronization',
          'Designed automatic self-healing protocol and black-box diagnosis for "fail-slow" faults',
        ],
        tags: ['Distributed Systems', 'Fault Tolerance', 'TCP/IP', 'Self-Healing'],
      },
      {
        title: 'GCN Surrogate Models for Fluid Flow Prediction',
        period: 'Jan 2025 — May 2025',
        description:
          'Deployed and tested GCN-based surrogate models against traditional CFD solvers for 2D flow field prediction.',
        details: [
          'Predicted steady incompressible 2D flow in rectangular channels of varying dimensions',
          'Achieved node-wise velocity errors within ±2% of high-fidelity solutions',
        ],
        tags: ['GCN', 'Deep Learning', 'CFD', 'PyTorch'],
      },
      {
        title: 'Weather Prediction Model',
        period: 'Jan 2025 — May 2025',
        description:
          'Developed ML models including CNN to predict temperature levels in Pittsburgh with 80-83% accuracy.',
        details: [
          'Processed raw weather data and classified temperature into five grades',
          'Applied LDA for feature correlation analysis; trained linear and CNN models',
        ],
        tags: ['CNN', 'Python', 'Data Science', 'LDA'],
      },
      {
        title: 'Shared Memory Simulation',
        period: 'Sep 2022 — Dec 2022',
        description:
          'Proved effectiveness of shared memory mechanisms enabling servers to receive latest messages during node failures.',
        details: [
          'Simulated shared memory using Socket protocol and Java with reader/writer servers and storage nodes',
          'Created random node failure scenarios to verify feasibility with single and double writers',
        ],
        tags: ['Java', 'Distributed Computing', 'Socket Programming'],
      },
      {
        title: 'Linux YUV Video Player — "BEST"',
        period: 'Jan 2022 — Mar 2022',
        description:
          'Developed a high-efficiency YUV video player for Linux using GTK and C.',
        details: [
          'Designed data structures for video storage and YUV-to-RGB conversion with GTK 2.0',
          'Built the GUI, control functions, and linked the interface to the playback engine',
        ],
        tags: ['C', 'GTK', 'Linux', 'Multimedia'],
      },
    ],
  },
  skills: {
    label: 'Skills',
    title: 'Technologies I work with',
    categories: [
      { category: 'Languages', skills: ['C', 'C++', 'Java', 'Python', 'VHDL', 'Verilog'] },
      { category: 'ML / AI', skills: ['PyTorch', 'CNN', 'GCN', 'ResNet', 'YOLOv9', 'LLMs'] },
      { category: 'Systems', skills: ['RISC-V', 'SystemC', 'Distributed Systems', 'TCP/IP', 'Linux', 'Socket Programming'] },
      { category: 'Tools & Frameworks', skills: ['OpenCV', 'GTK', 'Git', 'React', 'TGFF'] },
    ],
  },
  contact: {
    label: 'Contact',
    heading: "Let's Connect",
    description:
      "I'm currently open to research collaborations and opportunities. Feel free to reach out — I'd love to hear from you.",
    cta: 'Say Hello',
  },
  footer: {
    credit: 'Designed & Built by Zhuoqi Li',
  },
}
