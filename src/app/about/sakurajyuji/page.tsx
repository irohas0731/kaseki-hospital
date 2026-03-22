import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '病院概要',
  description: `${siteConfig.hospitalName}の病院概要です。名称・所在地・病床数・診療科目など、当院の基本情報をご覧いただけます。`,
};

const overviewData = [
  { label: '名称', value: siteConfig.hospitalName },
  { label: '開設者', value: siteConfig.corporateName },
  { label: '院長', value: siteConfig.staff.director.name },
  { label: '所在地', value: siteConfig.address.full },
  { label: '電話番号', value: siteConfig.phone },
  { label: '病床数', value: '148床（一般病棟60床・回復期リハビリテーション病棟48床・療養病棟40床）' },
  {
    label: '診療科目',
    value:
      '内科・外科・小児科・整形外科・リハビリテーション科・脳神経外科・皮膚科・泌尿器科',
  },
  { label: '開設年月', value: '平成5年4月' },
  {
    label: '診療時間',
    value: `午前 ${siteConfig.hours.morning} / 午後 ${siteConfig.hours.afternoon}`,
  },
  { label: '休診日', value: siteConfig.hours.closedDays },
  {
    label: '施設基準',
    value:
      '一般病棟入院基本料（10対1）・回復期リハビリテーション病棟入院料1・療養病棟入院基本料1',
  },
  {
    label: '指定・認定',
    value:
      '保険医療機関・労災保険指定医療機関・生活保護法指定医療機関・救急告示病院',
  },
];

export default function SakurajyujiPage() {
  return (
    <>
      <PageHero title="病院概要" enTitle="Hospital Overview" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '病院概要' },
        ]}
      />

      {/* 病院外観 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-4xl">
              <PlaceholderImage
                width={1200}
                height={500}
                label="病院外観写真"
                className="w-full rounded-lg"
                colorIndex={0}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 概要テーブル */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Overview
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">病院概要</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-bg">
              <table className="w-full">
                <tbody>
                  {overviewData.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? 'bg-bg' : 'bg-bg-off'}
                    >
                      <th className="w-1/4 min-w-[140px] border-b border-border px-6 py-4 text-left text-sm font-bold text-primary align-top">
                        {row.label}
                      </th>
                      <td className="border-b border-border px-6 py-4 text-sm leading-relaxed text-text-light">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 関連施設 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Related Facilities
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">関連施設</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm md:text-base leading-relaxed text-text-light text-center mb-8">
                {siteConfig.corporateName}では、{siteConfig.hospitalName}を中核として
                以下の関連施設を運営しております。急性期から在宅まで、
                グループ全体で患者さまの療養生活を支えています。
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {siteConfig.relatedFacilities.map((facility, i) => (
                  <ScrollFadeIn key={facility} delay={i * 100 + 300}>
                    <div className="flex items-center gap-4 rounded-lg border border-border bg-bg p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-bg">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-bold">{facility}</p>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 沿革 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                History
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">沿革</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl space-y-0">
              {[
                { year: '平成5年4月', event: `${siteConfig.corporateName}設立、${siteConfig.hospitalName}開院（一般病棟60床）` },
                { year: '平成10年6月', event: '回復期リハビリテーション病棟を開設（48床）' },
                { year: '平成15年3月', event: '療養病棟を開設（40床）、総病床数148床となる' },
                { year: '平成18年4月', event: '化石リハビリテーション病院を開設' },
                { year: '平成22年10月', event: '地域医療連携室を設置' },
                { year: '平成26年4月', event: '在宅支援部門を拡充、化石在宅支援病院を開設' },
                { year: '平成30年7月', event: '電子カルテシステムを全面導入' },
                { year: '令和3年4月', event: '化石クリニックを開設、グループ医療体制を強化' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 border-l-2 border-primary/30 py-4 pl-6 relative"
                >
                  <div className="absolute -left-[7px] top-5 h-3 w-3 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-bold text-primary">
                      {item.year}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
