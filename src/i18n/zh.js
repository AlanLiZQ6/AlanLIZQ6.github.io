export default {
  nav: {
    about: '关于',
    experience: '经历',
    projects: '项目',
    skills: '技能',
    contact: '联系',
    resume: '简历',
  },
  hero: {
    greeting: '你好，我是',
    name: '李卓奇。',
    tagline: '在硬件与智能的交汇处构建未来。',
    description: '卡内基梅隆大学电子与计算机工程硕士研究生，',
    descriptionHighlight: '',
    descriptionEnd: '专注于AI驱动的多模态系统与分布式计算。',
    viewWork: '查看我的作品',
    getInTouch: '联系我',
  },
  about: {
    label: '关于',
    title: '关于我',
    p1: '我是李卓奇（Alan），目前在',
    p1School1: '卡内基梅隆大学',
    p1End: '攻读电子与计算机工程硕士学位（预计2026年12月毕业）。本科毕业于',
    p1School2: '加州大学尔湾分校',
    p1End2: '计算机工程专业，在校期间连续7个学季获得院长荣誉名单。',
    p2: '我的研究方向是AI驱动的多模态系统——目前在CMU的Priya Narasimhan教授和Giulia Fanti教授指导下，开发用于体育训练的纠正式指导框架。我对计算机视觉、深度学习和分布式系统的融合充满热情。',
    eduTitle: '教育背景',
    cmu: '卡内基梅隆大学',
    cmuDegree: '电子与计算机工程硕士',
    cmuYear: '2025 — 2026',
    uci: '加州大学尔湾分校',
    uciDegree: '计算机工程学士',
    uciYear: '2020 — 2024',
  },
  experience: {
    label: '经历',
    title: '研究与工作',
    items: [
      {
        title: '运动指令生成',
        role: '科研',
        org: '卡内基梅隆大学',
        supervisor: 'Priya Narasimhan 教授 & Giulia Fanti 教授',
        period: '2026年2月 — 至今',
        points: [
          '基于THETIS数据集（8,374个视频序列），开发AI驱动的多模态网球发球纠正训练框架',
          '使用YOLOv9进行人体追踪，WHAM/HybrIK进行骨架提取，LLM进行数据标注',
          '应用ResNet-50与DTW进行动作编码，GCN捕捉姿态误差表征',
          '使用G-eval评分在多个训练维度上评估模型输出',
        ],
      },
      {
        title: 'SystemC系统级建模',
        role: '研究助理',
        org: '加州大学尔湾分校 — 嵌入式与信息物理系统中心',
        supervisor: 'Rainer Doemer 教授',
        period: '2023年10月 — 2023年12月',
        points: [
          '通过TGFF工具输出生成SystemC代码，为RISC-V测试生成仿真模块',
          '使用C++提取图数据，构建Node/Edge数据结构实现动态模块生成',
        ],
      },
      {
        title: 'RISC-V数据传输效率研究',
        role: '研究助理',
        org: '加州大学尔湾分校 — 嵌入式与信息物理系统中心',
        supervisor: 'Rainer Doemer 教授',
        period: '2023年4月 — 2023年6月',
        points: [
          '使用C语言分析8核RISC-V模块的数据传输能力，记录运行时间并确定最大数据限制',
          '设计更高效的新模块结构用于后续仿真测试',
        ],
      },
      {
        title: '实习 — CNN模型开发',
        role: '实习生',
        org: '中国科学院软件研究所',
        period: '2023年7月 — 2023年8月',
        points: [
          '使用Adam优化器和StepLR调度器构建并训练CNN模型',
          '使用OpenCV采集4,000张人脸图像，训练后模型准确率达70%',
        ],
      },
    ],
  },
  projects: {
    label: '项目',
    title: '我构建的项目',
    items: [
      {
        title: '可靠分布式系统构建',
        period: '2025年9月 — 2025年12月',
        description:
          '设计了具有分布式容错机制的可靠分布式系统，支持多副本服务器和多客户端的协同工作。',
        details: [
          '实现主动与被动复制模式，包含复制管理器和全局故障检测器',
          '构建健壮的TCP/IP协议实现实时同步',
          '设计自动自愈协议和黑盒诊断模块以识别"慢故障"',
        ],
        tags: ['分布式系统', '容错机制', 'TCP/IP', '自愈协议'],
      },
      {
        title: 'GCN代理模型用于流体流动预测',
        period: '2025年1月 — 2025年5月',
        description:
          '部署并测试了基于GCN的代理模型，与传统CFD求解器对比进行2D流场预测。',
        details: [
          '预测不同尺寸矩形通道中的稳态不可压缩2D流',
          '节点速度误差控制在高保真解的±2%以内',
        ],
        tags: ['GCN', '深度学习', 'CFD', 'PyTorch'],
      },
      {
        title: '天气预测模型',
        period: '2025年1月 — 2025年5月',
        description:
          '开发包括CNN在内的机器学习模型，预测匹兹堡气温等级，准确率达80-83%。',
        details: [
          '处理原始天气数据，将温度分为五个等级',
          '应用LDA进行特征相关性分析；训练线性模型和CNN模型',
        ],
        tags: ['CNN', 'Python', '数据科学', 'LDA'],
      },
      {
        title: '共享内存仿真',
        period: '2022年9月 — 2022年12月',
        description:
          '验证了共享内存机制的有效性，使服务器在节点故障时仍能接收最新消息。',
        details: [
          '使用Socket协议和Java实现读/写服务器与存储节点间的消息通信仿真',
          '创建随机节点故障场景，验证单/双写入器模式下的可行性',
        ],
        tags: ['Java', '分布式计算', 'Socket编程'],
      },
      {
        title: 'Linux YUV视频播放器 "BEST"',
        period: '2022年1月 — 2022年3月',
        description:
          '使用GTK和C语言开发了适用于Linux环境的高效YUV格式视频播放器。',
        details: [
          '设计数据结构实现视频存储和YUV到RGB的格式转换',
          '构建GUI界面、控制功能，并将界面与播放引擎连接',
        ],
        tags: ['C', 'GTK', 'Linux', '多媒体'],
      },
    ],
  },
  skills: {
    label: '技能',
    title: '我使用的技术',
    categories: [
      { category: '编程语言', skills: ['C', 'C++', 'Java', 'Python', 'VHDL', 'Verilog'] },
      { category: '机器学习 / AI', skills: ['PyTorch', 'CNN', 'GCN', 'ResNet', 'YOLOv9', 'LLMs'] },
      { category: '系统', skills: ['RISC-V', 'SystemC', '分布式系统', 'TCP/IP', 'Linux', 'Socket编程'] },
      { category: '工具与框架', skills: ['OpenCV', 'GTK', 'Git', 'React', 'TGFF'] },
    ],
  },
  contact: {
    label: '联系',
    heading: '保持联系',
    description:
      '我目前对科研合作和相关机会持开放态度。欢迎随时联系我，期待您的来信。',
    cta: '发送邮件',
  },
  footer: {
    credit: '由李卓奇设计与开发',
  },
}
