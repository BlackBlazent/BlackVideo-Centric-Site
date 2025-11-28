import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To revolutionize video playback with cutting-edge technology and user-centric design",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver the best video experience possible",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a vibrant ecosystem of creators, developers, and users",
    },
  ];

  const team = [
    { name: "Alex Johnson", role: "CEO & Founder", image: "" },
    { name: "Sarah Chen", role: "CTO", image: "" },
    { name: "Michael Brown", role: "Lead Designer", image: "" },
    { name: "Emily Davis", role: "Product Manager", image: "" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">BlackVideo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to create the world's most powerful and user-friendly video player
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                BlackVideo was born from a simple observation: video players hadn't evolved with the needs of modern users. 
                We set out to create something different—a player that's powerful yet intuitive, customizable yet simple.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, BlackVideo is trusted by over a million users worldwide, from casual viewers to professional content creators. 
                Our commitment to innovation and user experience drives everything we do.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass p-8 rounded-xl text-center hover-glow hover:scale-105 transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="glass p-6 rounded-xl text-center hover-glow hover:scale-105 transition-all"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-500 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
