import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '緩和ケア',
  description: `${siteConfig.hospitalName}の緩和ケアのご案内です。身体的な痛みの緩和だけでなく、精神的・社会的なケアを含めた包括的な緩和ケアを多職種チームで提供しております。`,
};

const teamMembers = [
  {
    role: '緩和ケア医',
    description:
      '痛みをはじめとする身体症状の評価と治療を専門的に行います。患者さまの全身状態を管理し、他の専門医とも連携しながら最適な症状コントロールを提供します。',
  },
  {
    role: '看護師',
    description:
      '日常生活のケアを通じて、患者さまの苦痛の軽減と安楽の確保に努めます。ご家族への看護指導や精神的サポートも大切な役割です。',
  },
  {
    role: '薬剤師',
    description:
      '疼痛管理に用いる鎮痛薬の適切な使用方法や副作用の管理を行います。患者さまやご家族にお薬の説明をわかりやすくお伝えします。',
  },
  {
    role: '臨床心理士',
    description:
      '不安や抑うつなどの精神的な苦痛に対して、カウンセリングや心理療法を通じたケアを提供します。ご家族の心理的サポートも行います。',
  },
  {
    role: '医療ソーシャルワーカー',
    description:
      '経済的な問題や社会資源の活用、退院後の生活調整など、社会的な課題の解決を支援します。介護保険の申請や在宅サービスの調整もサポートします。',
  },
  {
    role: '管理栄養士',
    description:
      '食欲低下や嚥下困難などの食事に関する問題に対して、患者さまのご希望を尊重しながら、栄養面からのサポートを行います。',
  },
];

const services = [
  {
    title: '症状マネジメント',
    description:
      '痛み・息苦しさ・吐き気・倦怠感・不眠など、がんやその他の疾患に伴うさまざまな身体症状を、薬物療法や非薬物療法を組み合わせて緩和いたします。WHOの疼痛治療ガイドラインに基づいた適切な鎮痛薬の使用を行います。',
  },
  {
    title: '精神的ケア',
    description:
      '病気に伴う不安・恐怖・悲しみなどの精神的な苦痛に対して、臨床心理士によるカウンセリングや、医療スタッフとの対話を通じて、心の支えとなるケアを提供します。必要に応じて専門の精神科医とも連携いたします。',
  },
  {
    title: '家族支援',
    description:
      '患者さまを支えるご家族もまた大きな負担を抱えておられます。ご家族への介護指導・精神的サポート・社会資源の紹介などを行い、ご家族全体を支えるケアを実践しています。遺族ケア（グリーフケア）にも取り組んでおります。',
  },
  {
    title: '在宅緩和ケア連携',
    description:
      'ご自宅での療養を希望される方には、地域の在宅医療機関・訪問看護ステーション・調剤薬局と連携し、自宅でも切れ目のない緩和ケアを受けていただける体制を整えています。',
  },
];

export default function PalliativePage() {
  return (
    <>
      <PageHero title="緩和ケア" enTitle="Palliative Care" />
      <Breadcrumb
        items={[
          { label: '入院', href: '/hospitalization' },
          { label: '緩和ケア' },
        ]}
      />

      {/* 緩和ケアの理念 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                その方らしい生活を最期まで支える
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                緩和ケアとは、生命を脅かす疾患に直面した患者さまとそのご家族に対して、
                痛みやその他の身体的・心理社会的・スピリチュアルな問題を早期に発見し、
                的確に評価・対処することで、苦しみを予防し和らげることを目指すケアです。
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}では、がんをはじめとする重篤な疾患の患者さまが、
                病気と診断された早い段階から緩和ケアを受けられる体制を整えております。
                治療と並行して緩和ケアを行うことで、患者さまの生活の質を維持・向上させることを大切にしています。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* メインビジュアル */}
      <section className="bg-bg-off py-12">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <PlaceholderImage
              width={1200}
              height={400}
              label="緩和ケアの温かみのあるイメージ写真"
              className="w-full rounded-lg"
              colorIndex={4}
            />
          </ScrollFadeIn>
        </div>
      </section>

      {/* 緩和ケアの基本方針 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Philosophy
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                緩和ケアの基本方針
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="space-y-4">
            {[
              {
                title: '患者さまの意思を尊重します',
                description:
                  '治療方針やケアの方法について、患者さまご本人の意思を最大限に尊重します。インフォームドコンセントを徹底し、十分な情報提供のもとで意思決定を支援いたします。',
              },
              {
                title: '全人的なケアを実践します',
                description:
                  '身体的な苦痛だけでなく、精神的・社会的・スピリチュアルな苦痛にも目を向け、患者さまを一人の人間として包括的にケアいたします。',
              },
              {
                title: 'ご家族も含めたケアを行います',
                description:
                  '患者さまのご家族もケアの対象と考え、介護の負担軽減や精神的なサポートを提供します。死別後のグリーフケアも含めた継続的な支援を行います。',
              },
              {
                title: '多職種チームで連携します',
                description:
                  '医師・看護師・薬剤師・臨床心理士・ソーシャルワーカー・管理栄養士など、多職種が一丸となって患者さまのケアにあたります。',
              },
            ].map((policy, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="font-bold text-primary">{policy.title}</h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 緩和ケアチーム */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Team
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                緩和ケアチーム
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                多職種の専門スタッフがチームを組んで、患者さまとご家族を包括的にサポートいたします。
                定期的なカンファレンスを行い、チーム全体で情報を共有しながらケアの質の向上に努めています。
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold">{member.role}</h3>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 提供するケア */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Services
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                緩和ケアで提供するサービス
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg overflow-hidden h-full">
                  <PlaceholderImage
                    width={600}
                    height={200}
                    label={`${service.title}のイメージ`}
                    className="w-full"
                    colorIndex={i}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-text-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 緩和ケアの対象 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Eligibility
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                緩和ケアの対象となる方
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="rounded-lg border border-border bg-bg p-8">
              <p className="text-sm text-text-light leading-relaxed mb-6">
                緩和ケアは「終末期のケア」ではありません。がんと診断された早い段階から、
                治療と並行してご利用いただけます。以下のようなお悩みをお持ちの方はお気軽にご相談ください。
              </p>
              <ul className="space-y-3">
                {[
                  '痛みや息苦しさ、吐き気などの身体症状がつらい方',
                  '病気に対する不安や恐怖、気分の落ち込みを感じている方',
                  '治療方針について迷いや悩みがある方',
                  '今後の療養場所（自宅・病院・施設）について相談したい方',
                  '介護や経済的な問題でお困りのご家族',
                  'ご家族として患者さまへの接し方に悩んでいる方',
                ].map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-text-light"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 相談窓口 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-primary-bg p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                緩和ケアに関するご相談
              </h2>
              <p className="mt-4 text-sm md:text-base text-text-light leading-relaxed max-w-2xl mx-auto">
                緩和ケアに関するご相談は、担当医・看護師にお声がけいただくか、
                医療相談室までお気軽にお問い合わせください。
                当院に通院されていない方からのご相談もお受けしております。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <div className="text-sm text-text-muted">
                  <p>医療相談室直通：{siteConfig.phone}</p>
                  <p>受付時間：{siteConfig.hours.morning}（平日）</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
