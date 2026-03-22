import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '在宅サービス',
  description: `${siteConfig.hospitalName}の在宅サービスのご案内です。訪問看護・訪問介護・訪問リハビリ・デイケア・居宅介護支援など、ご自宅での療養生活を総合的にサポートいたします。`,
};

const services = [
  {
    href: '/service/daycare',
    title: 'デイケア',
    enTitle: 'Day Care',
    description:
      '日帰りでリハビリテーションを中心としたサービスを受けていただけます。専門スタッフによる個別プログラムと、充実した設備で心身の機能維持・向上を目指します。',
  },
  {
    href: '/service/nursing',
    title: '訪問看護',
    enTitle: 'Home Nursing',
    description:
      '看護師がご自宅を訪問し、主治医の指示のもと医療的なケアや健康管理を行います。病状の観察から医療処置、ご家族へのアドバイスまで幅広く対応いたします。',
  },
  {
    href: '/service/care',
    title: '訪問介護',
    enTitle: 'Home Care',
    description:
      '介護福祉士やホームヘルパーがご自宅を訪問し、入浴・排泄・食事などの身体介護や、掃除・洗濯・調理などの生活援助を行います。',
  },
  {
    href: '/service/rehabilitation',
    title: '訪問リハビリ',
    enTitle: 'Home Rehabilitation',
    description:
      '理学療法士・作業療法士・言語聴覚士がご自宅を訪問し、生活の場に即したリハビリテーションを提供いたします。日常生活動作の改善や介護負担の軽減を目指します。',
  },
  {
    href: '/service/center',
    title: '居宅介護支援',
    enTitle: 'Care Management',
    description:
      'ケアマネジャーが介護保険に関するご相談からケアプランの作成、サービス事業者との連絡調整まで、在宅介護を総合的にコーディネートいたします。',
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHero title="在宅サービス" enTitle="Home Care Services" />
      <Breadcrumb items={[{ label: '在宅サービス' }]} />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                {siteConfig.hospitalName}では、住み慣れたご自宅で安心して療養生活を送っていただけるよう、多職種が連携した在宅サービスを提供しております。医師・看護師・リハビリスタッフ・介護福祉士・ケアマネジャーがチームとなり、お一人おひとりの状態やご希望に合わせた最適なケアをご提案いたします。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12">
              <PlaceholderImage
                width={1200}
                height={400}
                label="在宅サービスイメージ写真"
                className="w-full rounded-lg"
                colorIndex={0}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 在宅サービスの特徴 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Features" jaLabel="在宅サービスの特徴" />
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: '病院との連携体制',
                description:
                  '当院の入院・外来部門と密に連携しており、病状の変化にも迅速に対応できます。退院後の在宅療養へのスムーズな移行を支援いたします。',
              },
              {
                title: '多職種チームケア',
                description:
                  '医師・看護師・リハビリスタッフ・介護福祉士・ケアマネジャーなど、多職種が定期的にカンファレンスを行い、包括的なケアを実現しています。',
              },
              {
                title: '24時間対応体制',
                description:
                  '緊急時には24時間体制で対応しております。夜間や休日でもお電話でご相談いただけますので、安心して在宅療養をお続けいただけます。',
              },
            ].map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {feature.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Our Services" jaLabel="サービス一覧" />
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollFadeIn key={service.href} delay={i * 100}>
                <Link href={service.href} className="group block">
                  <div className="overflow-hidden rounded-lg border border-border bg-bg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <PlaceholderImage
                      width={400}
                      height={200}
                      label={`${service.title}イメージ`}
                      className="w-full"
                      colorIndex={i}
                    />
                    <div className="p-6">
                      <p className="font-en text-xs tracking-wider uppercase text-primary">
                        {service.enTitle}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-light">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm text-primary transition-transform duration-200 group-hover:translate-x-1">
                        詳しく見る
                        <svg
                          className="ml-1 h-4 w-4"
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
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 利用手続きへの案内 */}
      <section className="bg-primary-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold">在宅サービスのご利用をお考えの方へ</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                在宅サービスのご利用には、介護保険の申請やケアプランの作成などの手続きが必要です。はじめての方でも安心してご利用いただけるよう、手続きの流れをわかりやすくご案内しております。
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/service/step"
                  className="inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  利用の手続きを見る
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
