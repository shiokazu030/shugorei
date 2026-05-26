const LINE_URL = "https://lin.ee/ここにあなたのLINEリンク"; // ← あとで自分の公式LINE URLに変更

const types = {
  fox: {
    name: "白狐系守護霊",
    catch: "人の本音を見抜き、静かに縁を引き寄せる守護霊です。",
    personality: "あなたは空気の変化や相手の感情に敏感なタイプ。表では穏やかでも、内側ではかなり鋭く状況を読んでいます。人に合わせすぎて疲れやすい一方で、必要なときには不思議と助けが入る運の強さがあります。",
    love: "恋愛では相手の寂しさや弱さを拾いやすく、依存されやすい傾向があります。優しさを出しすぎると都合よく扱われるため、境界線を持つほど本命運が上がります。"
  },
  dragon: {
    name: "龍神系守護霊",
    catch: "強い運気と突破力を持ち、人生の流れを大きく変える守護霊です。",
    personality: "あなたは停滞が苦手で、心の奥に大きく上がりたい欲があります。普段は抑えていても、スイッチが入ると一気に環境を変える力があります。水辺や雨の日に感覚が冴えやすいタイプです。",
    love: "恋愛では追われるより、尊敬できる相手に惹かれやすいです。ただし相手が弱すぎると一気に冷めます。あなたの運気を下げる人といると、仕事やお金まで乱れやすくなります。"
  },
  moon: {
    name: "月神系守護霊",
    catch: "夜に感情と直感が強まり、人の孤独に反応する守護霊です。",
    personality: "あなたは昼よりも夜に本音が出やすいタイプ。感受性が強く、言葉にされていない寂しさや違和感を拾います。孤独を抱えやすい反面、人の心を癒す力も強いです。",
    love: "恋愛では“わかってくれる人”に弱く、心を許すまで慎重です。一度深く入ると抜け出しにくいため、曖昧な関係には注意が必要です。"
  },
  snake: {
    name: "黒蛇系守護霊",
    catch: "執着、再生、危険察知を司る、深い闇に強い守護霊です。",
    personality: "あなたは表向きは冷静でも、内側に強い執念と観察力を持っています。裏切りや違和感に敏感で、一度無理だと思った相手には心を閉ざします。人生で何度も生まれ変わるような転機を経験しやすいです。",
    love: "恋愛では深く結びつくほど力を発揮しますが、相手選びを間違えると執着に変わります。軽い相手や嘘が多い相手とは相性が悪いです。"
  },
  tengu: {
    name: "天狗系守護霊",
    catch: "孤高、誇り、見抜く力を持つ、山のように強い守護霊です。",
    personality: "あなたは人と群れるより、自分の美学を大切にするタイプ。プライドが高く見られやすいですが、実は傷つきやすさを隠しています。誰かに流されるより、一人で磨かれるほど魅力が出ます。",
    love: "恋愛では対等さを求めます。見下してくる相手や支配してくる相手とは一気に運気が落ちます。尊敬し合える関係でこそ長続きします。"
  },
  death: {
    name: "死神系守護霊",
    catch: "終わらせる力と、新しい運命を始める力を持つ守護霊です。",
    personality: "あなたは人よりも“終わりの気配”に敏感です。合わない場所、人間関係、古い自分を切り捨てるタイミングが来ると、急に心が冷めることがあります。破壊ではなく再スタートの力が強いタイプです。",
    love: "恋愛では腐れ縁を断つことが運命を開きます。終わった関係に戻るほど運気が重くなりやすいので、別れを怖がらないことが大切です。"
  },
  angel: {
    name: "堕天使系守護霊",
    catch: "優しさと闇を同時に抱え、人を惹きつける守護霊です。",
    personality: "あなたは明るさと影のギャップが強いタイプ。人からは普通に見られていても、内側では強い孤独や反骨心を抱えています。傷ついた経験が魅力に変わりやすい人です。",
    love: "恋愛では救ってくれる人より、一緒に堕ちてくれる人に惹かれやすいです。刺激の強い相手に引っ張られると沼りやすいので注意が必要です。"
  },
  nine: {
    name: "九尾系守護霊",
    catch: "魅力、変化、秘密を操り、人を惹き込む守護霊です。",
    personality: "あなたは見せる顔が一つではないタイプ。相手や場所によって自然に振る舞いを変えられます。ミステリアスに見られやすく、知らないうちに人の印象に残ります。",
    love: "恋愛では追うより追わせる方が本来の魅力が出ます。ただし本気になると急に不安定になりやすいので、余裕を失わないことが鍵です。"
  }
};

const questions = [
  {
    text: "理由もなく、夜になると感情が強くなることがある。",
    answers: [
      { text: "かなりある", type: "moon" },
      { text: "たまにある", type: "angel" },
      { text: "あまりない", type: "tengu" },
      { text: "むしろ昼の方が強い", type: "dragon" }
    ]
  },
  {
    text: "人混みに行くと、気疲れ以上の重さが残る。",
    answers: [
      { text: "すごく残る", type: "fox" },
      { text: "場所による", type: "moon" },
      { text: "あまり気にしない", type: "dragon" },
      { text: "人によっては鋭く疲れる", type: "snake" }
    ]
  },
  {
    text: "恋愛で、なぜか相手の弱さを背負ってしまう。",
    answers: [
      { text: "かなり当てはまる", type: "fox" },
      { text: "救いたくなる", type: "angel" },
      { text: "背負う前に離れる", type: "death" },
      { text: "弱すぎる相手は無理", type: "dragon" }
    ]
  },
  {
    text: "直感で『この人は危ない』と感じることがある。",
    answers: [
      { text: "かなり当たる", type: "snake" },
      { text: "空気でわかる", type: "fox" },
      { text: "終わりの気配を感じる", type: "death" },
      { text: "あまり考えない", type: "dragon" }
    ]
  },
  {
    text: "神社・水辺・月明かりの中で落ち着く場所は？",
    answers: [
      { text: "神社", type: "fox" },
      { text: "水辺", type: "dragon" },
      { text: "月明かり", type: "moon" },
      { text: "人気のない場所", type: "death" }
    ]
  },
  {
    text: "一度嫌いになった相手に、また心を開ける？",
    answers: [
      { text: "ほぼ無理", type: "snake" },
      { text: "時間がかかる", type: "tengu" },
      { text: "相手次第", type: "fox" },
      { text: "終わったら終わり", type: "death" }
    ]
  },
  {
    text: "人から『ミステリアス』と言われたことがある。",
    answers: [
      { text: "よくある", type: "nine" },
      { text: "たまにある", type: "angel" },
      { text: "近いことは言われる", type: "moon" },
      { text: "あまりない", type: "dragon" }
    ]
  },
  {
    text: "自分の中に、誰にも見せていない闇があると思う。",
    answers: [
      { text: "かなりある", type: "angel" },
      { text: "静かな闇がある", type: "moon" },
      { text: "執着としてある", type: "snake" },
      { text: "闇より誇りが強い", type: "tengu" }
    ]
  },
  {
    text: "環境を一気に変えたくなる瞬間がある。",
    answers: [
      { text: "よくある", type: "dragon" },
      { text: "終わらせたくなる", type: "death" },
      { text: "姿を変えたくなる", type: "nine" },
      { text: "慎重に変える", type: "fox" }
    ]
  },
  {
    text: "恋愛で一番近いのは？",
    answers: [
      { text: "依存されやすい", type: "fox" },
      { text: "沼りやすい", type: "angel" },
      { text: "執着しやすい", type: "snake" },
      { text: "追わせたい", type: "nine" }
    ]
  },
  {
    text: "自分を守るために必要なのは？",
    answers: [
      { text: "距離感", type: "fox" },
      { text: "誇り", type: "tengu" },
      { text: "決別", type: "death" },
      { text: "変化", type: "nine" }
    ]
  },
  {
    text: "あなたに近い雰囲気は？",
    answers: [
      { text: "静かに見抜く", type: "fox" },
      { text: "強く流れを変える", type: "dragon" },
      { text: "夜に深くなる", type: "moon" },
      { text: "闇の中で再生する", type: "snake" }
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
    text: "惹かれる言葉を選ぶなら？",
    answers: [
      { text: "導き", type: "fox" },
      { text: "上昇", type: "dragon" },
      { text: "孤独", type: "moon" },
      { text: "秘密", type: "nine" }
    ]
  },
  {
    text: "過去の傷は、今の自分の魅力になっていると思う。",
    answers: [
      { text: "かなり思う", type: "angel" },
      { text: "まだ途中", type: "death" },
      { text: "隠している", type: "nine" },
      { text: "強さに変えた", type: "tengu" }
    ]
  },
  {
    text: "最後に、今のあなたが一番欲しいものは？",
    answers: [
      { text: "安心できる縁", type: "fox" },
      { text: "人生を変える流れ", type: "dragon" },
      { text: "本当の理解者", type: "moon" },
      { text: "過去を断ち切る力", type: "death" }
    ]
  }
];

let current = 0;
let scores = {};
Object.keys(types).forEach(key => scores[key] = 0);

const sections = {
  top: document.getElementById("top"),
  quiz: document.getElementById("quiz"),
  loading: document.getElementById("loading"),
  result: document.getElementById("result")
};

const startBtn = document.getElementById("start");
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

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.text;
  questionCount.textContent = `${current + 1} / ${questions.length}`;
  progressFill.style.width = `${((current) / questions.length) * 100}%`;

  const labels = ["波長を確認中...", "守護存在を照合中...", "魂の癖を解析中...", "縁の流れを読み取り中..."];
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
  showSection("loading");

  const loadingMessages = [
    "魂の波長を読み取っています",
    "あなたに近い守護存在を探しています",
    "過去の縁と恋愛傾向を照合しています",
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
  }, 800);
}

function getTopType() {
  let topType = "fox";
  let topScore = -1;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > topScore) {
      topType = type;
      topScore = score;
    }
  });

  return topType;
}

function showResult() {
  const topType = getTopType();
  const result = types[topType];

  document.getElementById("resultName").textContent = result.name;
  document.getElementById("resultCatch").textContent = result.catch;
  document.getElementById("resultPersonality").textContent = result.personality;
  document.getElementById("resultLove").textContent = result.love;

  const lineButton = document.getElementById("lineButton");
  lineButton.href = LINE_URL;

  const shareButton = document.getElementById("shareButton");
  shareButton.onclick = () => {
    const text = `私の守護霊は「${result.name}」でした。あなたも診断してみて。`;
    const url = location.href;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  showSection("result");
}

function resetQuiz() {
  current = 0;
  scores = {};
  Object.keys(types).forEach(key => scores[key] = 0);
  showSection("top");
}

startBtn.addEventListener("click", () => {
  showSection("quiz");
  showQuestion();
});

document.getElementById("retryButton").addEventListener("click", resetQuiz);
