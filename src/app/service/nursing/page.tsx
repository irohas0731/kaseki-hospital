import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '訪問看護',
  description: `${siteConfig.hospitalName}の訪問看護ステーションのご案内です。経験豊富な看護師がご自宅を訪問し、医療的なケアから日常生活の支援まで、幅広いサービスを提供いたします。`,
};

const services = [
  {
    title: '健康状態の観察・管理',
    items: [
      'バイタルサイン（血圧・体温・脈拍・呼吸）の測定と評価',
      '病状の観察と主治医への報告・連絡',
      '服薬管理と薬の効果・副作用の確認',
      '栄養状態や水分摂取量の管理',
    ],
  },
  {
    title: '医療処置・管理',
    items: [
      '点滴・注射の管理',
      '褥瘡（床ずれ）の予防と処置',
      'カテーテルの管理（膀胱留置カテーテル・胃ろうなど）',
      '在宅酸素療法や人工呼吸器の管理',
      '吸引（たんの吸引）',
      'ストーマ（人工肛門・人工膀胱）の管理',
    ],
  },
  {
    title: '療養上のお世話',
    items: [
      '清拭・入浴介助による清潔の保持',
      '食事や排泄の援助',
      '体位変換や移動・移乗の介助',
      '療養環境の整備に関するアドバイス',
    ],
  },
  {
    title: 'リハビリテーション',
    items: [
      '日常生活動作（ADL）の訓練と支援',
      '関節拘縮の予防や機能訓練',
      '嚥下機能（飲み込み）の訓練',
      '福祉用具の使用方法のアドバイス',
    ],
  },
  {
    title: 'ご家族への支援',
    items: [
      '介護方法の指導と助言',
      '介護負担の軽減に向けた相談対応',
      '社会資源の活用に関する情報提供',
      '精神的なサポートとカウンセリング',
    ],
  },
  {
    title: 'ターミナルケア（終末期ケア）',
    items: [
      'ご本人やご家族の意思を尊重した看取りの支援',
      '痛みなどの苦痛緩和',
      '精神的・心理的なケア',
      '主治医と連携した24時間体制での支援',
    ],
  },
];

export default function NursingPage() {
  return (
    <>
      <PageHero title="訪問看護" enTitle="Home Nursing" />
      <Breadcrumb
        items={[
          { label: '在宅サービス', href: '/service' },
          { label: '訪問看護' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                訪問看護は、看護師がご自宅を訪問し、主治医の指示に基づいて医療的なケアや健康管理を行うサービスです。病気や障がいがあっても住み慣れたご自宅で安心して療養生活を送っていただけるよう、お一人おひとりに寄り添った看護を提供いたします。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12">
              <PlaceholderImage
                width={1200}
                height={400}
                label="訪問看護イメージ写真"
                className="w-full rounded-lg"
                colorIndex={2}
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
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="font-bold text-primary">介護保険をご利用の方</h3>
                  <ul className="mt-3 space-y-2 text-sm text-text-light">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      要支援1～2、要介護1～5の認定を受けた方
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      主治医から訪問看護が必要と認められた方
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="font-bold text-primary">医療保険をご利用の方</h3>
                  <ul className="mt-3 space-y-2 text-sm text-text-light">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      厚生労働大臣が定める疾病等に該当する方
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      急性増悪期で頻回な訪問看護が必要な方
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      小児や介護保険非該当の方
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Services" jaLabel="サービス内容" />
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="h-full rounded-lg border border-border bg-bg p-6">
                  <h3 className="mb-4 border-b border-border pb-3 text-lg font-bold">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 訪問看護の特徴 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Strengths" jaLabel="当ステーションの強み" />
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: '病院との連携',
                description:
                  '当院の医師・薬剤師・リハビリスタッフと常に連携しているため、病状の変化に迅速に対応でき、入退院時のスムーズな移行を支援いたします。',
              },
              {
                title: '24時間365日対応',
                description:
                  '緊急時には夜間・休日を問わず電話相談や緊急訪問を行います。急な体調変化にも対応できる体制を整えておりますので、安心してご利用ください。',
              },
              {
                title: '経験豊富なスタッフ',
                description:
                  '急性期病院や在宅医療の経験が豊富な看護師が在籍しています。さまざまな疾患や医療処置に対応でき、質の高い看護を提供いたします。',
              },
              {
                title: 'チームケア',
                description:
                  'ケアマネジャーや他の在宅サービス事業所と定期的に情報共有を行い、多職種で連携した包括的なケアを実現しています。',
              },
            ].map((strength, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{strength.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {strength.description}
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
                    ['事業所名', `${siteConfig.hospitalName} 訪問看護ステーション`],
                    ['所在地', siteConfig.address.full],
                    ['電話番号', siteConfig.phone],
                    ['営業日', '月曜日～金曜日（土・日・祝日・年末年始を除く）'],
                    ['営業時間', '8:30～17:30'],
                    ['訪問時間', '1回あたり30分～1時間30分'],
                    ['訪問エリア', `${siteConfig.address.city}および近隣地域`],
                    ['緊急対応', '24時間365日電話対応・緊急訪問可能'],
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
              <h2 className="text-2xl font-bold">訪問看護に関するご相談</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                訪問看護の利用をお考えの方、退院後の在宅療養に不安をお持ちの方は、まずはお気軽にご相談ください。看護師がご状態をお伺いし、最適なサービスをご提案いたします。
              </p>
              <p className="mt-4 text-2xl font-bold text-primary">{siteConfig.phone}</p>
              <p className="mt-1 text-xs text-text-muted">
                受付時間：{siteConfig.hours.morning}／{siteConfig.hours.afternoon}（{siteConfig.hours.closedDays}を除く）
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
