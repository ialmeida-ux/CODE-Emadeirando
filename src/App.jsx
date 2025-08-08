import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Video from '@/components/ui/video';
import { useState } from "react";
import { 
  Home, 
  Sofa, 
  Bed, 
  ChefHat, 
  Briefcase, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock
} from 'lucide-react';

function App() {
  const { toast } = useToast();
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/emadeirando.decor/', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5587988394859', '_blank');
  }

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleContact = () => {
    // toast({
    //   title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo em breve! 🚀"
    // });
  };

  const handleContactForms = () => {
    const texto = `Olá! Quero um orçamento para projeto de móveis planejados.`;
    const phone = '5587988394859'; // Seu número com DDD
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(texto.trim())}`;

    window.open(url);

  // const texto = 
  //   `Olá! Gostaria de solicitar um orçamento.
  //   Nome: ${nome}
  //   Telefone: ${telefone}
  //   Mensagem: ${mensagem}`;
                    
  //   const phone = '5587988394859'; // Seu número com DDD
  //   const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto.trim())}`;
  //   window.open(url, '_blank');
  };
                
  const services = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Sala de Estar",
      description: "Móveis planejados para sua sala com design moderno e funcional"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Dormitórios",
      description: "Quartos completos com guarda-roupas, camas e criados-mudos"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Cozinhas",
      description: "Cozinhas planejadas que otimizam espaço e funcionalidade"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Home Office",
      description: "Escritórios em casa com móveis ergonômicos e organizados"
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único e desenvolvido especialmente para você"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualidade Premium",
      description: "Utilizamos apenas materiais de primeira qualidade"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Entrega no Prazo",
      description: "Cumprimos rigorosamente os prazos estabelecidos"
    }
  ];

  return (
    <>
    {/* teste para deploy  4*/}
      <Helmet>
        <title>Emadeirando - Móveis Planejados de Qualidade</title>
        <meta name="description" content="Transforme seus ambientes com móveis planejados exclusivos da Emadeirando. Qualidade, design e funcionalidade para sua casa dos sonhos." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-50 to-red-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <img src="src/assets/logocinza.png" alt="Emadeirando Logo" width={150} />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center space-x-8"
              >
                <a href="#inicio" className="text-gray-700 hover:text-orange-400 transition-colors font-medium">Início</a>
                <a href="#servicos" className="text-gray-700 hover:text-orange-400 transition-colors font-medium">Serviços</a>
                <a href="#galeria" className="text-gray-700 hover:text-orange-400 transition-colors font-medium">Galeria</a>
                <a href="#contato" className="text-gray-700 hover:text-orange-400 transition-colors font-medium">Contato</a>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-orange-400 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Orçamento Grátis
                </Button>
              </motion.div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="relative pb-20 pt-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    <span className="bg-gradient-to-r from-orange-700 via-orange-700 to-red-700 bg-clip-text text-transparent">
                      Móveis Planejados
                    </span>
                    <br />
                    <span className="text-gray-800">que Transformam</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-600 leading-relaxed max-w-lg"
                  >
                    Criamos ambientes únicos e funcionais com móveis planejados de alta qualidade. 
                    Transforme sua casa dos sonhos em realidade com a Emadeirando.
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    onClick={() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    size="lg"
                    className="bg-gradient-to-r from-orange-400 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-400 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Ver Projetos
                  </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center space-x-8 pt-8"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-700">500+</div>
                    <div className="text-sm text-gray-600">Projetos Realizados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-700">15+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    {/* <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                      ))}
                    </div> */}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full">
                    <Video />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Projetos de primeira linha</div>
                          <div className="text-sm text-gray-600">Utilizamos as melhores ferramentas do mercado!</div>
                        </div>
                      </div>
                    </div>
                  </motion.div> */}
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20"
                ></motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-15"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/*About Us Section */}
        <section id="sobre" className="py-20 bg-gray-50">
          <div className="w-full sm:w-[60%] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-700 to-orange-700 bg-clip-text text-transparent">
                  Sobre nós
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                Na Emadeirando, unimos paixão por marcenaria e atenção aos detalhes para criar móveis personalizados que refletem o estilo e a necessidade de cada cliente. Franklin e Vivian, fundadores da marca, acreditam que cada peça deve contar uma história, a sua! Da escolha da madeira ao acabamento final, tudo é feito com dedicação, qualidade e cuidado.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-1 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img  
                    alt="Cozinha planejada moderna com móveis de madeira"
                    className="w-full h-[500px] md:w-full md:h-[700px] object-cover object-top"
                    src="src/assets/aboutimg.jpg" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-6 right-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
                  >
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl min-w-[200px]">
                      <div className="flex items-center space-x-4">
            
                        <div>
                          <div className="font-semibold text-gray-800">Vivian</div>
                          <div className="text-sm text-gray-600">Design e funcionalidade sob medida para o seu lar. Aqui, o móvel é feito para você.</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-xl min-w-[200px]">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-semibold text-gray-800">Franklin</div>
                          <div className="text-sm text-gray-600">Transformo madeira em experiências únicas. Cada detalhe importa na Emadeirando.</div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>


              
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-white">
          <div className="container mx-auto px-6 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-700 to-orange-700 bg-clip-text text-transparent">
                  Nossos Serviços
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções completas em móveis planejados para todos os ambientes da sua casa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 group-hover:border-orange-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Button 
                      onClick={handleContactForms}
                      variant="ghost" 
                      className="mt-6 text-orange-400 hover:text-orange-700 hover:bg-orange-50 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-orange-400 to-orange-700 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Por que Escolher a Emadeirando?
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Somos especialistas em transformar sonhos em realidade através de móveis planejados únicos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-orange-100 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 pt-10">
                <span  className="bg-gradient-to-r from-orange-700 to-orange-700 bg-clip-text text-transparent">
                  Projetos de sucesso
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja alguns dos nossos trabalhos mais recentes e se inspire para seu próximo projeto
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0 * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group cursor-pointer"
    onClick={handleContact}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
      <img  
        alt="Projeto 1 - Modern bedroom with built-in wooden wardrobe and elegant design"
        className="w-full h-80 object-cover"
        src="src/assets/projeto1.JPG" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2">Projeto 1</h3>
        <p className="text-sm text-gray-200">Ambiente sofisticado com adega embutida e iluminação acolhedora.</p>
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 1 * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group cursor-pointer"
    onClick={handleContact}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
      <img  
        alt="Projeto 2 - Contemporary living room with custom wooden furniture and shelving"
        className="w-full h-80 object-cover"
        src="src/assets/projeto2.JPG" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2">Projeto 2</h3>
        <p className="text-sm text-gray-200">Home office moderno com nichos funcionais e decoração minimalista.</p>
      </div>
    </div>
  </motion.div>

  {/* Repita para os projetos 3 a 6, mudando: delay, alt, número do projeto e descrição */}

  {/* Projeto 3 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 2 * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group cursor-pointer"
    onClick={handleContact}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
      <img  
        alt="Projeto 3 - Luxury kitchen with wooden cabinets and marble countertops"
        className="w-full h-80 object-cover"
        src="src/assets/projeto3.JPG" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2">Projeto 3</h3>
        <p className="text-sm text-gray-200">Cozinha com ilha e prateleiras iluminadas, perfeita para receber.</p>
      </div>
    </div>
  </motion.div>

  {/* Projeto 4 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 3 * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group cursor-pointer"
    onClick={handleContact}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
      <img  
        alt="Projeto 4 - Home office with custom wooden desk and storage solutions"
        className="w-full h-80 object-cover"
        src="src/assets/projeto4.JPG" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2">Projeto 4</h3>
        <p className="text-sm text-gray-200">Cozinha contemporânea com armários em acabamento brilhante.</p>
      </div>
    </div>
  </motion.div>

  {/* Projeto 5 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 4 * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group cursor-pointer"
    onClick={handleContact}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
      <img  
        alt="Projeto 5 - Walk-in closet with organized wooden storage systems"
        className="w-full h-80 object-cover"
        src="src/assets/projeto5.JPG" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2">Projeto 5</h3>
        <p className="text-sm text-gray-200">Sala de reunião clean com divisórias de vidro e mobiliário sob medida.</p>
      </div>
    </div>
  </motion.div>

  {/* Projeto 6 */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 5 * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group cursor-pointer"
    onClick={handleContact}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
      <img  
        alt="Projeto 6 - Modern bathroom vanity with wooden cabinets and mirror"
        className="w-full h-80 object-cover"
        src="src/assets/projeto6.JPG" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2">Projeto 6</h3>
        <p className="text-sm text-gray-200">Closet planejado com iluminação embutida e amplo espaço de armazenamento.</p>
      </div>
    </div>
  </motion.div>
</div>


            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button 
                onClick={handleInstagramClick}
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Saiba mais !
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-10">
                <span className="bg-gradient-to-r from-orange-700 to-orange-700 bg-clip-text text-transparent">
                  Entre em Contato
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pronto para transformar seus ambientes? Entre em contato conosco e solicite seu orçamento gratuito
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleContact}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">Telefone</h3>
                      <p className="text-gray-600">(87) 98839-4859</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleContact}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">E-mail</h3>
                      <p className="text-gray-600">emadeirandodecor@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleContact}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">Endereço</h3>
                      <p className="text-gray-600">Rua Rio negro 10A, José e Maria</p> 
                      <p className="text-gray-600">Petrolina/PE Cep: 56320380</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Siga-nos nas Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <Button 
                      onClick={handleInstagramClick}
                      variant="outline" 
                      size="icon"
                      className="w-12 h-12 rounded-full border-orange-300 text-orange-400 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button 
                      onClick={handleWhatsAppClick}
                      variant="outline" 
                      size="icon"
                      className="w-12 h-12 rounded-full border-orange-300 text-orange-400 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-orange-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite seu Orçamento</h3>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleContactForms(); }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                      <input 
                        type="text" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <input 
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white"
                        placeholder="(87) 98839-4859"
                      />
                    </div>
                  </div>
                  
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white"
                      placeholder="seu@email.com"
                    />
                  </div> */}
{/*                   
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Projeto</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white">
                      <option>Selecione o tipo de projeto</option>
                      <option>Cozinha</option>
                      <option>Dormitório</option>
                      <option>Sala de Estar</option>
                      <option>Home Office</option>
                      <option>Banheiro</option>
                      <option>Casa Completa</option>
                    </select>
                  </div> */}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)} 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white resize-none"
                      placeholder="Conte-nos mais sobre seu projeto..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src="src/assets/logolaranja.png" width={200} alt="" />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transformando ambientes com móveis planejados de qualidade há mais de 15 anos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Serviços</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" onClick={() => {
                      document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-orange-400 transition-colors">Cozinhas Planejadas</a></li>
                  <li><a href="#" onClick={() => {
                      document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-orange-400 transition-colors">Dormitórios</a></li>
                  <li><a href="#" onClick={() => {
                      document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-orange-400 transition-colors">Salas de Estar</a></li>
                  <li><a href="#" onClick={() => {
                      document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-orange-400 transition-colors">Home Office</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" onClick={handleContact} className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
                  <li><a href="#" onClick={handleContact} className="hover:text-orange-400 transition-colors">Destaques</a></li>
                  <li><a href="#" onClick={() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="hover:text-orange-400 transition-colors">Contato</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>(87) 98839-4859</li>
                  <li>emadeirandodecor@gmail.com</li>
                  <li>Rua Rio negro 10A, José e Maria - Petrolina/PE Cep: 56320380</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 <a className='hover:text-orange-400 transition-colors' href="https://agencia2gs.com/">Agência 2GS</a>. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
