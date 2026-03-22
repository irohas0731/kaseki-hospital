import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '入院病棟紹介',
  description: `${siteConfig.hospitalName}の入院病棟のご紹介です。一般病棟・回復期リハビリテーション病棟・療養病棟それぞれの特徴や病床数、設備について詳しくご案内しております。`,
};

const wards = [
  {
    name: '一般病棟',
    enName: 'General Ward',
    beds: 60,
    floor: '3階・4階',
    colorIndex: 0,
    features: ['急性期医療に対応', '24時間看護体制', '個室・多床室を選択可能'],
    description:
      '一般病棟では、内科・外科をはじめとする急性期の入院治療を行っております。手術後の管理や急性疾患の治療など、専門的な医療を24時間体制で提供しています。個室もご用意しておりますので、ご希望の方はお申し出ください。看護師が患者さまの状態を常に観察し、安全で安心な入院生活をサポートいたします。',
    amenities: [
      '各ベッドサイドにテレビ・冷蔵庫を完備',
      'ナースコール完備',
      '車椅子対応トイレ',
      'デイルーム（談話室）',
      'シャワー室・浴室',
    ],
  },
  {
    name: '回復期リハビリテーション病棟',
    enName: 'Recovery Rehabilitation Ward',
    beds: 48,
    floor: '5階',
    colorIndex: 1,
    features: [
      '専従リハビリスタッフ配置',
      '在宅復帰を目指したプログラム',
      '充実したリハビリ設備',
    ],
    description:
      '回復期リハビリテーション病棟では、脳血管疾患や骨折などの急性期治療を終えた患者さまが、集中的なリハビリテーションを通じて日常生活への復帰を目指します。理学療法士・作業療法士・言語聴覚士が専従で配置されており、一人ひとりの目標に合わせた個別プログラムを提供しています。ご家族への介護指導や自宅環境の調整もサポートいたします。',
    amenities: [
      '病棟内リハビリ訓練室',
      'ADL訓練室（入浴・調理訓練等）',
      '各ベッドサイドにテレビ・冷蔵庫を完備',
      '談話室・食堂',
      'バリアフリー設計',
    ],
  },
  {
    name: '療養病棟',
    enName: 'Long-term Care Ward',
    beds: 40,
    floor: '6階',
    colorIndex: 2,
    features: [
      '長期療養に対応',
      'ゆったりとした療養環境',
      '多職種による生活支援',
    ],
    description:
      '療養病棟では、慢性期の疾患や長期的な医療管理が必要な患者さまに、安心して療養生活を送っていただける環境を整えております。医師・看護師・介護スタッフが協力し、日常生活の支援を行うとともに、季節の行事やレクリエーションなどを通じて、心身ともに穏やかにお過ごしいただけるよう配慮しています。',
    amenities: [
      '各ベッドサイドにテレビ・冷蔵庫を完備',
      '機械浴・個浴対応',
      'ゆとりある食堂・談話スペース',
      '屋上庭園',
      '理美容サービス（月2回）',
    ],
  },
];

export default function WardPage() {
  return (
    <>
      <PageHero title="入院病棟紹介" enTitle="Ward Information" />
      <Breadcrumb
        items={[
          { label: '入院', href: '/hospitalization' },
          { label: '入院病棟紹介' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                患者さまの状態に合わせた病棟をご用意
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}
                では、急性期・回復期・療養期それぞれの段階に応じた3つの病棟を設けております。
                合計{wards.reduce((sum, w) => sum + w.beds, 0)}
                床の病床を有し、患者さまの症状や治療段階に最適な環境をご提供いたします。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 病床数サマリー */}
      <section className="bg-bg-off py-12">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="grid grid-cols-3 gap-4 text-center">
              {wards.map((ward, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-bg p-6"
                >
                  <p className="text-xs text-text-muted">{ward.name}</p>
                  <p className="mt-1 text-3xl font-bold text-primary">
                    {ward.beds}
                    <span className="text-base font-normal text-text-muted ml-1">
                      床
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{ward.floor}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 各病棟の詳細 */}
      {wards.map((ward, i) => (
        <section
          key={i}
          className={`py-16 md:py-20 ${i % 2 === 1 ? 'bg-bg-off' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <ScrollFadeIn>
              <div className="mb-10 text-center">
                <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                  {ward.enName}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">{ward.name}</h2>
                <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
              </div>
            </ScrollFadeIn>

            <div className="grid gap-8 md:grid-cols-2">
              <ScrollFadeIn delay={100}>
                <PlaceholderImage
                  width={600}
                  height={400}
                  label={`${ward.name}の写真`}
                  className="w-full rounded-lg"
                  colorIndex={ward.colorIndex}
                />
              </ScrollFadeIn>

              <ScrollFadeIn delay={200}>
                <div>
                  {/* 基本情報 */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {ward.floor}
                    </span>
                    <span className="inline-flex items-center rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {ward.beds}床
                    </span>
                  </div>

                  {/* 特徴タグ */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ward.features.map((feature, j) => (
                      <span
                        key={j}
                        className="inline-block rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 説明 */}
                  <p className="text-sm leading-relaxed text-text-light">
                    {ward.description}
                  </p>
                </div>
              </ScrollFadeIn>
            </div>

            {/* 設備一覧 */}
            <ScrollFadeIn delay={300}>
              <div className="mt-8 rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold text-sm mb-4">主な設備・サービス</h3>
                <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {ward.amenities.map((amenity, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      ))}

      {/* 共通設備 */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Common Facilities
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                共通設備のご案内
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: '売店', description: '1階ロビーにて日用品・飲料等を販売しております。営業時間：平日9:00～17:00' },
                { name: 'コインランドリー', description: '各病棟にコインランドリーを設置しています。洗剤は売店でお求めください。' },
                { name: '公衆電話', description: '1階ロビーに公衆電話を設置しております。病室内での携帯電話使用はご遠慮ください。' },
                { name: '駐車場', description: '正面玄関前に駐車場をご用意しています。入院中のご利用は事前にお申し出ください。' },
              ].map((facility, i) => (
                <div key={i} className="rounded-lg border border-border bg-bg p-5">
                  <h3 className="font-bold text-sm text-primary">{facility.name}</h3>
                  <p className="mt-2 text-xs text-text-light leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                病棟見学について
              </h2>
              <p className="mt-4 text-sm md:text-base text-text-light leading-relaxed max-w-2xl mx-auto">
                入院前に病棟の見学をご希望の方は、医療相談室までお気軽にご相談ください。
                ご都合に合わせてご案内いたします。
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
