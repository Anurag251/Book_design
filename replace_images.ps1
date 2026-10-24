# Comprehensive image-slot replacement script
# Assigns 134 real images to 255 placeholder slots
# No same image used on the same spread; images cycle across chapters

$htmlPath = "c:\Users\Anurag\Desktop\Book_design\Nepal Wildlife Book.html"
$html = Get-Content $htmlPath -Raw -Encoding UTF8

# ── Complete slot-to-image mapping ──────────────────────────────────────────
# Tiger/forest chapter
# Elephant chapter
# Conservation Tourism chapter
# Urban Planning chapter
# Human-Animal Conflict chapter
# Zoo Dilemma chapter
# Biomimicry chapter
# ──────────────────────────────────────────────────────────────────────────────

$map = [ordered]@{
  # SPREAD 16 – Super male territory (tiger silhouettes, grassland)
  "ph3"   = "image_assets/img_0012.jpeg"   # wild tiger in grassland
  "ph4"   = "image_assets/img_0014.jpeg"   # wild tiger walking
  "ph5"   = "image_assets/img_0064.jpeg"   # Terai landscape

  # Photo break – forest corridor
  "mb1"   = "image_assets/img_0091.jpeg"   # forest path / corridor

  # SPREAD 21 – Cages to Corridors divider grid (forest/hopeful)
  "ph6"   = "image_assets/img_0065.jpeg"   # forest landscape
  "ph7"   = "image_assets/img_0068.jpeg"   # forest / habitat
  "ph8"   = "image_assets/img_0010.jpeg"   # grassland
  "ph9"   = "image_assets/img_0002.jpeg"   # forest

  # SPREAD 22 – Beyond Borders mosaic (captive tigers)
  "ph10"  = "image_assets/img_0006.jpeg"   # tiger in cage
  "ph11"  = "image_assets/img_0016.jpeg"   # tiger captive
  "ph12"  = "image_assets/img_0018.jpeg"   # tiger face captive
  "ph13"  = "image_assets/img_0017.jpeg"   # tiger in enclosure

  # SPREAD 23 – Phase 1 Rehabilitation (tigers in naturalistic space)
  "ph14"  = "image_assets/img_0069.jpeg"   # tiger in cage
  "ph15"  = "image_assets/img_0125.jpeg"   # tiger in shelter
  "ph16"  = "image_assets/img_0008.jpeg"   # tiger behind bars

  # C1 – Collage "the recovered" (rhino comeback)
  "col1"  = "image_assets/img_0039.jpeg"   # rhino
  "col2"  = "image_assets/img_0040.jpeg"   # rhino at water
  "col3"  = "image_assets/img_0083.jpeg"   # rhino in forest
  "col4"  = "image_assets/img_0084.jpeg"   # rhino at water
  "col5"  = "image_assets/img_0096.jpeg"   # rhino in tall grass (large)

  # SPREAD 24 – Phase 2 Re-breeding (habitat, semi-wild)
  "ph17"  = "image_assets/img_0053.jpeg"   # forest habitat landscape
  "ph18"  = "image_assets/img_0050.jpeg"   # habitat
  "ph19"  = "image_assets/img_0059.jpeg"   # forest
  "ph20"  = "image_assets/img_0061.jpeg"   # forest landscape

  # SPREAD 25 – Phase 3 Reintroduction (restored landscape)
  "ph21"  = "image_assets/img_0004.jpeg"   # mountain grassland
  "ph22"  = "image_assets/img_0015.jpeg"   # community coexistence
  "ph23"  = "image_assets/img_0013.jpeg"   # community / village

  # SPREAD 26 – Shared future (comeback symbols)
  "ph24"  = "image_assets/img_0063.jpeg"   # rhino – comeback symbol
  "ph25"  = "image_assets/img_0074.jpeg"   # rhino
  "ph26"  = "image_assets/img_0035.jpeg"   # rhino
  "ph27"  = "image_assets/img_0038.jpeg"   # rhino

  # Photo break – the elephant's country
  "mb2"   = "image_assets/img_0070.jpeg"   # elephant at forest edge
  "mb3"   = "image_assets/img_0022.jpeg"   # elephant in grassland

  # SPREAD 28 – Nepal's oldest elephant
  "ph32"  = "image_assets/img_0021.jpeg"   # elephant face close-up
  "ph33"  = "image_assets/img_0066.jpeg"   # elephant herd

  # SPREAD 29 – Elephant dilemma essay (mahout-elephant bond)
  "ph34"  = "image_assets/img_0031.jpeg"   # elephant with mahout on back
  "ph35"  = "image_assets/img_0032.jpeg"   # elephant with riders
  "ph36"  = "image_assets/img_0024.jpeg"   # elephant with ceremonial rider

  # C2 – Collage "the elephant in passing"
  "col6"  = "image_assets/img_0023.jpeg"   # elephant in forest
  "col7"  = "image_assets/img_0025.jpeg"   # elephant
  "col8"  = "image_assets/img_0026.jpeg"   # elephants
  "col9"  = "image_assets/img_0028.jpeg"   # elephant standing
  "col10" = "image_assets/img_0001.jpeg"   # elephant herd in forest (large)

  # SPREAD 30 – Unknown whereabouts (author with calf)
  "ph37"  = "image_assets/img_0093.jpeg"   # mother-baby elephant at river
  "ph38"  = "image_assets/img_0090.jpeg"   # baby elephant drinking
  "ph39"  = "image_assets/img_0030.jpeg"   # elephant close-up
  "ph40"  = "image_assets/img_0080.jpeg"   # elephant herd

  # SPREAD 31 – Hiding in plain sight (elephant in tall grass)
  "ph41"  = "image_assets/img_0027.jpeg"   # elephant in tall grass
  "ph42"  = "image_assets/img_0020.jpeg"   # community watching wildlife
  "ph43"  = "image_assets/img_0048.jpeg"   # community / people

  # SPREAD 32 – Trunk biomimicry (close-up trunk, texture)
  "ph44"  = "image_assets/img_0081.jpeg"   # elephant trunk reaching over barrier
  "ph45"  = "image_assets/img_0128.jpeg"   # elephant tusk close-up
  "ph46"  = "image_assets/img_0129.jpeg"   # chain on elephant skin (captivity)
  "ph47"  = "image_assets/img_0062.jpeg"   # community-wildlife interaction

  # SPREAD 33 – Top Prasad and mother (wildlife portraits)
  "ph48"  = "image_assets/img_0095.jpeg"   # spotted deer stag – close portrait
  "ph49"  = "image_assets/img_0094.jpeg"   # macaque in forest
  "ph50"  = "image_assets/img_0089.jpeg"   # deer fawn and doe
  "ph51"  = "image_assets/img_0056.jpeg"   # chital deer

  # C3 – Collage "the herd" (deer herds, prey species)
  "col11" = "image_assets/img_0042.jpeg"   # chital deer
  "col12" = "image_assets/img_0009.jpeg"   # deer in grass
  "col13" = "image_assets/img_0107.jpeg"   # spotted deer herd
  "col14" = "image_assets/img_0130.jpeg"   # sambar deer – Terai (large)

  # SPREAD 34 – Four-stage path (mahout/elephant portraits)
  "ph52"  = "image_assets/img_0057.jpeg"   # community / people watching wildlife
  "ph53"  = "image_assets/img_0007.jpeg"   # community in forest

  # SPREAD 35 – The Mahout as Teacher (observation / attention)
  "ph54"  = "image_assets/img_0123.jpeg"   # crested serpent eagle – intense gaze
  "ph55"  = "image_assets/img_0060.jpeg"   # leopard on branch – moment of stillness
  "ph56"  = "image_assets/img_0098.jpeg"   # leopard on log at night

  # Photo break – by the river
  "mb4"   = "image_assets/img_0082.jpeg"   # kingfisher on rock – river bird
  "mb5"   = "image_assets/img_0106.jpeg"   # kingfisher hovering – river bird
  "mb6"   = "image_assets/img_0085.jpeg"   # bar-headed geese on lake

  # Four horizons – vertical 4 (Terai to Himalaya)
  "fv1"   = "image_assets/img_0132.jpeg"   # white horse with Himalayan mountains
  "fv2"   = "image_assets/img_0003.jpeg"   # high-altitude horses / yak
  "fv3"   = "image_assets/img_0072.jpeg"   # rhino at waterhole – Terai
  "fv4"   = "image_assets/img_0071.jpeg"   # rhino at water (large landscape)

  # SPREAD 38 – The Eagle Watches (birds of prey, eyes)
  "ph61"  = "image_assets/img_0116.jpeg"   # eagle in flight against blue sky
  "ph62"  = "image_assets/img_0073.jpeg"   # water bird / heron
  "ph63"  = "image_assets/img_0044.jpeg"   # bird
  "ph64"  = "image_assets/img_0045.jpeg"   # bird

  # SPREAD 39 – Fewer Footprints (wildlife undisturbed)
  "ph65"  = "image_assets/img_0036.jpeg"   # bird
  "ph66"  = "image_assets/img_0041.jpeg"   # bird
  "ph67"  = "image_assets/img_0054.jpeg"   # bird

  # SPREAD 40 – Daily Disturbance
  "ph68"  = "image_assets/img_0119.jpeg"   # starling with insect
  "ph69"  = "image_assets/img_0114.jpeg"   # babbler bird in foliage
  "ph70"  = "image_assets/img_0115.jpeg"   # koel / cuckoo bird
  "ph71"  = "image_assets/img_0102.jpeg"   # woodpecker on tree

  # C4 – Collage "on the water" (waterfowl, river wildlife)
  "col15" = "image_assets/img_0033.jpeg"   # waterfowl on water
  "col16" = "image_assets/img_0117.jpeg"   # pink water lilies
  "col17" = "image_assets/img_0121.jpeg"   # gharial in river (wildlife)
  "col18" = "image_assets/img_0097.jpeg"   # rhino swimming in river

  # SPREAD 41 – The Saras (crane / bird species)
  "ph72"  = "image_assets/img_0101.jpeg"   # peacock with full plumage
  "ph73"  = "image_assets/img_0088.jpeg"   # peacock in burned grassland
  "ph74"  = "image_assets/img_0051.jpeg"   # peacock

  # SPREAD 43 – Young Foals (Himalayan horses)
  "ph75"  = "image_assets/img_0092.jpeg"   # Himalayan ponies
  "ph76"  = "image_assets/img_0134.jpeg"   # chestnut horse in rocky landscape
  "ph77"  = "image_assets/img_0133.jpeg"   # horses in highlands
  "ph78"  = "image_assets/img_0005.jpeg"   # high-altitude yak / gazelle

  # SPREAD 44 – Phase-wise path forward
  "ph79"  = "image_assets/img_0052.jpeg"   # peacock
  "ph80"  = "image_assets/img_0046.jpeg"   # peacock at rest
  "ph81"  = "image_assets/img_0103.jpeg"   # parakeets in flight
  "ph82"  = "image_assets/img_0122.jpeg"   # kingfisher on branch

  # C5 – Collage "a way shared" (community & wildlife coexistence)
  "col19" = "image_assets/img_0099.jpeg"   # stray dogs by river – human-wildlife
  "col20" = "image_assets/img_0105.jpeg"   # fox and cow – coexistence/conflict
  "col21" = "image_assets/img_0104.jpeg"   # fox / jackal in grassland
  "col22" = "image_assets/img_0111.jpeg"   # squirrel on branch
  "col23" = "image_assets/img_0112.jpeg"   # wild boar

  # SPREAD 45 – A Way Forward
  "ph83"  = "image_assets/img_0113.jpeg"   # python close-up – reptile biodiversity
  "ph84"  = "image_assets/img_0108.jpeg"   # butterfly on leaf

  # SPREAD 46 – Tourism Outcomes
  "ph85"  = "image_assets/img_0087.jpeg"   # two owlets on branch
  "ph86"  = "image_assets/img_0110.jpeg"   # barn owl in tree
  "ph87"  = "image_assets/img_0109.jpeg"   # great hornbill in tree
  "ph88"  = "image_assets/img_0126.jpeg"   # kingfisher on bare branch
  "ph89"  = "image_assets/img_0115.jpeg"   # koel/cuckoo bird – unique species tourism
  "ph90"  = "image_assets/img_0046.jpeg"   # peacock (reuse – different spread)
  "ph91"  = "image_assets/img_0100.jpeg"   # baby rhino with adult

  # Photo break – edges (buffer zone wildlife)
  "mb7"   = "image_assets/img_0076.jpeg"   # rhino
  "mb8"   = "image_assets/img_0077.jpeg"   # rhino
  "mb9"   = "image_assets/img_0124.jpeg"   # two rhinos at riverside
  "mb10"  = "image_assets/img_0120.jpeg"   # rhino swimming near boat

  # SPREAD 49 – Urban Planning Dilemma
  "ph95"  = "image_assets/img_0034.jpeg"   # (unknown – generic wildlife)
  "ph96"  = "image_assets/img_0037.jpeg"   # (unknown)
  "ph97"  = "image_assets/img_0079.jpeg"   # (unknown)
  "ph98"  = "image_assets/img_0011.jpeg"   # (unknown)
  "ph99"  = "image_assets/img_0049.jpeg"   # (unknown)
  "ph100" = "image_assets/img_0058.jpeg"   # (unknown)
  "ph101" = "image_assets/img_0127.jpeg"   # wasp/hornet in flight – urban wildlife
  "ph102" = "image_assets/img_0131.jpeg"   # tree bark texture – nature in city

  # SPREAD 51 – Clearing Nature (diagram / ecosystem)
  "ph103" = "image_assets/img_0029.jpeg"   # infographic / diagram
  "ph104" = "image_assets/img_0043.jpeg"   # infographic

  # SPREAD 52 – Living with Cities (urban-edge habitat)
  "ph105" = "image_assets/img_0004.jpeg"   # mountain grassland – edge habitat
  "ph106" = "image_assets/img_0064.jpeg"   # Terai landscape – habitat edge
  "ph107" = "image_assets/img_0061.jpeg"   # forest/river landscape – urban edge

  # C6 – Collage "small architectures" (natural small-scale design)
  "col24" = "image_assets/img_0047.jpeg"   # spider macro – natural architecture
  "col25" = "image_assets/img_0086.jpeg"   # spider with prey in web
  "col26" = "image_assets/img_0019.jpeg"   # infographic / diagram
  "col27" = "image_assets/img_0055.jpeg"   # infographic – ecosystem
  "col28" = "image_assets/img_0067.jpeg"   # infographic

  # C7 – Collage "the floodplain" (rivers, water, wetland)
  "col29" = "image_assets/img_0118.jpeg"   # gharials at breeding facility
  "col30" = "image_assets/img_0075.jpeg"   # rhino habitat
  "col31" = "image_assets/img_0007.jpeg"   # community near water
  "col32" = "image_assets/img_0078.jpeg"   # infographic – biodiversity data
  "col33" = "image_assets/img_0013.jpeg"   # community / village (reuse different chapter)
  "col34" = "image_assets/img_0015.jpeg"   # community coexistence (reuse)
  "col35" = "image_assets/img_0020.jpeg"   # people near nature (reuse)
  "col36" = "image_assets/img_0048.jpeg"   # community (reuse)

  # SPREAD 53 – Before Concrete (rivers, floodplain history)
  "ph108" = "image_assets/img_0033.jpeg"   # waterfowl (reuse diff chapter)
  "ph109" = "image_assets/img_0085.jpeg"   # bar-headed geese (reuse)
  "ph110" = "image_assets/img_0073.jpeg"   # water bird (reuse)
  "ph111" = "image_assets/img_0117.jpeg"   # water lilies (reuse)

  # SPREAD 54 – When Roads Meet Roots
  "ph112" = "image_assets/img_0091.jpeg"   # forest path (reuse – forest roads)
  "ph113" = "image_assets/img_0002.jpeg"   # forest (reuse)
  "ph114" = "image_assets/img_0065.jpeg"   # forest landscape (reuse)
  "ph115" = "image_assets/img_0068.jpeg"   # forest (reuse)

  # SPREAD 55 – Nature as Infrastructure
  "ph116" = "image_assets/img_0010.jpeg"   # grassland (reuse)
  "ph117" = "image_assets/img_0050.jpeg"   # habitat (reuse)
  "ph118" = "image_assets/img_0059.jpeg"   # forest (reuse)

  # SPREAD 57 – Rapti Reprise
  "ph123" = "image_assets/img_0061.jpeg"   # forest/river landscape
  "ph124" = "image_assets/img_0053.jpeg"   # habitat landscape
  "ph125" = "image_assets/img_0004.jpeg"   # mountain grassland (reuse)

  # SPREAD 59 – Direct Impact (human-wildlife conflict)
  "ph126" = "image_assets/img_0099.jpeg"   # stray dogs eating carcass (reuse)
  "ph127" = "image_assets/img_0105.jpeg"   # fox and cow (reuse)
  "ph128" = "image_assets/img_0104.jpeg"   # fox/jackal (reuse)
  "ph129" = "image_assets/img_0062.jpeg"   # community-wildlife (reuse)

  # SPREAD 60 – Conflict as Success (rhino/conservation wins)
  "col37" = "image_assets/img_0035.jpeg"   # rhino (reuse diff chapter)
  "col38" = "image_assets/img_0038.jpeg"   # rhino (reuse)
  "col39" = "image_assets/img_0039.jpeg"   # rhino (reuse)
  "col40" = "image_assets/img_0040.jpeg"   # rhino at water (reuse)
  "col41" = "image_assets/img_0096.jpeg"   # rhino in grass (reuse)

  # SPREAD 61 – Indirect Impact
  "ph130" = "image_assets/img_0112.jpeg"   # wild boar (reuse)
  "ph131" = "image_assets/img_0113.jpeg"   # python (reuse)
  "ph132" = "image_assets/img_0095.jpeg"   # deer stag (reuse)
  "ph133" = "image_assets/img_0107.jpeg"   # deer herd (reuse)

  # SPREAD 62 – Predictable not Random
  "ph134" = "image_assets/img_0009.jpeg"   # deer in grass (reuse)
  "ph135" = "image_assets/img_0056.jpeg"   # chital (reuse)

  # Photo break – buffer zone
  "mb11"  = "image_assets/img_0074.jpeg"   # rhino (reuse)
  "mb12"  = "image_assets/img_0063.jpeg"   # rhino (reuse)
  "mb13"  = "image_assets/img_0083.jpeg"   # rhino in forest (reuse)
  "mb14"  = "image_assets/img_0084.jpeg"   # rhino at water (reuse)
  "mb15"  = "image_assets/img_0100.jpeg"   # baby rhino with adult (reuse)

  # SPREAD 65 – Buffer to Agriculture
  "ph136" = "image_assets/img_0057.jpeg"   # community/people (reuse)
  "ph137" = "image_assets/img_0020.jpeg"   # community (reuse)
  "ph138" = "image_assets/img_0048.jpeg"   # community (reuse)

  # SPREAD 66 – Conflict Outcomes
  "ph139" = "image_assets/img_0094.jpeg"   # macaque (reuse)
  "ph140" = "image_assets/img_0089.jpeg"   # deer fawn (reuse)
  "ph141" = "image_assets/img_0042.jpeg"   # chital (reuse)
  "ph142" = "image_assets/img_0130.jpeg"   # sambar deer (reuse)

  # C9 – Collage "what is a cage for" (full spread – captive/cage imagery)
  "col42" = "image_assets/img_0006.jpeg"   # tiger in cage (reuse – strong visual)

  # SPREAD 68 – Rethinking Space and Purpose (zoo reimagined)
  "ph146" = "image_assets/img_0016.jpeg"   # tiger captive (reuse – zoo context)
  "ph147" = "image_assets/img_0017.jpeg"   # tiger in enclosure (reuse)
  "ph148" = "image_assets/img_0018.jpeg"   # tiger face (reuse)
  "ph149" = "image_assets/img_0125.jpeg"   # tiger in shelter (reuse)
  "ph150" = "image_assets/img_0069.jpeg"   # tiger in cage (reuse)
  "ph151" = "image_assets/img_0008.jpeg"   # tiger behind bars (reuse)
  "ph152" = "image_assets/img_0012.jpeg"   # wild tiger (reuse – freedom context)
  "ph153" = "image_assets/img_0014.jpeg"   # wild tiger walking (reuse)

  # SPREAD 69 – Rhino Plate (close rhino studies)
  "col43" = "image_assets/img_0083.jpeg"   # rhino in forest (reuse)
  "col44" = "image_assets/img_0084.jpeg"   # rhino at water (reuse)
  "col45" = "image_assets/img_0074.jpeg"   # rhino (reuse)
  "col46" = "image_assets/img_0075.jpeg"   # rhino (reuse)
  "col47" = "image_assets/img_0076.jpeg"   # rhino (reuse)
  "col48" = "image_assets/img_0077.jpeg"   # rhino (reuse)
  "col49" = "image_assets/img_0096.jpeg"   # rhino tall grass (reuse – large)

  # SPREAD 70 – Zoos in Nepal
  "ph154" = "image_assets/img_0035.jpeg"   # rhino (reuse)
  "ph155" = "image_assets/img_0038.jpeg"   # rhino (reuse)

  # SPREAD 71 – Pair of Hornbill
  "ph156" = "image_assets/img_0109.jpeg"   # great hornbill in tree (reuse)
  "ph157" = "image_assets/img_0087.jpeg"   # two owlets on branch (reuse)
  "ph158" = "image_assets/img_0110.jpeg"   # barn owl in tree (reuse)

  # Photo break – space re-imagined
  "mb16"  = "image_assets/img_0091.jpeg"   # forest path (reuse)

  # SPREAD 73 – Addressing Zoo Divider
  "ph159" = "image_assets/img_0039.jpeg"   # rhino (reuse)
  "ph160" = "image_assets/img_0040.jpeg"   # rhino at water (reuse)
  "ph161" = "image_assets/img_0063.jpeg"   # rhino (reuse)
  "ph162" = "image_assets/img_0071.jpeg"   # rhino at water (reuse – large)

  # SPREAD 74 – Zoo Six Phases
  "ph163" = "image_assets/img_0100.jpeg"   # baby rhino with adult (reuse)
  "ph164" = "image_assets/img_0120.jpeg"   # rhino swimming (reuse)
  "ph165" = "image_assets/img_0097.jpeg"   # rhino swimming in river (reuse)
  "ph166" = "image_assets/img_0124.jpeg"   # two rhinos at riverside (reuse)

  # Photo breaks – patterns / nature's blueprint
  "mb17"  = "image_assets/img_0047.jpeg"   # spider macro (reuse)
  "mb18"  = "image_assets/img_0086.jpeg"   # spider with prey (reuse)
  "mb19"  = "image_assets/img_0131.jpeg"   # tree bark texture (reuse)

  # SPREAD 77 – Biomimicry Intro
  "ph170" = "image_assets/img_0082.jpeg"   # kingfisher on rock (reuse)
  "ph171" = "image_assets/img_0106.jpeg"   # kingfisher hovering (reuse)
  "ph172" = "image_assets/img_0122.jpeg"   # kingfisher on branch (reuse)
  "ph173" = "image_assets/img_0126.jpeg"   # kingfisher in dark forest (reuse)

  # SPREAD 78 – Kingfisher and Trains (kingfisher biology)
  "ph174" = "image_assets/img_0082.jpeg"   # kingfisher on rock
  "ph175" = "image_assets/img_0106.jpeg"   # kingfisher hovering
  "ph176" = "image_assets/img_0122.jpeg"   # kingfisher on branch

  # C11 – Collage "the blueprint" (nature designs)
  "col50" = "image_assets/img_0116.jpeg"   # eagle in flight – precision
  "col51" = "image_assets/img_0123.jpeg"   # eagle face – intense gaze
  "col52" = "image_assets/img_0047.jpeg"   # spider – natural geometry (reuse)
  "col53" = "image_assets/img_0108.jpeg"   # butterfly wings – natural patterns (reuse)
  "col54" = "image_assets/img_0127.jpeg"   # wasp/hornet – natural architecture (reuse)

  # SPREAD 79 – Rhino Natural Armor
  "ph177" = "image_assets/img_0083.jpeg"   # rhino in forest (reuse)
  "ph178" = "image_assets/img_0084.jpeg"   # rhino at water (reuse)
  "ph179" = "image_assets/img_0039.jpeg"   # rhino (reuse)
  "ph180" = "image_assets/img_0040.jpeg"   # rhino (reuse)
  "ph181" = "image_assets/img_0096.jpeg"   # rhino tall grass (reuse)
  "ph182" = "image_assets/img_0100.jpeg"   # baby rhino (reuse)
  "ph183" = "image_assets/img_0097.jpeg"   # rhino swimming (reuse)
  "ph184" = "image_assets/img_0120.jpeg"   # rhino near boat (reuse)

  # SPREAD 80 – Natural Navigation (animal navigation/movement)
  "ph185" = "image_assets/img_0001.jpeg"   # elephant herd moving (reuse)
  "ph186" = "image_assets/img_0080.jpeg"   # elephant herd (reuse)

  # C12 – Collage "the silent ones" (owls/nocturnal)
  "col55" = "image_assets/img_0087.jpeg"   # two owlets (reuse)
  "col56" = "image_assets/img_0110.jpeg"   # barn owl (reuse)
  "col57" = "image_assets/img_0060.jpeg"   # leopard on branch night (reuse)
  "col58" = "image_assets/img_0098.jpeg"   # leopard on log night (reuse)
  "col59" = "image_assets/img_0109.jpeg"   # hornbill in tree (reuse)

  # SPREAD 82 – Owls Silent Flight
  "ph187" = "image_assets/img_0087.jpeg"   # owlets
  "ph188" = "image_assets/img_0110.jpeg"   # barn owl
  "ph189" = "image_assets/img_0123.jpeg"   # eagle / raptor face (reuse)

  # SPREAD 83 – Expanding the Lessons
  "ph190" = "image_assets/img_0116.jpeg"   # eagle in flight (reuse)
  "ph191" = "image_assets/img_0102.jpeg"   # woodpecker (reuse)
  "ph192" = "image_assets/img_0103.jpeg"   # parakeets flock (reuse)
  "ph193" = "image_assets/img_0114.jpeg"   # babbler bird (reuse)
  "ph194" = "image_assets/img_0115.jpeg"   # koel/cuckoo (reuse)
  "ph195" = "image_assets/img_0119.jpeg"   # starling with insect (reuse)
  "ph196" = "image_assets/img_0044.jpeg"   # bird (reuse)
}

# ── Add CSS rules for replaced img tags ──────────────────────────────────────
$cssInsert = @"

  /* ── Replaced image-slot CSS ────────────────────────────────────────────── */
  .gfig > img   { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
  .gstack > img,
  .gtri > img,
  .ggrid > img,
  .gdet > img,
  .gv4 > img,
  .gfeat > img,
  .gmosaic > img{ width:100%; height:100%; object-fit:cover; display:block; }
"@

$html = $html -replace '(</style>)', "$cssInsert`$1"

# ── Replace each image-slot with an img tag ───────────────────────────────────
$replaced = 0
foreach ($id in $map.Keys) {
    $imgSrc = $map[$id]
    $pattern = '<image-slot\s+id="' + [regex]::Escape($id) + '"[^>]*></image-slot>'
    $replacement = "<img src=`"$imgSrc`" alt=`"`" loading=`"lazy`">"
    $newHtml = [regex]::Replace($html, $pattern, $replacement)
    if ($newHtml -ne $html) { $replaced++ }
    $html = $newHtml
}

Write-Host "Replaced: $replaced image-slot elements"

# ── Increase title / heading sizes ────────────────────────────────────────────
# Pattern: h2.ttl on caption pages — increase from ~60px to ~100px
# We do this by updating the CSS rule for .ttl
$html = $html -replace '(\.ttl\s*\{[^}]*font-size\s*:\s*)(\d+)px', '${1}108px'

# Save output
Set-Content -Path $htmlPath -Value $html -Encoding UTF8
Write-Host "Done. File saved."
