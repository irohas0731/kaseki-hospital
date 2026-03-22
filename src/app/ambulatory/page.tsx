import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '外来',
  description: `${siteConfig.hospitalName}の外来診療のご案内です。内科・外科・小児科・整形外科・リハビリテーション科など幅広い診療科目で、地域の皆さまの健康をサポートいたします。診療スケジュール・受付時間はこちらをご確認ください。`,
};

const scheduleData = [
  {
    department: '内科',
    doctor: '化石 太郎',
    mon: '○',
    tue: '○',
    wed: '―',
    thu: '○',
    fri: '○',
  },
  {
    department: '外科',
    doctor: '化石 次郎',
    mon: '○',
    tue: '―',
    wed: '○',
    thu: '○',
    fri: '△',
  },
  {
    department: '小児科',
    doctor: '化石 さくら',
    mon: '○',
    tue: '○',
    wed: '○',
    thu: '―',
    fri: '○',
  },
  {
    department: '整形外科',
    doctor: '化石 健一',
    mon: '△',
    tue: '○',
    wed: '○',
    thu: '○',
    fri: '―',
  },
  {
    department: 'リハビリテーション科',
    doctor: '化石 美咲',
    mon: '○',
    tue: '○',
    wed: '△',
    thu: '○',
    fri: '○',
  },
];

const symbolLegend = [
  { symbol: '○', meaning: '通常診療' },
  { symbol: '△', meaning: '午前のみ' },
  { symbol: '―', meaning: '休診' },
];

export default function AmbulatoryPage() {
  return (
    <>
      <PageHero title="外来" enTitle="Ambulatory" />
      <Breadcrumb items={[{ label: '外来' }]} />

      {/* 外来案内セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Outpatient" jaLabel="外来診療のご案内" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}では、内科・外科をはじめとする幅広い診療科目で外来診療を行っております。
                患者さま一人ひとりの症状やご要望に合わせた丁寧な診察を心がけ、地域のかかりつけ医として皆さまの健康管理をサポートいたします。
                初めて受診される方は、健康保険証をお持ちのうえ、受付時間内にお越しください。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="mt-10">
              <PlaceholderImage
                width={1200}
                height={400}
                label="外来フロア写真"
                className="w-full rounded-lg"
                colorIndex={0}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 受付時間 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Reception Hours" jaLabel="受付時間" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-2xl rounded-lg border border-border bg-bg p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <p className="text-sm font-bold text-primary">午前診療</p>
                  <p className="mt-2 text-2xl font-bold">{siteConfig.hours.morning}</p>
                  <p className="mt-1 text-xs text-text-muted">受付は11:30まで</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-primary">午後診療</p>
                  <p className="mt-2 text-2xl font-bold">{siteConfig.hours.afternoon}</p>
                  <p className="mt-1 text-xs text-text-muted">受付は16:30まで</p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-center">
                <p className="text-sm text-text-light">
                  <span className="font-bold text-accent-red">休診日：</span>
                  {siteConfig.hours.closedDays}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  ※急患の場合はお電話にてお問い合わせください（TEL: {siteConfig.phone}）
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 診療スケジュール */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Schedule" jaLabel="外来診療スケジュール" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-bold">診療科目</th>
                    <th className="px-4 py-3 text-left font-bold">担当医</th>
                    <th className="px-4 py-3 text-center font-bold">月</th>
                    <th className="px-4 py-3 text-center font-bold">火</th>
                    <th className="px-4 py-3 text-center font-bold">水</th>
                    <th className="px-4 py-3 text-center font-bold">木</th>
                    <th className="px-4 py-3 text-center font-bold">金</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr
                      key={row.department}
                      className={`border-t border-border ${
                        index % 2 === 0 ? 'bg-bg' : 'bg-bg-off'
                      }`}
                    >
                      <td className="px-4 py-3 font-bold">{row.department}</td>
                      <td className="px-4 py-3 text-text-light">{row.doctor}</td>
                      <td className="px-4 py-3 text-center">{row.mon}</td>
                      <td className="px-4 py-3 text-center">{row.tue}</td>
                      <td className="px-4 py-3 text-center">{row.wed}</td>
                      <td className="px-4 py-3 text-center">{row.thu}</td>
                      <td className="px-4 py-3 text-center">{row.fri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-text-muted">
              {symbolLegend.map((item) => (
                <span key={item.symbol} className="flex items-center gap-1">
                  <span className="font-bold text-text">{item.symbol}</span>
                  {item.meaning}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-text-muted">
              ※担当医が変更になる場合がございます。最新の情報はお電話にてお問い合わせください。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 関連ページへのリンク */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Related Pages" jaLabel="外来に関するご案内" />
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollFadeIn delay={100}>
              <Link
                href="/ambulatory/subject"
                className="group block overflow-hidden rounded-lg border border-border bg-bg transition-all hover:shadow-lg hover:border-primary"
              >
                <PlaceholderImage
                  width={600}
                  height={250}
                  label="診療科目イメージ"
                  className="w-full"
                  colorIndex={1}
                />
                <div className="p-6">
                  <p className="font-en text-xs tracking-wider uppercase text-primary">
                    Departments
                  </p>
                  <h3 className="mt-1 text-lg font-bold">外来診療科目</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    内科・外科・小児科など、当院で診療を行っている各科目の詳細をご紹介しています。それぞれの診療科目で対応する疾患や治療内容についてご確認いただけます。
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary transition-transform duration-200 group-hover:translate-x-1">
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
              </Link>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <Link
                href="/ambulatory/examination"
                className="group block overflow-hidden rounded-lg border border-border bg-bg transition-all hover:shadow-lg hover:border-primary"
              >
                <PlaceholderImage
                  width={600}
                  height={250}
                  label="受付・待合イメージ"
                  className="w-full"
                  colorIndex={2}
                />
                <div className="p-6">
                  <p className="font-en text-xs tracking-wider uppercase text-primary">
                    First Visit
                  </p>
                  <h3 className="mt-1 text-lg font-bold">初診・再診の方へ</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">
                    初めて当院を受診される方、再診の方へ向けた受診の流れや必要な持ち物、注意事項についてご案内しています。ご来院前にぜひご確認ください。
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary transition-transform duration-200 group-hover:translate-x-1">
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
              </Link>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg-off p-8 text-center">
              <h3 className="text-lg font-bold">外来に関するお問い合わせ</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-light">
                診療内容や受付時間に関するご質問、ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <p className="mt-4 text-2xl font-bold text-primary">
                TEL: {siteConfig.phone}
              </p>
              <p className="mt-1 text-xs text-text-muted">
                受付時間：{siteConfig.hours.morning} / {siteConfig.hours.afternoon}（{siteConfig.hours.closedDays}を除く）
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
