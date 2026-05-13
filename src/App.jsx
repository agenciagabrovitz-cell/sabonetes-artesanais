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

  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen font-inter bg-dark text-white selection:bg-primary selection:text-white pb-0">
      {/* SEÇÃO 1 — BARRA DE URGÊNCIA */}
      <div className="fixed top-0 left-0 w-full bg-primary z-50 py-[10px] px-4 text-center">
        <p className="text-white font-bold text-[13px] uppercase tracking-wide flex items-center justify-center gap-2">
          ⚡ ATENÇÃO — Essa oferta pode sair do ar a qualquer momento <span className="bg-white text-primary px-2 py-0.5 rounded ml-1 tabular-nums">{formatTime(timeLeft)}</span>
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
            Descubra o segredo dos sabonetes que vendem como água. O passo a passo completo para você lucrar em casa — <span className="text-white font-bold underline decoration-primary/50">por um valor promocional exclusivo.</span>
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
          <div className="w-full max-w-[450px] mx-auto md:px-5 mt-10">
            <div className="relative w-full shadow-[0_0_48px_rgba(232,0,111,0.4)] md:rounded-[20px] overflow-hidden bg-[#111]">
              <wistia-player media-id="6g50wlw8wp" aspect="0.5625"></wistia-player>
            </div>
          </div>
          <div className="mt-8 px-5 w-full flex flex-col items-center">
            <button 
              onClick={goToCheckout}
              className="bg-[#FFD600] text-black font-oswald font-bold text-[18px] md:text-[22px] uppercase py-[18px] px-8 rounded-full w-full md:w-auto max-w-full mx-auto shadow-[0_6px_0_#b39700] hover:shadow-[0_4px_0_#b39700] active:translate-y-[2px] active:shadow-none transition-all duration-100 whitespace-nowrap"
            >
              Quero Acesso Imediato
            </button>
            <div className="text-primary text-3xl mt-4 pulsing-arrow font-bold">↓</div>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 4 — BLOCO DE DOR */}
      <section className="bg-[#0a0a0a] pt-[80px] pb-[120px] px-[20px] flex flex-col items-center relative overflow-hidden">
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
              Isso está prestes a mudar. E o primeiro passo é <span className="text-primary">mais acessível do que você imagina.</span>
            </p>
          </div>
        </FadeUp>
        
        {/* Divisor SVG - Onda Suave para Branco */}
        <div className="absolute bottom-[-2px] left-[-2%] w-[104%] overflow-hidden leading-[0] transform rotate-180 z-20">
          <svg className="relative block w-full h-[100px] scale-x-110" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C300,120 900,0 1200,40 V0 H0 Z" fill="#ffffff" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </section>

      {/* SEÇÃO 5 — O QUE É ESSE MÉTODO */}
      <section className="bg-white py-[120px] px-[20px] flex flex-col items-center relative overflow-hidden">
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

        {/* Divisor SVG - Curva Suave para Preto */}
        <div className="absolute bottom-[-2px] left-[-2%] w-[104%] overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[110px] scale-x-110" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C400,0 800,120 1200,40 V120 H0 Z" fill="#0D0D0D"></path>
          </svg>
        </div>
      </section>

      {/* SEÇÃO 6 — BENEFÍCIOS (Pequeno Destaque) */}
      <section className="bg-[#0D0D0D] py-16 px-[20px] relative overflow-hidden">
        <FadeUp>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-primary font-oswald font-bold text-4xl mb-2">100%</div>
              <p className="text-[#888] text-sm uppercase tracking-widest font-bold">Prático e Passo a Passo</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-white/10">
              <div className="text-primary font-oswald font-bold text-4xl mb-2">Lucro</div>
              <p className="text-[#888] text-sm uppercase tracking-widest font-bold">Desde o Primeiro Dia</p>
            </div>
            <div className="p-6">
              <div className="text-primary font-oswald font-bold text-4xl mb-2">Vitalício</div>
              <p className="text-[#888] text-sm uppercase tracking-widest font-bold">Acesso para Sempre</p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* SEÇÃO 7 — O QUE VOCÊ RECEBE */}
      <section className="bg-[#0D0D0D] py-[100px] px-[20px] flex flex-col items-center relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="font-oswald text-white font-bold text-[32px] md:text-[42px] mb-4">
              Tudo que você recebe hoje no <span className="text-primary">Kit Completo</span>
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

      {/* Divisor SVG - Transição Suave para Cinza Facebook */}
      <div className="w-[104%] left-[-2%] overflow-hidden leading-[0] bg-[#111] z-20 relative">
        <svg className="relative block w-full h-[100px] scale-x-110" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C300,120 900,0 1200,40 V120 H0 Z" fill="#f0f2f5"></path>
        </svg>
      </div>

      {/* SEÇÃO 9 — DEPOIMENTOS (ESTILO FACEBOOK) */}
      <section className="bg-[#f0f2f5] py-[80px] px-[20px] flex justify-center relative overflow-hidden">
        <FadeUp>
          <div className="max-w-[750px] w-full bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-[#1c1e21] font-bold text-[20px] border-b border-[#ddd] pb-4 mb-6">
              Comentários
            </h2>

            <div className="space-y-6">
              {[
                {
                  name: "Regina Almeida",
                  img: "https://rugasnuncamais.vercel.app/depoimento-1.png",
                  text: "Gente, eu estava desempregada e resolvi arriscar esse pequeno investimento. Em 2 semanas já vendi meu primeiro kit de lavanda! As receitas são perfeitas e explicam tudo direitinho. 😍",
                  likes: 47,
                  time: "12 min"
                },
                {
                  name: "Patrícia Mendonça",
                  img: "https://rugasnuncamais.vercel.app/depoimento-3.png",
                  text: "Comprei ontem e já fiz a primeira receita de aveia. A textura ficou incrível e o cheiro tomou conta da casa toda. Ansiosa para começar a vender!",
                  likes: 32,
                  time: "45 min"
                },
                {
                  name: "Sandra Oliveira",
                  img: "https://rugasnuncamais.vercel.app/depoimento-4.png",
                  text: "Já tinha tentado outras receitas da internet mas nunca davam o ponto certo. Esse guia é diferente, as medidas são exatas. Valeu cada centavo.",
                  likes: 28,
                  time: "2 h"
                },
                {
                  name: "Cláudia Rezende",
                  img: "https://rugasnuncamais.vercel.app/depoimento-6.png",
                  text: "Achei que era mais uma propaganda, mas por esse valor não custava tentar. Resultado surpreendente! Minhas amigas já estão todas perguntando onde comprei os sabonetes.",
                  likes: 19,
                  time: "3 h"
                },
                {
                  name: "Marisa Tavares",
                  img: "https://rugasnuncamais.vercel.app/depoimento-7.png",
                  text: "Estou na segunda semana e já me sinto muito mais confiante. Começar um negócio com esse investimento foi a melhor decisão que tomei esse ano. ❤️",
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
            
            </div>
          </FadeUp>

        {/* Divisor SVG - Onda Elegante para Oferta */}
        <div className="absolute bottom-[-2px] left-[-2%] w-[104%] overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[100px] scale-x-110" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C300,120 900,0 1200,40 V120 H0 Z" fill="#0a0a0a"></path>
          </svg>
        </div>
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

            <button 
              onClick={goToCheckout}
              className="bg-[#FFD600] text-black font-oswald font-bold text-[20px] md:text-[26px] uppercase py-[20px] px-10 rounded-full w-full max-w-full shadow-[0_8px_0_#b39700] hover:shadow-[0_5px_0_#b39700] active:translate-y-[3px] active:shadow-none transition-all duration-100 whitespace-nowrap"
            >
              QUERO MEU ACESSO AGORA!
            </button>
            
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
              content="Porque queremos que o preço nunca seja obstáculo. Nosso objetivo é que você aplique e veja resultado. O valor é simbólico para que ninguém fique de fora." 
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
            Cada dia sem agir é mais um dia sem renda extra. Você não tem nada a perder — e tem muito a ganhar.
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
