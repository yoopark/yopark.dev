import { CertificateCard } from '@/app/components/CertificationCard';
import { Section } from '@/app/components/Section';

export const CertificateSection = () => {
  return (
    <Section title="Certificate" id="certificate">
      <CertificateCard
        title="PCCP Python3"
        id="pccp-python3"
        grade="Lv4 • 796 / 1000점"
        descriptions={['프로그래머스에서 주관하는 알고리즘 테스트']}
        date="2022.12.18."
      />
      <CertificateCard
        title="컴퓨터활용능력"
        id="computer-specialist"
        grade="1급"
        date="2020.10.09."
      />
    </Section>
  );
};
