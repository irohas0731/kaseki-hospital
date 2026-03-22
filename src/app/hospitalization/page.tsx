import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '入院',
  description: `${siteConfig.hospitalName}の入院案内です。入院手続き・病棟紹介・面会時間・緩和ケアなど、入院生活に関する情報を詳しくご案内しています。安心してご入院いただける環境を整えております。`,
};

const subPages = [
  {
    href: '/hospitalization/procedure',
    enTitle: 'Admission Procedure',
    title: '入院手続き',
    description:
      '入院に必要な書類や手続きの流れ、入院当日の持ち物などをご案内しています。スムーズなご入院のためにご確認ください。',
    colorIndex: 0,
  },
  {
    href: '/hospitalization/ward',
    enTitle: 'Ward Information',
    title: '入院病棟紹介',
    description:
      '一般病棟・回復期リハビリテーション病棟・療養病棟など、各病棟の特徴と設備をご紹介しています。',
    colorIndex: 1,
  },
  {
    href: '/hospitalization/meeting',
    enTitle: 'Visiting Hours',
    title: 'お見舞い・ご面会',
    description:
      '面会時間や面会ルール、お見舞い品に関するお願いなど、ご面会に必要な情報をまとめています。',
    colorIndex: 2,
  },
  {
    href: '/hospitalization/palliative',
    enTitle: 'Palliative Care',
    title: '緩和ケア',
    description:
      '患者さまの身体的・精神的な苦痛を和らげ、その方らしい生活を支援する緩和ケアについてご案内しています。',
    colorIndex: 3,
  },
];

export default function HospitalizationPage() {
  return (
    <>
      <PageHero title="入院" enTitle="Hospitalization" />
      <Breadcrumb items={[{ label: '入院' }]} />

      {/* 入院案内 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                安心して療養いただける入院環境
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}では、患者さま一人ひとりの状態に合わせた最適な入院医療を提供しております。
                急性期から回復期、療養期まで切れ目のない医療・看護体制を整え、
                入院中の生活が少しでも快適になるよう、スタッフ一同心を込めてサポートいたします。
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-text-light">
                入院に関するご不明な点がございましたら、お気軽に医療相談室までお問い合わせください。
                ソーシャルワーカーが入院前から退院後まで、患者さまとご家族を支援いたします。
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
              label="入院病棟の外観写真"
              className="w-full rounded-lg"
              colorIndex={0}
            />
          </ScrollFadeIn>
        </div>
      </section>

      {/* 入院の特徴 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Features
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                当院の入院医療の特徴
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'チーム医療',
                description:
                  '医師・看護師・薬剤師・リハビリスタッフ・管理栄養士・ソーシャルワーカーなど多職種が連携し、患者さまの治療とケアにあたります。定期的なカンファレンスを行い、治療方針を共有しています。',
              },
              {
                title: '24時間看護体制',
                description:
                  '入院中は24時間体制で看護師が常駐しております。夜間も安心してお過ごしいただけるよう、ナースコールによる迅速な対応を心がけています。',
              },
              {
                title: '退院支援・在宅連携',
                description:
                  '入院早期から退院後の生活を見据えた支援を行います。在宅サービスや地域の医療機関との連携を通じて、退院後もスムーズに療養生活を送れるようサポートいたします。',
              },
            ].map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="text-lg font-bold text-primary">
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

      {/* サブページへのリンクカード */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Information
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                入院に関する情報
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {subPages.map((page, i) => (
              <ScrollFadeIn key={page.href} delay={i * 100}>
                <Link
                  href={page.href}
                  className="group block rounded-lg border border-border bg-bg overflow-hidden transition-all hover:shadow-md hover:border-primary"
                >
                  <PlaceholderImage
                    width={600}
                    height={200}
                    label={`${page.title}のイメージ写真`}
                    className="w-full"
                    colorIndex={page.colorIndex}
                  />
                  <div className="p-6">
                    <p className="font-en text-xs text-text-muted">
                      {page.enTitle}
                    </p>
                    <h3 className="mt-1 text-lg font-bold group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-light leading-relaxed">
                      {page.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      詳しく見る
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ誘導 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-primary-bg p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                入院に関するご相談
              </h2>
              <p className="mt-4 text-sm md:text-base text-text-light leading-relaxed max-w-2xl mx-auto">
                入院に関するご質問やご不安なことがございましたら、医療相談室までお気軽にご相談ください。
                入院前のご説明から退院後の生活支援まで、専門スタッフがサポートいたします。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <p className="text-sm text-text-muted">
                  医療相談室直通：{siteConfig.phone}
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
