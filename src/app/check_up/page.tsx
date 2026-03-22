import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '健診・人間ドック',
  description: `${siteConfig.hospitalName}の健診・人間ドックのご案内です。一般健康診断から生活習慣病予防健診、人間ドックまで、各種健康診断コースをご用意しております。病気の早期発見・予防のために、定期的な健康チェックをおすすめいたします。`,
};

const courses = [
  {
    name: '一般健康診断',
    enName: 'General Checkup',
    price: '8,800円（税込）',
    description:
      '労働安全衛生法に基づく定期健康診断です。雇入時健診や定期健診として、企業さまの法定健診にもご利用いただけます。基本的な身体測定や血液検査、尿検査などを実施し、健康状態を総合的にチェックいたします。',
    features: [
      '身体計測（身長・体重・BMI・腹囲）',
      '血圧測定',
      '視力・聴力検査',
      '胸部X線検査',
      '血液検査（貧血・肝機能・脂質・血糖）',
      '尿検査',
      '心電図検査',
    ],
  },
  {
    name: '生活習慣病予防健診',
    enName: 'Lifestyle Disease Prevention',
    price: '16,500円（税込）',
    description:
      '生活習慣病のリスクを早期に発見するための健診コースです。一般健康診断の内容に加え、より詳しい血液検査や腹部超音波検査などを実施します。メタボリックシンドロームや動脈硬化のリスク評価も行い、生活改善のアドバイスをお伝えいたします。',
    features: [
      '一般健康診断の全項目',
      '腹部超音波検査',
      '詳細血液検査（HbA1c・尿酸・クレアチニン等）',
      '便潜血検査（2日法）',
      '胃部X線検査（バリウム検査）',
      '眼底検査',
      '医師による結果説明・生活指導',
    ],
  },
  {
    name: '人間ドック',
    enName: 'Complete Health Screening',
    price: '38,500円（税込）',
    description:
      '全身を総合的にチェックする最も充実した健診コースです。自覚症状のない病気の早期発見を目的とし、がん検診を含む多項目の検査を実施します。検査結果は専門医が詳しくご説明し、必要に応じて精密検査や治療へスムーズにおつなぎいたします。',
    features: [
      '生活習慣病予防健診の全項目',
      '胸部CT検査',
      '腫瘍マーカー検査（CEA・AFP・PSA/CA125）',
      '甲状腺機能検査',
      '肺機能検査',
      '骨密度検査',
      '動脈硬化検査（ABI/CAVI）',
      '頸動脈超音波検査',
    ],
  },
];

const flowSteps = [
  {
    step: 1,
    title: 'ご予約',
    description:
      'お電話またはWebからご希望の健診コースと日時をご予約ください。ご不明な点はお気軽にお問い合わせください。',
  },
  {
    step: 2,
    title: '受診票・検査キットの送付',
    description:
      'ご予約確定後、問診票や検査キット（便潜血検査用など）をご自宅にお届けいたします。事前にご記入・ご準備をお願いします。',
  },
  {
    step: 3,
    title: '来院・受付',
    description:
      '健診当日は受付時間までにお越しください。保険証と問診票をご提出いただき、受付手続きを行います。',
  },
  {
    step: 4,
    title: '各種検査の実施',
    description:
      'スタッフの案内に従い、各検査を順番に受けていただきます。検査内容や所要時間はコースにより異なります。',
  },
  {
    step: 5,
    title: '結果のご報告',
    description:
      '検査結果は約2週間後にご自宅へ郵送いたします。人間ドックの方には後日、医師による結果説明を行います。',
  },
];

const optionalTests = [
  { name: '脳ドック（頭部MRI・MRA）', price: '33,000円' },
  { name: '胃内視鏡検査（胃カメラ）', price: '5,500円' },
  { name: '大腸内視鏡検査', price: '8,800円' },
  { name: '乳がん検診（マンモグラフィー＋超音波）', price: '7,700円' },
  { name: '子宮がん検診（子宮頸部細胞診）', price: '4,400円' },
  { name: 'ピロリ菌検査', price: '2,200円' },
  { name: 'アレルギー検査（View39）', price: '6,600円' },
  { name: '心臓超音波検査', price: '5,500円' },
];

export default function CheckUpPage() {
  return (
    <>
      <PageHero title="健診・人間ドック" enTitle="Health Check Up" />
      <Breadcrumb items={[{ label: '健診・人間ドック' }]} />

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">
                病気の早期発見・予防のために
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 mx-auto max-w-3xl">
              <p className="text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}では、皆さまの健康維持と病気の早期発見を目的として、各種健康診断・人間ドックを実施しております。「自分は健康だから大丈夫」と思っていても、自覚症状のないまま進行する病気は少なくありません。定期的な健康チェックを受けることで、生活習慣病やがんなどの重大な疾患を早期に発見し、早い段階で適切な対策を講じることができます。
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-light md:text-base">
                当院の健診では、経験豊富な医師・スタッフが丁寧に対応し、最新の医療機器を用いて精度の高い検査を行います。検査結果に基づく生活習慣の改善アドバイスや、必要に応じた精密検査・治療へのスムーズな連携も万全の体制を整えております。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="mt-10">
              <PlaceholderImage
                width={1200}
                height={400}
                label="健診センターの様子"
                className="w-full rounded-lg"
                colorIndex={0}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Course" jaLabel="健診コースのご案内" />
          </ScrollFadeIn>
          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course, index) => (
              <ScrollFadeIn key={course.name} delay={index * 100}>
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg shadow-sm">
                  <div className="bg-primary px-6 py-4 text-center">
                    <p className="font-en text-xs tracking-wider text-white/80">
                      {course.enName}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {course.name}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-center text-2xl font-bold text-primary">
                      {course.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-text-light">
                      {course.description}
                    </p>
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-bold">主な検査項目</p>
                      <ul className="space-y-2">
                        {course.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-text-light"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
          <ScrollFadeIn delay={400}>
            <p className="mt-6 text-center text-xs text-text-muted">
              ※料金は全て税込価格です。健康保険組合等の補助をご利用いただける場合がございます。詳しくはお問い合わせください。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Checkup Flow */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Flow" jaLabel="健診の流れ" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl">
            {flowSteps.map((item, index) => (
              <ScrollFadeIn key={item.step} delay={index * 100}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Vertical line */}
                  {index < flowSteps.length - 1 && (
                    <div className="absolute left-5 top-12 h-full w-px bg-border" />
                  )}
                  {/* Step number */}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Tests */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Option" jaLabel="オプション検査" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-center text-sm text-text-light">
                各健診コースに追加してお受けいただけるオプション検査です。気になる項目がございましたら、ご予約の際にお申し付けください。
              </p>
              <div className="overflow-hidden rounded-lg border border-border bg-bg">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-bg">
                      <th className="px-6 py-3 text-left text-sm font-bold">
                        検査項目
                      </th>
                      <th className="px-6 py-3 text-right text-sm font-bold">
                        料金（税込）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {optionalTests.map((test, index) => (
                      <tr
                        key={test.name}
                        className={
                          index % 2 === 1 ? 'bg-bg-off' : 'bg-bg'
                        }
                      >
                        <td className="px-6 py-3 text-sm">{test.name}</td>
                        <td className="px-6 py-3 text-right text-sm font-medium text-primary">
                          {test.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-text-muted">
                ※オプション検査のみの受診はお受けしておりません。各健診コースと合わせてお申し込みください。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg p-8 text-center">
              <h2 className="text-lg font-bold">
                健診・人間ドックのご予約・お問い合わせ
              </h2>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                健診のご予約はお電話にて承っております。ご希望のコースや日程についてお気軽にお問い合わせください。
                <br />
                企業さまの団体健診にも対応しておりますので、ご担当者さまからのご相談もお待ちしております。
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
              <p className="mt-4 text-xs text-text-muted">
                受付時間：{siteConfig.hours.morning} / {siteConfig.hours.afternoon}（{siteConfig.hours.closedDays}を除く）
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
