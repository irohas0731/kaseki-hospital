import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '訪問介護',
  description: `${siteConfig.hospitalName}の訪問介護サービスのご案内です。介護福祉士やホームヘルパーがご自宅を訪問し、身体介護や生活援助を通じて自立した日常生活を支援いたします。`,
};

const bodycare = [
  {
    title: '入浴介助',
    description:
      '安全に配慮しながら入浴のお手伝いをいたします。洗身や洗髪のほか、入浴が困難な方には清拭（身体を拭くこと）や足浴・手浴なども対応いたします。',
  },
  {
    title: '排泄介助',
    description:
      'トイレへの移動介助やおむつ交換など、排泄に関する介助を行います。ご本人の自尊心に配慮しながら、できる限り自立した排泄を支援いたします。',
  },
  {
    title: '食事介助',
    description:
      '食事の準備から食事中の見守り・介助、食後の後片付けまで対応いたします。安全に食事を召し上がっていただけるよう、姿勢の調整や食べやすい工夫も行います。',
  },
  {
    title: '移動・移乗介助',
    description:
      'ベッドから車いすへの移乗や、室内の移動、通院時の乗降介助など、安全な移動をお手伝いいたします。',
  },
  {
    title: '着替え介助',
    description:
      '衣類の着脱のお手伝いをいたします。季節や体調に合った衣服選びのアドバイスも行います。',
  },
  {
    title: '体位変換',
    description:
      '寝たきりの方の体位変換を定期的に行い、褥瘡（床ずれ）の予防に努めます。安楽な姿勢の保持も支援いたします。',
  },
];

const lifeSupport = [
  {
    title: '掃除・洗濯',
    description:
      '居室やトイレ、浴室などの清掃、洗濯・乾燥・取り込み・たたみなど、日常的な家事をお手伝いいたします。',
  },
  {
    title: '調理・配膳',
    description:
      '栄養バランスを考えた食事の調理や配膳、後片付けを行います。食事制限がある方にも対応いたします。',
  },
  {
    title: '買い物・薬の受け取り',
    description:
      '日常生活に必要な食材や日用品の買い物を代行いたします。処方薬の受け取りにも対応しております。',
  },
  {
    title: 'ベッドメイキング',
    description:
      'シーツの交換やベッド周りの整理整頓を行い、快適な療養環境を保ちます。',
  },
];

export default function CarePage() {
  return (
    <>
      <PageHero title="訪問介護" enTitle="Home Care" />
      <Breadcrumb
        items={[
          { label: '在宅サービス', href: '/service' },
          { label: '訪問介護' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                訪問介護（ホームヘルプサービス）は、介護福祉士やホームヘルパーがご自宅を訪問し、日常生活のさまざまな場面でお手伝いをするサービスです。入浴・排泄・食事などの身体介護から、掃除・洗濯・調理などの生活援助まで、ご利用者さまが住み慣れたご自宅で自分らしい生活を続けられるよう支援いたします。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <PlaceholderImage
                width={600}
                height={400}
                label="訪問介護 身体介護イメージ"
                className="w-full rounded-lg"
                colorIndex={3}
              />
              <PlaceholderImage
                width={600}
                height={400}
                label="訪問介護 生活援助イメージ"
                className="w-full rounded-lg"
                colorIndex={4}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 身体介護 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Body Care" jaLabel="身体介護サービス" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-text-light">
              身体介護は、ご利用者さまの身体に直接触れて行う介護サービスです。お一人おひとりの状態に合わせた適切な介助を行い、安全で快適な日常生活をサポートいたします。
            </p>
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bodycare.map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="h-full rounded-lg border border-border bg-bg p-6">
                  <h3 className="flex items-center gap-2 font-bold">
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
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

      {/* 生活援助 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Life Support" jaLabel="生活援助サービス" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-text-light">
              生活援助は、ご本人が一人暮らしであったり、ご家族が障がいや疾病などのためにご本人や家族が家事を行うことが困難な場合に提供されるサービスです。日常生活の維持に必要な家事全般をお手伝いいたします。
            </p>
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {lifeSupport.map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-4 rounded-lg border border-border bg-bg p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <span className="text-sm font-bold text-secondary">{i + 1}</span>
                  </div>
                  <div>
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

      {/* ご利用にあたって */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Important Notes" jaLabel="ご利用にあたって" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold">ご利用対象</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  要介護1～5の認定を受けた方が対象です。要支援1・2の方は、介護予防訪問介護相当のサービスをご利用いただけます。
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold">訪問介護でできないこと</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  訪問介護は日常生活上の支援を行うサービスのため、以下のようなことは対象外となります。
                </p>
                <ul className="mt-3 space-y-1 text-sm text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-red">-</span>
                    ご利用者さま以外の方のための家事（ご家族の食事づくり等）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-red">-</span>
                    大掃除や庭の手入れ、ペットの世話など日常的な家事の範囲を超えるもの
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent-red">-</span>
                    医療行為（注射・点滴・摘便など）
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold">ご利用料金</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  介護保険の自己負担分（1割～3割）でご利用いただけます。具体的な料金はサービス内容や時間によって異なりますので、詳しくはお問い合わせください。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
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
                    ['事業所名', `${siteConfig.hospitalName} 訪問介護事業所`],
                    ['所在地', siteConfig.address.full],
                    ['電話番号', siteConfig.phone],
                    ['営業日', '月曜日～金曜日（土・日・祝日・年末年始を除く）'],
                    ['営業時間', '8:30～17:30'],
                    ['サービス提供時間', '7:00～20:00（早朝・夜間も応相談）'],
                    ['訪問エリア', `${siteConfig.address.city}および近隣地域`],
                    ['スタッフ', '介護福祉士・ホームヘルパー（介護職員初任者研修修了者）'],
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
              <h2 className="text-2xl font-bold">訪問介護のご利用について</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                訪問介護サービスに関するご質問やご相談は、いつでもお気軽にお問い合わせください。ご利用者さまやご家族の生活状況をお伺いし、最適なサービス内容をご提案いたします。
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  お問い合わせ
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
