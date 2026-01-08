import { motion } from "framer-motion";
import { Activity, CheckCircle, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Shield, title: "Sub-millimeter Precision", description: "Robotic guidance ensures implant placement accuracy within 0.5mm" },
  { icon: Clock, title: "Faster Recovery", description: "Most patients walk within 24 hours and return home in 2-3 days" },
  { icon: Zap, title: "Less Pain", description: "Minimally invasive approach means less tissue trauma and reduced pain" },
  { icon: CheckCircle, title: "Longer Implant Life", description: "Precise alignment leads to better wear patterns and durability" },
];

const process = [
  { step: "01", title: "Pre-operative CT Scan", description: "A detailed 3D model of your knee is created for surgical planning" },
  { step: "02", title: "Virtual Surgery Planning", description: "Dr. Kumar plans the exact implant size and positioning digitally" },
  { step: "03", title: "Robotic-Assisted Surgery", description: "The robotic arm guides the surgeon for precise bone preparation" },
  { step: "04", title: "Recovery & Rehabilitation", description: "Structured physiotherapy program for optimal recovery" },
];

const faqs = [
  { q: "Am I a candidate for robotic knee replacement?", a: "Most patients with knee arthritis are candidates. We'll evaluate your specific condition during consultation." },
  { q: "How long does the surgery take?", a: "Typically 60-90 minutes, slightly longer than traditional surgery due to precision planning." },
  { q: "What's the recovery timeline?", a: "Walking within 24 hours, home in 2-3 days, driving in 4-6 weeks, full recovery in 3-6 months." },
  { q: "Is the robot performing the surgery?", a: "No, Dr. Kumar performs the surgery. The robot provides real-time guidance and boundaries for precision." },
];

const RoboticKneeReplacementPage = () => {
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
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Advanced Procedure</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">
                Robotic <span className="text-gradient-teal italic">Knee Replacement</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Experience the future of knee surgery with our state-of-the-art robotic-assisted 
                knee replacement. Achieve unprecedented precision, faster recovery, and better 
                long-term outcomes with personalized surgical planning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/book-appointment" className="btn-accent">
                  Schedule Consultation
                </a>
                <a href="#process" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium">
                  Learn the Process
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
                <Activity className="w-32 h-32 text-primary/50" />
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
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Why Choose Robotic Surgery?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Robotic-assisted surgery combines the precision of advanced technology with 
                the expertise of your surgeon for optimal results.
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

        {/* Process Section */}
        <section id="process" className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">The Surgical Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to full recovery, here's what to expect with robotic knee replacement.
            </p>
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

        {/* FAQ Section */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Common Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Restore Your Mobility?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Take the first step towards pain-free movement. Schedule your consultation today.
            </p>
            <a href="/book-appointment" className="btn-accent">
              Book Your Consultation
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoboticKneeReplacementPage;
