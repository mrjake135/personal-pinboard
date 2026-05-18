# Khoa's Personal Pinboard

A corkboard-style personal site for Khoa Phan.

Static HTML/CSS/JS — no build step. Open `index.html` or serve the directory.

## Sections

- **About** — bio, photo timeline (Moscow → HCMC → Concord → ATL → NYC), Mochi mention
- **Résumé** — Google SRE (Bigtable), VMware, Georgia Tech
- **Music** — oldies mixtape, albums in heavy rotation, concert wishlist
- **Watching** — current anime + Marty Supreme
- **Hobbies** — guitar, running, lifting, climbing
- **Cat** — weekly Mochi feature
- **All-Time** — top anime, albums, places
- **Hang Out** — permission-slip form to schedule time

## Tweaks panel

Cork tone, accent color, and title font are configurable at runtime via the Tweaks panel (toggled by the host runtime).

## Tech

- React 18 + Babel Standalone (in-browser JSX transpile)
- Custom `<image-slot>` web component for drop-in photos, persisted to `.image-slots.state.json`
- Pure CSS for the corkboard, paper, tape, pins, polaroids, and tickets
