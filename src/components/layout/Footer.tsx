import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const footerNav = [
  {
    title: '外来',
    links: [
      { label: '外来トップ', href: '/ambulatory' },
      { label: '外来診療科目', href: '/ambulatory/subject' },
      { label: '初診・再診の方へ', href: '/ambulatory/examination' },
    ],
  },
  {
    title: '入院',
    links: [
      { label: '入院トップ', href: '/hospitalization' },
      { label: '入院手続き', href: '/hospitalization/procedure' },
      { label: '入院病棟紹介', href: '/hospitalization/ward' },
      { label: 'お見舞い・ご面会', href: '/hospitalization/meeting' },
      { label: '緩和ケア', href: '/hospitalization/palliative' },
    ],
  },
  {
    title: 'リハビリ・在宅',
    links: [
      { label: 'リハビリトップ', href: '/rehabilitation' },
      { label: 'リハビリの種類', href: '/rehabilitation/type' },
      { label: '在宅サービス', href: '/service' },
      { label: 'デイケア', href: '/service/daycare' },
      { label: '訪問看護', href: '/service/nursing' },
    ],
  },
  {
    title: '病院について',
    links: [
      { label: 'ご挨拶', href: '/about/greeting' },
      { label: '病院理念', href: '/about/management' },
      { label: '医師紹介', href: '/about/doctor' },
      { label: '病院概要', href: '/about/sakurajyuji' },
      { label: 'アクセスマップ', href: '/about/access' },
      { label: '健診・人間ドック', href: '/check_up' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo area */}
          <div className="lg:col-span-1">
            <Link href="/" className="block">
              <span className="text-lg font-bold font-serif">{siteConfig.hospitalName}</span>
              <span className="block font-en text-[10px] tracking-wider text-white/60 mt-1">
                {siteConfig.hospitalNameEn}
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/70">{siteConfig.slogan}</p>
            <div className="mt-4 text-xs text-white/60 space-y-1">
              <p>{siteConfig.address.full}</p>
              <p>TEL: {siteConfig.phone}</p>
              <p>受付時間：午前 {siteConfig.hours.morning} ／ 午後 {siteConfig.hours.afternoon}</p>
              <p>休診日：{siteConfig.hours.closedDays}</p>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Related facilities */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h3 className="text-sm font-bold mb-3">関連施設</h3>
          <div className="flex flex-wrap gap-4">
            {siteConfig.relatedFacilities.map((facility) => (
              <span key={facility} className="text-xs text-white/60 hover:text-white cursor-pointer transition-colors">
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap gap-4 text-xs text-white/50">
            <Link href="/about/protection" className="hover:text-white transition-colors">
              個人情報保護方針
            </Link>
            <Link href="/about/patient" className="hover:text-white transition-colors">
              患者さまの権利
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              お問い合わせ
            </Link>
          </div>
          <p className="text-xs text-white/40">
            &copy; {siteConfig.corporateName} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
