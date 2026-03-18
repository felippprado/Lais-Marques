/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Brain, 
  Baby, 
  Globe,
  Quote,
  Menu,
  X
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = ({ text, author }: { text: string, author: string }) => (
  <div className="glass-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 flex flex-col gap-4 group">
    <Quote className="text-amethyst/30 w-10 h-10 group-hover:text-amethyst/60 transition-colors" />
    <p className="text-lg italic leading-relaxed text-ink/80 font-serif">"{text}"</p>
    <div className="mt-auto pt-4 border-t border-amethyst/10">
      <span className="font-semibold text-amethyst tracking-wider uppercase text-xs">— {author}</span>
    </div>
  </div>
);

const DifferentialCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-lavender/20 hover:-translate-y-2 transition-transform duration-500">
    <div className="w-12 h-12 bg-lavender/20 rounded-2xl flex items-center justify-center mb-6 text-amethyst">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-serif mb-3 text-ink">{title}</h3>
    <p className="text-ink/70 leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    // Hero Text Reveal
    if (heroTextRef.current) {
      const chars = gsap.utils.toArray('.char');
      
      gsap.from(chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });
    }

    // Fade in sections
    gsap.utils.toArray('.reveal').forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    // Parallax images
    gsap.utils.toArray('.parallax-img').forEach((img: any) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -30,
        ease: 'none'
      });
    });
  }, { scope: containerRef });

  const handleWhatsApp = useCallback(() => {
    window.open('https://wa.me/5535992527310', '_blank');
  }, []);

  return (
    <div ref={containerRef} className="mesh-gradient min-h-screen selection:bg-lavender/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 px-4 sm:px-6 md:px-12 bg-white/80 backdrop-blur-lg shadow-sm border-b border-lavender/10' 
          : 'py-5 px-4 sm:px-6 md:px-12 bg-transparent'
      } flex justify-between items-center`}>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative group shrink-0">
            <div className={`rounded-full overflow-hidden border-2 border-amethyst/20 group-hover:border-amethyst transition-all duration-500 ${
              isScrolled ? 'w-9 h-9 md:w-10 md:h-10' : 'w-11 h-11 md:w-12 md:h-12'
            }`}>
              <img 
                src="https://drive.google.com/thumbnail?id=1DjtfX2-IZVhhfkjEFMYzfGc-NKlTXFtZ&sz=w100" 
                alt="Lais Marques"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className={`font-serif font-bold text-amethyst tracking-tight leading-none transition-all duration-500 ${
              isScrolled ? 'text-base md:text-xl' : 'text-lg md:text-2xl'
            }`}>
              Lais Marques
            </div>
            <div className="flex items-center gap-1 md:gap-2 mt-1">
              <span className="text-ink/40 font-sans text-[7px] md:text-[9px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold whitespace-nowrap">Psicóloga Em Alfenas</span>
              <span className="hidden sm:inline w-0.5 h-0.5 bg-amethyst/30 rounded-full" />
              <span className="hidden sm:inline text-ink/40 font-sans text-[7px] md:text-[9px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold whitespace-nowrap">CRP 04/70.722</span>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold text-ink/60">
          <a href="#sobre" className="hover:text-amethyst transition-all border-b border-transparent hover:border-amethyst">Sobre</a>
          <a href="#diferenciais" className="hover:text-amethyst transition-all border-b border-transparent hover:border-amethyst">Abordagem</a>
          <a href="#depoimentos" className="hover:text-amethyst transition-all border-b border-transparent hover:border-amethyst">Depoimentos</a>
          <a href="#contato" className="hover:text-amethyst transition-all border-b border-transparent hover:border-amethyst">Contato</a>
        </div>

        <div className="flex items-center gap-1.5 md:gap-4">
          <a 
            href="https://instagram.com/psilaismarques" 
            target="_blank" 
            className="hidden sm:flex w-9 h-9 md:w-10 md:h-10 items-center justify-center rounded-full border border-lavender/30 text-amethyst hover:bg-lavender/10 transition-all"
            title="Instagram"
          >
            <Instagram size={16} />
          </a>
          <button 
            onClick={handleWhatsApp}
            className="bg-amethyst text-white px-3.5 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-amethyst/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amethyst/20 flex items-center gap-2 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Agendar</span>
            <MessageCircle size={16} />
          </button>
          
          <button 
            className="lg:hidden w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-amethyst hover:bg-lavender/10 rounded-full transition-all"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <div className="font-serif font-bold text-2xl text-amethyst">Menu</div>
            <button 
              onClick={toggleMenu}
              className="w-12 h-12 flex items-center justify-center text-amethyst bg-lavender/10 rounded-full"
            >
              <X size={28} />
            </button>
          </div>
          
          <div className="flex flex-col gap-8 text-2xl font-serif text-ink">
            <a href="#sobre" onClick={toggleMenu} className="hover:text-amethyst transition-colors">Sobre</a>
            <a href="#diferenciais" onClick={toggleMenu} className="hover:text-amethyst transition-colors">Abordagem</a>
            <a href="#depoimentos" onClick={toggleMenu} className="hover:text-amethyst transition-colors">Depoimentos</a>
            <a href="#contato" onClick={toggleMenu} className="hover:text-amethyst transition-colors">Contato</a>
          </div>
          
          <div className="mt-auto pt-12 border-t border-lavender/20">
            <div className="flex gap-6 mb-8">
              <a href="https://instagram.com/psilaismarques" target="_blank" className="text-amethyst">
                <Instagram size={24} />
              </a>
              <a href="#" onClick={handleWhatsApp} className="text-amethyst">
                <MessageCircle size={24} />
              </a>
            </div>
            <button 
              onClick={() => { handleWhatsApp(); toggleMenu(); }}
              className="w-full bg-amethyst text-white py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-amethyst/20"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-8">
              <div className="flex items-center gap-3 text-amethyst font-semibold tracking-[0.3em] text-[10px] uppercase reveal">
                <span className="w-8 h-[1px] bg-amethyst" />
                Psicologia Clínica & Especializada
              </div>
              
              <h1 
                ref={heroTextRef}
                className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] text-ink tracking-tighter"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
              >
                <span className="char inline-block">U</span>
                <span className="char inline-block">m</span>
                <span className="char inline-block">&nbsp;</span>
                <span className="char inline-block">e</span>
                <span className="char inline-block">s</span>
                <span className="char inline-block">p</span>
                <span className="char inline-block">a</span>
                <span className="char inline-block">ç</span>
                <span className="char inline-block">o</span>
                <br />
                <span className="italic text-amethyst">
                  <span className="char inline-block">s</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">g</span>
                  <span className="char inline-block">u</span>
                  <span className="char inline-block">r</span>
                  <span className="char inline-block">o</span>
                </span>
                <span className="char inline-block">&nbsp;</span>
                <span className="char inline-block">p</span>
                <span className="char inline-block">a</span>
                <span className="char inline-block">r</span>
                <span className="char inline-block">a</span>
                <br />
                <span className="char inline-block">f</span>
                <span className="char inline-block">l</span>
                <span className="char inline-block">o</span>
                <span className="char inline-block">r</span>
                <span className="char inline-block">e</span>
                <span className="char inline-block">s</span>
                <span className="char inline-block">c</span>
                <span className="char inline-block">e</span>
                <span className="char inline-block">r</span>
                <span className="char inline-block">.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-ink/60 max-w-xl leading-relaxed font-light reveal">
                Apoio especializado para Ansiedade, TEA e Orientação Parental. 
                Transforme sua jornada emocional com acolhimento e ciência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 reveal">
                <button 
                  onClick={handleWhatsApp}
                  className="group relative bg-amethyst text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:shadow-2xl hover:shadow-amethyst/40 flex items-center justify-center gap-3"
                >
                  Iniciar Terapia <MessageCircle size={18} />
                </button>
                <a 
                  href="#sobre"
                  className="px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest border border-lavender/50 text-ink/70 hover:bg-lavender/5 transition-all flex items-center justify-center gap-3"
                >
                  Conhecer Mais
                </a>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-lavender/20 reveal">
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-amethyst">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-ink/40">Anos de Prática</span>
                </div>
                <div className="w-[1px] h-8 bg-lavender/20" />
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-amethyst">500+</span>
                  <span className="text-[10px] uppercase tracking-widest text-ink/40">Vidas Transformadas</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative reveal flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Main Image Container */}
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1JUhsusfVft-W9X7FOOUTnWkAOQZ8yM0A&sz=w1000" 
                    alt="Psicóloga Lais Marques"
                    className="w-full h-full object-cover parallax-img scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex flex-col items-center gap-1 border border-lavender/20 animate-bounce-slow">
                  <CheckCircle2 className="text-emerald-500" size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Especialista</span>
                  <span className="text-xs font-serif font-bold text-ink">TCC & TEA</span>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-amethyst/10 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/2 -right-20 w-40 h-40 bg-lavender/20 rounded-full blur-3xl -z-10" />
                
                {/* Abstract shape */}
                <svg className="absolute -bottom-10 -left-10 w-32 h-32 text-amethyst/10 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.6,-0.9C84,13.9,77.5,27.8,69.2,40.2C60.9,52.6,50.8,63.5,38.4,70.8C26,78.1,13,81.8,-0.8,83.1C-14.5,84.4,-29,83.3,-42.4,77.4C-55.8,71.5,-68.1,60.8,-76.4,47.4C-84.7,34,-89,17,-88.6,0.2C-88.2,-16.6,-83.1,-33.2,-73.8,-46.6C-64.5,-60,-51,-70.2,-36.6,-76.9C-22.2,-83.6,-6.9,-86.8,8.2,-82C23.3,-77.2,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section id="diferenciais" className="py-24 px-6 md:px-12 lg:px-24 bg-white/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20 reveal">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Cuidado especializado para cada fase da vida</h2>
              <p className="text-lg text-ink/60 leading-relaxed">
                Utilizando a Terapia Cognitivo-Comportamental (TCC) para proporcionar resultados concretos e acolhimento humano.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <DifferentialCard 
                  icon={Brain}
                  title="Abordagem TCC"
                  description="Foco em padrões de pensamento e comportamento para mudanças duradouras e eficazes."
                />
              </div>
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <DifferentialCard 
                  icon={Baby}
                  title="TEA (Autismo)"
                  description="Especialista no acompanhamento de crianças e adolescentes no espectro autista."
                />
              </div>
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <DifferentialCard 
                  icon={Users}
                  title="Orientação de Pais"
                  description="Suporte estratégico para famílias lidarem com desafios do desenvolvimento infantil."
                />
              </div>
              <div className="reveal" style={{ transitionDelay: '0.4s' }}>
                <DifferentialCard 
                  icon={Globe}
                  title="Online & Presencial"
                  description="Flexibilidade para seu atendimento, onde quer que você esteja, com a mesma qualidade."
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative reveal">
              <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
                <img 
                  src="https://drive.google.com/thumbnail?id=1aGcI81l03r_hSVpLp8r2WZjhgjUN6yw_&sz=w1000" 
                  alt="Lais Marques em seu consultório"
                  className="w-full h-full object-cover parallax-img"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amethyst text-white p-8 rounded-3xl shadow-xl">
                <span className="block text-4xl font-serif font-bold mb-1">CRP</span>
                <span className="text-xl tracking-widest opacity-90">04/70.722</span>
              </div>
            </div>
            <div className="reveal">
              <span className="text-amethyst font-semibold uppercase tracking-[0.3em] text-sm mb-4 block">A Profissional</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Lais Marques</h2>
              <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
                <p>
                  Com uma trajetória dedicada à saúde mental, acredito que a terapia é um processo de florescimento mútuo. Minha atuação em Alfenas e no ambiente digital é pautada pela ética, empatia e evidência científica.
                </p>
                <p>
                  Especialista em Terapia Cognitivo-Comportamental e Psicologia Infantil, busco traduzir conceitos técnicos em ferramentas práticas para que meus pacientes conquistem autonomia e bem-estar emocional.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-amethyst" size={20} />
                    <span className="text-sm font-medium">Especialista TCC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-amethyst" size={20} />
                    <span className="text-sm font-medium">Foco em Autismo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-amethyst" size={20} />
                    <span className="text-sm font-medium">Psicologia Infantil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-amethyst" size={20} />
                    <span className="text-sm font-medium">Atendimento Humanizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-24 px-6 md:px-12 lg:px-24 bg-lavender/10">
          <div className="container mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Vozes de quem confia</h2>
              <p className="text-ink/60 uppercase tracking-widest text-sm">Depoimentos reais • Estilo Editorial</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <TestimonialCard 
                  author="Emylli Capatti"
                  text="Laís cria um espaço seguro, onde dá pra falar sem medo... uma inspiração."
                />
              </div>
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <TestimonialCard 
                  author="Viviane Almeida"
                  text="Excelente profissional, um doce de pessoa. Ajudou muito meu filho."
                />
              </div>
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <TestimonialCard 
                  author="Felipe de Oliveira"
                  text="Cada pequena conquista tem um valor enorme pra nossa família."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Map */}
        <section id="contato" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Vamos conversar?</h2>
                <p className="text-lg text-ink/70 mb-12">
                  Seja para tirar uma dúvida ou agendar sua primeira sessão, estou aqui para te ouvir.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center text-amethyst shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Localização</h4>
                      <p className="text-ink/70">R. Tiradentes, 1594 — Alfenas, MG</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center text-amethyst shrink-0">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Instagram</h4>
                      <a href="https://instagram.com/psilaismarques" target="_blank" className="text-amethyst hover:underline">@psilaismarques</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center text-amethyst shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                      <p className="text-ink/70">(35) 99252-7310</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-paper rounded-3xl border border-lavender/30">
                  <h4 className="text-xl font-serif mb-4 italic">"O autoconhecimento é a chave para a liberdade emocional."</h4>
                  <p className="text-sm text-ink/50 uppercase tracking-widest">— Lais Marques</p>
                </div>
              </div>
              
              <div className="reveal h-[500px] rounded-[40px] overflow-hidden shadow-inner border border-lavender/20 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.23456789!2d-45.94!3d-21.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzEyLjAiUyA0NcKwNTYnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
                  className="w-full h-full border-0 grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-lavender/20 text-center">
        <p className="text-ink/40 text-sm tracking-widest uppercase">
          © 2026 Lais Marques Psicologia • CRP 04/70.722 • Design by Vibe Studio
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-amethyst text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle size={32} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
      </button>
    </div>
  );
}
