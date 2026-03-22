import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'ご挨拶',
  description: `${siteConfig.hospitalName}院長${siteConfig.staff.director.name}より、当院の医療に対する想いと地域の皆さまへのメッセージをお伝えしています。`,
};

export default function GreetingPage() {
  return (
    <>
      <PageHero title="ご挨拶" enTitle="Greeting" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: 'ご挨拶' },
        ]}
      />

      {/* 院長ご挨拶 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* 院長写真 */}
              <div className="w-full md:w-1/3 shrink-0">
                <PlaceholderImage
                  width={400}
                  height={500}
                  label="院長 写真"
                  className="w-full rounded-lg"
                  colorIndex={0}
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-text-muted">
                    {siteConfig.hospitalName} {siteConfig.staff.director.role}
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {siteConfig.staff.director.name}
                  </p>
                </div>
              </div>

              {/* ご挨拶文 */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                  患者さまの笑顔と安心のために、<br className="hidden md:block" />
                  地域とともに歩む医療を
                </h2>
                <div className="mt-4 h-0.5 w-12 bg-primary" />

                <div className="mt-8 space-y-5 text-sm md:text-base leading-relaxed text-text-light">
                  <p>
                    {siteConfig.hospitalName}のホームページをご覧いただき、誠にありがとうございます。
                    院長の{siteConfig.staff.director.name}でございます。
                  </p>
                  <p>
                    当院は開院以来、「患者さまに寄り添い、地域に根ざした医療を提供する」という
                    変わらぬ信念のもと、日々の診療に取り組んでまいりました。
                    医療を取り巻く環境が大きく変化するなかにあっても、
                    私たちが最も大切にしているのは、目の前の患者さまお一人おひとりに真摯に向き合うことです。
                  </p>
                  <p>
                    当院では、急性期医療からリハビリテーション、在宅支援に至るまで、
                    患者さまの状態やご希望に応じた切れ目のない医療を提供できる体制を整えております。
                    医師・看護師・リハビリスタッフ・ソーシャルワーカーをはじめとする多職種のスタッフが
                    チームとなり、それぞれの専門性を活かしながら、最善の治療とケアをお届けしています。
                  </p>
                  <p>
                    また、地域の医療機関や介護施設との連携を積極的に推進し、
                    患者さまが住み慣れた地域で安心して暮らし続けられるよう、
                    医療と生活の両面からサポートすることを使命としております。
                    健康診断や予防医療にも力を入れ、病気になる前の段階からの健康管理にも貢献してまいります。
                  </p>
                  <p>
                    「この病院に来てよかった」と感じていただけるよう、
                    スタッフ一同、常に学び成長し続ける姿勢を忘れず、
                    温かく質の高い医療を提供し続けてまいります。
                    地域の皆さまの健康と暮らしを支えるパートナーとして、
                    どうぞお気軽にご相談ください。
                  </p>
                </div>

                <div className="mt-10 text-right">
                  <p className="text-sm text-text-muted">
                    {siteConfig.corporateName}
                  </p>
                  <p className="text-sm text-text-muted">
                    {siteConfig.hospitalName} {siteConfig.staff.director.role}
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {siteConfig.staff.director.name}
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 副院長ご挨拶 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Vice Director
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">副院長ご挨拶</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="flex flex-col md:flex-row-reverse gap-10 items-start max-w-5xl mx-auto">
              <div className="w-full md:w-1/3 shrink-0">
                <PlaceholderImage
                  width={400}
                  height={500}
                  label="副院長 写真"
                  className="w-full rounded-lg"
                  colorIndex={1}
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-text-muted">
                    {siteConfig.staff.viceDirector.role}
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {siteConfig.staff.viceDirector.name}
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-5 text-sm md:text-base leading-relaxed text-text-light">
                <p>
                  副院長の{siteConfig.staff.viceDirector.name}でございます。
                  当院の{siteConfig.staff.viceDirector.department}を担当しております。
                </p>
                <p>
                  私は日々の診療において、患者さまとのコミュニケーションを何よりも大切にしています。
                  病気や治療に対する不安は、正しい情報と丁寧な説明によって和らげることができると考えております。
                  患者さまが納得して治療に臨めるよう、わかりやすい言葉で十分にご説明することを心がけています。
                </p>
                <p>
                  また、副院長として医療の質と安全の向上にも力を注いでおります。
                  院内の感染対策や医療安全管理体制の強化、スタッフの教育研修の充実を通じて、
                  患者さまが安心して治療を受けられる環境づくりに努めてまいります。
                </p>
                <p>
                  皆さまのご健康を守るために、誠心誠意取り組んでまいりますので、
                  どうぞよろしくお願いいたします。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
