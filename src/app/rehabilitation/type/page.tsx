import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'リハビリの種類',
  description: `${siteConfig.hospitalName}で提供している理学療法・作業療法・言語聴覚療法の各リハビリテーションについてご紹介します。`,
};

const rehabTypes = [
  {
    enTitle: 'Physical Therapy',
    jaTitle: '理学療法（PT）',
    lead: '身体機能の回復と運動能力の改善を目指します',
    description:
      '理学療法では、病気やけが、手術などによって低下した筋力・関節の動き・バランス能力などの身体機能を回復させるための訓練を行います。歩行訓練や筋力トレーニング、ストレッチ、物理療法（温熱・電気刺激など）を組み合わせ、患者さまが再び自分の力で動けるようサポートいたします。',
    targets: [
      '脳卒中後の片麻痺による歩行障害',
      '骨折や関節手術後の運動機能回復',
      '心臓手術後の体力回復（心臓リハビリ）',
      '呼吸器疾患による体力低下の改善',
      '腰痛・膝痛などの慢性的な運動器疾患',
      '高齢者の転倒予防・介護予防',
    ],
    methods: [
      '関節可動域訓練',
      '筋力増強訓練',
      '歩行訓練・バランス訓練',
      '物理療法（温熱・電気・牽引）',
      '呼吸リハビリテーション',
      '心臓リハビリテーション',
    ],
  },
  {
    enTitle: 'Occupational Therapy',
    jaTitle: '作業療法（OT）',
    lead: '日常生活の自立と社会参加をサポートします',
    description:
      '作業療法では、食事・着替え・入浴・家事など日常生活に必要な動作（ADL）の回復を目指した訓練を行います。手指の巧緻動作の練習や、福祉用具・自助具の活用方法の指導、住環境の調整提案なども行い、患者さまが退院後の生活を安心して送れるよう支援いたします。',
    targets: [
      '脳卒中後の上肢機能障害・高次脳機能障害',
      '手指の骨折や腱損傷後の機能回復',
      '認知症に伴う生活動作の低下',
      '精神疾患による生活能力の低下',
      '退院に向けた家屋調査・環境調整',
      '復職・復学に向けたリハビリテーション',
    ],
    methods: [
      '日常生活動作（ADL）訓練',
      '上肢機能訓練・手指巧緻動作訓練',
      '高次脳機能訓練（注意力・記憶力の改善）',
      '自助具の作成・福祉用具の選定',
      '家屋調査・住環境整備の提案',
      '調理訓練・家事動作訓練',
    ],
  },
  {
    enTitle: 'Speech-Language Therapy',
    jaTitle: '言語聴覚療法（ST）',
    lead: 'ことばと食べることの回復を支援します',
    description:
      '言語聴覚療法では、脳卒中や頭部外傷などによって生じた言語障害（失語症・構音障害）や、嚥下障害（飲み込みの困難）に対するリハビリテーションを行います。コミュニケーション能力の回復と、安全に食事を楽しめるようになることを目標に、専門的な評価と訓練を実施いたします。',
    targets: [
      '脳卒中後の失語症・構音障害',
      '嚥下障害（飲み込みの困難）',
      '声帯疾患による音声障害',
      '高次脳機能障害（注意障害・記憶障害）',
      '認知症に伴うコミュニケーション障害',
      '気管切開後の発声・嚥下訓練',
    ],
    methods: [
      '失語症訓練（聴く・話す・読む・書く）',
      '構音訓練（発音の改善）',
      '嚥下訓練（飲み込みの機能改善）',
      '嚥下造影検査（VF）・嚥下内視鏡検査（VE）',
      '食形態の調整・食事姿勢の指導',
      'コミュニケーション代替手段の導入支援',
    ],
  },
];

export default function RehabTypePage() {
  return (
    <>
      <PageHero title="リハビリの種類" enTitle="Types of Rehabilitation" />
      <Breadcrumb
        items={[
          { label: 'リハビリテーション', href: '/rehabilitation' },
          { label: 'リハビリの種類' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">3つの専門領域で総合的に支援します</h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}では、理学療法・作業療法・言語聴覚療法の3つの専門領域のスタッフが連携し、患者さまの状態に合わせた最適なリハビリテーションプログラムを提供しています。それぞれの専門性を活かしながらチームとして協力し、身体機能の回復から日常生活の自立、社会復帰まで一貫してサポートいたします。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Rehab Type Cards */}
      {rehabTypes.map((type, i) => (
        <section
          key={i}
          className={`py-16 md:py-20 ${i % 2 === 1 ? 'bg-bg-off' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <ScrollFadeIn>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                {/* Image */}
                <div className="w-full lg:w-2/5">
                  <PlaceholderImage
                    width={600}
                    height={400}
                    label={type.jaTitle}
                    className="w-full rounded-lg"
                    colorIndex={i}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="font-en text-xs tracking-wider text-text-muted uppercase">
                    {type.enTitle}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{type.jaTitle}</h2>
                  <p className="mt-2 text-sm font-medium text-primary">{type.lead}</p>
                  <div className="mt-3 h-0.5 w-12 bg-primary" />
                  <p className="mt-4 text-sm leading-relaxed text-text-light">
                    {type.description}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Details */}
            <ScrollFadeIn delay={200}>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="flex items-center gap-2 text-base font-bold">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-bold text-white">
                      対
                    </span>
                    主な対象となる方
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {type.targets.map((target, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="flex items-center gap-2 text-base font-bold">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-secondary text-xs font-bold text-white">
                      法
                    </span>
                    主なリハビリ内容
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {type.methods.map((method, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      ))}

      {/* Flow */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">リハビリテーションの流れ</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <div className="mt-10 mx-auto max-w-3xl space-y-0">
            {[
              { step: '1', title: '医師の処方', description: '主治医がリハビリテーションの必要性を判断し、処方を出します。' },
              { step: '2', title: '初期評価', description: '担当の療法士が身体機能や生活能力を詳しく評価し、現在の状態を把握します。' },
              { step: '3', title: '目標設定・プログラム立案', description: '患者さま・ご家族と一緒に目標を設定し、個別のリハビリプログラムを作成します。' },
              { step: '4', title: 'リハビリ実施', description: '計画に基づき、毎日のリハビリテーションを実施します。必要に応じてプログラムを調整します。' },
              { step: '5', title: '再評価・退院支援', description: '定期的に評価を行い、目標の達成度を確認します。退院に向けた環境調整や在宅サービスへの引き継ぎを行います。' },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {item.step}
                    </span>
                    {i < 4 && <div className="h-full w-px bg-primary/30" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">{item.description}</p>
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
