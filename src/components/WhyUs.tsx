import { motion } from "framer-motion";
import { Bot, Target, Clock, Heart, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Bot,
    title: "Robotic Precision",
    description: "Sub-millimeter accuracy with robotic-assisted surgery ensures optimal implant positioning and longevity."
  },
  {
    icon: Target,
    title: "Personalized Planning",
    description: "3D CT-based surgical planning customized to your unique anatomy for the best possible outcome."
  },
  {
    icon: Clock,
    title: "Faster Recovery",
    description: "Minimally invasive techniques mean less tissue damage, reduced pain, and quicker return to daily activities."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Patient-centered approach with clear communication and support throughout your journey."
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "Thousands of successful surgeries with consistently high patient satisfaction rates."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Staying at the forefront of orthopaedic innovation through ongoing research and training."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6"
          >
            Why Choose <span className="text-gradient-teal italic">OrthoRobotics</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We combine cutting-edge technology with personalized care to deliver 
            exceptional outcomes for every patient.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-container">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
