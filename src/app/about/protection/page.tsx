import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: '個人情報保護方針',
  description: `${siteConfig.hospitalName}の個人情報保護方針です。患者さまの個人情報を適切に保護・管理するための取り組みをご案内しています。`,
};

const policySections = [
  {
    number: '第1条',
    title: '個人情報の収集について',
    content:
      '当院では、適正な医療サービスを提供するために必要な範囲で、患者さまの個人情報を収集いたします。収集にあたっては、利用目的を明示し、適法かつ公正な手段により行います。',
  },
  {
    number: '第2条',
    title: '個人情報の利用目的',
    content:
      '収集した個人情報は、以下の目的で利用いたします。\n・患者さまへの医療の提供\n・医療保険事務および関連する事務手続き\n・入退院等の病棟管理\n・会計・経理に関する業務\n・医療事故等の報告\n・医療サービスの向上を目的とした院内研修・症例検討\n・外部機関への法令に基づく情報提供',
  },
  {
    number: '第3条',
    title: '個人情報の第三者提供について',
    content:
      '当院は、以下の場合を除き、患者さまの同意なく個人情報を第三者に提供することはありません。\n・法令に基づく場合\n・人の生命・身体または財産の保護のために必要な場合\n・公衆衛生の向上または児童の健全な育成のために特に必要な場合\n・国の機関等が法令の定める事務を遂行するために協力する必要がある場合',
  },
  {
    number: '第4条',
    title: '個人情報の安全管理措置',
    content:
      '当院は、個人情報の漏えい・紛失・改ざんを防止するため、適切な安全管理措置を講じます。個人情報を取り扱う職員に対して定期的な教育・研修を実施し、個人情報保護の意識向上に努めます。',
  },
  {
    number: '第5条',
    title: '個人情報の開示・訂正・削除について',
    content:
      '患者さまがご自身の個人情報について開示・訂正・利用停止・削除を希望される場合は、合理的な範囲で速やかに対応いたします。ご希望の際は、医療相談室窓口までお申し出ください。',
  },
  {
    number: '第6条',
    title: '個人情報保護方針の見直し',
    content:
      '当院は、個人情報の取り扱いに関する法令やガイドラインの変更に対応するため、本方針を適宜見直し、改善してまいります。改定した場合は、院内掲示およびホームページにて速やかにお知らせいたします。',
  },
];

export default function ProtectionPage() {
  return (
    <>
      <PageHero title="個人情報保護方針" enTitle="Privacy Policy" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '個人情報保護方針' },
        ]}
      />

      {/* 導入 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border border-primary bg-primary-bg p-8 md:p-10 text-center">
                <h2 className="text-xl md:text-2xl font-bold">
                  個人情報保護に関する基本姿勢
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-text-light">
                  {siteConfig.hospitalName}は、患者さまの個人情報の保護を重要な責務と認識し、
                  「個人情報の保護に関する法律」およびその他関連法令・ガイドラインを遵守いたします。
                  患者さまが安心して医療サービスを受けられるよう、
                  個人情報の適切な収集・利用・管理に全力で取り組んでまいります。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 方針詳細 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Privacy Policy
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                個人情報保護方針
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl space-y-6">
            {policySections.map((section, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="rounded-lg border border-border bg-bg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block rounded bg-primary px-3 py-1 text-xs font-bold text-white">
                      {section.number}
                    </span>
                    <h3 className="text-lg font-bold">{section.title}</h3>
                  </div>
                  <div className="text-sm leading-relaxed text-text-light whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 個人情報の取り扱いに関する具体例 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Examples
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                院内での取り組み
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {[
              {
                title: '院内呼び出しの配慮',
                description:
                  '外来でのお呼び出しは受付番号を使用し、お名前の院内放送は原則として行っておりません。患者さまのプライバシーに配慮した対応を心がけています。',
              },
              {
                title: '病室名札の選択制',
                description:
                  '入院時の病室のお名前表示は、患者さまのご希望に応じて掲示の有無を選択いただけます。お申し出がない場合は表示しない運用としております。',
              },
              {
                title: 'カルテ・書類の管理',
                description:
                  '電子カルテにはアクセス権限を設定し、業務に必要な職員のみが閲覧できる体制としています。紙の書類は施錠できるキャビネットで保管しています。',
              },
              {
                title: '職員教育の徹底',
                description:
                  '全職員を対象に、年2回の個人情報保護研修を実施しています。入職時にも個人情報取り扱いに関する誓約書の提出を義務づけています。',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6 h-full">
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {item.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                個人情報に関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                個人情報の取り扱いに関するご質問やお問い合わせは、
                下記の窓口までご連絡ください。
              </p>
              <div className="mt-6 inline-block rounded-lg border border-border bg-bg px-8 py-4">
                <p className="text-sm font-bold">
                  {siteConfig.hospitalName} 個人情報相談窓口（医療相談室内）
                </p>
                <p className="mt-2 text-lg font-bold text-primary">
                  TEL: {siteConfig.phone}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  受付時間：{siteConfig.hours.morning} / {siteConfig.hours.afternoon}（{siteConfig.hours.closedDays}を除く）
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
