import { motion } from "framer-motion";
import { Zap, CheckCircle, Clock, Shield, Target, Activity, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const treatments = [
  { title: "ACL Reconstruction", description: "Arthroscopic ligament reconstruction for knee stability" },
  { title: "Meniscus Repair", description: "Preservation and repair of torn meniscal cartilage" },
  { title: "Rotator Cuff Repair", description: "Shoulder tendon repair for restored function" },
  { title: "Cartilage Restoration", description: "Advanced techniques to regenerate damaged cartilage" },
  { title: "Fracture Management", description: "Surgical and non-surgical treatment of sports fractures" },
  { title: "Tendon Repair", description: "Treatment of Achilles, patellar, and other tendon injuries" },
];

const benefits = [
  { icon: Target, title: "Athlete-Focused Care", description: "Treatment plans designed for your sport and performance goals" },
  { icon: Clock, title: "Rapid Return to Play", description: "Evidence-based protocols to minimize time away from sport" },
  { icon: Shield, title: "Injury Prevention", description: "Assessment and training to prevent future injuries" },
  { icon: Activity, title: "Performance Optimization", description: "Biomechanical analysis to enhance athletic performance" },
];

const sports = [
  "Cricket", "Football", "Tennis", "Badminton", "Running", "Swimming",
  "Basketball", "Volleyball", "Golf", "Martial Arts", "Cycling", "Gym/Fitness"
];

const process = [
  { step: "01", title: "Injury Assessment", description: "Comprehensive evaluation with advanced imaging" },
  { step: "02", title: "Treatment Plan", description: "Customized approach based on injury and goals" },
  { step: "03", title: "Treatment/Surgery", description: "Minimally invasive techniques when possible" },
  { step: "04", title: "Sport-Specific Rehab", description: "Progressive return to play protocol" },
];

const SportsInjuryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Sports Medicine</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">
                Sports <span className="text-gradient-teal italic">Injury Care</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Get back in the game with expert sports medicine care. From acute injuries to 
                chronic conditions, we provide comprehensive treatment for athletes at all levels 
                using the latest techniques and evidence-based protocols.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/book-appointment" className="btn-accent">
                  Get Back in the Game
                </a>
                <a href="#treatments" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium">
                  View Treatments
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                <Zap className="w-32 h-32 text-primary/50" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-card border-y border-border py-24 mb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Why Athletes Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our sports medicine program is designed to get you back to peak performance safely and efficiently.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="icon-container mx-auto mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports We Treat */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Sports We Treat</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From weekend warriors to professional athletes, we understand the unique demands of every sport.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {sports.map((sport, index) => (
              <motion.span
                key={sport}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * index }}
                className="px-5 py-2.5 rounded-full bg-secondary/50 text-foreground border border-border hover:border-primary/50 transition-colors"
              >
                {sport}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Treatments Section */}
        <section id="treatments" className="bg-card border-y border-border py-24 mb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Treatment Options</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of treatments for sports-related injuries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{treatment.title}</h3>
                  <p className="text-sm text-muted-foreground">{treatment.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Your Recovery Journey</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-5xl font-serif text-primary/20 absolute top-4 right-4">{item.step}</span>
                <h3 className="font-semibold text-foreground mb-2 pr-12">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/50" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-12 text-center border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Don't Let Injury Sideline You</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get expert care and get back to the sport you love. Schedule your consultation today.
            </p>
            <a href="/book-appointment" className="btn-accent">
              Book Sports Medicine Consultation
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SportsInjuryPage;
