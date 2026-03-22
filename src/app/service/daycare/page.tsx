import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'デイケア',
  description: `${siteConfig.hospitalName}のデイケア（通所リハビリテーション）のご案内です。医師の指示のもと、理学療法士・作業療法士・言語聴覚士が個別のリハビリプログラムを提供いたします。`,
};

const schedule = [
  { time: '8:30～9:30', activity: '送迎・バイタルチェック', detail: 'ご自宅までお迎えにあがります。到着後、血圧・体温・脈拍などの健康チェックを行います。' },
  { time: '9:30～10:00', activity: '朝の体操・水分補給', detail: '全身のストレッチや軽い体操で身体をほぐし、一日の活動に備えます。' },
  { time: '10:00～12:00', activity: '個別リハビリテーション', detail: '理学療法士・作業療法士・言語聴覚士が、お一人おひとりの目標に合わせた個別リハビリを実施します。' },
  { time: '12:00～13:00', activity: '昼食・口腔ケア', detail: '管理栄養士が監修した、栄養バランスの良い食事をご提供します。食後には口腔ケアを行います。' },
  { time: '13:00～14:00', activity: '休憩・レクリエーション', detail: '談話やレクリエーション活動を通じて、利用者さま同士の交流を深めていただきます。' },
  { time: '14:00～15:30', activity: '集団リハビリ・入浴', detail: '集団での運動プログラムや、必要に応じて入浴サービスを提供いたします。' },
  { time: '15:30～16:00', activity: 'おやつ・帰りの準備', detail: 'おやつの時間の後、一日の振り返りを行います。' },
  { time: '16:00～17:00', activity: '送迎', detail: 'ご自宅までお送りいたします。' },
];

const features = [
  {
    title: '医師による管理',
    description:
      '常勤の医師がご利用者さまの健康状態を定期的に把握し、リハビリの計画立案や体調管理を行います。急な体調変化にも迅速に対応いたします。',
  },
  {
    title: '専門スタッフによる個別リハビリ',
    description:
      '理学療法士・作業療法士・言語聴覚士が、それぞれの専門性を活かし、身体機能の維持・向上を目指した個別のリハビリプログラムを提供いたします。',
  },
  {
    title: '充実した設備',
    description:
      '歩行訓練やバランス訓練のための各種リハビリ機器を完備しています。安全で効果的なリハビリテーションを受けていただける環境を整えております。',
  },
  {
    title: '栄養管理された食事',
    description:
      '管理栄養士が監修した、カロリーや塩分量に配慮したお食事を提供いたします。嚥下機能に応じた食形態への対応も行っております。',
  },
  {
    title: '入浴サービス',
    description:
      '安全に配慮した広々とした浴室を備えています。介助が必要な方もスタッフがお手伝いいたしますので、安心してご入浴いただけます。',
  },
  {
    title: '送迎サービス',
    description:
      'ご自宅からデイケアセンターまで、専用車両で送迎いたします。車いすの方もご利用いただけるリフト付き車両もご用意しております。',
  },
];

export default function DaycarePage() {
  return (
    <>
      <PageHero title="デイケア" enTitle="Day Care" />
      <Breadcrumb
        items={[
          { label: '在宅サービス', href: '/service' },
          { label: 'デイケア' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                デイケア（通所リハビリテーション）は、医療機関併設の強みを活かし、医師の指示のもとで専門スタッフが個別のリハビリテーションを提供するサービスです。心身機能の維持・回復を図りながら、日常生活の自立を支援し、ご自宅での生活がより快適になることを目指します。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <PlaceholderImage
                width={600}
                height={400}
                label="デイケア施設写真"
                className="w-full rounded-lg"
                colorIndex={0}
              />
              <PlaceholderImage
                width={600}
                height={400}
                label="リハビリ風景写真"
                className="w-full rounded-lg"
                colorIndex={1}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 対象者 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Eligibility" jaLabel="ご利用対象" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl rounded-lg border border-border bg-bg p-8">
              <ul className="space-y-3 text-sm leading-relaxed text-text-light">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  要介護認定（要支援1・2、要介護1～5）を受けた方
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  主治医からリハビリテーションが必要と認められた方
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  日常生活動作の維持・向上を目指す方
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  閉じこもり予防や社会参加を希望される方
                </li>
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Features" jaLabel="デイケアの特徴" />
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {feature.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 一日の流れ */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Daily Schedule" jaLabel="一日の流れ" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl">
            {schedule.map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="flex gap-4 border-l-2 border-primary/30 py-4 pl-6 last:border-l-primary">
                  <div className="w-28 shrink-0">
                    <p className="font-en text-sm font-bold text-primary">{item.time}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">{item.activity}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">{item.detail}</p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 施設概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Facility" jaLabel="施設概要" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl rounded-lg border border-border bg-bg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['事業所名', `${siteConfig.hospitalName} 通所リハビリテーション`],
                    ['所在地', siteConfig.address.full],
                    ['電話番号', siteConfig.phone],
                    ['営業日', '月曜日～土曜日（日曜・祝日・年末年始を除く）'],
                    ['営業時間', '8:30～17:00'],
                    ['定員', '40名'],
                    ['対象者', '要支援1・2、要介護1～5の認定を受けた方'],
                    ['送迎範囲', `${siteConfig.address.city}および近隣地域`],
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
              <h2 className="text-2xl font-bold">見学・体験利用を受け付けております</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                デイケアの雰囲気やサービス内容を実際にご覧いただける見学・体験利用を随時受け付けております。ご本人さまはもちろん、ご家族の方もお気軽にお越しください。
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  見学・体験のお申し込み
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
