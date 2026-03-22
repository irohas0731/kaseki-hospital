import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '居宅介護支援',
  description: `${siteConfig.hospitalName}の居宅介護支援事業所のご案内です。経験豊富なケアマネジャーが、介護保険に関するご相談からケアプランの作成まで、在宅介護を総合的にサポートいたします。`,
};

const roles = [
  {
    title: '介護に関するご相談',
    description:
      '介護保険制度の仕組みや申請方法、利用できるサービスの種類など、介護に関するさまざまなご相談に対応いたします。はじめて介護に直面されたご家族の方にもわかりやすくご説明いたします。',
  },
  {
    title: '要介護認定の申請代行',
    description:
      '市区町村への介護保険申請を代行いたします。必要書類の準備から申請手続きまで、ケアマネジャーがサポートいたしますので、ご本人やご家族の負担を軽減できます。',
  },
  {
    title: 'ケアプランの作成',
    description:
      'ご本人の心身の状態やご家族の状況、生活環境を丁寧にアセスメント（評価）し、ご本人・ご家族の希望を踏まえた最適なケアプラン（居宅サービス計画）を作成いたします。',
  },
  {
    title: 'サービス事業者との連絡調整',
    description:
      'ケアプランに基づき、訪問看護・訪問介護・デイケアなど各サービス事業者との連絡調整を行います。サービスが円滑に提供されるよう、関係者間の橋渡し役を担います。',
  },
  {
    title: 'モニタリング・プランの見直し',
    description:
      'サービス開始後も定期的にご自宅を訪問し、サービスが適切に提供されているか、ご本人の状態に変化がないかを確認します。必要に応じてケアプランの見直しを行います。',
  },
  {
    title: '入退院時の連携',
    description:
      '入院が必要になった場合には病院との連絡調整を行い、退院時にはスムーズに在宅生活に戻れるよう、退院前カンファレンスへの参加やサービスの再調整を行います。',
  },
];

export default function CenterPage() {
  return (
    <>
      <PageHero title="居宅介護支援" enTitle="Care Management" />
      <Breadcrumb
        items={[
          { label: '在宅サービス', href: '/service' },
          { label: '居宅介護支援' },
        ]}
      />

      {/* 概要 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-text-light">
                居宅介護支援事業所は、ケアマネジャー（介護支援専門員）が在籍し、介護が必要な方やそのご家族を支援する事業所です。介護保険の申請手続きからケアプランの作成、サービスの調整まで、在宅生活を総合的にコーディネートいたします。ご利用者さまの自己負担はありません（全額介護保険から給付されます）。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-12">
              <PlaceholderImage
                width={1200}
                height={400}
                label="居宅介護支援 相談風景イメージ"
                className="w-full rounded-lg"
                colorIndex={5}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ケアマネジャーの役割 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Our Roles" jaLabel="ケアマネジャーの役割" />
          </ScrollFadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="h-full rounded-lg border border-border bg-bg p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{role.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {role.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 当事業所の特徴 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Strengths" jaLabel="当事業所の強み" />
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: '医療機関併設の安心感',
                description:
                  `${siteConfig.hospitalName}に併設されているため、医師や看護師との連携がスムーズです。医療ニーズの高い方や退院直後の方にも、迅速かつ適切なケアプランを作成いたします。`,
              },
              {
                title: '多様なサービスとの連携',
                description:
                  '当院のグループ内に訪問看護・訪問介護・訪問リハビリ・デイケアなどの在宅サービスを備えており、ご利用者さまのニーズに応じたワンストップでのサービス提供が可能です。',
              },
              {
                title: '経験豊富なケアマネジャー',
                description:
                  '介護福祉士や看護師など、医療・介護の専門資格を持つケアマネジャーが在籍しています。豊富な実務経験をもとに、きめ細やかなケアマネジメントを行います。',
              },
              {
                title: 'ご本人・ご家族に寄り添う姿勢',
                description:
                  'ケアプランはご本人やご家族の思いを大切にして作成いたします。定期的な訪問やお電話を通じて、日々の変化やお困りごとにも迅速に対応いたします。',
              },
            ].map((strength, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-4 rounded-lg border border-border bg-bg p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{strength.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Flow" jaLabel="ご利用の流れ" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl">
            {[
              {
                title: 'お問い合わせ・ご相談',
                description:
                  'お電話またはご来所にて、まずはお気軽にご相談ください。介護に関するお悩みやご不安について、ケアマネジャーが丁寧にお伺いいたします。',
              },
              {
                title: '要介護認定の申請',
                description:
                  '介護保険をまだ申請されていない方には、申請手続きを代行いたします。すでに認定をお持ちの方は次のステップへ進みます。',
              },
              {
                title: 'アセスメント（状態把握）',
                description:
                  'ケアマネジャーがご自宅を訪問し、ご本人の心身の状態や生活環境、ご家族の状況、今後のご希望などを詳しくお伺いします。',
              },
              {
                title: 'ケアプランの作成・合意',
                description:
                  'アセスメントの結果をもとに、ケアプラン原案を作成します。サービス担当者会議でご本人・ご家族・サービス事業者と内容を確認し、合意のうえでケアプランを確定します。',
              },
              {
                title: 'サービスの利用開始',
                description:
                  'ケアプランに沿ったサービスの利用が始まります。開始後もケアマネジャーが毎月訪問し、サービスの状況やご本人の変化を確認いたします。',
              },
            ].map((step, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="flex gap-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    {i < 4 && <div className="mt-2 h-full w-0.5 bg-primary/20" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="FAQ" jaLabel="よくあるご質問" />
          </ScrollFadeIn>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: 'ケアマネジャーへの相談に費用はかかりますか？',
                a: '居宅介護支援のご利用に自己負担はありません。ケアプランの作成やサービスの調整にかかる費用は、全額介護保険から給付されます。',
              },
              {
                q: '今利用している事業所からの変更は可能ですか？',
                a: 'はい、可能です。ケアマネジャーや居宅介護支援事業所の変更はいつでも行えます。現在のサービスを継続しながら変更できますので、お気軽にご相談ください。',
              },
              {
                q: '遠方に住む家族からの相談もできますか？',
                a: 'はい、お電話でのご相談も承っております。遠方にお住まいのご家族の方からのご連絡もお気軽にどうぞ。状況をお伺いし、今後の対応についてアドバイスいたします。',
              },
              {
                q: '介護保険以外のサービスも紹介してもらえますか？',
                a: '介護保険サービスだけでなく、配食サービスや福祉用具のレンタル、住宅改修、地域のボランティアサービスなど、生活全般に関する情報提供や調整も行っております。',
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

      {/* 事業所概要 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Overview" jaLabel="事業所概要" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-border bg-bg">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['事業所名', `${siteConfig.hospitalName} 居宅介護支援事業所`],
                    ['所在地', siteConfig.address.full],
                    ['電話番号', siteConfig.phone],
                    ['営業日', '月曜日～金曜日（土・日・祝日・年末年始を除く）'],
                    ['営業時間', '8:30～17:30'],
                    ['対象エリア', `${siteConfig.address.city}および近隣地域`],
                    ['スタッフ', '主任介護支援専門員・介護支援専門員'],
                    ['利用料', '自己負担なし（全額介護保険から給付）'],
                  ].map(([label, value], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-bg-off' : ''}>
                      <th className="w-1/3 border-b border-border px-6 py-4 text-left font-bold">
                        {label}
                      </th>
                      <td className="border-b border-border px-6 py-4 text-text-light">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold">介護のことなら何でもご相談ください</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-light">
                「介護保険の申請方法がわからない」「どんなサービスが利用できるのか知りたい」「退院後の生活が不安」など、介護に関するお悩みはどんなことでもお気軽にご相談ください。経験豊富なケアマネジャーが親身に対応いたします。
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
