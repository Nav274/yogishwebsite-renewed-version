import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "State-of-the-Art Operating Theater",
    category: "Facility",
    description: "Our advanced surgical suite equipped with the latest robotic systems"
  },
  {
    id: 2,
    title: "Robotic Surgical System",
    category: "Technology",
    description: "Precision robotic arm for accurate joint replacement surgery"
  },
  {
    id: 3,
    title: "3D Surgical Planning",
    category: "Technology",
    description: "CT-based pre-operative planning for personalized surgery"
  },
  {
    id: 4,
    title: "Patient Recovery Suite",
    category: "Facility",
    description: "Comfortable private rooms for post-operative care"
  },
  {
    id: 5,
    title: "Rehabilitation Center",
    category: "Facility",
    description: "Fully equipped physiotherapy and recovery center"
  },
  {
    id: 6,
    title: "Diagnostic Imaging",
    category: "Technology",
    description: "Advanced MRI and CT scanning capabilities"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Facility", "Technology"];

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Our <span className="text-gradient-teal italic">Facility</span> & Technology
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a virtual tour of our world-class orthopaedic center and cutting-edge equipment.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
              onClick={() => openLightbox(image.id)}
            >
              {/* Placeholder with gradient */}
              <div className={`w-full bg-gradient-to-br from-secondary via-card to-muted ${
                index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"
              }`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-primary font-medium mb-2">
                    {image.category}
                  </span>
                  <h4 className="text-sm md:text-base font-medium text-foreground">
                    {image.title}
                  </h4>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">
                    {image.category}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mt-1">
                    {image.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-5 h-5" />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary via-card to-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Camera className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm uppercase tracking-wider text-primary font-medium">
                    {selectedImageData.category}
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mt-2">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                    {selectedImageData.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
