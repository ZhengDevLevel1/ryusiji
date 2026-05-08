export interface Word {
  kanji: string;
  kana: string;
  meaning: string;
}

export const vocabulary: Word[] = [
  // 🕐 时间类
  { kanji: '朝', kana: 'あさ', meaning: '早晨、早上' },
  { kanji: '明日', kana: 'あした', meaning: '明天' },
  { kanji: '明後日', kana: 'あさって', meaning: '后天' },
  { kanji: '昨日', kana: 'きのう', meaning: '昨天' },
  { kanji: '一昨日', kana: 'おととい', meaning: '前天' },
  { kanji: '今日', kana: 'きょう', meaning: '今天' },
  { kanji: '今', kana: 'いま', meaning: '现在' },
  { kanji: '今朝', kana: 'けさ', meaning: '今天早上' },
  { kanji: '今晩', kana: 'こんばん', meaning: '今晚' },
  { kanji: '午後', kana: 'ごご', meaning: '下午' },
  { kanji: '午前', kana: 'ごぜん', meaning: '上午' },
  { kanji: '昼', kana: 'ひる', meaning: '中午' },
  { kanji: '夜', kana: 'よる', meaning: '夜晚' },
  { kanji: '夕方', kana: 'ゆうがた', meaning: '傍晚' },
  { kanji: '昨夜', kana: 'ゆうべ', meaning: '昨晚' },
  { kanji: '春', kana: 'はる', meaning: '春天' },
  { kanji: '夏', kana: 'なつ', meaning: '夏天' },
  { kanji: '秋', kana: 'あき', meaning: '秋天' },
  { kanji: '冬', kana: 'ふゆ', meaning: '冬天' },

  // 星期
  { kanji: '月曜日', kana: 'げつようび', meaning: '星期一' },
  { kanji: '火曜日', kana: 'かようび', meaning: '星期二' },
  { kanji: '水曜日', kana: 'すいようび', meaning: '星期三' },
  { kanji: '木曜日', kana: 'もくようび', meaning: '星期四' },
  { kanji: '金曜日', kana: 'きんようび', meaning: '星期五' },
  { kanji: '土曜日', kana: 'どようび', meaning: '星期六' },
  { kanji: '日曜日', kana: 'にちようび', meaning: '星期日' },

  // 📍 地点/场所类
  { kanji: '家', kana: 'うち', meaning: '房子、家庭' }, // Using うち as it's common for our reading
  { kanji: '学校', kana: 'がっこう', meaning: '学校' },
  { kanji: '大学', kana: 'だいがく', meaning: '大学' },
  { kanji: '教室', kana: 'きょうしつ', meaning: '教室' },
  { kanji: '図書館', kana: 'としょかん', meaning: '图书馆' },
  { kanji: '駅', kana: 'えき', meaning: '车站' },
  { kanji: '地下鉄', kana: 'ちかてつ', meaning: '地铁' },
  { kanji: '公園', kana: 'こうえん', meaning: '公园' },
  { kanji: '銀行', kana: 'ぎんこう', meaning: '银行' },
  { kanji: '病院', kana: 'びょういん', meaning: '医院' },
  { kanji: '映画館', kana: 'えいがかん', meaning: '电影院' },
  { kanji: '部屋', kana: 'へや', meaning: '房间' },

  // 👥 人物/称呼类
  { kanji: '私', kana: 'わたし', meaning: '我' },
  { kanji: '貴方', kana: 'あなた', meaning: '你' },
  { kanji: '彼', kana: 'かれ', meaning: '他' },
  { kanji: '彼女', kana: 'かのじょ', meaning: '她' },
  { kanji: '父', kana: 'ちち', meaning: '父亲(自称)' },
  { kanji: '母', kana: 'はは', meaning: '母亲(自称)' },
  { kanji: '友達', kana: 'ともだち', meaning: '朋友' },
  { kanji: '家族', kana: 'かぞく', meaning: '家人' },
  { kanji: '先生', kana: 'せんせい', meaning: '老师' },
  { kanji: '学生', kana: 'がくせい', meaning: '学生' },
  { kanji: '医者', kana: 'いしゃ', meaning: '医生' },
  { kanji: '誰', kana: 'だれ', meaning: '谁' },

  // 🍜 食物/饮料类
  { kanji: '朝御飯', kana: 'あさごはん', meaning: '早餐' },
  { kanji: '昼御飯', kana: 'ひるごはん', meaning: '午餐' },
  { kanji: '晩御飯', kana: 'ばんごはん', meaning: '晚餐' },
  { kanji: '御飯', kana: 'ごはん', meaning: '米饭' },
  { kanji: '卵', kana: 'たまご', meaning: '鸡蛋' },
  { kanji: '魚', kana: 'さかな', meaning: '鱼' },
  { kanji: '肉', kana: 'にく', meaning: '肉' },
  { kanji: '野菜', kana: 'やさい', meaning: '蔬菜' },
  { kanji: '果物', kana: 'くだもの', meaning: '水果' },
  { kanji: 'お茶', kana: 'おちゃ', meaning: '茶' },
  { kanji: '水', kana: 'みず', meaning: '水' },
  { kanji: '料理', kana: 'りょうり', meaning: '菜肴' },

  // 🎨 颜色类
  { kanji: '青', kana: 'あお', meaning: '蓝色' },
  { kanji: '赤', kana: 'あか', meaning: '红色' },
  { kanji: '黄色', kana: 'きいろ', meaning: '黄色' },
  { kanji: '黒', kana: 'くろ', meaning: '黑色' },
  { kanji: '白', kana: 'しろ', meaning: '白色' },
  { kanji: '緑', kana: 'みどり', meaning: '绿色' },
  { kanji: '色', kana: 'いろ', meaning: '颜色' },

  // 动物类
  { kanji: '犬', kana: 'いぬ', meaning: '狗' },
  { kanji: '猫', kana: 'ねこ', meaning: '猫' },
  { kanji: '鳥', kana: 'とり', meaning: '鸟' },
  { kanji: '動物', kana: 'どうぶつ', meaning: '动物' },

  // 动词
  { kanji: '来る', kana: 'くる', meaning: '来' },
  { kanji: '起きる', kana: 'おきる', meaning: '起来、起床' },
  { kanji: '食べる', kana: 'たべる', meaning: '吃' },
  { kanji: '見る', kana: 'みる', meaning: '看见、体验' },
  { kanji: '寝る', kana: 'ねる', meaning: '睡觉' },
  { kanji: '行く', kana: 'いく', meaning: '去' },
  { kanji: '飲む', kana: 'のむ', meaning: '喝' },
  { kanji: '走る', kana: 'はしる', meaning: '跑' },
  { kanji: '話す', kana: 'はなす', meaning: '讲、告诉' },
  { kanji: '読む', kana: 'よむ', meaning: '看、阅读' },
  { kanji: '買う', kana: 'かう', meaning: '买' },

  // 形容词
  { kanji: '大きい', kana: 'おおきい', meaning: '大的' },
  { kanji: '小さい', kana: 'ちいさい', meaning: '小的' },
  { kanji: '高い', kana: 'たかい', meaning: '高的、贵的' },
  { kanji: '安い', kana: 'やすい', meaning: '便宜的' },
  { kanji: '新しい', kana: 'あたらしい', meaning: '新的' },
  { kanji: '古い', kana: 'ふるい', meaning: '旧的' },
  { kanji: '良い', kana: 'いい', meaning: '好的' },
  { kanji: '悪い', kana: 'わるい', meaning: '坏的' },
  { kanji: '美しい', kana: 'うつくしい', meaning: '美丽的' }, // Added to have more adjs
  { kanji: '美味しい', kana: 'おいしい', meaning: '好吃的' },
];

export const allKana = [
  'あ', 'い', 'う', 'え', 'お',
  'か', 'き', 'く', 'け', 'こ',
  'さ', 'し', 'す', 'せ', 'そ',
  'た', 'ち', 'つ', 'て', 'と',
  'な', 'に', 'ぬ', 'ね', 'の',
  'は', 'ひ', 'ふ', 'へ', 'ほ',
  'ま', 'み', 'む', 'め', 'も',
  'や', 'ゆ', 'よ',
  'ら', 'り', 'る', 'れ', 'ろ',
  'わ', 'を', 'ん',
  'が', 'ぎ', 'ぐ', 'げ', 'ご',
  'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
  'だ', 'ぢ', 'づ', 'で', 'ど',
  'ば', 'び', 'ぶ', 'べ', 'ぼ',
  'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
  'きゃ', 'きゅ', 'きょ',
  'しゃ', 'しゅ', 'しょ',
  'ちゃ', 'ちゅ', 'ちょ',
  'にゃ', 'にゅ', 'にょ',
  'ひゃ', 'ひゅ', 'ひょ',
  'みゃ', 'みゅ', 'みょ',
  'りゃ', 'りゅ', 'りょ',
  'ぎゃ', 'ぎゅ', 'ぎょ',
  'じゃ', 'じゅ', 'じょ',
  'びゃ', 'びゅ', 'びょ',
  'ぴゃ', 'ぴゅ', 'ぴょ'
];

export function getRandomDisclaimerKana(targetKana: string, count: number): string[] {
  // Extract complex characters first (e.g. きゃ, しゅ) so they are kept together
  let extractedTargetChars: string[] = [];
  let i = 0;
  while (i < targetKana.length) {
    if (i < targetKana.length - 1 && ['ゃ', 'ゅ', 'ょ'].includes(targetKana[i + 1])) {
      extractedTargetChars.push(targetKana.substring(i, i + 2));
      i += 2;
    } else if (i < targetKana.length - 1 && targetKana[i] === 'っ') {
      extractedTargetChars.push(targetKana.substring(i, i + 2));
      i += 2;
    } else {
      extractedTargetChars.push(targetKana[i]);
      i += 1;
    }
  }

  const pool = new Set([...extractedTargetChars]);
  
  while (pool.size < count) {
    const randomKana = allKana[Math.floor(Math.random() * allKana.length)];
    pool.add(randomKana);
  }

  return Array.from(pool).sort(() => Math.random() - 0.5);
}

export function splitKana(wordKana: string): string[] {
  let result: string[] = [];
  let i = 0;
  while(i < wordKana.length) {
    if (i < wordKana.length - 1 && ['ゃ', 'ゅ', 'ょ'].includes(wordKana[i+1])) {
      result.push(wordKana.substring(i, i+2));
      i += 2;
    } else if (i < wordKana.length - 1 && wordKana[i] === 'っ') {
      result.push(wordKana.substring(i, i+2)); // treat small tsu + next char as one? Or just small tsu. Let's just treat small tsu as a separate character for complexity, or keep it simple. Actually, let's treat small tsu as a separate choice but users have to click it.
      i += 2; 
    }
     else {
      result.push(wordKana[i]);
      i += 1;
    }
  }
  
  // Re-evaluating small tsu (促音) and small kana:
  // It's easier if small tsu 'っ' is just its own button, and 'ゃ' is its own button OR tied to the character before it.
  // Standard way: 'きゃ' is one button, 'っ' is one button.
  let correctedResult: string[] = [];
  let j = 0;
  while(j < wordKana.length) {
    if (j < wordKana.length - 1 && ['ゃ', 'ゅ', 'ょ'].includes(wordKana[j+1])) {
      correctedResult.push(wordKana.substring(j, j+2));
      j += 2;
    } else {
      correctedResult.push(wordKana[j]);
      j++;
    }
  }
  
  return correctedResult;
}
