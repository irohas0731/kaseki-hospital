import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: 'お見舞い・ご面会',
  description: `${siteConfig.hospitalName}のお見舞い・ご面会のご案内です。面会時間・面会ルール・お見舞い品のお持ち込みについてなど、ご来院前にご確認いただきたい情報をまとめております。`,
};

const visitingHours = [
  {
    ward: '一般病棟',
    weekday: '14:00～20:00',
    weekend: '10:00～20:00',
    note: '手術当日は面会制限となる場合があります。',
  },
  {
    ward: '回復期リハビリテーション病棟',
    weekday: '14:00～20:00',
    weekend: '10:00～20:00',
    note: 'リハビリ実施中は面会をお控えいただく場合があります。',
  },
  {
    ward: '療養病棟',
    weekday: '10:00～20:00',
    weekend: '10:00～20:00',
    note: '',
  },
];

const visitingRules = [
  '面会は各病棟のデイルームまたは談話室をご利用ください。病室での面会をご希望の場合は、看護師にお申し出ください。',
  '面会時間は1回あたり30分程度を目安にお願いいたします。患者さまの体調によっては面会をお断りする場合があります。',
  '発熱・咳・下痢などの症状がある方の面会はご遠慮ください。',
  '中学生以下のお子さまの面会は原則としてご遠慮いただいております。やむを得ない場合は看護師にご相談ください。',
  '面会の際は1階受付にて面会票にご記入のうえ、面会証をお受け取りください。退出時に面会証をご返却ください。',
  '感染症の流行状況により、面会を制限させていただく場合がございます。最新の面会状況はお電話にてご確認ください。',
];

const prohibitedItems = [
  {
    item: '生花・鉢植え',
    reason:
      '花粉やカビによるアレルギー・感染リスクがあるため、病室へのお持ち込みはご遠慮ください。',
  },
  {
    item: 'ペット',
    reason: '衛生管理の観点から、動物の院内への持ち込みは禁止しております。',
  },
  {
    item: 'アルコール飲料',
    reason: '治療に影響を及ぼす恐れがあるため、お持ち込みを禁止しております。',
  },
  {
    item: '刃物・火気類',
    reason:
      '安全管理のため、ナイフ・はさみ・ライターなどの持ち込みは禁止しております。',
  },
  {
    item: '食品（主治医の許可なし）',
    description: '食事制限のある患者さまへの差し入れは事前に主治医の許可が必要です。',
    reason:
      '食事療法を実施中の患者さまもおられますので、食品のお持ち込みは事前に主治医または看護師にご確認ください。',
  },
];

export default function MeetingPage() {
  return (
    <>
      <PageHero title="お見舞い・ご面会" enTitle="Visiting Hours" />
      <Breadcrumb
        items={[
          { label: '入院', href: '/hospitalization' },
          { label: 'お見舞い・ご面会' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                面会についてのご案内
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm md:text-base leading-relaxed text-text-light">
                患者さまの療養環境を守りつつ、ご家族やご友人との大切な時間をお過ごしいただけるよう、
                面会時間やルールを設けております。ご来院の際は以下の内容をご確認のうえお越しください。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 面会時間 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Visiting Hours
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">面会時間</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="overflow-x-auto rounded-lg border border-border bg-bg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary/5">
                    <th className="px-6 py-4 text-left font-bold">病棟</th>
                    <th className="px-6 py-4 text-center font-bold">
                      平日
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      土日祝
                    </th>
                    <th className="px-6 py-4 text-left font-bold hidden md:table-cell">
                      備考
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visitingHours.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-6 py-4 font-medium">{row.ward}</td>
                      <td className="px-6 py-4 text-center">{row.weekday}</td>
                      <td className="px-6 py-4 text-center">{row.weekend}</td>
                      <td className="px-6 py-4 text-text-muted text-xs hidden md:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm text-text-light">
                <span className="font-bold text-primary">お知らせ：</span>
                感染症予防対策のため、面会時間や人数を制限させていただく場合がございます。
                ご来院前にお電話（{siteConfig.phone}）にて最新の面会状況をご確認ください。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 面会の流れ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Flow
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">面会の流れ</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                step: '1',
                title: '1階受付',
                description: '1階総合受付にて面会票にご記入ください。',
              },
              {
                step: '2',
                title: '面会証受け取り',
                description: '受付から面会証をお受け取りください。面会中は見えるところに着用をお願いします。',
              },
              {
                step: '3',
                title: '病棟へ',
                description: 'エレベーターで該当する病棟階へお進みください。ナースステーションへのお声がけは不要です。',
              },
              {
                step: '4',
                title: '面会証の返却',
                description: '面会終了後は1階受付にて面会証をご返却ください。',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-5 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="mt-3 font-bold text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs text-text-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 面会ルール */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Rules
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                面会時のお願い
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="space-y-3">
            {visitingRules.map((rule, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-bg p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-text-light leading-relaxed">
                    {rule}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* お持ち込み禁止品 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Prohibited Items
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                お持ち込みについてのお願い
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <p className="mb-6 text-sm text-text-light text-center max-w-2xl mx-auto">
              患者さまの安全と療養環境を守るため、以下のお品物のお持ち込みはご遠慮いただいております。
              ご理解とご協力をお願い申し上げます。
            </p>
          </ScrollFadeIn>

          <div className="space-y-4">
            {prohibitedItems.map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="rounded-lg border border-accent-red/20 bg-accent-red/5 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-red/10 text-accent-red">
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
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-sm">{item.item}</h3>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn delay={400}>
            <div className="mt-8 rounded-lg border border-border bg-bg p-6">
              <h3 className="font-bold text-sm mb-3">
                お見舞い品としておすすめのもの
              </h3>
              <ul className="space-y-2">
                {[
                  '雑誌・書籍（患者さまのご希望を事前にお聞きください）',
                  'パジャマ・タオル等の日用品',
                  'メッセージカード・お手紙',
                  '許可された食品（主治医にご確認のうえお持ちください）',
                ].map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-text-light"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg p-8 md:p-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                面会に関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm md:text-base text-text-light leading-relaxed max-w-2xl mx-auto">
                面会に関するご質問や最新の面会状況の確認は、代表電話までお気軽にお問い合わせください。
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
