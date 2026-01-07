import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 58,
    procedure: "Robotic Knee Replacement",
    rating: 5,
    quote: "After years of knee pain, I can finally walk without discomfort. The robotic surgery was precise, and my recovery was remarkably quick. Dr. Yogish and his team are exceptional.",
    location: "Bangalore"
  },
  {
    id: 2,
    name: "Lakshmi Venkatesh",
    age: 62,
    procedure: "Robotic Hip Replacement",
    rating: 5,
    quote: "I was hesitant about surgery, but the team explained everything clearly. The minimally invasive approach meant I was back to my daily routine in weeks, not months.",
    location: "Chennai"
  },
  {
    id: 3,
    name: "Mohammed Hussain",
    age: 45,
    procedure: "Sports Injury Treatment",
    rating: 5,
    quote: "As a former athlete, getting back to an active lifestyle was crucial. The arthroscopic surgery and rehabilitation program exceeded my expectations.",
    location: "Mysore"
  },
  {
    id: 4,
    name: "Priya Sharma",
    age: 55,
    procedure: "Revision Joint Surgery",
    rating: 5,
    quote: "My first replacement failed elsewhere. OrthoRobotics gave me a second chance. Their expertise in complex cases is truly remarkable.",
    location: "Hyderabad"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6"
          >
            Patient <span className="text-gradient-teal italic">Stories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Real experiences from patients who've regained their mobility and quality of life.
          </motion.p>
        </div>

        {/* Main testimonial display */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Large quote icon */}
            <Quote className="absolute -top-8 -left-4 w-24 h-24 text-primary/10 rotate-180" />
            
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-card via-card to-secondary/30 rounded-3xl border border-border p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Left - Patient info */}
                <div className="text-center md:text-left">
                  <div className="w-20 h-20 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <span className="text-3xl font-serif font-bold text-primary">
                      {testimonials[activeIndex].name[0]}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Age {testimonials[activeIndex].age} • {testimonials[activeIndex].location}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {testimonials[activeIndex].procedure}
                  </div>
                </div>

                {/* Right - Quote */}
                <div className="md:col-span-2">
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/30 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
