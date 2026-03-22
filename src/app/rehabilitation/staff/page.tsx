import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'スタッフ教育',
  description: `${siteConfig.hospitalName}リハビリテーション部のスタッフ教育体制についてご紹介します。継続的な学習と資格取得支援を通じて、質の高いリハビリテーションを提供しています。`,
};

const educationPrograms = [
  {
    title: '新人教育プログラム',
    period: '入職後1年間',
    description:
      '新卒および中途入職のスタッフを対象に、段階的な教育プログラムを設けています。プリセプター（指導担当者）が1名ずつ付き、日常業務や臨床技術をマンツーマンで丁寧に指導します。月ごとの到達目標を設定し、定期的な振り返り面談を実施しています。',
    contents: [
      '医療安全・感染対策に関する基礎研修',
      '各疾患のリハビリテーション基礎知識の習得',
      '評価技術・治療技術の実技指導',
      'カルテ記載・報告書作成の研修',
      'チーム医療・多職種連携の基礎',
      '接遇・コミュニケーションスキル研修',
    ],
  },
  {
    title: '継続教育（2〜5年目）',
    period: '2年目以降',
    description:
      '基本的な臨床能力を身につけた後は、より専門的な知識や技術の習得を目指します。各自が興味のある分野を深めながら、臨床での実践力を高めていくプログラムです。チーム内での役割も徐々に広げていきます。',
    contents: [
      '症例検討会への参加・発表',
      '専門分野別の勉強会・実技研修',
      '学会発表に向けた研究指導',
      '後輩指導スキルの育成',
      '地域連携・退院支援に関する研修',
      '他施設との合同研修会への参加',
    ],
  },
  {
    title: 'リーダー・管理職研修',
    period: '6年目以降',
    description:
      '臨床経験を積んだスタッフがチームリーダーや管理職として活躍するための研修です。部門運営や後進育成、医療の質管理など、組織を支える力を養います。',
    contents: [
      'リーダーシップ・マネジメント研修',
      '臨床実習指導者講習会への参加',
      '業務改善・質管理に関する研修',
      '他部門との連携強化プロジェクト',
      '経営・医療制度に関する勉強会',
      '認定・専門資格取得のサポート',
    ],
  },
];

const certifications = [
  { name: '認定理学療法士', organization: '日本理学療法士協会', holders: '3名' },
  { name: '専門理学療法士', organization: '日本理学療法士協会', holders: '1名' },
  { name: '認定作業療法士', organization: '日本作業療法士協会', holders: '2名' },
  { name: '認定言語聴覚士', organization: '日本言語聴覚士協会', holders: '1名' },
  { name: '呼吸療法認定士', organization: '3学会合同呼吸療法認定士認定委員会', holders: '4名' },
  { name: '心臓リハビリテーション指導士', organization: '日本心臓リハビリテーション学会', holders: '2名' },
  { name: '認知症ケア専門士', organization: '日本認知症ケア学会', holders: '3名' },
  { name: '福祉住環境コーディネーター', organization: '東京商工会議所', holders: '5名' },
];

const trainingActivities = [
  {
    title: '部門内勉強会',
    frequency: '月2回',
    description: '毎月第2・第4水曜日に部門内勉強会を開催しています。最新の文献紹介や症例検討、実技研修など、テーマを変えながら全スタッフのスキルアップを図ります。',
  },
  {
    title: '症例検討会',
    frequency: '週1回',
    description: '毎週金曜日に各チームの担当症例を検討します。担当療法士のプレゼンテーションに対し、多角的な視点からディスカッションを行い、より良い治療方針を検討します。',
  },
  {
    title: '外部研修・学会参加',
    frequency: '随時',
    description: '各種学会や外部セミナーへの参加を積極的に支援しています。参加費の補助制度を設けており、年間を通じて多くのスタッフが最新の知見に触れる機会を得ています。',
  },
  {
    title: '多職種合同研修',
    frequency: '年4回',
    description: '看護部やMSW、管理栄養士など他部門と合同の研修を開催しています。チーム医療の質を高めるため、職種間の相互理解と連携強化に取り組んでいます。',
  },
];

export default function RehabStaffPage() {
  return (
    <>
      <PageHero title="スタッフ教育" enTitle="Staff Education" />
      <Breadcrumb
        items={[
          { label: 'リハビリテーション', href: '/rehabilitation' },
          { label: 'スタッフ教育' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">
                学び続けるスタッフが、質の高い医療を支えます
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}リハビリテーション部では、「質の高いリハビリテーションは質の高い人材から」という考えのもと、スタッフの継続的な成長を支援する教育体制を整備しています。入職時の新人研修から認定資格の取得支援まで、キャリアステージに応じた段階的な教育プログラムを用意しております。
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10">
              <PlaceholderImage
                width={1200}
                height={400}
                label="スタッフ研修の様子"
                className="w-full rounded-lg"
                colorIndex={1}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Education Programs */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">キャリア段階別教育プログラム</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <div className="mt-10 space-y-8">
            {educationPrograms.map((program, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold">{program.title}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                      {program.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-light">
                    {program.description}
                  </p>
                  <div className="mt-4 rounded-lg bg-bg-off p-4">
                    <p className="text-xs font-bold text-text-muted mb-2">主な内容</p>
                    <ul className="grid gap-1.5 sm:grid-cols-2">
                      {program.contents.map((content, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {content}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Illustration */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">キャリアパス</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            <p className="mt-4 text-center text-sm text-text-muted">
              経験年数に応じたスキルアップの道筋を示しています
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10">
              <PlaceholderImage
                width={1000}
                height={300}
                label="キャリアパス図"
                className="w-full rounded-lg"
                colorIndex={3}
              />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { year: '1年目', label: '基礎技術の習得', note: 'プリセプター制度による指導' },
                { year: '2〜3年目', label: '臨床力の向上', note: '担当患者数の増加・専門分野の探索' },
                { year: '4〜5年目', label: '専門性の深化', note: '認定資格の取得・学会発表' },
                { year: '6年目〜', label: 'リーダー・指導者', note: '後進育成・部門運営への参画' },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-border bg-bg p-4 text-center">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item.year}
                  </span>
                  <p className="mt-2 text-sm font-bold">{item.label}</p>
                  <p className="mt-1 text-xs text-text-muted">{item.note}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">取得資格一覧</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            <p className="mt-4 text-center text-sm text-text-muted">
              スタッフが取得している主な認定・専門資格です（2026年4月時点）
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 mx-auto max-w-3xl">
              <div className="rounded-lg border border-border bg-bg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bg-off">
                      <th className="px-4 py-3 text-left font-medium">資格名</th>
                      <th className="px-4 py-3 text-left font-medium">認定団体</th>
                      <th className="px-4 py-3 text-center font-medium">取得者数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certifications.map((cert, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="px-4 py-3 font-medium">{cert.name}</td>
                        <td className="px-4 py-3 text-text-light">{cert.organization}</td>
                        <td className="px-4 py-3 text-center font-bold text-primary">{cert.holders}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Training Activities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">定期研修・勉強会</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {trainingActivities.map((activity, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold">{activity.title}</h3>
                    <span className="rounded bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                      {activity.frequency}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">
                    {activity.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">資格取得支援制度</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 mx-auto max-w-3xl rounded-lg border border-border bg-bg p-6 md:p-8">
              <p className="text-sm leading-relaxed text-text-light">
                当院では、スタッフの専門性向上を積極的に支援するため、以下の資格取得支援制度を設けています。スタッフの成長が患者さまへのより良い医療につながるという考えのもと、学習環境の整備に力を入れています。
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  { title: '受験費用の補助', detail: '認定・専門資格の受験料を全額または一部を病院が負担いたします。' },
                  { title: '研修参加費の補助', detail: '学会参加費・外部セミナー受講料の補助制度があります。年間の上限額内で複数回利用できます。' },
                  { title: '出張扱いでの学会参加', detail: '指定する学会への参加は出勤扱いとなり、交通費・宿泊費も病院が負担いたします。' },
                  { title: '院内図書・文献検索', detail: '各種医学雑誌や書籍を院内図書として整備しています。オンライン文献検索システムも利用可能です。' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {'\u2713'}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="mt-0.5 text-xs text-text-muted">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
