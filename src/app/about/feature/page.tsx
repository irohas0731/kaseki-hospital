import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '当院の取り組み',
  description: `${siteConfig.hospitalName}が推進するトータルケア・地域連携・感染対策・医療安全の取り組みをご紹介しています。`,
};

const initiatives = [
  {
    enTitle: 'Total Care',
    title: 'トータルケア',
    description:
      '当院では、急性期医療から回復期リハビリテーション、療養、在宅支援に至るまで、患者さまの状態に応じた切れ目のない医療・ケアを提供しています。入院中は医師・看護師・リハビリスタッフ・薬剤師・管理栄養士・ソーシャルワーカーがチームとなり、身体面だけでなく精神面・社会面を含めた包括的なケアを実践しています。',
    details: [
      '急性期から在宅まで一貫した医療提供体制',
      '多職種によるチーム医療カンファレンスの定期開催',
      '患者さまの生活の質（QOL）を重視した治療計画の策定',
      '退院前カンファレンスによるスムーズな在宅復帰支援',
    ],
    colorIndex: 0,
  },
  {
    enTitle: 'Community Collaboration',
    title: '地域連携',
    description:
      '地域の医療機関・介護施設・行政機関と密接に連携し、地域包括ケアシステムの構築に貢献しています。地域医療連携室を設置し、紹介・逆紹介のスムーズな調整を行うとともに、地域の医療従事者との情報共有や合同研修を通じて、地域全体の医療の質の向上に努めています。',
    details: [
      '地域医療連携室による紹介・逆紹介の円滑化',
      '近隣医療機関との合同カンファレンス・症例検討会の開催',
      '地域住民向け健康講座・公開セミナーの実施',
      '在宅医療・訪問看護との連携強化',
    ],
    colorIndex: 1,
  },
  {
    enTitle: 'Infection Control',
    title: '感染対策',
    description:
      '院内感染の防止は、安全な医療を提供するうえで最も重要な取り組みのひとつです。当院では感染対策委員会（ICC）と感染制御チーム（ICT）を設置し、院内の感染状況を監視するとともに、予防策の策定と実施を行っています。手指衛生の徹底や環境整備、職員教育を通じて、患者さまが安心して療養できる環境を維持しています。',
    details: [
      '感染対策委員会（ICC）による院内感染監視体制',
      '感染制御チーム（ICT）による定期的なラウンドの実施',
      '手指衛生の徹底と遵守率の定期的な調査・報告',
      '全職員対象の感染対策研修（年2回以上）',
    ],
    colorIndex: 2,
  },
  {
    enTitle: 'Medical Safety',
    title: '医療安全',
    description:
      '患者さまの安全を最優先に考え、医療安全管理体制の充実に取り組んでいます。医療安全管理委員会を設置し、インシデント・アクシデントの報告・分析を行い、再発防止策を講じています。また、患者さまの取り違え防止のためのダブルチェック体制や、転倒転落リスクの評価・予防にも積極的に取り組んでいます。',
    details: [
      '医療安全管理委員会によるインシデント報告の分析・改善活動',
      '患者確認のためのダブルチェック・トリプルチェック体制',
      '転倒転落リスクアセスメントと予防対策の実施',
      '医療安全に関する全職員研修（年2回以上）',
    ],
    colorIndex: 3,
  },
];

export default function FeaturePage() {
  return (
    <>
      <PageHero title="当院の取り組み" enTitle="Our Initiatives" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '当院の取り組み' },
        ]}
      />

      {/* 導入セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                安心と信頼の医療のために
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}は、患者さまに安心・安全な医療を提供するために、
                さまざまな取り組みを行っています。トータルケアの実践、地域医療機関との連携強化、
                院内感染対策の徹底、医療安全管理体制の充実など、
                日々の医療活動を通じて質の高い医療サービスの実現に努めております。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 取り組みカード */}
      {initiatives.map((initiative, i) => (
        <section
          key={initiative.title}
          className={`py-16 md:py-20 ${i % 2 === 0 ? 'bg-bg-off' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <ScrollFadeIn>
              <div
                className={`flex flex-col gap-8 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                <div className="w-full md:w-1/2">
                  <PlaceholderImage
                    width={600}
                    height={400}
                    label={`${initiative.title}のイメージ写真`}
                    className="w-full rounded-lg"
                    colorIndex={initiative.colorIndex}
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                    {initiative.enTitle}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {initiative.title}
                  </h2>
                  <div className="mt-3 h-0.5 w-12 bg-primary" />

                  <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                    {initiative.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {initiative.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed text-text-light"
                      >
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      ))}

      {/* その他の取り組み */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Other Efforts
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                その他の取り組み
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: '災害対策',
                description:
                  '災害拠点病院として、大規模災害時の医療提供体制を整備しています。年2回の災害訓練を実施し、非常用電源・備蓄品の確保にも努めています。',
              },
              {
                title: '栄養管理',
                description:
                  '管理栄養士がNST（栄養サポートチーム）の一員として、入院患者さまの栄養状態を評価し、個々に応じた栄養管理計画を策定しています。',
              },
              {
                title: '褥瘡対策',
                description:
                  '褥瘡対策チームを設置し、定期的なラウンドによる早期発見と予防に取り組んでいます。体圧分散マットレスの導入など、環境面の整備も進めています。',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
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
      </section>

      {/* お問い合わせ誘導 */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                当院の取り組みに関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                各取り組みの詳細やご質問については、お気軽にお問い合わせください。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <p className="text-sm text-text-muted">
                  代表電話：{siteConfig.phone}
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
