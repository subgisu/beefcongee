/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Leaf, Clock, Thermometer, Award, ChevronRight } from 'lucide-react';

// Reusable animation wrapper
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);


const LaurelLeft = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#C2B59B] ${className}`}>
    <path d="M35 95 C15 75, 10 35, 35 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M 25 85 Q 10 85 15 75 Q 25 75 25 85" fill="currentColor"/>
    <path d="M 18 70 Q 3 70 8 60 Q 18 60 18 70" fill="currentColor"/>
    <path d="M 14 55 Q -1 55 4 45 Q 14 45 14 55" fill="currentColor"/>
    <path d="M 13 40 Q -2 40 3 30 Q 13 30 13 40" fill="currentColor"/>
    <path d="M 16 25 Q 1 25 6 15 Q 16 15 16 25" fill="currentColor"/>
    <path d="M 26 10 Q 11 10 16 0 Q 26 0 26 10" fill="currentColor"/>
  </svg>
);

const LaurelRight = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#C2B59B] ${className}`}>
    <path d="M5 95 C25 75, 30 35, 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M 15 85 Q 30 85 25 75 Q 15 75 15 85" fill="currentColor"/>
    <path d="M 22 70 Q 37 70 32 60 Q 22 60 22 70" fill="currentColor"/>
    <path d="M 26 55 Q 41 55 36 45 Q 26 45 26 55" fill="currentColor"/>
    <path d="M 27 40 Q 42 40 37 30 Q 27 30 27 40" fill="currentColor"/>
    <path d="M 24 25 Q 39 25 34 15 Q 24 15 24 25" fill="currentColor"/>
    <path d="M 14 10 Q 29 10 24 0 Q 14 0 14 10" fill="currentColor"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F3EF] font-sans text-[#222]">
      {/* Header / Hero */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden flex flex-col items-center text-center">
        <FadeIn>
          <div className="mb-6">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#5A6B47] tracking-widest">치밀</h1>
            <p className="text-xs tracking-[0.3em] text-gray-400 mt-2 uppercase">Chimil</p>
          </div>
          <p className="text-gray-500 mb-4 font-medium tracking-wide">보관은 간편하게, 정성은 그대로</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#222] leading-[1.3] mb-8 text-balance">
            우리 가족을 위한<br />100% 한우의 기적
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 font-serif">
            치밀 프리미엄 한우 소고기죽
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto relative">
          <div className="aspect-[4/3] md:aspect-[21/9] rounded-t-[100px] md:rounded-t-[200px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Hanwoo Beef Porridge" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#F4F3EF] py-16 px-4 text-center relative">
        <FadeIn>
          {/* Top Line */}
          <div className="w-px h-12 bg-[#8C7A6B] mx-auto mb-6 opacity-40"></div>
          
          {/* Naver Store */}
          <div className="inline-flex items-center justify-center text-[#5A6B47] text-lg font-medium mb-16">
            <span className="bg-[#03C75A] text-white w-5 h-5 flex items-center justify-center font-black text-[10px] mr-2 rounded-sm">N</span> 
            네이버 스마트스토어
          </div>
          
          <div className="flex flex-col items-center gap-16">
            {/* Stat 1 */}
            <div className="relative flex items-center justify-between w-[280px] md:w-[320px] mx-auto">
              <LaurelLeft />
              <div className="flex flex-col items-center z-10 whitespace-nowrap">
                <p className="text-[#8C7A6B] mb-2 font-bold tracking-wide">누적판매량</p>
                <p className="font-serif text-5xl md:text-6xl font-bold text-[#2B4C28] tracking-tighter">
                  41,000<span className="text-3xl md:text-4xl ml-1 font-sans font-medium tracking-normal">개</span>
                </p>
              </div>
              <LaurelRight />
            </div>

            {/* Stat 2 */}
            <div className="relative flex items-center justify-between w-[280px] md:w-[320px] mx-auto">
              <LaurelLeft />
              <div className="flex flex-col items-center z-10 whitespace-nowrap">
                <p className="text-[#8C7A6B] mb-2 font-bold tracking-wide">재구매율</p>
                <p className="font-serif text-5xl md:text-6xl font-bold text-[#2B4C28] tracking-tighter">
                  31.6<span className="text-3xl md:text-4xl ml-1 font-sans font-medium tracking-normal">% 이상</span>
                </p>
              </div>
              <LaurelRight />
            </div>

            {/* Stat 3 (1위) */}
            <div className="relative flex items-center justify-between w-[340px] md:w-[400px] mx-auto mt-4">
              <LaurelLeft className="scale-110 md:scale-125 origin-right" />
              <div className="flex items-center justify-center gap-4 md:gap-6 z-10 whitespace-nowrap">
                <div className="text-left text-[#2B4C28] font-bold text-base md:text-lg leading-relaxed">
                  <p>목초육 사골</p>
                  <p>목초육 사골국</p>
                  <p>유기농 사골국</p>
                </div>
                <p className="font-serif text-7xl md:text-9xl font-bold text-[#2B4C28] tracking-tighter">
                  1<span className="text-5xl md:text-7xl font-sans font-medium tracking-normal">위</span>
                </p>
              </div>
              <LaurelRight className="scale-110 md:scale-125 origin-left" />
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-px h-16 bg-[#8C7A6B] mx-auto mt-20 mb-12 opacity-40"></div>

          {/* Reviews */}
          <div className="flex flex-col items-center gap-6 px-4">
            {/* Review 1 */}
            <div className="bg-white border border-[#E2DED5] rounded-[50px] py-8 px-8 md:px-16 max-w-2xl w-full shadow-sm">
              <p className="text-[#222] text-base md:text-lg leading-relaxed mb-4 font-medium">
                냉동실에 자리가 없어서 더 못채워서 아쉽지만<br />
                <span className="text-[#3A4A29] font-bold">알뜰히 잘 먹어 볼께요</span> 고민 없이 믿고 먹을수 있는<br />
                제품 만들어 주셔서 감사드립니다.
              </p>
              <div className="flex items-center justify-center gap-3 text-sm">
                <div className="text-[#8C7A6B] tracking-widest text-lg">★★★★★</div>
                <span className="text-[#D5D0C5]">|</span>
                <span className="text-gray-500 font-medium">pi****</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#E2DED5] rounded-[50px] py-8 px-8 md:px-16 max-w-2xl w-full shadow-sm">
              <p className="text-[#222] text-base md:text-lg leading-relaxed mb-4 font-medium">
                깔끔하고 기름기 많이 없어 넘 좋아요<br />
                <span className="text-[#3A4A29] font-bold">냉동실 자리있으면 20개 쟁일텐데요!</span>
              </p>
              <div className="flex items-center justify-center gap-3 text-sm">
                <div className="text-[#8C7A6B] tracking-widest text-lg">★★★★★</div>
                <span className="text-[#D5D0C5]">|</span>
                <span className="text-gray-500 font-medium">o0oa***</span>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="w-px h-16 bg-[#8C7A6B] mx-auto mt-12 mb-12 opacity-40"></div>
          
          {/* Transition Text */}
          <div className="mb-8">
            <p className="text-gray-600 mb-1 font-medium">치밀은 단순히 1위에 머무르지 않습니다</p>
            <p className="text-gray-600 mb-4 font-medium">고객님의 불편 사항에 귀 기울여,</p>
            <p className="font-serif text-2xl md:text-4xl font-bold text-[#222] leading-tight mt-6">
              기존 냉동에서 <span className="text-[#3A4A29]">실온보관 사골국</span>을<br/>신규 출시하였습니다!
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Feature 1: Ingredients */}
      <section 
        className="relative py-32 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/bg-ingredients.jpg")' }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60 backdrop-blur-[2px]"></div>
        
        <FadeIn className="relative z-10">
          <div className="inline-block border border-gray-300/80 rounded-full px-6 py-2 mb-8 bg-white/90 shadow-sm backdrop-blur-sm">
            <span className="font-serif text-gray-800 font-bold tracking-widest">Point. 01</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#222] mb-6 leading-tight text-balance drop-shadow-sm">
            100% 한우 육수와 유기농 쌀
          </h3>
          <p className="text-gray-800 text-lg mb-16 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            자연에서 건강하게 자란 100% 한우와 깨끗한 유기농 쌀만을 사용합니다.<br className="hidden md:block"/>
            우리 가족이 먹는다는 생각으로 타협 없이 좋은 재료만 고집합니다.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
            {/* Cards for ingredients */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg flex-1 border border-white/50">
              <div className="w-16 h-16 bg-[#F4F3EF] rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/beefcongee/meat.png" alt="100% 한우" className="w-8 h-8 object-contain" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-3 text-[#222]">100% 한우</h4>
              <p className="text-gray-700 text-sm font-medium">깊고 진한 맛을 내는<br/>최상급 한우 육수</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg flex-1 border border-white/50">
              <div className="w-16 h-16 bg-[#F4F3EF] rounded-full flex items-center justify-center mx-auto mb-6 text-[#5A6B47]">
                <Leaf size={32} />
              </div>
              <h4 className="font-serif text-xl font-bold mb-3 text-[#222]">유기농 쌀</h4>
              <p className="text-gray-700 text-sm font-medium">농약 없이 건강하게 재배한<br/>국내산 유기농 쌀</p>
            </div>
            <div className="bg-[#5A6B47]/95 backdrop-blur-md text-white p-8 rounded-3xl shadow-lg flex-1 border border-[#5A6B47]/50">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="font-serif text-xl font-bold mb-3">ALL FREE</h4>
              <p className="text-white/90 text-sm font-medium">항생제, 성장촉진제<br/>완전 무첨가</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Feature 2: Process */}
      <section className="bg-white py-24 px-4 text-center">
        <FadeIn>
          <div className="inline-block border border-gray-300 rounded-full px-6 py-2 mb-8 bg-[#F4F3EF] shadow-sm">
            <span className="font-serif text-gray-600 font-medium tracking-widest">Point. 02</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#222] mb-6 leading-tight text-balance">
            숟가락이 먼저 아는 농도<br/>
한 수저에 담긴 하루의 깊이
          </h3>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            하루 종일 불 앞을 지키며 사골의 깊은 맛을 끌어냈습니다. <br className="hidden md:block"/>
            한우 소고기와 정성만으로 완성한 이 죽은, 끓여 먹는 순간 갓 지은 듯한 온기를 전합니다.
          </p>

          <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="/beefcongee/riceboile.png"  
              alt="Premium Hanwoo Beef Porridge on wooden table" 
              className="w-full h-[400px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-black text-center">
                <p className="font-serif text-5xl md:text-7xl font-bold mb-4">24<span className="text-3xl md:text-4xl font-sans font-normal">시간</span></p>
                <p className="text-lg md:text-xl font-medium tracking-wide">가장 맛있고 영양이 높은 최적의 시간</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Feature 3: Safety */}
      <section className="py-24 px-4 text-center bg-[#F4F3EF]">
        <FadeIn>
          <div className="inline-block border border-gray-300 rounded-full px-6 py-2 mb-8 bg-white shadow-sm">
            <span className="font-serif text-gray-600 font-medium tracking-widest">Point. 03</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#222] mb-6 leading-tight text-balance">
            첨가물 ZERO!<br/>오직 건강함만 담았습니다
          </h3>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            보존료, 착향료, 감미료 등 인공 첨가물은 일절 넣지 않았습니다.<br className="hidden md:block"/>
            HACCP 인증 시설에서 3중 안전 공정으로 깨끗하게 만듭니다.
          </p>

          <div className="flex justify-center mb-16">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <ShieldCheck className="text-blue-600" size={32} />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-bold">식품의약품안전처</p>
                <p className="font-bold text-xl text-[#222]">HACCP 인증</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h4 className="font-serif text-2xl font-bold mb-10 text-[#5A6B47]">치밀한 3중 안전 공정</h4>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
              
              {[
                { step: 1, title: "금속 검출기", desc: "이물질 완벽 차단" },
                { step: 2, title: "멸균 공정", desc: "고온 고압 살균" },
                { step: 3, title: "안전 파우치", desc: "환경호르몬 ZERO" }
              ].map((item) => (
                <div key={item.step} className="bg-white w-full md:w-1/3 flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#F4F3EF] rounded-full flex items-center justify-center font-serif font-bold text-[#5A6B47] mb-4 border-4 border-white shadow-sm">
                    {item.step}
                  </div>
                  <h5 className="font-bold text-lg mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Convenience */}
      <section className="bg-white py-24 px-4 text-center">
        <FadeIn>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#222] mb-6 leading-tight text-balance">
            냉동의 번거로움 대신<br/>간편함을 더한 실온 보관
          </h3>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            냉동실 공간 차지할 걱정 없이, 해동할 필요 없이!<br className="hidden md:block"/>
            특수 멸균 공법으로 실온에서도 맛과 영양을 그대로 유지합니다.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F3EF] rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#5A6B47] shadow-sm">
                <Thermometer size={32} />
              </div>
              <h4 className="font-bold text-xl mb-3">해동 없이 바로</h4>
              <p className="text-gray-600">끓는 물에 3분이면<br/>갓 끓인 듯한 맛</p>
            </div>
            <div className="bg-[#F4F3EF] rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#5A6B47] shadow-sm">
                <Check size={32} />
              </div>
              <h4 className="font-bold text-xl mb-3">공간 절약</h4>
              <p className="text-gray-600">비좁은 냉동실 대신<br/>팬트리에 깔끔하게 보관</p>
            </div>
            <div className="bg-[#F4F3EF] rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#5A6B47] shadow-sm">
                <Clock size={32} />
              </div>
              <h4 className="font-bold text-xl mb-3">영양 그대로</h4>
              <p className="text-gray-600">얼렸다 녹이는 과정이 없어<br/>식감과 영양소 보존</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Usage & Footer */}
      <section className="bg-[#222] text-white py-24 px-4 text-center">
        <FadeIn>
          <h3 className="font-serif text-3xl md:text-5xl font-bold mb-16 leading-tight text-balance">
            다양한 요리의<br/>베이스로도 활용해요
          </h3>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { title: "아이를 위한 이유식", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" },
              { title: "기력 회복 어르신", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" },
              { title: "직장인 든든한 한 끼", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" },
              { title: "깊은 맛의 전골 베이스", img: "https://images.unsplash.com/photo-1555126634-ae231a4a8c14?q=80&w=2070&auto=format&fit=crop" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-white/10 group-hover:border-[#5A6B47] transition-colors duration-300">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif text-lg font-medium">{item.title}</h4>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-16 flex flex-col items-center">
            <h2 className="font-serif text-4xl font-bold text-[#5A6B47] tracking-widest mb-6">치밀</h2>
            <p className="text-gray-400 mb-8 font-serif">우리 가족을 위한 100% 한우의 기적</p>
            <button className="bg-[#5A6B47] hover:bg-[#4A5839] text-white px-10 py-4 rounded-full font-bold text-lg transition-colors flex items-center gap-2">
              구매하기 <ChevronRight size={20} />
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
