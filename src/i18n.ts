import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', blog: 'Blog', about: 'About', contact: 'Contact' },
      footer: { desc: 'Helping you navigate the rapidly evolving world of artificial intelligence and digital productivity.', quickLinks: 'Quick Links', categories: 'Categories', rights: 'All rights reserved.' },
      home: { heroTitle: 'Mastering the Future of Digital Productivity', heroDesc: 'Expert insights, practical guides, and the latest trends in artificial intelligence, automation, and workflow optimization. Enjoy a clean, distraction-free environment designed purely for reading.', readBlog: 'Read the Blog', latest: 'Latest Articles', viewAll: 'View All' },
      blog: { title: 'The Blog', desc: 'In-depth analysis, tutorials, and reviews of the digital tools shaping the future of work.' },
      post: { back: 'Back to Blog', share: 'Share', toc: 'Table of Contents' },
      category: { back: 'Back to Blog', label: 'Category', desc: 'Discover the latest insights and guides specifically focused on', empty: 'No posts found in this category.' },
      about: { 
        title: 'About Aria Insights', 
        desc: 'Our mission is to empower professionals with the knowledge and tools they need to thrive in an AI-driven world.',
        heading: 'Empowering Your Digital Evolution',
        subheading: 'We believe that artificial intelligence is not just a technological shift, but a fundamental change in how we work, create, and live.',
        storyTitle: 'Our Story',
        storyText1: 'Aria Insights was born out of a simple realization: the pace of technological advancement is accelerating, and professionals across all industries are struggling to keep up. We saw a gap between the complex, highly technical research papers and the practical, day-to-day needs of modern workers.',
        storyText2: 'Our goal is to bridge that gap. We spend our days testing new AI tools, exploring automation workflows, and analyzing productivity methodologies so you don\'t have to. We distill this information into actionable insights, comprehensive guides, and honest reviews.',
        missionTitle: 'Our Mission',
        missionText: 'To democratize access to advanced digital tools and strategies, enabling individuals and teams to reclaim their time, boost their creativity, and achieve unprecedented levels of productivity.',
        valuesTitle: 'Core Values',
        value1Title: 'Clarity over Jargon',
        value1Text: 'We break down complex concepts into easy-to-understand language.',
        value2Title: 'Practicality First',
        value2Text: 'If a tool or strategy doesn\'t offer real-world value, we don\'t recommend it.',
        value3Title: 'Continuous Learning',
        value3Text: 'We are always exploring the edge of what\'s possible in the digital space.'
      },
      contact: { 
        title: 'Get in Touch', 
        desc: 'Have a question, feedback, or a partnership inquiry? We\'d love to hear from you.', 
        heading: 'Let\'s Start a Conversation',
        subheading: 'Whether you\'re looking to collaborate, have a question about our content, or just want to say hello, our inbox is always open.',
        emailUs: 'Email Us', 
        emailDesc: 'Our team typically responds within 24-48 hours.', 
        social: 'Social Media', 
        socialDesc: 'Follow us for daily tips and updates.', 
        office: 'Office', 
        officeDesc: 'Digital Nomad HQ', 
        remote: 'Remote-First Team', 
        formName: 'Name', 
        formEmail: 'Email', 
        formMsg: 'Message', 
        formNamePlaceholder: 'Your Name', 
        formEmailPlaceholder: 'your@email.com', 
        formMsgPlaceholder: 'How can we help?', 
        send: 'Send Message',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Do you offer consulting services?',
        faq1A: 'Yes, we offer limited consulting engagements for teams looking to integrate AI into their workflows. Please reach out via the contact form for more details.',
        faq2Q: 'Can I write a guest post for Aria Insights?',
        faq2A: 'We are always open to high-quality contributions from experts in the field. Send us a brief pitch outlining your idea.',
        faq3Q: 'How often do you publish new content?',
        faq3A: 'We aim to publish new, in-depth articles twice a week, along with a weekly newsletter summarizing the most important updates in the AI space.'
      },
      privacy: { 
        title: 'Privacy Policy', 
        updated: 'Last Updated: March 21, 2026',
        intro: 'At Aria Insights, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.',
        section1Title: '1. Information We Collect',
        section1Text1: 'We collect information you provide directly to us, such as when you subscribe to our newsletter, fill out a contact form, or leave a comment. This may include your name, email address, and any other details you choose to share.',
        section1Text2: 'We also automatically collect certain information about your device and how you interact with our site using cookies and similar tracking technologies. This includes your IP address, browser type, pages visited, and time spent on the site.',
        section2Title: '2. How We Use Your Information',
        section2Text1: 'We use the information we collect to provide, maintain, and improve our services. This includes sending you newsletters, responding to your inquiries, and analyzing website traffic to better understand our audience.',
        section2Text2: 'We may also use your information to personalize your experience and deliver content and advertisements that are relevant to your interests.',
        section3Title: '3. Third-Party Services and Advertising',
        section3Text1: 'We use third-party services, such as Google Analytics, to help us understand how visitors use our site. These services may use cookies and other tracking technologies to collect information about your online activities.',
        section3Text2: 'We may also partner with third-party advertising networks, such as Google AdSense, to display ads on our site. These networks may use cookies to serve ads based on your prior visits to our site or other websites.',
        section4Title: '4. Data Security',
        section4Text1: 'We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.',
        section5Title: '5. Your Rights and Choices',
        section5Text1: 'You have the right to access, update, or delete your personal information. You can also opt-out of receiving promotional emails from us by following the instructions in those emails.',
        section5Text2: 'You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our site.',
        section6Title: '6. Changes to This Policy',
        section6Text1: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.',
        contactUs: 'If you have any questions about this Privacy Policy, please contact us at privacy@ariainsights.com.'
      },
      notfound: { title: '404 - Page Not Found', heading: '404', desc: 'Oops! The page you are looking for has been moved or doesn\'t exist.', back: 'Back to Home' }
    }
  },
  ko: {
    translation: {
      nav: { home: '홈', blog: '블로그', about: '소개', contact: '연락처' },
      footer: { desc: '인공지능과 디지털 생산성의 빠르게 진화하는 세계를 탐색하도록 돕습니다.', quickLinks: '빠른 링크', categories: '카테고리', rights: '모든 권리 보유.' },
      home: { heroTitle: '디지털 생산성의 미래를 마스터하다', heroDesc: '인공지능, 자동화, 워크플로우 최적화에 대한 전문가의 통찰력과 실용적인 가이드. 군더더기 없이 오직 글 읽기에만 집중할 수 있는 깔끔한 환경에서 최신 트렌드를 만나보세요.', readBlog: '블로그 읽기', latest: '최신 아티클', viewAll: '전체 보기' },
      blog: { title: '블로그', desc: '미래의 업무 방식을 형성하는 디지털 도구에 대한 심층 분석, 튜토리얼 및 리뷰.' },
      post: { back: '블로그로 돌아가기', share: '공유하기', toc: '목차' },
      category: { back: '블로그로 돌아가기', label: '카테고리', desc: '다음 주제에 특별히 초점을 맞춘 최신 인사이트와 가이드를 확인하세요:', empty: '이 카테고리에 게시물이 없습니다.' },
      about: { 
        title: 'Aria 인사이트 소개', 
        desc: '우리의 사명은 전문가들이 AI 주도 세계에서 성공하는 데 필요한 지식과 도구를 제공하는 것입니다.',
        heading: '디지털 진화를 주도하다',
        subheading: '우리는 인공지능이 단순한 기술적 변화가 아니라, 우리가 일하고 창조하며 살아가는 방식의 근본적인 변화라고 믿습니다.',
        storyTitle: '우리의 이야기',
        storyText1: 'Aria 인사이트는 단순한 깨달음에서 시작되었습니다. 기술 발전의 속도는 빨라지고 있으며, 모든 산업 분야의 전문가들이 이를 따라잡기 위해 고군분투하고 있습니다. 우리는 복잡하고 전문적인 연구 논문과 현대 직장인들의 실용적이고 일상적인 요구 사이에 존재하는 큰 격차를 보았습니다.',
        storyText2: '우리의 목표는 그 격차를 해소하는 것입니다. 여러분을 대신하여 새로운 AI 도구를 테스트하고, 자동화 워크플로우를 탐구하며, 생산성 방법론을 분석합니다. 그리고 이 모든 정보를 실행 가능한 인사이트, 포괄적인 가이드, 그리고 솔직한 리뷰로 정제하여 제공합니다.',
        missionTitle: '우리의 사명',
        missionText: '고급 디지털 도구 및 전략에 대한 접근성을 민주화하여, 개인과 팀이 자신의 시간을 되찾고 창의력을 높이며 전례 없는 수준의 생산성을 달성할 수 있도록 지원하는 것입니다.',
        valuesTitle: '핵심 가치',
        value1Title: '전문 용어보다 명확성',
        value1Text: '복잡한 개념을 누구나 이해하기 쉬운 언어로 풀어냅니다.',
        value2Title: '실용성 최우선',
        value2Text: '실제 업무나 일상에서 실질적인 가치를 제공하지 않는 도구나 전략은 추천하지 않습니다.',
        value3Title: '지속적인 학습',
        value3Text: '우리는 항상 디지털 공간에서 가능한 것의 한계를 탐구하고 배웁니다.'
      },
      contact: { 
        title: '연락하기', 
        desc: '질문, 피드백 또는 파트너십 문의가 있으신가요? 언제든 연락해 주세요.', 
        heading: '대화를 시작해 보세요',
        subheading: '협업을 원하시거나, 콘텐츠에 대한 질문이 있거나, 단순히 인사를 나누고 싶으시다면 언제든 환영합니다. 저희의 수신함은 항상 열려 있습니다.',
        emailUs: '이메일 보내기', 
        emailDesc: '저희 팀은 보통 24-48시간 내에 답변해 드립니다.', 
        social: '소셜 미디어', 
        socialDesc: '매일 업데이트되는 팁을 팔로우하세요.', 
        office: '사무실', 
        officeDesc: '디지털 노마드 HQ', 
        remote: '원격 근무 중심 팀', 
        formName: '이름', 
        formEmail: '이메일', 
        formMsg: '메시지', 
        formNamePlaceholder: '이름을 입력하세요', 
        formEmailPlaceholder: 'your@email.com', 
        formMsgPlaceholder: '무엇을 도와드릴까요?', 
        send: '메시지 보내기',
        faqTitle: '자주 묻는 질문 (FAQ)',
        faq1Q: '컨설팅 서비스도 제공하시나요?',
        faq1A: '네, AI를 워크플로우에 통합하려는 팀을 위해 제한적인 컨설팅을 제공하고 있습니다. 자세한 내용은 문의 양식을 통해 연락해 주세요.',
        faq2Q: 'Aria 인사이트에 게스트 포스팅을 할 수 있나요?',
        faq2A: '해당 분야 전문가들의 고품질 기고는 언제나 환영합니다. 아이디어를 요약하여 짧은 제안서를 보내주세요.',
        faq3Q: '새로운 콘텐츠는 얼마나 자주 업로드되나요?',
        faq3A: '주 2회 심층적인 아티클을 발행하는 것을 목표로 하고 있으며, AI 분야의 가장 중요한 업데이트를 요약한 주간 뉴스레터도 함께 발송하고 있습니다.'
      },
      privacy: { 
        title: '개인정보 처리방침', 
        updated: '최종 수정일: 2026년 3월 21일',
        intro: 'Aria 인사이트는 귀하의 개인정보를 매우 중요하게 생각합니다. 본 개인정보 처리방침은 귀하가 당사 웹사이트를 방문할 때 당사가 귀하의 개인정보를 수집, 사용 및 보호하는 방법을 설명합니다.',
        section1Title: '1. 수집하는 정보',
        section1Text1: '당사는 귀하가 뉴스레터를 구독하거나, 문의 양식을 작성하거나, 댓글을 남길 때 귀하가 직접 제공하는 정보를 수집합니다. 여기에는 이름, 이메일 주소 및 귀하가 공유하기로 선택한 기타 세부 정보가 포함될 수 있습니다.',
        section1Text2: '또한 쿠키 및 유사한 추적 기술을 사용하여 귀하의 기기 및 당사 사이트와의 상호 작용에 대한 특정 정보를 자동으로 수집합니다. 여기에는 IP 주소, 브라우저 유형, 방문한 페이지 및 사이트에서 보낸 시간이 포함됩니다.',
        section2Title: '2. 정보 사용 방법',
        section2Text1: '당사는 수집한 정보를 서비스를 제공, 유지 및 개선하는 데 사용합니다. 여기에는 뉴스레터 발송, 문의 응답, 웹사이트 트래픽 분석을 통한 잠재고객 이해가 포함됩니다.',
        section2Text2: '또한 귀하의 정보를 사용하여 귀하의 경험을 개인화하고 귀하의 관심사와 관련된 콘텐츠 및 광고를 제공할 수 있습니다.',
        section3Title: '3. 타사 서비스 및 광고',
        section3Text1: '당사는 Google 애널리틱스와 같은 타사 서비스를 사용하여 방문자가 당사 사이트를 어떻게 사용하는지 이해합니다. 이러한 서비스는 쿠키 및 기타 추적 기술을 사용하여 귀하의 온라인 활동에 대한 정보를 수집할 수 있습니다.',
        section3Text2: '당사는 Google AdSense와 같은 타사 광고 네트워크와 제휴하여 당사 사이트에 광고를 게재할 수 있습니다. 이러한 네트워크는 쿠키를 사용하여 귀하의 당사 사이트 또는 기타 웹사이트의 이전 방문을 기반으로 광고를 게재할 수 있습니다.',
        section4Title: '4. 데이터 보안',
        section4Text1: '당사는 무단 액세스, 변경, 공개 또는 파괴로부터 귀하의 개인정보를 보호하기 위해 합리적인 보안 조치를 구현합니다. 그러나 인터넷을 통한 전송 방법이나 전자 저장 방법은 100% 안전하지 않다는 점을 유의하시기 바랍니다.',
        section5Title: '5. 귀하의 권리 및 선택',
        section5Text1: '귀하는 귀하의 개인정보에 액세스, 업데이트 또는 삭제할 권리가 있습니다. 또한 이메일에 포함된 지침에 따라 당사로부터 홍보 이메일 수신을 거부할 수 있습니다.',
        section5Text2: '브라우저 설정을 통해 쿠키 기본 설정을 관리할 수 있습니다. 쿠키를 비활성화하면 당사 사이트의 기능에 영향을 미칠 수 있습니다.',
        section6Title: '6. 본 방침의 변경',
        section6Text1: '당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 중요한 변경 사항이 있는 경우 이 페이지에 새로운 방침을 게시하고 "최종 수정일"을 업데이트하여 알려드립니다.',
        contactUs: '본 개인정보 처리방침에 대해 질문이 있는 경우 privacy@ariainsights.com으로 문의해 주시기 바랍니다.'
      },
      notfound: { title: '404 - 페이지를 찾을 수 없습니다', heading: '404', desc: '앗! 찾으시는 페이지가 이동되었거나 존재하지 않습니다.', back: '홈으로 돌아가기' }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
