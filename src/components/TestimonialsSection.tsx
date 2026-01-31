import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Content Creator',
    avatar: 'AC',
    rating: 5,
    text: 'BlackVideo has completely transformed my workflow. The AI-powered subtitles save me hours of work, and the extension system lets me customize everything.',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Film Editor',
    avatar: 'SM',
    rating: 5,
    text: 'Finally, a video player that understands professional needs. The codec support is incredible, and playback is buttery smooth even with 4K HDR content.',
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Developer',
    avatar: 'JW',
    rating: 5,
    text: 'The extension API is a dream to work with. I built custom tools for my team in just a few days. The documentation is excellent.',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Streamer',
    avatar: 'ER',
    rating: 5,
    text: 'Multi-platform support means I can manage all my content from one place. YouTube, Vimeo, TikTok - everything just works seamlessly.',
  },
  {
    id: 5,
    name: 'Michael Park',
    role: 'Video Producer',
    avatar: 'MP',
    rating: 5,
    text: 'The privacy-first approach sold me immediately. No tracking, no data collection, just pure video playback excellence.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="temp-waitlist-mockup" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Loved by <span className="gradient-text">Creators</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Join thousands of content creators, editors, and developers who trust BlackVideo.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
