# VEM FAN ÄR DET? 🔥

> Tre grabbar. En fråga. Noll värdighet.

Ett brutalt, roligt party-spel för exakt **3 spelare** som sitter tillsammans på samma telefon — perfekt för en kväll på Airbnb. Ingen backend, ingen app store, bara en webbsida.

## Vad är det?

"Vem fan är det?" är ett röstningsspel där varje runda visar en obekväm, personlig eller provocerande fråga (t.ex. *"Vem skulle ligga med sitt ex igen trots att han vet exakt hur dålig idé det är?"*). Alla tre spelare röstar i tur och ordning på samma enhet om vem av de tre frågan passar bäst in på. När alla röstat avslöjas resultatet dramatiskt, poäng delas ut, och efter 15 frågor koras en vinnare med en skämtsam titel.

Spelet innehåller:

- 60+ unika, brutala/roliga frågor uppdelade i 8 kategorier (🔥 Brutal, 🍺 Fylla, ❤️ Relationer, 🤡 Pinsamt, 💀 Mörk humor, 💰 Pengar, 🧠 Personlighet, 👀 Hemligheter)
- Ett röstningsflöde med bekräftelsesteg så ingen råkar klicka fel
- Animerad resultat-reveal med staplar
- Ett levande topplista/scoreboard
- 8 st speciella "modifier"-händelser var 5:e runda (Double Damage, Hämnd, Måltavla, Kaos, m.m.)
- Final ranking + 12 möjliga vinnartitlar
- Konfetti-animation för vinnaren
- Mobilanpassad, mörk premium-design – helt i vanilla HTML/CSS/JS

## Hur man spelar

1. Öppna sidan på en telefon (eller dator).
2. Skriv in namnen på alla tre spelare.
3. Tryck **STARTA SKITEN**.
4. Läs frågan tillsammans, tryck **BÖRJA RÖSTA**.
5. Lämna över telefonen — varje spelare röstar i sin tur (röster är dolda tills alla röstat).
6. Se resultatet, poängen delas ut automatiskt.
7. Tryck **NÄSTA FRÅGA** och fortsätt tills alla 15 frågor är klara.
8. Se slutresultatet och vinnarens titel. Tryck **SPELA IGEN** för en ny omgång.

Tryck på poängrutan högst upp när som helst för att se hela topplistan.

## Köra lokalt

Inga beroenden, inget byggsteg. Klona/ladda ner repot och öppna filen direkt:

```bash
# Alternativ 1: dubbelklicka på index.html i din filutforskare

# Alternativ 2: kör en enkel lokal server (rekommenderas för mobiltest via nätverket)
python3 -m http.server 8000
# öppna sedan http://localhost:8000 i webbläsaren
```

## Deploya med GitHub Pages

1. Pusha repot till GitHub.
2. Gå till repots **Settings → Pages**.
3. Under "Build and deployment", välj **Deploy from a branch**.
4. Välj branchen (t.ex. `main`) och mappen `/ (root)`.
5. Spara. Sidan publiceras på `https://ANVÄNDARNAMN.github.io/REPO-NAMN/`.

Alla filreferenser i projektet är relativa (`style.css`, `script.js`), så spelet fungerar oavsett om det ligger i repots rot eller i en undermapp på GitHub Pages.

## Teknik

- Ren HTML5, CSS3 och vanilla JavaScript (ES6+)
- Ingen build-process, inga npm-paket, inget ramverk
- Fungerar helt offline efter första sidladdningen
- Namn sparas i `localStorage` för snabbare omstart

## Filstruktur

```
/
├── index.html   – all markup/skärmar
├── style.css    – mörkt, glasigt party-tema med animationer
├── script.js    – spelmotor: frågor, röstning, poäng, events
└── README.md    – denna fil
```

## Vill du lägga till fler frågor?

Öppna `script.js` och lägg till fler objekt i `QUESTIONS`-arrayen, t.ex.:

```js
{ cat: 'BRUTAL', text: 'Din nya fråga här?' },
```

`cat` måste matcha en nyckel i `CATEGORIES`-objektet.

---

18+. Spela med vänner som tål lite skit. 🍻
