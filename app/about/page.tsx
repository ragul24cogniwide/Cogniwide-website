import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { TeamSection } from '@/components/about/TeamSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us - Cogniwide | Leading AI Solutions Provider',
  description: 'Learn about Cogniwide\'s mission to transform businesses through innovative AI solutions. Meet our team and discover our values.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <OurStory />
      <ValuesSection />
      {/* <TeamSection /> */}
      <CTASection />
    </PageLayout>
  );
}