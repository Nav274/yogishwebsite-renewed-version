import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, Award, Building2 } from "lucide-react";

const credentials = [
  "MBBS, MS (Orthopaedics), DNB",
  "Fellowship in Robotic Joint Replacement",
  "Advanced Training in Minimally Invasive Surgery",
  "Member, Indian Orthopaedic Association"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Expert Orthopaedic Surgeon
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Dedicated to <span className="text-gradient-teal italic">Restoring</span> Your Movement
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 15 years of experience in orthopaedic surgery and specialized training 
              in robotic-assisted procedures, we bring cutting-edge technology and compassionate 
              care together. Our mission is to help every patient regain their mobility and 
              return to the life they love.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We believe in a patient-first approach, combining advanced surgical techniques 
              with personalized treatment plans. From initial consultation through rehabilitation, 
              you'll receive comprehensive care tailored to your unique needs.
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{credential}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn-accent inline-flex">
              Meet the Team
            </a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary border border-border p-8">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              
              <div className="relative space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="icon-container flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Excellence in Care</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognized for outstanding patient outcomes and innovative surgical approaches.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="icon-container flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">State-of-the-Art Facility</h4>
                    <p className="text-sm text-muted-foreground">
                      Equipped with the latest robotic surgical systems and diagnostic equipment.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="text-3xl font-serif font-bold text-primary mb-1">98%</div>
                    <p className="text-xs text-muted-foreground">Patient Satisfaction</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-accent/5 border border-accent/20">
                    <div className="text-3xl font-serif font-bold text-accent mb-1">24hr</div>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
