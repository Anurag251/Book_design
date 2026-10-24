# fix_images.ps1 — content-appropriate image corrections
$htmlPath = "c:\Users\Anurag\Desktop\Book_design\Nepal Wildlife Book.html"
$html = Get-Content $htmlPath -Raw -Encoding UTF8

# Replace img src ONLY within the named section
# Args: html, section label, old filename (no path), new filename (no path)
function Fix-Img {
    param([string]$html, [string]$label, [string]$oldFile, [string]$newFile)
    $startPat = '<section[^>]*data-screen-label="' + [regex]::Escape($label) + '"[^>]*>'
    $m = [regex]::Match($html, $startPat)
    if (-not $m.Success) { Write-Host "NOT FOUND: $label"; return $html }
    $s = $m.Index
    $rest = $html.Substring($s + $m.Length)
    $nextM = [regex]::Match($rest, '<section[^>]*data-screen-label=')
    $len = if ($nextM.Success) { $m.Length + $nextM.Index } else { $html.Length - $s }
    $sec = $html.Substring($s, $len)
    $sec2 = $sec.Replace($oldFile, $newFile)
    if ($sec2 -eq $sec) { Write-Host "  img not found in section [$label]: $oldFile" }
    return $html.Substring(0,$s) + $sec2 + $html.Substring($s+$len)
}

# ── TIGER CHAPTER ───────────────────────────────────────────────────────────
# Slide 21: 4 forest landscapes → 2 tigers + 2 forests (corridors)
$html = Fix-Img $html "21 Cages to Corridors divider" "img_0065.jpeg" "img_0012.jpeg"
$html = Fix-Img $html "21 Cages to Corridors divider" "img_0068.jpeg" "img_0014.jpeg"

# Slide 22: 2 captive → 2 wild (show freedom)
$html = Fix-Img $html "22 Beyond Borders" "img_0006.jpeg" "img_0012.jpeg"
$html = Fix-Img $html "22 Beyond Borders" "img_0018.jpeg" "img_0014.jpeg"

# Slide 24: 4 generic landscapes → 4 captive tigers (semi-wild enclosure)
$html = Fix-Img $html "24 Phase 2 Re-breeding" "img_0053.jpeg" "img_0017.jpeg"
$html = Fix-Img $html "24 Phase 2 Re-breeding" "img_0050.jpeg" "img_0018.jpeg"
$html = Fix-Img $html "24 Phase 2 Re-breeding" "img_0059.jpeg" "img_0069.jpeg"
$html = Fix-Img $html "24 Phase 2 Re-breeding" "img_0061.jpeg" "img_0125.jpeg"

# Slide 25: 2 human photos → 2 wild tigers (reintroduction)
$html = Fix-Img $html "25 Phase 3 Reintroduction" "img_0015.jpeg" "img_0014.jpeg"
$html = Fix-Img $html "25 Phase 3 Reintroduction" "img_0013.jpeg" "img_0012.jpeg"

# Slide 26: 4 rhino images → 4 tiger images (shared future = tiger future)
$html = Fix-Img $html "26 Shared future" "img_0063.jpeg" "img_0012.jpeg"
$html = Fix-Img $html "26 Shared future" "img_0074.jpeg" "img_0014.jpeg"
$html = Fix-Img $html "26 Shared future" "img_0035.jpeg" "img_0008.jpeg"
$html = Fix-Img $html "26 Shared future" "img_0038.jpeg" "img_0006.jpeg"

# ── ELEPHANT CHAPTER ────────────────────────────────────────────────────────
# Slide 32: remove human community photo, add elephant
$html = Fix-Img $html "32 Trunk biomimicry" "img_0062.jpeg" "img_0066.jpeg"

# Slide 33: deer/macaque → elephant portraits (Top Prasad IS an elephant)
$html = Fix-Img $html "33 Top Prasad and mother" "img_0095.jpeg" "img_0025.jpeg"
$html = Fix-Img $html "33 Top Prasad and mother" "img_0094.jpeg" "img_0026.jpeg"
$html = Fix-Img $html "33 Top Prasad and mother" "img_0089.jpeg" "img_0028.jpeg"
$html = Fix-Img $html "33 Top Prasad and mother" "img_0056.jpeg" "img_0080.jpeg"

# Slide 34: 2 human photos → elephant welfare
$html = Fix-Img $html "34 Four-stage path" "img_0057.jpeg" "img_0022.jpeg"
$html = Fix-Img $html "34 Four-stage path" "img_0007.jpeg" "img_0070.jpeg"

# Slide 35: eagle + 2 leopards → elephants (mahout teacher = elephant slide)
$html = Fix-Img $html "35 The Mahout as Teacher" "img_0123.jpeg" "img_0090.jpeg"
$html = Fix-Img $html "35 The Mahout as Teacher" "img_0060.jpeg" "img_0093.jpeg"
$html = Fix-Img $html "35 The Mahout as Teacher" "img_0098.jpeg" "img_0001.jpeg"

# ── CONSERVATION TOURISM ────────────────────────────────────────────────────
# Slide 40: 4 birds → 4 rhinos ("rhino in grassland against a distant jeep")
$html = Fix-Img $html "40 Daily disturbance" "img_0119.jpeg" "img_0096.jpeg"
$html = Fix-Img $html "40 Daily disturbance" "img_0114.jpeg" "img_0072.jpeg"
$html = Fix-Img $html "40 Daily disturbance" "img_0115.jpeg" "img_0040.jpeg"
$html = Fix-Img $html "40 Daily disturbance" "img_0102.jpeg" "img_0083.jpeg"

# Slide 41: 3 peacocks → wetland birds (Sarus crane in Terai wetland)
$html = Fix-Img $html "41 The Saras" "img_0101.jpeg" "img_0073.jpeg"
$html = Fix-Img $html "41 The Saras" "img_0088.jpeg" "img_0033.jpeg"
$html = Fix-Img $html "41 The Saras" "img_0051.jpeg" "img_0085.jpeg"

# Slide 42: 4 horse images → 4 peacocks (Guests of the Wild = iconic wildlife)
$html = Fix-Img $html "42 Guests of the Wild divider" "img_0092.jpeg" "img_0101.jpeg"
$html = Fix-Img $html "42 Guests of the Wild divider" "img_0134.jpeg" "img_0088.jpeg"
$html = Fix-Img $html "42 Guests of the Wild divider" "img_0133.jpeg" "img_0051.jpeg"
$html = Fix-Img $html "42 Guests of the Wild divider" "img_0005.jpeg" "img_0046.jpeg"

# Slide 43: 2 peacocks + parakeets + kingfisher → 4 horses (Young Foals = horses!)
$html = Fix-Img $html "43 Young Foals" "img_0052.jpeg" "img_0092.jpeg"
$html = Fix-Img $html "43 Young Foals" "img_0046.jpeg" "img_0134.jpeg"
$html = Fix-Img $html "43 Young Foals" "img_0103.jpeg" "img_0133.jpeg"
$html = Fix-Img $html "43 Young Foals" "img_0122.jpeg" "img_0005.jpeg"

# Slide 45: python + butterfly → open landscape (national park at dawn)
$html = Fix-Img $html "45 A way forward" "img_0113.jpeg" "img_0002.jpeg"
$html = Fix-Img $html "45 A way forward" "img_0108.jpeg" "img_0010.jpeg"

# Slide 47: kingfisher + koel + peacock + baby rhino → river/flight birds
$html = Fix-Img $html "47 Ruddy shelduck" "img_0126.jpeg" "img_0082.jpeg"
$html = Fix-Img $html "47 Ruddy shelduck" "img_0115.jpeg" "img_0106.jpeg"
$html = Fix-Img $html "47 Ruddy shelduck" "img_0046.jpeg" "img_0122.jpeg"
$html = Fix-Img $html "47 Ruddy shelduck" "img_0100.jpeg" "img_0116.jpeg"

# ── URBAN PLANNING ───────────────────────────────────────────────────────────
# Slide 52: 3 landscapes → spider web images
$html = Fix-Img $html "52 Spider web" "img_0004.jpeg" "img_0047.jpeg"
$html = Fix-Img $html "52 Spider web" "img_0064.jpeg" "img_0086.jpeg"
$html = Fix-Img $html "52 Spider web" "img_0061.jpeg" "img_0131.jpeg"

# C7 floodplain: 5 human photos → river/wetland wildlife
$html = Fix-Img $html "C7· Collage — the floodplain" "img_0007.jpeg" "img_0082.jpeg"
$html = Fix-Img $html "C7· Collage — the floodplain" "img_0013.jpeg" "img_0121.jpeg"
$html = Fix-Img $html "C7· Collage — the floodplain" "img_0015.jpeg" "img_0117.jpeg"
$html = Fix-Img $html "C7· Collage — the floodplain" "img_0020.jpeg" "img_0106.jpeg"
$html = Fix-Img $html "C7· Collage — the floodplain" "img_0048.jpeg" "img_0085.jpeg"

# Slide 54: 4 wetland birds → forest/habitat (roads cutting through forest hills)
$html = Fix-Img $html "54 When roads meet roots" "img_0033.jpeg" "img_0065.jpeg"
$html = Fix-Img $html "54 When roads meet roots" "img_0085.jpeg" "img_0068.jpeg"
$html = Fix-Img $html "54 When roads meet roots" "img_0073.jpeg" "img_0091.jpeg"
$html = Fix-Img $html "54 When roads meet roots" "img_0117.jpeg" "img_0059.jpeg"

# Slide 57 Rapti reprise: 3 grasslands → waterfowl/river birds (closing urban chapter)
$html = Fix-Img $html "57 Rapti reprise" "img_0010.jpeg" "img_0033.jpeg"
$html = Fix-Img $html "57 Rapti reprise" "img_0050.jpeg" "img_0073.jpeg"
$html = Fix-Img $html "57 Rapti reprise" "img_0059.jpeg" "img_0085.jpeg"

# ── HUMAN-ANIMAL CONFLICT ────────────────────────────────────────────────────
# Slide 59: 3 landscapes → rhinos (direct conflict species)
$html = Fix-Img $html "59 Direct impact" "img_0061.jpeg" "img_0035.jpeg"
$html = Fix-Img $html "59 Direct impact" "img_0053.jpeg" "img_0038.jpeg"
$html = Fix-Img $html "59 Direct impact" "img_0004.jpeg" "img_0063.jpeg"

# Slide 60: stray dogs + human photo → rhinos (rhino at sugarcane field)
$html = Fix-Img $html "60 Conflict as success" "img_0099.jpeg" "img_0071.jpeg"
$html = Fix-Img $html "60 Conflict as success" "img_0062.jpeg" "img_0074.jpeg"

# Slide 64: 3 human photos → rhinos (addressing HAC = rhino-related)
$html = Fix-Img $html "64 Addressing Conflict divider" "img_0057.jpeg" "img_0083.jpeg"
$html = Fix-Img $html "64 Addressing Conflict divider" "img_0020.jpeg" "img_0084.jpeg"
$html = Fix-Img $html "64 Addressing Conflict divider" "img_0048.jpeg" "img_0039.jpeg"

# ── ZOO DILEMMA ──────────────────────────────────────────────────────────────
# Slide 69: 4 tiger images on RHINO plate → rhino portraits
$html = Fix-Img $html "69 Rhino plate" "img_0069.jpeg" "img_0039.jpeg"
$html = Fix-Img $html "69 Rhino plate" "img_0008.jpeg" "img_0040.jpeg"
$html = Fix-Img $html "69 Rhino plate" "img_0012.jpeg" "img_0035.jpeg"
$html = Fix-Img $html "69 Rhino plate" "img_0014.jpeg" "img_0063.jpeg"

# ── BIOMIMICRY ────────────────────────────────────────────────────────────────
# Slide 80: 4 rhino images on bar-headed geese navigation slide → birds/flight
$html = Fix-Img $html "80 Natural navigation" "img_0096.jpeg" "img_0085.jpeg"
$html = Fix-Img $html "80 Natural navigation" "img_0100.jpeg" "img_0116.jpeg"
$html = Fix-Img $html "80 Natural navigation" "img_0097.jpeg" "img_0103.jpeg"
$html = Fix-Img $html "80 Natural navigation" "img_0120.jpeg" "img_0033.jpeg"

# Slide 81: 2 elephant herd images on SPIDER SILK slide → spider images
$html = Fix-Img $html "81 Spider silk" "img_0001.jpeg" "img_0047.jpeg"
$html = Fix-Img $html "81 Spider silk" "img_0080.jpeg" "img_0086.jpeg"

# ── BHOTIA HORSES (closing) ───────────────────────────────────────────────────
# Slide 85: 3 bird images on HORSE slide → mountain horses
$html = Fix-Img $html "85 Bhotia horses" "img_0115.jpeg" "img_0132.jpeg"
$html = Fix-Img $html "85 Bhotia horses" "img_0119.jpeg" "img_0003.jpeg"
$html = Fix-Img $html "85 Bhotia horses" "img_0044.jpeg" "img_0092.jpeg"

# ── Save ─────────────────────────────────────────────────────────────────────
Set-Content -Path $htmlPath -Value $html -Encoding UTF8
Write-Host "All content-appropriate image fixes applied."
