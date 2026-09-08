'use strict';

/* =========================================================
   VEM FAN ÄR DET?
   Ren vanilla JS – ingen backend, ingen build, funkar offline.
   ========================================================= */

/* ---------------------------------------------------------
   FRÅGEDATABAS
   Varje fråga har en text + kategori.
   --------------------------------------------------------- */
const CATEGORIES = {
  BRUTAL: '🔥 BRUTAL',
  FYLLA: '🍺 FYLLA',
  RELATIONER: '❤️ RELATIONER',
  PINSAMT: '🤡 PINSAMT',
  MORK: '💀 MÖRK HUMOR',
  PENGAR: '💰 PENGAR',
  PERSONLIGHET: '🧠 PERSONLIGHET',
  HEMLIGHETER: '👀 HEMLIGHETER',
};

const QUESTIONS = [
  // --- BRUTAL ---
  { cat: 'BRUTAL', text: 'Vem skulle kunna vara otrogen och lyckas övertyga sig själv om att det egentligen inte räknas?' },
  { cat: 'BRUTAL', text: 'Vem skulle sälja ut sina två bästa polare om det innebar att han blev rik?' },
  { cat: 'BRUTAL', text: 'Vem skulle mest sannolikt hamna i slagsmål på fyllan och sedan hävda att han inte startade det?' },
  { cat: 'BRUTAL', text: 'Vem skulle kunna bli gripen för något fullständigt idiotiskt?' },
  { cat: 'BRUTAL', text: 'Vem skulle ljuga rakt upp i ansiktet på sin bästa vän om det gynnade honom själv?' },
  { cat: 'BRUTAL', text: 'Vem skulle överge er mitt i natten om han fick en bättre erbjudan?' },
  { cat: 'BRUTAL', text: 'Vem skulle skylla på någon annan även när han vet att det är hans eget fel?' },
  { cat: 'BRUTAL', text: 'Vem skulle trampa på en kompis om han fick chansen att se cool ut inför andra?' },

  // --- FYLLA ---
  { cat: 'FYLLA', text: 'Vem skulle mest sannolikt vakna dagen efter och ha absolut ingen aning om hur han kom hem?' },
  { cat: 'FYLLA', text: 'Vem gråter garanterat efter fem shots utan att kunna förklara varför?' },
  { cat: 'FYLLA', text: 'Vem skulle ringa sitt ex klockan tre på natten och sedan förneka allt dagen efter?' },
  { cat: 'FYLLA', text: 'Vem somnar först på förfesten men svär att han "bara vilade ögonen"?' },
  { cat: 'FYLLA', text: 'Vem skulle beställa mat för 500 spänn på fyllan och ångra sig direkt morgonen efter?' },
  { cat: 'FYLLA', text: 'Vem blir den där random personen som börjar bli bäst kompis med hela krogen?' },
  { cat: 'FYLLA', text: 'Vem skulle tappa bort sina skor, sin jacka och sin plånbok – samma kväll?' },
  { cat: 'FYLLA', text: 'Vem skulle göra bort sig på dansgolvet så illa att det blir en historia för livet?' },

  // --- RELATIONER ---
  { cat: 'RELATIONER', text: 'Vem skulle ligga med sitt ex igen trots att han vet exakt hur dålig idé det är?' },
  { cat: 'RELATIONER', text: 'Vem skulle ghosta sin bästa vän om han träffade en ny tjej?' },
  { cat: 'RELATIONER', text: 'Vem skulle gifta sig med någon han egentligen inte älskar bara för pengar?' },
  { cat: 'RELATIONER', text: 'Vem skulle bli kvar i en dålig relation i åratal bara för att undvika att vara ensam?' },
  { cat: 'RELATIONER', text: 'Vem skulle säga "jag älskar dig" fast han inte menar det, bara för att slippa bråk?' },
  { cat: 'RELATIONER', text: 'Vem skulle dumpa någon via sms och tro att det var ett schysst sätt att göra det på?' },
  { cat: 'RELATIONER', text: 'Vem skulle bli svartsjuk på sin partners bästa vän utan att erkänna det för någon?' },
  { cat: 'RELATIONER', text: 'Vem kommer bli den där bittra skilsmässopappan om tio år?' },

  // --- PINSAMT ---
  { cat: 'PINSAMT', text: 'Vem skulle skicka fel meddelande till fel person och orsaka totalt kaos?' },
  { cat: 'PINSAMT', text: 'Vem skulle bli tagen på bar gärning med något fullständigt pinsamt på sin dator?' },
  { cat: 'PINSAMT', text: 'Vem skulle ramla offentligt och sedan resa sig upp och låtsas att inget hänt?' },
  { cat: 'PINSAMT', text: 'Vem har garanterat den mest genanta sökhistoriken av oss tre?' },
  { cat: 'PINSAMT', text: 'Vem skulle av misstag "gilla" ett foto från fem år tillbaka på sin crush?' },
  { cat: 'PINSAMT', text: 'Vem skulle bli tillsagd av en lärare/chef inför alla och ändå försöka skratta bort det?' },
  { cat: 'PINSAMT', text: 'Vem skulle presentera sig fel för någon han redan träffat tre gånger?' },
  { cat: 'PINSAMT', text: 'Vem skulle sjunga karaoke helt övertygad om att han är grym, fast han är hemsk?' },

  // --- MÖRK HUMOR ---
  { cat: 'MORK', text: 'Vem skulle kunna leva dubbelliv längst utan att någon märker något?' },
  { cat: 'MORK', text: 'Vem hade klarat sig längst i en zombie-apokalyps genom att offra oss andra?' },
  { cat: 'MORK', text: 'Vem skulle bli sekten-ledaren om vi startade en sekt ikväll?' },
  { cat: 'MORK', text: 'Vem hade blivit galningen i en true crime-dokumentär om trettio år?' },
  { cat: 'MORK', text: 'Vem skulle kunna begrava ett lik utan att någonsin få ångest av det?' },
  { cat: 'MORK', text: 'Vem hade sålt oss andra till aliens för en bättre deal?' },
  { cat: 'MORK', text: 'Vem skulle fortsätta äta middag lugnt om huset började brinna, "bara några minuter till"?' },
  { cat: 'MORK', text: 'Vem hade blivit skurken i en film om sitt eget liv?' },

  // --- PENGAR ---
  { cat: 'PENGAR', text: 'Vem skulle vara mest benägen att sno pengar från en kompis och aldrig erkänna det?' },
  { cat: 'PENGAR', text: 'Vem skulle spendera hela lönen på skit han inte behöver samma dag han fick den?' },
  { cat: 'PENGAR', text: 'Vem skulle "glömma" plånboken varje gång notan kommer?' },
  { cat: 'PENGAR', text: 'Vem skulle satsa allt på ett enda dåligt investeringsförslag från en okänd på nätet?' },
  { cat: 'PENGAR', text: 'Vem kommer bli miljonär av ren tur och sedan låtsas att det var strategi?' },
  { cat: 'PENGAR', text: 'Vem skulle låna pengar av oss och "glömma" att betala tillbaka i över ett år?' },
  { cat: 'PENGAR', text: 'Vem skulle köpa en bil han inte har råd med bara för att imponera på folk han inte gillar?' },
  { cat: 'PENGAR', text: 'Vem skulle gå i personlig konkurs och ändå posta semesterbilder samma vecka?' },

  // --- PERSONLIGHET ---
  { cat: 'PERSONLIGHET', text: 'Vem har störst chans att bli en helt annan person om tio år?' },
  { cat: 'PERSONLIGHET', text: 'Vem skulle bli kultledare, influencer eller bägge samtidigt?' },
  { cat: 'PERSONLIGHET', text: 'Vem klarar minst kritik utan att bli sur i tre dagar?' },
  { cat: 'PERSONLIGHET', text: 'Vem skulle ändra hela sin personlighet för att passa in i ett nytt gäng?' },
  { cat: 'PERSONLIGHET', text: 'Vem är mest troligt att bli den där random typen som pratar om crypto på varje fest?' },
  { cat: 'PERSONLIGHET', text: 'Vem skulle bli helt outhärdlig om han fick makt över andra människor?' },
  { cat: 'PERSONLIGHET', text: 'Vem skulle byta hela sin identitet bara för att verka mer intressant på Tinder?' },
  { cat: 'PERSONLIGHET', text: 'Vem skulle mest sannolikt bli mätt på livet och flytta till en annan del av världen utan förvarning?' },

  // --- HEMLIGHETER ---
  { cat: 'HEMLIGHETER', text: 'Vem har den mörkaste hemligheten av oss tre som han aldrig kommer berätta?' },
  { cat: 'HEMLIGHETER', text: 'Vem har garanterat ljugit om något stort för att slippa skämmas?' },
  { cat: 'HEMLIGHETER', text: 'Vem har snokat i en partners telefon och aldrig sagt något om det?' },
  { cat: 'HEMLIGHETER', text: 'Vem har garanterat en hemlig grupp-chatt som han aldrig skulle vilja att vi såg?' },
  { cat: 'HEMLIGHETER', text: 'Vem har gjort något olagligt som han fortfarande inte berättat för oss?' },
  { cat: 'HEMLIGHETER', text: 'Vem har troligtvis stalkat sitt ex på sociala medier senast i veckan?' },
  { cat: 'HEMLIGHETER', text: 'Vem har en hemlig talang eller ett hemligt intresse han skäms för?' },
  { cat: 'HEMLIGHETER', text: 'Vem skulle ha svårast att svara ärligt om vi frågade "vad är din värsta hemlighet"?' },

  // --- extra blandade för variation (60+) ---
  { cat: 'BRUTAL', text: 'Vem skulle strunta i ett löfte till en av oss om det gynnade honom själv?' },
  { cat: 'FYLLA', text: 'Vem är den som alltid vill ha "bara en runda till" fast alla andra vill hem?' },
  { cat: 'RELATIONER', text: 'Vem skulle jämföra varje ny partner med sitt ex, utan att fatta att han gör det?' },
  { cat: 'PINSAMT', text: 'Vem skulle av misstag skicka ett nakenbild till fel chatt?' },
  { cat: 'MORK', text: 'Vem hade klarat sig sämst om vi tre blev strandsatta på en öde ö?' },
  { cat: 'PENGAR', text: 'Vem skulle betala för en dyr middag bara för att slippa se billig ut?' },
  { cat: 'PERSONLIGHET', text: 'Vem är mest sannolik att bli helt oigenkännlig efter att ha hittat "sitt sanna jag" på en resa?' },
  { cat: 'HEMLIGHETER', text: 'Vem har troligast ett hemligt Tinder-konto trots att han är upptagen?' },
];

const SPECIAL_EVENTS = [
  { id: 'double', icon: '🔥', label: 'DOUBLE DAMAGE', desc: 'Vinnaren av rundan får DUBBLA poäng!' },
  { id: 'revenge', icon: '☠️', label: 'HÄMND', desc: 'Spelaren med lägst poäng väljer vem som får +1 bonuspoäng!' },
  { id: 'target', icon: '🎯', label: 'MÅLTAVLA', desc: 'Ledaren i poäng får INTE rösta på sig själv denna runda!' },
  { id: 'chaos', icon: '💀', label: 'KAOS', desc: 'Alla måste förklara sin röst högt innan ni går vidare!' },
  { id: 'king', icon: '👑', label: 'KVÄLLENS KUNG', desc: 'Den som leder just nu kröns till Kvällens Kung!' },
  { id: 'silent', icon: '🤐', label: 'TYST RUNDA', desc: 'Ingen får säga ett ljud medan ni röstar denna runda!' },
  { id: 'mirror', icon: '🪞', label: 'SPEGELVÄNT', desc: 'Den med FÄRST röster denna runda får poängen istället!' },
  { id: 'allin', icon: '💣', label: 'ALLT ELLER INGET', desc: 'Vid enhälligt val (alla röstar på samma) tredubblas poängen!' },
];

const WINNER_TITLES = [
  '👑 AIRBNB-KUNGEN',
  '💀 ÅRETS JÄVEL',
  '🍺 FULLAST I HUVUDET',
  '🤡 SOCIALT MISSFOSTER',
  '🐀 ÅRETS RÅTTA',
  '🔥 CHAOS LORD',
  '🏆 DEN OUTHÄRDLIGA',
  '🕶️ MEST TROLIG ATT HAMNA I FÄNGELSE',
  '🎭 STÖRSTA SKÅDESPELAREN',
  '🧨 MÄNSKLIG TIDSINSTÄLLD BOMB',
  '🍆 KVÄLLENS SKAM',
  '🦂 GIFTIGASTE PERSONEN I RUMMET',
];

const TOTAL_ROUNDS = 15;
const SPECIAL_EVENT_INTERVAL = 5;

/* ---------------------------------------------------------
   STATE
   --------------------------------------------------------- */
let state = {
  mode: 'local', // 'local' | 'host' | 'guest'
  players: ['', '', ''],
  scores: [0, 0, 0],
  round: 0,
  questionPool: [],
  usedQuestions: [],
  currentQuestion: null,
  votes: [null, null, null], // index of who each voter voted for
  voterIndex: 0,
  pendingVoteChoice: null,
  activeSpecialEvent: null,
  lastRoundGains: [0, 0, 0],
};

/* ---------------------------------------------------------
   DOM SHORTCUTS
   --------------------------------------------------------- */
const $ = (id) => document.getElementById(id);

const screens = {
  modeSelect: $('screen-mode-select'),
  localSetup: $('screen-local-setup'),
  game: $('screen-game'),
  remoteChoice: $('screen-remote-choice'),
  hostName: $('screen-host-name'),
  hostLobby: $('screen-host-lobby'),
  joinForm: $('screen-join-form'),
  guestLobby: $('screen-guest-lobby'),
  remoteGame: $('screen-remote-game'),
  over: $('screen-over'),
};

const stages = {
  question: $('stage-question'),
  votingPrompt: $('stage-voting-prompt'),
  confirm: $('stage-confirm'),
  locked: $('stage-locked'),
  reveal: $('stage-reveal'),
  chaos: $('stage-chaos'),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function showStage(name) {
  Object.values(stages).forEach((s) => s.classList.remove('active'));
  stages[name].classList.add('active');
}

const rStages = {
  question: $('r-stage-question'),
  vote: $('r-stage-vote'),
  confirm: $('r-stage-confirm'),
  waiting: $('r-stage-waiting'),
  chaos: $('r-stage-chaos'),
  reveal: $('r-stage-reveal'),
};

function showRStage(name) {
  Object.values(rStages).forEach((s) => s.classList.remove('active'));
  rStages[name].classList.add('active');
}

/* ---------------------------------------------------------
   NAVIGATION — mode select + generic back buttons
   --------------------------------------------------------- */
$('btn-mode-local').addEventListener('click', () => showScreen('localSetup'));
$('btn-mode-remote').addEventListener('click', () => showScreen('remoteChoice'));

document.querySelectorAll('[data-back-to]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-back-to');
    Object.values(screens).forEach((s) => s.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});

/* ---------------------------------------------------------
   UTIL
   --------------------------------------------------------- */
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Builds a shuffled question order that avoids repeating the same
// category more than twice in a row, when possible.
function buildQuestionPool() {
  let pool = shuffle(QUESTIONS);
  const result = [];
  const remaining = pool.slice();

  while (remaining.length) {
    let pickIndex = 0;
    const lastTwo = result.slice(-2).map((q) => q.cat);
    if (lastTwo.length === 2 && lastTwo[0] === lastTwo[1]) {
      const altIndex = remaining.findIndex((q) => q.cat !== lastTwo[0]);
      if (altIndex !== -1) pickIndex = altIndex;
    }
    result.push(remaining.splice(pickIndex, 1)[0]);
  }
  return result;
}

/* ---------------------------------------------------------
   SETUP / START
   --------------------------------------------------------- */
$('setup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const names = [
    $('input-p1').value.trim(),
    $('input-p2').value.trim(),
    $('input-p3').value.trim(),
  ];
  if (names.some((n) => !n)) return;
  startGame(names);
});

function startGame(names) {
  state.mode = 'local';
  state.players = names;
  state.scores = [0, 0, 0];
  state.round = 0;
  state.questionPool = buildQuestionPool();
  state.usedQuestions = [];

  try {
    localStorage.setItem('vfad_players', JSON.stringify(names));
  } catch (err) { /* localStorage unavailable, ignore */ }

  showScreen('game');
  renderScoreboard();
  nextQuestion();
}

/* ---------------------------------------------------------
   QUESTION FLOW
   --------------------------------------------------------- */
function nextQuestion() {
  if (state.round >= TOTAL_ROUNDS) {
    endGame();
    return;
  }

  state.round += 1;
  state.votes = [null, null, null];
  state.voterIndex = 0;
  state.pendingVoteChoice = null;
  state.activeSpecialEvent = null;
  state.lastRoundGains = [0, 0, 0];

  state.currentQuestion = state.questionPool[state.round - 1];

  updateRoundIndicator();
  renderQuestionStage();

  // Every 5th round: trigger a special event.
  if (state.round % SPECIAL_EVENT_INTERVAL === 0) {
    showSpecialEvent();
  } else {
    hideSpecialEventBanner();
  }

  showStage('question');
}

function updateRoundIndicator() {
  $('round-label').textContent = `FRÅGA ${state.round} / ${TOTAL_ROUNDS}`;
  const pct = ((state.round - 1) / TOTAL_ROUNDS) * 100;
  $('progress-bar').style.width = `${pct}%`;
}

function renderQuestionStage() {
  const q = state.currentQuestion;
  $('category-badge').textContent = CATEGORIES[q.cat];
  $('question-text').textContent = q.text;

  const container = $('vote-buttons');
  container.innerHTML = '';
  state.players.forEach((name, idx) => {
    const btn = document.createElement('button');
    btn.className = 'vote-btn';
    btn.textContent = name.toUpperCase();
    btn.setAttribute('aria-label', `Se namn: ${name}`);
    btn.disabled = true; // Just a preview list; actual voting happens in voting stage.
    container.appendChild(btn);
  });
}

/* ---------------------------------------------------------
   SPECIAL EVENTS
   --------------------------------------------------------- */
function showSpecialEvent() {
  const event = SPECIAL_EVENTS[Math.floor(Math.random() * SPECIAL_EVENTS.length)];
  state.activeSpecialEvent = event;

  const banner = $('special-event-banner');
  $('special-event-icon').textContent = event.icon;
  $('special-event-text').textContent = `${event.label}: ${event.desc}`;
  banner.hidden = false;
}

function hideSpecialEventBanner() {
  $('special-event-banner').hidden = true;
}

/* ---------------------------------------------------------
   VOTING
   --------------------------------------------------------- */
$('btn-start-voting').addEventListener('click', startVoting);

function startVoting() {
  state.voterIndex = 0;
  presentVoter();
}

function presentVoter() {
  const voterName = state.players[state.voterIndex];
  $('voter-heading').textContent = `${voterName.toUpperCase()} RÖSTAR`;

  const container = $('voter-buttons');
  container.innerHTML = '';

  const event = state.activeSpecialEvent;
  const leaderIdx = getLeaderIndex();

  state.players.forEach((name, idx) => {
    // 🎯 TARGET: the current leader cannot vote for himself.
    if (event && event.id === 'target' && idx === leaderIdx && idx === state.voterIndex) {
      return;
    }
    const btn = document.createElement('button');
    btn.className = 'vote-btn';
    btn.textContent = name.toUpperCase();
    btn.setAttribute('aria-label', `Rösta på ${name}`);
    btn.addEventListener('click', () => castVote(idx));
    container.appendChild(btn);
  });

  showStage('votingPrompt');
}

function getLeaderIndex() {
  let maxScore = Math.max(...state.scores);
  return state.scores.indexOf(maxScore);
}

function getLowestIndex() {
  let minScore = Math.min(...state.scores);
  return state.scores.indexOf(minScore);
}

// castVote() records the player's pending choice and asks for confirmation
// to avoid accidental taps ruining the game.
function castVote(choiceIdx) {
  state.pendingVoteChoice = choiceIdx;
  $('confirm-choice-text').textContent = state.players[choiceIdx].toUpperCase();
  showStage('confirm');
}

$('btn-confirm-yes').addEventListener('click', confirmVote);
$('btn-confirm-no').addEventListener('click', () => {
  state.pendingVoteChoice = null;
  showStage('votingPrompt');
});

function confirmVote() {
  state.votes[state.voterIndex] = state.pendingVoteChoice;
  state.pendingVoteChoice = null;
  showStage('locked');

  setTimeout(() => {
    state.voterIndex += 1;
    if (state.voterIndex < state.players.length) {
      presentVoter();
    } else {
      revealVotes();
    }
  }, 900);
}

/* ---------------------------------------------------------
   REVEAL
   --------------------------------------------------------- */
function revealVotes() {
  const event = state.activeSpecialEvent;

  // 💀 CHAOS: everyone must explain their vote before results show.
  if (event && event.id === 'chaos') {
    showStage('chaos');
    return;
  }

  doReveal();
}

$('btn-chaos-continue').addEventListener('click', doReveal);

function doReveal() {
  const tally = [0, 0, 0];
  state.votes.forEach((voteIdx) => {
    if (voteIdx !== null) tally[voteIdx] += 1;
  });

  const gains = calculateScores(tally);
  state.lastRoundGains = gains;

  renderRevealBars(tally, gains);
  renderVerdict(tally);
  renderPointsGained(gains);

  state.scores = state.scores.map((s, i) => s + gains[i]);
  renderScoreboard(true);

  showStage('reveal');
}

function renderRevealBars(tally, gains) {
  const container = $('reveal-bars');
  container.innerHTML = '';
  const maxVotes = Math.max(...tally, 1);

  // Sort by votes desc for dramatic bar order, but keep original identity.
  const order = state.players.map((_, i) => i).sort((a, b) => tally[b] - tally[a]);

  order.forEach((idx) => {
    const row = document.createElement('div');
    row.className = 'reveal-bar-row';
    if (tally[idx] === maxVotes && maxVotes > 0) row.classList.add('winner');

    const label = document.createElement('div');
    label.className = 'reveal-bar-label';
    label.innerHTML = `<span>${state.players[idx].toUpperCase()}</span><span>${tally[idx]}</span>`;

    const track = document.createElement('div');
    track.className = 'reveal-bar-track';
    const fill = document.createElement('div');
    fill.className = 'reveal-bar-fill';
    track.appendChild(fill);

    row.appendChild(label);
    row.appendChild(track);
    container.appendChild(row);

    // Animate the bar width shortly after insertion.
    requestAnimationFrame(() => {
      setTimeout(() => {
        fill.style.width = `${(tally[idx] / maxVotes) * 100}%`;
      }, 60);
    });
  });
}

function renderVerdict(tally) {
  const maxVotes = Math.max(...tally);
  const winners = state.players.filter((_, i) => tally[i] === maxVotes);
  const verdictEl = $('reveal-verdict');

  if (maxVotes === 0) {
    verdictEl.textContent = 'Ingen röstade på någon?! Fegisar.';
  } else if (winners.length > 1) {
    verdictEl.textContent = `💀 OAVGJORT MELLAN ${winners.join(' & ').toUpperCase()}`;
  } else {
    verdictEl.textContent = `💀 ${winners[0].toUpperCase()} ÄR DEN STÖRSTA JÄVELN`;
  }
  // restart shake animation
  verdictEl.style.animation = 'none';
  void verdictEl.offsetWidth;
  verdictEl.style.animation = '';
}

function renderPointsGained(gains) {
  const parts = state.players
    .map((name, i) => (gains[i] > 0 ? `${name} <span class="pg-plus">+${gains[i]}</span>` : null))
    .filter(Boolean);
  $('points-gained').innerHTML = parts.length ? parts.join(' &nbsp;·&nbsp; ') : 'Ingen fick poäng denna runda.';
}

/* ---------------------------------------------------------
   SCORING
   calculateScores() applies base placement points (3 / 1 / 0),
   handles ties, and applies any active special event modifier.
   --------------------------------------------------------- */
function calculateScores(tally) {
  const gains = [0, 0, 0];
  const event = state.activeSpecialEvent;

  // Rank distinct vote counts descending: highest -> 3pts, next distinct -> 1pt, rest -> 0.
  const sortedUnique = [...new Set(tally)].sort((a, b) => b - a);
  const first = sortedUnique[0];
  const second = sortedUnique[1];

  state.players.forEach((_, i) => {
    if (tally[i] === first && first > 0) {
      gains[i] = 3;
    } else if (second !== undefined && tally[i] === second && second > 0) {
      gains[i] = 1;
    } else {
      gains[i] = 0;
    }
  });

  if (event) {
    if (event.id === 'double') {
      // 🔥 DOUBLE DAMAGE: winner(s) receive double points.
      const maxGain = Math.max(...gains);
      gains.forEach((g, i) => {
        if (g === maxGain && maxGain > 0) gains[i] = g * 2;
      });
    } else if (event.id === 'revenge') {
      // ☠️ REVENGE: lowest-scoring player grants +1 to whoever they pick (random pick here, since it's single-device).
      const lowestIdx = getLowestIndex();
      const options = state.players.map((_, i) => i).filter((i) => i !== lowestIdx);
      const chosen = options[Math.floor(Math.random() * options.length)];
      gains[chosen] += 1;
    } else if (event.id === 'mirror') {
      // 🪞 SPEGELVÄNT: fewest votes gets the points instead.
      const minVotes = Math.min(...tally);
      const mirrored = [0, 0, 0];
      state.players.forEach((_, i) => {
        mirrored[i] = tally[i] === minVotes ? 3 : 0;
      });
      return mirrored;
    } else if (event.id === 'allin') {
      // 💣 ALLT ELLER INGET: unanimous vote triples the winner's points.
      const maxVotes = Math.max(...tally);
      if (maxVotes === state.players.length) {
        gains.forEach((g, i) => {
          if (g > 0) gains[i] = g * 3;
        });
      }
    }
    // king / target / chaos / silent affect voting/flavor, not scoring math directly.
  }

  return gains;
}

$('btn-next-question').addEventListener('click', nextQuestion);

/* ---------------------------------------------------------
   SCOREBOARD
   --------------------------------------------------------- */
function renderScoreboard(animate) {
  const leaderScore = Math.max(...state.scores);

  // Mini scoreboard (topbar)
  const mini = $('scoreboard-mini-list');
  mini.innerHTML = '';
  state.players.forEach((name, i) => {
    const entry = document.createElement('div');
    entry.className = 'sb-entry' + (state.scores[i] === leaderScore && leaderScore > 0 ? ' leader' : '');
    const gain = state.lastRoundGains[i];
    entry.innerHTML = `
      <span class="sb-name">${name}</span>
      <span class="sb-pts${animate && gain > 0 ? ' score-pop' : ''}">${state.scores[i]}</span>
    `;
    mini.appendChild(entry);
  });

  // Full scoreboard panel
  const full = $('scoreboard-full-list');
  full.innerHTML = '';
  const ranked = state.players
    .map((name, i) => ({ name, score: state.scores[i] }))
    .sort((a, b) => b.score - a.score);

  ranked.forEach((p) => {
    const li = document.createElement('li');
    if (p.score === leaderScore && leaderScore > 0) li.classList.add('leader');
    li.innerHTML = `<span>${p.name}</span><span>${p.score} p</span>`;
    full.appendChild(li);
  });
}

$('scoreboard-toggle').addEventListener('click', () => {
  const panel = $('scoreboard-panel');
  panel.hidden = false;
  $('scoreboard-toggle').setAttribute('aria-expanded', 'true');
});
$('scoreboard-close').addEventListener('click', closeScoreboard);
function closeScoreboard() {
  $('scoreboard-panel').hidden = true;
  $('scoreboard-toggle').setAttribute('aria-expanded', 'false');
}

/* ---------------------------------------------------------
   GAME OVER
   --------------------------------------------------------- */
function endGame() {
  updateRoundIndicator();
  $('round-label').textContent = `FRÅGA ${TOTAL_ROUNDS} / ${TOTAL_ROUNDS}`;
  $('progress-bar').style.width = '100%';

  renderGameOverUI(state.players, state.scores);
  updateGameOverControls();
  showScreen('over');
  launchConfetti();
}

// renderGameOverUI() builds the final ranking + winner title.
// Shared by local mode and the multiplayer (host/guest) game-over flow.
function renderGameOverUI(players, scores) {
  const ranked = players
    .map((name, i) => ({ name, score: scores[i] }))
    .sort((a, b) => b.score - a.score);

  const medals = ['🥇', '🥈', '🥉'];
  const container = $('final-ranking');
  container.innerHTML = '';
  ranked.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'rank-row' + (i === 0 ? ' gold' : '');
    row.innerHTML = `
      <span class="rank-medal">${medals[i] || '🎖️'}</span>
      <span class="rank-name">${i + 1}. ${p.name.toUpperCase()}</span>
      <span class="rank-pts">${p.score} POÄNG</span>
    `;
    container.appendChild(row);
  });

  const winnerTitle = WINNER_TITLES[Math.floor(Math.random() * WINNER_TITLES.length)];
  $('winner-title-card').innerHTML = `${ranked[0].name.toUpperCase()} FÅR TITELN:<br>${winnerTitle}`;
}

// Shows/hides "SPELA IGEN" vs "väntar på värden" depending on multiplayer role.
function updateGameOverControls() {
  const isGuest = state.mode === 'guest';
  $('btn-play-again').hidden = isGuest;
  $('over-wait').hidden = !isGuest;
}

function launchConfetti() {
  const layer = $('confetti-layer');
  layer.innerHTML = '';
  const colors = ['#ff2e88', '#9b5cff', '#29f0d6', '#ffd23f'];
  const pieceCount = 60;

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    layer.appendChild(piece);
  }

  setTimeout(() => { layer.innerHTML = ''; }, 5000);
}

$('btn-play-again').addEventListener('click', () => {
  if (state.mode === 'host') {
    resetRemoteGame();
  } else if (state.mode !== 'guest') {
    resetGame();
  }
});

function resetGame() {
  state.scores = [0, 0, 0];
  state.round = 0;
  state.questionPool = buildQuestionPool();
  state.usedQuestions = [];
  state.activeSpecialEvent = null;

  showScreen('game');
  renderScoreboard();
  nextQuestion();
}

/* =========================================================
   MULTIPLAYER — "VARSIN TELEFON" (WebRTC via PeerJS)
   No server, no database: phones connect directly to each other
   over WebRTC data channels. PeerJS's free public broker is only
   used to introduce the phones to each other (signaling) — the
   votes, questions and scores themselves never touch a database.

   The host device is the authoritative source of truth: it builds
   the question pool, picks special events, tallies votes and
   broadcasts every state change. Guest devices just render what
   they're sent and report their own votes back to the host.
   ========================================================= */

const ROOM_PREFIX = 'vfad-';
const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no O/0/I/1 (avoid confusion)

let net = {
  peer: null,
  conns: [null, null],      // host only: guest connections, indexed by seat-1
  hostConn: null,           // guest only: connection to the host
  seatNames: [null, null, null],
  mySeat: 0,
  roomCode: '',
  pendingVoteChoice: null,
};

function randomRoomCode() {
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += ROOM_CODE_CHARS[Math.floor(Math.random() * ROOM_CODE_CHARS.length)];
  }
  return code;
}

function tallyVotes(votes) {
  const tally = [0, 0, 0];
  votes.forEach((v) => { if (v !== null) tally[v] += 1; });
  return tally;
}

function broadcastToGuests(msg) {
  net.conns.forEach((conn) => {
    if (conn && conn.open) conn.send(msg);
  });
}

/* ---------------------------------------------------------
   HOST: create room
   --------------------------------------------------------- */
function createHostRoom(hostName, attemptsLeft) {
  if (attemptsLeft === undefined) attemptsLeft = 6;
  const code = randomRoomCode();
  const peer = new Peer(ROOM_PREFIX + code, { debug: 0 });

  peer.on('open', () => {
    net.peer = peer;
    net.roomCode = code;
    net.seatNames = [hostName, null, null];
    net.mySeat = 0;
    net.conns = [null, null];
    state.mode = 'host';
    state.players = [hostName, '', ''];

    $('room-code-display').textContent = code;
    renderQrCode(buildJoinUrl(code));
    renderHostLobby();
    showScreen('hostLobby');

    peer.on('connection', handleIncomingConnection);
  });

  peer.on('error', (err) => {
    if (err && err.type === 'unavailable-id' && attemptsLeft > 0) {
      peer.destroy();
      createHostRoom(hostName, attemptsLeft - 1);
    } else {
      showHostError('Kunde inte skapa rum. Kolla din internetanslutning och försök igen.');
    }
  });
}

function showHostError(msg) {
  const el = $('host-error');
  el.textContent = msg;
  el.hidden = false;
}

function buildJoinUrl(code) {
  return `${location.origin}${location.pathname}?room=${code}`;
}

function renderQrCode(url) {
  const box = $('qr-box');
  box.innerHTML = '';
  try {
    const qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    box.innerHTML = qr.createSvgTag({ cellSize: 5, margin: 2 });
  } catch (err) {
    box.hidden = true;
  }
}

function handleIncomingConnection(conn) {
  const freeSeat = net.seatNames.findIndex((n, i) => i > 0 && !n && !net.conns[i - 1]);
  if (freeSeat === -1) {
    conn.on('open', () => {
      conn.send({ type: 'full' });
      setTimeout(() => conn.close(), 300);
    });
    return;
  }

  net.conns[freeSeat - 1] = conn;

  conn.on('data', (msg) => handleHostMessage(freeSeat, msg));
  conn.on('close', () => handleGuestDisconnect(freeSeat));
  conn.on('error', () => handleGuestDisconnect(freeSeat));
}

function handleGuestDisconnect(seatIdx) {
  net.conns[seatIdx - 1] = null;
  net.seatNames[seatIdx] = null;
  if (state.players) state.players[seatIdx] = '';
  broadcastLobby();
  if (screens.hostLobby.classList.contains('active')) renderHostLobby();
}

function handleHostMessage(seatIdx, msg) {
  if (!msg || !msg.type) return;

  if (msg.type === 'hello') {
    net.seatNames[seatIdx] = msg.name;
    state.players[seatIdx] = msg.name;
    const conn = net.conns[seatIdx - 1];
    if (conn) conn.send({ type: 'welcome', seat: seatIdx });
    broadcastLobby();
    renderHostLobby();
  } else if (msg.type === 'vote') {
    recordRemoteVote(seatIdx, msg.choice);
  }
}

function broadcastLobby() {
  broadcastToGuests({ type: 'lobby', seats: net.seatNames });
}

function renderHostLobby() {
  renderSeatList('lobby-seat-list', net.seatNames);
  const ready = net.seatNames.every(Boolean);
  const btn = $('btn-host-start');
  btn.disabled = !ready;
  btn.textContent = ready ? 'STARTA SPELET' : 'VÄNTAR PÅ SPELARE…';
}

function renderSeatList(elementId, seatNames) {
  const list = $(elementId);
  list.innerHTML = '';
  seatNames.forEach((name, i) => {
    const li = document.createElement('li');
    li.textContent = name ? `${i === 0 ? '👑 ' : ''}${name}` : `Väntar på spelare ${i + 1}…`;
    li.className = name ? 'seat-filled' : 'seat-empty';
    list.appendChild(li);
  });
}

$('host-name-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('input-host-name').value.trim();
  if (!name) return;
  $('host-error').hidden = true;
  createHostRoom(name);
});

$('btn-host-start').addEventListener('click', () => {
  if (!net.seatNames.every(Boolean)) return;
  state.scores = [0, 0, 0];
  state.round = 0;
  state.questionPool = buildQuestionPool();
  state.players = net.seatNames.slice();

  broadcastToGuests({ type: 'start', seats: net.seatNames });
  showScreen('remoteGame');
  renderRemoteScoreboard(false);
  nextQuestionRemote();
});

/* ---------------------------------------------------------
   GUEST: join room
   --------------------------------------------------------- */
function joinRoom(name, codeRaw) {
  const code = codeRaw.trim().toUpperCase();
  if (code.length !== 4) {
    showJoinError('Rumskoden ska vara 4 tecken.');
    return;
  }

  $('join-error').hidden = true;
  const peer = new Peer({ debug: 0 });

  peer.on('open', () => {
    net.peer = peer;
    const conn = peer.connect(ROOM_PREFIX + code, { reliable: true });
    net.hostConn = conn;

    conn.on('open', () => {
      conn.send({ type: 'hello', name });
    });
    conn.on('data', handleGuestMessage);
    conn.on('close', () => {
      showJoinError('Tappade anslutningen till värden.');
    });
    conn.on('error', () => {
      showJoinError('Kunde inte ansluta. Kolla koden och försök igen.');
    });
  });

  peer.on('error', (err) => {
    showJoinError('Kunde inte ansluta. Kolla koden och försök igen.');
  });
}

function showJoinError(msg) {
  const el = $('join-error');
  el.textContent = msg;
  el.hidden = false;
}

function handleGuestMessage(msg) {
  if (!msg || !msg.type) return;

  if (msg.type === 'welcome') {
    net.mySeat = msg.seat;
    state.mode = 'guest';
  } else if (msg.type === 'full') {
    showJoinError('Rummet är fullt (max 3 spelare).');
    if (net.hostConn) net.hostConn.close();
  } else if (msg.type === 'lobby') {
    net.seatNames = msg.seats;
    state.players = msg.seats.map((n) => n || '');
    renderSeatList('guest-seat-list', net.seatNames);
    if (!screens.guestLobby.classList.contains('active') && !screens.remoteGame.classList.contains('active')) {
      showScreen('guestLobby');
    }
  } else if (msg.type === 'start') {
    state.players = msg.seats.slice();
    state.scores = [0, 0, 0];
    state.round = 0;
    showScreen('remoteGame');
    renderRemoteScoreboard(false);
  } else if (msg.type === 'round') {
    applyRemoteRound(msg.payload);
  } else if (msg.type === 'voteCount') {
    updateRemoteWaitCount(msg.count);
  } else if (msg.type === 'chaosPrompt') {
    showRemoteChaosStage();
  } else if (msg.type === 'reveal') {
    applyRemoteReveal(msg.payload);
  } else if (msg.type === 'gameOver') {
    applyRemoteGameOver(msg.payload);
  }
}

$('join-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('input-join-name').value.trim();
  const code = $('input-join-code').value.trim();
  if (!name || !code) return;
  joinRoom(name, code);
});

$('btn-remote-host').addEventListener('click', () => showScreen('hostName'));
$('btn-remote-join').addEventListener('click', () => showScreen('joinForm'));

/* ---------------------------------------------------------
   SHARED REMOTE GAME RENDERING
   Used by both the host (applying its own broadcasts) and
   guests (applying messages received from the host).
   --------------------------------------------------------- */
function applyRemoteRound(payload) {
  state.round = payload.round;
  state.players = payload.players;
  state.scores = payload.scores;
  state.currentQuestion = { cat: payload.cat, text: payload.text };
  state.activeSpecialEvent = payload.specialEvent || null;
  state.votes = [null, null, null];
  net.pendingVoteChoice = null;

  $('r-round-label').textContent = `FRÅGA ${state.round} / ${TOTAL_ROUNDS}`;
  $('r-progress-bar').style.width = `${((state.round - 1) / TOTAL_ROUNDS) * 100}%`;

  $('r-category-badge').textContent = CATEGORIES[state.currentQuestion.cat];
  $('r-question-text').textContent = state.currentQuestion.text;

  if (state.activeSpecialEvent) {
    $('r-special-event-icon').textContent = state.activeSpecialEvent.icon;
    $('r-special-event-text').textContent = `${state.activeSpecialEvent.label}: ${state.activeSpecialEvent.desc}`;
    $('r-special-event-banner').hidden = false;
  } else {
    $('r-special-event-banner').hidden = true;
  }

  renderRemoteScoreboard(false);
  showScreen('remoteGame');
  showRStage('question');
}

$('r-btn-start-voting').addEventListener('click', () => {
  renderRemoteVoteButtons();
  showRStage('vote');
});

function renderRemoteVoteButtons() {
  const container = $('r-vote-buttons');
  container.innerHTML = '';
  const event = state.activeSpecialEvent;
  const leaderIdx = getLeaderIndex();

  state.players.forEach((name, idx) => {
    if (event && event.id === 'target' && idx === leaderIdx && idx === net.mySeat) return;
    const btn = document.createElement('button');
    btn.className = 'vote-btn';
    btn.textContent = name.toUpperCase();
    btn.setAttribute('aria-label', `Rösta på ${name}`);
    btn.addEventListener('click', () => castRemoteVote(idx));
    container.appendChild(btn);
  });
}

function castRemoteVote(idx) {
  net.pendingVoteChoice = idx;
  $('r-confirm-choice-text').textContent = state.players[idx].toUpperCase();
  showRStage('confirm');
}

$('r-btn-confirm-yes').addEventListener('click', confirmRemoteVote);
$('r-btn-confirm-no').addEventListener('click', () => showRStage('vote'));

function confirmRemoteVote() {
  const choice = net.pendingVoteChoice;
  net.pendingVoteChoice = null;

  showRStage('waiting');
  updateRemoteWaitCount(state.votes.filter((v) => v !== null).length);

  if (state.mode === 'host') {
    recordRemoteVote(net.mySeat, choice);
  } else {
    net.hostConn.send({ type: 'vote', choice });
  }
}

function updateRemoteWaitCount(count) {
  $('r-wait-count').textContent = `Väntar på de andra… (${count}/3)`;
}

// recordRemoteVote() — host-only. Stores a vote (its own or a guest's),
// tells everyone how many votes are in, and moves on once all 3 are in.
function recordRemoteVote(seatIdx, choice) {
  state.votes[seatIdx] = choice;
  const count = state.votes.filter((v) => v !== null).length;
  broadcastToGuests({ type: 'voteCount', count });
  updateRemoteWaitCount(count);
  if (count === 3) hostFinishVoting();
}

function hostFinishVoting() {
  if (state.activeSpecialEvent && state.activeSpecialEvent.id === 'chaos') {
    broadcastToGuests({ type: 'chaosPrompt' });
    showRemoteChaosStage();
  } else {
    hostRevealAndBroadcast();
  }
}

function showRemoteChaosStage() {
  const isHost = state.mode === 'host';
  $('r-btn-chaos-continue').hidden = !isHost;
  $('r-chaos-wait').hidden = isHost;
  showRStage('chaos');
}

$('r-btn-chaos-continue').addEventListener('click', () => {
  if (state.mode === 'host') hostRevealAndBroadcast();
});

function hostRevealAndBroadcast() {
  const tally = tallyVotes(state.votes);
  const gains = calculateScores(tally);
  state.scores = state.scores.map((s, i) => s + gains[i]);
  const payload = { tally, gains, scores: state.scores.slice() };
  broadcastToGuests({ type: 'reveal', payload });
  applyRemoteReveal(payload);
}

function applyRemoteReveal(payload) {
  state.lastRoundGains = payload.gains;
  state.scores = payload.scores;

  renderRemoteRevealBars(payload.tally, payload.gains);
  renderRemoteVerdict(payload.tally);
  renderRemotePointsGained(payload.gains);
  renderRemoteScoreboard(true);

  const isHost = state.mode === 'host';
  $('r-btn-next-question').hidden = !isHost;
  $('r-reveal-wait').hidden = isHost;

  showRStage('reveal');
}

function renderRemoteRevealBars(tally, gains) {
  const container = $('r-reveal-bars');
  container.innerHTML = '';
  const maxVotes = Math.max(...tally, 1);
  const order = state.players.map((_, i) => i).sort((a, b) => tally[b] - tally[a]);

  order.forEach((idx) => {
    const row = document.createElement('div');
    row.className = 'reveal-bar-row';
    if (tally[idx] === maxVotes && maxVotes > 0) row.classList.add('winner');

    const label = document.createElement('div');
    label.className = 'reveal-bar-label';
    label.innerHTML = `<span>${state.players[idx].toUpperCase()}</span><span>${tally[idx]}</span>`;

    const track = document.createElement('div');
    track.className = 'reveal-bar-track';
    const fill = document.createElement('div');
    fill.className = 'reveal-bar-fill';
    track.appendChild(fill);

    row.appendChild(label);
    row.appendChild(track);
    container.appendChild(row);

    requestAnimationFrame(() => {
      setTimeout(() => { fill.style.width = `${(tally[idx] / maxVotes) * 100}%`; }, 60);
    });
  });
}

function renderRemoteVerdict(tally) {
  const maxVotes = Math.max(...tally);
  const winners = state.players.filter((_, i) => tally[i] === maxVotes);
  const verdictEl = $('r-reveal-verdict');

  if (maxVotes === 0) {
    verdictEl.textContent = 'Ingen röstade på någon?! Fegisar.';
  } else if (winners.length > 1) {
    verdictEl.textContent = `💀 OAVGJORT MELLAN ${winners.join(' & ').toUpperCase()}`;
  } else {
    verdictEl.textContent = `💀 ${winners[0].toUpperCase()} ÄR DEN STÖRSTA JÄVELN`;
  }
  verdictEl.style.animation = 'none';
  void verdictEl.offsetWidth;
  verdictEl.style.animation = '';
}

function renderRemotePointsGained(gains) {
  const parts = state.players
    .map((name, i) => (gains[i] > 0 ? `${name} <span class="pg-plus">+${gains[i]}</span>` : null))
    .filter(Boolean);
  $('r-points-gained').innerHTML = parts.length ? parts.join(' &nbsp;·&nbsp; ') : 'Ingen fick poäng denna runda.';
}

function renderRemoteScoreboard(animate) {
  const leaderScore = Math.max(...state.scores);

  const mini = $('r-scoreboard-mini-list');
  mini.innerHTML = '';
  state.players.forEach((name, i) => {
    const entry = document.createElement('div');
    entry.className = 'sb-entry' + (state.scores[i] === leaderScore && leaderScore > 0 ? ' leader' : '');
    const gain = state.lastRoundGains[i];
    entry.innerHTML = `
      <span class="sb-name">${name}</span>
      <span class="sb-pts${animate && gain > 0 ? ' score-pop' : ''}">${state.scores[i]}</span>
    `;
    mini.appendChild(entry);
  });

  const full = $('r-scoreboard-full-list');
  full.innerHTML = '';
  const ranked = state.players
    .map((name, i) => ({ name, score: state.scores[i] }))
    .sort((a, b) => b.score - a.score);
  ranked.forEach((p) => {
    const li = document.createElement('li');
    if (p.score === leaderScore && leaderScore > 0) li.classList.add('leader');
    li.innerHTML = `<span>${p.name}</span><span>${p.score} p</span>`;
    full.appendChild(li);
  });
}

$('r-scoreboard-toggle').addEventListener('click', () => {
  $('r-scoreboard-panel').hidden = false;
  $('r-scoreboard-toggle').setAttribute('aria-expanded', 'true');
});
$('r-scoreboard-close').addEventListener('click', () => {
  $('r-scoreboard-panel').hidden = true;
  $('r-scoreboard-toggle').setAttribute('aria-expanded', 'false');
});

$('r-btn-next-question').addEventListener('click', () => {
  if (state.mode === 'host') nextQuestionRemote();
});

function nextQuestionRemote() {
  if (state.round >= TOTAL_ROUNDS) {
    endGameRemote();
    return;
  }
  state.round += 1;
  state.votes = [null, null, null];
  state.activeSpecialEvent = (state.round % SPECIAL_EVENT_INTERVAL === 0)
    ? SPECIAL_EVENTS[Math.floor(Math.random() * SPECIAL_EVENTS.length)]
    : null;
  state.currentQuestion = state.questionPool[state.round - 1];

  const payload = {
    round: state.round,
    cat: state.currentQuestion.cat,
    text: state.currentQuestion.text,
    players: state.players.slice(),
    scores: state.scores.slice(),
    specialEvent: state.activeSpecialEvent,
  };

  broadcastToGuests({ type: 'round', payload });
  applyRemoteRound(payload);
}

function endGameRemote() {
  const payload = { players: state.players.slice(), scores: state.scores.slice() };
  broadcastToGuests({ type: 'gameOver', payload });
  applyRemoteGameOver(payload);
}

function applyRemoteGameOver(payload) {
  state.players = payload.players;
  state.scores = payload.scores;
  renderGameOverUI(state.players, state.scores);
  updateGameOverControls();
  showScreen('over');
  launchConfetti();
}

// resetRemoteGame() — host's "SPELA IGEN". Keeps the same room/connections
// alive and jumps everyone straight back into round 1.
function resetRemoteGame() {
  state.scores = [0, 0, 0];
  state.round = 0;
  state.questionPool = buildQuestionPool();
  state.activeSpecialEvent = null;
  nextQuestionRemote();
}

/* ---------------------------------------------------------
   INIT — prefill names from a previous session, and auto-fill
   a room code if opened via a shared join link (?room=CODE).
   --------------------------------------------------------- */
(function init() {
  try {
    const saved = JSON.parse(localStorage.getItem('vfad_players') || 'null');
    if (Array.isArray(saved) && saved.length === 3) {
      $('input-p1').value = saved[0] || '';
      $('input-p2').value = saved[1] || '';
      $('input-p3').value = saved[2] || '';
    }
  } catch (err) { /* ignore malformed storage */ }

  try {
    const params = new URLSearchParams(location.search);
    const room = params.get('room');
    if (room) {
      $('input-join-code').value = room.toUpperCase().slice(0, 4);
      showScreen('joinForm');
    }
  } catch (err) { /* ignore malformed URL */ }
})();
