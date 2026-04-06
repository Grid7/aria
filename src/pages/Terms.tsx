import React from 'react';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const Terms: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isKo = i18n.language === 'ko';

  return (
    <div className="bg-paper min-h-screen pb-32">
      <SEO 
        title={isKo ? '이용약관' : 'Terms of Service'} 
        description={isKo ? 'Aria 인사이트 이용약관입니다.' : 'Terms of Service for Aria Insights.'} 
      />
      
      <header className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-ink leading-[1.1]">
              {isKo ? '이용약관' : 'Terms of Service'}
            </h1>
            <p className="text-xl text-stone-500 font-light">
              {isKo ? '최종 수정일: 2026년 4월 6일' : 'Last Updated: April 6, 2026'}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-stone-100 prose prose-stone max-w-none"
        >
          {isKo ? (
            <>
              <h2>1. 목적</h2>
              <p>본 약관은 Aria 인사이트(이하 "회사")가 제공하는 서비스의 이용과 관련하여 회사와 사용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
              
              <h2>2. 서비스의 제공 및 변경</h2>
              <p>회사는 사용자에게 AI 및 기술 관련 정보, 블로그 콘텐츠, 뉴스레터 등의 서비스를 제공합니다. 회사는 필요한 경우 서비스의 내용을 변경할 수 있으며, 이 경우 변경 내용을 사전에 공지합니다.</p>
              
              <h2>3. 저작권 및 지적재산권</h2>
              <p>회사가 제공하는 모든 콘텐츠(텍스트, 이미지, 영상 등)에 대한 저작권 및 지적재산권은 회사에 귀속됩니다. 사용자는 회사의 사전 서면 동의 없이 콘텐츠를 무단으로 복제, 배포, 수정할 수 없습니다.</p>
              
              <h2>4. 면책 조항</h2>
              <p>회사는 제공하는 정보의 정확성과 신뢰성을 위해 최선을 다하지만, 그 완벽성을 보장하지는 않습니다. 사용자는 본 사이트의 정보를 활용함에 있어 전적으로 본인의 책임 하에 진행해야 하며, 회사는 이로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.</p>
              
              <h2>5. 준거법 및 관할법원</h2>
              <p>본 약관의 해석 및 회사와 사용자 간의 분쟁에 대해서는 대한민국 법률을 적용하며, 분쟁 발생 시 서울중앙지방법원을 관할법원으로 합니다.</p>
            </>
          ) : (
            <>
              <h2>1. Purpose</h2>
              <p>These Terms of Service ("Terms") govern your access to and use of the services provided by Aria Insights ("Company"). By accessing our website, you agree to be bound by these Terms.</p>
              
              <h2>2. Services Provided</h2>
              <p>The Company provides information, blog content, and newsletters related to AI and technology. We reserve the right to modify or discontinue any part of our services at any time without prior notice.</p>
              
              <h2>3. Intellectual Property</h2>
              <p>All content provided on this website, including text, images, and videos, is the intellectual property of the Company. You may not reproduce, distribute, or modify any content without our prior written consent.</p>
              
              <h2>4. Disclaimer of Warranties</h2>
              <p>While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding the completeness or reliability of the content. Your use of the information on this site is strictly at your own risk.</p>
              
              <h2>5. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Seoul Central District Court.</p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};
