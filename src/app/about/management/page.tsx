import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: '病院理念',
  description: `${siteConfig.hospitalName}の病院理念・ビジョン・ミッションをご紹介します。患者さまに寄り添い、地域に信頼される医療を目指しています。`,
};

export default function ManagementPage() {
  return (
    <>
      <PageHero title="病院理念" enTitle="Philosophy" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '病院理念' },
        ]}
      />

      {/* 病院理念 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Philosophy
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">病院理念</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12 mx-auto max-w-4xl">
              <div className="rounded-lg border border-primary bg-primary-bg p-8 md:p-12 text-center">
                <p className="text-2xl md:text-3xl font-bold leading-relaxed text-primary">
                  患者さまに寄り添い、<br />
                  地域とともに歩む医療を実践する
                </p>
              </div>
              <p className="mt-8 text-sm md:text-base leading-relaxed text-text-light text-center max-w-2xl mx-auto">
                私たち{siteConfig.hospitalName}は、患者さまお一人おひとりの尊厳を大切にし、
                心のこもった医療を提供することで、地域の皆さまの健康と暮らしに貢献いたします。
                医療に携わるすべてのスタッフがこの理念を共有し、日々の診療に取り組んでいます。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ビジョン */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Vision
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">ビジョン</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border border-border bg-bg p-8 md:p-12 text-center">
                <p className="text-xl md:text-2xl font-bold leading-relaxed">
                  地域で最も信頼される医療機関として、<br className="hidden md:block" />
                  すべての人が安心して暮らせる社会の実現に貢献する
                </p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: '医療の質の追求',
                    description:
                      '最新の医学知識と技術を積極的に取り入れ、エビデンスに基づいた質の高い医療を提供し続けます。',
                  },
                  {
                    title: '地域包括ケアの推進',
                    description:
                      '医療・介護・福祉の連携を通じて、地域の皆さまが住み慣れた場所で安心して暮らせる体制を構築します。',
                  },
                  {
                    title: '人材の育成と成長',
                    description:
                      '一人ひとりのスタッフが専門性を高め、やりがいを持って働ける環境を整備し、組織全体の成長を目指します。',
                  },
                ].map((item, i) => (
                  <ScrollFadeIn key={i} delay={i * 100 + 300}>
                    <div className="rounded-lg border border-border bg-bg p-6 h-full">
                      <h3 className="text-lg font-bold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-light">
                        {item.description}
                      </p>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ミッション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Mission
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">ミッション</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                number: '01',
                title: '患者さま中心の医療の実践',
                description:
                  '患者さまの意思を尊重し、十分な説明と同意に基づいた医療を提供します。治療方針の決定には患者さまやご家族の想いを大切にし、信頼関係の構築に努めます。',
              },
              {
                number: '02',
                title: '安全で質の高い医療の提供',
                description:
                  '医療安全管理体制の充実と感染防止対策の徹底により、安全な医療環境を確保します。また、定期的な研修と教育を通じて、医療の質の継続的な向上を図ります。',
              },
              {
                number: '03',
                title: '切れ目のない医療サービスの提供',
                description:
                  '急性期から回復期、在宅医療に至るまで、患者さまのライフステージに合わせた切れ目のない医療を提供し、地域包括ケアシステムの中核を担います。',
              },
              {
                number: '04',
                title: '地域医療への貢献',
                description:
                  '地域の医療機関・介護施設・行政と緊密に連携し、住民の皆さまの健康増進と疾病予防に積極的に取り組みます。地域に開かれた病院として、健康教室や公開講座も実施します。',
              },
              {
                number: '05',
                title: '働きがいのある職場づくり',
                description:
                  'すべてのスタッフが専門職としての誇りを持ち、互いに尊重し合いながら成長できる職場環境を整備します。ワークライフバランスにも配慮し、長く安心して働ける組織を目指します。',
              },
            ].map((mission, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-6 rounded-lg border border-border bg-bg p-6 md:p-8">
                  <span className="font-en text-3xl md:text-4xl font-bold text-primary/30 shrink-0">
                    {mission.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{mission.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
