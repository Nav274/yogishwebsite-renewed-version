import { 
  Bone, 
  Activity, 
  RefreshCw, 
  Scissors, 
  Microscope, 
  Zap,
  ClipboardCheck,
  Pill,
  Heart
} from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Robotic Hip Replacement",
    description: "Robotic-guided hip arthroplasty with meticulous planning for long-lasting alignment and function."
  },
  {
    icon: Activity,
    title: "Robotic Knee Replacement",
    description: "State-of-the-art robotic knee arthroplasty for improved implant fit and quicker recovery."
  },
  {
    icon: RefreshCw,
    title: "Revision Joint Surgery",
    description: "Comprehensive solutions for failed or painful implants with advanced biomaterials and reconstruction."
  },
  {
    icon: Scissors,
    title: "Minimally Invasive Surgery",
    description: "Soft-tissue sparing approaches for faster healing, lower pain, and quicker return to work."
  },
  {
    icon: Microscope,
    title: "Arthroscopy",
    description: "Keyhole diagnostic and therapeutic arthroscopy for sports injuries and cartilage preservation."
  },
  {
    icon: Zap,
    title: "Trauma & Sports Injury",
    description: "Evidence-based acute trauma care, fracture fixation, and sports medicine protocols."
  },
  {
    icon: ClipboardCheck,
    title: "Pre & Post-op Rehabilitation",
    description: "Structured optimisation before surgery and guided physiotherapy for complete recovery."
  },
  {
    icon: Pill,
    title: "Pain Management Protocols",
    description: "Multimodal pain relief strategies that minimise opioids and keep you moving comfortably."
  },
  {
    icon: Heart,
    title: "Patient-Centric Mobility Plans",
    description: "Lifestyle-aligned mobility restoration that blends technology, therapy, and continuous monitoring."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-6">
            Comprehensive Joint Care
          </h2>
          <p className="text-lg text-muted-foreground">
            From diagnosis to rehabilitation, we offer a full spectrum of orthopaedic services 
            focused on restoring your mobility and quality of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container mb-6 group-hover:animate-pulse-glow transition-all">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
