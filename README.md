# Thigah Cave / كهف ثقة

An Arabic-first, bilingual React + Vite website for Thigah Cave.

## Run

```sh
npm install
npm run dev
npm run build
npm run lint
```

On Windows PowerShell installations that block `npm.ps1`, use `npm.cmd` instead.

## Content to confirm

- **Hours:** Sunday–Wednesday are 9:00 PM–2:00 AM, Thursday is open for 24 hours, and Friday and Saturday are closed. Edit `hours` and the corresponding strings in `src/content.js` if the schedule changes.
- **Contact:** The supplied Google Maps link and +966 55 557 7457 are configured in `contactLinks` in `src/content.js`. The phone and WhatsApp actions share one row.
- **Teto / تيتو:** The corrected name is shown with original, neutral tabletop artwork because no reference photo or game details were supplied.
- **Policies:** Review both language versions of the privacy policy and terms when the site gains additional features or official contact channels.

## Image sources

The following photos are bundled locally in `src/assets/photos/`. Their source pages indicate they are free to use under the [Unsplash License](https://unsplash.com/license). The Teto graphic and brand mark are original SVGs in the project.

| Use | Photographer | Source |
| --- | --- | --- |
| Café hero | Monaz Nazary | [Unsplash](https://unsplash.com/photos/cozy-cafe-interior-with-leather-chairs-and-round-tables-ngkGVEqRKW8) |
| Baloot card | Firas Wardhana | [Unsplash](https://unsplash.com/photos/a-person-playing-a-game-of-cards-on-a-table-xvZpx1mg2Lg) |
| Table tennis | Dirk Lach | [Unsplash](https://unsplash.com/photos/a-ping-pong-paddle-resting-on-a-ping-pong-table-odd81oWDFw4) |
| Billiards | Stephen Collins | [Unsplash](https://unsplash.com/photos/pool-table-set-cRhNdY9-2Sc) |
| Air hockey | Frederick Shaw | [Unsplash](https://unsplash.com/photos/a-close-up-of-a-hockey-rink-with-a-red-puck-5CuIkhvIEQQ) |
| FIFA | SXRIPTX | [Unsplash](https://unsplash.com/photos/two-person-using-corded-controllers-N6zIsVM_dY8) |
| PlayStation 5 | Nik | [Unsplash](https://unsplash.com/photos/white-playstation-five-console-and-controller-ads33nL7V4k) |

Fonts are loaded from Google Fonts. If third-party requests are undesirable, self-host the fonts before deployment.
