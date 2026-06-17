/* ===================================================
   IQA School Website – app.js
=================================================== */

// ── DATA ──────────────────────────────────────────
const DATA = {
  standards: [
    {
      num: 1, color: '#0f8b8b',
      title: 'มาตรฐานที่ 1 คุณภาพของผู้เรียน',
      desc: 'ผู้เรียนมีผลสัมฤทธิ์ทางการเรียน คุณลักษณะอันพึงประสงค์ และทักษะที่จำเป็นในศตวรรษที่ 21',
      expected: 'ยอดเยี่ยม', achieved: { 2566: 'ดีเลิศ', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' },
      items: [
        { head: '1.1 ผลสัมฤทธิ์ทางการเรียนของผู้เรียน', e: 'ยอดเยี่ยม', a: { 2566: 'ดีเลิศ', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' }, subs: [
          { t: '1) มีความสามารถในการอ่าน การเขียน การสื่อสารและการคิดคำนวณ', e: 'ยอดเยี่ยม', a: { 2566: 'ดีเลิศ', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' } },
          { t: '2) มีความสามารถในการคิดวิเคราะห์และการคิดอย่างมีวิจารณญาณ อภิปรายแลกเปลี่ยนความคิดเห็น และแก้ปัญหา', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
          { t: '3) มีความสามารถในการสร้างนวัตกรรม', e: 'ยอดเยี่ยม', a: { 2566: 'ดี', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' } },
          { t: '4) มีความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
          { t: '5) มีผลสัมฤทธิ์ทางการเรียนตามหลักสูตรสถานศึกษา', e: 'ยอดเยี่ยม', a: { 2566: 'ดี', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' } },
          { t: '6) มีความรู้ ทักษะพื้นฐานและเจตคติที่ดีต่องานอาชีพ', e: 'ยอดเยี่ยม', a: { 2566: 'ดีเลิศ', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' } },
        ]},
        { head: '1.2 คุณลักษณะที่พึงประสงค์ของผู้เรียน', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' }, subs: [
          { t: '1) การมีคุณลักษณะและค่านิยมที่ดีตามที่สถานศึกษากำหนด', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
          { t: '2) ความภูมิใจในท้องถิ่นและความเป็นไทย', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
          { t: '3) การยอมรับที่จะอยู่ร่วมกันบนความแตกต่างและหลากหลาย', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
          { t: '4) สุขภาวะทางร่างกายและลักษณะจิตสังคม', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ดีเลิศ', 2568: 'ยอดเยี่ยม' } },
        ]},
      ],
      scores: { 2568: 5, 2567: 5, 2566: 4 },
      highlight: {
        2566: 'อ่าน คิดวิเคราะห์ เขียน "ดีขึ้นไป" ร้อยละ 88.53 · คุณลักษณะอันพึงประสงค์ ร้อยละ 84.35 · O-NET ภาษาไทย อังกฤษ วิทยาศาสตร์ สูงกว่าระดับประเทศ · ม.6 ศึกษาต่อ ร้อยละ 66.31',
        2567: 'ผลสัมฤทธิ์เฉลี่ยรวมระดับสถานศึกษา ร้อยละ 81.28 · อ่าน คิดวิเคราะห์ เขียน "ดีขึ้นไป" ร้อยละ 81.05 · คุณลักษณะอันพึงประสงค์ ร้อยละ 84.29',
        2568: 'ผลสัมฤทธิ์ "ดีขึ้นไป" ร้อยละ 71.18 · อ่าน คิดวิเคราะห์ เขียน ร้อยละ 92.87 · O-NET มีแนวโน้มสูงขึ้นในคณิตศาสตร์ ภาษาไทย และภาษาอังกฤษ',
      }
    },
    {
      num: 2, color: '#059669',
      title: 'มาตรฐานที่ 2 กระบวนการบริหารและการจัดการ',
      desc: 'สถานศึกษามีระบบบริหารจัดการคุณภาพ ใช้ข้อมูลสารสนเทศและการมีส่วนร่วมในการพัฒนา',
      expected: 'ยอดเยี่ยม', achieved: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' },
      items: [
        { t: '2.1 การมีเป้าหมาย วิสัยทัศน์ และพันธกิจที่สถานศึกษากำหนดชัดเจน', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '2.2 มีระบบการบริหารจัดการคุณภาพของสถานศึกษา', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '2.3 ดำเนินงานพัฒนาวิชาการที่เน้นคุณภาพผู้เรียนรอบด้านตามหลักสูตรสถานศึกษาและทุกกลุ่มเป้าหมาย', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '2.4 พัฒนาครูและบุคลากรให้มีความเชี่ยวชาญทางวิชาชีพ', e: 'ยอดเยี่ยม', a: { 2566: 'ดีเลิศ', 2567: 'ดีเลิศ', 2568: 'ยอดเยี่ยม' } },
        { t: '2.5 จัดสภาพแวดล้อมทางกายภาพและสังคมที่เอื้อต่อการจัดการเรียนรู้อย่างมีคุณภาพ', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '2.6 จัดระบบเทคโนโลยีสารสนเทศเพื่อสนับสนุนการบริหารจัดการและการจัดการเรียนรู้อย่างมีคุณภาพ', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
      ],
      scores: { 2568: 5, 2567: 5, 2566: 4 },
      highlight: {
        2566: 'กำหนดวิสัยทัศน์/พันธกิจสอดคล้องกับบริบทชุมชน · จัดทำแผนพัฒนาคุณภาพและแผนปฏิบัติการโดยการมีส่วนร่วมของทุกภาคส่วน · นิเทศ กำกับ ติดตาม ประเมินผลอย่างเป็นระบบ',
        2567: 'บริหารแบบมีส่วนร่วม · พัฒนาครูด้วยกระบวนการ PLC และข้อตกลงพัฒนางาน (วPA) · ใช้เทคโนโลยีสารสนเทศ (DMC, SMSS) สนับสนุนการบริหารจัดการ',
        2568: 'แผนพัฒนาคุณภาพระยะ 5 ปี (2567–2571) · แผนปฏิบัติการ 87 โครงการ · ใช้ระบบ DMC, SMSS, Canva, ChatGPT · ผอ.ได้รับรางวัลบุคลากรดีเด่นวันครู 2568',
      }
    },
    {
      num: 3, color: '#7b3f98',
      title: 'มาตรฐานที่ 3 กระบวนการจัดการเรียนการสอนที่เน้นผู้เรียนเป็นสำคัญ',
      desc: 'ครูจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ บูรณาการสู่ทักษะการเรียนรู้ในศตวรรษที่ 21',
      expected: 'ยอดเยี่ยม', achieved: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' },
      items: [
        { t: '3.1 จัดการเรียนรู้ผ่านกระบวนการคิดและปฏิบัติจริง และสามารถนำไปประยุกต์ใช้ในชีวิตได้', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '3.2 ใช้สื่อ เทคโนโลยีสารสนเทศ และแหล่งเรียนรู้ที่เอื้อต่อการเรียนรู้', e: 'ยอดเยี่ยม', a: { 2566: 'ดีเลิศ', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' } },
        { t: '3.3 มีการบริหารจัดการชั้นเรียนเชิงบวก', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '3.4 ตรวจสอบและประเมินผู้เรียนอย่างเป็นระบบ และนำผลมาพัฒนาผู้เรียน', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ยอดเยี่ยม', 2568: 'ยอดเยี่ยม' } },
        { t: '3.5 มีการแลกเปลี่ยนเรียนรู้และให้ข้อมูลสะท้อนกลับเพื่อพัฒนาและปรับปรุงการจัดการเรียนรู้', e: 'ยอดเยี่ยม', a: { 2566: 'ยอดเยี่ยม', 2567: 'ดีเลิศ', 2568: 'ดีเลิศ' } },
      ],
      scores: { 2568: 5, 2567: 5, 2566: 4 },
      highlight: {
        2566: 'จัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญผ่านรายวิชา IS · โครงการรักการอ่าน และกิจกรรม Math Contest · ห้องคอมพิวเตอร์และระบบ Wi-Fi เพียงพอทั่วถึง',
        2567: 'Active Learning, STEM, IS, Coding, Design Thinking · ติว O-NET และติวสอบเข้ามหาวิทยาลัย · บูรณาการสื่อ Canva, ChatGPT, Micro:bit',
        2568: 'เน้นผู้เรียนเป็นศูนย์กลาง · Active Learning, PBL, IS, STEM, Design Thinking · ประเมินตามสภาพจริง · นิเทศภายในและ PLC ต่อเนื่อง',
      }
    }
  ],

  documents: [
    { id: 1, title: 'รายงานการประเมินตนเอง (SAR) ปีการศึกษา 2568', type: 'pdf', cat: 'sar', year: 2568, size: '20 MB', date: 'ปีการศึกษา 2568', file: 'assets/docs/sar2568.pdf' },
    { id: 2, title: 'รายงานการประเมินตนเอง (SAR) ปีการศึกษา 2567', type: 'pdf', cat: 'sar', year: 2567, size: '14 MB', date: 'ปีการศึกษา 2567', file: 'assets/docs/sar2567.pdf' },
    { id: 3, title: 'รายงานการประเมินตนเอง (SAR) ปีการศึกษา 2566', type: 'pdf', cat: 'sar', year: 2566, size: '4 MB', date: 'ปีการศึกษา 2566', file: 'assets/docs/sar2566.pdf' },
    { id: 4, title: 'คู่มือประกันคุณภาพภายในสถานศึกษา ปีการศึกษา 2568', type: 'pdf', cat: 'plan', year: 2568, size: '395 KB', date: 'ปีการศึกษา 2568', file: 'assets/docs/manual2568.pdf' },
  ],

  vision: {
    statement: 'โรงเรียนชานุมานวิทยาคมเป็นองค์กรแห่งการเรียนรู้ มุ่งพัฒนาการศึกษาสู่มาตรฐานสากล บนพื้นฐานหลักปรัชญาของเศรษฐกิจพอเพียง หลีกเลี่ยงสิ่งเสพติดและอบายมุข อย่างยั่งยืน',
    mission: [
      'พัฒนาผู้เรียนให้เป็นคนดี มีคุณธรรม จริยธรรม ห่างไกลสิ่งเสพติดและอบายมุข มีคุณภาพรอบด้าน',
      'พัฒนาผู้เรียนให้มีคุณภาพตามมาตรฐานการศึกษา มุ่งสู่มาตรฐานสากล',
      'ส่งเสริมให้ผู้เรียนมีทักษะการเรียนรู้ในศตวรรษที่ 21 และดำรงชีวิตอย่างมีความสุขตามหลักปรัชญาเศรษฐกิจพอเพียง',
      'พัฒนาครูเป็นครูมืออาชีพ จัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ ใช้สื่อ นวัตกรรม และเทคโนโลยี',
      'ส่งเสริมและพัฒนาความร่วมมือกับทุกภาคส่วนในการจัดการศึกษาอย่างมีคุณภาพ',
    ],
    identity: 'เป็นคนดี มีทักษะชีวิต',
    uniqueness: 'มารยาทงาม',
    motto: 'ประพฤติดี มีวิชา พัฒนาสังคม',
    model: 'SADAO Model — "ร่วมคิด ร่วมทำ นำสู่ความสำเร็จ"'
  },

  timeline: [
    { month: 'พ.ค. 2568', text: 'ประชุมจัดทำแผนปฏิบัติราชการประจำปีและแต่งตั้งคณะกรรมการประกันคุณภาพภายใน' },
    { month: 'มิ.ย. 2568', text: 'อบรมเชิงปฏิบัติการ "การใช้ AI เพื่อพัฒนาการจัดการเรียนรู้ครูมืออาชีพ"' },
    { month: 'ส.ค. 2568', text: 'ดำเนินการเก็บข้อมูล จัดทำหลักฐานรายมาตรฐาน และกิจกรรม PLC' },
    { month: 'ต.ค. 2568', text: 'นิเทศ ติดตาม การดำเนินงานตามมาตรฐาน ครึ่งปีการศึกษา (วPA)' },
    { month: 'ม.ค. 2569', text: 'สรุปผลการดำเนินงานและจัดทำร่าง SAR ปีการศึกษา 2568' },
    { month: 'มี.ค. 2569', text: 'รับการประเมินระบบประกันคุณภาพภายใน (IQA) และพิจารณา SAR' },
    { month: 'เม.ย. 2569', text: 'คณะกรรมการสถานศึกษาให้ความเห็นชอบ และจัดส่ง SAR ต่อต้นสังกัด' },
  ],

  charts: {
    grade3: {
      categories: ['ภาษาไทย', 'คณิตศาสตร์', 'วิทย์ฯ', 'สังคมฯ', 'สุขศึกษาฯ', 'ศิลปะ', 'การงานฯ', 'ภาษาต่างประเทศ', 'IS'],
      max: 100,
      series: [
        { name: 'ปีการศึกษา 2566', color: '#b7e0e0', data: [75, 55.8, 57.8, 67.1, 85.6, 69.7, 70.4, 62.3, 67.2] },
        { name: 'ปีการศึกษา 2567', color: '#4db6ac', data: [71.3, 58.8, 62.5, 73, 82.9, 71, 72.6, 63.6, 76.7] },
        { name: 'ปีการศึกษา 2568', color: '#0f8b8b', data: [74.81, 63.64, 68.36, 79.79, 87.11, 68.18, 76.22, 58.58, 75.65] },
      ]
    },
    onet6: {
      categories: ['ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ'],
      max: 60,
      series: [
        { name: 'โรงเรียน', color: '#0f8b8b', data: [48.33, 24.49, 33.64, 28.28] },
        { name: 'จังหวัด', color: '#7b3f98', data: [44.74, 25.74, 32.86, 28.86] },
        { name: 'สพฐ.', color: '#e7a900', data: [48.02, 26.91, 34.04, 31.92] },
        { name: 'ประเทศ', color: '#9ca3af', data: [47.6, 26.81, 33.95, 32.46] },
      ]
    },
    onet3: {
      categories: ['ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ', 'สังคมฯ'],
      max: 60,
      series: [
        { name: 'โรงเรียน', color: '#0f8b8b', data: [41.27, 18.18, 32.85, 22.92, 36.91] },
        { name: 'เขตพื้นที่', color: '#7b3f98', data: [40.59, 22.74, 33.56, 28.79, 37.9] },
        { name: 'สพฐ.', color: '#e7a900', data: [40.97, 21.15, 32.16, 30.27, 37.3] },
        { name: 'ประเทศ', color: '#9ca3af', data: [40.32, 21, 31.99, 30.15, 36.96] },
      ]
    },
    onet6_3yr: {
      categories: ['ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ'],
      max: 70,
      series: [
        { name: 'ปีการศึกษา 2566', color: '#b7e0e0', data: [60.72, 22.99, 32.64, 32.46] },
        { name: 'ปีการศึกษา 2567', color: '#4db6ac', data: [49.15, 23.1, 32.39, 29.4] },
        { name: 'ปีการศึกษา 2568', color: '#0f8b8b', data: [48.33, 24.49, 33.64, 28.28] },
      ]
    },
    onet3_3yr: {
      categories: ['ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ', 'สังคมฯ'],
      max: 50,
      series: [
        { name: 'ปีการศึกษา 2566', color: '#b7e0e0', data: [41.47, 15.18, 34.57, 27.15, 35.39] },
        { name: 'ปีการศึกษา 2567', color: '#4db6ac', data: [42.67, 22.62, 30.23, 28.27, 34.66] },
        { name: 'ปีการศึกษา 2568', color: '#0f8b8b', data: [41.27, 18.18, 32.85, 22.92, 36.91] },
      ]
    },
    subject3yr: {
      categories: ['ไทย', 'คณิต', 'วิทย์', 'สังคม', 'สุขศึกษา', 'ศิลปะ', 'การงาน', 'อังกฤษ', 'IS'],
      max: 100,
      series: [
        { name: 'ปีการศึกษา 2566', color: '#b7e0e0', data: [84.25, 72.75, 74.75, 80.5, 93.25, 82.25, 82.75, 75.75, 82.25] },
        { name: 'ปีการศึกษา 2567', color: '#4db6ac', data: [82.5, 74, 77.75, 82.5, 90.75, 81.25, 83.25, 75.25, 84.25] },
        { name: 'ปีการศึกษา 2568', color: '#0f8b8b', data: [84, 76, 80, 86.5, 91.5, 79, 84.75, 72.25, 84.5] },
      ]
    },
    readwrite: {
      categories: ['ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6', 'รวม'],
      max: 100,
      series: [
        { name: 'ดีมาก', color: '#0f8b8b', data: [58.37, 53.58, 47.31, 65.34, 63.2, 68.63, 59.41] },
        { name: 'ดี', color: '#4db6ac', data: [30.37, 35.05, 40.22, 30.97, 34.82, 29.3, 33.46] },
        { name: 'พอใช้', color: '#e7a900', data: [9.04, 8.45, 6.85, 1.42, 0.29, 0.53, 4.43] },
        { name: 'ปรับปรุง', color: '#e57373', data: [2.22, 2.92, 5.62, 2.27, 1.69, 1.54, 2.71] },
      ]
    },
    activities: {
      categories: ['ลูกเสือ–ยุวกาชาด–รด.', 'ชุมนุมวิชาการ', 'เพื่อสังคมฯ', 'แนะแนว'],
      max: 100,
      series: [
        { name: 'ผ่านเกณฑ์ (ร้อยละ)', color: '#0f8b8b', data: [93.73, 94.07, 88.3, 93.82] },
      ]
    },
    charlife: {
      categories: ['คุณลักษณะฯ', 'ศึกษาต่ออุดมฯ', 'ประกอบอาชีพ', 'จิตสาธารณะ', 'BMI สมส่วน'],
      max: 100,
      series: [
        { name: 'ร้อยละ', color: '#7b3f98', data: [81.13, 57.9, 25.3, 88.3, 70.98] },
      ]
    }
  },

  bestPractice: [
    { icon: 'fa-music', img: 'assets/photos/gallery/web/p070.jpg', pdf: 'assets/docs/bp1.pdf', title: 'C-A-R-E Voice Chanuman Band', desc: '“ร้องได้ ใช้เป็น เน้นสร้างรายได้” — นวัตกรรมภาคีเครือข่าย พัฒนาทักษะอาชีพและการมีรายได้ระหว่างเรียน' },
    { icon: 'fa-robot', img: 'assets/photos/gallery/web/p042.jpg', pdf: 'assets/docs/bp2.pdf', title: 'AI MATH ACTIVE', desc: 'การใช้นวัตกรรมปัญญาประดิษฐ์ (AI) ยกระดับผลสัมฤทธิ์ O-NET วิชาคณิตศาสตร์ ชั้น ม.6' },
    { icon: 'fa-crown', img: 'assets/photos/gallery/web/p047.jpg', pdf: 'assets/docs/bp3.pdf', title: 'น้อมนำพระบรมราโชบายสู่การปฏิบัติ', desc: 'แนวทางการบริหารจัดการของสถานศึกษาที่น้อมนำพระบรมราโชบายด้านการศึกษาสู่การปฏิบัติที่เป็นเลิศ ด้านการปลูกฝังความรักในสถาบันหลักของชาติ' },
    { icon: 'fa-people-group', img: 'assets/photos/gallery/web/p002.jpg', pdf: 'assets/docs/bp4.pdf', title: 'SMART Model', desc: 'การพัฒนาสถานศึกษาให้เป็นองค์กรแห่งการเสริมสร้างเครือข่ายผู้ปกครอง องค์กร และชุมชน' },
    { icon: 'fa-share-nodes', img: 'assets/photos/gallery/web/p052.jpg', pdf: 'assets/docs/bp5.pdf', title: 'นวัตกรรมต่อยอดสู่ชุมชน', desc: 'การพัฒนานวัตกรรมใหม่หรือต่อยอดนวัตกรรมเดิม พร้อมขยายผลสู่ชุมชนอย่างเป็นรูปธรรม' },
  ],

  gallery: [
    { img: 'assets/photos/gallery/web/p001.jpg', caption: 'อบรม Canva AI', date: '6 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p002.jpg', caption: 'ประชุมผู้ปกครอง 1/2568', date: '8 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p003.jpg', caption: 'ปฐมนิเทศนักเรียนปีการศึกษา 2568', date: '13 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p004.jpg', caption: 'กิจกรรมแนะนำครูต่างชาติ', date: '22 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p005.jpg', caption: 'ค่ายคุณธรรมสะเดาเงาสน', date: '22 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p006.jpg', caption: 'กิจกรรมปลูกจิตสำนึกเพื่อเป็นรากฐานการพัฒนาสู่สังคมคาร์บอนต่ำ', date: '28 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p007.jpg', caption: 'กิจกรรมบริจาคโลหิต', date: '28 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p008.jpg', caption: 'ประเมินผลการดำเนินงานโครงการรณรงค์ป้องกันและเเก้ปัญหายาเสพติด ประจำปีการศึกษา 2568', date: '28 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p009.jpg', caption: 'นักเรียนเข้ารับทุนการศึกษาเหล่ากาชาด จังหวัดอำนาจเจริญ', date: '30 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p010.jpg', caption: 'กิจกรรมเฉลิมพระเกียรติสมเด็จพระบรมราชินี', date: '3 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p011.jpg', caption: 'ติวสอบ Netsat', date: '7 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p012.jpg', caption: 'ค่ายห้องเรียนวิทยาศาสตร์พลังสิบ', date: '7 พ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p013.jpg', caption: 'การประชุมประจำเดือนมิถุนายน', date: '12 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p014.jpg', caption: 'พิธีไหว้ครู', date: '12 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p015.jpg', caption: 'การนิเทศติดตามนวัตกรรมการสอนภาษาไทย', date: '21 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p016.jpg', caption: 'อบรมเชิงปฏิบัติการป้องกัน HIV', date: '21 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p017.jpg', caption: 'กิจกรรมวันต่อต้านยาเสพติด', date: '26 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p018.jpg', caption: 'ชมรม To Be Number One ร่วมนำเสนอผลงานโครงการอำเภอเคลื่อนที่', date: '29 มิ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p019.jpg', caption: 'วันสถาปนาคณะลูกเสือไทย', date: '1 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p020.jpg', caption: 'กิจกรรมวันอาสาฬบูชา', date: '9 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p021.jpg', caption: 'ร่วมกิจกรรมประเพณีแห่เทียนพรรษา', date: '10 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p022.jpg', caption: 'กิจกรรมหน้าเสาธงเเนะนำครูผู้ช่วย', date: '15 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p023.jpg', caption: 'สอบกลางภาค 1/2568', date: '15 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p024.jpg', caption: 'รับเกียรติบัตรบริจาคโลหิต', date: '21 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p025.jpg', caption: 'รับการประเมินสุขาดีมีความสุข', date: '21 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p026.jpg', caption: 'รับการประเมิน IQA AWARD', date: '22 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p027.jpg', caption: 'การนิเทศติดตามยกระดับคุณภาพการศึกษา', date: '23 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p028.jpg', caption: 'การอบรวมสร้างความรู้การขับขี่อย่างมีวินัย', date: '24 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p029.jpg', caption: 'พิธีถวายสัตย์ปฎิญาณ', date: '25 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p030.jpg', caption: 'เฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว', date: '28 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p031.jpg', caption: 'กิจกรรมเข้าประจำหมู่ยุวกาชาด', date: '30 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p032.jpg', caption: 'ฉีดวัคซีนป้องกันโรค นักเรียนหญิง', date: '31 ก.ค. 2568' },
    { img: 'assets/photos/gallery/web/p033.jpg', caption: 'มหกรรมสีสันหน้ากากนานชาติ', date: '7 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p034.jpg', caption: 'มอบเกียรติบัตรการประกวดภาพยนต์สั้นสื่อสาร สร้างสรรค์ รู้เท่าทันยาบ้า', date: '7 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p035.jpg', caption: 'มอบเกียรติบัตรห้องเรียนสะอาด Best Room Award', date: '7 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p036.jpg', caption: 'อบรมการสร้างการรับรู้ให้ชายเเละหญิงวัยเจริญพันธ์ุ', date: '7 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p037.jpg', caption: 'กิจกรรมเทิดพระเกียรติวันแม่แห่งชาติ', date: '8 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p038.jpg', caption: 'มอบเกียรติบัตรอบรมขับขี่อย่างมีวินัย', date: '8 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p039.jpg', caption: 'กิจกรรมเฉลิมพระเกียรติสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง', date: '12 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p040.jpg', caption: 'กิจกรรมเเนะเเนวนายสิบ', date: '13 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p041.jpg', caption: 'เเข่งขัน AI Prompt', date: '14 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p042.jpg', caption: 'นิเทศถอดบทเรียนการใช้นวัตกรรมปัญญาประดิษฐ์', date: '15 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p043.jpg', caption: 'เปิดบ้านวิชาการ Open Hourse', date: '18 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p044.jpg', caption: 'การเเข่งขันรอบชิงชนะเลิศภาพยนต์สั้น', date: '19 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p045.jpg', caption: 'อบรมทำหัวยักษ์คุ', date: '20 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p046.jpg', caption: 'อบรม AI Coursera', date: '22 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p047.jpg', caption: 'นำเสนอ Best Practice สถานศึกษาน้อมนำพระบรมราโชบายด้านการศึกษาสู่การปฏิบัติ', date: '27 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p048.jpg', caption: 'บริจาคโลหิต', date: '27 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p049.jpg', caption: 'อบรมอาสาสมัครพิทักษ์ชีพ', date: '27 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p050.jpg', caption: 'กิจกรรมจิตอาสาวัดยักษ์คุ', date: '29 ส.ค. 2568' },
    { img: 'assets/photos/gallery/web/p051.jpg', caption: 'ค่ายคณิตคิดสร้างสรรค์', date: '4 ก.ย. 2568' },
    { img: 'assets/photos/gallery/web/p052.jpg', caption: 'กิจกรรมเเลกเปลี่ยนเรียนรู้ชมรม To Be Number One อำเภอเข้มเเข็ง', date: '4 ก.ย. 2568' },
    { img: 'assets/photos/gallery/web/p053.jpg', caption: 'ประเมินนักเรียนพระราชทานรอบเขตพื้นที่', date: '10 ก.ย. 2568' },
    { img: 'assets/photos/gallery/web/p054.jpg', caption: 'กิจกรรมเกษียณอายุราชการ มุทิตาจิต', date: '19 ก.ย. 2568' },
    { img: 'assets/photos/gallery/web/p055.jpg', caption: 'กิจกรรมวันพระราชสมภพ 100 ปี พระบาทสมเด็จพระปรเมนทรมหาอานันทมหิดล', date: '20 ก.ย. 2568' },
    { img: 'assets/photos/gallery/web/p056.jpg', caption: 'กิจกรรมทัศนศึกษา', date: '23 ก.ย. 2568' },
    { img: 'assets/photos/gallery/web/p057.jpg', caption: 'วันนวมินทรมหาราช', date: '13 ต.ค. 2568' },
    { img: 'assets/photos/gallery/web/p058.jpg', caption: 'วันปิยมหาราช', date: '23 ต.ค. 2568' },
    { img: 'assets/photos/gallery/web/p059.jpg', caption: 'พิธีสรงน้ำพระบรมศพเบื้องหน้าพระฉายาลักษณ์', date: '26 ต.ค. 2568' },
    { img: 'assets/photos/gallery/web/p060.jpg', caption: 'กิจกรรมวัน Halloween', date: '31 ต.ค. 2568' },
    { img: 'assets/photos/gallery/web/p061.jpg', caption: 'ประชุมผู้ปกครอง 2/2568', date: '4 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p062.jpg', caption: 'กิจกรรมเเนะเเนวการเรียนต่อ', date: '7 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p063.jpg', caption: 'การประเมินครูผู้ช่วย', date: '7 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p064.jpg', caption: 'รับเกียรติบัตรห้องเรียนสะอาด', date: '24 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p065.jpg', caption: 'อบรมการจัดทำ Best Practice', date: '14 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p066.jpg', caption: 'ค่ายสามภาษา ไทย อังกฤษ จีน', date: '24 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p067.jpg', caption: 'วันวชิราวุธ', date: '25 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p068.jpg', caption: 'อบรมอนามัยเจริญพันธ์ุป้องกัน HIV', date: '25 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p069.jpg', caption: 'บริจาคโลหิต', date: '26 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p070.jpg', caption: 'ค่ายส่งเสริมศิลปวัฒนธรรม', date: '29 พ.ย. 2568' },
    { img: 'assets/photos/gallery/web/p071.jpg', caption: 'รับเกียรติบัตร คปภ.', date: '1 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p072.jpg', caption: 'กิจกรรมวันชาติ เเละวันพ่อแห่งชาติ', date: '5 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p073.jpg', caption: 'รับเกียรติบัตรห้องเรียนสะอาด Best Room Award', date: '8 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p074.jpg', caption: 'แนะเเนวศึกษาต่อมหาวิทยาลัยมหิดล', date: '12 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p075.jpg', caption: 'ค่ายเยาวชนรู้รักสิ่งเเวดล้อม', date: '13 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p076.jpg', caption: 'มอบเกียรติบัตรการเเข่งขันฟุตบอล To Be Number One ครั้งที่ 15', date: '15 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p077.jpg', caption: 'ประเมินครูผู้ช่วย', date: '18 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p078.jpg', caption: 'นิเทศเตรียมรับประเมิน สมศ. รอบที่ 5', date: '18 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p079.jpg', caption: 'สอบกลางภาค 2/2568', date: '19 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p080.jpg', caption: 'การประเมินศูนย์การเรียนรู้เพื่อโรงเรียนเพื่อโรงเรียนปลอดบุหรี่ต้นแบบยั่งยืน', date: '20 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p081.jpg', caption: 'กิจกรรมวันคริสต์มาส', date: '24 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p082.jpg', caption: 'กีฬาสีภายในโรงเรียน ลำโขงเกมส์ ครั้งที่ 53', date: '25 ธ.ค. 2568' },
    { img: 'assets/photos/gallery/web/p083.jpg', caption: 'ประชุมประจำเดือน', date: '8 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p084.jpg', caption: 'อบรมในโครงการนักเรียนรุ่นใหม่มีใบขับขี่', date: '10 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p085.jpg', caption: 'รับเกียรติบัตรการโปรโมตเเหล่งท่องเที่ยวในอำเภอชานุมาน', date: '12 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p086.jpg', caption: 'รับเกียรติบัตรห้องเรียนสะอาด Best Room Award', date: '12 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p087.jpg', caption: 'เข้าค่ายลูกเสือพักเเรม ม.3 เเละ ม.6', date: '13 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p088.jpg', caption: 'ค่ายลูกเสือเเละยุวกาชาดภายในโรงเรียน', date: '13 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p089.jpg', caption: 'ประเมินครูผู้ช่วย', date: '15 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p090.jpg', caption: 'มอบทุนเสมอภาค ปัจจัยพื้นฐานภาคเรียนที่ 2', date: '15 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p091.jpg', caption: 'วันครู ครั้งที่ 70', date: '16 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p092.jpg', caption: 'นิเทศติดตามเพื่อยกระดับคุณภาพการศึกษา ภาคเรียนที่ 2', date: '23 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p093.jpg', caption: 'การเเข่งขันศิลปหัตถกรรมนักเรียนครั้งที่ 73', date: '29 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p094.jpg', caption: 'การเลือกตั้งประธานนักเรียน ปีการศึกษา 2569', date: '30 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p095.jpg', caption: 'การจัดประชุม กำนัน ผู้ใหญ่บ้านอำเภอชานุมาน', date: '31 ม.ค. 2569' },
    { img: 'assets/photos/gallery/web/p096.jpg', caption: 'สอบ O-NET นักเรียนชั้นมัธยมศึกษาปีที่ 3', date: '3 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p097.jpg', caption: 'มอบตำแหน่งคณะกรรมการสภานักเรียน ปีการศึกษา 2569', date: '4 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p098.jpg', caption: 'มอบเกียรติบัตรเเข่งขันกีฬาชิงชนะเลิศจังหวัดอำนาจเจริญ', date: '5 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p099.jpg', caption: 'รณรงค์การใช้สิทธิเลือกตั้ง', date: '6 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p100.jpg', caption: 'ประเมินครูผู้ช่วย', date: '9 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p101.jpg', caption: 'ค่ายเยาวชนต้นกล้าความดี', date: '13 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p102.jpg', caption: 'ประเมินผู้บริหารสถานศึกษา', date: '16 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p103.jpg', caption: 'มอบเกียรติบัตรนักเรียนแข่งขันศิลปหัตถกรรมนักเรียนครั้งที่ 73', date: '17 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p104.jpg', caption: 'ประเมินนักเรียนพระราชธาน', date: '20 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p105.jpg', caption: 'ปัจฉิมนิเทศ ปีการศึกษา 2568', date: '23 ก.พ. 2569' },
    { img: 'assets/photos/gallery/web/p106.jpg', caption: 'กิจกรรมวันมาฆบูชา', date: '2 มี.ค. 2569' },
    { img: 'assets/photos/gallery/web/p107.jpg', caption: 'กิจกรรมเเห่ยักษ์คุโรงเรียนชานุมานวิทยาคม ปี 2569', date: '4 มี.ค. 2569' },
    { img: 'assets/photos/gallery/web/p108.jpg', caption: 'กิจกรรมเเห่ยักษ์คุ อำเภอชานุมาน', date: '8 มี.ค. 2569' },
    { img: 'assets/photos/gallery/web/p109.jpg', caption: 'ทัศนศึกษา นักเรียนชั้นมัธยมศึกษาปีที่ 2 เเละ 5', date: '9 มี.ค. 2569' },
    { img: 'assets/photos/gallery/web/p110.jpg', caption: 'ประเมินครูผู้ช่วย', date: '14 มี.ค. 2569' },
    { img: 'assets/photos/gallery/web/p111.jpg', caption: 'ศึกษาดูงานโครงการชั่งหัวมัน', date: '7 เม.ย. 2569' },
  ],

  awards: [
    {
      group: 'โรงเรียน', icon: 'fa-school', color: '#0f8b8b',
      items: [
        { t: 'ได้รับพระราชทานเกียรติบัตรผ่านการประกวดผลงานโครงการ TO BE NUMBER ONE ประจำปี 2568 ประเภทชมรม TO BE NUMBER ONE ในสถานศึกษาระดับการศึกษาขั้นพื้นฐาน ที่ผ่านการคัดเลือกเข้าสู่การประกวดกลุ่มต้นแบบ ระดับประเทศ', cert: 'assets/certs/cert-tobenumberone.jpg' },
        'ผู้สนับสนุนกิจกรรมยุวกาชาดดีเด่น ประจำปี 2568',
        { t: 'รางวัล IQA AWARD ระดับชมเชย ขนาดกลาง ระดับสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สถานศึกษาที่มีระบบและกลไกการบริหารจัดการคุณภาพและมาตรฐานการศึกษา)', cert: 'assets/certs/cert-iqa.jpg' },
        { t: 'โรงเรียนต้นแบบสุขาดีมีความสุข', cert: 'assets/certs/cert-sukha.jpg' },
        { t: 'รางวัล TEDET ประจำปี 2025 สถานศึกษาที่ส่งเสริมการพัฒนาผลสัมฤทธิ์ทางวิชาการของผู้เรียน (Thailand Educational Development and Evaluation Test)', cert: 'assets/certs/cert-tedet.jpg' },
        { t: 'โรงเรียนคุณภาพ ภายใต้โครงการเสริมสร้างความเข้มแข็ง “1 อำเภอ 1 สถานศึกษาคุณภาพตามบริบทของพื้นที่” สำนักงานศึกษาธิการภาค 14', cert: 'assets/certs/cert-quality-school.jpg' },
        { t: 'AFS Certificate of Appreciation — ส่งเสริมการเรียนรู้และความเข้าใจระหว่างวัฒนธรรม (เป็นสถานศึกษาอุปถัมภ์นักเรียนแลกเปลี่ยน AFS)', cert: 'assets/certs/cert-afs.jpg' },
      ]
    },
    {
      group: 'ผู้บริหาร', icon: 'fa-user-tie', color: '#7b3f98',
      items: [
        { t: 'รางวัลบุคลากรดีเด่น ประจำปีการศึกษา 2568 เนื่องในวันครูแห่งชาติ พุทธศักราช 2568 ประเภทผู้อำนวยการสถานศึกษา', cert: 'assets/certs/cert-director-national.jpg' },
        { t: 'รางวัลบุคลากรดีเด่น เนื่องในงานวันครูจังหวัดอำนาจเจริญ ครั้งที่ 70 ประเภทผู้บริหารสถานศึกษาดีเด่น', cert: 'assets/certs/cert-director-province.jpg' },
      ]
    },
    {
      group: 'ครู', icon: 'fa-chalkboard-teacher', color: '#e7a900',
      items: [
        { t: 'ส่งเสริมสนับสนุนการขับเคลื่อนสถานศึกษาที่มีวิธีปฏิบัติที่เป็นเลิศ (Best Practice) ด้านนวัตกรรมปัญญาประดิษฐ์ (AI) ในการยกผลสัมฤทธิ์ทางการเรียน กลุ่มสาระการเรียนรู้คณิตศาสตร์ ระดับดีเด่น', cert: 'assets/certs/cert-aimath.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การจัดทำหนังสือเล่มเล็ก ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-book.pdf' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันจิตรกรรมเทคนิคผสม Mixed Media ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-mixedmedia.pdf' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันจิตรกรรมเทคนิคผสม Mixed Media ระดับชั้น ม.4–ม.6', cert: 'assets/certs/cert-mixedmedia46-tc.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันการออกแบบร่าง (SKETCH DESIGN) ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-sketch-tc.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันขับร้องเพลงไทยลูกกรุง ประเภทชาย ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-lukgrung-tc.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันการออกแบบสิ่งของเครื่องใช้ด้วยโปรแกรมคอมพิวเตอร์ ระดับชั้น ม.4–ม.6', cert: 'assets/certs/cert-computer46-tc.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันทำอาหาร น้ำพริก ผักสด เครื่องเคียง ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-cooking.pdf' },
        { t: 'รางวัลพระราชทานสมเด็จเจ้าฟ้ามหาจักรี ครั้งที่ 6 ปี 2568 จังหวัดอำนาจเจริญ', cert: 'assets/certs/cert-makajakri.jpg' },
      ]
    },
    {
      group: 'นักเรียน', icon: 'fa-user-graduate', color: '#0e9f6e',
      items: [
        'รับการประเมินเพื่อรับรางวัลพระราชทาน ระดับเขตพื้นที่/จังหวัด ปีการศึกษา 2568',
        { t: 'ชนะเลิศอันดับ 2 การประกวดภาพยนตร์สั้น หัวข้อ “หนูโตมากับภาวะโลกร้อน”', cert: 'assets/certs/cert-movie.jpg' },
        { t: 'รองชนะเลิศอันดับ 1 ระดับจังหวัด ประเภทมัธยมศึกษาตอนปลาย/อาชีวศึกษาหรือเทียบเท่า การประกวดโครงการสื่อสาร สร้างสรรค์ รู้เท่าทันยาบ้า ปีที่ 2', cert: 'assets/certs/cert-yaba.jpg' },
        { t: 'ชนะเลิศอันดับ 1 กีฬาวิ่งผลัดผสม 4x100 เมตร รุ่นอายุไม่เกิน 15 ปี ชิงชนะเลิศแห่งจังหวัดอำนาจเจริญ ประจำปีงบประมาณ 2568', cert: 'assets/certs/cert-relay.jpg' },
        { t: 'ผ่านเข้ารอบ 10 ทีมสุดท้าย การประกวดโครงงานทางวิศวกรรมสิ่งแวดล้อมและความยั่งยืน (ENVS Showcase) คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย', cert: 'assets/certs/cert-envs.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การจัดทำหนังสือเล่มเล็ก ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-book.pdf' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันจิตรกรรมเทคนิคผสม Mixed Media ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-mixedmedia.pdf' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันจิตรกรรมเทคนิคผสม Mixed Media ระดับชั้น ม.4–ม.6', cert: 'assets/certs/cert-mixedmedia46-st.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันการออกแบบร่าง (SKETCH DESIGN) ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-sketch-st.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันขับร้องเพลงไทยลูกกรุง ประเภทชาย ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-lukgrung-st.jpg' },
        { t: 'เหรียญทอง รองชนะเลิศอันดับ 2 การแข่งขันร้องเพลงไทยลูกทุ่ง ประเภทชาย ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-luktung.pdf' },
        { t: 'เหรียญทอง การแข่งขันการสร้างการ์ตูนเรื่องสั้น (Comic Strip) ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-comic.pdf' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันการออกแบบสิ่งของเครื่องใช้ด้วยโปรแกรมคอมพิวเตอร์ ระดับชั้น ม.4–ม.6', cert: 'assets/certs/cert-computer46-st.jpg' },
        { t: 'เหรียญทอง ชนะเลิศ การแข่งขันทำอาหาร น้ำพริก ผักสด เครื่องเคียง ระดับชั้น ม.1–ม.3', cert: 'assets/certs/cert-cooking.pdf' },
      ]
    },
  ]
};

const LEVEL_NAMES = { 5: 'ยอดเยี่ยม', 4: 'ดีเลิศ', 3: 'ดี', 2: 'พอใช้', 1: 'ปรับปรุง' };
const LEVEL_COLORS = { 5: '#059669', 4: '#0ea5e9', 3: '#f59e0b', 2: '#ef4444', 1: '#dc2626' };
const TYPE_ICON = { pdf: 'fa-file-pdf', word: 'fa-file-word', excel: 'fa-file-excel', ppt: 'fa-file-powerpoint', img: 'fa-file-image' };
const TYPE_CLASS = { pdf: 'icon-pdf', word: 'icon-word', excel: 'icon-excel', ppt: 'icon-ppt', img: 'icon-img' };
const CAT_LABEL = { sar: 'SAR', report: 'รายงาน', evidence: 'หลักฐาน', plan: 'คู่มือ' };

let currentYear = 2568;
let currentDocFilter = 'all';
let searchTerm = '';

// ── NAVIGATION ────────────────────────────────────
function showSection(id, linkEl) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  if (linkEl) linkEl.classList.add('active');
  document.querySelector('.main-nav').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // charts need a visible (non-zero width) canvas to render
  if (id === 'results') requestAnimationFrame(() => requestAnimationFrame(renderBarCharts));
}

function toggleMenu() {
  const open = document.querySelector('.main-nav').classList.toggle('open');
  const btn = document.querySelector('.hamburger');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// ===== ตัวอ่าน PDF ในหน้าเว็บ (มีปุ่มปิด) =====
function openPdf(url, title) {
  const v = document.getElementById('pdfViewer');
  if (!v) return;
  document.getElementById('pdfFrame').src = url;
  document.getElementById('pdfOpenTab').href = url;
  document.getElementById('pdfDownload').href = url;
  document.getElementById('pdfTitle').textContent = title || 'เอกสาร';
  v.classList.add('open');
  v.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closePdf() {
  const v = document.getElementById('pdfViewer');
  if (!v) return;
  v.classList.remove('open');
  v.setAttribute('aria-hidden', 'true');
  document.getElementById('pdfFrame').src = '';   // หยุดโหลด/คืนหน่วยความจำ
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePdf(); });

// ── STATS COUNTER ────────────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const dur = target > 1000 ? 1200 : 800;
    const step = dur / 60;
    let cur = 0;
    const inc = target / (dur / 16);
    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      el.textContent = Math.floor(cur).toLocaleString('th-TH');
      if (cur >= target) clearInterval(t);
    }, 16);
  });
}

// ── คำนวณคะแนนเฉลี่ยจากระดับผลการพัฒนา (เต็ม 5) ──
const LV = { 'ยอดเยี่ยม': 5, 'ดีเลิศ': 4, 'ดี': 3, 'ปานกลาง': 2, 'กำลังพัฒนา': 1 };
const QUALITY_YEAR = 2568;   // ปีล่าสุด (ใช้แสดงในตารางหน้า "มาตรฐาน")

// ระดับเฉลี่ย → ระดับคุณภาพ (ตามเกณฑ์คู่มือฯ)
function scoreToLevel(avg) {
  if (avg >= 4.5) return 5;
  if (avg >= 3.5) return 4;
  if (avg >= 2.5) return 3;
  if (avg >= 1.5) return 2;
  return 1;
}
// อ่านระดับผลการพัฒนาของ leaf ในปีที่เลือก (a เป็น object รายปี เช่น {2568:'ดีเลิศ'})
function achievedOf(node, year) {
  const a = node.a;
  if (!a) return null;
  if (typeof a === 'string') return a;          // รองรับรูปแบบเก่า (ค่าเดียว)
  return a[year] || a[QUALITY_YEAR] || null;    // ถ้าไม่มีปีนั้น ใช้ปีล่าสุด
}
// เก็บระดับผลการพัฒนาของทุกประเด็นย่อย (leaf) ในปีที่เลือก
function leafLevels(std, year) {
  const out = [];
  (std.items || []).forEach(it => {
    if (it.subs) it.subs.forEach(s => { const v = achievedOf(s, year); if (v) out.push(LV[v] || 0); });
    else { const v = achievedOf(it, year); if (v) out.push(LV[v] || 0); }
  });
  return out.filter(v => v > 0);
}
// คะแนนเฉลี่ย + % + ระดับ ของมาตรฐานในปีที่เลือก
function stdScore(std, year) {
  const ls = leafLevels(std, year);
  if (ls.length) {
    const avg = ls.reduce((a, b) => a + b, 0) / ls.length;
    return { avg, pct: Math.round(avg / 5 * 100), level: scoreToLevel(avg) };
  }
  const s = (std.scores && std.scores[year]) || 3;   // fallback
  return { avg: s, pct: Math.round(s / 5 * 100), level: s };
}

// ── RESULTS PAGE ─────────────────────────────────
function filterYear(year, btn) {
  currentYear = year;
  document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('year-display').textContent = year;
  renderResults();
  drawRadar();
}

function renderResults() {
  const container = document.getElementById('standards-results');
  const results = DATA.standards.map(s => stdScore(s, currentYear));
  const avgAll = results.reduce((a, r) => a + r.avg, 0) / results.length;
  const overallLevel = scoreToLevel(avgAll);
  const overallPct = Math.round(avgAll / 5 * 100);
  document.getElementById('overall-score').textContent = LEVEL_NAMES[overallLevel] || 'ดี';
  document.getElementById('overall-level').textContent =
    `${LEVEL_NAMES[overallLevel]} · เฉลี่ย ${avgAll.toFixed(2)}/5 (${overallPct}%)`;

  container.innerHTML = DATA.standards.map((std, idx) => {
    const r = results[idx];
    const color = LEVEL_COLORS[r.level];
    return `
      <div class="std-result-card" style="border-left-color:${std.color}">
        <div class="std-result-header">
          <div class="std-result-title">${std.title}</div>
          <span class="std-badge badge-${r.level}" style="background:${color}">${LEVEL_NAMES[r.level]} (${r.level})</span>
        </div>
        <p style="font-size:.86rem;color:#6b7280;margin-bottom:.8rem">${std.desc}</p>
        <div style="display:flex;align-items:center;gap:.85rem">
          <div class="progress-bar-wrap" style="flex:1">
            <div class="progress-bar" style="width:${r.pct}%;background:${color}"></div>
          </div>
          <span style="font-size:.85rem;font-weight:700;color:${color};white-space:nowrap">${r.avg.toFixed(2)}/5 · ${r.pct}%</span>
        </div>
        ${(() => { const h = (std.highlight && typeof std.highlight === 'object') ? (std.highlight[currentYear] || std.highlight[QUALITY_YEAR]) : std.highlight; return h ? `<div class="std-highlight"><i class="fas fa-lightbulb"></i> ${h}</div>` : ''; })()}
      </div>`;
  }).join('');
}

// ── RADAR CHART (canvas) ──────────────────────────
function drawRadar() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) / 2 - 36;
  const labels = ['มาตรฐานที่ 1', 'มาตรฐานที่ 2', 'มาตรฐานที่ 3'];
  const scores = DATA.standards.map(s => stdScore(s, currentYear).avg);
  const n = labels.length;
  const maxVal = 5;

  const angle = i => (Math.PI * 2 * i / n) - Math.PI / 2;
  const pt = (i, val) => ({
    x: cx + Math.cos(angle(i)) * (R * val / maxVal),
    y: cy + Math.sin(angle(i)) * (R * val / maxVal)
  });

  // สีปรับตามธีม
  const dark = document.body.classList.contains('dark');
  const C_GRID = dark ? 'rgba(255,255,255,.14)' : '#e5e7eb';
  const C_RING = dark ? 'rgba(255,255,255,.28)' : '#c7d7ff';
  const C_LABEL = dark ? '#d4dbe2' : '#4b5563';

  // grid
  for (let lv = 1; lv <= maxVal; lv++) {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const p = pt(i, lv);
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.strokeStyle = lv === maxVal ? C_RING : C_GRID;
    ctx.lineWidth = lv === maxVal ? 1.5 : 1;
    ctx.stroke();
  }

  // axes
  for (let i = 0; i < n; i++) {
    const p = pt(i, maxVal);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = C_GRID; ctx.lineWidth = 1; ctx.stroke();
  }

  // data polygon
  ctx.beginPath();
  scores.forEach((v, i) => {
    const p = pt(i, v);
    i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(15,139,139,0.18)';
  ctx.fill();
  ctx.strokeStyle = '#0f8b8b';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // points
  scores.forEach((v, i) => {
    const p = pt(i, v);
    ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#0f8b8b'; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill();
  });

  // labels
  ctx.font = 'bold 11px Sarabun, sans-serif';
  ctx.fillStyle = C_LABEL;
  ctx.textAlign = 'center';
  labels.forEach((lbl, i) => {
    const p = pt(i, maxVal + 0.7);
    ctx.fillText(lbl, p.x, p.y + 4);
  });
}

// ── DOCUMENTS ────────────────────────────────────
function renderDocs() {
  let docs = DATA.documents.filter(d => {
    const matchCat = currentDocFilter === 'all' || d.cat === currentDocFilter;
    const matchSearch = !searchTerm || d.title.toLowerCase().includes(searchTerm);
    return matchCat && matchSearch;
  });

  const grid = document.getElementById('doc-grid');
  const empty = document.getElementById('doc-empty');

  if (docs.length === 0) {
    grid.innerHTML = ''; empty.style.display = 'block'; return;
  }
  empty.style.display = 'none';

  grid.innerHTML = docs.map(d => `
    <div class="doc-card">
      <div class="doc-type-icon ${TYPE_CLASS[d.type] || 'icon-pdf'}">
        <i class="fas ${TYPE_ICON[d.type] || 'fa-file'}"></i>
      </div>
      <div>
        <span class="doc-cat cat-${d.cat}">${CAT_LABEL[d.cat]}</span>
        <span style="font-size:.75rem;color:#9ca3af;margin-left:.4rem">ปี ${d.year}</span>
      </div>
      <div class="doc-title">${d.title}</div>
      <div class="doc-meta"><i class="fas fa-calendar-alt"></i> ${d.date} &nbsp;·&nbsp; ${d.size}</div>
      ${d.file ? `
      <div class="doc-actions">
        <a class="doc-download" href="${encodeURI(d.file)}" target="_blank" rel="noopener" data-t="${(d.title||'').replace(/"/g,'&quot;')}" onclick="event.preventDefault();openPdf('${encodeURI(d.file)}', this.dataset.t)"><i class="fas fa-eye"></i> เปิดอ่าน</a>
        <a class="doc-download doc-download-alt" href="${encodeURI(d.file)}" download><i class="fas fa-download"></i> ดาวน์โหลด</a>
      </div>` : `
      <button class="doc-download" onclick="alert('ยังไม่ได้เชื่อมต่อไฟล์')"><i class="fas fa-download"></i> ดาวน์โหลด</button>`}
    </div>
  `).join('');
}

function filterDocs(cat, btn) {
  currentDocFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDocs();
}

function searchDocs() {
  searchTerm = document.getElementById('doc-search').value.toLowerCase().trim();
  renderDocs();
}

// ── STANDARDS ACCORDION (ตารางสรุปผลตาม SAR) ──────
const LEVELS = { 'ยอดเยี่ยม': 5, 'ดีเลิศ': 4, 'ดี': 3, 'ปานกลาง': 2, 'กำลังพัฒนา': 1 };
function levelBadge(level) {
  if (!level) return '<span class="lv-cell">—</span>';
  return `<span class="lv-badge lv-${LEVELS[level] || 0}">${level}</span>`;
}
// table rows for one standard's indicators
function stdRows(std, year) {
  let rows = '';
  std.items.forEach(item => {
    if (item.subs) {
      rows += `<tr class="row-group">
        <td>${item.head}</td><td>${levelBadge(item.e)}</td><td>${levelBadge(achievedOf(item, year))}</td></tr>`;
      item.subs.forEach(s => {
        rows += `<tr class="row-sub"><td>${s.t}</td><td>${levelBadge(s.e)}</td><td>${levelBadge(achievedOf(s, year))}</td></tr>`;
      });
    } else {
      rows += `<tr class="row-item"><td>${item.t}</td><td>${levelBadge(item.e)}</td><td>${levelBadge(achievedOf(item, year))}</td></tr>`;
    }
  });
  return rows;
}

function renderStandards() {
  const acc = document.getElementById('standards-accordion');
  acc.innerHTML = DATA.standards.map((std, i) => `
    <div class="accordion-item" id="acc-${i}">
      <div class="accordion-header" onclick="toggleAccordion(${i})">
        <div class="accordion-header-left">
          <div class="accordion-num" style="background:${std.color}22;color:${std.color}">${std.num}</div>
          <div>
            <div style="font-size:1rem">${std.title}</div>
            <div style="font-size:.82rem;color:#9ca3af;font-weight:400;margin-top:.15rem">${std.desc.slice(0,60)}…</div>
          </div>
        </div>
        <div class="accordion-head-badge">${levelBadge(achievedOf({ a: std.achieved }, QUALITY_YEAR))}</div>
        <i class="fas fa-chevron-down accordion-icon"></i>
      </div>
      <div class="accordion-body">
        <p style="font-size:.9rem;color:#6b7280;margin-bottom:1rem">${std.desc}</p>
        <div class="std-table-wrap">
          <table class="std-table">
            <thead>
              <tr>
                <th>มาตรฐาน / ประเด็นพิจารณา</th>
                <th>ระดับคุณภาพ<br/>ที่คาดหวัง</th>
                <th>ระดับคุณภาพ<br/>ผลการพัฒนา (${QUALITY_YEAR})</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-std">
                <td>${std.title}</td>
                <td>${levelBadge(std.expected)}</td>
                <td>${levelBadge(achievedOf({ a: std.achieved }, QUALITY_YEAR))}</td>
              </tr>
              ${stdRows(std, QUALITY_YEAR)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleAccordion(i) {
  const item = document.getElementById('acc-' + i);
  item.classList.toggle('open');
}

// ── ABOUT PAGE ────────────────────────────────────
function renderAbout() {
  // Vision & Mission
  const v = DATA.vision;
  const vb = document.getElementById('vision-block');
  vb.innerHTML = `
    <div class="vision-statement">
      <i class="fas fa-quote-left"></i> ${v.statement}
    </div>
    <h4 class="vision-sub"><i class="fas fa-tasks"></i> พันธกิจ</h4>
    <ol class="mission-list">
      ${v.mission.map(m => `<li>${m}</li>`).join('')}
    </ol>
    <div class="identity-grid">
      <div class="identity-item"><span>เอกลักษณ์</span><strong>${v.identity}</strong></div>
      <div class="identity-item"><span>อัตลักษณ์</span><strong>${v.uniqueness}</strong></div>
      <div class="identity-item"><span>คำขวัญ</span><strong>${v.motto}</strong></div>
      <div class="identity-item"><span>รูปแบบบริหาร</span><strong>${v.model}</strong></div>
    </div>`;

  // Timeline
  const tl = document.getElementById('timeline');
  tl.innerHTML = DATA.timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-month">${t.month}</div>
      <div class="timeline-text">${t.text}</div>
    </div>
  `).join('');
}

// ── GROUPED BAR CHART (canvas) ────────────────────
function drawGroupedBar(canvas, cfg) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  // capture base height once (the HTML height attribute) before we overwrite it
  if (!canvas.dataset.baseH) canvas.dataset.baseH = canvas.getAttribute('height') || 320;
  const cssH = +canvas.dataset.baseH;
  const cssW = canvas.clientWidth || canvas.parentElement.clientWidth || 0;
  if (cssW < 2) return;   // ยังถูกซ่อนอยู่ (กว้าง 0) — ข้ามไปก่อน ค่อยวาดเมื่อปรากฏ
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  canvas.style.height = cssH + 'px';   // คุมความสูง (กว้างให้ CSS width:100% จัดการ → responsive)
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, cssW, cssH);

  const padL = 42, padR = 12, padT = 34, padB = 64;
  const plotW = cssW - padL - padR;
  const plotH = cssH - padT - padB;
  const max = cfg.max || 100;
  const cats = cfg.categories;
  const series = cfg.series;
  const nCat = cats.length, nSer = series.length;

  // สีปรับตามธีม (โหมดมืดให้สว่างพอ คอนทราสต์ผ่าน)
  const dark = document.body.classList.contains('dark');
  const C_GRID = dark ? 'rgba(255,255,255,.10)' : '#eef1f3';
  const C_TICK = dark ? '#aab6c2' : '#9ca3af';
  const C_LABEL = dark ? '#d4dbe2' : '#4b5563';

  // gridlines + y labels
  ctx.font = '11px Sarabun, sans-serif';
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  const steps = 5;
  for (let i = 0; i <= steps; i++) {
    const v = max * i / steps;
    const y = padT + plotH - (plotH * i / steps);
    ctx.strokeStyle = C_GRID; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(cssW - padR, y); ctx.stroke();
    ctx.fillStyle = C_TICK;
    ctx.fillText(String(Math.round(v)), padL - 6, y);
  }

  const groupW = plotW / nCat;
  const barGap = 3;
  const innerW = groupW * 0.74;
  const barW = (innerW - barGap * (nSer - 1)) / nSer;

  cats.forEach((cat, ci) => {
    const gx = padL + groupW * ci + (groupW - innerW) / 2;
    series.forEach((s, si) => {
      const val = s.data[ci] || 0;
      const h = plotH * (val / max);
      const x = gx + si * (barW + barGap);
      const y = padT + plotH - h;
      ctx.fillStyle = s.color;
      const r = Math.min(3, barW / 2);
      ctx.beginPath();
      ctx.moveTo(x, y + r); ctx.arcTo(x, y, x + r, y, r);
      ctx.lineTo(x + barW - r, y); ctx.arcTo(x + barW, y, x + barW, y + r, r);
      ctx.lineTo(x + barW, padT + plotH); ctx.lineTo(x, padT + plotH); ctx.closePath();
      ctx.fill();
      // ป้ายตัวเลขทศนิยม 2 ตำแหน่ง — หมุนแนวตั้งให้พอดีแท่ง ไม่ทับกัน
      if (nSer <= 4 && barW >= 7) {
        ctx.save();
        ctx.fillStyle = C_LABEL;
        ctx.font = '700 9px Sarabun, sans-serif';
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        ctx.translate(x + barW / 2, y - 4);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(val.toFixed(2), 0, 0);
        ctx.restore();
      }
    });
    // x label
    ctx.fillStyle = C_LABEL; ctx.font = '10px Sarabun, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    const lbl = cat.length > 8 ? cat : cat;
    ctx.save();
    ctx.translate(padL + groupW * ci + groupW / 2, padT + plotH + 6);
    ctx.rotate(-Math.PI / 7);
    ctx.textAlign = 'right';
    ctx.fillText(cat, 0, 0);
    ctx.restore();
  });
}

function renderLegend(elId, series) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = series.map(s =>
    `<span class="legend-item"><span class="legend-dot" style="background:${s.color}"></span>${s.name}</span>`
  ).join('');
}

// canvasId → { key (ใน DATA.charts), legend (id ของ legend) }
const CHART_MAP = {
  chartGrade3:     { key: 'grade3',     legend: 'legendGrade3' },
  chartOnet6:      { key: 'onet6',      legend: 'legendOnet6' },
  chartOnet3:      { key: 'onet3',      legend: 'legendOnet3' },
  chartOnet6Trend: { key: 'onet6_3yr',  legend: 'legendOnet6Trend' },
  chartOnet3Trend: { key: 'onet3_3yr',  legend: 'legendOnet3Trend' },
  chartSubject3yr: { key: 'subject3yr', legend: 'legendSubject3yr' },
  chartReadwrite:  { key: 'readwrite',  legend: 'legendReadwrite' },
  chartActivities: { key: 'activities', legend: 'legendActivities' },
  chartCharlife:   { key: 'charlife',   legend: 'legendCharlife' },
  chartTrend3:     { key: 'trend3',     legend: 'legendTrend3' },
};

/* ===== Infographic แนวโน้ม 3 ปี ===== */
const TREND_YEARS = [2566, 2567, 2568];
const TREND_COLORS = { 2566: '#d4a017', 2567: '#7b3f98', 2568: '#0f8b8b' };

function buildTrendChart() {
  DATA.charts.trend3 = {
    categories: DATA.standards.map(s => 'มฐ.' + s.num),
    max: 5,
    series: TREND_YEARS.map(y => ({
      name: 'ปี ' + y,
      color: TREND_COLORS[y],
      data: DATA.standards.map(s => +stdScore(s, y).avg.toFixed(2))
    }))
  };
}

function renderTrendCards() {
  const el = document.getElementById('trendCards');
  if (!el) return;
  const lvClass = lv => 'lv-' + Math.max(1, Math.min(5, Math.round(lv)));
  el.innerHTML = DATA.standards.map(s => {
    const first = stdScore(s, TREND_YEARS[0]).avg;
    const last = stdScore(s, TREND_YEARS[TREND_YEARS.length - 1]).avg;
    const diff = last - first;
    const trend = diff > 0.05
      ? '<span class="trend-up"><i class="fas fa-arrow-up"></i> พัฒนาขึ้น</span>'
      : (diff < -0.05 ? '<span class="trend-down"><i class="fas fa-arrow-down"></i> ลดลง</span>'
        : '<span class="trend-flat"><i class="fas fa-equals"></i> คงที่ระดับสูง</span>');
    const years = TREND_YEARS.map(y => {
      const sc = stdScore(s, y);
      return `<div class="ty"><span class="ty-year">${y}</span>
        <span class="lv-badge ${lvClass(sc.avg)}">${sc.level}</span>
        <span class="ty-score">${sc.avg.toFixed(2)}</span></div>`;
    }).join('<i class="fas fa-chevron-right ty-arrow"></i>');
    return `<div class="trend-item" style="--tc:${s.color}">
      <div class="trend-head"><span class="trend-num">${s.num}</span>
        <span class="trend-name">${s.title.replace(/^มาตรฐานที่ \d+ /, '')}</span></div>
      <div class="trend-years">${years}</div>
      <div class="trend-foot">${trend}</div>
    </div>`;
  }).join('');
}

let _legendsDrawn = false;
function renderBarCharts() {
  const C = DATA.charts;
  for (const [canvasId, cfg] of Object.entries(CHART_MAP)) {
    drawGroupedBar(document.getElementById(canvasId), C[cfg.key]);   // จะข้ามอันที่ยังซ่อนอยู่เอง
  }
  if (!_legendsDrawn) {
    for (const cfg of Object.values(CHART_MAP)) renderLegend(cfg.legend, C[cfg.key].series);
    _legendsDrawn = true;
  }
}

// วาดกราฟอัตโนมัติเมื่อ canvas ปรากฏบนจอ (รองรับการสลับแท็บ/เลื่อนหน้า)
let _chartObserver = null;
function setupChartObserver() {
  if (_chartObserver || !('IntersectionObserver' in window)) return;
  _chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) drawGroupedBar(e.target, DATA.charts[CHART_MAP[e.target.id].key]);
    });
  }, { threshold: 0.05 });
  Object.keys(CHART_MAP).forEach(id => {
    const el = document.getElementById(id);
    if (el) _chartObserver.observe(el);
  });
}

// สลับแท็บกราฟเชิงลึก
function switchChartTab(panelId, btn) {
  document.querySelectorAll('.chart-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.chart-tab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
  // วาดกราฟในแท็บที่เพิ่งโชว์ (รอ layout ก่อนด้วย rAF เพื่อให้วัดความกว้างได้ถูกต้อง)
  requestAnimationFrame(() => requestAnimationFrame(renderBarCharts));
}

// ── AWARDS / BEST PRACTICE ────────────────────────
function renderAwards() {
  const bp = document.getElementById('bp-grid');
  if (bp) bp.innerHTML = DATA.bestPractice.map(b => `
    <div class="bp-card">
      ${b.img ? `<div class="bp-img"><img src="${b.img}" alt="${b.title}" onclick="openLightbox('${b.img}','${b.title}')" /></div>` : ''}
      <div class="bp-icon"><i class="fas ${b.icon}"></i></div>
      <h4>${b.title}</h4>
      <p>${b.desc}</p>
      ${b.pdf ? `<a class="bp-link" href="${encodeURI(b.pdf)}" target="_blank" rel="noopener" data-t="${(b.title||'').replace(/"/g,'&quot;')}" onclick="event.preventDefault();openPdf('${encodeURI(b.pdf)}', this.dataset.t)"><i class="fas fa-file-pdf"></i> อ่านฉบับเต็ม (PDF)</a>` : ''}
    </div>`).join('');

  const ag = document.getElementById('award-grid');
  if (ag) ag.innerHTML = DATA.awards.map(a => `
    <div class="award-card" style="border-top-color:${a.color}">
      <div class="award-head">
        <div class="award-icon" style="background:${a.color}1a;color:${a.color}"><i class="fas ${a.icon}"></i></div>
        <h4>ผลงานดีเด่นของ${a.group}</h4>
      </div>
      <ul class="award-list">
        ${a.items.map(it => {
          const text = (typeof it === 'string') ? it : it.t;
          let badge = '';
          if (typeof it === 'object' && it.cert) {
            const isPdf = /\.pdf$/i.test(it.cert);
            badge = isPdf
              ? `<a class="cert-link" href="${encodeURI(it.cert)}" target="_blank" rel="noopener" data-t="${text.replace(/"/g,'&quot;')}" onclick="event.preventDefault();openPdf('${encodeURI(it.cert)}', this.dataset.t)"><i class="fas fa-certificate"></i> เกียรติบัตร</a>`
              : `<span class="cert-thumb" onclick="openLightbox('${encodeURI(it.cert)}','${text.replace(/'/g, "\\'")}')"><img src="${encodeURI(it.cert)}" alt="เกียรติบัตร" loading="lazy" /></span>`;
          }
          return `<li>${text}${badge}</li>`;
        }).join('')}
      </ul>
    </div>`).join('');
}

// ── GALLERY + LIGHTBOX ────────────────────────────
// derive "เดือน ปี" key from a Thai date string like "6 พ.ค. 2568"
function monthKey(date) {
  if (!date) return '';
  const t = date.trim().split(/\s+/);
  return t.length >= 2 ? t.slice(1).join(' ') : '';   // "พ.ค. 2568"
}

let galleryFilter = 'all';
function renderGallery() {
  const g = document.getElementById('gallery-grid');
  if (!g) return;

  // build ordered unique month list (gallery already chronological)
  const months = [];
  DATA.gallery.forEach(p => { const k = monthKey(p.date); if (k && !months.includes(k)) months.push(k); });

  // filter chips
  const fb = document.getElementById('gallery-filter');
  if (fb) {
    fb.innerHTML =
      `<button class="gfilter-btn ${galleryFilter === 'all' ? 'active' : ''}" onclick="filterGallery('all',this)">ทั้งหมด</button>` +
      months.map(m => `<button class="gfilter-btn ${galleryFilter === m ? 'active' : ''}" onclick="filterGallery('${m}',this)">${m}</button>`).join('');
  }

  const list = DATA.gallery.filter(p => galleryFilter === 'all' || monthKey(p.date) === galleryFilter);
  galleryView = list;   // เก็บไว้ให้ lightbox เลื่อนซ้าย-ขวา

  const cnt = document.getElementById('gallery-count');
  if (cnt) cnt.innerHTML = `<i class="fas fa-camera"></i> ${list.length} ภาพ${galleryFilter === 'all' ? ' (ตลอดปีการศึกษา)' : ' · ' + galleryFilter}`;

  g.innerHTML = list.map((p, i) => `
    <div class="gallery-item" onclick="openGalleryLightbox(${i})">
      <img src="${p.img}" alt="${p.caption}" loading="lazy" />
      <div class="gallery-cap">
        ${p.date ? `<span class="gallery-date"><i class="fas fa-calendar-day"></i> ${p.date}</span>` : ''}
        <span class="gallery-name">${p.caption}</span>
      </div>
    </div>`).join('');
}

function filterGallery(m, btn) {
  galleryFilter = m;
  document.querySelectorAll('#gallery-filter .gfilter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderGallery();
}

let galleryView = [];     // รายการรูปที่กำลังแสดง (ตามตัวกรองเดือน)
let lbList = [];          // รายการในไลต์บ็อกซ์ปัจจุบัน
let lbIndex = 0;

// แสดงรูปเดี่ยว (เกียรติบัตร / Best Practice / SADAO) — ไม่มีลูกศร
function openLightbox(src, cap) {
  lbList = [];
  showLightbox(src, cap || '');
}
// เปิดแกลเลอรีตาม index — เลื่อนซ้าย-ขวาได้
function openGalleryLightbox(i) {
  lbList = galleryView.slice();
  lbIndex = i;
  const p = lbList[i];
  showLightbox(p.img, p.date ? `${p.caption} — ${p.date}` : p.caption);
}
function showLightbox(src, cap) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-cap').textContent = cap || '';
  const hasNav = lbList.length > 1;
  const prev = document.getElementById('lbPrev'), next = document.getElementById('lbNext');
  if (prev) prev.style.display = hasNav ? '' : 'none';
  if (next) next.style.display = hasNav ? '' : 'none';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function lightboxStep(d) {
  if (lbList.length < 2) return;
  lbIndex = (lbIndex + d + lbList.length) % lbList.length;
  const p = lbList[lbIndex];
  const img = document.getElementById('lightbox-img');
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = p.img;
    document.getElementById('lightbox-cap').textContent = p.date ? `${p.caption} — ${p.date}` : p.caption;
    img.style.opacity = 1;
  }, 120);
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') lightboxStep(-1);
  else if (e.key === 'ArrowRight') lightboxStep(1);
});
// ปัดนิ้วบนมือถือ
(function () {
  let x0 = null;
  const lb = () => document.getElementById('lightbox');
  document.addEventListener('touchstart', e => { if (lb().classList.contains('open')) x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (x0 === null || !lb().classList.contains('open')) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) lightboxStep(dx < 0 ? 1 : -1);
    x0 = null;
  }, { passive: true });
})();

// ── เหรียญตรา 3D หมุน 360° — สร้างขอบเหรียญด้วยชิ้นส่วน ──
// โลโก้อัดขึ้นรูป 3D — ซ้อนสำเนาโลโก้หลายชั้นตามแกน Z ให้เกิดความหนา
function init3DLogo() {
  const host = document.getElementById('logo3d');
  if (!host || host.childElementCount) return;
  const N = 24;            // ลดชั้นให้เบาขึ้น โลโก้ขึ้นไว ยังดูหนาทึบ
  const depth = 26;        // ความหนารวม (px)
  const step = depth / (N - 1);   // ~0.41px ต่อชั้น (sub-pixel = ตัน)
  for (let i = 0; i < N; i++) {
    const img = document.createElement('img');
    img.src = 'assets/logo-3d.png';
    img.alt = '';
    const z = (i * step) - depth / 2;       // -depth/2 .. +depth/2
    // หน้า + หลัง = สีตราเต็ม (สว่างทั้งสองด้าน), เนื้อตรงกลาง = เข้มเป็นสันหนา
    let bright;
    if (i === 0 || i === N - 1) bright = 1;
    else bright = 0.55;
    img.style.transform = `translateZ(${z.toFixed(2)}px)`;
    img.style.filter = `brightness(${bright})`;
    host.appendChild(img);
  }
}

// ── สรุปผล 3 มาตรฐาน (หน้าแรก) ────────────────────
function renderHomeStandards() {
  const grid = document.getElementById('homeStdGrid');
  if (!grid) return;
  const Y = QUALITY_YEAR;
  const goResults = "showSection('results', document.querySelector('[onclick*=results]'))";
  // การ์ดภาพรวม
  const results = DATA.standards.map(s => stdScore(s, Y));
  const avg = results.reduce((a, r) => a + r.avg, 0) / results.length;
  const oLv = scoreToLevel(avg), oColor = LEVEL_COLORS[oLv];
  let html = `
    <div class="hstd-card hstd-overall" style="--c:${oColor}" onclick="${goResults}">
      <div class="hstd-overall-label">ผลการประเมินภาพรวม</div>
      <div class="hstd-overall-level">${LEVEL_NAMES[oLv]}</div>
      <div class="hstd-overall-score">${avg.toFixed(2)}<span>/5 · ${Math.round(avg/5*100)}%</span></div>
    </div>`;
  // 3 มาตรฐาน
  html += DATA.standards.map((std, i) => {
    const r = results[i], c = LEVEL_COLORS[r.level];
    return `
      <div class="hstd-card" style="--c:${std.color}" onclick="${goResults}">
        <div class="hstd-top">
          <span class="hstd-num" style="background:${std.color}1a;color:${std.color}">${std.num}</span>
          <span class="hstd-badge" style="background:${c}">${LEVEL_NAMES[r.level]}</span>
        </div>
        <div class="hstd-title">${std.title.replace('มาตรฐานที่ ' + std.num + ' ', '')}</div>
        <div class="hstd-bar"><span style="width:${r.pct}%;background:${std.color}"></span></div>
        <div class="hstd-pct">${r.avg.toFixed(2)}/5 · ${r.pct}%</div>
      </div>`;
  }).join('');
  grid.innerHTML = html;
}

// ── แถบภาพกิจกรรมเลื่อนอัตโนมัติ (หน้าแรก) ────────
function renderHomeMarquee() {
  const track = document.getElementById('homeMarquee');
  if (!track || !DATA.gallery || !DATA.gallery.length) return;
  // ใช้ภาพกิจกรรมครบทุกรูป เรียงตามลำดับทั้งปี
  const pick = DATA.gallery;
  const make = p => {
    const cap = ((p.date ? p.caption + ' — ' + p.date : p.caption) || '').replace(/'/g, "\\'");
    return `<div class="mq-item" onclick="openLightbox('${p.img}','${cap}')">
      <img src="${p.img}" loading="lazy" alt="${p.caption}" />
      <div class="mq-cap">
        <span class="mq-title">${p.caption}</span>
        ${p.date ? `<span class="mq-date"><i class="fas fa-calendar-day"></i> ${p.date}</span>` : ''}
      </div>
    </div>`;
  };
  // ทำซ้ำ 2 ชุด เพื่อเลื่อนวนต่อเนื่องไร้รอยต่อ
  track.innerHTML = pick.map(make).join('') + pick.map(make).join('');
  // ปรับความเร็วตามจำนวนรูป (ค่ายิ่งมาก = เลื่อนยิ่งช้า)
  track.style.animationDuration = (pick.length * 4.6).toFixed(0) + 's';
}

// ── แถบความคืบหน้า + ปุ่มกลับขึ้นบน ──────────────
function initScrollUI() {
  const bar = document.getElementById('scrollProgress');
  const top = document.getElementById('toTop');
  const onScroll = () => {
    const h = document.documentElement;
    const sc = h.scrollTop || document.body.scrollTop;
    const max = (h.scrollHeight - h.clientHeight) || 1;
    if (bar) bar.style.width = (sc / max * 100) + '%';
    if (top) top.classList.toggle('show', sc > 400);
    document.querySelector('header')?.classList.toggle('scrolled', sc > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── โหมดมืด ───────────────────────────────────────
function applyTheme(t) {
  document.body.classList.toggle('dark', t === 'dark');
  const ic = document.querySelector('#themeToggle i');
  if (ic) ic.className = (t === 'dark') ? 'fas fa-sun' : 'fas fa-moon';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t === 'dark' ? '#0a1118' : '#0f8b8b');
}
function toggleTheme() {
  const t = document.body.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('iqa-theme', t);
  applyTheme(t);
  // วาดกราฟใหม่ให้สีตรงกับธีม
  if (typeof drawRadar === 'function') drawRadar();
  if (typeof renderBarCharts === 'function') renderBarCharts();
}
function initTheme() {
  const saved = localStorage.getItem('iqa-theme');
  applyTheme(saved || 'light');
}

// ── อนิเมชันเลื่อนปรากฏ (scroll reveal) ───────────
function initReveal() {
  const sel = '.card, .chart-card, .award-card, .bp-card, .std-result-card, .doc-card, .gallery-item, .about-card, .criteria-box, .overall-card, .timeline-item, .accordion-item, .section-title-row';
  const els = document.querySelectorAll(sel);
  els.forEach(el => el.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

// ── ตัวนับผู้เข้าชม (ใช้บริการฟรี ไม่ต้องมีเซิร์ฟเวอร์) ──
function initVisitorCount() {
  const el = document.getElementById('visitorCount');
  if (!el) return;
  // นับเฉพาะเว็บออนไลน์จริง (ข้าม localhost)
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
  // นับ +1 แค่ครั้งแรกของแต่ละ session — รีเฟรชหน้าเดิมจะแค่ "อ่านค่า" ไม่เพิ่มซ้ำ
  let url, counted = false;
  try { counted = sessionStorage.getItem('iqa_counted') === '1'; } catch (e) {}
  if (counted) {
    url = 'https://api.counterapi.dev/v1/chanu-iqa/visits/';        // อ่านอย่างเดียว
  } else {
    url = 'https://api.counterapi.dev/v1/chanu-iqa/visits/up';      // +1
    try { sessionStorage.setItem('iqa_counted', '1'); } catch (e) {}
  }
  fetch(url)
    .then(r => r.json())
    .then(d => {
      const n = d.count ?? d.value;
      if (n != null) {
        el.querySelector('strong').textContent = Number(n).toLocaleString('th-TH');
        el.style.display = '';
      }
    })
    .catch(() => {});
}

// ── PWA: ลงทะเบียน service worker ──────────────────
function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
}

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  buildTrendChart();      // สร้างข้อมูลแนวโน้ม 3 ปี
  renderTrendCards();     // การ์ดสรุปแนวโน้มรายมาตรฐาน
  renderResults();
  drawRadar();
  renderDocs();
  renderStandards();
  renderAbout();
  renderAwards();
  renderGallery();
  renderBarCharts();      // วาด legend + กราฟที่มองเห็น
  setupChartObserver();   // วาดกราฟที่เหลือเมื่อปรากฏบนจอ
  renderHomeStandards();  // สรุปผล 3 มาตรฐาน หน้าแรก
  renderHomeMarquee();    // แถบภาพกิจกรรมเลื่อนอัตโนมัติ
  init3DLogo();           // โลโก้ 3D เอียงตามเมาส์
  initTheme();            // โหมดมืด/สว่าง (จำค่าไว้)
  initScrollUI();         // แถบความคืบหน้า + ปุ่มขึ้นบน
  initReveal();           // อนิเมชันเลื่อนปรากฏ
  initPWA();              // ติดตั้งเป็นแอป (offline)
  initVisitorCount();     // ตัวนับผู้เข้าชม
});

// redraw charts on resize if results section is visible
let _resizeT;
window.addEventListener('resize', () => {
  clearTimeout(_resizeT);
  _resizeT = setTimeout(() => {
    if (document.getElementById('results').classList.contains('active')) {
      renderBarCharts();
      drawRadar();
    }
  }, 200);
});

/* ===== แชร์เว็บไซต์ (ใช้ Web Share API บนมือถือ, สำรองด้วยคัดลอกลิงก์) ===== */
function shareSite() {
  const url = 'https://chanu-iqa.github.io/chanu-iqa/';
  const data = {
    title: 'งานประกันคุณภาพภายในสถานศึกษา — โรงเรียนชานุมานวิทยาคม',
    text: 'ผลการประเมินคุณภาพภายในระดับยอดเยี่ยม ปีการศึกษา 2568',
    url: url
  };
  if (navigator.share) {
    navigator.share(data).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      toast('คัดลอกลิงก์เว็บไซต์แล้ว ✓');
    }).catch(() => prompt('คัดลอกลิงก์นี้เพื่อแชร์:', url));
  } else {
    prompt('คัดลอกลิงก์นี้เพื่อแชร์:', url);
  }
}

/* แจ้งเตือนเล็ก ๆ มุมจอ */
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ===== วิดีโอแนะนำโรงเรียน (คลิกเล่น แล้วซ่อนปุ่ม Play) ===== */
function playSchoolVideo() {
  const v = document.getElementById('schoolVideo');
  const card = document.getElementById('schoolVideoCard');
  if (!v) return;
  card.classList.add('playing');
  v.play().catch(() => {});
  v.addEventListener('pause', () => card.classList.remove('playing'), { once: true });
  v.addEventListener('ended', () => card.classList.remove('playing'), { once: true });
}
