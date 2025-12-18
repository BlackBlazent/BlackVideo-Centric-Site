import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Check, X, Sparkles, Building2, Code2, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Zap,
    description: 'Perfect for casual users',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { name: 'Basic playback features', included: true },
      { name: 'Standard codec support', included: true },
      { name: 'Community extensions', included: true },
      { name: '720p max quality', included: true },
      { name: 'Ads-supported', included: true },
      { name: 'AI features', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom themes', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    icon: Sparkles,
    description: 'For power users and creators',
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    features: [
      { name: 'All playback features', included: true },
      { name: 'Full codec support', included: true },
      { name: 'All extensions', included: true },
      { name: '4K HDR quality', included: true },
      { name: 'No ads', included: true },
      { name: 'AI subtitles & recommendations', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom themes', included: true },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Developer',
    icon: Code2,
    description: 'Build and publish extensions',
    monthlyPrice: 19.99,
    yearlyPrice: 199,
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Extension SDK access', included: true },
      { name: 'Marketplace publishing', included: true },
      { name: 'API access', included: true },
      { name: 'Beta features', included: true },
      { name: 'Developer support', included: true },
      { name: 'Revenue sharing', included: true },
      { name: 'Analytics dashboard', included: true },
    ],
    cta: 'Start Building',
    popular: false,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    description: 'For teams and organizations',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { name: 'Everything in Developer', included: true },
      { name: 'Unlimited team seats', included: true },
      { name: 'SSO & SAML', included: true },
      { name: 'Custom deployment', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'White-labeling', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen bg-background animated-gradient">
      <ParticleBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="section-title mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Choose the plan that works for you. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-foreground transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Save 17%
              </span>
            )}
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card relative ${
                  plan.popular ? 'border-primary/50 ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="feature-icon">
                    <plan.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-display font-bold">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-display font-bold">Custom</span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'btn-neon'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Preview */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              Have questions? Check our{' '}
              <a href="/support#faq" className="text-primary hover:underline">
                FAQ section
              </a>{' '}
              or{' '}
              <a href="/support#contact" className="text-primary hover:underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
