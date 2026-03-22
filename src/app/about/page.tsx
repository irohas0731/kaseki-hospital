import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '病院について',
  description: `${siteConfig.hospitalName}のご紹介です。院長ご挨拶・病院理念・基本方針・医師紹介・病院概要・アクセスなど、当院に関する情報をご覧いただけます。`,
};

const subPages = [
  {
    href: '/about/greeting',
    enTitle: 'Greeting',
    title: 'ご挨拶',
    description:
      '院長の化石太郎より、当院の医療に対する想いや地域の皆さまへのメッセージをお伝えしています。',
    colorIndex: 0,
  },
  {
    href: '/about/management',
    enTitle: 'Philosophy',
    title: '病院理念',
    description:
      '当院が掲げる理念・ビジョン・ミッションについてご紹介しています。すべての医療活動の基盤となる考え方です。',
    colorIndex: 1,
  },
  {
    href: '/about/policy',
    enTitle: 'Basic Policy',
    title: '基本方針',
    description:
      '患者さまに安心・安全な医療を提供するために、当院が定める基本方針をご案内しています。',
    colorIndex: 2,
  },
  {
    href: '/about/doctor',
    enTitle: 'Doctors',
    title: '医師紹介',
    description:
      '各診療科を担当する医師のプロフィールや専門分野、患者さまへのメッセージをご紹介しています。',
    colorIndex: 3,
  },
  {
    href: '/about/sakurajyuji',
    enTitle: 'Hospital Overview',
    title: '病院概要',
    description:
      '病院の名称・所在地・病床数・診療科目・開設年月など、当院の基本情報をまとめてご覧いただけます。',
    colorIndex: 4,
  },
  {
    href: '/about/access',
    enTitle: 'Access',
    title: 'アクセスマップ',
    description:
      '電車・バス・お車でのアクセス方法や駐車場のご案内、地図を掲載しています。',
    colorIndex: 5,
  },
  {
    href: '/about/patient',
    enTitle: 'Patient Rights',
    title: '患者さまの権利',
    description:
      '当院が尊重する患者さまの権利と、より良い医療のためにお願いする責務についてご説明しています。',
    colorIndex: 0,
  },
  {
    href: '/about/protection',
    enTitle: 'Privacy Policy',
    title: '個人情報保護方針',
    description:
      '患者さまの個人情報を適切に保護・管理するための当院の方針をご案内しています。',
    colorIndex: 1,
  },
  {
    href: '/about/feature',
    enTitle: 'Our Initiatives',
    title: '当院の取り組み',
    description:
      'トータルケア・地域連携・感染対策・医療安全など、当院が力を入れている取り組みをご紹介しています。',
    colorIndex: 2,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="病院について" enTitle="About Us" />
      <Breadcrumb items={[{ label: '病院について' }]} />

      {/* 導入セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                地域の皆さまに信頼される病院を目指して
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}は、地域に根ざした医療機関として、
                患者さま一人ひとりに寄り添った質の高い医療を提供してまいりました。
                急性期医療からリハビリテーション、在宅医療まで切れ目のない医療サービスを通じて、
                地域の皆さまの健康と暮らしを支えています。
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-text-light">
                こちらのページでは、当院の理念やスタッフ紹介、施設概要など
                病院に関する各種情報をご覧いただけます。
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
              label="病院外観写真"
              className="w-full rounded-lg"
              colorIndex={0}
            />
          </ScrollFadeIn>
        </div>
      </section>

      {/* サブページへのリンクカード */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Contents
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                病院に関する情報
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subPages.map((page, i) => (
              <ScrollFadeIn key={page.href} delay={i * 80}>
                <Link
                  href={page.href}
                  className="group block rounded-lg border border-border bg-bg overflow-hidden transition-all hover:shadow-md hover:border-primary h-full"
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
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-primary-bg p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                病院に関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm md:text-base text-text-light leading-relaxed max-w-2xl mx-auto">
                当院に関するご質問やご相談は、お電話またはお問い合わせフォームより承っております。
                お気軽にご連絡ください。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  お問い合わせはこちら
                </Link>
                <p className="text-sm text-text-muted">
                  代表電話：{siteConfig.phone}
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
