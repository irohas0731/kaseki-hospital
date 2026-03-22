import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

export const metadata: Metadata = {
  title: 'アクセスマップ',
  description: `${siteConfig.hospitalName}へのアクセス方法をご案内します。電車・バス・お車でのアクセス、駐車場情報を掲載しています。`,
};

export default function AccessPage() {
  return (
    <>
      <PageHero title="アクセスマップ" enTitle="Access" />
      <Breadcrumb
        items={[
          { label: '病院について', href: '/about' },
          { label: 'アクセスマップ' },
        ]}
      />

      {/* 地図 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="flex h-[400px] w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-bg-off">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-4 text-sm font-bold text-text-muted">
                    ここに地図が入ります
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Google Maps 埋め込み
                  </p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 所在地情報 */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Address
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">所在地</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto max-w-3xl rounded-lg border border-border bg-bg p-8">
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-bold text-primary sm:w-24 shrink-0">
                    病院名
                  </dt>
                  <dd className="mt-1 sm:mt-0 text-sm text-text-light">
                    {siteConfig.hospitalName}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-bold text-primary sm:w-24 shrink-0">
                    所在地
                  </dt>
                  <dd className="mt-1 sm:mt-0 text-sm text-text-light">
                    {siteConfig.address.full}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-bold text-primary sm:w-24 shrink-0">
                    電話番号
                  </dt>
                  <dd className="mt-1 sm:mt-0 text-sm text-text-light">
                    {siteConfig.phone}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-bold text-primary sm:w-24 shrink-0">
                    診療時間
                  </dt>
                  <dd className="mt-1 sm:mt-0 text-sm text-text-light">
                    午前 {siteConfig.hours.morning} / 午後 {siteConfig.hours.afternoon}
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-sm font-bold text-primary sm:w-24 shrink-0">
                    休診日
                  </dt>
                  <dd className="mt-1 sm:mt-0 text-sm text-text-light">
                    {siteConfig.hours.closedDays}
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 交通アクセス */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mb-10 text-center">
              <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
                Transportation
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">交通アクセス</h2>
              <div className="mt-3 mx-auto h-0.5 w-12 bg-primary" />
            </div>
          </ScrollFadeIn>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* 電車 */}
            <ScrollFadeIn delay={100}>
              <div className="rounded-lg border border-border bg-bg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-bg">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19V5m0 0l-3 3m3-3l3 3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">電車でお越しの方</h3>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>地下鉄中央線</strong>「化石町駅」3番出口より徒歩約5分
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>JR環状線</strong>「大阪城公園駅」より徒歩約12分
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>京阪本線</strong>「天満橋駅」より徒歩約15分
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>

            {/* バス */}
            <ScrollFadeIn delay={200}>
              <div className="rounded-lg border border-border bg-bg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-bg">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h8m-8 4h4m-2 4h2M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">バスでお越しの方</h3>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>大阪シティバス</strong>「化石町」バス停より徒歩約2分
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      大阪駅前より62系統に乗車、「化石町」下車
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      天王寺駅前より85系統に乗車、「化石町」下車
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>

            {/* 車・駐車場 */}
            <ScrollFadeIn delay={300}>
              <div className="rounded-lg border border-border bg-bg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-bg">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">お車でお越しの方・駐車場</h3>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>阪神高速13号東大阪線</strong>「法円坂出口」より約5分
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      <strong>駐車場</strong>：病院敷地内に50台分の無料駐車場を完備しております
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      満車の場合は近隣のコインパーキングをご利用ください（駐車券の補助はございません）
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="bg-primary-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">
                アクセスに関するお問い合わせ
              </h2>
              <p className="mt-4 text-sm text-text-light max-w-2xl mx-auto">
                道順がわからない場合や送迎に関するご質問は、お気軽にお電話ください。
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
