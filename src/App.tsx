import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import AboutDoctorPage from "./pages/AboutDoctorPage";
import RoboticKneeReplacementPage from "./pages/services/RoboticKneeReplacementPage";
import RoboticHipReplacementPage from "./pages/services/RoboticHipReplacementPage";
import SportsInjuryPage from "./pages/services/SportsInjuryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/about-doctor" element={<AboutDoctorPage />} />
          <Route path="/services/robotic-knee-replacement" element={<RoboticKneeReplacementPage />} />
          <Route path="/services/robotic-hip-replacement" element={<RoboticHipReplacementPage />} />
          <Route path="/services/sports-injury" element={<SportsInjuryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
