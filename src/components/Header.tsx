import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Doctor", href: "/about-doctor" },
    { 
      name: "Services", 
      href: "#",
      dropdown: [
        { name: "Robotic Knee Replacement", href: "/services/robotic-knee-replacement" },
        { name: "Robotic Hip Replacement", href: "/services/robotic-hip-replacement" },
        { name: "Sports Injury Care", href: "/services/sports-injury" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-serif text-xl font-bold">O</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-semibold text-primary">
                OrthoRobotics
              </span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">
                Advanced Joint Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2">
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className="bg-card rounded-xl border border-border shadow-xl overflow-hidden">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-4 py-3 text-sm transition-colors hover:bg-primary/10 ${
                                isActive(item.href) ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919480385533"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 94803 85533</span>
            </a>
            <Link to="/book-appointment" className="btn-accent">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block py-2 text-sm ${
                                isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block py-2 transition-colors ${
                        isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:+919480385533"
                className="flex items-center gap-2 text-muted-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                <span>+91 94803 85533</span>
              </a>
              <Link 
                to="/book-appointment" 
                className="btn-accent text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
