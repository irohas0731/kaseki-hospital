'use client';

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">
            お名前 <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="化石 太郎"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            フリガナ <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="カセキ タロウ"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">
            電話番号
          </label>
          <input
            type="tel"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="06-XXXX-XXXX"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            メールアドレス <span className="text-accent-red">*</span>
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          お問い合わせ種別 <span className="text-accent-red">*</span>
        </label>
        <select className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="">選択してください</option>
          <option value="general">一般的なお問い合わせ</option>
          <option value="ambulatory">外来に関するお問い合わせ</option>
          <option value="hospitalization">入院に関するお問い合わせ</option>
          <option value="rehabilitation">リハビリに関するお問い合わせ</option>
          <option value="checkup">健診・人間ドックに関するお問い合わせ</option>
          <option value="recruit">採用に関するお問い合わせ</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          お問い合わせ内容 <span className="text-accent-red">*</span>
        </label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="お問い合わせ内容をご入力ください"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="rounded-lg bg-primary px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
        >
          送信する
        </button>
      </div>
    </form>
  );
}
