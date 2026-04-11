import { BlogPost } from '../types';

export const postsBatch12: BlogPost[] = [
  {
    id: '31',
    slug: 'midjourney-consistent-character-cref',
    title: {
      en: 'How to Maintain Consistent Characters in Midjourney: Stop Relying on Seeds',
      ko: '미드저니 일관된 캐릭터 만들기: 시드(Seed) 값에 집착하면 안 되는 이유'
    },
    description: {
      en: 'A practical guide on using the --cref parameter in Midjourney to create consistent characters, based on real trial and error.',
      ko: '미드저니에서 동일한 얼굴의 캐릭터를 유지하는 완벽한 방법. 수많은 삽질 끝에 찾아낸 --cref 파라미터 활용법을 공유합니다.'
    },
    author: 'Aria Editorial Team',
    date: '2026-04-16T10:00:00Z',
    category: {
      en: 'AI Tools',
      ko: 'AI 도구'
    },
    image: 'https://picsum.photos/seed/midjourney-cref/800/400',
    content: {
      en: `
# How to Maintain Consistent Characters in Midjourney: Stop Relying on Seeds

I struggled with this for quite a while at first. I wanted to use Midjourney to generate some character illustrations for a web novel I was planning. Other people seemed to be creating amazing things effortlessly, but whenever I typed a prompt, a completely different person popped out every single time. I clearly typed "a 20-something male knight with black hair and blue eyes," but the first image gave me a handsome Westerner, and the second image suddenly showed an older Asian man holding a sword.

At first, I watched a YouTube video that said fixing the Seed value was the solution, so I followed it exactly. I copied the seed number, put it in the parameter, and ran it. But to my surprise, even if the face angle changed just a little bit, it looked like a completely different person. It felt like I was just summoning a bunch of look-alike cousins. I almost threw my mouse at that point. I spent the whole weekend just glaring at my monitor, deeply understanding why people call this "grinding prompts like an old artisan."

Then, by chance, I learned about the Character Reference feature in a Discord community. I had been barking up the wrong tree entirely. The seed value is more suited for fixing the overall atmosphere or composition of an image. To maintain a specific person's face, I had to use a completely different parameter.

I immediately applied the \`--cref\` parameter. I picked one character image to be the standard, got the link, added two hyphens and \`cref\` at the very end of the prompt, and pasted the link. I also maximized the character weight parameter, \`--cw 100\`, and ran it. The result was truly shocking. The character that had been all over the place just moments ago suddenly appeared with the exact same face, just wearing different clothes. Even when I made them frown or smile, the facial features remained perfectly intact.

Of course, it's not perfect. Sometimes the fingers still come out bizarre, or the character feels a bit disconnected from the background. Still, compared to the days when I used to press the Enter key while praying like I was pulling a gacha, this is absolute heaven. Personally, I highly recommend against obsessing over seed values to maintain character consistency now. It is much better for your mental health to definitely pick one solid reference image and push through with the \`--cref\` feature.

One-line summary: The answer to fixing Midjourney characters is definitely the \`--cref\` parameter, not the seed value.
      `,
      ko: `
# 미드저니 일관된 캐릭터 만들기: 시드(Seed) 값에 집착하면 안 되는 이유

이거 처음에 안 돼서 꽤 헤맸습니다. 미드저니로 제가 기획 중인 웹소설 캐릭터 일러스트를 좀 뽑아보려고 했거든요. 남들은 뚝딱뚝딱 잘만 만들던데, 막상 제가 프롬프트를 치니까 매번 다른 사람이 튀어나오는 겁니다. 분명히 똑같이 '검은 머리에 파란 눈을 가진 20대 남성 기사'라고 쳤는데, 첫 번째 장에서는 서양 미남이 나오더니 두 번째 장에서는 갑자기 동양인 아저씨가 칼을 들고 서 있더라고요.

처음에는 시드(Seed) 값을 고정하면 된다는 유튜브 영상을 보고 그대로 따라 해봤습니다. 시드 번호를 복사해서 파라미터에 넣고 돌렸죠. 근데 웬걸, 얼굴 각도만 조금 바뀌어도 완전히 다른 사람처럼 보이는 겁니다. 마치 닮은꼴 사촌 형제들만 잔뜩 소환하는 기분이었어요. 진짜 이때 마우스 집어 던질 뻔했습니다. 프롬프트 깎는 노인이라는 말이 왜 나왔는지 뼈저리게 느끼면서 주말 내내 모니터만 노려봤네요. 이런 시행착오는 [로컬 AI 설치 과정](/blog/ollama-local-llm-installation-guide)에서 겪었던 기술적 한계와도 비슷하게 느껴졌습니다.

그러다 우연히 디스코드 커뮤니티에서 캐릭터 레퍼런스라는 기능을 알게 됐습니다. 제가 완전히 헛다리를 짚고 있었던 거죠. 시드 값은 전체적인 이미지의 분위기나 구도를 고정하는 데 더 적합한 거고, 특정 인물의 얼굴을 유지하려면 아예 다른 파라미터를 써야 했던 겁니다.

바로 \`--cref\` 파라미터를 적용해봤습니다. 기준이 될 캐릭터 이미지를 하나 딱 정해서 링크를 따고, 프롬프트 맨 뒤에 하이픈 두 개 긋고 cref를 붙인 다음 링크를 넣었죠. 그리고 캐릭터 가중치를 조절하는 cw 파라미터까지 100으로 꽉 채워서 돌려봤습니다. 결과는 진짜 충격적이었습니다. 아까까지 중구난방이던 캐릭터가 갑자기 똑같은 얼굴로 옷만 갈아입고 나오더라고요. 심지어 표정을 찡그리거나 웃게 만들어도 이목구비의 특징이 그대로 유지됐습니다.

또한, 생성된 이미지의 퀄리티를 높이기 위해 [최신 AI 도구들](/blog/remote-work-productivity-tools-2026)을 활용해 후보정 작업을 거치기도 했습니다. AI가 그린 그림을 그대로 쓰기보다는, 사람의 손길이 한 번 더 닿았을 때 비로소 완성도가 높아진다는 걸 깨달았죠.

물론 완벽하진 않습니다. 가끔 손가락이 기괴하게 나오거나 배경이랑 인물이 따로 노는 현상은 여전하더라고요. 그래도 예전처럼 매번 가챠 돌리듯이 기도하면서 엔터 키를 누르던 시절에 비하면 진짜 천국이 따로 없습니다. 개인적으로 이제 캐릭터 일관성 유지하려고 시드 값에 집착하는 건 완전 비추합니다. 무조건 레퍼런스 이미지 확실하게 하나 뽑아두고 cref 기능으로 밀어붙이는 게 정신 건강에 훨씬 좋습니다.

앞으로 AI 이미지를 활용해 콘텐츠를 만드실 분들은 이 기능을 꼭 마스터하시길 바랍니다. 시간 낭비를 획기적으로 줄여줄 거예요.

한 줄 요약: 미드저니 캐릭터 고정은 시드값이 아니라 무조건 \`--cref\` 파라미터가 정답입니다.
      `
    }
  },
  {
    id: '32',
    slug: 'notion-ai-database-automation-failure',
    title: {
      en: 'Why My Notion AI Automation Failed (And How I Fixed It)',
      ko: '노션 AI로 업무 자동화하려다 대차게 실패한 썰 (해결법 포함)'
    },
    description: {
      en: 'A real-world experience of failing to use Notion AI effectively and discovering the true power of database properties.',
      ko: '노션 AI 결제 후 빈 페이지에서 헤매던 실패담과, 데이터베이스 속성을 활용해 진짜 자동화를 이뤄낸 과정을 공유합니다.'
    },
    author: 'Aria Editorial Team',
    date: '2026-04-17T14:30:00Z',
    category: {
      en: 'Productivity',
      ko: '생산성'
    },
    image: 'https://picsum.photos/seed/notion-ai-fail/800/400',
    content: {
      en: `
# Why My Notion AI Automation Failed (And How I Fixed It)

I spent quite a bit of time stuck on this one too. Everyone around me was raving about how great Notion AI is, so I took the plunge and paid for the monthly subscription. I thought it would automatically handle everything from organizing meeting minutes to planning ideas, but when I actually used it, it kept giving me half-baked answers.

At first, I just threw a few keywords from a meeting onto a blank page and asked it to summarize. But it couldn't grasp the context at all. It completely missed the important agenda item that Team Leader A angrily instructed us on, and instead organized a passing joke as a core task. I was truly dumbfounded. I almost went straight to click the cancel subscription button because it felt like a waste of money. I felt a sense of shame wondering why I was paying for something worse than the free version of ChatGPT.

After fuming for a few days, it suddenly occurred to me that I might be misunderstanding the true purpose of Notion AI. It wasn't a chatbot showing off vast knowledge like ChatGPT; it was more like a chef cooking with the data inside my workspace. Because I was asking questions into thin air on a blank page, it was spouting nonsense.

So, I completely changed my approach. I built a rigorous database first. I created a meeting minutes template and embedded AI summary properties and AI action item extraction properties right into it. Then, after a meeting, I just copied and pasted the entire transcribed text of the recording into the body. And just like that, on the database list screen, the core summary and action items—who needs to do what by when—were automatically extracted for each meeting.

I literally got goosebumps seeing this. The organizing work that used to keep me tied up for an hour after a meeting was finished in just 5 seconds. Of course, you shouldn't blindly trust what the AI extracts and you do need to review it once. Sometimes it makes the mistake of assigning tasks to the wrong person.

Honestly, I highly recommend against paying for Notion AI just for simple writing or translation. If that's the case, it's better to just use other free AIs. However, if you use Notion databases quite heavily and want to automate by connecting the context between documents, there is no tool like this.

One-line summary: Notion AI truly proves its worth when used with filled database properties, not on a blank page.
      `,
      ko: `
# 노션 AI로 업무 자동화하려다 대차게 실패한 썰 (해결법 포함)

저도 여기서 막혀서 시간 좀 썼습니다. 노션 AI가 그렇게 좋다고 주변에서 난리길래, 큰맘 먹고 월 결제를 질렀거든요. 회의록 정리부터 아이디어 기획까지 알아서 다 해줄 줄 알았는데, 막상 써보니까 뭔가 나사 빠진 대답만 계속 나오는 겁니다.

처음에는 그냥 빈 페이지에 대충 회의했던 내용 키워드 몇 개 던져주고 요약해달라고 해봤습니다. 근데 얘가 문맥을 전혀 못 잡더라고요. A팀장이 화내면서 지시한 중요한 안건은 쏙 빼먹고, 지나가듯 농담한 내용을 핵심 과제랍시고 정리해놓는 걸 보고 진짜 어이가 없었습니다. 돈 아까워서 바로 구독 취소 버튼 누르러 갈 뻔했어요. 챗GPT 무료 버전보다 못한 걸 내가 왜 돈 주고 쓰고 있나 자괴감이 들더라고요. 이런 도구 활용의 미숙함은 [원격 근무 생산성 도구들](/blog/remote-work-productivity-tools-2026)을 처음 도입했을 때의 혼란과도 비슷했습니다.

며칠 씩씩대다가 문득 노션 AI의 진짜 용도를 제가 오해하고 있다는 생각이 들었습니다. 얘는 챗GPT처럼 방대한 지식을 뽐내는 챗봇이 아니라, 내 작업 공간 안에 있는 데이터를 요리하는 주방장 같은 거였어요. 빈 페이지에서 허공에 대고 질문을 하니까 엉뚱한 소리를 했던 겁니다.

그래서 방식을 완전히 바꿨습니다. 데이터베이스를 먼저 빡세게 구축했죠. 회의록 템플릿을 만들고, 그 안에 AI 요약 속성과 AI 후속 작업 추출 속성을 아예 박아버렸습니다. 그리고 회의가 끝나면 녹음한 텍스트 변환본을 그냥 본문에 통째로 복사해서 붙여넣기만 했어요. 그랬더니 데이터베이스 목록 화면에서 각 회의마다 핵심 요약이랑 누가 언제까지 뭘 해야 하는지 액션 아이템이 자동으로 쫙 뽑혀 나오는 겁니다.

이걸 보고 진짜 소름이 돋았습니다. 예전에는 회의 끝나고 한 시간씩 붙잡고 있던 정리 작업이 단 5초 만에 끝나버렸거든요. 특히 [디지털 노마드 라이프스타일](/blog/digital-nomad-lifestyle-and-productivity)을 유지하며 여러 프로젝트를 동시에 관리해야 하는 저에게는 구세주 같은 기능이었습니다.

물론 AI가 뽑아준 내용을 그대로 믿으면 안 되고 한 번씩 검수는 해줘야 합니다. 가끔 엉뚱한 사람한테 업무를 할당하는 헛발질을 하기도 하니까요. 하지만 전체적인 워크플로우를 자동화하는 데 이만한 효율을 내는 도구는 드뭅니다.

단순히 글짓기나 번역용으로 노션 AI를 결제하는 건 솔직히 비추합니다. 그럴 거면 그냥 다른 무료 AI 쓰는 게 낫습니다. 하지만 본인이 노션 데이터베이스를 꽤 헤비하게 쓰고 있고, 문서들 사이의 맥락을 연결해서 자동화하고 싶다면 이만한 도구가 없습니다.

한 줄 요약: 노션 AI는 빈 페이지가 아니라 꽉 찬 데이터베이스 속성으로 쓸 때 진짜 돈값을 합니다.
      `
    }
  },
  {
    id: '33',
    slug: 'ollama-local-llm-installation-guide',
    title: {
      en: 'My Mental Breakdown Installing a Local AI (Ollama) to Save Money',
      ko: '내 컴퓨터에 무료 AI(Ollama) 설치하다가 멘붕 온 후기'
    },
    description: {
      en: 'The struggles and realizations of trying to run a heavy local LLM on a personal laptop, and how to actually make it work.',
      ko: '챗GPT 구독료를 아끼려다 주말을 날려먹은 사연. 내 PC 사양에 맞는 로컬 AI(Ollama) 모델을 선택하고 세팅하는 현실적인 방법을 알려드립니다.'
    },
    author: 'Aria Editorial Team',
    date: '2026-04-18T09:00:00Z',
    category: {
      en: 'AI Tools',
      ko: 'AI 도구'
    },
    image: 'https://picsum.photos/seed/ollama-local-ai/800/400',
    content: {
      en: `
# My Mental Breakdown Installing a Local AI (Ollama) to Save Money

This doesn't work right away as easily as you might think. The monthly ChatGPT Plus subscription fee was secretly becoming a burden, so I ambitiously decided to install a free AI directly on my computer, only to end up blowing my entire weekend.

I saw on YouTube that if you just install a program called Ollama, you can use a super-smart AI for free even on a MacBook. So I downloaded it immediately, opened the terminal, and typed the command to install the Llama 3 70B model, which was said to have the best performance. It took a long time just to download, so I went and watched an episode on Netflix. Finally, the installation finished, and I said hello... but my computer suddenly sounded like an airplane taking off, and the screen just froze.

I was so freaked out, thinking my MacBook was going to explode, that I pressed and held the power button to force a shutdown. Even after rebooting and trying again, it took over a minute just to output a single letter. I frantically Googled to see what I had done wrong. It turned out my MacBook only has 8GB of RAM, but the 70B model is a monster that requires at least 64GB of RAM to run smoothly. I was trying to cram a dump truck engine into my compact car, so it was no wonder the computer was screaming.

In the end, holding back tears, I completely deleted that heavy model. Instead, I reinstalled the 8B model that fit my computer's specs. And because typing in the black terminal screen was too inconvenient, I also linked it with a Web UI program called AnythingLLM.

After finishing that setup and talking to it again, this time the answers poured out at a speed comparable to ChatGPT. It even works when disconnected from the internet, making it absolutely perfect for summarizing internal company documents without worrying about security. Of course, it can't handle incredibly complex reasoning like the 70B model, but it does more than enough for everyday coding questions or drafting emails.

I absolutely recommend against just downloading the model with the highest parameter count without knowing your own computer's specs. It's a shortcut to wasting time and reducing your computer's lifespan. The most stress-free way to enjoy local AI is to choose a reasonably compromised model that fits your RAM capacity and layer a pretty UI program on top of it.

One-line summary: When installing a local AI, don't be greedy; start with a lightweight model that fits your computer's RAM capacity.
      `,
      ko: `
# 내 컴퓨터에 무료 AI(Ollama) 설치하다가 멘붕 온 후기

이거 생각보다 바로 안 됩니다. 매달 나가는 챗GPT 플러스 구독료가 은근히 부담돼서, 내 컴퓨터에 직접 무료 AI를 설치해 보겠다고 호기롭게 덤볐다가 주말을 통째로 날려먹었습니다.

유튜브 보니까 올라마(Ollama)라는 프로그램만 깔면 맥북에서도 엄청 똑똑한 AI를 공짜로 쓸 수 있다고 하더라고요. 그래서 당장 다운받고 터미널 열어서 가장 성능이 좋다는 라마 3 70B 모델을 설치하라고 명령어를 쳤습니다. 다운로드하는 데만 한참 걸리길래 넷플릭스 한 편 보고 왔죠. 드디어 설치가 끝나고 안녕이라고 인사를 건넸는데... 컴퓨터가 갑자기 비행기 이륙하는 소리를 내더니 화면이 그대로 멈춰버렸습니다.

진짜 맥북 터지는 줄 알고 식겁해서 전원 버튼 꾹 눌러서 강제 종료했습니다. 재부팅하고 나서 다시 해봐도 글자 하나 출력하는 데 1분이 넘게 걸리더라고요. 내가 뭘 잘못했나 싶어서 구글링을 미친 듯이 해봤습니다. 알고 보니 제 맥북 램이 8기가밖에 안 되는데, 70B 모델은 최소 64기가 램은 있어야 원활하게 돌아가는 괴물이었던 겁니다. 제 경차에 덤프트럭 엔진을 욱여넣으려고 했으니 컴퓨터가 비명을 지를 수밖에요. 이런 하드웨어의 한계는 [미드저니의 고사양 작업](/blog/midjourney-consistent-character-cref)을 할 때와는 또 다른 차원의 고통이었습니다.

결국 눈물을 머금고 그 무거운 모델을 싹 지워버렸습니다. 대신 제 컴퓨터 사양에 맞는 8B 모델로 다시 설치했죠. 그리고 터미널 까만 화면에서 타자 치는 게 너무 불편해서, 애니띵LLM(AnythingLLM)이라는 웹 UI 프로그램도 연동해줬습니다.

그렇게 세팅을 끝내고 다시 말을 걸어보니, 이번에는 챗GPT 못지않은 속도로 답변이 쫙쫙 뽑혀 나오더라고요. 심지어 인터넷 연결을 끊어도 작동하니까 보안 걱정 없이 회사 내부 문서 요약시키는 데 아주 찰떡이었습니다. 특히 [개인 보안](/blog/cybersecurity-for-individuals)이 중요한 작업을 할 때 로컬 AI는 최고의 선택지라는 걸 깨달았습니다.

물론 70B 모델만큼 엄청나게 복잡한 추론을 해내진 못하지만, 일상적인 코딩 질문이나 이메일 초안 작성 정도는 차고 넘치게 잘 해냅니다.

본인 컴퓨터 사양도 모르고 무조건 파라미터 수 높은 모델부터 다운받는 건 절대 비추합니다. 시간 낭비에 컴퓨터 수명만 깎아먹는 지름길이에요. 자기 램 용량에 맞춰서 적당히 타협한 모델을 고르고, 예쁜 UI 프로그램 하나 얹어서 쓰는 게 로컬 AI를 가장 스트레스 없이 즐기는 방법입니다.

한 줄 요약: 로컬 AI 설치할 때는 욕심부리지 말고 내 컴퓨터 램 용량에 맞는 가벼운 모델부터 시작하세요.
      `
    }
  }
];
