import { motion } from "framer-motion";
import { Bone, CheckCircle, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Shield, title: "Optimal Cup Positioning", description: "Precise acetabular component placement for reduced dislocation risk" },
  { icon: Clock, title: "Quicker Mobilization", description: "Patients typically bear weight within hours of surgery" },
  { icon: Zap, title: "Preserved Bone Stock", description: "Minimal bone removal for future revision options if needed" },
  { icon: CheckCircle, title: "Natural Movement", description: "Accurate leg length and offset restoration for natural gait" },
];

const process = [
  { step: "01", title: "Comprehensive Evaluation", description: "Detailed clinical exam and imaging to assess hip condition" },
  { step: "02", title: "3D Planning", description: "CT-based planning for personalized implant selection and positioning" },
  { step: "03", title: "Precision Surgery", description: "Robotic arm provides haptic feedback for accurate bone preparation" },
  { step: "04", title: "Accelerated Recovery", description: "Protocol-driven rehabilitation for optimal outcomes" },
];

const conditions = [
  "Osteoarthritis of the Hip",
  "Rheumatoid Arthritis",
  "Avascular Necrosis",
  "Hip Dysplasia",
  "Post-traumatic Arthritis",
  "Failed Previous Hip Surgery",
];

const faqs = [
  { q: "What makes robotic hip replacement different?", a: "The robotic system creates a 3D model of your hip and guides surgery with sub-millimeter accuracy, optimizing implant positioning." },
  { q: "How long will my new hip last?", a: "With proper care, modern implants can last 20-25 years or more. Precise robotic placement may extend this further." },
  { q: "When can I return to normal activities?", a: "Most patients drive in 4-6 weeks, return to work in 6-8 weeks, and resume low-impact sports in 3-4 months." },
  { q: "What are the risks?", a: "Robotic surgery has lower complication rates than traditional surgery, but all surgeries carry some risk which we'll discuss in detail." },
];

const RoboticHipReplacementPage = () => {
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
                <Bone className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Advanced Procedure</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">
                Robotic <span className="text-gradient-teal italic">Hip Replacement</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Regain your freedom of movement with our precision robotic hip replacement surgery. 
                Advanced 3D planning and robotic guidance ensure optimal implant positioning for 
                a more natural-feeling hip and lasting results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/book-appointment" className="btn-accent">
                  Schedule Consultation
                </a>
                <a href="#conditions" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium">
                  Conditions We Treat
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
                <Bone className="w-32 h-32 text-primary/50" />
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
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Benefits of Robotic Hip Surgery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages of computer-guided precision in hip replacement surgery.
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

        {/* Conditions Section */}
        <section id="conditions" className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Conditions We Treat</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hip replacement may be recommended for various conditions causing hip pain and disability.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {conditions.map((condition, index) => (
              <motion.span
                key={condition}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className="px-5 py-2.5 rounded-full bg-secondary/50 text-foreground border border-border"
              >
                {condition}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-card border-y border-border py-24 mb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Your Journey to a New Hip</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Frequently Asked Questions</h2>
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
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Start Your Path to Pain-Free Living</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Don't let hip pain limit your life. Schedule a consultation to learn if robotic hip replacement is right for you.
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

export default RoboticHipReplacementPage;
