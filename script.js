const LINE_URL = "https://lin.ee/ここにあなたのLINEリンク"; // ← 公式LINEのURLに変更

const types = {
  fox: {
    name: "白狐系守護霊",
    catch: "人の本音を見抜き、静かに縁を引き寄せる守護霊です。",
    personality: "あなたは空気の変化や相手の感情に敏感なタイプ。表では穏やかでも、内側ではかなり鋭く状況を読んでいます。人に合わせすぎて疲れやすい一方で、必要なときには不思議と助けが入る運の強さがあります。",
    love: "恋愛や人間関係では、相手の寂しさや弱さを拾いやすく、依存されやすい傾向があります。優しさを出しすぎると都合よく扱われるため、境界線を持つほど本命運が上がります。",
    time: "夕方〜夜",
    image: "images/fox-white.png",
    money: "人との縁からお金が入るタイプです。紹介、口コミ、相談、接客、発信など“信頼されること”が金運に直結します。ただし情で損をしやすいので、無料で尽くしすぎないことが大切です。",
    health: "人の感情を受けすぎると、睡眠や胃腸に出やすいタイプです。夜に考え込みすぎると消耗しやすいため、一人で静かに整える時間を作るほど回復します。"
  },
  dragon: {
    name: "龍神系守護霊",
    catch: "強い運気と突破力を持ち、人生の流れを大きく変える守護霊です。",
    personality: "あなたは停滞が苦手で、心の奥に大きく上がりたい欲があります。普段は抑えていても、スイッチが入ると一気に環境を変える力があります。水辺や雨の日に感覚が冴えやすいタイプです。",
    love: "恋愛では追われるより、尊敬できる相手に惹かれやすいです。ただし相手が弱すぎると一気に冷めます。あなたの運気を下げる相手といると、仕事やお金まで乱れやすくなります。",
    time: "雨の日・朝",
    image: "images/dragon-blue.png",
    money: "流れに乗った時の伸びが大きい金運です。独立、営業、発信、勝負ごとなど、自分から動くことで金運が開きます。停滞した環境に長くいるほど運が鈍りやすいです。",
    health: "勢いで無理を重ねやすく、疲労を自覚する前に限界を超えがちです。水分、睡眠、入浴など“水の気”を整える行動が回復の鍵になります。"
  },
  moon: {
    name: "月神系守護霊",
    catch: "夜に感情と直感が強まり、人の孤独に反応する守護霊です。",
    personality: "あなたは昼よりも夜に本音が出やすいタイプ。感受性が強く、言葉にされていない寂しさや違和感を拾います。孤独を抱えやすい反面、人の心を癒す力も強いです。",
    love: "恋愛では“わかってくれる人”に弱く、心を許すまで慎重です。一度深く入ると抜け出しにくいため、曖昧な関係には注意が必要です。",
    time: "深夜",
    image: "images/moon-goddess.png",
    money: "感性や共感力がお金に変わりやすいタイプです。文章、占い、癒し、相談、デザイン、世界観づくりと相性があります。気分に左右されるため、収入の仕組み化が金運安定の鍵です。",
    health: "月の満ち欠けのようにコンディションに波が出やすいタイプです。夜更かしや感情の溜め込みが不調につながりやすいので、睡眠リズムを守るほど整います。"
  },
  snake: {
    name: "黒蛇系守護霊",
    catch: "執着、再生、危険察知を司る、深い闇に強い守護霊です。",
    personality: "あなたは表向きは冷静でも、内側に強い執念と観察力を持っています。裏切りや違和感に敏感で、一度無理だと思った相手には心を閉ざします。人生で何度も生まれ変わるような転機を経験しやすいです。",
    love: "恋愛では深く結びつくほど力を発揮しますが、相手選びを間違えると執着に変わります。軽い相手や嘘が多い相手とは相性が悪いです。",
    time: "夜明け前",
    image: "images/snake-black.png",
    money: "一度狙ったものを掴む粘り強さが金運になります。投資、分析、裏方、専門性、継続型の収益と相性があります。ただし執着で判断が鈍ると一気に崩れやすいので、損切りの基準が大切です。",
    health: "ストレスを溜め込んでから一気に出やすいタイプです。首肩、目、血流、冷えに注意。定期的に感情を吐き出すことで、運気と体調が同時に戻りやすくなります。"
  },
  tengu: {
    name: "天狗系守護霊",
    catch: "孤高、誇り、見抜く力を持つ、山のように強い守護霊です。",
    personality: "あなたは人と群れるより、自分の美学を大切にするタイプ。プライドが高く見られやすいですが、実は傷つきやすさを隠しています。誰かに流されるより、一人で磨かれるほど魅力が出ます。",
    love: "恋愛では対等さを求めます。見下してくる相手や支配してくる相手とは一気に運気が落ちます。尊敬し合える関係でこそ長続きします。",
    time: "早朝",
    image: "images/tengu-red.png",
    money: "自分の技術や専門性を高めるほど強くなる金運です。人に媚びるより、実力や実績で選ばれる形が向いています。プライドが邪魔して頼れない時は、チャンスを逃しやすいです。",
    health: "緊張を抜くのが苦手で、肩・背中・呼吸に疲れが出やすいタイプです。山、自然、散歩、深呼吸など、身体を広げる習慣が守護を強めます。"
  },
  death: {
    name: "死神系守護霊",
    catch: "終わらせる力と、新しい運命を始める力を持つ守護霊です。",
    personality: "あなたは人よりも“終わりの気配”に敏感です。合わない場所、人間関係、古い自分を切り捨てるタイミングが来ると、急に心が冷めることがあります。破壊ではなく再スタートの力が強いタイプです。",
    love: "恋愛では腐れ縁を断つことが運命を開きます。終わった関係に戻るほど運気が重くなりやすいので、別れを怖がらないことが大切です。",
    time: "日没後",
    image: "images/death-reaper.png",
    money: "古い環境や合わない人間関係を切ることで金運が上がるタイプです。断捨離、転職、副業の方向転換など“終わらせる決断”が収入の流れを変えます。",
    health: "限界まで我慢して突然動けなくなることがあります。心身の不調は“何かを終わらせるサイン”として出やすいので、休むだけでなく生活の負担そのものを見直すことが大切です。"
  },
  angel: {
    name: "堕天使系守護霊",
    catch: "優しさと闇を同時に抱え、人を惹きつける守護霊です。",
    personality: "あなたは明るさと影のギャップが強いタイプ。人からは普通に見られていても、内側では強い孤独や反骨心を抱えています。傷ついた経験が魅力に変わりやすい人です。",
    love: "恋愛では救ってくれる人より、一緒に堕ちてくれる人に惹かれやすいです。刺激の強い相手に引っ張られると沼りやすいので注意が必要です。",
    time: "23時以降",
    image: "images/fallen-angel.png",
    money: "影や弱さを魅力に変えた時に金運が開くタイプです。表現、発信、美容、恋愛相談、夜職的な世界観、コンテンツ販売と相性があります。刺激に流される散財には注意です。",
    health: "気持ちが落ちた時に生活リズムが崩れやすいタイプです。睡眠、食事、部屋の明るさを整えるだけでも回復しやすくなります。孤独を抱え込まないことが大切です。"
  },
  nine: {
    name: "九尾系守護霊",
    catch: "魅力、変化、秘密を操り、人を惹き込む守護霊です。",
    personality: "あなたは見せる顔が一つではないタイプ。相手や場所によって自然に振る舞いを変えられます。ミステリアスに見られやすく、知らないうちに人の印象に残ります。",
    love: "恋愛では追うより追わせる方が本来の魅力が出ます。ただし本気になると急に不安定になりやすいので、余裕を失わないことが鍵です。",
    time: "満月の夜",
    image: "images/nine-tail-red.png",
    money: "魅せ方、演出、人気、言葉、見た目から金運が生まれるタイプです。SNS、販売、接客、企画、ブランド作りと相性抜群。飽きやすさを仕組みで補うと収益が伸びます。",
    health: "人に見せる顔を使い分ける分、無意識に疲れを溜めやすいタイプです。美容、香り、入浴、睡眠など、自分を甘やかす時間が運気回復になります。"
  }
};

const birthdayMap = ["fox", "dragon", "moon", "snake", "tengu", "death", "angel", "nine"];

const questions = [
  {
    text: "理由もなく、夜になると感情が強くなることがある。",
    answers: [
      { text: "かなりある", type: "moon" },
      { text: "たまにある", type: "angel" },
      { text: "感情より直感が冴える", type: "fox" },
      { text: "あまりない", type: "tengu" }
    ]
  },
  {
    text: "人混みに行くと、気疲れ以上の重さが残る。",
    answers: [
      { text: "すごく残る", type: "fox" },
      { text: "場所によって残る", type: "moon" },
      { text: "危ない人だけ強く感じる", type: "snake" },
      { text: "あまり気にしない", type: "dragon" }
    ]
  },
  {
    text: "恋愛で、なぜか相手の弱さや寂しさを拾ってしまう。",
    answers: [
      { text: "かなり当てはまる", type: "fox" },
      { text: "救いたくなる", type: "angel" },
      { text: "深く入りすぎる", type: "snake" },
      { text: "弱すぎる相手は苦手", type: "dragon" }
    ]
  },
  {
    text: "初対面でも『この人は危ない』と直感でわかることがある。",
    answers: [
      { text: "かなり当たる", type: "snake" },
      { text: "空気でわかる", type: "fox" },
      { text: "終わりの気配を感じる", type: "death" },
      { text: "そこまで考えない", type: "dragon" }
    ]
  },
  {
    text: "神社・水辺・月明かり・山の中なら、一番落ち着くのは？",
    answers: [
      { text: "神社", type: "fox" },
      { text: "水辺", type: "dragon" },
      { text: "月明かり", type: "moon" },
      { text: "山の中", type: "tengu" }
    ]
  },
  {
    text: "一度『無理』と思った相手に、また心を開くのは難しい。",
    answers: [
      { text: "ほぼ無理", type: "snake" },
      { text: "かなり時間がかかる", type: "tengu" },
      { text: "相手次第", type: "fox" },
      { text: "終わったら終わり", type: "death" }
    ]
  },
  {
    text: "自分には、誰にも見せていない別の顔があると思う。",
    answers: [
      { text: "かなりある", type: "nine" },
      { text: "闇の部分はある", type: "angel" },
      { text: "静かに隠している", type: "moon" },
      { text: "見せる必要がないだけ", type: "tengu" }
    ]
  },
  {
    text: "環境や人間関係を、一気に変えたくなる瞬間がある。",
    answers: [
      { text: "よくある", type: "dragon" },
      { text: "何もかも終わらせたくなる", type: "death" },
      { text: "別人のように変わりたくなる", type: "nine" },
      { text: "慎重に変える", type: "fox" }
    ]
  },
  {
    text: "恋愛で一番近いパターンは？",
    answers: [
      { text: "依存されやすい", type: "fox" },
      { text: "沼りやすい", type: "angel" },
      { text: "執着しやすい", type: "snake" },
      { text: "追うより追わせたい", type: "nine" }
    ]
  },
  {
    text: "お金に関して、一番近い感覚は？",
    answers: [
      { text: "人との縁から入ってくる", type: "fox" },
      { text: "勝負した時に大きく動く", type: "dragon" },
      { text: "感情で使ってしまう", type: "moon" },
      { text: "一点集中で増やしたい", type: "snake" }
    ]
  },
  {
    text: "体調やメンタルが崩れる時の原因に近いのは？",
    answers: [
      { text: "人の感情を受けすぎる", type: "fox" },
      { text: "無理して走りすぎる", type: "dragon" },
      { text: "夜に考えすぎる", type: "moon" },
      { text: "ストレスを溜め込みすぎる", type: "snake" }
    ]
  },
  {
    text: "あなたを守るために今一番必要なのは？",
    answers: [
      { text: "距離感", type: "fox" },
      { text: "誇り", type: "tengu" },
      { text: "決別", type: "death" },
      { text: "変化", type: "nine" }
    ]
  },
  {
    text: "過去の傷は、今の自分の魅力や強さになっていると思う。",
    answers: [
      { text: "かなり思う", type: "angel" },
      { text: "まだ途中", type: "death" },
      { text: "隠している", type: "nine" },
      { text: "強さに変えた", type: "tengu" }
    ]
  },
  {
    text: "人間関係で一番しんどいのは？",
    answers: [
      { text: "相手の感情を拾いすぎる", type: "fox" },
      { text: "支配される", type: "tengu" },
      { text: "嘘に気づいてしまう", type: "snake" },
      { text: "終わらせられない", type: "death" }
    ]
  },
  {
    text: "今のあなたが一番欲しいものは？",
    answers: [
      { text: "安心できる縁", type: "fox" },
      { text: "人生を変える流れ", type: "dragon" },
      { text: "本当の理解者", type: "moon" },
      { text: "過去を断ち切る力", type: "death" }
    ]
  }
];

let personName = "";
let birthDate = "";
let current = 0;
let scores = {};
Object.keys(types).forEach(key => scores[key] = 0);

const sections = {
  top: document.getElementById("top"),
  profile: document.getElementById("profile"),
  quiz: document.getElementById("quiz"),
  loading: document.getElementById("loading"),
  result: document.getElementById("result")
};

const startBtn = document.getElementById("start");
const profileNext = document.getElementById("profileNext");
const profileBack = document.getElementById("profileBack");
const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const questionCount = document.getElementById("questionCount");
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");

function showSection(name) {
  Object.values(sections).forEach(section => section.classList.remove("active"));
  sections[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getBirthdayType(dateString, nameString) {
  const raw = `${dateString}-${nameString}`;
  let sum = 0;
  for (let i = 0; i < raw.length; i++) {
    sum += raw.charCodeAt(i) * (i + 1);
  }
  return birthdayMap[sum % birthdayMap.length];
}

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.text;
  questionCount.textContent = `${current + 1} / ${questions.length}`;
  progressFill.style.width = `${(current / questions.length) * 100}%`;

  const labels = ["波長を確認中...", "生年月日を照合中...", "魂の癖を解析中...", "守護存在を特定中..."];
  progressLabel.textContent = labels[current % labels.length];

  answersEl.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer.type));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(type) {
  scores[type] += 1;
  current += 1;

  if (current < questions.length) {
    showQuestion();
  } else {
    progressFill.style.width = "100%";
    showLoading();
  }
}

function showLoading() {
  document.getElementById("loadingName").textContent = personName || "あなた";
  showSection("loading");

  const loadingMessages = [
    "名前と生年月日の波長を読み取っています",
    "回答から現在の守護状態を照合しています",
    "魂の系統と守護霊タイプを結びつけています",
    "診断結果を開示します"
  ];

  let i = 0;
  const loadingText = document.getElementById("loadingText");
  const timer = setInterval(() => {
    i++;
    if (i < loadingMessages.length) {
      loadingText.textContent = loadingMessages[i];
    } else {
      clearInterval(timer);
      showResult();
    }
  }, 700);
}

function getTopType() {
  const birthdayType = getBirthdayType(birthDate, personName);
  scores[birthdayType] += 2;

  let topType = "fox";
  let topScore = -1;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > topScore) {
      topType = type;
      topScore = score;
    }
  });

  return {
    topType,
    birthdayType
  };
}

function getSoulMixText(guardianType, soulType) {
  const guardian = types[guardianType].name.replace("守護霊", "");
  const soul = types[soulType].name.replace("守護霊", "");

  if (guardianType === soulType) {
    return `生まれ持つ魂の系統も、現在の守護霊も「${guardian}」です。本質と今の流れが一致しているため、このタイプの特徴がかなり強く出ています。良くも悪くもブレにくく、直感が当たりやすい時期です。`;
  }

  return `生まれ持つ魂の系統は「${soul}」ですが、現在強く出ている守護霊は「${guardian}」です。つまり、奥にある本質と、今表に出ている運気が少し違います。本来の性質を土台にしながら、今は「${guardian}」の力が前に出ている状態です。最近、考え方や人間関係に変化が起きているなら、この組み合わせの影響が出ている可能性があります。`;
}

function getShortTypeName(typeKey) {
  return types[typeKey].name
    .replace("系守護霊", "")
    .replace("守護霊", "")
    .replace("系", "");
}

function getComboName(guardianType, soulType) {
  const soul = getShortTypeName(soulType);
  const guardian = getShortTypeName(guardianType);
  return `${soul}魂 × ${guardian}守護`;
}

function showResult() {
  const resultData = getTopType();
  const result = types[resultData.topType];
  const soul = types[resultData.birthdayType];
  const comboName = getComboName(resultData.topType, resultData.birthdayType);

  document.getElementById("resultPersonName").textContent = personName || "あなた";
  document.getElementById("resultComboName").textContent = comboName;
  document.getElementById("resultNameSub").textContent = `守護霊：${result.name}`;
  document.getElementById("resultCatch").textContent = result.catch;
  document.getElementById("resultPersonality").textContent = result.personality;
  document.getElementById("resultLove").textContent = result.love;
  document.getElementById("resultSoulMix").textContent = getSoulMixText(resultData.topType, resultData.birthdayType);
  document.getElementById("resultMoney").textContent = result.money;
  document.getElementById("resultHealth").textContent = result.health;
  document.getElementById("soulLine").textContent = soul.name.replace("守護霊", "");
  document.getElementById("powerTime").textContent = result.time;

  const resultImage = document.getElementById("resultImage");
  resultImage.src = result.image;
  resultImage.alt = `${result.name}のイメージ画像`;

  document.getElementById("lineButton").href = LINE_URL;

  document.getElementById("shareButton").onclick = () => {
    const text = `${personName || "あなた"}さんは「${comboName}」でした。\n${result.catch}\nあなたも診断してみて。`;
    const url = location.href;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  showSection("result");
}

function resetQuiz() {
  personName = "";
  birthDate = "";
  current = 0;
  scores = {};
  Object.keys(types).forEach(key => scores[key] = 0);
  document.getElementById("personName").value = "";
  document.getElementById("birthDate").value = "";
  showSection("top");
}

startBtn.addEventListener("click", () => {
  showSection("profile");
});

profileBack.addEventListener("click", () => {
  showSection("top");
});

profileNext.addEventListener("click", () => {
  personName = document.getElementById("personName").value.trim();
  birthDate = document.getElementById("birthDate").value;

  if (!personName) {
    alert("名前・ニックネームを入力してください。");
    return;
  }

  if (!birthDate) {
    alert("生年月日を入力してください。");
    return;
  }

  current = 0;
  scores = {};
  Object.keys(types).forEach(key => scores[key] = 0);

  showSection("quiz");
  showQuestion();
});

document.getElementById("retryButton").addEventListener("click", resetQuiz);
