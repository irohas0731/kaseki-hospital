import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: '入院手続き',
  description: `${siteConfig.hospitalName}の入院手続きのご案内です。入院までの流れ、必要書類、入院時の持ち物リストなど、スムーズにご入院いただくための情報をまとめております。`,
};

const admissionSteps = [
  {
    step: 1,
    title: '入院の決定',
    description:
      '主治医が入院の必要性を判断し、患者さまとご家族に入院についてご説明いたします。入院日時・病棟については、医師と相談のうえ決定します。',
  },
  {
    step: 2,
    title: '入院前面談',
    description:
      '入院前に看護師が面談を行い、現在の健康状態・服薬状況・アレルギーの有無・生活習慣などをお伺いします。入院生活についてのご説明もこの際に行います。',
  },
  {
    step: 3,
    title: '必要書類のご準備',
    description:
      '入院に必要な書類をご準備ください。書類は事前に郵送またはご来院時にお渡しいたします。ご不明な点は医事課までお問い合わせください。',
  },
  {
    step: 4,
    title: '入院当日の受付',
    description:
      '入院当日は、1階総合受付にお越しください。受付時間は午前10時となっております。必要書類と持ち物をご持参のうえ、お手続きをお願いいたします。',
  },
  {
    step: 5,
    title: '病棟へのご案内',
    description:
      '受付完了後、看護師が病棟までご案内いたします。病室の設備や日課のご説明、担当医・看護師のご紹介を行います。',
  },
];

const requiredDocuments = [
  {
    name: '健康保険証（マイナ保険証含む）',
    note: '有効期限内のものをご持参ください。',
  },
  {
    name: '診察券',
    note: '当院の診察券をお持ちの方はご持参ください。',
  },
  {
    name: '入院申込書・誓約書',
    note: '事前にお渡しした書類にご記入・ご捺印のうえご提出ください。',
  },
  {
    name: '限度額適用認定証',
    note: 'お持ちの方はご持参ください。医療費の窓口負担が軽減されます。',
  },
  {
    name: '紹介状（診療情報提供書）',
    note: '他院からの紹介の場合はご持参ください。',
  },
  {
    name: '各種医療証',
    note: '高齢受給者証・特定疾患医療証・障害者医療証など、お持ちの方はすべてご持参ください。',
  },
  {
    name: 'お薬手帳・服用中のお薬',
    note: '現在服用されているお薬がある場合は、お薬と一緒にお持ちください。',
  },
];

const bringItems = [
  {
    category: '衣類',
    items: [
      'パジャマ・寝巻き（前開きのもの推奨）',
      '下着類',
      '羽織るもの（カーディガンなど）',
      '履き慣れた室内履き（かかとのあるもの）',
    ],
  },
  {
    category: '日用品',
    items: [
      'タオル・バスタオル',
      '洗面用具（歯ブラシ・歯磨き粉・コップ）',
      'シャンプー・ボディソープ',
      'ティッシュペーパー',
      '箸・スプーン・湯呑み',
    ],
  },
  {
    category: 'その他',
    items: [
      '印鑑（退院手続き等に必要です）',
      '筆記用具',
      'イヤホン（テレビご視聴時に必要です）',
      '現在服用中のお薬（お薬手帳含む）',
    ],
  },
];

export default function ProcedurePage() {
  return (
    <>
      <PageHero title="入院手続き" enTitle="Admission Procedure" />
      <Breadcrumb
        items={[
          { label: '入院', href: '/hospitalization' },
          { label: '入院手続き' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                入院までの流れ
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                入院が決まりましたら、以下の流れに沿ってお手続きをお願いいたします。
                ご不明な点がございましたら、医事課または看護部までお気軽にお問い合わせください。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ステップ */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Flow
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">入院の流れ</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="space-y-0">
            {admissionSteps.map((step, i) => (
              <ScrollFadeIn key={step.step} delay={i * 100}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* タイムライン */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                      {step.step}
                    </div>
                    {i < admissionSteps.length - 1 && (
                      <div className="mt-2 w-0.5 flex-1 bg-primary/20" />
                    )}
                  </div>
                  {/* 内容 */}
                  <div className="pt-2 pb-4">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 必要書類 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Documents
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                入院時に必要な書類
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="space-y-4">
            {requiredDocuments.map((doc, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <div className="rounded-lg border border-border bg-bg p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-sm">{doc.name}</h3>
                      <p className="mt-1 text-xs text-text-muted">{doc.note}</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 持ち物リスト */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Checklist
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                入院時の持ち物
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {bringItems.map((category, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-text-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay={300}>
            <div className="mt-8 rounded-lg border border-accent-red/30 bg-accent-red/5 p-6">
              <h3 className="font-bold text-accent-red text-sm flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                ご注意ください
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-text-light">
                <li>
                  ・貴重品や多額の現金のお持ち込みはご遠慮ください。紛失・盗難について当院では責任を負いかねます。
                </li>
                <li>
                  ・危険物（刃物・ライター等）の持ち込みは禁止しております。
                </li>
                <li>
                  ・持ち物にはお名前の記入をお願いいたします。
                </li>
                <li>
                  ・テレビ・冷蔵庫のご利用にはテレビカードが必要です（1階ロビーにて販売）。
                </li>
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-primary-bg p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                入院手続きに関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm md:text-base text-text-light leading-relaxed max-w-2xl mx-auto">
                入院手続きやご準備についてご不明な点がございましたら、医事課までお気軽にお電話ください。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <p className="text-sm text-text-muted">
                  医事課直通：{siteConfig.phone}
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
