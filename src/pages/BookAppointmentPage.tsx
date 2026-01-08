import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Phone,
  Send,
  CheckCircle,
  MapPin,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const clinicLocations = [
  {
    name: "Manipal Hospital, Kanakapura Road",
    schedule: "Wednesday & Saturday • 11:00 AM – 5:00 PM",
  },
  {
    name: "Malathi Manipal Hospital, Jayanagar",
    schedule: "Monday & Friday • 10:30 AM – 4:00 PM",
  },
  {
    name: "Re-Flex Super Specialty Clinic, Jayanagar",
    schedule: "Daily • 5:00 PM – 8:00 PM",
  },
];

export default function BookAppointmentPage() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    date: "",
    clinic: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSubmitting(true);

    console.log("Appointment Data:", formData);

    toast({
      title: "Appointment Requested",
      description: "Our team will contact you within 24–48 hours.",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* PAGE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Schedule Consultation
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">
              Book an <span className="text-gradient-teal">Appointment</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill in your details and our team will confirm your appointment
              shortly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="card-glass p-8 space-y-8 card-service"
              >
                <h2 className="text-2xl font-semibold">
                  Appointment Information
                </h2>

                {/* PERSONAL INFO */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label>Phone Number *</Label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label>Email (optional)</Label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label>Age</Label>
                    <Input
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* DATE & CLINIC */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label>Preferred Date *</Label>
                    <Input
                      type="datetime-local"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label>Clinic *</Label>
                    <Select
                      value={formData.clinic}
                      onValueChange={(v) =>
                        setFormData((p) => ({ ...p, clinic: v }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select clinic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manipal">
                          Manipal Hospital
                        </SelectItem>
                        <SelectItem value="malathi">
                          Malathi Manipal Hospital
                        </SelectItem>
                        <SelectItem value="reflex">
                          Re-Flex Clinic
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* REASON */}
                <div>
                  <Label>Reason *</Label>
                  <Select
                    value={formData.reason}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, reason: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="knee">Knee Pain</SelectItem>
                      <SelectItem value="hip">Hip Pain</SelectItem>
                      <SelectItem value="second-opinion">
                        Second Opinion
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* MESSAGE */}
                <div>
                  <Label>Additional Notes</Label>
                  <Textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(Boolean(v))}
                  />
                  <p className="text-sm text-muted-foreground">
                    I agree to be contacted for appointment confirmation *
                  </p>
                </div>

                {/* SUBMIT */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={!agreed || isSubmitting}
                  className="w-full gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>
              </form>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="card-glass p-6 space-y-4 card-service">
                <h3 className="font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Clinic Locations
                </h3>

                {clinicLocations.map((c) => (
                  <div key={c.name} className="p-3 rounded-lg bg-muted/40">
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex gap-1">
                      <Clock className="w-3 h-3" />
                      {c.schedule}
                    </p>
                  </div>
                ))}
              </div>

              <div className="card-glass p-6 space-y-3 card-service">
                <h3 className="font-semibold">What to Expect</h3>
                {[
                  "Confirmation within 24–48 hours",
                  "Detailed evaluation",
                  "Personalized treatment plan",
                  "Bring previous reports",
                ].map((t) => (
                  <div key={t} className="flex gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <p className="text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>

              <div className="card-glass p-6 text-center card-service">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Emergency?</p>
                <a
                  href="tel:+919480385533"
                  className="font-semibold text-primary"
                >
                  +91 94803 85533
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <Whatsapp />
      </main>

      <Footer />
    </div>
  );
}
