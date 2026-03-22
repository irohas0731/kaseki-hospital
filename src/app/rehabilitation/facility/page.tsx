import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'リハビリ機器紹介',
  description: `${siteConfig.hospitalName}で導入しているリハビリテーション機器をご紹介します。最新の機器を活用し、安全で効果的なリハビリテーションを提供しています。`,
};

const equipmentCategories = [
  {
    category: '運動療法機器',
    items: [
      {
        name: 'トレッドミル（免荷式歩行訓練装置）',
        description:
          '体重を一部免荷した状態で安全に歩行訓練を行える装置です。脳卒中後の歩行障害や下肢骨折後のリハビリに活用しています。段階的に免荷量を調整できるため、患者さまの回復状況に合わせた訓練が可能です。',
      },
      {
        name: 'エルゴメーター（上肢・下肢用）',
        description:
          '上肢用・下肢用の自転車型運動器具です。負荷量を細かく設定でき、心臓リハビリテーションや体力回復のための有酸素運動に使用します。心電図モニターと併用して安全に運動を行います。',
      },
      {
        name: 'レッグプレス・レッグエクステンション',
        description:
          '下肢の筋力を効率よく鍛えるためのマシンです。膝関節や股関節の手術後、安全かつ適切な負荷で筋力回復を図ります。重量を細かく調整できるため、筋力の弱い方でも無理なく訓練できます。',
      },
    ],
  },
  {
    category: '物理療法機器',
    items: [
      {
        name: '超音波治療器',
        description:
          '超音波の深部温熱効果を利用して、筋肉や腱の痛みを緩和し、組織の修復を促進します。関節拘縮の改善やスポーツ外傷後の治療に効果的です。',
      },
      {
        name: '低周波治療器・干渉波治療器',
        description:
          '電気刺激を利用して痛みの緩和や筋肉の収縮を促す装置です。筋力低下の改善や疼痛コントロールに活用しています。部位や症状に合わせて適切な周波数を設定します。',
      },
      {
        name: 'ホットパック・極超短波治療器',
        description:
          '温熱療法に使用する機器です。血液循環の改善や筋緊張の緩和、関節可動域の改善に効果があります。リハビリ訓練の前処置として用いることで、より効果的な訓練が行えます。',
      },
    ],
  },
  {
    category: '評価・分析機器',
    items: [
      {
        name: '嚥下造影検査装置（VF）',
        description:
          'X線透視下で造影剤を含んだ食物を飲み込む様子を観察し、嚥下機能を詳しく評価する装置です。誤嚥のリスクを的確に判断し、最適な食形態や姿勢を検討するために使用します。',
      },
      {
        name: '三次元動作解析装置',
        description:
          '赤外線カメラで患者さまの動きを3次元的に解析するシステムです。歩行パターンの異常を客観的に評価でき、治療計画の立案や効果判定に活用しています。',
      },
      {
        name: '体組成計・筋力測定器',
        description:
          '筋肉量や脂肪量を正確に測定する体組成計と、各関節の筋力を定量的に評価するハンドヘルドダイナモメーターです。リハビリの効果を数値で確認し、プログラムの見直しに役立てています。',
      },
    ],
  },
  {
    category: 'ADL訓練設備',
    items: [
      {
        name: 'ADL訓練室（模擬家屋）',
        description:
          '実際の住宅を模した訓練スペースです。キッチン・浴室・トイレ・和室・階段などを備えており、退院後の生活を想定した実践的な動作訓練を行います。福祉用具の試用もこちらで行えます。',
      },
      {
        name: '自動車運転シミュレーター',
        description:
          '脳卒中後の自動車運転再開を支援するためのシミュレーターです。注意力や判断力を含む運転に必要な高次脳機能を評価し、段階的に運転動作の練習を行うことができます。',
      },
      {
        name: '装具・スプリント作成コーナー',
        description:
          '作業療法士が患者さまに合わせた手の装具（スプリント）を作成するためのコーナーです。熱可塑性樹脂を使用し、手指の変形予防や機能改善のための装具をオーダーメイドで制作します。',
      },
    ],
  },
];

export default function RehabFacilityPage() {
  return (
    <>
      <PageHero title="リハビリ機器紹介" enTitle="Rehabilitation Equipment" />
      <Breadcrumb
        items={[
          { label: 'リハビリテーション', href: '/rehabilitation' },
          { label: 'リハビリ機器紹介' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">
                充実した設備で質の高いリハビリを
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}では、患者さまに安全で効果的なリハビリテーションを提供するため、最新の医療機器・訓練設備を導入しています。約500平方メートルの広々としたリハビリテーション室に加え、ADL訓練室や物理療法室など、目的に応じた訓練スペースを完備しております。
              </p>
            </div>
          </ScrollFadeIn>

          {/* Facility Overview Image */}
          <ScrollFadeIn delay={200}>
            <div className="mt-10">
              <PlaceholderImage
                width={1200}
                height={400}
                label="リハビリテーション室全景"
                className="w-full rounded-lg"
                colorIndex={0}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Equipment Categories */}
      {equipmentCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`py-16 md:py-20 ${catIndex % 2 === 1 ? 'bg-bg-off' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <ScrollFadeIn>
              <h2 className="text-center text-xl font-bold md:text-2xl">
                {category.category}
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            </ScrollFadeIn>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, i) => (
                <ScrollFadeIn key={i} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-lg border border-border bg-bg overflow-hidden">
                    <PlaceholderImage
                      width={400}
                      height={260}
                      label={item.name}
                      className="w-full"
                      colorIndex={catIndex * 3 + i}
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-sm font-bold md:text-base">{item.name}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-text-light md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Floor Info */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">施設概要</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 mx-auto max-w-2xl">
              <div className="rounded-lg border border-border bg-bg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['所在階', '2階（リハビリテーション室・物理療法室）'],
                      ['面積', '約500平方メートル（リハビリテーション室）'],
                      ['ADL訓練室', '約60平方メートル（模擬家屋設備付き）'],
                      ['対応時間', '平日 9:00〜17:00／土曜 9:00〜12:00'],
                      ['施設基準', '脳血管疾患等リハビリテーション料（I）\n運動器リハビリテーション料（I）\n呼吸器リハビリテーション料（I）'],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i !== 0 ? 'border-t border-border' : ''}>
                        <th className="w-1/3 bg-bg-off px-4 py-3 text-left font-medium">{label}</th>
                        <td className="px-4 py-3 whitespace-pre-line text-text-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Note */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg p-6">
              <h3 className="text-sm font-bold">ご利用にあたって</h3>
              <ul className="mt-3 space-y-1 text-xs leading-relaxed text-text-muted">
                <li>※ リハビリテーションは主治医の処方に基づいて実施いたします。</li>
                <li>※ 掲載している機器は主要なものの一部です。患者さまの状態に合わせて適切な機器を選択いたします。</li>
                <li>※ 機器の写真はイメージです。実際の機種と異なる場合がございます。</li>
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
