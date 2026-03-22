import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import SectionHeader from '@/components/shared/SectionHeader';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: '外来診療科目',
  description: `${siteConfig.hospitalName}の外来診療科目のご紹介です。内科・外科・小児科・整形外科・リハビリテーション科・脳神経外科・皮膚科・泌尿器科の各診療科で、専門性の高い医療を提供しています。`,
};

const departments = [
  {
    name: '内科',
    enName: 'Internal Medicine',
    description:
      '風邪や生活習慣病（高血圧・糖尿病・脂質異常症）をはじめ、消化器疾患、呼吸器疾患、循環器疾患など内科全般の診療を行っています。健康診断で異常を指摘された方の精密検査や、慢性疾患の長期管理にも対応しております。患者さまの日常生活を考慮したわかりやすい説明と治療計画を大切にしています。',
    features: ['生活習慣病管理', '消化器・呼吸器疾患', '健診後の精密検査'],
  },
  {
    name: '外科',
    enName: 'Surgery',
    description:
      '消化器外科を中心に、鼠径ヘルニア、虫垂炎、胆石症などの一般外科手術を行っております。また、切り傷・擦り傷などの外傷処置や、皮膚のできもの（粉瘤・脂肪腫など）の日帰り手術にも対応しています。術前の丁寧な説明と、術後の経過観察を重視し、安全で確実な外科医療を提供いたします。',
    features: ['一般外科手術', '外傷・創傷処置', '日帰り手術'],
  },
  {
    name: '小児科',
    enName: 'Pediatrics',
    description:
      '新生児から中学生までのお子さまの疾患全般を診療しています。発熱・咳・下痢などの急性疾患から、気管支喘息やアトピー性皮膚炎などのアレルギー疾患、乳幼児健診、各種予防接種まで幅広く対応しております。お子さまとご家族に安心していただけるよう、わかりやすい丁寧な診察を心がけています。',
    features: ['一般小児疾患', 'アレルギー疾患', '予防接種・乳幼児健診'],
  },
  {
    name: '整形外科',
    enName: 'Orthopedics',
    description:
      '骨折・脱臼・捻挫などの外傷から、腰痛・肩こり・膝関節痛などの慢性的な運動器疾患まで幅広く診療しています。骨粗鬆症の検査・治療や、関節リウマチの管理にも力を入れております。リハビリテーション科と連携し、手術後の機能回復から日常生活への復帰までを一貫してサポートいたします。',
    features: ['骨折・外傷治療', '関節疾患・腰痛治療', '骨粗鬆症検査'],
  },
  {
    name: 'リハビリテーション科',
    enName: 'Rehabilitation',
    description:
      '理学療法士・作業療法士・言語聴覚士がチームとなり、患者さま一人ひとりの状態に合わせたリハビリテーションプログラムを提供しています。脳卒中後の機能回復訓練、骨折術後のリハビリ、心臓リハビリテーション、嚥下訓練など、専門的なリハビリテーション医療で在宅復帰・社会復帰を支援いたします。',
    features: ['運動器リハビリ', '脳血管リハビリ', '言語聴覚療法'],
  },
  {
    name: '脳神経外科',
    enName: 'Neurosurgery',
    description:
      '頭痛・めまい・しびれなどの症状から、脳卒中（脳梗塞・脳出血・くも膜下出血）の診断・治療を行っております。CT・MRIによる精密な画像診断に基づき、迅速かつ的確な治療方針をご提案いたします。脳ドック（脳の健康診断）も実施しており、脳疾患の早期発見・予防に努めています。',
    features: ['脳卒中の診断・治療', '頭痛・めまい外来', '脳ドック'],
  },
  {
    name: '皮膚科',
    enName: 'Dermatology',
    description:
      '湿疹・蕁麻疹・水虫・にきびなどの一般的な皮膚疾患から、帯状疱疹、乾癬、皮膚腫瘍などの専門的な疾患まで幅広く対応しています。アトピー性皮膚炎の長期管理や、皮膚アレルギー検査（パッチテスト）も実施しております。お肌のお悩みがございましたら、お気軽にご相談ください。',
    features: ['一般皮膚疾患', 'アトピー性皮膚炎', 'アレルギー検査'],
  },
  {
    name: '泌尿器科',
    enName: 'Urology',
    description:
      '頻尿・排尿困難・血尿などの排尿トラブルから、前立腺肥大症、尿路結石、膀胱炎などの泌尿器疾患全般を診療しています。前立腺がんの早期発見のためのPSA検査や、腎臓の超音波検査なども行っております。デリケートなお悩みも安心してご相談いただけるよう、プライバシーに配慮した診療を行っています。',
    features: ['排尿障害', '尿路結石', '前立腺疾患'],
  },
];

export default function SubjectPage() {
  return (
    <>
      <PageHero title="外来診療科目" enTitle="Departments" />
      <Breadcrumb
        items={[
          { label: '外来', href: '/ambulatory' },
          { label: '外来診療科目' },
        ]}
      />

      {/* 導入セクション */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}では、各分野の専門医が連携し、患者さまに最適な医療を提供しております。
                気になる症状がある場合は、まずはお気軽にご相談ください。必要に応じて適切な診療科をご案内いたします。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 診療科目一覧 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Departments" jaLabel="診療科目一覧" />
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {departments.map((dept, index) => (
              <ScrollFadeIn key={dept.name} delay={index * 100}>
                <div className="overflow-hidden rounded-lg border border-border bg-bg shadow-sm transition-all hover:shadow-md">
                  <PlaceholderImage
                    width={600}
                    height={200}
                    label={`${dept.name}イメージ`}
                    className="w-full"
                    colorIndex={index}
                  />
                  <div className="p-6">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl font-bold">{dept.name}</h3>
                      <span className="font-en text-xs tracking-wider text-text-muted">
                        {dept.enName}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-light">
                      {dept.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {dept.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-primary-bg px-3 py-1 text-xs font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 受診のご案内 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <SectionHeader enLabel="Information" jaLabel="受診に関するご案内" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold text-primary">紹介状をお持ちの方</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  他の医療機関からの紹介状をお持ちの方は、受付時にご提出ください。紹介状の内容をもとに、適切な診療科へスムーズにご案内いたします。事前にお電話でご予約いただくと、待ち時間が短縮される場合がございます。
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold text-primary">どの科を受診すればよいかわからない方</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  症状に対してどの診療科を受診すればよいか迷われた場合は、まず総合受付にご相談ください。看護師がお話を伺い、適切な診療科をご案内いたします。また、お電話でのご相談も承っておりますので、お気軽にお問い合わせください。
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="font-bold text-primary">セカンドオピニオンをご希望の方</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  現在の治療方針について他の医師の意見をお聞きになりたい方のために、セカンドオピニオン外来を設けております。診療情報提供書（紹介状）と検査資料をお持ちのうえ、事前にお電話でご予約ください。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="text-center">
              <p className="text-sm text-text-light">
                各診療科目の詳細や受診に関するお問い合わせは、お電話にて承っております。
              </p>
              <p className="mt-3 text-2xl font-bold text-primary">
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
