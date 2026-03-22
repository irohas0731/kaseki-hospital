import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'リハビリテーション',
  description: `${siteConfig.hospitalName}のリハビリテーション部門のご案内です。理学療法・作業療法・言語聴覚療法を中心に、患者さま一人ひとりに合わせた総合的なリハビリプログラムを提供しています。`,
};

const subPages = [
  {
    href: '/rehabilitation/approach',
    enTitle: 'About',
    jaTitle: 'リハビリ部について',
    description:
      'リハビリテーション部の理念や目標、スタッフ体制についてご紹介します。チーム医療の考え方を大切に、患者さまの回復を全力で支援いたします。',
  },
  {
    href: '/rehabilitation/type',
    enTitle: 'Types',
    jaTitle: 'リハビリの種類',
    description:
      '理学療法・作業療法・言語聴覚療法など、当院で提供しているリハビリテーションの種類と内容をご紹介いたします。',
  },
  {
    href: '/rehabilitation/facility',
    enTitle: 'Equipment',
    jaTitle: 'リハビリ機器紹介',
    description:
      '最新のリハビリテーション機器を取り揃え、安全かつ効果的な訓練環境をご用意しています。主要な機器をご紹介いたします。',
  },
  {
    href: '/rehabilitation/staff',
    enTitle: 'Education',
    jaTitle: 'スタッフ教育',
    description:
      '質の高いリハビリテーションを提供するため、スタッフの継続的な学習や資格取得を支援する教育体制を整えています。',
  },
];

export default function RehabilitationPage() {
  return (
    <>
      <PageHero title="リハビリテーション" enTitle="Rehabilitation" />
      <Breadcrumb items={[{ label: 'リハビリテーション' }]} />

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">
                患者さまの「その人らしい生活」を取り戻すために
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 mx-auto max-w-3xl">
              <p className="text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}のリハビリテーション部では、脳血管疾患や運動器疾患、呼吸器疾患など幅広い領域の患者さまに対して、急性期から回復期まで一貫したリハビリテーションを提供しています。理学療法士・作業療法士・言語聴覚士がチームとなり、医師や看護師と緊密に連携しながら、患者さま一人ひとりの生活目標に合わせたプログラムを立案・実施いたします。
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-light md:text-base">
                「住み慣れた地域でその人らしく暮らし続ける」ことを目指し、身体機能の回復だけでなく、日常生活動作の改善や社会復帰に向けた支援にも力を入れています。退院後も訪問リハビリテーションや通所リハビリテーションなど、在宅生活を支える体制を整えております。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="mt-10">
              <PlaceholderImage
                width={1200}
                height={400}
                label="リハビリテーション室の様子"
                className="w-full rounded-lg"
                colorIndex={0}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Feature Numbers */}
      <section className="bg-primary-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">
              リハビリテーション部の特徴
            </h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '30名以上', label: '専門スタッフ', note: '理学療法士・作業療法士・言語聴覚士' },
              { number: '365日', label: 'リハビリ提供', note: '土日祝日も含めた切れ目ない支援' },
              { number: '急性期〜', label: '一貫したケア', note: '発症直後から在宅復帰まで' },
              { number: 'チーム', label: '多職種連携', note: '医師・看護師・MSWとの協働' },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6 text-center">
                  <p className="text-2xl font-bold text-primary">{item.number}</p>
                  <p className="mt-2 text-sm font-bold">{item.label}</p>
                  <p className="mt-1 text-xs text-text-muted">{item.note}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-page Cards */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">
              リハビリテーションについて詳しく見る
            </h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {subPages.map((page, i) => (
              <ScrollFadeIn key={page.href} delay={i * 100}>
                <Link
                  href={page.href}
                  className="group flex flex-col rounded-lg border border-border bg-bg p-6 transition-all hover:shadow-md hover:border-primary"
                >
                  <p className="font-en text-xs tracking-wider text-text-muted uppercase">
                    {page.enTitle}
                  </p>
                  <h3 className="mt-1 text-lg font-bold group-hover:text-primary transition-colors">
                    {page.jaTitle}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-light">
                    {page.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    <span>詳しく見る</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-off py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg p-8 text-center">
              <h2 className="text-lg font-bold">リハビリテーションに関するご相談</h2>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                リハビリテーションに関するご質問やご不明な点がございましたら、お気軽にお問い合わせください。
                <br />
                主治医からのご紹介状をお持ちの方は、地域連携室を通じてご予約を承ります。
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-block rounded border border-primary px-8 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
