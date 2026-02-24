import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, MapPin, Calendar, Clock, IndianRupee } from "lucide-react";

const PRICE_PER_PERSON = 399;

function App() {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * PRICE_PER_PERSON;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleBookNow = () => {
    const message = `I want to book ${quantity} spot${quantity > 1 ? "s" : ""} for Sunday Miles Special Run. Total: ₹${totalPrice}`;
    const whatsappUrl = `https://wa.me/916356551952?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 border-b-4 border-foreground bg-background overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/generated/hero-runners.dim_1200x600.jpg" 
            alt="Runners at sunrise"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up relative z-10">
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight">
            SUNDAY MILES
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium max-w-3xl mx-auto leading-relaxed">
            A community running club that meets every Sunday morning.
          </p>
          <Button
            onClick={handleBookNow}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-2xl sm:text-3xl px-12 py-8 h-auto border-4 border-foreground shadow-brutal hover:shadow-brutal-lg transition-all duration-300 hover:translate-x-1 hover:translate-y-1 mt-8"
          >
            BOOK NOW
          </Button>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-16 text-center animate-fade-in">
            SUNDAY MILES SPECIAL RUN
          </h2>
          {/* Event Image */}
          <div className="mb-12 border-4 border-foreground overflow-hidden">
            <img 
              src="/assets/generated/event-group-running.dim_800x500.jpg" 
              alt="Group running together"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-4 border-foreground bg-card hover:shadow-brutal transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <Calendar className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground tracking-wider mb-2">
                    DATE
                  </p>
                  <p className="font-display text-3xl font-bold">1st March</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground bg-card hover:shadow-brutal transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <Clock className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground tracking-wider mb-2">
                    TIME
                  </p>
                  <p className="font-display text-3xl font-bold">7:00 AM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground bg-card hover:shadow-brutal transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <MapPin className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground tracking-wider mb-2">
                    LOCATION
                  </p>
                  <p className="font-display text-xl font-bold leading-tight">
                    Alembic Entry, in front of Inorbit Mall
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground bg-card hover:shadow-brutal transition-all duration-300 group">
              <CardContent className="p-8 space-y-4">
                <IndianRupee className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground tracking-wider mb-2">
                    PRICE
                  </p>
                  <p className="font-display text-3xl font-bold">₹399</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 bg-muted border-y-4 border-foreground">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-12 text-center">
            BOOK YOUR SPOT
          </h2>
          <Card className="border-4 border-foreground bg-background shadow-brutal-lg">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-10">
                {/* Quantity Selector */}
                <div className="space-y-6">
                  <label className="block text-lg font-semibold text-muted-foreground tracking-wider">
                    NUMBER OF SPOTS
                  </label>
                  <div className="flex items-center justify-center gap-6">
                    <Button
                      onClick={handleDecrement}
                      variant="outline"
                      size="lg"
                      className="w-16 h-16 border-4 border-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-brutal"
                      disabled={quantity === 1}
                    >
                      <Minus className="w-6 h-6" />
                    </Button>
                    <span className="font-display text-6xl sm:text-7xl font-bold w-32 text-center">
                      {quantity}
                    </span>
                    <Button
                      onClick={handleIncrement}
                      variant="outline"
                      size="lg"
                      className="w-16 h-16 border-4 border-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-brutal"
                    >
                      <Plus className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="border-t-4 border-foreground pt-8 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-semibold text-muted-foreground tracking-wider">
                      TOTAL AMOUNT
                    </span>
                    <span className="font-display text-5xl sm:text-6xl font-bold text-primary">
                      ₹{totalPrice}
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <Button
                  onClick={handleBookNow}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-3xl py-8 h-auto border-4 border-foreground shadow-brutal hover:shadow-brutal-lg transition-all duration-300 hover:translate-x-1 hover:translate-y-1"
                >
                  BOOK NOW
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* After Run Activities Section */}
      <section className="py-20 px-4 bg-card border-t-4 border-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-16 text-center">
            AFTER RUN ACTIVITIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-4 border-foreground bg-background hover:shadow-brutal-lg transition-all duration-300 group">
              <CardContent className="p-10 text-center">
                <div className="mb-6 border-4 border-foreground overflow-hidden">
                  <img 
                    src="/assets/generated/pickleball-action.dim_800x500.jpg" 
                    alt="People playing pickleball"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display text-3xl font-bold group-hover:text-primary transition-colors">
                  PICKLEBALL SESSION
                </h3>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground bg-background hover:shadow-brutal-lg transition-all duration-300 group">
              <CardContent className="p-10 text-center">
                <div className="mb-6 border-4 border-foreground overflow-hidden">
                  <img 
                    src="/assets/generated/fresh-juices.dim_800x500.jpg" 
                    alt="People enjoying natural juices"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display text-3xl font-bold group-hover:text-primary transition-colors">
                  FRESH NATURAL JUICES
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-4 border-foreground bg-background mt-auto">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-medium">
            © 2026. Built with love using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
