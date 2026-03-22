import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import PlaceholderImage from '@/components/shared/PlaceholderImage';

export const metadata: Metadata = {
  title: 'リハビリ部について',
  description: `${siteConfig.hospitalName}リハビリテーション部の理念・目標・スタッフ体制についてご紹介します。多職種が連携し、患者さま一人ひとりに最適なリハビリテーションを提供しています。`,
};

const staffComposition = [
  { role: '理学療法士（PT）', count: '15名', description: '運動機能の回復・改善を専門とし、歩行訓練や筋力強化、関節可動域の改善を担当します。' },
  { role: '作業療法士（OT）', count: '10名', description: '日常生活動作の改善や社会復帰を目指し、食事・着替え・入浴などの生活行為の訓練を行います。' },
  { role: '言語聴覚士（ST）', count: '5名', description: '言語障害や嚥下障害のある方に対して、コミュニケーション能力の改善や安全な食事のための訓練を行います。' },
  { role: 'リハビリ助手', count: '3名', description: '療法士の指示のもと、訓練の準備やリハビリ室の環境整備などをサポートします。' },
];

const goals = [
  {
    title: '早期離床・早期介入',
    description: '発症や手術直後から可能な限り早い段階でリハビリテーションを開始し、廃用症候群の予防と早期の機能回復を図ります。ICUや病棟へ出向いてのベッドサイドリハビリにも対応しています。',
  },
  {
    title: '患者さま中心のゴール設定',
    description: '画一的なプログラムではなく、患者さまご本人やご家族の希望を丁寧にお伺いし、退院後の生活を見据えた具体的な目標を一緒に設定します。定期的にカンファレンスを開催し、目標の達成度を確認しながら計画を見直します。',
  },
  {
    title: '多職種チームアプローチ',
    description: 'リハビリスタッフだけでなく、主治医・看護師・医療ソーシャルワーカー・管理栄養士など多職種が連携し、総合的な視点で患者さまの回復を支援します。週に1回のチームカンファレンスで情報を共有しています。',
  },
  {
    title: '切れ目のないリハビリ提供',
    description: '急性期から回復期、そして在宅復帰後まで、途切れることなくリハビリテーションを受けられる体制を構築しています。訪問リハビリや通所リハビリへのスムーズな移行を支援いたします。',
  },
];

export default function RehabApproachPage() {
  return (
    <>
      <PageHero title="リハビリ部について" enTitle="About Rehabilitation" />
      <Breadcrumb
        items={[
          { label: 'リハビリテーション', href: '/rehabilitation' },
          { label: 'リハビリ部について' },
        ]}
      />

      {/* Philosophy */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold md:text-3xl">部門理念</h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 rounded-lg border border-border bg-primary-bg p-8 md:p-12">
              <blockquote className="mx-auto max-w-2xl text-center">
                <p className="text-lg font-bold leading-relaxed md:text-xl">
                  「患者さまの生きがいと笑顔を支えるリハビリテーション」
                </p>
                <p className="mt-6 text-sm leading-relaxed text-text-light">
                  私たちリハビリテーション部は、患者さまが病気やけがによって失われた身体機能や生活能力を取り戻し、再びその人らしい生活を送れるようお手伝いすることを使命としています。医学的根拠に基づいた質の高いリハビリテーションを提供するとともに、患者さまに寄り添い、ともに歩む姿勢を大切にしています。
                </p>
              </blockquote>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Department Head Message */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">リハビリテーション科部長あいさつ</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="w-48 shrink-0">
                <PlaceholderImage
                  width={300}
                  height={400}
                  label="リハビリテーション科部長"
                  className="w-full rounded-lg"
                  colorIndex={1}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-primary">リハビリテーション科部長</p>
                <p className="mt-1 text-xl font-bold">{siteConfig.staff.doctors[4].name}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-light">
                  {siteConfig.hospitalName}リハビリテーション部のホームページをご覧いただき、ありがとうございます。当部門では「患者さま一人ひとりに最善のリハビリテーションを」という信念のもと、30名を超える専門スタッフが日々研鑽を積んでおります。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-light">
                  脳卒中や骨折、心臓手術後のリハビリテーションから、誤嚥性肺炎予防のための嚥下訓練まで、幅広い疾患に対応しています。急性期病院としての強みを活かし、発症早期からの介入によって患者さまの早期回復・早期退院を実現しています。
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-light">
                  また、退院後の生活を見据えた家屋調査や福祉用具の選定、ご家族への介助指導など、在宅復帰に向けた支援にも力を入れています。地域の医療機関や介護施設との連携を大切にし、患者さまが安心して地域で暮らし続けられるよう、これからもスタッフ一同努めてまいります。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Staff Composition */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">スタッフ構成</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
            <p className="mt-4 text-center text-sm text-text-muted">
              経験豊富な専門スタッフがチームとなって患者さまの回復をサポートいたします
            </p>
          </ScrollFadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {staffComposition.map((staff, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-bold">{staff.role}</h3>
                    <span className="text-lg font-bold text-primary">{staff.count}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">{staff.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
          <ScrollFadeIn delay={400}>
            <p className="mt-6 text-center text-xs text-text-muted">
              ※ スタッフ数は2026年4月時点の予定人数です。
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">リハビリテーション部の目標</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <div className="mt-10 space-y-6">
            {goals.map((goal, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="rounded-lg border border-border bg-bg p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold md:text-lg">{goal.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-light">{goal.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <h2 className="text-center text-xl font-bold md:text-2xl">リハビリテーション室のご紹介</h2>
            <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <PlaceholderImage
                  width={600}
                  height={400}
                  label="リハビリテーション室（全景）"
                  className="w-full rounded-lg"
                  colorIndex={2}
                />
                <p className="mt-2 text-center text-xs text-text-muted">広々としたリハビリテーション室</p>
              </div>
              <div>
                <PlaceholderImage
                  width={600}
                  height={400}
                  label="ADL訓練室"
                  className="w-full rounded-lg"
                  colorIndex={3}
                />
                <p className="mt-2 text-center text-xs text-text-muted">日常生活動作の訓練を行うADL訓練室</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
