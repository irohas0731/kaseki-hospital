import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: '患者さまの権利',
  description: `${siteConfig.hospitalName}が尊重する患者さまの権利と、より良い医療のためにお願いする責務についてご説明しています。`,
};

const rights = [
  {
    title: '良質な医療を受ける権利',
    description:
      'すべての患者さまは、社会的地位・国籍・宗教・性別・年齢・病気の種類などに関わらず、安全で質の高い医療を公平に受けることができます。',
  },
  {
    title: '知る権利',
    description:
      '患者さまは、ご自身の病名・病状・検査結果・治療方針・薬の効果と副作用・手術の内容やリスクなどについて、理解しやすい言葉で十分な説明を受けることができます。',
  },
  {
    title: '自己決定の権利',
    description:
      '患者さまは、十分な説明を受けたうえで、治療方法を自らの意思で選択または拒否することができます。セカンドオピニオンを求めることも自由です。',
  },
  {
    title: 'プライバシーが守られる権利',
    description:
      '患者さまの個人情報・診療内容・身体に関する情報は、厳重に保護されます。患者さまの同意なく、第三者に情報が漏れることはありません。',
  },
  {
    title: '尊厳が守られる権利',
    description:
      'すべての患者さまは、一人の人間として常にその尊厳と人格が尊重され、思いやりのある医療を受けることができます。',
  },
  {
    title: '相談・意見を述べる権利',
    description:
      '患者さまは、医療に関する疑問や不満について、いつでも相談窓口に申し出ることができます。それにより不利益を受けることはありません。',
  },
];

const responsibilities = [
  {
    title: '正確な情報の提供',
    description:
      '適切な医療を受けるために、ご自身の健康状態・既往歴・服薬中の薬・アレルギーなどについて、正確にお伝えください。',
  },
  {
    title: '治療への積極的な参加',
    description:
      '治療方針をご理解いただき、主体的に治療に参加していただくようお願いいたします。ご不明な点があれば遠慮なくご質問ください。',
  },
  {
    title: '療養上のルールの遵守',
    description:
      '他の患者さまの療養に支障をきたさないよう、院内のルールやマナーをお守りください。飲酒・喫煙・大声での会話などはご遠慮いただいております。',
  },
  {
    title: '医療費のお支払い',
    description:
      '受けた医療に対する費用を、定められた期日までにお支払いください。お支払いに関するご相談は医療相談室までお申し出ください。',
  },
];

export default function PatientPage() {
  return (
    <>
      <PageHero title="患者さまの権利" enTitle="Patient Rights" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '患者さまの権利' },
        ]}
      />

      {/* 導入 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}は、患者さまの権利を尊重し、
                信頼に基づいた医療を提供することをお約束いたします。
                患者さまと医療者がともに協力し合うことで、より良い医療が実現できると考えております。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 患者さまの権利 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Patient Rights
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                患者さまの権利
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                当院では、以下の患者さまの権利を尊重し、これを守るためにスタッフ一同取り組んでまいります。
              </p>
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl space-y-5">
            {rights.map((right, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div className="flex gap-5 md:gap-8 rounded-lg border border-border bg-bg p-6 md:p-8">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{right.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">
                      {right.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 患者さまへのお願い */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Patient Responsibilities
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                患者さまへのお願い
              </h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                安全で質の高い医療を円滑に提供するために、
                患者さまにもご協力いただきたい事項がございます。
                ご理解とご協力をお願いいたします。
              </p>
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {responsibilities.map((item, i) => (
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

      {/* 相談窓口 */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                ご意見・ご相談窓口
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                医療に関するご質問やご意見、お困りのことがございましたら、
                各病棟のスタッフステーションまたは1階の医療相談室までお気軽にお申し出ください。
                「ご意見箱」も院内各所に設置しております。
              </p>
              <p className="mt-4 text-2xl font-bold text-primary">
                TEL: {siteConfig.phone}
              </p>
              <p className="mt-1 text-xs text-text-muted">
                医療相談室（受付時間：{siteConfig.hours.morning} / {siteConfig.hours.afternoon}）
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
