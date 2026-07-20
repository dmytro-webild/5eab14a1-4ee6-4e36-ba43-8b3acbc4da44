import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { CheckCircle, Smartphone, Star, Target, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      tag="Political Messaging Experts"
      title="Strategic messaging that moves voters and builds movements"
      description="We craft compelling political narratives and shortform content strategies that cut through the noise, amplify your core message, and drive real engagement across digital platforms where voters actually pay attention"
      primaryButton={{
        text: "Explore Our Approach",
        href: "#approach",
      }}
      secondaryButton={{
        text: "View Case Studies",
        href: "#results",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/advisory-board-members-meeting-boardroom-establish-future-development-plan_482257-113859.jpg?_wi=1"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="expertise" data-section="expertise">
    <SectionErrorBoundary name="expertise">
          <AboutFeaturesSplit
      tag="Our Expertise"
      title="Precision Political Communication"
      description="We translate complex policy objectives into clear, persuasive narratives that resonate with target demographics and digital-first audiences."
      items={[
        {
          icon: Star,
          title: "Narrative Development",
          description: "Defining your core message to ensure consistency across every channel and stakeholder interaction.",
        },
        {
          icon: Smartphone,
          title: "Shortform Content Strategy",
          description: "Producing high-impact vertical content optimized for engagement on platforms where voters spend their time.",
        },
        {
          icon: Target,
          title: "Integrated Messaging",
          description: "Coordinating digital, earned media, and grassroots strategy for maximum mobilization and electoral success.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/tired-police-officer-analyzing-victim-report-arhive-room_482257-74446.jpg?_wi=1"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="approach" data-section="approach">
    <SectionErrorBoundary name="approach">
          <FeaturesBento
      tag="Our Methodology"
      title="Data-Driven Strategy"
      description="Our approach leverages psychological targeting and rapid feedback loops to refine messaging in real-time."
      features={[
        {
          title: "Psychographic Alignment",
          description: "Aligning your candidate's voice with the specific values and pain points of your target voter segments.",
          bentoComponent: "info-card-marquee",
          infoCards: [
            {
              icon: Brain,
              label: "Retention",
              value: "98%",
            },
            {
              icon: Zap,
              label: "Growth",
              value: "120%",
            },
            {
              icon: CheckCircle,
              label: "Accuracy",
              value: "99%",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/driver-checking-stock-market-his-phone-while-car_53876-98095.jpg",
          imageAlt: "social media growth analytics",
        },
        {
          title: "Campaign Lifecycle",
          description: "Managing the full campaign narrative through phases.",
          bentoComponent: "checklist-timeline",
          heading: "Execution Phases",
          subheading: "Proven results",
          checklistItems: [
            {
              label: "Phase 1: Narrative",
              detail: "Core message definition",
            },
            {
              label: "Phase 2: Digital",
              detail: "Content deployment",
            },
            {
              label: "Phase 3: Feedback",
              detail: "Message optimization",
            },
          ],
          completedLabel: "Campaign Won",
          imageSrc: "http://img.b2bpic.net/free-photo/advisory-board-members-meeting-boardroom-establish-future-development-plan_482257-113859.jpg?_wi=2",
          imageAlt: "social media growth analytics",
        },
        {
          title: "Message Resonance",
          description: "Visualizing how our narrative shift drives voter engagement over time.",
          bentoComponent: "media-stack",
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/tired-police-officer-analyzing-victim-report-arhive-room_482257-74446.jpg?_wi=2",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/marketing-computer-sign-symbol-concept_53876-123885.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/drawings-about-legal-profession_23-2151190624.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904321.jpg?_wi=1",
          imageAlt: "social media growth analytics",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="results" data-section="results">
    <SectionErrorBoundary name="results">
          <MetricsMediaCards
      tag="Proven Results"
      title="Measurable Impact"
      description="We focus on outcomes that matter, turning strategic communication into electoral and policy success."
      metrics={[
        {
          value: "34%",
          title: "Engagement Increase",
          description: "Average increase in audience retention for our shortform content deployments.",
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904321.jpg?_wi=2",
        },
        {
          value: "500k+",
          title: "Voters Reached",
          description: "Unique voters reached through our integrated messaging platforms.",
          imageSrc: "http://img.b2bpic.net/free-photo/pinpoint-place-europe_23-2148256052.jpg",
        },
        {
          value: "12",
          title: "Successful Campaigns",
          description: "Electoral campaigns driven to victory through our messaging strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/student-home-taking-notes-while-watching-presentation-closeup_482257-118737.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Trusted By"
      title="Partners in Power"
      description="Collaborating with leading advocacy groups and institutional figures across the political landscape."
      names={[
        "Democratic Governors League",
        "Citizens for Policy",
        "NextGen Advocacy",
        "Labor Forward Union",
        "Urban Growth Institute",
        "Green Policy Network",
        "Progressive Action Fund",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="Liberty West Prospects completely redefined our narrative. Their data-driven approach allowed us to pivot when needed and win where we were behind."
      rating={5}
      author="Sarah Miller, Campaign Director"
      avatars={[
        {
          name: "Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg",
        },
        {
          name: "Marcus Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-businesswoman_23-2148204386.jpg",
        },
        {
          name: "Elena Rodriguez",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-beautiful-woman-years-old-wearing-corporate-clothing-looking-happy_1258-194086.jpg",
        },
        {
          name: "David Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196973.jpg",
        },
        {
          name: "Amina Al-Sayed",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-smiling-black-man-wool-suit_613910-16049.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Questions"
      title="Strategic Consulting FAQ"
      description="Clear answers on how we help political teams achieve their communication objectives."
      items={[
        {
          question: "What is your approach to messaging?",
          answer: "We use quantitative data paired with qualitative narrative storytelling to find your unique value proposition.",
        },
        {
          question: "Do you focus on digital or traditional?",
          answer: "We provide a fully integrated approach, but we specialize in digital-first narratives.",
        },
        {
          question: "How do we get started?",
          answer: "Contact us for a preliminary strategic audit of your current messaging landscape.",
        },
        {
          question: "Are you platform-specific?",
          answer: "Our narratives are designed to adapt to all major digital platforms for consistency.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in Touch"
      text="Ready to gain a competitive communication advantage?"
      primaryButton={{
        text: "Schedule a Strategy Call",
        href: "mailto:hello@libertywest.com",
      }}
      secondaryButton={{
        text: "Request Proposal",
        href: "#contact",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
