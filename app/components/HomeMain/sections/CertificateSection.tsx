import { Section } from '@/components/Section';

import { CertificateCard } from '@/app/components/Card/CertificationCard';

export const CertificateSection = () => {
  return (
    <Section title="Certificate" id="certificate">
      <CertificateCard
        date="2022.12.18."
        title="PCCP Python3"
        titleId="pccp-python3"
        grade="Lv4 • 796 / 1000점"
        descriptions={['프로그래머스에서 주관하는 알고리즘 테스트']}
      />
      <CertificateCard
        date="2020.10.09."
        title="컴퓨터활용능력"
        titleId="computer-specialist"
        grade="1급"
      />
    </Section>
  );
};
