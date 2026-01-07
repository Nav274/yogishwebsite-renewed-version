import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              India's Leading Robotic Orthopaedic Center
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6"
          >
            Precision{" "}
            <span className="text-gradient-teal italic">Robotic Surgery</span>{" "}
            for Lasting Mobility
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Experience next-generation joint care with state-of-the-art robotic assistance. 
            From diagnosis to rehabilitation, we restore your movement and quality of life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#contact" className="btn-accent group">
              Schedule Your Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Explore Our Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-primary mr-2" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-foreground">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-foreground">5000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Surgeries Performed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-foreground">99%</span>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
