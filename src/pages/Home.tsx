import { Hero } from '../../components/Hero';
import { PainPoints } from '../../components/PainPoints';
import { ApproachOverview } from '../../components/ApproachOverview';
import { ServicesIntro } from '../../components/ServicesIntro';
import { ConsultationTrigger } from '../../components/ConsultationTrigger';
import { WhyUs } from '../../components/WhyUs';
import { CaseStudies } from '../../components/CaseStudies';
import { FinalCTA } from '../../components/FinalCTA';
import { Header } from '../../components/Header';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <PainPoints />
            <CaseStudies />
            <ApproachOverview />
            <ServicesIntro />
            <ConsultationTrigger />
            <WhyUs />
            <FinalCTA />
        </div>
    );
}
