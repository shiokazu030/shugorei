const LINE_URL = "https://lin.ee/ここにあなたのLINEリンク"; // ← 公式LINEのURLに変更

const types = {
  fox: {
    name: "白狐系守護霊",
    catch: "人の本音を見抜き、静かに縁を引き寄せる守護霊です。",
    personality: "この人は空気の変化や相手の感情に敏感なタイプ。表では穏やかでも、内側ではかなり鋭く状況を読んでいます。人に合わせすぎて疲れやすい一方で、必要なときには不思議と助けが入る運の強さがあります。",
    love: "恋愛や人間関係では、相手の寂しさや弱さを拾いやすく、依存されやすい傾向があります。優しさを出しすぎると都合よく扱われるため、境界線を持つほど本命運が上がります。",
    time: "夕方〜夜",
  },
  dragon: {
    name: "龍神系守護霊",
    catch: "強い運気と突破力を持ち、人生の流れを大きく変える守護霊です。",
    personality: "この人は停滞が苦手で、心の奥に大きく上がりたい欲があります。普段は抑えていても、スイッチが入ると一気に環境を変える力があります。水辺や雨の日に感覚が冴えやすいタイプです。",
    love: "恋愛では追われるより、尊敬できる相手に惹かれやすいです。ただし相手が弱すぎると一気に冷めます。この人の運気を下げる相手といると、仕事やお金まで乱れやすくなります。",
    time: "雨の日・朝",
  },
  moon: {
    name: "月神系守護霊",
    catch: "夜に感情と直感が強まり、人の孤独に反応する守護霊です。",
    personality: "この人は昼よりも夜に本音が出やすいタイプ。感受性が強く、言葉にされていない寂しさや違和感を拾います。孤独を抱えやすい反面、人の心を癒す力も強いです。",
    love: "恋愛では“わかってくれる人”に弱く、心を許すまで慎重です。一度深く入ると抜け出しにくいため、曖昧な関係には注意が必要です。",
    time: "深夜",
  },
  snake: {
    name: "黒蛇系守護霊",
    catch: "執着、再生、危険察知を司る、深い闇に強い守護霊です。",
    personality: "この人は表向きは冷静でも、内側に強い執念と観察力を持っています。裏切りや違和感に敏感で、一度無理だと思った相手には心を閉ざします。人生で何度も生まれ変わるような転機を経験しやすいです。",
    love: "恋愛では深く結びつくほど力を発揮しますが、相手選びを間違えると執着に変わります。軽い相手や嘘が多い相手とは相性が悪いです。",
    time: "夜明け前",
  },
  tengu: {
    name: "天狗系守護霊",
    catch: "孤高、誇り、見抜く力を持つ、山のように強い守護霊です。",
    personality: "この人は人と群れるより、自分の美学を大切にするタイプ。プライドが高く見られやすいですが、実は傷つきやすさを隠しています。誰かに流されるより、一人で磨かれるほど魅力が出ます。",
    love: "恋愛では対等さを求めます。見下してくる相手や支配してくる相手とは一気に運気が落ちます。尊敬し合える関係でこそ長続きします。",
    time: "早朝",
  },
  death: {
    name: "死神系守護霊",
    catch: "終わらせる力と、新しい運命を始める力を持つ守護霊です。",
    personality: "この人は人よりも“終わりの気配”に敏感です。合わない場所、人間関係、古い自分を切り捨てるタイミングが来ると、急に心が冷めることがあります。破壊ではなく再スタートの力が強いタイプです。",
    love: "恋愛では腐れ縁を断つことが運命を開きます。終わった関係に戻るほど運気が重くなりやすいので、別れを怖がらないことが大切です。",
    time: "日没後",
  },
  angel: {
    name: "堕天使系守護霊",
    catch: "優しさと闇を同時に抱え、人を惹きつける守護霊です。",
    personality: "この人は明るさと影のギャップが強いタイプ。人からは普通に見られていても、内側では強い孤独や反骨心を抱えています。傷ついた経験が魅力に変わりやすい人です。",
    love: "恋愛では救ってくれる人より、一緒に堕ちてくれる人に惹かれやすいです。刺激の強い相手に引っ張られると沼りやすいので注意が必要です。",
    time: "23時以降",
  },
  nine: {
    name: "九尾系守護霊",
    catch: "魅力、変化、秘密を操り、人を惹き込む守護霊です。",
    personality: "この人は見せる顔が一つではないタイプ。相手や場所によって自然に振る舞いを変えられます。ミステリアスに見られやすく、知らないうちに人の印象に残ります。",
    love: "恋愛では追うより追わせる方が本来の魅力が出ます。ただし本気になると急に不安定になりやすいので、余裕を失わないことが鍵です。",
    time: "満月の夜",
  }
};

const birthdayMap = ["fox", "dragon", "moon", "snake", "tengu", "death", "angel", "nine"];

const questions = [
  {
    text: "その人は、周りに見せている顔と本音に差がありそう？",
    answers: [
      { text: "かなりありそう", type: "nine" },
      { text: "少しありそう", type: "angel" },
      { text: "あまりなさそう", type: "dragon" },
      { text: "本音を見せる相手を選びそう", type: "fox" }
    ]
  },
  {
    text: "その人の恋愛は、どれに近そう？",
    answers: [
      { text: "依存されやすい", type: "fox" },
      { text: "沼りやすい", type: "angel" },
      { text: "執着が強そう", type: "snake" },
      { text: "追わせる側っぽい", type: "nine" }
    ]
  },
  {
    text: "その人から感じる雰囲気は？",
    answers: [
      { text: "静かに見抜く感じ", type: "fox" },
      { text: "強運で上がっていく感じ", type: "dragon" },
      { text: "夜に深くなる感じ", type: "moon" },
      { text: "近づくと危ない感じ", type: "snake" }
    ]
  },
  {
    text: "その人は一度嫌いになった相手に、また心を開けそう？",
    answers: [
      { text: "ほぼ無理そう", type: "snake" },
      { text: "時間がかかりそう", type: "tengu" },
      { text: "相手次第", type: "fox" },
      { text: "終わったら終わり", type: "death" }
    ]
  },
  {
    text: "その人が一番強くなるのはどんな時？",
    answers: [
      { text: "一人で集中している時", type: "tengu" },
      { text: "環境を変える時", type: "dragon" },
      { text: "誰かを想っている時", type: "moon" },
      { text: "過去を断ち切る時", type: "death" }
    ]
  },
  {
    text: "その人が人を惹きつける理由は？",
    answers: [
      { text: "優しさと察する力", type: "fox" },
      { text: "影のある魅力", type: "angel" },
      { text: "ミステリアスさ", type: "nine" },
      { text: "誇りと芯の強さ", type: "tengu" }
    ]
  },
  {
    text: "その人に近づくと危険そうな相手は？",
    answers: [
      { text: "嘘が多い人", type: "snake" },
      { text: "支配してくる人", type: "tengu" },
      { text: "曖昧な関係を続ける人", type: "moon" },
      { text: "依存してくる人", type: "fox" }
    ]
  },
  {
    text: "最後に、その人に一番似合う言葉は？",
    answers: [
      { text: "導き", type: "fox" },
      { text: "上昇", type: "dragon" },
      { text: "孤独", type: "moon" },
      { text: "再生", type: "death" }
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
  document.getElementById("loadingName").textContent = personName || "その人";
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
  scores[birthdayType] += 2; // 生年月日の“魂の系統”として加点

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

function showResult() {
  const resultData = getTopType();
  const result = types[resultData.topType];
  const soul = types[resultData.birthdayType];

  document.getElementById("resultPersonName").textContent = personName || "この人";
  document.getElementById("resultName").textContent = result.name;
  document.getElementById("resultCatch").textContent = result.catch;
  document.getElementById("resultPersonality").textContent = result.personality;
  document.getElementById("resultLove").textContent = result.love;
  document.getElementById("soulLine").textContent = soul.name.replace("守護霊", "");
  document.getElementById("powerTime").textContent = result.time;

  document.getElementById("lineButton").href = LINE_URL;

  document.getElementById("shareButton").onclick = () => {
    const text = `${personName || "この人"}さんの守護霊は「${result.name}」でした。\n${result.catch}\nあなたも診断してみて。`;
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
