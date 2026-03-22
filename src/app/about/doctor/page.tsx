import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '医師紹介',
  description: `${siteConfig.hospitalName}の医師をご紹介します。各診療科の専門医が連携し、質の高い医療を提供しています。`,
};

const doctorProfiles: Record<string, string> = {
  '化石 太郎':
    '総合内科を専門とし、生活習慣病の管理から急性疾患の対応まで、幅広い内科診療を行っています。院長として病院全体の医療の質の向上にも取り組んでおります。',
  '化石 花子':
    '外科専門医として豊富な手術経験を持ち、消化器外科を中心に診療を行っています。副院長として医療安全管理にも力を注いでいます。',
  '化石 次郎':
    '消化器内科・呼吸器内科を中心に、内科全般の診療に従事しています。患者さまの日常生活に配慮した治療計画の立案を大切にしています。',
  '化石 三郎':
    '一般外科・消化器外科を専門とし、鼠径ヘルニアや胆石症などの手術を数多く手がけています。低侵襲な手術法の導入にも積極的に取り組んでいます。',
  '化石 さくら':
    '小児科専門医として、お子さまの健やかな成長をサポートしています。アレルギー疾患や感染症の治療に加え、予防接種や乳幼児健診も丁寧に対応しています。',
  '化石 健一':
    '骨折・関節疾患・スポーツ障害など、整形外科全般の診療を行っています。リハビリテーション科と連携し、手術から社会復帰までを一貫してサポートします。',
  '化石 美咲':
    'リハビリテーション医学を専門とし、患者さまの機能回復と生活の質の向上を目指した治療プログラムを策定しています。脳卒中後のリハビリや運動器リハビリに注力しています。',
};

export default function DoctorPage() {
  const { director, viceDirector, doctors } = siteConfig.staff;

  return (
    <>
      <PageHero title="医師紹介" enTitle="Doctors" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: '医師紹介' },
        ]}
      />

      {/* 導入セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm md:text-base leading-relaxed text-text-light">
                {siteConfig.hospitalName}では、各分野の専門医がチームとなり、
                患者さまに最適な医療を提供しています。
                それぞれの医師が豊富な経験と専門知識を活かし、
                患者さまお一人おひとりに寄り添った丁寧な診療を心がけております。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 院長・副院長 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Director
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">院長・副院長</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[director, viceDirector].map((doc, i) => (
              <ScrollFadeIn key={doc.name} delay={i * 150}>
                <div className="overflow-hidden rounded-lg border border-border bg-bg shadow-sm">
                  <PlaceholderImage
                    width={600}
                    height={400}
                    label={`${doc.role} ${doc.name} 写真`}
                    className="w-full"
                    colorIndex={i}
                  />
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                      {doc.role}
                    </span>
                    <h3 className="mt-3 text-xl font-bold">{doc.name}</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {doc.department}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      {doctorProfiles[doc.name]}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 各科部長 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Department Heads
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">各科部長</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc, i) => (
              <ScrollFadeIn key={doc.name} delay={i * 100}>
                <div className="overflow-hidden rounded-lg border border-border bg-bg shadow-sm h-full">
                  <PlaceholderImage
                    width={400}
                    height={300}
                    label={`${doc.role} ${doc.name} 写真`}
                    className="w-full"
                    colorIndex={i + 2}
                  />
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-primary-bg px-3 py-1 text-xs font-medium text-primary">
                      {doc.department}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{doc.name}</h3>
                    <p className="mt-0.5 text-xs text-text-muted">{doc.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      {doctorProfiles[doc.name]}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 受診のご案内 */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                診察に関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                担当医の診察日や専門分野についてのご質問は、お電話にてお気軽にお問い合わせください。
                症状に合わせて最適な担当医をご案内いたします。
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
