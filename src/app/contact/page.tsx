import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';
import ContactForm from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: `${siteConfig.hospitalName}へのお問い合わせページです。診療・入院・健診などに関するご質問やご相談は、お電話またはお問い合わせフォームよりお気軽にご連絡ください。`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="お問い合わせ" enTitle="Contact" />
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />

      {/* Phone / Email Info */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm leading-relaxed text-text-light md:text-base">
                {siteConfig.hospitalName}へのお問い合わせは、お電話またはメール、下記のお問い合わせフォームにて承っております。
                診療に関するご質問、入院・健診のご予約、その他ご不明な点がございましたら、お気軽にご連絡ください。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mt-10 grid gap-6 md:grid-cols-2 mx-auto max-w-3xl">
              {/* Phone */}
              <div className="rounded-lg border border-border bg-bg p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-bg">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold">お電話でのお問い合わせ</h3>
                <p className="mt-3 text-2xl font-bold text-primary">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  受付時間：{siteConfig.hours.morning} / {siteConfig.hours.afternoon}
                </p>
                <p className="text-xs text-text-muted">
                  （{siteConfig.hours.closedDays}を除く）
                </p>
              </div>

              {/* Email */}
              <div className="rounded-lg border border-border bg-bg p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-bg">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold">メールでのお問い合わせ</h3>
                <p className="mt-3 text-lg font-bold text-primary">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:opacity-80 transition-opacity break-all"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="mt-2 text-xs text-text-muted">
                  メールでのお問い合わせは24時間受け付けております。
                </p>
                <p className="text-xs text-text-muted">
                  ご返信までに2〜3営業日いただく場合がございます。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-bg-off py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-xl font-bold md:text-2xl">
                お問い合わせフォーム
              </h2>
              <div className="mt-4 mx-auto h-0.5 w-12 bg-primary" />
              <p className="mt-6 text-center text-sm text-text-light">
                以下のフォームに必要事項をご入力のうえ、送信ボタンをクリックしてください。
                <br />
                <span className="text-accent-red">*</span> のついた項目は必須入力です。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-bg p-6 md:p-10">
              <ContactForm />
            </div>
          </ScrollFadeIn>

          {/* Privacy Policy Note */}
          <ScrollFadeIn delay={300}>
            <div className="mx-auto mt-8 max-w-3xl">
              <div className="rounded-lg border border-border bg-bg p-6">
                <h3 className="text-sm font-bold">個人情報の取り扱いについて</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-light">
                  お問い合わせフォームにてご入力いただいた個人情報は、{siteConfig.hospitalName}の個人情報保護方針に基づき、お問い合わせへのご回答およびご連絡のためにのみ利用いたします。ご本人の同意なく第三者に提供することはございません。個人情報の取り扱いに関する詳細は、当院の「個人情報保護方針」をご覧ください。お問い合わせフォームの送信をもって、上記の個人情報の取り扱いに同意したものとみなします。
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
