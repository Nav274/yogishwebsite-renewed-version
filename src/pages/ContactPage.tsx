import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Re-Flex Super Specialty Clinic,", "#301/C, 35th Cross, 9th Main, 4th Block, Jayanagar, Bengaluru – 560011"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 94803 85533", "+91 80 4567 8900"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@orthorobotics.in", "appointments@orthorobotics.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">
              Contact <span className="text-gradient-teal">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services or want to schedule a consultation? 
              We're here to help you on your journey to better mobility.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card rounded-3xl border border-border p-8 md:p-10">
                <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your concern or question..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-accent w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="icon-container mb-4 group-hover:animate-pulse-glow">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl overflow-hidden border border-border h-80"
              >
                
              </motion.div> */}

            </motion.div>
          </div>

        <div className="card text-center mt-12">
          <h1 className="text-2xl font-serif mb-6">Clinic Schedules</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
            {/* Card 1 */}
            <div className="card-glass p-6 text-center card-service">
              <h3 className="text-lg font-semibold mb-2">
                Manipal Hospital, Kanakapura Road
              </h3>
              <p className="text-sm text-muted-foreground">
               Wednesday & Saturday:
              </p>
              <p className="text-sm text-muted-foreground">
                11:00 AM – 5:00 PM
              </p>
              <a href="tel:+91 73530 26633" className="text-sm text-muted-foreground">+91 73530 26633</a>
            </div>

            {/* Card 2 */}
            <div className="card-glass p-6 text-center card-service">
              <h3 className="text-lg font-semibold mb-2">
                Malathi Manipal Hospital, Jayanagar
              </h3>
              <p className="text-sm text-muted-foreground">
                Monday & Friday: 10:30 AM – 4:00 PM
              </p>
               <p className="text-sm text-muted-foreground">
                10:30 AM – 4:00 PM
              </p>
              <a href="tel:080 4009 1000" className="text-sm text-muted-foreground">080 4009 1000</a>
            </div>

            {/* Card 3 */}
            <div className="card-glass p-6 text-center card-service">
              <h3 className="text-lg font-semibold mb-2">
                Re-Flex Super Specialty Clinic, Jayanagar
              </h3>
              <p className="text-sm text-muted-foreground">
               Daily: 5:00 PM – 8:00 PM
              </p>
              <a href="tel:+91 94803 75533" className="text-sm text-muted-foreground">+91 94803 75533</a>
            </div>

          </div>
        </div>

          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center mt-12 justify-center">
            {/* <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground">Interactive Map</p>
              <p className="text-sm text-muted-foreground/70">123 Healthcare Avenue, Bangalore</p>
            </div> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.739716217904!2d77.5809170758868!3d12.924443415908819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158e83abb207%3A0x88ff31b0d4c22bfd!2sRe-flex%20Super%20Specialty%20Clinic!5e0!3m2!1sen!2sin!4v1765519245073!5m2!1sen!2sin"
              width="100%"
              height="400px"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
