# redesign.ps1
$path = "c:\Users\Anurag\Desktop\Book_design\Nepal Wildlife Book.html"
$html = Get-Content $path -Raw -Encoding UTF8

# 1. Fix CSS: add missing nth-child spans so gmosaic/gfeat first image spans full height
$cssAdd = "  .gmosaic > img:nth-child(1){ grid-row: 1 / 4; }`n  .gfeat > img:nth-child(1){ grid-row: 1 / 3; }`n"
$html = $html -replace '(</style>)', "$cssAdd`$1"
Write-Host "CSS fixed."

# 2. Convert key single-scene slides to full-bleed layout
# Each entry: label, img src, plate line, caption line (plain text)
$slides = @(
  @{l="16 Super male territory";    img="image_assets/img_0012.jpeg"; pl="Plate x - Chitwan";                   cap="A super male in tall grassland, a small kingdom fiercely defended."},
  @{l="25 Phase 3 Reintroduction";  img="image_assets/img_0014.jpeg"; pl="Phase Three - Reintroduction";        cap="Returning tigers to restored landscapes, the final and most visible phase."},
  @{l="26 Shared future";           img="image_assets/img_0012.jpeg"; pl="I - From Cages to Corridors";         cap="A tiger walks back into the trees. A shared future for a shared species."},
  @{l="28 Nepal's oldest elephant"; img="image_assets/img_0021.jpeg"; pl="Plate xx - Sauraha, NTNC";            cap="Nepal's oldest elephant. Decades of life, memory, and quiet dignity."},
  @{l="33 Top Prasad and mother";   img="image_assets/img_0025.jpeg"; pl="Plate xxv - Sauraha";                 cap="Top Prasad with his mother Shyam Kali. A quiet moment, 2024."},
  @{l="35 The Mahout as Teacher";   img="image_assets/img_0090.jpeg"; pl="I - The Elephant Dilemma";            cap="The elephant and the mahout. A bond built over decades in the open forest."},
  @{l="41 The Saras";               img="image_assets/img_0073.jpeg"; pl="Plate xxxi - Terai Wetland";          cap="The tallest flying bird in Nepal. A species that rewards those who slow down."},
  @{l="43 Young Foals";             img="image_assets/img_0092.jpeg"; pl="Plate xxxii - Conservation Landscape";cap="Young foals in open grassland. New life, the promise the model protects."},
  @{l="47 Ruddy shelduck";          img="image_assets/img_0082.jpeg"; pl="Plate xxxv - Rapti Spring River";     cap="Free flight over the Rapti. The river remembers what it was."},
  @{l="52 Spider web";              img="image_assets/img_0047.jpeg"; pl="Plate xxxix - Urban Forest";          cap="An architect without a blueprint. Structure, tension and elegance in miniature."},
  @{l="59 Direct impact";           img="image_assets/img_0035.jpeg"; pl="II - Human Animal Conflict";          cap="Where the forest ends and the field begins. The frontline of coexistence."},
  @{l="66 Conflict outcomes";       img="image_assets/img_0095.jpeg"; pl="II - Addressing the Conflict";        cap="Wildlife in the buffer zone. Clear and lasting outcomes when the approach works."},
  @{l="69 Rhino plate";             img="image_assets/img_0039.jpeg"; pl="Plate xlix - Chitwan";                cap="The one-horned rhinoceros. At the centre of Nepal's captive-care debates."},
  @{l="71 Pair of Hornbill";        img="image_assets/img_0109.jpeg"; pl="Plate li - Terai Forest";             cap="A pair of hornbills. A species whose pair-bond depends on intact forest."},
  @{l="75 The resolution";          img="image_assets/img_0100.jpeg"; pl="III - The Zoo Dilemma";               cap="Not closing, evolving. Space replaces cages. Freedom replaces display."},
  @{l="78 Kingfisher and trains";   img="image_assets/img_0082.jpeg"; pl="IV - Biomimicry - The Kingfisher";    cap="Beak-first, almost no splash. The shape that reshaped the bullet train."},
  @{l="79 Rhino natural armor";     img="image_assets/img_0083.jpeg"; pl="IV - Biomimicry - Natural Armor";     cap="Thick, deeply folded dermis. Strength and flexibility at once."},
  @{l="82 Owls silent flight";      img="image_assets/img_0087.jpeg"; pl="IV - Biomimicry - Silent Flight";     cap="Serrated feather edges. The design that quieted wind turbines."},
  @{l="85 Bhotia horses";           img="image_assets/img_0132.jpeg"; pl="Closing - Mustang";                   cap="The Bhotia horse on steep Himalayan terrain. Six native breeds, one vertical country."}
)

foreach ($s in $slides) {
    $label  = $s.l
    $imgSrc = $s.img
    $plateTxt = $s.pl
    $capTxt   = $s.cap

    $secPat = '<section[^>]*data-screen-label="' + [regex]::Escape($label) + '"'
    $secM   = [regex]::Match($html, $secPat)
    if (-not $secM.Success) { Write-Host "  SKIP: $label"; continue }

    $si   = $secM.Index
    $rest = $html.Substring($si + 10)
    $nxt  = [regex]::Match($rest, '<section[^>]*data-screen-label=')
    $se   = if ($nxt.Success) { $si + 10 + $nxt.Index } else { $html.Length }
    $sec  = $html.Substring($si, $se - $si)

    # Replace the left page image container with a full-bleed fig
    $lpPat = '(?s)(<div class="page (?:left|l|r\b)[^"]*">\s*)<div class="g[^>]*">.*?</div>(\s*</div>)'
    $lpM   = [regex]::Match($sec, $lpPat)
    if (-not $lpM.Success) { Write-Host "  SKIP (left page pattern): $label"; continue }

    $bleed = '<div class="page left">' + "`n" +
             '      <div class="fig bleed">' + "`n" +
             '        <img src="' + $imgSrc + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">' + "`n" +
             '        <div class="vignette"></div>' + "`n" +
             '        <div class="overlay-cap">' + "`n" +
             '          <div class="pl">' + $plateTxt + '</div>' + "`n" +
             '          <div class="tx">' + $capTxt + '</div>' + "`n" +
             '        </div>' + "`n" +
             '      </div>' + "`n" +
             '    </div>'

    $sec2 = $sec.Substring(0, $lpM.Index) + $bleed + $sec.Substring($lpM.Index + $lpM.Length)
    $html = $html.Substring(0,$si) + $sec2 + $html.Substring($se)
    Write-Host "  Full-bleed: $label"
}

Set-Content -Path $path -Value $html -Encoding UTF8
Write-Host "`nDone. Saved."
