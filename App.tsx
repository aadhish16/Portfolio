import React, { useState, useEffect, useRef, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION } from './constants';
import { Project, SkillCategory, Certification } from './types';

// --- Loading Screen Component ---
const LoadingScreen = ({ onComplete }: { onComplete: () => void; key?: string }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing System...");

  const statuses = [
    "Initializing System...",
    "Calibrating IoT Sensors...",
    "Loading Neural Protocols...",
    "Establishing Secure Uplink...",
    "System Ready."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const statusInterval = setInterval(() => {
      setStatus(prev => {
        const currentIndex = statuses.indexOf(prev);
        if (currentIndex < statuses.length - 1) return statuses[currentIndex + 1];
        return prev;
      });
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(statusInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#010204] flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      <div className="relative mb-16 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 1.2],
            opacity: [0, 0.5, 0.2]
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-t-2 border-cyan-400/30 border-r-2 border-transparent absolute -top-4 -left-4"
          />
          <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-xl flex items-center justify-center font-black text-black text-xl md:text-3xl shadow-[0_0_30px_rgba(0,242,255,0.3)]">
            AK
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0, filter: 'blur(20px)' }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: 1,
            filter: 'blur(0px)'
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="relative px-4"
        >
          <h1 className="text-3xl md:text-6xl font-black text-white italic uppercase tracking-[0.1em] text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            AADHISH <span className="text-cyan-400">KUMAR S</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-2"
          />
        </motion.div>
      </div>

      <div className="w-full max-w-[280px] md:max-w-md">
        <div className="flex justify-between items-end mb-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={status}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-500"
            >
              {status}
            </motion.span>
          </AnimatePresence>
          <span className="text-[10px] md:text-xs font-black text-cyan-400/50">{progress}%</span>
        </div>
        <div className="h-[1px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-cyan-400 to-violet-600 shadow-[0_0_15px_rgba(0,242,255,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

// --- Live Animation Component Optimized ---
const LiveNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 100;
    const connectionDistance = 150;
    const mouseRadius = 200;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 1;
        this.color = Math.random() > 0.5 ? '#00f2ff' : '#8b5cf6';
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          this.x += dx * force * 0.015;
          this.y += dy * force * 0.015;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 0.2;

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(w, h);
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistance * connectionDistance) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', init, { passive: true });
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 will-change-transform"
    />
  );
};

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const pageEntrance = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const sectionEntrance = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const scrollToSection = (e: React.MouseEvent, targetId: string) => {
  if (e) e.preventDefault();
  const id = targetId.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else if (targetId === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-3 md:px-6 ${scrolled ? 'py-2 md:py-3' : 'py-6 md:py-8'}`}
    >
      <div className={`max-w-6xl mx-auto flex justify-between items-center transition-all px-4 md:px-8 py-2 md:py-3 rounded-2xl ${scrolled ? 'glass border-white/10 shadow-xl' : ''}`}>
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={(e) => scrollToSection(e, '#home')}>
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="w-7 h-7 md:w-9 md:h-9 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg md:rounded-xl flex items-center justify-center font-black text-black text-xs md:text-base shadow-lg"
          >
            AK
          </motion.div>
          <span className="text-base md:text-xl font-black tracking-normal text-white uppercase italic pl-4 pr-6">AADHISH<span className="text-cyan-400">.</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {[
            { name: 'home', link: '#home' },
            { name: 'skills', link: '#skills' },
            { name: 'projects', link: '#projects' },
            { name: 'education', link: '#education' },
            { name: 'certifications', link: '#certifications' },
            { name: 'contact', link: '#contact' }
          ].map(item => (
            <motion.a
              key={item.name}
              href={item.link}
              whileHover={{ scale: 1.1, color: '#00f2ff' }}
              onClick={(e) => scrollToSection(e, item.link)}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 transition-all cursor-pointer"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => scrollToSection(e, '#contact')}
          className="px-4 py-1.5 md:px-6 md:py-2 bg-white text-black text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all shadow-lg whitespace-nowrap"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={sectionEntrance}
      className="min-h-screen relative flex flex-col justify-center items-center px-4 pt-32 md:pt-44 pb-16 overflow-visible scroll-mt-32"
    >
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-cyan-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="text-center z-10 max-w-6xl w-full overflow-visible flex flex-col items-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-6 md:px-8 py-1.5 rounded-full border border-white/5 bg-white/5 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8 md:mb-12"
        >
          <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          STATUS: OPEN FOR INTERNSHIPS 2025
        </motion.div>

        <div className="w-full flex flex-col items-center mb-12 md:mb-20 overflow-visible relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[14vw] md:text-[120px] lg:text-[160px] font-black leading-none tracking-normal text-white uppercase italic overflow-visible mb-[-0.18em] z-0 select-none pl-4 pr-10 md:pr-16 neon-white-glow"
          >
            Building
          </motion.h1>
          <div className="relative z-10 overflow-visible">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-[12vw] md:text-[110px] lg:text-[150px] font-black leading-none tracking-normal italic uppercase whitespace-nowrap overflow-visible bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,242,255,0.2)] pl-4 pr-10 md:pr-16"
            >
              Smart Tech
            </motion.h2>
          </div>
        </div>

        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-slate-400 text-sm md:text-xl font-light leading-relaxed mb-10 md:mb-16 px-6 md:px-8"
        >
          Aadhish Kumar S — Engineering student specializing in <span className="text-white font-medium">IoT & AI</span>.
          Transforming raw data into intelligent automation with a <span className="text-cyan-400 font-bold italic">9.95 CGPA</span> foundation.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(0,242,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e, '#projects')}
            className="px-8 md:px-12 py-3 md:py-5 glass border-white/10 text-white font-black uppercase tracking-widest rounded-xl md:rounded-2xl transition-all text-xs md:text-sm flex items-center justify-center min-w-[140px] shadow-[0_0_20px_rgba(0,242,255,0.05)]"
          >
            My Work
          </motion.a>
          <motion.a
            href="#education"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e, '#education')}
            className="px-8 md:px-12 py-3 md:py-5 glass border-white/10 text-white font-black uppercase tracking-widest rounded-xl md:rounded-2xl transition-all text-xs md:text-sm flex items-center justify-center min-w-[140px]"
          >
            Education
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1EAQIdMfKKeVQUgkYZbBLXYcdWt73drzZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-12 py-3 md:py-5 glass border-white/10 text-white font-black uppercase tracking-widest rounded-xl md:rounded-2xl transition-all text-xs md:text-sm flex items-center justify-center min-w-[140px]"
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-6xl pb-10 md:pb-20 px-4"
      >
        {[
          { l: "Current CGPA", v: "9.95", i: "fa-graduation-cap" },
          { l: "Projects Done", v: "08+", i: "fa-code-branch" },
          { l: "Tech Stack", v: "12+", i: "fa-microchip" },
          { l: "Verified Certs", v: "9+", i: "fa-award" },
        ].map((s) => (
          <motion.div
            key={s.l}
            variants={scaleIn}
            whileHover={{ y: -5, borderColor: "rgba(0,242,255,0.2)" }}
            className="glass p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-white/5 group transition-all"
          >
            <i className={`fas ${s.i} text-cyan-400/20 text-base md:text-xl mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors`}></i>
            <div className="text-xl md:text-4xl font-black text-white mb-1 tracking-tight">{s.v}</div>
            <div className="text-[7px] md:text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">{s.l}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = memo(({ project, featured = false }: ProjectCardProps) => (
  <motion.div
    variants={fadeInUp}
    whileHover="hover"
    className={`${featured ? 'md:col-span-8 min-h-[240px]' : 'md:col-span-4 min-h-[220px]'} bento-card glass rounded-[1.5rem] p-6 flex flex-col justify-between relative overflow-hidden border-white/5 group h-full cursor-pointer`}
  >
    {/* Background Image Preview */}
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
      <img src={project.image} alt="" className="w-full h-full object-cover grayscale" />
    </div>

    {/* Scanning Effect Overlay */}
    <motion.div
      variants={{
        hover: { top: '100%', transition: { duration: 1.5, repeat: Infinity, ease: "linear" } }
      }}
      initial={{ top: '-10%' }}
      className="absolute left-0 right-0 h-[2px] bg-cyan-400/40 shadow-[0_0_15px_rgba(0,242,255,0.8)] z-20 pointer-events-none"
    />

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-wrap gap-2 pr-4">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="px-2.5 py-1 bg-white/5 text-slate-400 text-[8px] font-bold rounded-full uppercase tracking-widest border border-white/5 whitespace-nowrap">{t}</span>
          ))}
        </div>
        <div className="flex gap-3 pt-1">
          {project.links?.code && (
            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">
              <i className="fab fa-github text-sm"></i>
            </a>
          )}
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-400 transition-colors">
              <i className="fas fa-external-link-alt text-[10px]"></i>
            </a>
          )}
        </div>
      </div>
      <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-black text-white mb-3 uppercase italic tracking-tight leading-snug group-hover:text-cyan-400 transition-colors`}>{project.title}</h3>
      <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-lg mb-4 line-clamp-2 md:line-clamp-none">{project.description}</p>
    </div>
  </motion.div>
));

const BentoGrid = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = useMemo(() => {
    if (filter === 'ALL') return PROJECTS;
    return PROJECTS.filter(p => p.tags.some(t => t.toUpperCase() === filter));
  }, [filter]);

  const categories = ['ALL', 'IOT', 'AI/ML', 'WEB APP', 'PYTHON'];

  return (
    <motion.section
      id="projects"
      variants={sectionEntrance}
      className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto scroll-mt-32"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tight mb-2 leading-none">Selected<br /><span className="neon-accent">Works</span></motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 max-w-xs uppercase font-bold text-[10px] tracking-[0.3em]">Hardware x Software Synergy</motion.p>
        </div>

        {/* Technical Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-[8px] font-black uppercase tracking-widest rounded-full border transition-all ${filter === cat ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,242,255,0.3)]' : 'bg-transparent text-slate-600 border-white/10 hover:border-white/30'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
      >
        {filteredProjects.map((p, i) => (
          <ProjectCard key={p.title + i} project={p} featured={i % 5 === 0} />
        ))}
        <motion.div
          layout
          variants={fadeInUp}
          className="md:col-span-4 glass rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-center items-center text-center bg-cyan-400 group cursor-pointer relative overflow-hidden min-h-[180px]"
        >
          <h3 className="text-black font-black text-lg mb-2 leading-snug z-10 italic uppercase tracking-tight">WANT TO SEE THE FULL REPO?</h3>
          <a href="https://github.com/aadhish16" target="_blank" rel="noopener noreferrer" className="w-full mt-3 py-3 bg-black text-white rounded-lg font-black text-[9px] uppercase tracking-[0.3em] hover:scale-95 transition-transform z-10">
            Open Github Profile
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const SkillCategoryCard = memo(({ cat }: { cat: SkillCategory }) => (
  <motion.div variants={fadeInUp} className="group relative">
    <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 h-full transition-all group-hover:bg-white/[0.03]">
      <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-8 border-white/5 text-cyan-400 shadow-xl group-hover:shadow-cyan-400/10 group-hover:border-cyan-400/30 transition-all">
        <i className={`fas ${cat.icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-black text-white mb-2 uppercase tracking-[0.2em] italic leading-snug">{cat.name}</h3>
      {cat.description && (
        <p className="text-[11px] text-slate-600 font-bold uppercase tracking-widest mb-8 leading-relaxed">{cat.description}</p>
      )}
      <div className="space-y-4">
        {cat.skills.map((skill: string) => (
          <div key={skill} className="flex items-center justify-between group/item">
            <span className="text-sm text-slate-500 group-hover/item:text-slate-200 transition-colors">{skill}</span>
            <div className="w-8 h-px bg-white/10 group-hover/item:bg-cyan-400 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
));

const SkillsSection = () => (
  <motion.section
    id="skills"
    variants={sectionEntrance}
    className="py-20 md:py-32 px-4 md:px-6 bg-[#010204] relative scroll-mt-32"
  >
    <div className="max-w-7xl mx-auto">
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-24 flex flex-col items-center text-center">
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tight mb-6 leading-none">Expertise <span className="neon-accent">Matrix</span></motion.h2>
        <div className="h-1 w-20 bg-cyan-400 rounded-full shadow-lg" />
      </motion.div>

      <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCategoryCard key={cat.name} cat={cat} />
        ))}
      </motion.div>
    </div>
  </motion.section>
);

const Timeline = () => (
  <motion.section
    id="education"
    variants={sectionEntrance}
    className="py-20 md:py-32 px-4 md:px-6 max-w-5xl mx-auto scroll-mt-32"
  >
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-24">
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tight leading-[1.1] mb-4">
        Formation<br /><span className="neon-accent py-2 px-8 block w-max">Path</span>
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-slate-600 font-bold uppercase text-[10px] tracking-[0.3em] pl-2">The Academic Foundation</motion.p>
    </motion.div>

    <div className="space-y-4 relative">
      {EDUCATION.map((edu, idx) => (
        <motion.div
          key={edu.degree + idx}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex gap-6 md:gap-10 group"
        >
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-black z-10 shadow-lg" />
            <div className="w-px h-full bg-gradient-to-b from-cyan-400/50 via-white/5 to-transparent" />
          </div>
          <div className="pb-20 flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-cyan-400/5 border border-cyan-400/20">{edu.grade}</span>
              {edu.year && <span className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.3em]">{edu.year}</span>}
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-2 uppercase italic tracking-tight leading-snug">{edu.degree}</h3>
            <p className="text-slate-400 font-bold mb-8 text-sm md:text-lg tracking-wide">{edu.institution}</p>
            <div className="glass p-6 md:p-8 rounded-[1.5rem] border-white/5 text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl group-hover:text-slate-200 transition-colors">
              {edu.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const CertificationCard = memo(({ cert }: { cert: Certification }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5, borderColor: "rgba(0,242,255,0.1)" }}
    className="glass p-8 rounded-[2rem] border-white/5 transition-all group relative overflow-hidden"
  >
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-400/5 blur-2xl rounded-full group-hover:bg-cyan-400/10 transition-colors"></div>
    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 border-white/5 text-cyan-400 shadow-xl">
      <i className="fas fa-certificate text-xl"></i>
    </div>
    <h3 className="text-lg font-black text-white mb-2 uppercase italic tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
    <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{cert.issuer}</p>
  </motion.div>
));

const CertificationsSection = () => (
  <motion.section
    id="certifications"
    variants={sectionEntrance}
    className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto scroll-mt-32"
  >
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-24">
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tight mb-4 leading-none">Verified<br /><span className="neon-accent">Credentials</span></motion.h2>
      <motion.p variants={fadeInUp} className="text-slate-600 font-bold uppercase text-[10px] tracking-[0.3em] pl-2">Industry & Skills Validation</motion.p>
    </motion.div>

    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {CERTIFICATIONS.map((cert) => (
        <CertificationCard key={cert.title} cert={cert} />
      ))}
    </motion.div>
  </motion.section>
);

const Contact = () => {
  return (
    <motion.section
      id="contact"
      variants={sectionEntrance}
      className="py-20 md:py-32 px-4 md:px-6 scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass rounded-[2.5rem] p-8 md:p-14 relative border-white/5 text-center"
      >
        <div className="mb-12">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white italic uppercase leading-[1.1] tracking-tight mb-8">
            Initiate <span className="neon-accent">Contact</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-500 text-xs md:text-sm font-light leading-relaxed max-w-sm mx-auto">
            Ready for a high-performance collaboration? Send a transmission or reach out via social protocols.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <a href="mailto:aadhishcpat@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group p-6 glass rounded-2xl border-white/5 hover:border-cyan-400/30 transition-all">
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <i className="fas fa-envelope text-xl"></i>
            </div>
            <span className="text-sm font-black text-white italic break-all leading-snug">aadhishcpat@gmail.com</span>
            <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">Email Protocol</span>
          </a>
          <a href="https://www.linkedin.com/in/aadhish-kumar" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group p-6 glass rounded-2xl border-white/5 hover:border-cyan-400/30 transition-all">
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <i className="fab fa-linkedin text-xl"></i>
            </div>
            <span className="text-sm font-black text-white italic break-all leading-snug">aadhish-kumar</span>
            <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">Professional Link</span>
          </a>
        </div>

        <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#00f2ff" }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e, '#home')}
            className="px-10 py-4 bg-white text-black font-black uppercase tracking-[0.3em] rounded-xl shadow-2xl text-[10px]"
          >
            Back to Top
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

const Footer = memo(() => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-center md:text-left">
        <div className="text-3xl font-black text-white italic uppercase mb-2 leading-none tracking-tight">AADHISH<span className="text-cyan-400">.</span></div>
        <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.5em]">IoT Engineer // AI Researcher</p>
      </div>
      <div className="flex gap-12">
        {[
          { name: 'Github', url: 'https://github.com/aadhish16' },
          { name: 'Linkedin', url: 'https://www.linkedin.com/in/aadhish-kumar' }
        ].map(link => (
          <motion.a
            key={link.name}
            href={link.url}
            whileHover={{ scale: 1.1, color: "#00f2ff" }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
      <div className="text-[10px] font-bold text-slate-800 uppercase tracking-[0.2em]">
        © 2025 // Chennai, India
      </div>
    </div>
  </footer>
));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="overflow-x-hidden bg-[#010204] w-full min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div key="main-content" className="w-full">
            <LiveNetworkBackground />
            <Navbar />
            <motion.main
              variants={pageEntrance}
              initial="initial"
              animate="animate"
              className="w-full relative z-10"
            >
              <Hero />
              <SkillsSection />
              <BentoGrid />
              <Timeline />
              <CertificationsSection />
              <Contact />
            </motion.main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;