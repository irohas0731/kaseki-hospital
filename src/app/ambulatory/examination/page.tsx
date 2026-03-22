import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '初診・再診の方へ',
  description: `${siteConfig.hospitalName}を初めて受診される方、再診の方へのご案内です。受診の流れ、必要な持ち物、受付時間、注意事項などをわかりやすくご説明しています。`,
};

const firstVisitSteps = [
  {
    step: 1,
    title: '受付',
    description:
      '1階の総合受付窓口へお越しください。健康保険証と、お持ちの場合は紹介状（診療情報提供書）をご提出ください。問診票をお渡ししますので、現在の症状やこれまでの病歴、服用中のお薬などをご記入ください。',
  },
  {
    step: 2,
    title: '問診・バイタル測定',
    description:
      '看護師が問診票の内容をもとにお話を伺い、体温・血圧・脈拍などのバイタルサインを測定いたします。症状に応じて、適切な診療科へご案内いたします。',
  },
  {
    step: 3,
    title: '診察',
    description:
      '担当医による診察を行います。症状やお悩みについて、遠慮なくお伝えください。必要に応じて血液検査やレントゲン検査などの各種検査を実施し、診断・治療方針をご説明いたします。',
  },
  {
    step: 4,
    title: '会計・お薬',
    description:
      '診察終了後、1階の会計窓口でお支払いをお願いいたします。お薬が処方された場合は、院外処方箋をお渡しいたしますので、お近くの調剤薬局でお受け取りください。次回の予約が必要な場合は、会計時にご案内いたします。',
  },
];

const returnVisitSteps = [
  {
    step: 1,
    title: '受付',
    description:
      '診察券と健康保険証をお持ちのうえ、1階の再診受付機または総合受付窓口にて受付をお済ませください。予約のある方は、予約時間の15分前までにお越しいただくとスムーズです。',
  },
  {
    step: 2,
    title: '外来待合',
    description:
      '該当する診療科の待合でお待ちください。お名前をお呼びするまで、待合室でお待ちいただきます。順番が近づきましたらモニターにも表示いたしますので、ご確認ください。',
  },
  {
    step: 3,
    title: '診察・検査',
    description:
      '前回からの経過や現在の症状をお伺いし、診察を行います。経過に応じて検査を追加する場合がございます。治療内容の変更がある場合は、丁寧にご説明いたします。',
  },
  {
    step: 4,
    title: '会計・次回予約',
    description:
      '会計窓口にてお支払いください。引き続き通院が必要な場合は、次回の予約をお取りいたします。処方箋が発行された場合は、お近くの調剤薬局にてお薬をお受け取りください。',
  },
];

const belongings = [
  {
    item: '健康保険証（またはマイナンバーカード）',
    note: '毎月初回の受診時に必ずご提示ください。保険証の変更がある場合はお申し出ください。',
    required: true,
  },
  {
    item: '診察券',
    note: '再診の方は必ずお持ちください。紛失された場合は受付にてお申し出ください（再発行手数料がかかります）。',
    required: true,
  },
  {
    item: '紹介状（診療情報提供書）',
    note: '他の医療機関からの紹介でお越しの方はお持ちください。紹介状がない場合も受診は可能です。',
    required: false,
  },
  {
    item: 'お薬手帳',
    note: '現在服用中のお薬を確認するために必要です。お薬手帳がない場合は、お薬の現物や薬局のお薬情報をお持ちください。',
    required: false,
  },
  {
    item: '各種医療証',
    note: '公費受給者証、限度額適用認定証、特定疾患受給者証などをお持ちの方は、必ず受付時にご提示ください。',
    required: false,
  },
  {
    item: '検査結果・画像データ',
    note: '他院で受けた検査結果やCT・MRIなどの画像データ（CD-ROM等）がありましたらお持ちください。',
    required: false,
  },
];

const notices = [
  {
    title: '受付時間について',
    content:
      `午前の受付は${siteConfig.hours.morning.split('～')[0]}から11:30まで、午後の受付は${siteConfig.hours.afternoon.split('～')[0]}から16:30までとなっております。初診の方は問診票の記入にお時間がかかりますので、受付終了の30分前までにはお越しください。`,
  },
  {
    title: '予約制について',
    content:
      '当院の外来は一部予約制を導入しております。予約のない方も受診いただけますが、予約の方を優先的にご案内するため、待ち時間が長くなる場合がございます。2回目以降の受診は、できる限り予約をお取りいただくことをおすすめいたします。',
  },
  {
    title: 'お薬について',
    content:
      '当院では院外処方を採用しております。診察後にお渡しする処方箋の有効期限は発行日を含めて4日間です。期限を過ぎると無効になりますので、お早めに調剤薬局へお持ちください。お薬についてのご質問は、担当医または薬剤師までお気軽にお尋ねください。',
  },
  {
    title: 'お車でお越しの方',
    content:
      '当院の駐車場は台数に限りがございます。混雑時にはお待ちいただく場合がございますので、できる限り公共交通機関をご利用ください。駐車場の利用方法やアクセスについては、アクセスマップのページをご参照ください。',
  },
  {
    title: '個人情報の取り扱い',
    content:
      '患者さまの個人情報は、診療・看護および病院運営に必要な範囲で利用し、厳重に管理しております。法令に基づく場合を除き、患者さまの同意なく第三者に提供することはございません。詳しくは個人情報保護方針をご確認ください。',
  },
];

export default function ExaminationPage() {
  return (
    <>
      <PageHero title="初診・再診の方へ" enTitle="First Visit" />
      <Breadcrumb
        items={[
          { label: '外来', href: '/ambulatory' },
          { label: '初診・再診の方へ' },
        ]}
      />

      {/* 導入セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}をご受診いただきありがとうございます。
                初めて当院にお越しの方も、再診の方も安心して受診いただけるよう、受診の流れや必要な持ち物についてご案内いたします。
                ご不明な点がございましたら、お気軽に受付窓口またはお電話にてお問い合わせください。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10">
              <PlaceholderImage
                width={1200}
                height={400}
                label="受付・待合室写真"
                className="w-full rounded-lg"
                colorIndex={2}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 初診の方 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="First Visit" jaLabel="初診の方" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-text-light">
              初めて当院を受診される方は、以下の流れで診察を行います。
              ご不安な点がございましたら、各ステップで遠慮なくスタッフにお声がけください。
            </p>
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl space-y-6">
            {firstVisitSteps.map((item, index) => (
              <ScrollFadeIn key={item.step} delay={(index + 1) * 100}>
                <div className="flex gap-4 rounded-lg border border-border bg-bg p-6 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
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

      {/* 再診の方 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Return Visit" jaLabel="再診の方" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-text-light">
              2回目以降のご来院の方は、以下の流れとなります。予約のある方は予約時間に合わせてお越しください。
            </p>
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl space-y-6">
            {returnVisitSteps.map((item, index) => (
              <ScrollFadeIn key={item.step} delay={(index + 1) * 100}>
                <div className="flex gap-4 rounded-lg border border-border bg-bg p-6 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
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

      {/* 持ち物リスト */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Checklist" jaLabel="持ち物リスト" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-lg border border-border bg-bg">
                {belongings.map((item, index) => (
                  <div
                    key={item.item}
                    className={`flex gap-4 p-5 ${
                      index > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <div className="shrink-0 pt-0.5">
                      {item.required ? (
                        <span className="inline-flex h-6 items-center rounded bg-accent-red px-2 text-xs font-bold text-white">
                          必須
                        </span>
                      ) : (
                        <span className="inline-flex h-6 items-center rounded bg-text-muted/20 px-2 text-xs font-bold text-text-muted">
                          任意
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.item}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-text-light">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Notice" jaLabel="注意事項" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl space-y-6">
            {notices.map((notice, index) => (
              <ScrollFadeIn key={notice.title} delay={(index + 1) * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="flex items-center gap-2 font-bold">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    {notice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {notice.content}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="rounded-lg border border-border bg-bg p-8 text-center">
              <h3 className="text-lg font-bold">受診に関するお問い合わせ</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-light">
                受診方法や診療科の選択にお迷いの方、ご不明な点がございましたらお気軽にご連絡ください。
                看護師・受付スタッフが丁寧にご案内いたします。
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
