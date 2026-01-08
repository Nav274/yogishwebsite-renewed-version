import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galleryImages = [
  { id: 1, title: "State-of-the-Art Operating Theatre", category: "Facility", description: "Our robotic surgery suite equipped with the latest MAKO system" },
  { id: 2, title: "Robotic Arm Precision", category: "Technology", description: "The robotic arm achieving sub-millimeter accuracy during surgery" },
  { id: 3, title: "Patient Recovery Suite", category: "Facility", description: "Comfortable private rooms designed for optimal recovery" },
  { id: 4, title: "Pre-Surgery Planning", category: "Technology", description: "3D CT-based surgical planning for personalized implant positioning" },
  { id: 5, title: "Physical Therapy Center", category: "Rehabilitation", description: "Modern physiotherapy equipment for accelerated recovery" },
  { id: 6, title: "Team Surgery Session", category: "Team", description: "Our expert surgical team during a complex revision procedure" },
  { id: 7, title: "Patient Consultation", category: "Care", description: "Dr. Kumar discussing treatment options with a patient" },
  { id: 8, title: "Advanced Imaging", category: "Technology", description: "High-resolution MRI for precise diagnosis" },
  { id: 9, title: "Post-Op Milestone", category: "Success", description: "Patient walking independently just 24 hours after surgery" },
  { id: 10, title: "Implant Technology", category: "Technology", description: "Latest generation knee implants with advanced materials" },
  { id: 11, title: "Rehabilitation Progress", category: "Rehabilitation", description: "Guided exercises for strength and mobility restoration" },
  { id: 12, title: "Award Ceremony", category: "Recognition", description: "Dr. Kumar receiving the Excellence in Orthopaedics award" },
];

const categories = ["All", "Facility", "Technology", "Rehabilitation", "Team", "Care", "Success", "Recognition"];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };
  
  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

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
            <h1 className="text-4xl md:text-6xl font-serif italic mb-6">
              Our <span className="text-gradient-teal">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our world-class facilities, advanced technology, 
              and the compassionate care we provide to every patient.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                    index % 5 === 0 ? "md:row-span-2" : ""
                  }`}
                  onClick={() => openLightbox(image.id)}
                >
                  <div className={`bg-gradient-to-br from-primary/20 to-accent/20 ${
                    index % 5 === 0 ? "h-[500px]" : "h-64"
                  } w-full`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📷</div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ZoomIn className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {image.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mt-1">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center hover:bg-secondary transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center hover:bg-secondary transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center hover:bg-secondary transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-8xl opacity-30">📷</div>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {selectedImageData.category}
                  </span>
                  <h3 className="text-2xl font-serif text-foreground mt-2">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {selectedImageData.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
