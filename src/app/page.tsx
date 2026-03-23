import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import HeroSlider from '@/components/shared/HeroSlider';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import NewsTab from '@/components/shared/NewsTab';
import ActivityCard from '@/components/shared/ActivityCard';
import PickupCard from '@/components/shared/PickupCard';
import DownloadCard from '@/components/shared/DownloadCard';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

const services = [
  { href: '/ambulatory', enTitle: 'Ambulatory', jaTitle: '外来', description: '一般外来から専門外来まで、幅広い診療科目で皆さまの健康をサポートいたします。' },
  { href: '/hospitalization', enTitle: 'Hospitalization', jaTitle: '入院', description: '安心して療養いただける入院環境を整え、きめ細やかな看護体制でお迎えいたします。' },
  { href: '/check_up', enTitle: 'Check Up', jaTitle: '健診・人間ドック', description: '最新の医療機器を用いた精密な健康診断で、病気の早期発見・予防に努めます。' },
  { href: '/rehabilitation', enTitle: 'Rehabilitation', jaTitle: 'リハビリテーション', description: '専門スタッフが一人ひとりに合わせたリハビリプログラムをご提供いたします。' },
  { href: '/service', enTitle: 'Home Care', jaTitle: '在宅サービス', description: 'ご自宅での療養生活を支えるため、訪問看護・介護などの在宅サービスを展開しています。' },
];

const banners = [
  { href: '/about/doctor', label: '医療関係者の方へ', enLabel: 'For Medical Professionals' },
  { href: '/contact', label: '採用について', enLabel: 'Recruitment' },
  { href: '/about', label: `${siteConfig.hospitalName}について`, enLabel: 'About Us' },
];

const activities = [
  { href: '/about/feature', tag: '地域連携', title: '地域医療連携室の取り組みについてのご報告', date: '2026.03.01' },
  { href: '/about/feature', tag: 'ボランティア', title: '院内ボランティア活動のご紹介と参加者募集', date: '2026.02.15' },
  { href: '/about/feature', tag: '研修', title: '医療従事者向け研修プログラムを開催しました', date: '2026.02.01' },
  { href: '/about/feature', tag: '取り組み', title: '患者満足度向上に向けた新しい取り組みのご紹介', date: '2026.01.20' },
];

const pickups = [
  { href: '/ambulatory/subject', title: '外来診療のご案内', description: '各診療科目の紹介と受診の流れをご案内いたします。' },
  { href: '/hospitalization/procedure', title: '入院のご案内', description: '入院に必要な手続きや持ち物についてご案内いたします。' },
  { href: '/rehabilitation/type', title: 'リハビリの種類', description: '当院で提供しているリハビリテーションの種類をご紹介します。' },
  { href: '/check_up', title: '健康診断・人間ドック', description: '各種健康診断コースの内容と料金をご案内いたします。' },
  { href: '/service/nursing', title: '訪問看護サービス', description: 'ご自宅での療養生活をサポートする訪問看護についてご紹介します。' },
  { href: '/about/greeting', title: '院長ご挨拶', description: '当院の理念と地域医療への想いをお伝えいたします。' },
];

const downloads = [
  { title: '入院のご案内パンフレット', fileType: 'PDF / 2.5MB' },
  { title: '外来診療スケジュール表', fileType: 'PDF / 1.2MB' },
  { title: '健康診断申込書', fileType: 'PDF / 800KB' },
  { title: '病院パンフレット', fileType: 'PDF / 5.0MB' },
];

const quickLinks = [
  { href: '/contact', ja: '連絡先', en: 'Contact' },
  { href: '/ambulatory', ja: '診療スケジュール', en: 'Schedule' },
  { href: '/about/access', ja: 'アクセス', en: 'Access' },
  { href: '/ambulatory/examination', ja: '受付時間', en: 'Hours' },
  { href: '/hospitalization', ja: '入院案内', en: 'Hospitalization' },
  { href: '/about/feature', ja: '地域連携室', en: 'Cooperation' },
  { href: '/hospitalization/procedure', ja: '受け入れ基準', en: 'Criteria' },
  { href: '/rehabilitation/facility', ja: '施設案内', en: 'Facility' },
];

function WaveSeparator() {
  return (
    <div className="relative h-12 md:h-16 -mb-px">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 64" preserveAspectRatio="none" fill="none">
        <path d="M0 32C240 56 480 8 720 32C960 56 1200 8 1440 32V64H0V32Z" fill="var(--color-primary-bg)" />
      </svg>
    </div>
  );
}

function WaveSeparatorBottom() {
  return (
    <div className="relative h-12 md:h-16 -mt-px">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 64" preserveAspectRatio="none" fill="none">
        <path d="M0 0H1440V32C1200 8 960 56 720 32C480 8 240 56 0 32V0Z" fill="var(--color-primary-bg)" />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Notice Bar */}
      <section className="bg-accent-red/5 border-b border-accent-red/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <span className="shrink-0 rounded bg-accent-red px-2 py-0.5 text-xs font-bold text-white">
            重要
          </span>
          <p className="text-sm text-text">お知らせテキストが入ります。重要な情報をこちらに掲載します。</p>
        </div>
      </section>

      {/* Service Cards — scaleIn animation, dot pattern background */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4">
          <SectionHeader enLabel="Services" jaLabel="診療サービスのご案内" variant="large" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, i) => (
              <ScrollFadeIn key={service.href} delay={i * 60} variant="scaleIn">
                <ServiceCard {...service} colorIndex={i} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Link Banners — no animation */}
      <section className="bg-bg-off py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {banners.map((banner) => (
              <Link
                key={banner.href}
                href={banner.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-bg p-6 transition-all hover:shadow-md hover:border-primary"
              >
                <div>
                  <p className="font-en text-xs text-text-muted">{banner.enLabel}</p>
                  <p className="mt-1 text-sm font-bold">{banner.label}</p>
                </div>
                <svg className="h-5 w-5 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News — no animation, accent header */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader enLabel="News" jaLabel="新着情報" variant="accent" align="left" />
          <NewsTab />
          <div className="mt-6 text-center">
            <Link href="/news" className="inline-block rounded border border-primary px-8 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">
              新着情報一覧へ
            </Link>
          </div>
        </div>
      </section>

      {/* Recruitment — no animation, minimal header, wave separators */}
      <WaveSeparator />
      <section className="bg-primary-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader enLabel="Recruitment" jaLabel="参加者募集" variant="minimal" />
          <div className="rounded-lg border border-border bg-bg p-8 text-center">
            <div className="mx-auto max-w-lg">
              <h3 className="text-lg font-bold">ボランティア・治験参加者募集中</h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                当院では、地域の皆さまとともに医療の質の向上を目指しています。ボランティア活動への参加や、治験へのご協力を募集しております。詳しくはお気軽にお問い合わせください。
              </p>
              <Link href="/contact" className="mt-6 inline-block rounded bg-primary px-8 py-2.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors">
                お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WaveSeparatorBottom />

      {/* Activities — fadeLeft animation */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader enLabel="Activities" jaLabel="病院の活動" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, i) => (
              <ScrollFadeIn key={i} delay={i * 80} variant="fadeLeft">
                <ActivityCard {...activity} colorIndex={i} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup — fadeIn animation, blur circle decorations */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute top-10 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4">
          <SectionHeader enLabel="Pick Up" jaLabel="ピックアップ" variant="large" />
          <ScrollFadeIn variant="fadeIn">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pickups.map((pickup, i) => (
                <PickupCard key={i} {...pickup} colorIndex={i} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Downloads — no animation, accent header, narrower width */}
      <section className="bg-bg-off py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeader enLabel="Download" jaLabel="ダウンロード" variant="accent" align="left" />
          <div className="grid gap-4 sm:grid-cols-2">
            {downloads.map((dl, i) => (
              <DownloadCard key={i} {...dl} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access — gradient underline */}
      <section className="bg-bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <p className="font-en text-sm tracking-[0.2em] uppercase text-white/60">Quick Access</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">よくアクセスされるページ</h2>
            <div className="mt-3 mx-auto h-0.5 w-16 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group rounded-lg border border-white/10 bg-white/5 p-5 text-center transition-all hover:bg-white/10 hover:border-white/30"
              >
                <p className="text-sm font-bold text-white">{link.ja}</p>
                <p className="mt-1 font-en text-xs text-white/50">{link.en}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
