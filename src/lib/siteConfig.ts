export const siteConfig = {
  hospitalName: '化石総合病院',
  hospitalNameEn: 'Kaseki General Hospital',
  corporateName: '医療法人化石会',
  corporateNameEn: 'Medical Corporation Kasekikai',
  address: {
    zip: '540-0000',
    prefecture: '大阪府',
    city: '大阪市中央区',
    street: '化石町1丁目1番1号',
    full: '〒540-0000 大阪府大阪市中央区化石町1丁目1番1号',
  },
  phone: '06-XXXX-XXXX',
  email: 'info@kaseki-hospital.example.jp',
  hours: {
    morning: '9:00～12:00',
    afternoon: '13:00～17:00',
    closedDays: '土・日・祝日',
  },
  staff: {
    director: { name: '化石 太郎', role: '院長', department: '総合内科' },
    viceDirector: { name: '化石 花子', role: '副院長', department: '外科' },
    doctors: [
      { name: '化石 次郎', department: '内科', role: '内科部長' },
      { name: '化石 三郎', department: '外科', role: '外科部長' },
      { name: '化石 さくら', department: '小児科', role: '小児科部長' },
      { name: '化石 健一', department: '整形外科', role: '整形外科部長' },
      { name: '化石 美咲', department: 'リハビリテーション科', role: 'リハビリテーション科部長' },
    ],
  },
  relatedFacilities: [
    '化石リハビリテーション病院',
    '化石在宅支援病院',
    '化石クリニック',
    '医療法人化石会グループ',
  ],
  catchcopy: 'ここにキャッチコピーが入ります',
  slogan: 'ここにスローガンが入ります。',
  url: 'https://kaseki-hospital.example.jp',
} as const;

export const navigationItems = [
  {
    label: '外来',
    labelEn: 'Ambulatory',
    href: '/ambulatory',
    children: [
      { label: '外来診療科目', href: '/ambulatory/subject' },
      { label: '初診・再診の方へ', href: '/ambulatory/examination' },
    ],
  },
  {
    label: '入院',
    labelEn: 'Hospitalization',
    href: '/hospitalization',
    children: [
      { label: '入院手続き', href: '/hospitalization/procedure' },
      { label: '入院病棟紹介', href: '/hospitalization/ward' },
      { label: 'お見舞い・ご面会', href: '/hospitalization/meeting' },
      { label: '緩和ケア', href: '/hospitalization/palliative' },
    ],
  },
  {
    label: 'リハビリ',
    labelEn: 'Rehabilitation',
    href: '/rehabilitation',
    children: [
      { label: 'リハビリ部について', href: '/rehabilitation/approach' },
      { label: 'リハビリの種類', href: '/rehabilitation/type' },
      { label: 'リハビリ機器紹介', href: '/rehabilitation/facility' },
      { label: 'スタッフ教育', href: '/rehabilitation/staff' },
    ],
  },
  {
    label: '在宅サービス',
    labelEn: 'Home Care',
    href: '/service',
    children: [
      { label: '利用の手続き', href: '/service/step' },
      { label: 'デイケア', href: '/service/daycare' },
      { label: '訪問看護', href: '/service/nursing' },
      { label: '訪問介護', href: '/service/care' },
      { label: '訪問リハビリ', href: '/service/rehabilitation' },
      { label: '居宅介護支援', href: '/service/center' },
    ],
  },
  {
    label: '健診・人間ドック',
    labelEn: 'Check Up',
    href: '/check_up',
    children: [],
  },
  {
    label: '病院について',
    labelEn: 'About',
    href: '/about',
    children: [
      { label: 'ご挨拶', href: '/about/greeting' },
      { label: '病院理念', href: '/about/management' },
      { label: '基本方針', href: '/about/policy' },
      { label: '医師紹介', href: '/about/doctor' },
      { label: '病院概要', href: '/about/sakurajyuji' },
      { label: 'アクセスマップ', href: '/about/access' },
      { label: '患者さまの権利', href: '/about/patient' },
      { label: '個人情報保護', href: '/about/protection' },
      { label: '当院の取り組み', href: '/about/feature' },
    ],
  },
] as const;
