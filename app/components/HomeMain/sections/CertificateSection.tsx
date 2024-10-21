import { Section } from '@/components/Section';

import { CertificateCard } from '@/app/components/Card/CertificationCard';

export const CertificateSection = () => {
  return (
    <Section title="Certificate" id="certificate">
      <CertificateCard
        date="2024.06.21."
        title="SQL 개발자 (SQLD)"
        titleId="sqld"
        host="한국데이터산업진흥원"
      />
      <CertificateCard
        date="2024.06.18."
        title="정보처리기사"
        titleId="engineer-information-processing"
        host="한국산업인력공단"
      />
      <CertificateCard
        date="2024.06.07."
        title="데이터 분석 준전문가 (ADsP)"
        titleId="adsp"
        host="한국데이터산업진흥원"
      />
      <CertificateCard
        date="2020.10.09."
        title="컴퓨터활용능력 1급"
        titleId="computer-specialist"
        host="대한상공회의소"
      />
    </Section>
  );
};
