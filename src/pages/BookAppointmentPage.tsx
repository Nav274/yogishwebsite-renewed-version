import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

const consultationTypes = [
  { id: "new", label: "New Patient Consultation", duration: "45 min", price: "₹1,500" },
  { id: "followup", label: "Follow-up Visit", duration: "20 min", price: "₹800" },
  { id: "second-opinion", label: "Second Opinion", duration: "60 min", price: "₹2,500" },
  { id: "pre-surgery", label: "Pre-Surgery Evaluation", duration: "30 min", price: "₹1,200" },
];

const BookAppointmentPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    concern: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Requested!",
      description: "We'll confirm your appointment within 2 hours.",
    });
    setStep(4);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Schedule Visit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">
              Book an <span className="text-gradient-teal">Appointment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule your consultation with Dr. Rajesh Kumar. We'll confirm your 
              appointment within 2 hours.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center mb-12"
          >
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  step >= s 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div className={`w-16 md:w-24 h-1 mx-2 rounded ${
                    step > s ? "bg-primary" : "bg-secondary"
                  }`} />
                )}
              </div>
            ))}
          </motion.div>

          {/* Step 1: Select Consultation Type */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-serif mb-6 text-center">Select Consultation Type</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {consultationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => { setSelectedType(type.id); setStep(2); }}
                    className={`p-6 rounded-2xl border text-left transition-all hover:border-primary/50 ${
                      selectedType === type.id 
                        ? "border-primary bg-primary/10" 
                        : "border-border bg-card"
                    }`}
                  >
                    <h3 className="font-semibold text-foreground mb-2">{type.label}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {type.duration}
                      </span>
                      <span className="text-primary font-medium">{type.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-serif mb-6 text-center">Choose Date & Time</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <label className="text-sm text-muted-foreground mb-3 block">Select Date</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="text-sm text-muted-foreground mb-3 block">Select Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg text-sm transition-all ${
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-full border border-border text-muted-foreground hover:bg-secondary transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="btn-accent flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Patient Details */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-serif mb-6 text-center">Your Details</h2>
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                      <User className="w-4 h-4" /> Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Age *</label>
                    <Input
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Medical Concern
                  </label>
                  <Textarea
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    placeholder="Briefly describe your symptoms or condition..."
                    rows={4}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full border border-border text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn-accent flex-1">
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-serif mb-4">Appointment Requested!</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for booking with us. We'll send you a confirmation message 
                within 2 hours with the final appointment details.
              </p>
              <div className="bg-card rounded-2xl border border-border p-6 max-w-sm mx-auto">
                <div className="text-left space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{consultationTypes.find(t => t.id === selectedType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </div>
              </div>
              <a href="/" className="btn-accent inline-block mt-8">
                Back to Home
              </a>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointmentPage;
