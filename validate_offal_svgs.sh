#!/bin/bash
# Verifies the 10 offal overlay SVGs match the convention of the existing canonical overlays.
# Save this as validate_offal_svgs.sh, chmod +x, and run from any directory.
#
# Usage:
#   ./validate_offal_svgs.sh                          # defaults to ./public/svg/offal/
#   ./validate_offal_svgs.sh path/to/offal/dir        # explicit directory

OVERLAY_DIR="${1:-./public/svg/offal}"

# Expected viewBox — confirmed from the 10 uploaded offal SVGs and the
# Illustrator resize that shipped with Batch 25. If you later re-export the
# original cow.svg + 20 muscle overlays to match this viewBox, that's the
# project's single source of truth. If the muscle overlays stay at 622.56,
# that's a separate alignment concern handled in the renderer — this script
# only validates the offal set against its own established viewBox.
EXPECTED_VIEWBOX='viewBox="0 0 711.89 605.37"'

# The 10 offal canonicals shipped in Batch 25 Phase A. Oxtail is excluded
# because it was already canonical with its own SVG before this batch.
OFFAL_FILES=(tongue head_cheek heart liver tripe intestines kidney bone_marrow tendon skin)

PASS=0
FAIL=0

for name in "${OFFAL_FILES[@]}"; do
  file="${OVERLAY_DIR}/${name}.svg"

  if [ ! -f "$file" ]; then
    echo "  MISSING  $file"
    FAIL=$((FAIL+1))
    continue
  fi

  content=$(cat "$file")
  errors=()

  # Check 1: XML declaration present at file start.
  echo "$content" | head -c 50 | grep -q '<?xml version="1.0" encoding="UTF-8"?>' \
    || errors+=("missing or malformed XML declaration")

  # Check 2: viewBox matches the established offal-set viewBox.
  # If you re-export with a different viewBox project-wide, update EXPECTED_VIEWBOX above.
  echo "$content" | grep -qF "$EXPECTED_VIEWBOX" \
    || errors+=("viewBox does not match expected $EXPECTED_VIEWBOX")

  # Check 3: id attribute on root <svg> matches the filename.
  echo "$content" | grep -q "id=\"${name}\"" \
    || errors+=("svg id attribute should be \"${name}\"")

  # Check 4: no explicit width/height on root <svg> (responsive sizing only).
  echo "$content" | head -c 200 | grep -qE '<svg[^>]*[[:space:]]width=' \
    && errors+=("root svg has width attribute — should be removed for responsive sizing")
  echo "$content" | head -c 200 | grep -qE '<svg[^>]*[[:space:]]height=' \
    && errors+=("root svg has height attribute — should be removed for responsive sizing")

  # Check 5: no unexpected wrapper elements or non-essential namespaces.
  # The existing 20 muscle overlays contain none of these — keep the offals consistent.
  for forbidden in '<defs' '<style' '<g ' '<g>' 'xmlns:xlink' 'xmlns:serif' '<metadata' '<title' '<desc'; do
    echo "$content" | grep -qF "$forbidden" \
      && errors+=("contains forbidden element/attribute: $forbidden")
  done

  # Check 6: file is minified to a single line (allow trailing newline).
  lines=$(echo "$content" | wc -l)
  if [ "$lines" -gt 2 ]; then
    errors+=("not minified — file has $lines lines, expected 1")
  fi

  # Check 7: fill present (every offal SVG uses fill — including skin, which
  # uses fill="#b08855" covering the whole cow outline rather than stroke).
  # This matches the established convention across all 20 muscle overlays.
  echo "$content" | grep -qE 'fill="#[0-9a-fA-F]{6}"' \
    || errors+=("missing fill=\"#hexcolor\" attribute")

  # Check 8: no stroke attribute (the convention is fill-only across the whole set).
  # If you ever introduce a stroke-based overlay deliberately, document it as a
  # convention exception and add an exemption here.
  echo "$content" | grep -qE '[[:space:]]stroke="' \
    && errors+=("stroke attribute present — convention is fill-only across all overlays")

  if [ ${#errors[@]} -eq 0 ]; then
    size=$(wc -c < "$file")
    echo "  PASS     ${name}.svg  (${size} bytes)"
    PASS=$((PASS+1))
  else
    echo "  FAIL     ${name}.svg"
    for e in "${errors[@]}"; do echo "             - $e"; done
    FAIL=$((FAIL+1))
  fi
done

echo ""
echo "=== Result: $PASS pass, $FAIL fail ==="

if [ "$FAIL" -eq 0 ]; then
  echo "✓ All 10 offal overlays match the convention. Ready for Phase B wiring."
else
  echo "✗ Fix the issues above before handing off to Phase B."
  exit 1
fi
