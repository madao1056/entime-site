import { HeroRefined } from '../../components/refined/HeroRefined';
import { PainPointsRefined } from '../../components/refined/PainPointsRefined';
import { ApproachOverviewRefined } from '../../components/refined/ApproachOverviewRefined';
import { ServicesIntroRefined } from '../../components/refined/ServicesIntroRefined';
import { ConsultationTriggerRefined } from '../../components/refined/ConsultationTriggerRefined';
import { WhyUsRefined } from '../../components/refined/WhyUsRefined';
import { ProofRefined } from '../../components/refined/ProofRefined';
import { FinalCTARefined } from '../../components/refined/FinalCTARefined';
import { HeaderRefined } from '../../components/refined/HeaderRefined';
import { FooterRefined } from '../../components/refined/FooterRefined';

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderRefined />
      <HeroRefined />
      <PainPointsRefined />
      <ProofRefined />
      <ApproachOverviewRefined />
      <ServicesIntroRefined />
      <ConsultationTriggerRefined />
      <WhyUsRefined />
      <FinalCTARefined />
      <FooterRefined />
    </div>
  );
}