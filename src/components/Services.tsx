import { motion } from "framer-motion";
import { 
  Bone, 
  Activity, 
  RefreshCw, 
  Scissors, 
  Microscope, 
  Zap,
  ClipboardCheck,
  Pill,
  Heart,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bone,
    title: "Robotic Hip Replacement",
    description: "Robotic-guided hip arthroplasty with meticulous planning for long-lasting alignment and function.",
    path:"services/robotic-hip-replacement",
  },
  {
    icon: Activity,
    title: "Robotic Knee Replacement",
    description: "State-of-the-art robotic knee arthroplasty for improved implant fit and quicker recovery.",
    path:"services/robotic-knee-replacement"
  },
  {
    icon: RefreshCw,
    title: "Revision Joint Surgery",
    description: "Comprehensive solutions for failed or painful implants with advanced biomaterials and reconstruction.",
    path:"services/sports-injury"
  },
  {
    icon: Scissors,
    title: "Minimally Invasive Surgery",
    description: "Soft-tissue sparing approaches for faster healing, lower pain, and quicker return to work."
  },
  {
    icon: Microscope,
    title: "Arthroscopy",
    description: "Keyhole diagnostic and therapeutic arthroscopy for sports injuries and cartilage preservation."
  },
  {
    icon: Zap,
    title: "Trauma & Sports Injury",
    description: "Evidence-based acute trauma care, fracture fixation, and sports medicine protocols."
  },
  {
    icon: ClipboardCheck,
    title: "Pre & Post-op Rehabilitation",
    description: "Structured optimisation before surgery and guided physiotherapy for complete recovery."
  },
  {
    icon: Pill,
    title: "Pain Management Protocols",
    description: "Multimodal pain relief strategies that minimise opioids and keep you moving comfortably."
  },
  {
    icon: Heart,
    title: "Patient-Centric Mobility Plans",
    description: "Lifestyle-aligned mobility restoration that blends technology, therapy, and continuous monitoring."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {

  const [MouseEntered, setMouseEntered] = useState(false);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-6"
          >
            Comprehensive Joint Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From diagnosis to rehabilitation, we offer a full spectrum of orthopaedic services 
            focused on restoring your mobility and quality of life.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div 
              key={service.title}
              variants={itemVariants}
              className="card-service group"
              onMouseEnter={()=>setMouseEntered(!MouseEntered)} onMouseLeave={()=>setMouseEntered(!MouseEntered)}
            >
              <Link to={service.path} >
                <div className="icon-container mb-6 group-hover:animate-pulse-glow transition-all">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {/* Link indicator */}
                {service.path && (
                  <div className="flex items-center gap-2 mt-4 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
