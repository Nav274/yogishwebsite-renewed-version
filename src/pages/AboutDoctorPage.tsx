import { motion } from "framer-motion";
import { Award, BookOpen, Users, Stethoscope, GraduationCap, Trophy, MapPin, Calendar, Heart } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const achievements = [
  { icon: Trophy, value: "5000+", label: "Successful Surgeries" },
  { icon: Users, value: "15+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Awards & Recognition" },
  { icon: BookOpen, value: "30+", label: "Research Papers" },
];

const qualifications = [
  { degree: "MBBS", institution: "All India Institute of Medical Sciences (AIIMS), New Delhi", year: "2005" },
  { degree: "MS (Orthopaedics)", institution: "PGIMER, Chandigarh", year: "2009" },
  { degree: "DNB (Orthopaedics)", institution: "National Board of Examinations", year: "2010" },
  { degree: "Fellowship in Robotic Joint Replacement", institution: "University Hospital, Frankfurt, Germany", year: "2012" },
  { degree: "Advanced Training in Minimally Invasive Surgery", institution: "Johns Hopkins Hospital, USA", year: "2014" },
];

const timeline = [
  { year: "2005-2009", title: "Medical Training", description: "Completed MBBS and MS in Orthopaedics from premier institutions" },
  { year: "2010-2014", title: "International Fellowship", description: "Advanced training in Germany and USA for robotic surgery techniques" },
  { year: "2015-2018", title: "Building Expertise", description: "Established robotic surgery program at leading hospital in Bangalore" },
  { year: "2019-Present", title: "OrthoRobotics", description: "Founded OrthoRobotics to bring world-class joint care to more patients" },
];

const specializations = [
  "Robotic Knee Replacement",
  "Hip Arthroplasty",
  "Revision Joint Surgery",
  "Sports Medicine",
  "Arthroscopy",
  "Trauma Surgery",
  "Minimally Invasive Surgery",
  "Complex Deformity Correction",
  "Partial Knee Replacement",
  "Joint Preservation",
];

const AboutDoctorPage = () => {
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
                <Stethoscope className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Your Surgeon</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-6">
                Dr. <span className="text-gradient-teal italic">Rajesh Kumar</span>
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                MS, DNB, FRCS | Senior Consultant Orthopaedic Surgeon
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A pioneer in robotic orthopaedic surgery with over 15 years of experience, 
                Dr. Rajesh Kumar has dedicated his career to restoring mobility and 
                transforming lives through precision medicine and compassionate care.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/book-appointment" className="btn-accent">
                  Book Consultation
                </a>
                <a 
                  href="#qualifications" 
                  className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  View Credentials
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src={doctorImage}
                  alt="Dr. Rajesh Kumar"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card border-y border-border py-16 mb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-serif font-bold text-foreground mb-2">{item.value}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Philosophy & Approach</h2>
            </div>
            <blockquote className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-xl md:text-2xl italic text-foreground leading-relaxed text-center">
                "Every patient is unique, and so should be their treatment. My goal is to restore not just 
                mobility, but the quality of life that comes with it. I believe in combining cutting-edge 
                technology with a deeply personal approach to care."
              </p>
              <footer className="mt-6 text-center text-primary font-medium">
                — Dr. Rajesh Kumar
              </footer>
            </blockquote>
          </motion.div>
        </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif italic">Education & Qualifications</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{qual.degree}</h3>
                    <p className="text-muted-foreground">{qual.institution}</p>
                  </div>
                  <span className="text-primary font-medium">{qual.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section className="bg-card border-y border-border py-24 mb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif italic">Career Journey</h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start gap-6 mb-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden md:block flex-1" />
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1.5" />
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-primary font-medium text-sm">{item.year}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="container mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif italic">Areas of Expertise</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {specializations.map((specialty, index) => (
              <motion.span
                key={specialty}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * index }}
                className="px-5 py-2.5 rounded-full bg-secondary/50 text-foreground border border-border hover:border-primary/50 transition-colors"
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-12 text-center border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a consultation with Dr. Rajesh Kumar and take the first step 
              towards pain-free mobility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/book-appointment" className="btn-accent">
                Book Appointment
              </a>
              <a href="/contact" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium">
                Contact Us
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutDoctorPage;
