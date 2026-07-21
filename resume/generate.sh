#!/usr/bin/env bash
# Regenerate the downloadable résumé PDF from resume/resume-print.html.
#
# Renders the print-optimized HTML to a real 2-page Letter PDF using a headless
# Chromium browser, then writes it to public/ where the site serves it.
#
# Usage:  ./resume/generate.sh
# Edit the résumé content in resume/resume-print.html, then re-run this.

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$HERE/resume-print.html"
OUT="$HERE/../public/Cristian-Dotta-Resume.pdf"

# Find a Chromium-based browser that supports --print-to-pdf.
CANDIDATES=(
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
  "/Applications/Chromium.app/Contents/MacOS/Chromium"
  "$(command -v google-chrome || true)"
  "$(command -v chromium || true)"
)

BROWSER=""
for c in "${CANDIDATES[@]}"; do
  if [ -n "$c" ] && [ -x "$c" ]; then BROWSER="$c"; break; fi
done

if [ -z "$BROWSER" ]; then
  echo "No Chromium-based browser found. Install Chrome/Brave/Edge/Chromium." >&2
  exit 1
fi

echo "Rendering résumé with: $BROWSER"
"$BROWSER" \
  --headless --disable-gpu --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=6000 \
  --print-to-pdf="$OUT" "file://$SRC"

echo "Wrote $OUT"
