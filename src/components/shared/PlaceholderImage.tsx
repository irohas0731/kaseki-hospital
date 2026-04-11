import Image from 'next/image';

/**
 * ダミー画像コンポーネント
 * 将来的に実画像に差し替える場合は、imagePathプロパティに実画像のパスを指定してください。
 */

const imageMap: Record<string, string> = {
  // 病院外観・施設
  '病院外観写真': '/images/hospital-exterior.jpg',
  '外来フロア写真': '/images/outpatient.jpg',
  '受付・待合室写真': '/images/corridor.jpg',
  '入院病棟の外観写真': '/images/hospital-ward.jpg',
  '健診センターの様子': '/images/medical-checkup.jpg',
  'リハビリテーション室の様子': '/images/rehabilitation.jpg',
  'リハビリテーション室全景': '/images/rehabilitation.jpg',
  'リハビリテーション室（全景）': '/images/rehabilitation.jpg',
  'ADL訓練室': '/images/hospital-room.jpg',
  '在宅サービスイメージ写真': '/images/consultation.jpg',
  '訪問看護イメージ写真': '/images/consultation.jpg',
  '訪問リハビリイメージ写真': '/images/rehabilitation.jpg',
  '居宅介護支援 相談風景イメージ': '/images/doctor-desk.jpg',
  '緩和ケアの温かみのあるイメージ写真': '/images/consultation.jpg',

  // 医師・スタッフ
  '院長 写真': '/images/doctor-male.jpg',
  '副院長 写真': '/images/doctor-female.jpg',
  'リハビリテーション科部長': '/images/doctor-male.jpg',
  'スタッフ研修の様子': '/images/staff-team.jpg',
  'キャリアパス図': '/images/staff-team.jpg',

  // サービスカード用
  '診療科目イメージ': '/images/doctor-stethoscope.jpg',
  '受付・待合イメージ': '/images/corridor.jpg',
  '訪問介護 身体介護イメージ': '/images/patient-care.jpg',
  '訪問介護 生活援助イメージ': '/images/consultation.jpg',
  'デイケア施設写真': '/images/hospital-room.jpg',
  'リハビリ風景写真': '/images/rehabilitation.jpg',
  '利用手続きフロー図': '/images/medical-checkup.jpg',
};

// カテゴリキーワードによるフォールバック
function getImageByKeyword(label: string): string {
  if (label.includes('外観') || label.includes('施設')) return '/images/hospital-exterior.jpg';
  if (label.includes('院長') || label.includes('副院長')) return '/images/doctor-male.jpg';
  if (label.includes('医師') || label.includes('写真') || label.includes('ドクター')) return '/images/doctor-stethoscope.jpg';
  if (label.includes('リハビリ') || label.includes('訓練')) return '/images/rehabilitation.jpg';
  if (label.includes('病棟') || label.includes('病室') || label.includes('入院')) return '/images/hospital-ward.jpg';
  if (label.includes('外来') || label.includes('受付') || label.includes('待合')) return '/images/corridor.jpg';
  if (label.includes('看護') || label.includes('訪問') || label.includes('介護') || label.includes('ケア')) return '/images/consultation.jpg';
  if (label.includes('検査') || label.includes('健診') || label.includes('検診')) return '/images/medical-checkup.jpg';
  if (label.includes('感染') || label.includes('安全') || label.includes('連携')) return '/images/staff-team.jpg';
  if (label.includes('スタッフ') || label.includes('チーム') || label.includes('研修')) return '/images/staff-team.jpg';
  if (label.includes('相談') || label.includes('支援')) return '/images/doctor-desk.jpg';
  return '/images/outpatient.jpg';
}

export default function PlaceholderImage({
  width,
  height,
  label,
  className = '',
}: {
  width: number;
  height: number;
  label: string;
  className?: string;
  colorIndex?: number;
}) {
  const src = imageMap[label] || getImageByKeyword(label);

  return (
    <Image
      src={src}
      alt={label}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
