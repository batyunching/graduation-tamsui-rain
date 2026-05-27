const HARD_CODED_SUPABASE = {
  url: "https://nqprijiqyxknwdapwcbh.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcHJpamlxeXhrbndkYXB3Y2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDY1MjIsImV4cCI6MjA5NTI4MjUyMn0.A2fzH25tzX1z_t674JmYIgC4nt2gsm7xl9MAjYc34W8"
};

const EVENT_ID = "daguan-tamsui-rain-2026";
const STORAGE_BUCKET = "challenge-photos";
const CONFIG_KEY = "daguan_tamsui_supabase_config";
const SESSION_KEY = "daguan_tamsui_challenge_session";
const DEMO_DB_KEY = "daguan_tamsui_challenge_demo_db";
const TEACHER_PASSWORD_SESSION_KEY = "daguan_tamsui_teacher_password";
const SETUP_MODE =
  typeof window !== "undefined" &&
  window.location &&
  new URLSearchParams(window.location.search).has("setup");

const CLASSES = Array.from({ length: 14 }, (_, index) => String(901 + index));
const GROUP_OPTIONS = Array.from({ length: 10 }, (_, index) => index + 1);
const HERO_IMAGE = driveImage("1Hd1jj0byqELqb69whpvxcAcyIfCHVPB1", 2400);
const MAP_IMAGE = driveImage("10yJE0RUhzznNDEHdnsxzaA1CyHTlPKK8", 1800);
const TAMSUI_EIGHT_VIEWS_IMAGE =
  "https://drive.google.com/thumbnail?id=18GsR-GQp5uHty028sCynNCh9AdWWaB3S&sz=w1800";

const SECTIONS = {
  tamsui: {
    title: "淡水玩很大",
    tone: "sky",
    intro: [
      "今日的淡水區，位處臺北盆地淡水河系出口，舊名「滬尾」。淡水河口海岸曾是東南亞海路的中途站，也歷經西班牙、荷蘭與清代開港通商的歷史。",
      "淡水擁有洋式、閩式、日式舊建築，加上在地特色小吃，形塑小鎮魅力。這裡不只是老街，還有古蹟、美景、傳統美食與值得探訪的歷史故事。"
    ]
  }
};

const CHALLENGES = [
  {
    id: "tamsui-eight-views",
    section: "tamsui",
    title: "淡水八景：觀音水月之謎",
    subtitle: "在山與水之間找出淡水八景",
    image: TAMSUI_EIGHT_VIEWS_IMAGE,
    description:
      "新淡水八景包含埔頂攬勝、大屯飛翠、沙崙看海、水岸畫影、紅樹傍橋、河口霞天、觀音水月與滬街訪古。",
    tasks: [
      {
        id: "eight_views_photo",
        type: "photo",
        title: "觀音水月團體照",
        prompt:
          "「觀音水月」是指哪裡？請以該地點當背景拍下團體照並上傳。提示：要有觀音跟水。",
        required: true,
        reviewMode: "manual"
      },
      {
        id: "eight_views_peak",
        type: "question",
        title: "觀音水月最高點",
        prompt: "請問觀音水月最高點，提示有一根柱子，叫什麼名字？",
        required: true,
        acceptedAnswers: ["硬漢碑"],
        keywords: ["硬漢碑"],
        reviewMode: "auto"
      }
    ]
  },
  {
    id: "mackay",
    section: "tamsui",
    title: "馬偕博士真愛台",
    subtitle: "水岸邊下跪的馬偕博士銅像",
    image: driveImage("1y8k5aG5GVsH6a5duQOLh4LsQCN9aJb2f", 1600),
    description:
      "喬治・萊斯里・馬偕於19世紀末期至台灣傳教與行醫，是台灣北部教會的創始者，也改變了淡水的文化風貌。",
    tasks: [
      {
        id: "mackay_photo",
        type: "photo",
        title: "馬偕博士銅像合照",
        prompt:
          "小組全員與水岸邊馬偕博士銅像合照並上傳。淡水有三個銅像，請找岸邊下跪這一位。",
        required: true,
        reviewMode: "manual"
      },
      {
        id: "mackay_country",
        type: "question",
        title: "馬偕是哪一國人",
        prompt: "馬偕是哪一國人？",
        required: true,
        acceptedAnswers: ["加拿大", "canada", "canadian", "加國"],
        keywords: ["加拿大"],
        reviewMode: "auto"
      },
      {
        id: "mackay_ship",
        type: "question",
        title: "馬偕搭乘的客輪",
        prompt: "馬偕博士搭哪一艘客輪上岸？",
        required: true,
        acceptedAnswers: ["海龍號", "海龍"],
        keywords: ["海龍"],
        reviewMode: "auto"
      }
    ]
  },
  {
    id: "little-white-house",
    section: "tamsui",
    title: "白宮、小白宮傻傻分不清",
    subtitle: "清朝時期淡水海關稅務司官邸",
    image: driveImage("12MCuaPJga6P0L2wrKmiy8SwCo9NG7YqZ", 1600),
    description:
      "小白宮為西班牙白堊迴廊式建築，具有規律對稱的特性，在視覺上有協調柔和的美感。",
    tasks: [
      {
        id: "little_white_house_photo",
        type: "photo",
        title: "小白宮合照",
        prompt: "小組全員與小白宮合照並上傳。",
        required: true,
        reviewMode: "manual"
      },
      {
        id: "little_white_house_arches",
        type: "question",
        title: "小白宮拱門數",
        prompt: "小白宮迴廊有幾個拱門？",
        required: true,
        acceptedAnswers: ["11", "11個", "十一", "十一個"],
        keywords: ["11"],
        reviewMode: "auto"
      }
    ]
  },
  {
    id: "fort-san-domingo",
    section: "tamsui",
    title: "眾國爭搶紅毛城",
    subtitle: "淡水最耀眼的古蹟之一",
    image: driveImage("1FISJtRFiuS1ooKaw1WHCqgdRpTzfH-LB", 1600),
    description:
      "1629年西班牙人在淡水建聖多明哥城。1642年荷蘭人驅逐西班牙人後重建城堡，「紅毛城」之名沿用至今。",
    tasks: [
      {
        id: "fort_photo",
        type: "photo",
        title: "紅毛城合照",
        prompt: "小組全員與紅毛城合照並上傳。",
        required: true,
        reviewMode: "manual"
      },
      {
        id: "fort_rebuild_name",
        type: "question",
        title: "荷蘭人重建後的命名",
        prompt: "荷蘭人將西班牙聖多明哥城重建後，將其命名為？",
        required: true,
        acceptedAnswers: ["安東尼堡", "聖安東尼奧城", "Fort Antonio", "Antonio"],
        keywords: ["安東尼"],
        reviewMode: "auto"
      },
      {
        id: "fort_fifth_flag",
        type: "question",
        title: "九面旗第5個國家",
        prompt: "紅毛城外有九面旗，由左至右第5個是哪個國家？",
        required: true,
        acceptedAnswers: ["英國", "uk", "britain", "united kingdom", "大英帝國"],
        keywords: ["英國"],
        reviewMode: "auto"
      }
    ]
  },
  {
    id: "british-consulate",
    section: "tamsui",
    title: "英國領事館：紅磚洋樓的餐桌暗號",
    subtitle: "維多利亞建築風格的紅磚拱廊式洋樓",
    image: driveImage("1gY8flDCZvOQ7mfbOFlx8edrkbV8xoCCy", 1600),
    description:
      "1867年英國租借紅毛城，1891年在東側興建英國領事館官邸。",
    tasks: [
      {
        id: "consulate_photo",
        type: "photo",
        title: "英國領事館合照",
        prompt: "小組全員與英國領事館合照並上傳。",
        required: true,
        reviewMode: "manual"
      },
      {
        id: "consulate_table_object",
        type: "question",
        title: "餐桌上的奇怪物件",
        prompt:
          "右圖餐廳的餐桌上有一個奇怪的東西，請問它的功能是什麼？",
        required: true,
        acceptedAnswers: [
          "呼叫僕人",
          "叫僕人",
          "呼叫僕役",
          "叫服務人員",
          "呼叫服務人員",
          "叫下人",
          "呼叫下人"
        ],
        keywords: ["叫", "僕人"],
        reviewMode: "hybrid"
      }
    ]
  },
  {
    id: "tamsui-food",
    section: "tamsui",
    title: "食尚玩家在淡水：老街五味特搜",
    subtitle: "五家傳統美食商店分別拍照",
    image: driveImage("1-qVGNx0Au4GYRtioN7sSegeYnK89YcGR", 1600),
    description:
      "找出老牌阿給、可口魚丸湯、阿媽的酸梅湯、許義魚酥與阿婆鐵蛋，小組全員與每一家店分別合照。",
    tasks: [
      ["food_agei_photo", "老牌阿給合照"],
      ["food_fishball_photo", "可口魚丸湯合照"],
      ["food_plum_photo", "阿媽的酸梅湯合照"],
      ["food_fish_crisp_photo", "許義魚酥合照"],
      ["food_iron_egg_photo", "阿婆鐵蛋合照"]
    ].map(([id, title]) => ({
      id,
      type: "photo",
      title,
      prompt: `請小組全員與「${title.replace("合照", "")}」店面分別合照並上傳。`,
      required: true,
      reviewMode: "manual"
    }))
  }
].map((challenge) => ({
  ...challenge,
  tasks: challenge.tasks.map((task) => ({ ...task, challengeId: challenge.id }))
}));

const TASKS = CHALLENGES.flatMap((challenge) => challenge.tasks);
const TASK_BY_ID = new Map(TASKS.map((task) => [task.id, task]));
const CHALLENGE_BY_ID = new Map(CHALLENGES.map((challenge) => [challenge.id, challenge]));
const REQUIRED_TASKS = TASKS.filter((task) => task.required);

const state = {
  loading: true,
  view: "home",
  selectedChallengeId: null,
  session: loadJSON(SESSION_KEY, null),
  config: loadSupabaseConfig(),
  client: null,
  usingSupabase: false,
  connectionNote: "",
  groups: [],
  submissions: [],
  files: [],
  filters: {
    classNo: "all",
    review: "all"
  }
};

document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("change", handleChange);

init();

async function init() {
  await refreshData();
  state.loading = false;
  render();
}

function loadSupabaseConfig() {
  const saved = loadJSON(CONFIG_KEY, {});
  return {
    url: HARD_CODED_SUPABASE.url || saved.url || "",
    anonKey: HARD_CODED_SUPABASE.anonKey || saved.anonKey || ""
  };
}

function getSupabaseClient() {
  const config = loadSupabaseConfig();
  if (!config.url || !config.anonKey || !window.supabase) return null;
  if (
    state.client &&
    state.config.url === config.url &&
    state.config.anonKey === config.anonKey
  ) {
    return state.client;
  }
  state.config = config;
  state.client = window.supabase.createClient(config.url, config.anonKey);
  return state.client;
}

async function refreshData() {
  const client = getSupabaseClient();
  state.usingSupabase = Boolean(client);
  state.connectionNote = state.usingSupabase ? "Supabase 已設定" : "示範模式";

  if (!client) {
    const db = getDemoDb();
    state.groups = db.groups;
    state.submissions = db.submissions;
    state.files = db.files;
    return;
  }

  try {
    const [groupsResult, submissionsResult, filesResult] = await Promise.all([
      client.from("event_groups").select("*").order("class_no", { ascending: true }),
      client.from("submissions").select("*").order("updated_at", { ascending: false }),
      client.from("uploaded_files").select("*").order("uploaded_at", { ascending: false })
    ]);

    if (groupsResult.error) throw groupsResult.error;
    if (submissionsResult.error) throw submissionsResult.error;
    if (filesResult.error) throw filesResult.error;

    state.groups = groupsResult.data || [];
    state.submissions = submissionsResult.data || [];
    state.files = filesResult.data || [];
  } catch (error) {
    console.error(error);
    state.usingSupabase = false;
    state.connectionNote = "Supabase 尚未完成建表，暫用示範模式";
    const db = getDemoDb();
    state.groups = db.groups;
    state.submissions = db.submissions;
    state.files = db.files;
  }
}

function render() {
  const app = document.getElementById("app");
  if (state.loading) {
    app.innerHTML = `<main class="loading">正在準備闖關系統...</main>`;
    return;
  }

  const content = {
    home: renderHome,
    login: renderLogin,
    dashboard: renderDashboard,
    challenge: renderChallenge,
    admin: renderAdmin,
    ranking: renderRanking,
    settings: renderSettings
  }[state.view]();

  app.innerHTML = renderShell(content);
  updateLoginDynamicFields();
  refreshIcons();
}

function renderShell(content) {
  const sessionText = state.session ? getSessionLabel(state.session) : "尚未登入";
  const canAdmin = state.session?.role === "teacher";
  const canOpenSettings = canAdmin || SETUP_MODE;

  return `
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-inner">
          <div class="brand">
            <strong>青春印記：淡水玩很大實境解謎</strong>
            <span>${escapeHtml(sessionText)} · ${escapeHtml(state.connectionNote)}</span>
          </div>
          <nav class="nav-actions" aria-label="主要導覽">
            ${
              state.session
                ? `
                  <button class="button light" data-nav="dashboard">${icon("map")}任務</button>
                  <button class="button light" data-nav="ranking">${icon("trophy")}排行榜</button>
                  ${canAdmin ? `<button class="button brick" data-nav="admin">${icon("shield-check")}後台</button>` : ""}
                  ${canOpenSettings ? `<button class="button light" data-nav="settings">${icon("settings")}設定</button>` : ""}
                  <button class="button danger" data-action="logout">${icon("log-out")}登出</button>
                `
                : `
                  <button class="button light" data-nav="ranking">${icon("trophy")}排行榜</button>
                  ${canOpenSettings ? `<button class="button light" data-nav="settings">${icon("settings")}設定</button>` : ""}
                  <button class="button primary" data-nav="login">${icon("log-in")}開始闖關</button>
                `
            }
          </nav>
        </div>
      </header>
      ${content}
    </div>
  `;
}

function renderHome() {
  return `
    <main class="main">
      <section class="hero">
        <img class="hero-image" src="${HERO_IMAGE}" alt="設計者清哥在淡水捷運跳起的照片" onerror="this.classList.add('hidden')" />
        <div class="hero-content">
          <div class="eyebrow">${icon("sparkles")}大觀國中畢業成年禮挑戰</div>
          <h1>青春印記：淡水玩很大實境解謎</h1>
          <p>用眼睛讀淡水，用小組合作完成拍照、問答與探索任務。</p>
          <div class="hero-actions">
            <button class="button primary" data-nav="login">${icon("flag")}開始闖關</button>
            <button class="button ghost" data-nav="ranking">${icon("trophy")}查看排行榜</button>
          </div>
        </div>
      </section>
      <section class="section-band mist">
        <div class="page">
          ${renderModeBanner()}
          <div class="grid three">
            <article class="panel">
              <h2>學生小組</h2>
              <p>選擇班級、組別、組員人數與座號後即可開始任務，已送出的照片與答案都可以修改。</p>
            </article>
            <article class="panel">
              <h2>老師後台</h2>
              <p>老師組通過教師密碼驗證後，可查看全校上傳照片、答案、自動判讀結果與審核狀態。</p>
            </article>
            <article class="panel">
              <h2>Supabase 儲存</h2>
              <p>照片存 Supabase Storage，答案、班級、小組、審核與排行榜資料存 Supabase Database。</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderLogin() {
  return `
    <main class="page">
      <div class="page-title">
        <div>
          <h1>登入闖關</h1>
          <p>學生請選班級與小組；老師組請選老師組並輸入密碼。</p>
        </div>
      </div>
      ${renderModeBanner()}
      <form class="panel" data-login-form>
        <div class="form-grid">
          <div class="field">
            <label for="login-class">班級</label>
            <select id="login-class" name="classNo">
              ${CLASSES.map((classNo) => `<option value="${classNo}">${classNo}班</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="login-group">小組</label>
            <select id="login-group" name="groupNo">
              ${GROUP_OPTIONS.map((groupNo) => `<option value="${groupNo}">第${groupNo}組</option>`).join("")}
              <option value="teacher">老師組</option>
            </select>
          </div>
          <div class="field student-only">
            <label for="member-count">組員人數</label>
            <select id="member-count" name="memberCount">
              ${Array.from({ length: 8 }, (_, index) => index + 1)
                .map((count) => `<option value="${count}">${count}人</option>`)
                .join("")}
            </select>
          </div>
          <div class="field teacher-only hidden">
            <label for="teacher-password">老師組密碼</label>
            <input id="teacher-password" name="teacherPassword" type="password" inputmode="numeric" placeholder="請輸入老師組密碼" />
          </div>
          <div class="seat-grid student-only" id="seat-fields"></div>
        </div>
        <div class="form-actions" style="margin-top: 18px">
          <button class="button primary" type="submit">${icon("log-in")}登入</button>
          <button class="button light" type="button" data-nav="home">${icon("home")}回首頁</button>
        </div>
      </form>
    </main>
  `;
}

function renderDashboard() {
  if (!state.session) return renderLoginRequired();
  const overall = getOverallProgress(state.session.groupId);

  return `
    <main class="main">
      <div class="page">
        <div class="page-title">
          <div>
            <h1>任務總覽</h1>
            <p>${escapeHtml(getSessionLabel(state.session))}，目前完成 ${overall.done}/${overall.total} 個必要任務。</p>
          </div>
          <div class="chip-row">
            <span class="chip ${overall.done === overall.total ? "ok" : "warn"}">${overall.percent}%</span>
            <span class="chip">${state.usingSupabase ? "正式資料庫" : "示範模式"}</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar" style="--value:${overall.percent}%"><span></span></div>
        </div>
      </div>
      ${Object.entries(SECTIONS)
        .map(([sectionId, section]) => renderSection(sectionId, section))
        .join("")}
    </main>
  `;
}

function renderSection(sectionId, section) {
  const challenges = CHALLENGES.filter((challenge) => challenge.section === sectionId);
  return `
    <section class="section-band ${section.tone}">
      <div class="page">
        <div class="page-title">
          <div>
            <h1>${escapeHtml(section.title)}</h1>
            <p>${sectionId === "tamsui" ? "滬尾時光任務：古蹟、信仰與老街五味" : "走一條不容易的路，完成畢業前的成年禮。"}</p>
          </div>
        </div>
        <div class="intro-text">
          ${section.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      ${sectionId === "tamsui" ? renderImage(MAP_IMAGE, "淡水關卡分布圖", "reference-img", "margin: 8px 0 18px") : ""}
        <div class="grid three">
          ${challenges.map(renderChallengeCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderChallengeCard(challenge) {
  const progress = getChallengeProgress(challenge, state.session?.groupId);
  return `
    <article class="challenge-card">
      ${challenge.image ? renderImage(challenge.image, `${challenge.title}參考圖片`, "card-image") : ""}
      <h3 style="margin-top:${challenge.image ? "12px" : "0"}">${escapeHtml(challenge.title)}</h3>
      <p>${escapeHtml(challenge.description)}</p>
      <div class="spacer"></div>
      <div class="progress">
        <div class="progress-bar" style="--value:${progress.percent}%"><span></span></div>
      </div>
      <div class="chip-row">
        <span class="chip ${progress.done === progress.total ? "ok" : "warn"}">${progress.done}/${progress.total}</span>
        <span class="chip">${escapeHtml(challenge.subtitle)}</span>
      </div>
      <button class="button primary" style="margin-top:14px" data-challenge-id="${challenge.id}">${icon("arrow-right")}進入關卡</button>
    </article>
  `;
}

function renderChallenge() {
  if (!state.session) return renderLoginRequired();
  const challenge = CHALLENGE_BY_ID.get(state.selectedChallengeId) || CHALLENGES[0];
  const progress = getChallengeProgress(challenge, state.session.groupId);

  return `
    <main class="page">
      <div class="page-title">
        <div>
          <h1>${escapeHtml(challenge.title)}</h1>
          <p>${escapeHtml(challenge.description)}</p>
        </div>
        <button class="button light" data-nav="dashboard">${icon("arrow-left")}回任務總覽</button>
      </div>
      ${challenge.image ? renderImage(challenge.image, `${challenge.title}參考圖片`, "reference-img", "margin-bottom:18px") : ""}
      <div class="status-banner ${progress.done === progress.total ? "" : "warn"}">
        ${icon(progress.done === progress.total ? "check-circle-2" : "info")}
        <div>
          <strong>本關進度 ${progress.done}/${progress.total}</strong>
          <div class="small">已送出的資料可以再次更新，更新後會重新等待老師審核。</div>
        </div>
      </div>
      ${challenge.tasks.map(renderTaskForm).join("")}
    </main>
  `;
}

function renderTaskForm(task) {
  const submission = findSubmission(state.session?.groupId, task.id);
  const files = filesForSubmission(submission);
  const isPhoto = task.type === "photo";
  const statusChips = renderSubmissionStatus(submission, task);
  const value = submission?.answer_text || "";
  const hasExisting = Boolean(submission);

  return `
    <form class="task-card" data-task-form data-task-id="${task.id}">
      <div class="task-head">
        <h3>${escapeHtml(task.title)}</h3>
        <span class="chip">${taskTypeLabel(task)}</span>
      </div>
      <p>${escapeHtml(task.prompt)}</p>
      <div class="task-meta">${statusChips}</div>
      ${
        isPhoto
          ? `
            <div class="upload-preview">
              ${
                files.length
                  ? `<img src="${escapeAttribute(files[0].public_url || "")}" alt="${escapeHtml(task.title)}已上傳照片" />`
                  : `<div class="empty-preview">尚未上傳照片</div>`
              }
              <div class="field">
                <label for="file-${task.id}">選擇照片</label>
                <input id="file-${task.id}" name="file" type="file" accept="image/*" />
                <span class="muted small">建議照片可清楚辨識地點與小組成員。上傳前會自動嘗試壓縮。</span>
              </div>
            </div>
          `
          : `
            <div class="field">
              <label for="answer-${task.id}">答案</label>
              ${
                task.type === "free_text"
                  ? `<textarea id="answer-${task.id}" name="answer" placeholder="請輸入你的想法">${escapeHtml(value)}</textarea>`
                  : `<input id="answer-${task.id}" name="answer" value="${escapeAttribute(value)}" placeholder="請輸入答案" />`
              }
            </div>
          `
      }
      <div class="form-actions" style="margin-top:12px">
        <button class="button primary" type="submit">${icon(hasExisting ? "refresh-cw" : "save")}${hasExisting ? "更新" : "儲存"}</button>
      </div>
    </form>
  `;
}

function renderAdmin() {
  if (!state.session || state.session.role !== "teacher") {
    return renderLoginRequired("只有老師組可以進入後台。");
  }

  const rows = getFilteredAdminGroups();
  const stats = getAdminStats(rows);

  return `
    <main class="page">
      <div class="page-title">
        <div>
          <h1>老師後台</h1>
          <p>查看學生照片與答案，並進行通過或退回補件。後台目前不做 Excel 匯出。</p>
        </div>
        <button class="button river" data-nav="ranking">${icon("trophy")}排行榜</button>
      </div>
      ${renderModeBanner()}
      <div class="grid three" style="margin-bottom:16px">
        <article class="panel"><h2>${stats.groupCount}</h2><p>登入小組</p></article>
        <article class="panel"><h2>${stats.pendingCount}</h2><p>待審核項目</p></article>
        <article class="panel"><h2>${stats.completedCount}</h2><p>已完成全部必要任務小組</p></article>
      </div>
      <div class="admin-toolbar panel">
        <div class="form-grid" style="flex:1">
          <div class="field">
            <label for="filter-class">班級篩選</label>
            <select id="filter-class" data-filter="classNo">
              <option value="all">全部班級</option>
              ${CLASSES.map((classNo) => `<option value="${classNo}" ${state.filters.classNo === classNo ? "selected" : ""}>${classNo}班</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="filter-review">審核篩選</label>
            <select id="filter-review" data-filter="review">
              ${[
                ["all", "全部狀態"],
                ["pending", "待審核"],
                ["approved", "已通過"],
                ["needs_fix", "需補件"],
                ["rejected", "已退回"]
              ]
                .map(([value, label]) => `<option value="${value}" ${state.filters.review === value ? "selected" : ""}>${label}</option>`)
                .join("")}
            </select>
          </div>
        </div>
      </div>
      <div class="panel approval-zone">
        <div>
          <h2>批次通過審核</h2>
          <p>可將目前選取班級或全部學生已送出的答案與照片一次標記為通過。尚未送出的任務不會被建立或通過。</p>
        </div>
        <div class="action-row">
          <button
            class="button primary"
            data-action="bulk-approve"
            data-approve-scope="class"
            data-approve-value="${escapeAttribute(state.filters.classNo)}"
            ${state.filters.classNo === "all" ? "disabled" : ""}
          >${icon("check-check")}通過${state.filters.classNo === "all" ? "指定班級" : `${state.filters.classNo}班已送出項目`}</button>
          <button class="button river" data-action="bulk-approve" data-approve-scope="all">${icon("badge-check")}通過全部已送出項目</button>
        </div>
        <p class="muted small">若要通過一整班，請先在「班級篩選」選定班級，再按通過班級已送出項目。</p>
      </div>
      <div class="panel danger-zone">
        <div>
          <h2>刪除測試資料</h2>
          <p>可刪除單組、目前選取班級，或全部學生資料。刪除會移除小組、答案、照片紀錄、審核紀錄與排行榜資料。</p>
        </div>
        <div class="action-row">
          <button
            class="button danger"
            data-action="delete-data"
            data-delete-scope="class"
            data-delete-value="${escapeAttribute(state.filters.classNo)}"
            ${state.filters.classNo === "all" ? "disabled" : ""}
          >${icon("trash-2")}刪除${state.filters.classNo === "all" ? "指定班級" : `${state.filters.classNo}班資料`}</button>
          <button class="button danger" data-action="delete-data" data-delete-scope="all">${icon("trash")}刪除全部學生資料</button>
        </div>
        <p class="muted small">若要刪除一整班，請先在「班級篩選」選定班級，再按刪除班級資料。</p>
      </div>
      <div class="grid">
        ${
          rows.length
            ? rows.map(renderAdminGroupRow).join("")
            : `<article class="panel"><h2>沒有符合的資料</h2><p>可以調整篩選，或請學生先登入並送出任務。</p></article>`
        }
      </div>
    </main>
  `;
}

function renderAdminGroupRow(group) {
  const submissions = getGroupSubmissions(group.group_id);
  const progress = getOverallProgress(group.group_id);
  const label = getGroupLabel(group);
  const visibleSubmissions = submissions.filter((submission) => {
    if (state.filters.review === "all") return true;
    return submission.teacher_status === state.filters.review;
  });

  return `
    <article class="admin-row">
      <div>
        <h3>${escapeHtml(label)}</h3>
        <p class="muted small">座號：${escapeHtml(formatSeatNumbers(group.seat_numbers))}</p>
        <div class="progress">
          <div class="progress-bar" style="--value:${progress.percent}%"><span></span></div>
        </div>
        <div class="chip-row">
          <span class="chip ${progress.done === progress.total ? "ok" : "warn"}">${progress.done}/${progress.total}</span>
          <span class="chip">開始 ${formatDateTime(group.started_at)}</span>
        </div>
      </div>
      <div class="submission-list">
        ${
          visibleSubmissions.length
            ? visibleSubmissions.map(renderSubmissionItem).join("")
            : `<p class="muted">此篩選下沒有作答資料。</p>`
        }
      </div>
      <div>
        <h3>快速狀態</h3>
        <p class="muted small">完成時間：${group.completed_at ? formatDateTime(group.completed_at) : "尚未完成"}</p>
        <p class="muted small">目前名次：${getRankForGroup(group.group_id) || "尚未進榜"}</p>
        <button class="button danger" data-action="delete-data" data-delete-scope="group" data-delete-value="${escapeAttribute(group.group_id)}">${icon("trash-2")}刪除此組</button>
      </div>
    </article>
  `;
}

function renderSubmissionItem(submission) {
  const task = TASK_BY_ID.get(submission.task_id);
  if (!task) return "";
  const files = filesForSubmission(submission);
  return `
    <div class="submission-item">
      <strong>${escapeHtml(task.title)}</strong>
      <div class="chip-row">
        ${renderSubmissionStatus(submission, task)}
        <span class="chip">第 ${submission.version_no || 1} 版</span>
      </div>
      ${
        task.type === "photo"
          ? `
            <div class="thumb-list">
              ${
                files.length
                  ? files
                      .map(
                        (file) => `<a href="${escapeAttribute(file.public_url || "")}" target="_blank" rel="noreferrer"><img src="${escapeAttribute(file.public_url || "")}" alt="${escapeHtml(task.title)}照片" /></a>`
                      )
                      .join("")
                  : `<span class="muted small">沒有照片</span>`
              }
            </div>
          `
          : `<p>${escapeHtml(submission.answer_text || "")}</p>`
      }
      <div class="action-row" style="margin-top:10px">
        <button class="button primary" data-review="approved" data-submission-id="${submission.submission_id || submission.id}">${icon("check")}通過</button>
        <button class="button danger" data-review="needs_fix" data-submission-id="${submission.submission_id || submission.id}">${icon("rotate-ccw")}退回補件</button>
      </div>
    </div>
  `;
}

function renderRanking() {
  const rankings = getRankings();

  return `
    <main class="page">
      <div class="page-title">
        <div>
          <h1>完成速度排行榜</h1>
          <p>以開始闖關到完成全部必要任務的時間排序。排行榜只作活動趣味統計，安全與品質優先。</p>
        </div>
        ${state.session ? `<button class="button light" data-nav="dashboard">${icon("map")}回任務</button>` : ""}
      </div>
      ${renderModeBanner()}
      <div class="grid">
        ${
          rankings.length
            ? rankings
                .map(
                  (row, index) => `
                    <article class="rank-row">
                      <div class="rank-number">#${index + 1}</div>
                      <div>
                        <h3>${escapeHtml(getGroupLabel(row.group))}</h3>
                        <p class="muted small">組員座號：${escapeHtml(formatSeatNumbers(row.group.seat_numbers))}</p>
                        <p class="muted small">完成耗時 ${formatDuration(row.durationSeconds)} · 完成時間 ${formatDateTime(row.completedAt)}</p>
                      </div>
                      <span class="chip ${row.approved ? "ok" : "warn"}">${row.approved ? "老師審核通過" : "暫定名次"}</span>
                    </article>
                  `
                )
                .join("")
            : `<article class="panel"><h2>排行榜尚未開始</h2><p>等第一組完成全部必要任務後，這裡就會出現名次。</p></article>`
        }
      </div>
    </main>
  `;
}

function renderSettings() {
  if (!SETUP_MODE && state.session?.role !== "teacher") {
    return renderLoginRequired("系統設定僅供老師使用。若是第一次設定，請用網址加上 ?setup=1 開啟設定頁。");
  }

  const saved = loadJSON(CONFIG_KEY, {});
  return `
    <main class="page">
      <div class="page-title">
        <div>
          <h1>Supabase 設定</h1>
          <p>填入 Supabase 專案網址與 anon public key 後，資料會改存正式資料庫。不要填 service role key。</p>
        </div>
      </div>
      <form class="panel" data-settings-form>
        <div class="form-grid">
          <div class="field full">
            <label for="supabase-url">Supabase Project URL</label>
            <input id="supabase-url" name="url" value="${escapeAttribute(saved.url || HARD_CODED_SUPABASE.url || "")}" placeholder="https://xxxxx.supabase.co" />
          </div>
          <div class="field full">
            <label for="supabase-key">Supabase anon public key</label>
            <textarea id="supabase-key" name="anonKey" placeholder="請貼上 anon public key">${escapeHtml(saved.anonKey || HARD_CODED_SUPABASE.anonKey || "")}</textarea>
          </div>
          <div class="field full">
            <label for="demo-teacher-password">示範模式老師密碼</label>
            <input id="demo-teacher-password" name="demoTeacherPassword" type="password" value="${escapeAttribute(saved.demoTeacherPassword || "")}" placeholder="只供尚未連上 Supabase 時測試後台" />
            <span class="muted small">正式活動請在 Supabase 設定教師密碼，不要依賴示範模式。</span>
          </div>
        </div>
        <div class="form-actions" style="margin-top:18px">
          <button class="button primary" type="submit">${icon("save")}儲存設定</button>
          <button class="button light" type="button" data-action="clear-config">${icon("trash-2")}清除設定</button>
          <button class="button light" type="button" data-nav="${state.session ? "dashboard" : "home"}">${icon("arrow-left")}返回</button>
        </div>
      </form>
      <div class="panel" style="margin-top:16px">
        <h2>目前狀態</h2>
        <p>${escapeHtml(state.connectionNote)}</p>
        <p class="muted small">若顯示示範模式，請先到 Supabase SQL Editor 執行 supabase-schema.sql，再回來填入設定。</p>
      </div>
    </main>
  `;
}

function renderLoginRequired(message = "請先登入再繼續。") {
  return `
    <main class="page">
      <article class="panel">
        <h1>需要登入</h1>
        <p>${escapeHtml(message)}</p>
        <button class="button primary" data-nav="login">${icon("log-in")}前往登入</button>
      </article>
    </main>
  `;
}

function renderModeBanner() {
  if (state.usingSupabase) {
    return `
      <div class="status-banner">
        ${icon("database")}
        <div>
          <strong>目前使用 Supabase 正式儲存</strong>
          <div class="small">照片、答案、後台審核與排行榜會寫入資料庫。</div>
        </div>
      </div>
    `;
  }
  return `
    <div class="status-banner warn">
      ${icon("database")}
      <div>
        <strong>目前使用示範模式</strong>
        <div class="small">可測試流程，但資料只存在這台電腦的瀏覽器。完成 Supabase 設定後會改用正式儲存。</div>
      </div>
    </div>
  `;
}

async function handleClick(event) {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    state.view = nav.dataset.nav;
    state.selectedChallengeId = null;
    render();
    return;
  }

  const challengeButton = event.target.closest("[data-challenge-id]");
  if (challengeButton) {
    state.selectedChallengeId = challengeButton.dataset.challengeId;
    state.view = "challenge";
    render();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "logout") {
      localStorage.removeItem(SESSION_KEY);
      safeSessionRemove(TEACHER_PASSWORD_SESSION_KEY);
      state.session = null;
      state.view = "home";
      showToast("已登出，可以換下一組登入。");
      render();
      return;
    }

    if (action.dataset.action === "clear-config") {
      localStorage.removeItem(CONFIG_KEY);
      state.client = null;
      await refreshData();
      showToast("已清除 Supabase 設定，回到示範模式。");
      render();
      return;
    }

    if (action.dataset.action === "delete-data") {
      await handleDeleteData(action.dataset.deleteScope, action.dataset.deleteValue || "");
      return;
    }

    if (action.dataset.action === "bulk-approve") {
      await handleBulkApprove(action.dataset.approveScope, action.dataset.approveValue || "");
      return;
    }
  }

  const reviewButton = event.target.closest("[data-review]");
  if (reviewButton) {
    await reviewSubmission(reviewButton.dataset.submissionId, reviewButton.dataset.review);
    await refreshData();
    render();
  }
}

async function handleSubmit(event) {
  if (event.target.matches("[data-login-form]")) {
    event.preventDefault();
    await handleLogin(event.target);
    return;
  }

  if (event.target.matches("[data-task-form]")) {
    event.preventDefault();
    await handleTaskSave(event.target);
    return;
  }

  if (event.target.matches("[data-settings-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const url = String(formData.get("url") || "").trim();
    const anonKey = String(formData.get("anonKey") || "").trim();
    const demoTeacherPassword = String(formData.get("demoTeacherPassword") || "").trim();
    localStorage.setItem(CONFIG_KEY, JSON.stringify({ url, anonKey, demoTeacherPassword }));
    state.client = null;
    state.config = loadSupabaseConfig();
    await refreshData();
    showToast(state.usingSupabase ? "Supabase 設定已儲存。" : "設定已儲存，但尚未連上資料庫。");
    render();
  }
}

function handleChange(event) {
  if (event.target.id === "login-group" || event.target.id === "member-count") {
    updateLoginDynamicFields();
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filters[filter.dataset.filter] = filter.value;
    render();
  }
}

async function handleLogin(form) {
  const formData = new FormData(form);
  const groupNo = String(formData.get("groupNo"));

  if (groupNo === "teacher") {
    const password = String(formData.get("teacherPassword") || "");
    const passwordOk = await verifyTeacherPassword(password);
    if (!passwordOk) {
      showToast("老師組密碼不正確。");
      return;
    }
    state.session = {
      groupId: "teacher-global",
      role: "teacher",
      groupType: "teacher",
      groupNo: "teacher",
      classNo: null,
      memberCount: 1,
      seatNumbers: []
    };
    safeSessionSet(TEACHER_PASSWORD_SESSION_KEY, password);
  } else {
    const classNo = String(formData.get("classNo"));
    const memberCount = Number(formData.get("memberCount"));
    const seatNumbers = Array.from({ length: memberCount }, (_, index) =>
      String(formData.get(`seat_${index + 1}`) || "").trim()
    ).filter(Boolean);

    if (seatNumbers.length !== memberCount) {
      showToast("請完整填寫每位組員座號。");
      return;
    }

    const paddedGroup = groupNo.padStart(2, "0");
    state.session = {
      groupId: `${classNo}-${paddedGroup}`,
      role: "student",
      groupType: "student",
      groupNo: Number(groupNo),
      classNo,
      memberCount,
      seatNumbers
    };
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(state.session));
  await ensureGroup(state.session);
  await refreshData();
  state.view = "dashboard";
  showToast("登入成功。");
  render();
}

async function handleTaskSave(form) {
  if (!state.session) {
    showToast("請先登入。");
    return;
  }

  const task = TASK_BY_ID.get(form.dataset.taskId);
  const submission = findSubmission(state.session.groupId, task.id);
  const formData = new FormData(form);
  const answerText = String(formData.get("answer") || "").trim();
  const file = form.querySelector('input[type="file"]')?.files?.[0] || null;

  if (task.type === "photo" && !file && !submissionHasFiles(submission)) {
    showToast("請先選擇要上傳的照片。");
    return;
  }

  if (task.type !== "photo" && !answerText) {
    showToast("請先填寫答案。");
    return;
  }

  try {
    let fileRecord = null;
    if (file) fileRecord = await uploadTaskFile(file, task);
    await saveSubmissionRecord(task, answerText, fileRecord);
    await updateGroupCompletion(state.session.groupId);
    await refreshData();
    showToast("已儲存，可以繼續下一題。");
    render();
  } catch (error) {
    console.error(error);
    showToast(`儲存失敗：${error.message || "請檢查設定"}`);
  }
}

async function verifyTeacherPassword(password) {
  const trimmed = String(password || "").trim();
  if (!trimmed) return false;

  if (state.usingSupabase && state.client) {
    try {
      const result = await state.client.rpc("verify_teacher_password", {
        password_input: trimmed
      });
      if (result.error) throw result.error;
      return result.data === true;
    } catch (error) {
      console.error(error);
      showToast("Supabase 尚未建立教師密碼驗證函式，請先執行新版 supabase-schema.sql。");
      return false;
    }
  }

  const saved = loadJSON(CONFIG_KEY, {});
  if (!saved.demoTeacherPassword) {
    showToast("示範模式尚未設定老師密碼，請用 ?setup=1 開啟設定頁先設定測試密碼。");
    return false;
  }
  return trimmed === saved.demoTeacherPassword;
}

async function ensureGroup(session) {
  const now = new Date().toISOString();
  const payload = {
    group_id: session.groupId,
    class_no: session.classNo,
    group_type: session.groupType,
    group_no: session.groupNo === "teacher" ? null : Number(session.groupNo),
    member_count: session.memberCount,
    seat_numbers: session.seatNumbers,
    role: session.role,
    last_login_at: now
  };

  if (state.usingSupabase && state.client) {
    const existing = await state.client
      .from("event_groups")
      .select("group_id, started_at")
      .eq("group_id", session.groupId)
      .maybeSingle();
    if (existing.error) throw existing.error;
    if (existing.data) {
      const updated = await state.client
        .from("event_groups")
        .update(payload)
        .eq("group_id", session.groupId);
      if (updated.error) throw updated.error;
    } else {
      const inserted = await state.client
        .from("event_groups")
        .insert({ ...payload, started_at: now });
      if (inserted.error) throw inserted.error;
    }
    return;
  }

  const db = getDemoDb();
  const index = db.groups.findIndex((group) => group.group_id === session.groupId);
  if (index >= 0) {
    db.groups[index] = { ...db.groups[index], ...payload };
  } else {
    db.groups.push({ ...payload, started_at: now, created_at: now, completed_at: null });
  }
  saveDemoDb(db);
}

async function uploadTaskFile(file, task) {
  const prepared = await prepareImage(file);
  const fileId = crypto.randomUUID();
  const now = new Date().toISOString();
  const expiresAt = addDaysISO(now, 30);
  const safeName = sanitizeFileName(prepared.name || file.name || "photo.jpg");

  if (state.usingSupabase && state.client) {
    const classFolder = state.session.classNo || "teacher";
    const groupFolder = state.session.groupId;
    const storagePath = `${EVENT_ID}/${classFolder}/${groupFolder}/${task.id}/${Date.now()}_${safeName}`;
    const upload = await state.client.storage
      .from(STORAGE_BUCKET)
      .upload(storagePath, prepared, {
        cacheControl: "3600",
        contentType: prepared.type || "image/jpeg",
        upsert: false
      });
    if (upload.error) throw upload.error;

    const publicUrl = state.client.storage.from(STORAGE_BUCKET).getPublicUrl(storagePath).data
      .publicUrl;
    const record = {
      file_id: fileId,
      group_id: state.session.groupId,
      challenge_id: task.challengeId,
      task_id: task.id,
      storage_path: storagePath,
      public_url: publicUrl,
      original_filename: file.name,
      file_size: prepared.size,
      mime_type: prepared.type || file.type,
      uploaded_at: now,
      expires_at: expiresAt
    };

    const inserted = await state.client.from("uploaded_files").insert(record);
    if (inserted.error) throw inserted.error;
    return record;
  }

  const dataUrl = await blobToDataURL(prepared);
  const record = {
    file_id: fileId,
    group_id: state.session.groupId,
    challenge_id: task.challengeId,
    task_id: task.id,
    storage_path: `demo/${fileId}_${safeName}`,
    public_url: dataUrl,
    original_filename: file.name,
    file_size: prepared.size,
    mime_type: prepared.type || file.type,
    uploaded_at: now,
    expires_at: expiresAt
  };
  const db = getDemoDb();
  db.files.push(record);
  saveDemoDb(db);
  return record;
}

async function saveSubmissionRecord(task, answerText, fileRecord) {
  const now = new Date().toISOString();
  const existing = findSubmission(state.session.groupId, task.id);
  const autoStatus = gradeTask(task, answerText);
  const nextFileIds = fileRecord
    ? [fileRecord.file_id]
    : existing?.file_ids || existing?.fileIds || [];

  const payload = {
    group_id: state.session.groupId,
    challenge_id: task.challengeId,
    task_id: task.id,
    answer_text: task.type === "photo" ? "" : answerText,
    file_ids: nextFileIds,
    auto_status: autoStatus,
    teacher_status: "pending",
    teacher_note: "",
    updated_at: now,
    reviewed_at: null
  };

  if (state.usingSupabase && state.client) {
    if (existing) {
      const update = await state.client
        .from("submissions")
        .update({
          ...payload,
          version_no: Number(existing.version_no || 1) + 1
        })
        .eq("submission_id", existing.submission_id);
      if (update.error) throw update.error;
    } else {
      const insert = await state.client.from("submissions").insert({
        submission_id: crypto.randomUUID(),
        ...payload,
        version_no: 1,
        submitted_at: now
      });
      if (insert.error) throw insert.error;
    }
    return;
  }

  const db = getDemoDb();
  const index = db.submissions.findIndex(
    (submission) => submission.group_id === state.session.groupId && submission.task_id === task.id
  );
  if (index >= 0) {
    db.submissions[index] = {
      ...db.submissions[index],
      ...payload,
      version_no: Number(db.submissions[index].version_no || 1) + 1
    };
  } else {
    db.submissions.push({
      submission_id: crypto.randomUUID(),
      ...payload,
      version_no: 1,
      submitted_at: now
    });
  }
  saveDemoDb(db);
}

async function updateGroupCompletion(groupId) {
  const now = new Date().toISOString();
  const submissions =
    state.usingSupabase && state.client
      ? await fetchGroupSubmissionsFromSupabase(groupId)
      : getDemoDb().submissions.filter((submission) => submission.group_id === groupId);
  const complete = REQUIRED_TASKS.every((task) =>
    submissionComplete(
      submissions.find((submission) => submission.task_id === task.id),
      task
    )
  );
  const completedAt = complete ? now : null;

  if (state.usingSupabase && state.client) {
    const update = await state.client
      .from("event_groups")
      .update({ completed_at: completedAt })
      .eq("group_id", groupId);
    if (update.error) throw update.error;
    return;
  }

  const db = getDemoDb();
  const group = db.groups.find((item) => item.group_id === groupId);
  if (group) group.completed_at = completedAt;
  saveDemoDb(db);
}

async function fetchGroupSubmissionsFromSupabase(groupId) {
  const result = await state.client
    .from("submissions")
    .select("*")
    .eq("group_id", groupId);
  if (result.error) throw result.error;
  return result.data || [];
}

async function reviewSubmission(submissionId, status) {
  if (!state.session || state.session.role !== "teacher") {
    showToast("只有老師組可以審核。");
    return;
  }
  const now = new Date().toISOString();
  const note = status === "approved" ? "老師審核通過" : "請補拍或修正答案";

  if (state.usingSupabase && state.client) {
    const update = await state.client
      .from("submissions")
      .update({ teacher_status: status, teacher_note: note, reviewed_at: now })
      .eq("submission_id", submissionId);
    if (update.error) throw update.error;
    const log = await state.client.from("review_logs").insert({
      log_id: crypto.randomUUID(),
      submission_id: submissionId,
      reviewer_group_id: state.session.groupId,
      action: status,
      note,
      created_at: now
    });
    if (log.error) throw log.error;
    showToast(status === "approved" ? "已標記通過。" : "已退回補件。");
    return;
  }

  const db = getDemoDb();
  const submission = db.submissions.find((item) => item.submission_id === submissionId);
  if (submission) {
    submission.teacher_status = status;
    submission.teacher_note = note;
    submission.reviewed_at = now;
    db.reviewLogs.push({
      log_id: crypto.randomUUID(),
      submission_id: submissionId,
      reviewer_group_id: state.session.groupId,
      action: status,
      note,
      created_at: now
    });
    saveDemoDb(db);
    showToast(status === "approved" ? "已標記通過。" : "已退回補件。");
  }
}

async function handleBulkApprove(scope, value) {
  if (!state.session || state.session.role !== "teacher") {
    showToast("只有老師組可以批次通過。");
    return;
  }

  const target = getBulkApproveTarget(scope, value);
  if (!target) {
    showToast("請先選擇要批次通過的資料。");
    return;
  }

  if (!target.submissions.length) {
    showToast(`${target.label}目前沒有需要通過的已送出項目。`);
    return;
  }

  const ok = window.confirm(
    `是否確認將「${target.label}」的 ${target.submissions.length} 筆已送出項目批次標記為通過？\n\n尚未送出的任務不會被建立。`
  );
  if (!ok) return;

  try {
    const approvedCount = state.usingSupabase && state.client
      ? await bulkApproveSupabase(target.submissions)
      : bulkApproveDemo(target.submissions);

    await refreshData();
    showToast(`已批次通過 ${approvedCount} 筆已送出項目。`);
    render();
  } catch (error) {
    console.error(error);
    showToast(`批次通過失敗：${error.message || "請稍後再試"}`);
  }
}

function getBulkApproveTarget(scope, value) {
  const groups = state.groups.filter((group) => {
    if (group.role !== "student") return false;
    if (scope === "all") return true;
    if (scope === "class") return group.class_no === value && value !== "all";
    return false;
  });

  if (scope === "class" && (!value || value === "all")) return null;
  if (scope !== "class" && scope !== "all") return null;

  const groupIds = new Set(groups.map((group) => group.group_id));
  const submissions = state.submissions.filter(
    (submission) =>
      groupIds.has(submission.group_id) &&
      TASK_BY_ID.has(submission.task_id) &&
      submission.teacher_status !== "approved"
  );

  return {
    label: scope === "class" ? `${value}班` : "全部學生",
    submissions
  };
}

async function bulkApproveSupabase(submissions) {
  const now = new Date().toISOString();
  const note = "老師批次通過";
  const ids = submissions.map((submission) => submission.submission_id).filter(Boolean);
  const chunkSize = 500;

  for (let index = 0; index < ids.length; index += chunkSize) {
    const chunk = ids.slice(index, index + chunkSize);
    const update = await state.client
      .from("submissions")
      .update({ teacher_status: "approved", teacher_note: note, reviewed_at: now })
      .in("submission_id", chunk);
    if (update.error) throw update.error;
  }

  const logs = ids.map((submissionId) => ({
    log_id: crypto.randomUUID(),
    submission_id: submissionId,
    reviewer_group_id: state.session.groupId,
    action: "approved",
    note,
    created_at: now
  }));

  for (let index = 0; index < logs.length; index += chunkSize) {
    const insert = await state.client.from("review_logs").insert(logs.slice(index, index + chunkSize));
    if (insert.error) throw insert.error;
  }

  return ids.length;
}

function bulkApproveDemo(submissions) {
  const db = getDemoDb();
  const now = new Date().toISOString();
  const note = "老師批次通過";
  const ids = new Set(submissions.map((submission) => submission.submission_id));
  let count = 0;

  db.submissions = db.submissions.map((submission) => {
    if (!ids.has(submission.submission_id)) return submission;
    count += 1;
    return {
      ...submission,
      teacher_status: "approved",
      teacher_note: note,
      reviewed_at: now
    };
  });

  submissions.forEach((submission) => {
    db.reviewLogs.push({
      log_id: crypto.randomUUID(),
      submission_id: submission.submission_id,
      reviewer_group_id: state.session.groupId,
      action: "approved",
      note,
      created_at: now
    });
  });

  saveDemoDb(db);
  return count;
}

async function handleDeleteData(scope, value) {
  if (!state.session || state.session.role !== "teacher") {
    showToast("只有老師組可以刪除資料。");
    return;
  }

  const target = getDeleteTarget(scope, value);
  if (!target) {
    showToast("請先選擇要刪除的資料。");
    return;
  }

  const ok = window.confirm(
    `是否確認刪除「${target.label}」？\n\n刪除後會移除小組資料、答案、照片紀錄、審核紀錄與排行榜資料，無法復原。`
  );
  if (!ok) return;

  try {
    let deletedCount = 0;
    if (state.usingSupabase && state.client) {
      const password = await getTeacherPasswordForDangerousAction();
      if (!password) return;

      await deleteStorageFilesForTarget(scope, value);

      const result = await state.client.rpc("delete_student_data", {
        delete_scope: scope,
        class_no_input: scope === "class" ? value : null,
        group_id_input: scope === "group" ? value : null,
        password_input: password
      });
      if (result.error) throw result.error;
      deletedCount = Number(result.data || 0);
    } else {
      deletedCount = deleteDemoStudentData(scope, value);
    }

    await refreshData();
    showToast(`已刪除 ${deletedCount} 組學生資料。`);
    render();
  } catch (error) {
    console.error(error);
    showToast(`刪除失敗：${error.message || "請確認 Supabase 已更新刪除函式"}`);
  }
}

async function deleteStorageFilesForTarget(scope, value) {
  const paths = getStoragePathsForDelete(scope, value);
  if (!paths.length || !state.client) return;

  const uniquePaths = [...new Set(paths)].filter(Boolean);
  const chunkSize = 100;
  for (let index = 0; index < uniquePaths.length; index += chunkSize) {
    const chunk = uniquePaths.slice(index, index + chunkSize);
    const result = await state.client.storage.from(STORAGE_BUCKET).remove(chunk);
    if (result.error) throw result.error;
  }
}

function getStoragePathsForDelete(scope, value) {
  const targetGroupIds = new Set(
    state.groups
      .filter((group) => {
        if (group.role !== "student") return false;
        if (scope === "all") return true;
        if (scope === "class") return group.class_no === value;
        if (scope === "group") return group.group_id === value;
        return false;
      })
      .map((group) => group.group_id)
  );

  return state.files
    .filter((file) => targetGroupIds.has(file.group_id))
    .map((file) => file.storage_path)
    .filter(Boolean);
}

function getDeleteTarget(scope, value) {
  if (scope === "group") {
    const group = state.groups.find((item) => item.group_id === value && item.role === "student");
    return group ? { label: getGroupLabel(group) } : null;
  }

  if (scope === "class") {
    if (!value || value === "all") return null;
    const count = state.groups.filter((group) => group.role === "student" && group.class_no === value).length;
    return { label: `${value}班全部學生資料（${count}組）` };
  }

  if (scope === "all") {
    const count = state.groups.filter((group) => group.role === "student").length;
    return { label: `全部學生資料（${count}組）` };
  }

  return null;
}

async function getTeacherPasswordForDangerousAction() {
  const stored = safeSessionGet(TEACHER_PASSWORD_SESSION_KEY);
  if (stored) return stored;

  const input = window.prompt("請再次輸入老師密碼，以確認刪除權限。");
  if (!input) return "";

  const ok = await verifyTeacherPassword(input);
  if (!ok) {
    showToast("老師密碼不正確，已取消刪除。");
    return "";
  }

  safeSessionSet(TEACHER_PASSWORD_SESSION_KEY, input);
  return input;
}

function deleteDemoStudentData(scope, value) {
  const db = getDemoDb();
  const targetGroupIds = db.groups
    .filter((group) => {
      if (group.role !== "student") return false;
      if (scope === "all") return true;
      if (scope === "class") return group.class_no === value;
      if (scope === "group") return group.group_id === value;
      return false;
    })
    .map((group) => group.group_id);

  if (!targetGroupIds.length) return 0;
  const targetGroupSet = new Set(targetGroupIds);
  const targetSubmissionIds = new Set(
    db.submissions
      .filter((submission) => targetGroupSet.has(submission.group_id))
      .map((submission) => submission.submission_id)
  );

  db.groups = db.groups.filter((group) => !targetGroupSet.has(group.group_id));
  db.submissions = db.submissions.filter((submission) => !targetGroupSet.has(submission.group_id));
  db.files = db.files.filter((file) => !targetGroupSet.has(file.group_id));
  db.reviewLogs = db.reviewLogs.filter(
    (log) => !targetSubmissionIds.has(log.submission_id) && !targetGroupSet.has(log.reviewer_group_id)
  );
  saveDemoDb(db);
  return targetGroupIds.length;
}

function gradeTask(task, answerText) {
  if (task.type === "photo" || task.type === "free_text") return "not_checked";
  const normalizedAnswer = normalizeAnswer(answerText);
  if (!normalizedAnswer) return "wrong";

  const accepted = task.acceptedAnswers || [];
  if (accepted.some((answer) => normalizeAnswer(answer) === normalizedAnswer)) return "correct";

  const keywordHits = (task.keywords || []).filter((keyword) =>
    normalizedAnswer.includes(normalizeAnswer(keyword))
  );
  if (keywordHits.length && keywordHits.length === (task.keywords || []).length) return "maybe";
  if (keywordHits.length) return "maybe";
  return "wrong";
}

async function prepareImage(file) {
  if (!file.type.startsWith("image/") || file.type.includes("heic")) return file;
  try {
    const image = await loadImage(file);
    const maxSide = 1800;
    const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
    const width = Math.round(image.width * scale);
    const height = Math.round(image.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.78));
    if (!blob) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" });
  } catch {
    return file;
  }
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("照片讀取失敗"));
    };
    image.src = url;
  });
}

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function getDemoDb() {
  const db = loadJSON(DEMO_DB_KEY, null);
  if (db) {
    return {
      groups: db.groups || [],
      submissions: db.submissions || [],
      files: db.files || [],
      reviewLogs: db.reviewLogs || []
    };
  }
  return { groups: [], submissions: [], files: [], reviewLogs: [] };
}

function saveDemoDb(db) {
  localStorage.setItem(DEMO_DB_KEY, JSON.stringify(db));
}

function findSubmission(groupId, taskId) {
  if (!groupId) return null;
  return state.submissions.find(
    (submission) => submission.group_id === groupId && submission.task_id === taskId
  );
}

function getGroupSubmissions(groupId) {
  return state.submissions.filter(
    (submission) => submission.group_id === groupId && TASK_BY_ID.has(submission.task_id)
  );
}

function filesForSubmission(submission) {
  if (!submission) return [];
  const ids = submission.file_ids || [];
  return ids
    .map((fileId) => state.files.find((file) => file.file_id === fileId))
    .filter(Boolean);
}

function submissionHasFiles(submission) {
  return Boolean(submission && (submission.file_ids || []).length);
}

function submissionComplete(submission, task) {
  if (!submission) return false;
  if (task.type === "photo") return submissionHasFiles(submission);
  return Boolean(String(submission.answer_text || "").trim());
}

function getChallengeProgress(challenge, groupId) {
  const tasks = challenge.tasks.filter((task) => task.required);
  const done = tasks.filter((task) => submissionComplete(findSubmission(groupId, task.id), task)).length;
  return makeProgress(done, tasks.length);
}

function getOverallProgress(groupId) {
  const done = REQUIRED_TASKS.filter((task) =>
    submissionComplete(findSubmission(groupId, task.id), task)
  ).length;
  return makeProgress(done, REQUIRED_TASKS.length);
}

function makeProgress(done, total) {
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0
  };
}

function getFilteredAdminGroups() {
  return state.groups
    .filter((group) => group.role === "student")
    .filter((group) => state.filters.classNo === "all" || group.class_no === state.filters.classNo)
    .filter((group) => {
      if (state.filters.review === "all") return true;
      return getGroupSubmissions(group.group_id).some(
        (submission) => submission.teacher_status === state.filters.review
      );
    })
    .sort((a, b) => String(a.group_id).localeCompare(String(b.group_id), "zh-Hant"));
}

function getAdminStats(groups) {
  const groupIds = new Set(groups.map((group) => group.group_id));
  const submissions = state.submissions.filter(
    (submission) => groupIds.has(submission.group_id) && TASK_BY_ID.has(submission.task_id)
  );
  return {
    groupCount: groups.length,
    pendingCount: submissions.filter((submission) => submission.teacher_status === "pending").length,
    completedCount: groups.filter((group) => getOverallProgress(group.group_id).done === REQUIRED_TASKS.length).length
  };
}

function getRankings() {
  return state.groups
    .filter((group) => group.role === "student")
    .map((group) => {
      const submissions = getGroupSubmissions(group.group_id);
      const complete = REQUIRED_TASKS.every((task) =>
        submissionComplete(
          submissions.find((submission) => submission.task_id === task.id),
          task
        )
      );
      if (!complete) return null;
      const latestSubmissionTime = submissions
        .map((submission) => submission.updated_at || submission.submitted_at)
        .filter(Boolean)
        .sort()
        .at(-1);
      const completedAt = group.completed_at || latestSubmissionTime;
      const startedAt = group.started_at || group.created_at || completedAt;
      const durationSeconds = Math.max(
        0,
        Math.round((new Date(completedAt).getTime() - new Date(startedAt).getTime()) / 1000)
      );
      const approved = REQUIRED_TASKS.every((task) => {
        const submission = submissions.find((item) => item.task_id === task.id);
        return submission?.teacher_status === "approved";
      });
      return { group, completedAt, durationSeconds, approved };
    })
    .filter(Boolean)
    .sort((a, b) => a.durationSeconds - b.durationSeconds);
}

function getRankForGroup(groupId) {
  const index = getRankings().findIndex((row) => row.group.group_id === groupId);
  return index >= 0 ? `第 ${index + 1} 名` : "";
}

function renderSubmissionStatus(submission, task) {
  if (!submission) return `<span class="chip warn">尚未送出</span>`;
  const auto = {
    correct: ["ok", "自動判讀正確"],
    maybe: ["warn", "接近正確"],
    wrong: ["bad", "自動判讀待修正"],
    not_checked: ["", task.type === "photo" ? "照片待審核" : "待老師閱讀"]
  }[submission.auto_status || "not_checked"];
  const teacher = {
    pending: ["warn", "待老師審核"],
    approved: ["ok", "老師通過"],
    needs_fix: ["bad", "需補件"],
    rejected: ["bad", "已退回"]
  }[submission.teacher_status || "pending"];
  return `
    <span class="chip ${auto[0]}">${auto[1]}</span>
    <span class="chip ${teacher[0]}">${teacher[1]}</span>
  `;
}

function taskTypeLabel(task) {
  if (task.type === "photo") return "拍照題";
  if (task.type === "free_text") return "自由回答";
  return "問答題";
}

function renderImage(src, alt, imgClass, style = "") {
  return `
    <figure class="image-frame" style="${escapeAttribute(style)}">
      <img class="${escapeAttribute(imgClass)}" src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" onerror="this.closest('.image-frame').classList.add('is-broken')" />
      <figcaption>圖片載入失敗，請確認 Google Drive 檔案分享權限已設為「知道連結的任何人可檢視」。</figcaption>
    </figure>
  `;
}

function updateLoginDynamicFields() {
  const groupSelect = document.getElementById("login-group");
  const countSelect = document.getElementById("member-count");
  const seatFields = document.getElementById("seat-fields");
  if (!groupSelect || !countSelect || !seatFields) return;

  const isTeacher = groupSelect.value === "teacher";
  document.querySelectorAll(".student-only").forEach((item) => item.classList.toggle("hidden", isTeacher));
  document.querySelectorAll(".teacher-only").forEach((item) => item.classList.toggle("hidden", !isTeacher));
  document.getElementById("login-class")?.closest(".field")?.classList.toggle("hidden", isTeacher);

  const count = Number(countSelect.value || 1);
  seatFields.innerHTML = Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    return `
      <div class="field">
        <label for="seat-${number}">第${number}位座號</label>
        <input id="seat-${number}" name="seat_${number}" inputmode="numeric" placeholder="例如 03" />
      </div>
    `;
  }).join("");
}

function icon(name) {
  return `<i data-lucide="${name}" class="icon" aria-hidden="true"></i>`;
}

function driveImage(fileId, width = 1600) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function normalizeAnswer(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[，,。．.、；;：:\s「」『』"'!?！？()（）\-＿_]/g, "")
    .replace(/個/g, "")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function sanitizeFileName(name) {
  const clean = String(name || "photo.jpg")
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return clean || "photo.jpg";
}

function addDaysISO(isoString, days) {
  const date = new Date(isoString);
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

function formatDateTime(value) {
  if (!value) return "未記錄";
  return new Intl.DateTimeFormat("zh-TW", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours) return `${hours}小時${minutes}分`;
  if (minutes) return `${minutes}分${secs}秒`;
  return `${secs}秒`;
}

function formatSeatNumbers(seatNumbers) {
  if (!seatNumbers || !seatNumbers.length) return "無";
  return seatNumbers.join("、");
}

function getSessionLabel(session) {
  if (!session) return "尚未登入";
  if (session.role === "teacher") return "老師組";
  return `${session.classNo}班 第${session.groupNo}組`;
}

function getGroupLabel(group) {
  if (group.role === "teacher") return "老師組";
  return `${group.class_no}班 第${group.group_no}組`;
}

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function safeSessionGet(key) {
  try {
    return sessionStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function safeSessionSet(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Ignore private browsing or blocked storage.
  }
}

function safeSessionRemove(key) {
  try {
    sessionStorage.removeItem(key);
  } catch {
    // Ignore private browsing or blocked storage.
  }
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
