import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Package, 
  Calculator, 
  Smartphone, 
  CheckCircle2, 
  Network,
  ChevronRight,
  XCircle
} from 'lucide-react';


const FadeUp = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="bg-muted border border-[#2a2a2a] rounded-xl mb-2.5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-[22px] py-[18px] flex justify-between items-center cursor-pointer text-left focus:outline-none"
      >
        <span className="font-inter font-bold text-white text-base">{title}</span>
        <span className="text-primary font-bold text-xl ml-4 transition-transform duration-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="px-[22px] pb-[18px] text-inter text-[#ccc] text-[15px] leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

function App() {
  const receitas = [
    { name: "Sabonete de Lavanda", img: "https://i.postimg.cc/6pmRcjXm/Receita-01-(1).png" },
    { name: "Sabonete de Babosa", img: "https://i.postimg.cc/DwJmv79t/Receita-02-(1).png" },
    { name: "Sabonete de Cenoura", img: "https://i.postimg.cc/mZpbt0NX/Receita-03-(1).png" },
    { name: "Sabonete de Aveia", img: "https://i.postimg.cc/NGncgRQc/Receita-04.png" },
    { name: "Sabonete de Calêndula", img: "https://i.postimg.cc/7hFdSMLs/Receita-05.png" },
    { name: "Sabonete de Toranja", img: "https://i.postimg.cc/YCdcsFnJ/Receita-06-(1).png" },
    { name: "Sabonete de Rosa Damascena", img: "https://i.postimg.cc/brnpXvDH/Receita-07.png" },
    { name: "Sabonete Artesanal Essência de Alecrim", img: "https://i.postimg.cc/KYYbGf34/Receita-08-(1).png" }
  ];

  const goToCheckout = () => {
    window.location.href = "https://ggcheckout.app/checkout/v5/098OkojSDd9lwSy2luUj";
  };

  return (
    <div className="min-h-screen font-inter bg-dark text-white selection:bg-primary selection:text-white pb-0">
      {/* SEÇÃO 1 — BARRA DE URGÊNCIA */}
      <div className="fixed top-0 left-0 w-full bg-primary z-50 py-[10px] px-4 text-center">
        <p className="text-white font-bold text-[13px] uppercase tracking-wide">
          ⚡ ATENÇÃO — Essa oferta pode sair do ar a qualquer momento
        </p>
      </div>

      {/* SEÇÃO 2 — HEADLINE PRINCIPAL */}
      <section className="bg-dark pt-[120px] pb-20 px-5 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#e8006f15_0%,_transparent_60%)] pointer-events-none" />
        
        <FadeUp>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-[12px] uppercase tracking-[2px] px-6 py-2 font-bold mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            RENDA EXTRA • COMECE AINDA ESTA SEMANA
          </motion.div>
          
          <h1 className="font-oswald font-bold text-white text-[40px] md:text-[68px] leading-[1.1] max-w-[900px] mx-auto mb-8">
            Ela investiu R$50 e faturou <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400">R$400</span> em apenas 2 dias pelo WhatsApp
          </h1>
          
          <p className="font-inter text-[#aaa] text-[18px] md:text-[20px] max-w-[650px] leading-[1.6] mx-auto mb-10">
            Descubra o segredo dos sabonetes que vendem como água. O passo a passo completo para você lucrar em casa — <span className="text-white font-bold underline decoration-primary/50">por apenas R$10.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-[#666] text-[14px] font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Acesso Imediato</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Garantia de 7 Dias</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Pagamento Único</span>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 3 — VÍDEO DE VENDAS */}
      <section className="bg-black pb-12 w-full flex flex-col items-center">
        <FadeUp>
          <h2 className="font-oswald text-white font-bold text-[20px] text-center pt-[24px] pb-[16px] px-[20px]">
            Assista isso antes de fechar essa página:
          </h2>
          <div className="w-full max-w-[800px] mx-auto md:px-5">
            <div className="relative w-full aspect-video shadow-[0_0_48px_rgba(232,0,111,0.4)] md:rounded-[12px] overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LG12oyld8Jc?autoplay=0&rel=0" 
                title="Vídeo de Vendas"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-8 px-5 w-full flex flex-col items-center">
            <button 
              onClick={goToCheckout}
              className="bg-accent text-black font-oswald font-bold text-[18px] md:text-[22px] uppercase py-[20px] px-8 rounded-full w-full md:w-auto max-w-full mx-auto shadow-[0_10px_30px_rgba(255,214,0,0.3)] hover:scale-105 transition-transform duration-200 whitespace-nowrap"
            >
              QUERO ACESSO IMEDIATO
            </button>
            <div className="text-primary text-3xl mt-4 pulsing-arrow font-bold">↓</div>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 4 — BLOCO DE DOR */}
      <section className="bg-[#0a0a0a] py-[80px] px-[20px] flex flex-col items-center relative overflow-hidden">
        <FadeUp>
          <h2 className="font-oswald text-white font-bold text-[32px] md:text-[42px] text-center max-w-[700px] mx-auto mb-12 leading-tight">
            Pare de buscar uma renda extra que só complica sua vida
          </h2>
          <div className="max-w-[600px] w-full mx-auto space-y-4">
            {[
              "Você quer ganhar dinheiro extra, mas toda ideia parece cara ou complicada demais",
              "Você não tem tempo para montar um negócio do zero após o trabalho",
              "Você já tentou vender algo e não deu certo — e ficou com medo de tentar de novo",
              "Você vê outras pessoas empreendendo e pensa: 'por que eu também não consigo?'"
            ].map((text, i) => (
              <div key={i} className="flex items-start p-6 bg-[#111] border border-white/5 rounded-2xl group hover:border-primary/30 transition-colors">
                <XCircle className="text-primary/40 group-hover:text-primary mr-4 w-6 h-6 flex-shrink-0 transition-colors" />
                <span className="text-white/80 text-[16px] md:text-[18px] leading-[1.6]">{text}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-[20px] p-8 mt-12 max-w-[600px] w-full mx-auto text-center">
            <p className="text-white font-bold text-[20px] md:text-[22px]">
              Isso está prestes a mudar. E o primeiro passo custa apenas <span className="text-primary">R$10.</span>
            </p>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 5 — O QUE É ESSE MÉTODO */}
      <section className="bg-white py-[100px] px-[20px] flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <FadeUp>
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-oswald text-[#0D0D0D] font-bold text-[36px] md:text-[48px] leading-tight mb-8">
              Um sabonete que custa <span className="text-primary">R$3</span> para fazer e vende por <span className="text-primary">R$25</span>.
            </h2>
            <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full mb-8" />
            <p className="font-inter text-[#444] text-[18px] md:text-[20px] leading-[1.8] max-w-[700px] mx-auto">
              Sabonetes artesanais têm uma das maiores margens de lucro do mercado. As pessoas compram de forma recorrente — toda semana, todo mês. <br/><br/>
              Com as receitas e estratégias certas, você consegue montar sua própria produção em casa e começar a vender em dias. <b>Sem loja física, sem experiência e sem precisar de um grande capital inicial.</b>
            </p>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 6 — RECEITAS */}
      <section className="bg-white py-[80px] px-[20px] flex flex-col items-center">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-oswald text-[#0D0D0D] font-bold text-[32px] md:text-[42px] mb-4">
              O que você vai aprender a criar...
            </h2>
            <p className="text-[#666] max-w-[600px] mx-auto text-[17px]">Uma pequena amostra das 30 receitas exclusivas que estão te esperando.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-[1100px] mx-auto">
            {receitas.map((receita, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center group"
              >
                <div className="relative w-full aspect-square rounded-[30px] overflow-hidden shadow-xl mb-6 bg-[#f5f5f5]">
                  <img 
                    src={receita.img} 
                    alt={receita.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-[12px] font-bold uppercase tracking-widest">Ver Receita</span>
                  </div>
                </div>
                <p className="font-oswald font-bold text-[#111] text-[16px] md:text-[18px] text-center leading-tight">
                  {receita.name}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center max-w-[600px] mx-auto">
            <p className="font-inter font-bold text-primary text-[18px]">
              ✨ E mais 22 receitas exclusivas de alto lucro incluídas!
            </p>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 7 — O QUE VOCÊ RECEBE */}
      <section className="bg-dark py-[80px] px-[20px] flex flex-col items-center relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-oswald text-white font-bold text-[32px] md:text-[42px] mb-4">
              Tudo que você recebe hoje por <span className="text-primary">R$10</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {[
              { 
                img: "https://i.postimg.cc/sgVV07yR/Mockup-3D-5.png", 
                title: "30 Receitas Completas", 
                desc: "Ingredientes, quantidades e modo de preparo passo a passo para cada sabonete exclusivo.",
                color: "from-[#2e0016] to-[#1a000d]"
              },
              { 
                img: "https://i.postimg.cc/XY8PN1hr/21bbebba-dc94-4180-a95c-f051f9135985.png", 
                title: "Guia de Embalagens", 
                desc: "Aprenda a criar embalagens irresistíveis que aumentam o valor percebido do seu produto.",
                color: "from-[#001e3c] to-[#000f1f]"
              },
              { 
                img: "https://i.postimg.cc/NfxDR94Y/7a555b85-65f2-4ba6-ad98-53ed249f4256.png", 
                title: "Como Precificar", 
                desc: "Planilha e guia para calcular custos e margem de lucro real sem complicação.",
                color: "from-[#002e1a] to-[#001a0e]"
              },
              { 
                img: "https://i.postimg.cc/900m1q7S/2c8d95f4-9aaa-4f05-8e23-f2932ee85eb3.png", 
                title: "Como Vender", 
                desc: "Estratégias validadas para vender pelo WhatsApp e Instagram de forma orgânica.",
                color: "from-[#2e1d00] to-[#1a1100]"
              },
              { 
                img: "https://i.postimg.cc/85nD70rr/Checklist-Sabonetes-Artesanais.png", 
                title: "Checklist Completo", 
                desc: "O caminho das pedras organizado para você não esquecer nenhum detalhe importante.",
                color: "from-[#1e002e] to-[#11001a]"
              },
              { 
                img: "https://i.postimg.cc/Bt9rD9Z6/Mapa-Mental-Sabonetes-Artesanais.png", 
                title: "Mapa Mental", 
                desc: "Uma visão panorâmica de todo o seu novo negócio para clareza total na execução.",
                color: "from-[#00282e] to-[#00171a]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group relative bg-[#111] border border-white/10 rounded-[30px] overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Área da Imagem - Recuo de segurança para não cortar as quinas */}
                <div className={`w-full bg-gradient-to-br ${item.color} relative overflow-hidden flex items-center justify-center p-4`}>
                  <img 
                    src={item.img} 
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-2xl" 
                    alt={item.title} 
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Conteúdo - Abaixo da imagem */}
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between bg-[#151515]">
                  <div>
                    <h3 className="font-oswald font-bold text-white text-[24px] md:text-[28px] mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[#aaa] text-[16px] md:text-[17px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center text-primary font-bold text-[14px] uppercase tracking-[2px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Saber mais
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 8 — NÚMEROS */}
      <section className="bg-[#111] py-[48px] px-[20px] flex flex-col items-center">
        <FadeUp>
          <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto w-full">
            {[
              { num: "30", label: "receitas testadas" },
              { num: "R$3", label: "custo médio por sabonete" },
              { num: "R$25", label: "preço médio de venda" },
              { num: "7 dias", label: "garantia total" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[14px] p-[28px] flex flex-col items-center text-center">
                <span className="font-oswald text-primary text-[42px] md:text-[52px] font-bold leading-tight">{stat.num}</span>
                <span className="font-inter text-[#999] text-[13px] mt-[6px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 9 — DEPOIMENTOS (ESTILO FACEBOOK) */}
      <section className="bg-[#f0f2f5] py-[80px] px-[20px] flex justify-center">
        <FadeUp>
          <div className="max-w-[750px] w-full bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-[#1c1e21] font-bold text-[20px] border-b border-[#ddd] pb-4 mb-6">
              Comentários
            </h2>

            <div className="space-y-6">
              {[
                {
                  name: "Regina Almeida",
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "Gente, eu estava desempregada e resolvi arriscar esses R$10. Em 2 semanas já vendi meu primeiro kit de lavanda! As receitas são perfeitas e explicam tudo direitinho. 😍",
                  likes: 47,
                  time: "12 min"
                },
                {
                  name: "Patrícia Mendonça",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "Comprei ontem e já fiz a primeira receita de aveia. A textura ficou incrível e o cheiro tomou conta da casa toda. Ansiosa para começar a vender!",
                  likes: 32,
                  time: "45 min"
                },
                {
                  name: "Sandra Oliveira",
                  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "Já tinha tentado outras receitas da internet mas nunca davam o ponto certo. Esse guia é diferente, as medidas são exatas. Valeu cada centavo.",
                  likes: 28,
                  time: "2 h"
                },
                {
                  name: "Cláudia Rezende",
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "Achei que era mais uma propaganda, mas por R$10 não custava tentar. Resultado surpreendente! Minhas amigas já estão todas perguntando onde comprei os sabonetes.",
                  likes: 19,
                  time: "3 h"
                },
                {
                  name: "Marisa Tavares",
                  img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "Estou na segunda semana e já me sinto muito mais confiante. Começar um negócio com apenas 10 reais foi a melhor decisão que tomei esse ano. ❤️",
                  likes: 15,
                  time: "5 h"
                }
              ].map((dep, i) => (
                <div key={i} className="flex gap-3">
                  <img src={dep.img} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0" alt={dep.name} />
                  <div className="flex-1">
                    <div className="bg-[#f0f2f5] rounded-[20px] px-4 py-3 relative">
                      <p className="font-bold text-[#050505] text-[14px] md:text-[15px] mb-1">{dep.name}</p>
                      <p className="text-[#050505] text-[14px] md:text-[15px] leading-relaxed">{dep.text}</p>
                      
                      {dep.likes > 0 && (
                        <div className="absolute -bottom-2 -right-2 bg-white shadow-sm border border-[#ddd] rounded-full px-1.5 py-0.5 flex items-center gap-1">
                          <div className="bg-[#1877f2] rounded-full p-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                          </div>
                          <span className="text-[#65676b] text-[12px]">{dep.likes}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3 mt-1 ml-4">
                      <button className="text-[#65676b] font-bold text-[12px] hover:underline cursor-pointer">Curtir</button>
                      <button className="text-[#65676b] font-bold text-[12px] hover:underline cursor-pointer">Responder</button>
                      <span className="text-[#65676b] text-[12px]">{dep.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-[#ddd] pt-6 text-center">
              <button className="text-[#1877f2] font-bold text-[14px] hover:underline">Carregar mais comentários...</button>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 10 — OFERTA PRINCIPAL */}
      <section id="comprar" className="py-[100px] px-[20px] relative overflow-hidden flex flex-col items-center text-center">
        {/* Background Animado */}
        <div className="absolute inset-0 bg-[#0a0a0a] z-[-1]" />
        <div className="absolute inset-0 opacity-30 z-[-1]" style={{ background: 'radial-gradient(circle at 50% 50%, #e8006f22 0%, transparent 70%)' }} />

        <FadeUp>
          <div className="max-w-[800px] bg-[#111] border border-white/10 rounded-[32px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Badge de Desconto - Posicionamento Melhorado */}
            <div className="absolute -top-3 -right-3 bg-primary text-white font-bold text-[14px] px-6 py-2 rounded-full uppercase tracking-widest shadow-[0_10px_20px_rgba(232,0,111,0.4)] z-10 rotate-3">
              90% OFF HOJE
            </div>

            <h2 className="font-oswald text-white font-bold text-[36px] md:text-[52px] leading-tight mb-8 pt-4">
              O seu novo negócio começa por apenas <span className="text-primary">R$10</span>
            </h2>

            {/* Mockup do Produto - Grande e Centralizado */}
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-primary/25 blur-[80px] rounded-full scale-90" />
              <img 
                src="https://i.postimg.cc/sgVV07yR/Mockup-3D-5.png" 
                alt="Saboaria Artesanal Lucrativa" 
                className="relative w-full max-w-[550px] mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="font-inter text-[#aaa] text-[18px] max-w-[500px] mx-auto mb-12">
              Acesso vitalício ao guia completo, todas as receitas e bônus exclusivos.
            </p>

            <div className="flex flex-col items-center mb-12">
              <span className="text-[#555] text-[18px] line-through mb-2">De R$ 97,00</span>
              <div className="flex items-center gap-2">
                <span className="font-oswald text-[32px] font-bold text-white self-start mt-2">R$</span>
                <span className="font-oswald text-[100px] md:text-[130px] font-bold text-white leading-none tracking-tighter">10<span className="text-[32px]">,00</span></span>
              </div>
              <p className="text-primary font-bold text-[14px] mt-4 uppercase tracking-[3px]">Pagamento Único · Sem Mensalidades</p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goToCheckout}
              className="bg-accent text-black font-oswald font-bold text-[20px] md:text-[26px] uppercase py-[24px] px-10 rounded-full w-full max-w-full shadow-[0_15px_40px_rgba(255,214,0,0.25)] hover:shadow-[0_20px_50px_rgba(255,214,0,0.35)] transition-all duration-300 whitespace-nowrap"
            >
              GARANTIR MINHA VAGA AGORA
            </motion.button>
            
            <div className="mt-12 flex flex-col items-center">
              <div className="flex items-center gap-6 mb-6 grayscale opacity-40">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
                <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
              </div>
              <p className="font-inter text-[#666] text-[14px] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Sua compra está 100% segura e protegida
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 11 — FAQ */}
      <section className="bg-dark py-[56px] px-[20px] flex flex-col items-center">
        <FadeUp>
          <div className="max-w-[680px] w-full mx-auto">
            <h2 className="font-oswald text-white font-bold text-[26px] text-center mb-[32px]">
              Perguntas frequentes
            </h2>
            
            <AccordionItem 
              title="Preciso ter experiência pra começar?" 
              content="Não. Cada receita é explicada passo a passo com lista de materiais e onde encontrar. Qualquer pessoa consegue." 
            />
            <AccordionItem 
              title="Como recebo o acesso?" 
              content="Imediatamente após o pagamento você recebe um link por e-mail. Em menos de 2 minutos você já está dentro." 
            />
            <AccordionItem 
              title="Funciona em cidade pequena?" 
              content="Sim. Os ingredientes são encontrados em farmácias e lojas de artesanato. E você vende pelo WhatsApp — funciona em qualquer lugar do Brasil." 
            />
            <AccordionItem 
              title="Por que está tão barato?" 
              content="Porque queremos que o preço nunca seja obstáculo. Nosso objetivo é que você aplique e veja resultado. R$10 não tem desculpa pra ficar de fora." 
            />
            <AccordionItem 
              title="E se eu não gostar?" 
              content="7 dias de garantia total. Manda um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia." 
            />
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 12 — CTA FINAL */}
      <section className="bg-black py-[48px] px-[20px] flex flex-col items-center text-center">
        <FadeUp>
          <h2 className="font-oswald text-white font-bold text-[24px]">
            Ainda está esperando o quê?
          </h2>
          <p className="font-inter text-[#999] text-[15px] max-w-[440px] mx-auto my-[12px]">
            Cada dia sem agir é mais um dia sem renda extra. Por R$10 você não tem nada a perder — e tem muito a ganhar.
          </p>
          <button 
            onClick={goToCheckout}
            className="bg-accent text-black font-oswald font-bold text-[18px] md:text-[22px] uppercase py-[20px] px-8 rounded-full w-full md:w-auto max-w-full mx-auto shadow-[0_10px_30px_rgba(255,214,0,0.3)] hover:scale-105 transition-transform duration-200 mt-4 block whitespace-nowrap"
          >
            QUERO COMEÇAR AGORA
          </button>
        </FadeUp>
      </section>

      {/* SEÇÃO 13 — RODAPÉ */}
      <footer className="bg-black border-t border-[#1a1a1a] py-[28px] px-[20px] text-center">
        <p className="font-inter text-[#444] text-[13px] leading-[2]">
          Sabonetes Artesanais Lucrativos | Todos os direitos reservados
        </p>
        <div className="flex justify-center gap-3 mt-2 font-inter text-[13px] text-[#444]">
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
          <span>·</span>
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <span>·</span>
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
