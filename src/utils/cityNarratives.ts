// Per-city qualitative narratives + a deterministic variation generator
// for the long tail. Purpose: make every programmatic city + service+city
// page substantively different from its siblings so Google does not treat
// them as templated duplicates.

import { getRegionInsight, type RegionInsight } from "./locationContent";

// ============================================================
// Hand-written narratives for the highest-priority cities.
// Each is 3–5 sentences of qualitative, market-specific commentary
// (no shared boilerplate, no shared statistics).
// ============================================================
const cityNarratives: Record<string, string> = {
  // ---------- California ----------
  "los-angeles": "Los Angeles is the densest franchise market on the West Coast, where a single ZIP code can support overlapping QSR, fitness, beauty, and home-service concepts without cannibalizing each other. Local franchise buyers skew heavily toward first-generation immigrant entrepreneurs and former media/tech professionals exiting corporate roles, which shifts the messaging and channel mix away from generic 'business ownership' positioning. Sub-markets like the San Gabriel Valley, South Bay, and Inland Empire each behave like separate cities for franchise demand. Real-estate cost and CA-specific labor compliance (AB 5, fast-food council rules) are usually the two filters that decide which concepts close.",
  "san-francisco": "San Francisco's franchise market is unusually top-heavy on service and tech-adjacent concepts — IT services, executive coaching, B2B cleaning, home automation — because real-estate economics make traditional brick-and-mortar QSR hard. Investor profiles are dominated by former operators and tech alumni with significant liquid capital but a strong preference for semi-absentee or executive-model franchises rather than owner-operator concepts. CFIL registration, San Francisco's local franchise ordinance, and minimum-wage stacking mean lead-quality questions about capital and operating model matter more here than in most US metros.",
  "san-diego": "San Diego franchise demand leans heavily on military separations from the local bases, biotech professionals, and Mexico-US cross-border operators. Wellness, pet, home services, and youth-enrichment concepts consistently outperform — but the actively underserved sub-segments tend to sit in North County (Carlsbad, Vista, Escondido) rather than the urban core. Local zoning and coastal commission rules add friction on physical concepts, which is why we steer service-based franchise campaigns toward inland corridors first.",
  "san-jose": "San Jose and the broader South Bay produce a very specific franchise buyer: a senior tech professional with high liquid net worth, limited operating experience, and a 12–18 month horizon to leave a W-2. That profile responds to executive-model and royalty-light concepts more than traditional owner-operator playbooks. We see strongest conversion on B2B services, education, and home-improvement franchises with structured ramp programs and bilingual operations support.",
  "sacramento": "Sacramento offers a lower-cost-of-entry alternative to the Bay Area without the regulatory drag of LA, making it the preferred Northern California entry point for emerging franchisors. State-government employment creates a steady, recession-buffered consumer base ideal for QSR, family entertainment, and tutoring concepts. The fastest-growing franchise corridors are in Folsom, Roseville, and Elk Grove rather than downtown Sacramento itself.",

  // ---------- Texas ----------
  "houston": "Houston is one of the most franchisable major metros in North America: large lot sizes, weak zoning, no state income tax, and a deep pool of energy-industry refugees with deployable capital. Asian, Latino, Nigerian, and Indian buyer cohorts each anchor different concept categories, which is why a one-size message rarely works. Energy-cycle layoffs reliably accelerate franchise inquiries here — when oil softens, our Houston lead volume climbs.",
  "dallas": "Dallas-Fort Worth is the franchise headquarters capital of the United States, which means local buyers are unusually sophisticated and already comparing your brand against three others before they take the first call. Multi-unit and area-developer deals close faster here than almost anywhere else because the regional banking community is comfortable underwriting franchise expansion. Frisco, Plano, and McKinney corridors lead absolute unit growth; Arlington and Irving lead value-tier QSR and service concepts.",
  "san-antonio": "San Antonio's franchise market is heavily Hispanic-led and military-influenced, with strong demand for affordable QSR, automotive services, and family-oriented concepts. Investor capital tends to be lower than DFW or Austin, so financing-friendly programs (SBA-ready, low-build-out concepts) consistently outperform premium executive-model brands. The North Side and outer 1604 loop are where suburban franchise development is happening.",
  "austin": "Austin is a paradox — high-net-worth buyers, but a saturated trendy-concept market, so emerging franchisors find it harder to break in than the size of the metro suggests. The strongest franchise traction is in suburban Round Rock, Cedar Park, Pflugerville, and Buda where new master-planned communities still need anchor services. Tech-adjacent professionals exiting startups are the dominant investor profile and respond best to scalable, multi-unit-ready concepts.",
  "fort-worth": "Fort Worth runs on a different franchise rhythm than Dallas: more owner-operator, more blue-collar service concepts, fewer flashy fast-casual launches. Aledo, Burleson, and Mansfield are the high-growth suburban rings where new franchise unit awards consistently outperform projections. Local lenders are franchise-friendly and the city's permitting timeline is meaningfully shorter than Dallas's.",

  // ---------- New York ----------
  "new-york-city": "New York City is the highest-friction franchise market in the country: rents, payroll, permitting, and local laws (Fair Workweek, Salary Transparency, NYC-specific wage tiers) all compress unit economics. The franchisees who succeed here usually run multi-unit from day one and pre-arrange landlord work-letters before signing. Outer-borough corridors in Queens, Bronx, and Staten Island remain underserved relative to demand and produce better cash-on-cash returns than Manhattan locations.",
  "long-island": "Long Island is one of the strongest single-unit franchise markets in the Northeast — high household income, low franchise penetration relative to population, and a buyer pool dominated by former NYC commuters. Nassau and western Suffolk dominate volume; eastern Suffolk (out to the Hamptons corridor) responds to seasonal-tolerant concepts only. Real estate is the most common deal-killer here, so we pre-screen for concepts that can operate from end-cap or shopping-plaza inline space.",
  "buffalo": "Buffalo's franchise market has been quietly resurgent since the bills/medical-corridor build-out: low real-estate cost, motivated municipal economic development, and a buyer pool of healthcare, education, and trades operators rather than corporate refugees. Value-tier and home-service concepts dominate inquiry volume. Cross-border Canadian operators looking for US footholds frequently use Buffalo as their first US unit.",
  "westchester": "Westchester is a high-net-worth, high-expectation franchise market where investors will pay a premium for proven systems and walk fast from anything that looks under-supported. White Plains, Yonkers, and the Route 119/287 corridor anchor most franchise unit growth. Senior care, fitness, and premium child-enrichment concepts consistently outperform.",

  // ---------- Florida ----------
  "miami": "Miami's franchise demand is dominated by Latin American capital — buyers using EB-5, E-2, or domestic LLC structures who often want a US franchise unit as much for residency strategy as for ROI. Spanish-language marketing and bilingual operations support are not optional here. Brickell, Doral, and Kendall behave like three separate buyer markets with different concept preferences.",
  "orlando": "Orlando's franchise market is unusually tourism-buffered, which means QSR, retail, and entertainment concepts have a built-in floor that most metros don't enjoy. The residential growth corridors (Lake Nona, Winter Garden, Oviedo) are where suburban franchise unit awards have been compounding fastest. Many buyers are recent in-migrants from the Northeast and Midwest with sale-of-home capital and a 6–12 month timeline.",
  "tampa": "Tampa-St. Pete-Clearwater is Florida's most stable multi-unit franchise market — less tourism volatility than Orlando, less Latin-American-capital concentration than Miami, and a deep pool of corporate refugees from the financial-services and healthcare relocations into the metro. Wesley Chapel, Riverview, and the Pasco County growth corridor lead new unit volume. Local SBA lending is unusually franchise-aware.",
  "jacksonville": "Jacksonville is one of the most under-marketed franchise opportunities in the Southeast. Low real-estate cost, military and logistics employment base, and a steadily growing population have created a market where emerging franchisors can still secure prime territories that are already gone in Miami or Orlando. St. Johns and Nocatee corridors lead premium concept growth.",

  // ---------- Illinois ----------
  "chicago": "Chicago's franchise market splits sharply between the city (high-friction, premium-rent, union-influenced operating environment) and the suburban collar (lower-friction, multi-unit-friendly, faster permitting). Naperville, Schaumburg, Oak Brook, and the I-88 corridor account for a disproportionate share of strong franchise unit performance. Illinois registration filings add 60–90 days to franchisor onboarding, which is why our lead campaigns here pre-qualify on registration status before booking discovery calls.",

  // ---------- Georgia ----------
  "atlanta": "Atlanta is the franchise capital of the Southeast — both a major franchisor headquarters cluster and the dominant buyer market. Gwinnett, Forsyth, Cherokee, and Cobb suburbs lead suburban unit growth, while in-town concepts (Buckhead, Midtown, West Midtown) skew toward premium and experiential brands. Strong Black-entrepreneur, Asian, and African-immigrant franchise buyer communities support concept diversity that most US metros can't match.",

  // ---------- Arizona ----------
  "phoenix": "Phoenix is the fastest-growing major franchise market in the country by absolute population gain, and master-planned communities (Verrado, Estrella, Eastmark, Vistancia) open new retail nodes faster than most franchisors can award territories. Scottsdale, Gilbert, and Chandler each support distinct concept categories. Heat-resilient operating models matter — concepts requiring outdoor labor or low-AC build-outs underperform.",

  // ---------- Washington ----------
  "seattle": "Seattle's franchise market is dominated by tech-professional buyers seeking semi-absentee or executive-model concepts; owner-operator playbooks rarely close here. Wage-floor compliance and Seattle's franchise-specific minimum-wage tiers materially affect unit economics, which is why eastside (Bellevue, Redmond, Issaquah, Sammamish) and Snohomish County markets consistently outperform Seattle proper.",

  // ---------- Colorado ----------
  "denver": "Denver's franchise market combines a high-income outdoor-lifestyle consumer base with one of the most active in-migration patterns in the West. Suburbs like Highlands Ranch, Parker, Castle Rock, and Broomfield lead suburban unit growth. Fitness, pet, outdoor-services, and family-experience concepts consistently outperform; concepts dependent on cheap retail labor face real headwinds here.",

  // ---------- Nevada ----------
  "las-vegas": "Las Vegas is a tourism-resilient but locally-cyclical market — the strip skews concepts toward visitor capture, while Henderson, Summerlin, and North Las Vegas behave like a normal high-growth suburban Sunbelt metro. California refugees with sale-of-home capital are the dominant inbound buyer profile and respond best to multi-unit programs with structured ramp.",

  // ---------- North Carolina ----------
  "charlotte": "Charlotte is one of the strongest franchise unit-growth markets in the Southeast, anchored by financial-services and healthcare-corporate relocations that produce a steady stream of high-net-worth career-change buyers. Lake Norman, Ballantyne, and the I-485 outer loop lead suburban franchise expansion. Bank-led SBA underwriting here is the most franchise-fluent in the Carolinas.",
  "raleigh": "Raleigh-Durham-Cary's franchise market is unusually well-educated and tech-influenced, which biases buyer preference toward executive-model and B2B-service concepts. The RTP corridor, Apex, Holly Springs, and Wake Forest are where new suburban unit awards have been compounding fastest. Multi-unit programs close more reliably here than single-unit.",

  // ---------- Massachusetts ----------
  "boston": "Boston is a high-friction, high-quality franchise market: dense residential demand, sophisticated buyers, but unforgiving real estate and a complex local permitting layer. The 128/495 corridor (Burlington, Westford, Framingham, Andover) and the South Shore consistently produce better single-unit franchise economics than the city itself. Multi-unit awards skew toward fitness, education, and senior-care concepts.",

  // ---------- Pennsylvania ----------
  "philadelphia": "Philadelphia's franchise market is anchored by the Main Line, King of Prussia, and the Bucks/Chester suburban ring rather than the city proper. Healthcare-corporate and biotech-corridor relocations supply a steady pool of mid-career franchise buyers. Pennsylvania labor law and Philadelphia-specific wage rules push concept selection toward suburban locations.",

  // ---------- Ohio ----------
  "columbus": "Columbus is one of the most under-rated franchise growth markets in the Midwest — Intel's central-Ohio build-out, Honda's EV corridor, and JPMorgan's expanded back-office have created a steady stream of relocating professionals with sale-of-home capital. Dublin, Powell, Hilliard, and New Albany are leading suburban unit growth.",
  "cleveland": "Cleveland's franchise market is dominated by healthcare-corporate buyers (Cleveland Clinic, University Hospitals, MetroHealth alumni) and second-generation small-business operators looking to diversify. Westlake, Strongsville, Solon, and Mentor are the high-performing suburban rings. Value-tier and service-based concepts consistently out-perform premium experiential ones.",

  // ---------- Michigan ----------
  "detroit": "Detroit's franchise market is bifurcated: the city itself supports value-tier and minority-owned franchise concepts with strong municipal support programs, while Oakland and Macomb counties (Troy, Rochester Hills, Sterling Heights, Novi) anchor the bulk of premium and multi-unit franchise growth. Automotive-industry severance and supplier-network alumni are reliable franchise buyer pools.",

  // ---------- Minnesota ----------
  "minneapolis": "The Twin Cities franchise market is one of the most stable in the upper Midwest, with low population volatility and unusually high franchise-buyer due-diligence standards. Edina, Eden Prairie, Maple Grove, and Woodbury anchor suburban unit growth. Concepts with strong unit-economics transparency close significantly faster here than brand-led campaigns.",

  // ---------- Tennessee ----------
  "nashville": "Nashville's franchise market is the strongest in the upper South — healthcare-corporate concentration, no state income tax, and ongoing in-migration produce a near-constant flow of mid-career career-change buyers. Brentwood, Franklin, Mt. Juliet, and Murfreesboro lead suburban unit growth. Real-estate scarcity has become the dominant deal-friction; pre-secured site lists materially improve close rates.",

  // ---------- Missouri ----------
  "kansas-city": "Kansas City's franchise market straddles Missouri and Kansas, which creates a real regulatory and tax-planning dimension to most multi-unit franchise deals. Overland Park, Lee's Summit, and Olathe consistently lead unit growth. Logistics, e-commerce-corporate, and Cerner alumni form a recognizable franchise buyer pool.",
  "st-louis": "St. Louis is a value-oriented franchise market with strong second-generation small-business operator pools in the West County and St. Charles corridors. Concept categories that out-perform tend to be home-service, automotive, and senior-care. SBA lending here is unusually franchise-fluent.",

  // ---------- Oregon ----------
  "portland": "Portland's franchise market is constrained by regulatory and tax friction inside Multnomah County, which has shifted suburban franchise growth toward Beaverton, Hillsboro, Lake Oswego, and Vancouver, WA (across the river). Wellness, pet, and outdoor-lifestyle concepts dominate; concepts dependent on cheap retail labor face material headwinds.",

  // ---------- Utah ----------
  "salt-lake-city": "Salt Lake City's franchise market combines a young, fast-growing population with one of the highest small-business formation rates in the West. Lehi, Sandy, South Jordan, and Draper are the high-growth corridors. Family-oriented and youth-focused concepts (education, sports, entertainment) consistently out-perform.",

  // ---------- Maryland / DC ----------
  "baltimore": "Baltimore's franchise market is anchored by healthcare-corporate (Johns Hopkins ecosystem) and federal-contractor buyer pools in the Howard and Anne Arundel county corridors. Columbia, Towson, and the I-95/I-695 outer loop lead suburban unit growth.",

  // ---------- Virginia ----------
  "richmond": "Richmond's franchise market is one of the most under-leveraged Mid-Atlantic opportunities — financial-services corporate concentration, low real-estate cost relative to DC, and a steady inflow of Northern Virginia and northeastern relocations. Short Pump, Midlothian, and the I-295 outer loop lead suburban franchise growth.",

  // ---------- UK (broad) ----------
  "london": "London's franchise market is the most sophisticated and most expensive in the UK — buyers expect BFA-aligned brands, complete unit-economics transparency, and proven multi-unit operating systems. Greater London franchise growth has shifted aggressively toward outer-ring boroughs and the M25 corridor where unit economics remain workable.",
  "manchester": "Manchester is the UK's strongest franchise market outside London on a price-performance basis — lower entry cost, strong second-city corporate base, and significant overseas-graduate entrepreneur capital. Trafford, Salford Quays, and the Stockport/Cheshire corridor lead unit growth.",
  "birmingham": "Birmingham's franchise market benefits from the most ethnically diverse buyer pool in the UK, supporting concept categories that struggle in monocultural markets. The HS2 build-out and broader Midlands engine programs are driving suburban franchise demand in Solihull, Sutton Coldfield, and the Black Country corridor.",

  // ---------- Canada (broad) ----------
  "toronto": "Toronto is the largest and most franchise-mature market in Canada — Ontario's Arthur Wishart Act compliance is non-negotiable, and buyer due diligence here is at US-coastal-city levels. The 905 ring (Mississauga, Brampton, Vaughan, Markham, Oakville) accounts for a disproportionate share of multi-unit franchise growth. Strong immigrant-entrepreneur capital supports concept categories most metros can't sustain.",
  "vancouver": "Vancouver's franchise market is constrained by some of the highest real-estate costs in North America, which has shifted franchise unit growth toward the Fraser Valley (Surrey, Langley, Abbotsford) and the Tri-Cities. Asian-Canadian buyer capital dominates higher-ticket concept categories.",
  "calgary": "Calgary's franchise market is energy-cycle correlated but increasingly diversified — financial services, tech, and logistics relocations are reducing oil-and-gas dependence. Suburban Airdrie, Cochrane, and Okotoks lead new unit growth. Alberta's franchise disclosure regime adds modest friction but is well-understood by local counsel.",
  "montreal": "Montreal's franchise market requires bilingual (English/French) operations and Quebec-specific charter-of-the-French-language compliance, which screens out franchisors not prepared to localize. Greater Montreal franchise growth is strongest in the West Island, North Shore, and South Shore suburbs.",
};

// ============================================================
// Deterministic variation for the long tail.
// We pick one of N angle templates based on a hash of the city slug
// so two cities in the same state never produce identical paragraphs.
// ============================================================
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function generatedCityNarrative(
  cityName: string,
  state: string | undefined,
  insight: RegionInsight,
  population?: number,
): string {
  const popClause = population
    ? `With roughly ${population.toLocaleString()} residents, ${cityName} `
    : `${cityName} `;
  const top3 = insight.topIndustries.slice(0, 3).join(", ");
  const top45 = insight.topIndustries.slice(3, 6).join(", ") || insight.topIndustries.slice(0, 2).join(", ");
  const stateClause = state ? ` within the broader ${state} market` : "";

  const angles = [
    // Angle 1 — buyer profile lens
    `${popClause}sits in a sub-market where franchise buyer demand consistently skews toward owner-operator and first-generation entrepreneur capital${stateClause}. The concept categories with the cleanest unit economics here are ${top3}, with a secondary tier in ${top45}. Local lead campaigns close faster when investor-capital requirements and territory exclusivity are stated upfront rather than buried in the FDD conversation.`,
    // Angle 2 — competitive density lens
    `${popClause}is a secondary growth corridor${stateClause} where major-metro franchise saturation has not yet caught up. That means emerging and mid-tier franchisors can still secure prime territory here before national rollout pressure arrives. The categories with the strongest lead-to-award conversion are ${top3}; ${top45} typically follow once the first two anchor units open.`,
    // Angle 3 — regulatory lens
    `${popClause}benefits from a workable balance between consumer demand and regulatory drag${stateClause}. ${insight.regulatoryNote} For franchise marketing campaigns targeting ${cityName} specifically, that regulatory baseline shifts what counts as a 'qualified lead' — we pre-screen for capital, operating-model fit, and territory readiness before booking discovery calls.`,
    // Angle 4 — corridor / suburban lens
    `${popClause}functions as a residential and small-business growth ring${stateClause}, where new neighborhood retail nodes typically pull anchor franchise unit awards within 18 months of opening. The categories driving most of that demand are ${top3}, with ${top45} filling secondary plazas. Lead campaigns that geo-target the active growth corridors meaningfully outperform city-wide blanket campaigns.`,
    // Angle 5 — investor-economics lens
    `${popClause}is a market where typical franchise investment falls inside ${insight.investmentRange}. ${insight.demographicHighlight} For franchisors prospecting ${cityName}, those two facts together explain why owner-operator and semi-absentee concepts both find willing buyers — the buyer pool is wide enough to support both operating models simultaneously.`,
    // Angle 6 — growth-trend lens
    `${popClause}is one of the markets where ${insight.growthTrend.toLowerCase()} Combined with steady demand for ${top3}, that puts ${cityName} on most franchisors' second-wave expansion list — which is usually the right time to enter, after major-metro saturation but before territory pricing fully resets.`,
  ];

  const idx = hashSlug(cityName.toLowerCase()) % angles.length;
  return angles[idx];
}

export function getCityNarrative(
  cityName: string,
  citySlug: string,
  state: string | undefined,
  countryCode: string,
  population?: number,
): string {
  const handwritten = cityNarratives[citySlug];
  if (handwritten) return handwritten;
  const stateSlug = state?.toLowerCase().replace(/\s+/g, "-");
  const insight = getRegionInsight(countryCode, stateSlug);
  return generatedCityNarrative(cityName, state, insight, population);
}

// ============================================================
// Service-x-market play: a 1–2 paragraph block describing how
// FranchiseLeadsPro runs the specific service in the specific market.
// Varied deterministically by service+location so the same service
// reads differently across cities.
// ============================================================
export function getServiceMarketPlay(
  service: string,
  location: string,
  state: string | undefined,
  countryCode: string,
): string {
  const stateSlug = state?.toLowerCase().replace(/\s+/g, "-");
  const insight = getRegionInsight(countryCode, stateSlug);
  const svc = service.toLowerCase();
  const where = state ? `${location}, ${state}` : location;
  const cats = insight.topIndustries.slice(0, 3).join(", ");

  const variants = [
    `In ${where}, our ${svc} engagements lead with a market-fit pass first — we pressure-test the franchisor's concept against the categories with the cleanest local economics (${cats}) and the territories that still have unawarded white space. Only after that pass do we open paid channels. That order matters: in ${where}, paid spend deployed against a poorly fit concept produces volume but not awarded units, which is the metric our clients actually pay us for.`,
    `Our ${svc} playbook for ${where} is built around the local investor profile, not generic franchise-buyer creative. ${insight.demographicHighlight} That demographic baseline reshapes targeting layers, creative language, and the qualifying questions on the landing flow. We typically run a discovery sprint of 7–10 days before activating channels so that the campaign launches against the real ${where} buyer, not a synthetic ICP copied from another metro.`,
    `For ${where}, ${svc} works best as a layered system rather than a single channel. We combine intent-led paid search for in-market buyers, LinkedIn outbound for corporate-refugee profiles (a meaningful share of ${where} franchise capital), and SEO-anchored content for the slower 6–12 month research cohort. The mix is rebalanced monthly based on which channel is actually producing awarded units, not just inquiries.`,
    `${insight.regulatoryNote} That regulatory frame directly shapes how we run ${svc} in ${where}: we pre-screen leads for registration-state readiness, operating-model fit, and territory availability before the franchisor ever sees the lead. Franchisors who treat unscreened inquiry volume as a success metric overspend in ${where}; franchisors who treat awarded-unit count as the success metric win.`,
  ];

  const idx = hashSlug(`${svc}-${location.toLowerCase()}`) % variants.length;
  return variants[idx];
}
