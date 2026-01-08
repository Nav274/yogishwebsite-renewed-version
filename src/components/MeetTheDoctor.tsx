import { motion } from "framer-motion";
import { Award, BookOpen, Users, Stethoscope, GraduationCap, Trophy, Camera } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";
import { Link } from "react-router-dom";

const achievements = [
  { icon: Trophy, label: "5000+", description: "Successful Surgeries" },
  { icon: Users, label: "15+", description: "Years Experience" },
  { icon: Award, label: "50+", description: "Awards & Recognition" },
  { icon: BookOpen, label: "30+", description: "Research Papers" },
];

const qualifications = [
  "MBBS - All India Institute of Medical Sciences (AIIMS)",
  "MS (Orthopaedics) - PGIMER, Chandigarh",
  "DNB (Orthopaedics) - National Board of Examinations",
  "Fellowship in Robotic Joint Replacement - Germany",
  "Advanced Training in Minimally Invasive Surgery - USA",
];

const MeetTheDoctor = () => {
  return (
    <section id="doctor" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Your Surgeon</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Meet <span className="text-gradient-teal italic">Dr. Yogish Vijaya Kumar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
           Senior Consultant - Orthopaedic & Joint Replacement Surgery
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Doctor Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                {/* <img
                  src={doctorImage}
                  alt="Dr. Rajesh Kumar - Orthopaedic Surgeon"
                  className="w-full h-auto object-cover"
                /> */}
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary via-card to-muted flex items-center   justify-center w-full h-auto object-cover">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Camera className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-sm uppercase tracking-wider text-primary font-medium">
                      {/* {selectedImageData.category} */}
                    </span>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mt-2">
                      {/* {selectedImageData.title} */}
                    </h3>
                    <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                      {/* {selectedImageData.description} */}
                    </p>
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif text-foreground mb-1">Dr. Yogish Vijaya Kumar</h3>
                  {/* <p className="text-primary font-medium">MS, DNB, FRCS</p>
                  <p className="text-muted-foreground text-sm mt-1">Senior Consultant Orthopaedic Surgeon</p> */}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Achievement stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {/* {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-serif font-bold text-foreground">{item.label}</div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))} */}
            </motion.div>
          </motion.div>

          {/* Bio Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Introduction */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
               Dr. Yogish Vijaya Kumar is a highly skilled and experienced Senior Consultant for robotic Orthopaedic and Joint Replacement Surgery. With an impressive list of qualifications and a wide range of expertise, he has made significant contributions to orthopaedics. Dr. Yogish is known for his proficiency in geriatric orthopaedics, primary and revision joint replacement, sports injuries of the knee joint, complex and neglected trauma, pelvic and acetabular fractures, cartilage restoration, and arthritis.
              </p><br/>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Yogish’s educational background is extensive and noteworthy. He received his MBBS degree from JJMMC Davangere RGUHS Bangalore in 1999. He further pursued his specialisation in Orthopaedics, earning a Master of Surgery (MS) degree from Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) in 2003. Dr. Yogish obtained a prestigious MChOrth degree from the United Kingdom to enhance his expertise and completed the Associate of the Royal College of Surgeons (ARCS) program in England. 
              </p>
            </div>

            {/* Philosophy Quote */}
            {/* <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary"
            > */}
              {/* <p className="text-lg italic text-foreground">
                "Every patient is unique, and so should be their treatment. My goal is to restore not just 
                mobility, but the quality of life that comes with it."
              </p> */}
              {/* <footer className="mt-3 text-sm text-muted-foreground">
                — Dr. Rajesh Kumar
              </footer> */}
            {/* </motion.blockquote> */}

            {/* Qualifications */}
            <div>
              {/* <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-serif text-foreground">Education & Qualifications</h4>
              </div>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <motion.li
                    key={qual}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>{qual}</span>
                  </motion.li>
                ))}
              </ul> */}
            </div>

            {/* Specializations */}
            {/* <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Robotic Knee Replacement",
                  "Hip Arthroplasty",
                  "Revision Joint Surgery",
                  "Sports Medicine",
                  "Arthroscopy",
                  "Trauma Surgery",
                  "Minimally Invasive Surgery",
                  "Complex Deformity Correction"
                ].map((specialty, index) => (
                  <motion.span
                    key={specialty}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {specialty}
                  </motion.span>
                ))}
              </div>
            </div> */}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#contact" className="btn-accent">
                Book a Consultation
              </a>
              <Link
                to="/about-doctor" 
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
              >
                Know More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheDoctor;
