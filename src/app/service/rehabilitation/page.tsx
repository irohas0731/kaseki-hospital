import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '訪問リハビリ',
  description: `${siteConfig.hospitalName}の訪問リハビリテーションのご案内です。理学療法士・作業療法士・言語聴覚士がご自宅を訪問し、生活の場に即したリハビリを提供いたします。`,
};

const rehabTypes = [
  {
    title: '理学療法',
    enTitle: 'Physical Therapy',
    description:
      '理学療法士が、筋力強化・関節可動域の維持改善・歩行訓練・バランス訓練などを行います。転倒予防や痛みの軽減を図り、安全で自立した移動能力の維持・向上を目指します。',
    targets: [
      '歩行が不安定な方',
      '退院後の体力低下が気になる方',
      '関節の痛みや拘縮がある方',
      '転倒を繰り返している方',
    ],
  },
  {
    title: '作業療法',
    enTitle: 'Occupational Therapy',
    description:
      '作業療法士が、食事・着替え・トイレ動作・入浴など日常生活に必要な動作の訓練を行います。また、家事動作や趣味活動の再開に向けた支援、住環境のアドバイスなども行います。',
    targets: [
      '日常生活動作に困難を感じている方',
      '手指の機能低下がある方',
      '認知機能の低下が気になる方',
      '自宅の環境調整が必要な方',
    ],
  },
  {
    title: '言語聴覚療法',
    enTitle: 'Speech Therapy',
    description:
      '言語聴覚士が、言葉の障がい（失語症・構音障害など）や、飲み込みの障がい（嚥下障害）に対するリハビリを行います。コミュニケーション能力の改善と安全な食事のための支援を提供します。',
    targets: [
      '脳卒中後の言語障がいがある方',
      '食事中にむせやすい方',
      '声が出にくい方',
      'コミュニケーションに困難を感じている方',
    ],
  },
];

const flowItems = [
  { title: '主治医からの指示', description: '主治医がリハビリの必要性を判断し、訪問リハビリの指示書を作成します。' },
  { title: '初回評価', description: 'リハビリスタッフがご自宅を訪問し、身体機能・生活環境・ご本人の希望などを詳しく評価します。' },
  { title: 'リハビリ計画の作成', description: '評価結果をもとに、具体的な目標と訓練内容を定めたリハビリ計画を作成します。' },
  { title: '訪問リハビリの実施', description: '計画に基づき、定期的にご自宅を訪問してリハビリを実施します（週1～3回程度）。' },
  { title: '定期的な見直し', description: '3か月ごとに効果を評価し、必要に応じてリハビリ計画を見直します。' },
];

export default function RehabilitationPage() {
  return (
    <>
      <PageHero title="訪問リハビリ" enTitle="Home Rehabilitation" />
      <Breadcrumb
        items={[
          { label: '在宅サービス', href: '/service' },
          { label: '訪問リハビリ' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                訪問リハビリテーションは、理学療法士・作業療法士・言語聴覚士がご自宅を訪問し、実際の生活環境の中でリハビリテーションを提供するサービスです。通院が困難な方や、退院後にご自宅でのリハビリ継続が必要な方に、その方の生活に合わせた実践的なリハビリプログラムをご提供いたします。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12">
              <PlaceholderImage
                width={1200}
                height={400}
                label="訪問リハビリイメージ写真"
                className="w-full rounded-lg"
                colorIndex={4}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 訪問リハビリの特徴 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Advantages" jaLabel="訪問リハビリの利点" />
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: '生活に即したリハビリ',
                description:
                  '実際にお住まいの環境でリハビリを行うため、ご自宅の段差や廊下の幅など、具体的な生活場面に合わせた訓練が可能です。',
              },
              {
                title: '通院不要',
                description:
                  'スタッフがご自宅まで伺いますので、通院の負担がありません。外出が困難な方も安心してリハビリをお受けいただけます。',
              },
              {
                title: '個別プログラム',
                description:
                  'お一人おひとりの身体状態・生活目標に合わせた個別のリハビリ計画を作成し、マンツーマンで丁寧に対応いたします。',
              },
              {
                title: 'ご家族への指導',
                description:
                  '日常的にできる運動や介助方法について、ご家族にもわかりやすくお伝えし、在宅生活全体の質の向上を目指します。',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="h-full rounded-lg border border-border bg-bg p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {item.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* リハビリの種類 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Programs" jaLabel="リハビリテーションの内容" />
          </ScrollFadeIn>
          <div className="space-y-8">
            {rehabTypes.map((rehab, i) => (
              <ScrollFadeIn key={i} delay={i * 150}>
                <div className="overflow-hidden rounded-lg border border-border bg-bg md:flex">
                  <div className="md:w-2/5">
                    <PlaceholderImage
                      width={500}
                      height={350}
                      label={`${rehab.title}イメージ`}
                      className="h-full w-full"
                      colorIndex={i}
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <p className="font-en text-xs tracking-wider uppercase text-primary">
                      {rehab.enTitle}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{rehab.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      {rehab.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-bold">このような方におすすめです</p>
                      <ul className="mt-2 space-y-1">
                        {rehab.targets.map((target, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-text-light"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            {target}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Flow" jaLabel="ご利用の流れ" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl">
            {flowItems.map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    {i < flowItems.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-primary/20" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 事業所概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Overview" jaLabel="事業所概要" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-border bg-bg">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['事業所名', `${siteConfig.hospitalName} 訪問リハビリテーション`],
                    ['所在地', siteConfig.address.full],
                    ['電話番号', siteConfig.phone],
                    ['営業日', '月曜日～土曜日（日曜・祝日・年末年始を除く）'],
                    ['営業時間', '8:30～17:30'],
                    ['訪問時間', '1回あたり40分～60分'],
                    ['訪問頻度', '週1～3回（状態に応じて調整）'],
                    ['訪問エリア', `${siteConfig.address.city}および近隣地域`],
                    ['スタッフ', '理学療法士・作業療法士・言語聴覚士'],
                  ].map(([label, value], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-bg-off' : ''}>
                      <th className="w-1/3 border-b border-border px-6 py-4 text-left font-bold">
                        {label}
                      </th>
                      <td className="border-b border-border px-6 py-4 text-text-light">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold">訪問リハビリに関するご相談</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                退院後のリハビリ継続や、ご自宅での生活動作の改善についてお悩みの方は、お気軽にご相談ください。経験豊富なリハビリスタッフが、ご状態に合わせた最適なプログラムをご提案いたします。
              </p>
              <p className="mt-4 text-2xl font-bold text-primary">{siteConfig.phone}</p>
              <p className="mt-1 text-xs text-text-muted">
                受付時間：{siteConfig.hours.morning}／{siteConfig.hours.afternoon}（{siteConfig.hours.closedDays}を除く）
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  お問い合わせフォーム
                </Link>
                <Link
                  href="/service/step"
                  className="inline-block rounded border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  利用の手続きを見る
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
