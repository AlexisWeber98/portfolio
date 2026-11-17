#!/usr/bin/env bash
# Compile the LaTeX CV and publish the PDF + a preview PNG under public/cv/.
# Also refresh the local copy in ~/Documents/CV (override with CV_DOCS_DIR).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CV_DIR="$ROOT/cv"
NAME="Alexis_Weber_Software_Developer_CV"
OUT="$ROOT/public/cv"
DOCS_OUT="${CV_DOCS_DIR:-$HOME/Documents/CV}"

docker run --rm -u "$(id -u):$(id -g)" -v "$CV_DIR":/w -w /w texlive/texlive:latest-small \
  pdflatex -interaction=nonstopmode -halt-on-error "$NAME.tex" >/dev/null \
  || { echo "pdflatex failed (re-run without >/dev/null for the log)" >&2; exit 1; }

mkdir -p "$OUT"
cp "$CV_DIR/$NAME.pdf" "$OUT/alexis-weber-cv.pdf"
pdftoppm -png -r 150 -singlefile "$OUT/alexis-weber-cv.pdf" "$OUT/alexis-weber-cv"
mkdir -p "$DOCS_OUT"
cp "$CV_DIR/$NAME.pdf" "$DOCS_OUT/$NAME.pdf"
rm -f "$CV_DIR/$NAME".{aux,log,out} "$CV_DIR/texput.log"
echo "Built $OUT/alexis-weber-cv.{pdf,png} and refreshed $DOCS_OUT/$NAME.pdf"
