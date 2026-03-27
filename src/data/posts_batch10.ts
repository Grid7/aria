import { BlogPost } from '../types';

export const postsBatch10: BlogPost[] = [
  {
    id: '19',
    slug: 'understanding-core-web-vitals-for-seo',
    title: {
      en: 'Core Web Vitals Guide: The Key to Google SEO Success',
      ko: '구글 코어 웹 바이탈(Core Web Vitals) 완벽 가이드: 애드센스 및 SEO 승인의 핵심'
    },
    description: {
      en: 'Learn how to optimize LCP, FID, and CLS to improve your website ranking and user experience.',
      ko: '구글 검색 랭킹의 핵심 지표인 LCP, FID, CLS의 개념을 이해하고, 블로그와 웹사이트의 로딩 속도 및 사용자 경험을 최적화하는 방법을 알아봅니다.'
    },
    author: 'Aria Editorial Team',
    date: '2026-04-05T09:12:00Z',
    category: {
      en: 'SEO & Marketing',
      ko: 'SEO & 마케팅'
    },
    image: 'https://picsum.photos/seed/core-web-vitals/800/400',
    content: {
      en: `
# Core Web Vitals Guide: The Key to Google SEO Success

...
      `,
      ko: `
# 구글 코어 웹 바이탈(Core Web Vitals) 완벽 가이드: 애드센스 및 SEO 승인의 핵심

블로그나 웹사이트를 운영하면서 구글 검색 상위 노출(SEO)과 애드센스 승인을 목표로 하고 있다면, 반드시 알아야 할 개념이 있습니다. 바로 구글이 발표한 **코어 웹 바이탈(Core Web Vitals)**입니다.

## 1. 코어 웹 바이탈이란?

코어 웹 바이탈은 구글이 웹페이지의 사용자 경험(UX)을 측정하기 위해 만든 핵심 지표입니다. 단순히 콘텐츠의 질뿐만 아니라, 사용자가 페이지에 접속했을 때 얼마나 빠르고 쾌적하게 이용할 수 있는지를 수치화한 것입니다.

**[전문가의 인사이트]** 과거에는 키워드 반복만으로도 상위 노출이 가능했지만, 현재 구글의 알고리즘은 '사용자가 이 페이지에서 얼마나 만족했는가'를 최우선으로 평가합니다. 아무리 좋은 글이라도 로딩이 10초 이상 걸린다면 사용자는 이탈하고, 구글은 이를 저품질 문서로 간주합니다.

## 2. 3가지 핵심 지표 (LCP, FID, CLS)

### ① LCP (Largest Contentful Paint) - 로딩 성능
페이지에서 가장 큰 텍스트 블록이나 이미지가 화면에 렌더링되는 데 걸리는 시간입니다.
*   **우수 기준:** 2.5초 이하
*   **개선 팁:** 고해상도 이미지 용량 압축(WebP 포맷 사용), 불필요한 자바스크립트 제거, 캐싱 활용.

### ② FID (First Input Delay) - 상호작용성
사용자가 페이지와 처음 상호작용(버튼 클릭, 링크 탭 등)할 때 브라우저가 반응하는 데 걸리는 시간입니다.
*   **우수 기준:** 100밀리초 이하
*   **개선 팁:** 무거운 자바스크립트 실행 최소화, 웹 워커(Web Worker) 사용.

### ③ CLS (Cumulative Layout Shift) - 시각적 안정성
페이지가 로딩되면서 텍스트나 버튼이 갑자기 밀려나는 등 예상치 못한 레이아웃 이동이 발생하는 빈도를 측정합니다.
*   **우수 기준:** 0.1 이하
*   **개선 팁:** 이미지 및 동영상에 항상 \`width\`와 \`height\` 속성 지정, 동적 광고 공간 미리 확보.

## 3. 애드센스 승인과의 연관성

애드센스 심사 봇은 사이트의 구조와 속도를 꼼꼼히 체크합니다. 코어 웹 바이탈 점수가 낮으면 '사용자 경험이 떨어지는 사이트'로 분류되어 승인이 지연되거나 거절될 수 있습니다. 

## 마무리

코어 웹 바이탈 최적화는 선택이 아닌 필수입니다. 구글 서치 콘솔(Google Search Console)과 페이지스피드 인사이트(PageSpeed Insights) 도구를 활용하여 내 블로그의 현재 점수를 확인하고, 하나씩 개선해 나가시길 바랍니다.
      `
    }
  },
  {
    id: '20',
    slug: 'how-to-write-eat-content',
    title: {
      en: 'How to Write E-E-A-T Content for Google',
      ko: '구글이 사랑하는 E-E-A-T 콘텐츠 작성법: 블로그 수익화의 비밀'
    },
    description: {
      en: 'Discover the secrets to writing content that satisfies Google E-E-A-T guidelines.',
      ko: '경험, 전문성, 권위, 신뢰성을 뜻하는 E-E-A-T 가이드라인을 분석하고, 실제 블로그 포스팅에 적용하여 수익화를 달성하는 구체적인 글쓰기 전략을 소개합니다.'
    },
    author: 'Aria Editorial Team',
    date: '2026-04-05T16:47:00Z',
    category: {
      en: 'SEO & Marketing',
      ko: 'SEO & 마케팅'
    },
    image: 'https://picsum.photos/seed/eat-content/800/400',
    content: {
      en: `
# How to Write E-E-A-T Content for Google

...
      `,
      ko: `
# 구글이 사랑하는 E-E-A-T 콘텐츠 작성법: 블로그 수익화의 비밀

애드센스 승인과 블로그 수익화를 위해 가장 많이 듣는 단어 중 하나가 바로 **E-E-A-T**일 것입니다. 구글 검색 품질 평가 가이드라인의 핵심인 E-E-A-T가 무엇인지, 그리고 이를 내 블로그 글에 어떻게 녹여낼 수 있는지 구체적인 방법을 알아보겠습니다.

## 1. E-E-A-T란 무엇인가?

E-E-A-T는 다음 네 가지 단어의 약자입니다.

1.  **Experience (경험):** 작성자가 해당 주제에 대해 직접 겪은 실제 경험이 있는가?
2.  **Expertise (전문성):** 작성자가 해당 분야에 대한 깊은 지식과 기술을 보유하고 있는가?
3.  **Authoritativeness (권위성):** 작성자나 웹사이트가 해당 분야에서 널리 인정받고 있는가?
4.  **Trustworthiness (신뢰성):** 제공하는 정보가 정확하고 안전하며 믿을 수 있는가? (가장 중요한 요소)

## 2. E-E-A-T를 충족하는 글쓰기 실전 팁

### ① '나만의 경험'을 반드시 포함하세요 (Experience)
단순히 위키백과나 다른 블로그의 글을 짜깁기한 문서는 구글이 가장 싫어하는 형태입니다. 
*   **적용법:** 글 서두나 중간에 "제가 직접 3개월간 이 방법을 테스트해 본 결과..." 또는 "실무에서 이 툴을 사용하며 겪었던 시행착오는..."과 같이 본인만의 생생한 경험담을 추가하세요.

### ② 출처와 통계 자료를 명시하세요 (Trustworthiness)
주장만 있는 글은 신뢰를 얻기 어렵습니다.
*   **적용법:** 객관적인 수치나 통계를 언급할 때는 반드시 공식 기관, 논문, 신뢰할 수 있는 뉴스 기사의 링크(아웃바운드 링크)를 걸어주세요. 이는 검색 로봇에게 '이 글은 팩트에 기반했다'는 신호를 줍니다.

### ③ 저자 프로필을 명확히 하세요 (Expertise & Authoritativeness)
익명의 누군가가 쓴 글보다, 해당 분야의 전문가가 쓴 글이 더 높은 평가를 받습니다.
*   **적용법:** 블로그 하단이나 사이드바에 운영자의 간략한 이력, 자격증, 관련 경험 등을 적은 '저자 소개(Author Bio)' 란을 만들어 두는 것이 좋습니다.

## 3. 피해야 할 치명적인 실수 (YMYL)

**YMYL(Your Money or Your Life)** 분야, 즉 사람의 돈(금융, 투자)이나 생명(건강, 의료)과 직결된 주제는 구글이 E-E-A-T 기준을 훨씬 더 엄격하게 적용합니다. 의사나 금융 전문가가 아니라면, 이런 주제는 애드센스 승인 전까지는 피하는 것이 현명합니다.

## 마무리

E-E-A-T는 하루아침에 만들어지지 않습니다. 독자에게 진짜 도움이 되는 정보를 주겠다는 마음으로 꾸준히 글을 작성하다 보면, 자연스럽게 구글과 독자 모두에게 인정받는 블로그가 될 것입니다.
      `
    }
  }
];
