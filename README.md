# VEM FAN ÄR DET? 🔥

> Tre grabbar. En fråga. Noll värdighet.

Ett brutalt, roligt party-spel för exakt **3 spelare** — perfekt för en kväll på Airbnb. Spela på **samma telefon** eller **varsin telefon** (via WebRTC, helt utan server/databas). Ingen backend, ingen app store, bara en webbsida.

## Vad är det?

"Vem fan är det?" är ett röstningsspel där varje runda visar en obekväm, personlig eller provocerande fråga (t.ex. *"Vem skulle ligga med sitt ex igen trots att han vet exakt hur dålig idé det är?"*). Alla tre spelare röstar på vem av de tre frågan passar bäst in på. När alla röstat avslöjas resultatet dramatiskt, poäng delas ut, och efter 15 frågor koras en vinnare med en skämtsam titel.

Spelet innehåller:

- 60+ unika, brutala/roliga frågor uppdelade i 8 kategorier (🔥 Brutal, 🍺 Fylla, ❤️ Relationer, 🤡 Pinsamt, 💀 Mörk humor, 💰 Pengar, 🧠 Personlighet, 👀 Hemligheter)
- Två spellägen: **samma telefon** (skickas runt) eller **varsin telefon** (peer-to-peer)
- Ett röstningsflöde med bekräftelsesteg så ingen råkar klicka fel
- Animerad resultat-reveal med staplar
- Ett levande topplista/scoreboard
- 8 st speciella "modifier"-händelser var 5:e runda (Double Damage, Hämnd, Måltavla, Kaos, m.m.)
- Final ranking + 12 möjliga vinnartitlar
- Konfetti-animation för vinnaren
- Mobilanpassad, mörk premium-design – helt i vanilla HTML/CSS/JS

## Hur man spelar

### Läge 1: Samma telefon

1. Öppna sidan, välj **SAMMA TELEFON**.
2. Skriv in namnen på alla tre spelare, tryck **STARTA SKITEN**.
3. Läs frågan tillsammans, tryck **BÖRJA RÖSTA**.
4. Lämna över telefonen — varje spelare röstar i sin tur (röster är dolda tills alla röstat).
5. Se resultatet, poängen delas ut automatiskt.
6. Tryck **NÄSTA FRÅGA** och fortsätt tills alla 15 frågor är klara.
7. Se slutresultatet och vinnarens titel. Tryck **SPELA IGEN** för en ny omgång.

### Läge 2: Varsin telefon (multiplayer)

Ingen av er behöver installera något eller skapa ett konto — telefonerna kopplas ihop direkt via WebRTC (peer-to-peer). En gratis publik "signaleringstjänst" (PeerJS moln) används bara för att presentera telefonerna för varandra; själva frågorna, rösterna och poängen skickas aldrig till någon server eller databas.

**Värden (en av er):**
1. Välj **VARSIN TELEFON** → **SKAPA SPEL**, skriv ditt namn.
2. Du får en 4-tecken rumskod + en QR-kod.

**De andra två:**
1. Välj **VARSIN TELEFON** → **GÅ MED I SPEL**.
2. Skriv ert namn och rumskoden (eller skanna QR-koden, som öppnar sidan med koden ifylld).

När alla tre visas i väntrummet trycker värden **STARTA SPELET**. Alla tre röstar samtidigt, var för sig, på sin egen telefon — värdens telefon styr takten (visar resultat och går vidare till nästa fråga åt alla).

Tryck på poängrutan högst upp när som helst för att se hela topplistan.

> Kräver att alla tre telefoner har internetanslutning (mobildata eller wifi) för att hitta varandra första gången — spelet i sig kör sedan direkt mellan telefonerna.

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
- Ingen build-process, inga npm-paket att installera, inget ramverk
- **PeerJS** (vendorad lokalt i `vendor/`) för WebRTC peer-to-peer-anslutning mellan telefoner i multiplayer-läget — ingen egen server, ingen databas
- En liten vendorad QR-kodgenerator (`vendor/qrcode.min.js`) för att rendera rumskoden som QR-kod, helt lokalt utan nätverksanrop
- Samma-telefon-läget fungerar helt offline efter första sidladdningen; multiplayer-läget kräver internet för att telefonerna ska hitta varandra
- Namn sparas i `localStorage` för snabbare omstart

## Filstruktur

```
/
├── index.html            – all markup/skärmar (båda spellägen)
├── style.css             – mörkt, glasigt party-tema med animationer
├── script.js             – spelmotor: frågor, röstning, poäng, events, multiplayer
├── vendor/
│   ├── peerjs.min.js     – WebRTC-bibliotek (peer-to-peer-anslutning)
│   └── qrcode.min.js     – QR-kodgenerator (för rumskoden)
└── README.md             – denna fil
```

## Vill du lägga till fler frågor?

Öppna `script.js` och lägg till fler objekt i `QUESTIONS`-arrayen, t.ex.:

```js
{ cat: 'BRUTAL', text: 'Din nya fråga här?' },
```

`cat` måste matcha en nyckel i `CATEGORIES`-objektet.

---

18+. Spela med vänner som tål lite skit. 🍻
