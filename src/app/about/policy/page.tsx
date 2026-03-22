import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: '基本方針',
  description: `${siteConfig.hospitalName}の基本方針をご紹介します。患者さまに安心・安全な医療を提供するための行動指針です。`,
};

const policies = [
  {
    number: 1,
    title: '患者さまの権利と尊厳の尊重',
    description:
      '患者さまの人格・価値観・信仰を尊重し、個人の尊厳を大切にした医療を提供します。すべての患者さまに対して公平かつ平等に接し、差別のない医療の実現に努めます。',
  },
  {
    number: 2,
    title: '十分な説明と同意に基づく医療',
    description:
      '患者さまに対して病状や治療内容をわかりやすくご説明し、十分な理解と同意のもとで治療を進めます。患者さまご自身が治療方針の決定に参加できるよう、丁寧な情報提供を行います。',
  },
  {
    number: 3,
    title: '安全で質の高い医療の提供',
    description:
      '医療安全管理体制を整備し、医療事故の防止に全力を注ぎます。院内感染対策を徹底するとともに、最新の医学的知見に基づいたエビデンスのある医療を提供いたします。',
  },
  {
    number: 4,
    title: 'チーム医療の推進',
    description:
      '医師・看護師・薬剤師・リハビリスタッフ・管理栄養士・ソーシャルワーカーなど多職種が協力し、それぞれの専門性を活かしたチーム医療を実践します。定期的なカンファレンスを通じて情報を共有し、最善の治療を目指します。',
  },
  {
    number: 5,
    title: '地域医療連携の強化',
    description:
      '地域のかかりつけ医や医療機関、介護施設と密接に連携し、患者さまの状態に応じた適切な医療を切れ目なく提供します。紹介・逆紹介を通じて地域全体の医療の質の向上に貢献します。',
  },
  {
    number: 6,
    title: '継続的な学習と技術の向上',
    description:
      'すべてのスタッフが生涯学習の精神を持ち、最新の医学知識と技術の習得に努めます。学会発表や研修会への参加を奨励し、専門職としてのスキルアップを組織全体で支援します。',
  },
  {
    number: 7,
    title: '健全な病院経営',
    description:
      '効率的かつ透明性のある病院運営を行い、持続可能な医療サービスの提供基盤を確立します。限りある医療資源を有効に活用し、良質な医療を安定的にお届けできる経営体制を維持します。',
  },
  {
    number: 8,
    title: '地域の健康増進への貢献',
    description:
      '病気の治療だけでなく、疾病予防や健康増進にも積極的に取り組みます。健康診断・人間ドックの実施、地域住民向けの健康教室や公開講座の開催を通じて、地域全体の健康づくりを支援します。',
  },
];

export default function PolicyPage() {
  return (
    <>
      <PageHero title="基本方針" enTitle="Basic Policy" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '基本方針' },
        ]}
      />

      {/* 導入セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                患者さまと地域のために
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}は、病院理念の実現に向けて以下の基本方針を定め、
                すべてのスタッフがこの方針に基づいて行動しています。
                患者さまに安心・安全な医療をお届けするために、
                一つひとつの方針を日々の業務のなかで確実に実践してまいります。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 基本方針一覧 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Basic Policy
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                {siteConfig.hospitalName}の基本方針
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl space-y-6">
            {policies.map((policy, i) => (
              <ScrollFadeIn key={policy.number} delay={i * 80}>
                <div className="flex gap-5 md:gap-8 rounded-lg border border-border bg-bg p-6 md:p-8">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg md:text-xl">
                    {policy.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{policy.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 職員行動指針 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Code of Conduct
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">職員行動指針</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border border-border bg-bg p-8">
                <ul className="space-y-4">
                  {[
                    '私たちは、常に笑顔と思いやりの心をもって患者さまに接します。',
                    '私たちは、患者さまのプライバシーを守り、個人情報の保護に努めます。',
                    '私たちは、専門職としての自覚を持ち、知識と技術の向上に励みます。',
                    '私たちは、互いの専門性を尊重し、協力して質の高い医療を提供します。',
                    '私たちは、清潔で快適な療養環境を維持するために、整理整頓と感染予防を徹底します。',
                    '私たちは、地域の皆さまから信頼される医療人として、社会的責任を果たします。',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-text-light"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
