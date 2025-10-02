/**
 * プロジェクト・制作物設定ファイル
 * 
 * 🎯 使い方:
 * 1. 新しいプロジェクトを追加したい場合は、mainProjects または smallProjects 配列に追加してください
 * 2. 順番を変えたい場合は、配列の順序を変更してください
 * 3. 削除したい場合は、該当の行を削除してください
 * 4. リンクを変更したい場合は、link プロパティを編集してください
 * 
 * 💡 ヒント:
 * - gradient は Tailwind CSS のクラス名です
 * - link に '#' を入れると、クリックしても何も起こりません
 * - target を '_blank' にすると新しいタブで開きます
 */

export interface MainProject {
  /** プロジェクトタイトル */
  title: string;
  /** サブタイトル・概要 */
  subtitle: string;
  /** 詳細説明 */
  description: string;
  /** グラデーション（Tailwind CSS） */
  gradient: string;
  /** プロジェクトのリンク */
  link: string;
  /** 新しいタブで開くか */
  target?: '_blank' | '_self';
}

export interface SmallProject {
  /** プロジェクト名 */
  name: string;
  /** 使用技術 */
  tech: string;
  /** プロジェクトのリンク（オプション） */
  link?: string;
  /** 新しいタブで開くか */
  target?: '_blank' | '_self';
}

/**
 * メインプロジェクト（大きく表示される）
 * ここに主要な制作物を追加してください！
 */
export const mainProjects: MainProject[] = [
  {
    title: 'BlueArchive-API',
    subtitle: 'Blue Archiveの生徒情報を取得できる非公式API',
    description: 'このAPIを使用することで、Blue Archiveの生徒情報を簡単に取得できます。REST APIとして実装し、JSONで情報を提供しています。',
    gradient: 'from-emerald-500 to-teal-500',
    link: 'https://bluearchive-api.skyia.jp/',
    target: '_blank'
  },
  {
    title: 'Discord Bot',
    subtitle: 'サーバー管理用多機能Bot',
    description: 'Discord.jsを使用して開発した多機能Bot。モデレーション機能など様々な機能を実装。',
    gradient: 'from-blue-500 to-purple-500',
    link: '#', // リンクがない場合は '#' を使用
    target: '_self'
  }
];

/**
 * 小さなプロジェクト（コンパクト表示）
 * 学習用やちょっとした制作物はここに追加してください！
 */
export const smallProjects: SmallProject[] = [
  {
    name: 'ポートフォリオサイト',
    tech: 'Next.js + Tailwind CSS',
    link: '#',
    target: '_self'
  },
  {
    name: 'ToDoアプリ',
    tech: 'Go + HTML + CSS + Local Storage',
    link: '#',
    target: '_self'
  },

  // 新しいプロジェクトを追加する場合は、ここに追加！
  // {
  //   name: '新しいプロジェクト',
  //   tech: '使用技術',
  //   link: 'https://example.com',
  //   target: '_blank'
  // }
];

/**
 * 利用可能なグラデーション一覧（参考用）
 * mainProjects の gradient で使用できます
 */
export const availableGradients = [
  'from-emerald-500 to-teal-500',      // 緑系
  'from-blue-500 to-purple-500',       // 青紫系
  'from-pink-500 to-rose-500',         // ピンク系
  'from-orange-500 to-red-500',        // オレンジ赤系
  'from-indigo-500 to-purple-500',     // インディゴ紫系
  'from-cyan-500 to-blue-500',         // シアン青系
  'from-yellow-500 to-orange-500',     // 黄色オレンジ系
  'from-gray-600 to-gray-800',         // グレー系
] as const;

/**
 * 🚀 クイックスタートガイド:
 * 
 * 新しいメインプロジェクトを追加する場合:
 * 1. mainProjects 配列に新しいオブジェクトを追加
 *    例: {
 *          title: '新しいプロジェクト',
 *          subtitle: '概要説明',
 *          description: '詳細な説明文...',
 *          gradient: 'from-pink-500 to-rose-500',
 *          link: 'https://example.com',
 *          target: '_blank'
 *        }
 * 
 * 新しい小プロジェクトを追加する場合:
 * 1. smallProjects 配列に新しいオブジェクトを追加
 *    例: { name: 'プロジェクト名', tech: '使用技術', link: '#' }
 * 
 * リンクを無効にしたい場合:
 * 1. link プロパティを '#' に設定
 * 
 * 外部リンクを新しいタブで開きたい場合:
 * 1. target プロパティを '_blank' に設定
 */