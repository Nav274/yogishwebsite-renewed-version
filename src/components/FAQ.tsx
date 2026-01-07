import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is robotic-assisted joint replacement surgery?",
    answer: "Robotic-assisted surgery uses advanced computer systems and robotic arms to help surgeons plan and perform joint replacements with sub-millimeter precision. The robot doesn't operate independently—it assists the surgeon in executing a pre-planned surgical approach based on your unique anatomy, resulting in better alignment and potentially longer-lasting implants."
  },
  {
    question: "How long does recovery take after robotic knee replacement?",
    answer: "Most patients can walk with assistance on the same day or the next day after surgery. Hospital stay is typically 2-3 days. You'll use a walker for 2-4 weeks, then transition to a cane. Full recovery and return to normal activities usually takes 6-12 weeks, though this varies based on individual factors and adherence to physiotherapy."
  },
  {
    question: "Is robotic surgery safer than traditional surgery?",
    answer: "Studies show robotic-assisted surgery offers several advantages: more precise bone cuts, better implant positioning, less soft tissue damage, reduced blood loss, and potentially faster recovery. The technology allows for personalized surgical planning based on 3D CT scans of your joint, reducing the margin for error."
  },
  {
    question: "What are the costs involved and does insurance cover it?",
    answer: "Robotic surgery may have a slightly higher upfront cost due to the technology involved. However, many insurance providers now cover robotic joint replacement as it's becoming the standard of care. We work with most major insurance providers and can help verify your coverage. We also offer flexible payment plans for self-pay patients."
  },
  {
    question: "How do I know if I'm a candidate for joint replacement?",
    answer: "Candidates typically have severe joint pain that limits daily activities, stiffness affecting mobility, pain that persists despite medication and physical therapy, and X-ray evidence of significant joint damage. Age alone isn't a determining factor—we evaluate each patient individually. Schedule a consultation for a thorough assessment."
  },
  {
    question: "What happens during my first consultation?",
    answer: "During your first visit, we'll review your medical history, conduct a physical examination, and analyze your X-rays or MRI scans. We'll discuss your symptoms, lifestyle goals, and treatment options—both surgical and non-surgical. If surgery is recommended, we'll explain the procedure, timeline, and answer all your questions."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Title */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Got Questions?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Frequently Asked{" "}
                <span className="text-gradient-teal italic">Questions</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                Find answers to common questions about robotic surgery, recovery, 
                and what to expect throughout your treatment journey.
              </p>

              <a href="#contact" className="btn-accent inline-flex">
                Still have questions? Contact us
              </a>
            </motion.div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-card border-primary/30 shadow-lg shadow-primary/5" 
                    : "bg-card/50 border-border hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-foreground pr-4 text-lg">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    openIndex === index ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-border mb-4" />
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
