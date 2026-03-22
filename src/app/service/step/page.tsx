import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '利用の手続き',
  description: `${siteConfig.hospitalName}の在宅サービスをご利用いただくための手続きの流れをご案内いたします。介護保険の申請からサービス開始までの手順をわかりやすくご説明します。`,
};

const steps = [
  {
    number: 1,
    title: '介護保険の申請',
    description:
      'お住まいの市区町村の窓口で、介護保険の申請を行います。申請には介護保険被保険者証が必要です。ご本人やご家族のほか、地域包括支援センターや当院の居宅介護支援事業所が代行申請することも可能です。',
    note: '65歳以上の方（第1号被保険者）、40～64歳で特定疾病に該当する方（第2号被保険者）が対象です。',
  },
  {
    number: 2,
    title: '認定調査・主治医意見書',
    description:
      '市区町村から派遣された認定調査員がご自宅を訪問し、心身の状態について聞き取り調査を行います。あわせて、主治医に意見書の作成を依頼します。調査結果と意見書をもとに、介護認定審査会で要介護度が判定されます。',
    note: '認定結果が届くまで、通常1か月程度かかります。申請日にさかのぼってサービスを利用できる場合もあります。',
  },
  {
    number: 3,
    title: '認定結果の通知',
    description:
      '審査の結果、「要支援1・2」「要介護1～5」のいずれかに認定されます。認定結果に応じて利用できるサービスの種類や上限額が異なります。認定結果に納得がいかない場合は、不服申し立てを行うこともできます。',
    note: '「非該当（自立）」と判定された場合でも、地域支援事業のサービスをご利用いただける場合があります。',
  },
  {
    number: 4,
    title: 'ケアプランの作成',
    description:
      '要支援の方は地域包括支援センター、要介護の方は居宅介護支援事業所のケアマネジャーに相談し、ご本人・ご家族の希望を踏まえたケアプラン（介護サービス計画）を作成します。どのようなサービスをどの程度利用するかを具体的に計画します。',
    note: '当院の居宅介護支援事業所でもケアプランの作成を承っております。お気軽にご相談ください。',
  },
  {
    number: 5,
    title: 'サービス事業者との契約',
    description:
      'ケアプランに基づき、各サービス事業者と利用契約を締結します。サービス内容・料金・利用上の注意事項などについて説明を受け、ご理解・ご同意のうえで契約となります。',
    note: '契約にあたっては、重要事項説明書の内容をよくご確認ください。',
  },
  {
    number: 6,
    title: 'サービス利用開始',
    description:
      '契約が完了しましたら、ケアプランに沿ってサービスの利用が始まります。サービス開始後も、ケアマネジャーが定期的にモニタリングを行い、必要に応じてケアプランの見直しを行います。ご不安やご要望がございましたら、いつでもご相談ください。',
    note: 'サービスの利用料は原則1～3割の自己負担となります（所得に応じて異なります）。',
  },
];

export default function ServiceStepPage() {
  return (
    <>
      <PageHero title="利用の手続き" enTitle="Service Procedure" />
      <Breadcrumb
        items={[
          { label: '在宅サービス', href: '/service' },
          { label: '利用の手続き' },
        ]}
      />

      {/* 導入文 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                在宅サービスをご利用いただくには、介護保険の申請から認定、ケアプランの作成といった手続きが必要です。はじめての方にも安心していただけるよう、手続きの流れをステップごとにご案内いたします。ご不明な点がございましたら、お気軽に当院までご相談ください。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* フロー図 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Flow" jaLabel="ご利用までの流れ" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <PlaceholderImage
              width={1000}
              height={300}
              label="利用手続きフロー図"
              className="mx-auto w-full max-w-4xl rounded-lg"
              colorIndex={1}
            />
          </ScrollFadeIn>
        </div>
      </section>

      {/* ステップ詳細 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Steps" jaLabel="手続きの詳細" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl space-y-8">
            {steps.map((step, i) => (
              <ScrollFadeIn key={step.number} delay={i * 100}>
                <div className="relative rounded-lg border border-border bg-bg p-8 pl-20 md:pl-24">
                  <div className="absolute left-6 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {step.description}
                  </p>
                  {step.note && (
                    <div className="mt-4 rounded bg-primary-bg px-4 py-3">
                      <p className="text-xs leading-relaxed text-text-light">
                        <span className="mr-1 font-bold text-primary">Point</span>
                        {step.note}
                      </p>
                    </div>
                  )}
                  {i < steps.length - 1 && (
                    <div className="absolute -bottom-5 left-10 text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="FAQ" jaLabel="よくあるご質問" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: '介護保険の申請はどこで行えますか？',
                a: 'お住まいの市区町村の介護保険担当窓口で申請できます。また、地域包括支援センターや当院の居宅介護支援事業所で代行申請を行うことも可能ですので、お気軽にご相談ください。',
              },
              {
                q: '申請してからどのくらいでサービスを利用できますか？',
                a: '認定結果が届くまで通常1か月程度かかりますが、認定前でも暫定的にサービスをご利用いただける場合があります。緊急の場合はご相談ください。',
              },
              {
                q: '利用料はどのくらいかかりますか？',
                a: '介護保険サービスの自己負担は、原則としてサービス費用の1割から3割です（所得に応じて異なります）。具体的な費用については各サービスのページをご参照いただくか、ケアマネジャーにご相談ください。',
              },
              {
                q: 'どの在宅サービスを選べばよいかわかりません。',
                a: '当院の居宅介護支援事業所のケアマネジャーが、ご本人の状態やご家族の状況を丁寧にお伺いし、最適なサービスの組み合わせをご提案いたします。まずはお気軽にお問い合わせください。',
              },
            ].map((faq, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <h3 className="flex items-start gap-3 font-bold">
                    <span className="shrink-0 rounded bg-primary px-2 py-0.5 text-xs font-bold text-white">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-text-light">
                    <span className="shrink-0 rounded bg-secondary px-2 py-0.5 text-xs font-bold text-white">
                      A
                    </span>
                    {faq.a}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold">お気軽にご相談ください</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                在宅サービスに関するご質問やご相談は、当院の居宅介護支援事業所までお気軽にお問い合わせください。経験豊富なケアマネジャーが丁寧にご対応いたします。
              </p>
              <p className="mt-4 text-2xl font-bold text-primary">{siteConfig.phone}</p>
              <p className="mt-1 text-xs text-text-muted">
                受付時間：{siteConfig.hours.morning}／{siteConfig.hours.afternoon}（{siteConfig.hours.closedDays}を除く）
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
