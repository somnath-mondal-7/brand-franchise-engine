import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Comprehensive news sources covering franchise industry — franchise-trade press
// PLUS mainstream / business / financial news outlets that regularly cover
// franchise launches, deals, FTC actions, lawsuits, and policy moves.
const FRANCHISE_NEWS_SOURCES = [
  // Franchise-specific trade press
  "https://www.franchising.com/rss/news.xml",
  "https://www.franchisedirect.com/blog/feed/",
  "https://www.entrepreneur.com/topic/franchises/feed",
  "https://www.forbes.com/franchise/feed/",
  "https://www.franchisetimes.com/rss.xml",
  "https://www.1851franchise.com/rss",
  "https://www.franchisewire.com/feed/",
  "https://www.globalfranchise.com/feed",
  "https://www.qsrmagazine.com/rss.xml",
  "https://www.nrn.com/rss.xml", // Nation's Restaurant News
  "https://www.restaurantbusinessonline.com/rss.xml",
  "https://www.franchisechatter.com/feed/",
  "https://thefranchiseking.com/feed",
  // IFA + policy
  "https://www.franchise.org/feed",
  // Mainstream business / financial news (filtered later for "franchise" keyword)
  "https://www.cnbc.com/id/10001147/device/rss/rss.html", // CNBC Business
  "https://feeds.reuters.com/reuters/businessNews",
  "https://feeds.bloomberg.com/markets/news.rss",
  "https://www.wsj.com/xml/rss/3_7014.xml", // WSJ Business
  "https://www.bizjournals.com/rss/feed/industry/22", // Bizjournals Retail/Franchise
  "https://feeds.nbcnews.com/nbcnews/public/business",
  "https://www.cnn.com/business/index.rss",
  "https://feeds.foxbusiness.com/foxbusiness/latest",
  "https://www.usatoday.com/rss/money/",
  "https://moxie.foxbusiness.com/google-publisher/small-business.xml",
  "https://news.google.com/rss/search?q=franchise+USA&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=%22franchise%22+FTC+OR+SBA+OR+IFA&hl=en-US&gl=US&ceid=US:en",
];

// USA-FOCUSED FRANCHISE NEWS, POLICY, LAUNCHES, FACTS
// Strictly news/fact based content — NOT marketing tips. Inspired by what Google
// actually rewards: timely, factual, US-market franchise coverage.
const RESEARCH_TOPICS = [
  {
    category: "us-franchise-news",
    topic: "newly launched franchise brands in the USA this quarter and what they signal about the market",
    stats: "Use only real, verifiable brand launches and openings — never fabricate numbers",
    angle: "what's new on the US franchise map and why it matters",
    hook: "A few new US franchise launches just told us where the market is actually heading."
  },
  {
    category: "us-franchise-policy",
    topic: "FTC Franchise Rule and recent updates affecting US franchisors and franchisees",
    stats: "Reference the actual FTC Franchise Rule (16 CFR Part 436) — describe, don't invent statistics",
    angle: "what the latest FTC posture means in practice",
    hook: "The FTC quietly shifted its franchise enforcement stance — here's what changed."
  },
  {
    category: "us-franchise-policy",
    topic: "state-level franchise registration changes in California, New York, Illinois, Virginia, Maryland and Washington",
    stats: "Cite the named state acts (e.g., California Franchise Investment Law) by name without inventing data",
    angle: "state-by-state regulatory landscape",
    hook: "If you franchise in California or New York, the registration calendar just got harder to ignore."
  },
  {
    category: "us-franchise-policy",
    topic: "joint employer rule, NLRB activity, and how it changes the US franchisor-franchisee relationship",
    stats: "Reference the NLRB and Department of Labor rule timeline factually",
    angle: "labor policy impact on franchise systems",
    hook: "Joint employer keeps coming back. Here's where it actually stands right now."
  },
  {
    category: "us-franchise-news",
    topic: "largest US franchise system openings and closings reported in IFA, Franchise Times, and Entrepreneur",
    stats: "Use only headlines surfaced in the live news feed — never invent unit counts",
    angle: "openings, closings, and acquisitions reshaping US franchising",
    hook: "Three big US franchise systems made moves this month that the trade press underplayed."
  },
  {
    category: "us-franchise-launches",
    topic: "new US franchise concepts in food service, fitness, home services, pet care, and health that filed FDDs recently",
    stats: "Use real concept categories — describe trends, don't fabricate growth rates",
    angle: "emerging US concepts worth watching",
    hook: "A wave of new US franchise concepts is filing FDDs in categories nobody was watching."
  },
  {
    category: "us-franchise-facts",
    topic: "how the US franchise industry is structured today — IFA, FRANdata, and SBA franchise loan data",
    stats: "Reference IFA Economic Outlook, FRANdata, and SBA franchise registry by name only — describe dynamics, don't invent numbers",
    angle: "factual snapshot of the US franchise economy",
    hook: "Most franchisors quote the IFA report without reading it. Here's what it actually says."
  },
  {
    category: "us-franchise-policy",
    topic: "SBA franchise lending changes and the SBA Franchise Directory removal — what it means for buyers",
    stats: "Reference the SBA Franchise Directory sunset factually",
    angle: "lending policy and capital access for US franchisees",
    hook: "The SBA quietly killed its franchise directory. The financing fallout is still rolling."
  },
  {
    category: "us-franchise-news",
    topic: "private equity buying US franchise systems — recent deals, who's rolling up what, and what franchisees should watch",
    stats: "Reference real PE activity in franchising at the category level without fabricating deal sizes",
    angle: "PE roll-ups and what they signal",
    hook: "Private equity is rewriting the US franchise map quarter by quarter."
  },
  {
    category: "us-franchise-launches",
    topic: "international franchise brands expanding into the United States this year and the markets they're targeting",
    stats: "Use only real, named brands and their announced US plans",
    angle: "inbound expansion into US territories",
    hook: "Foreign franchise brands keep planting flags in the US — here's where, and why now."
  },
  {
    category: "us-franchise-facts",
    topic: "FDD Item 19 financial performance representations — what US franchise buyers should actually read",
    stats: "Describe the FDD Item 19 framework factually — never invent average revenues",
    angle: "how to read a real FDD",
    hook: "Most US franchise buyers skim Item 19 and miss the only paragraph that matters."
  },
  {
    category: "us-franchise-news",
    topic: "state attorneys general actions against US franchisors and what franchise buyers should learn from them",
    stats: "Reference publicly reported enforcement actions only",
    angle: "enforcement trends in US franchising",
    hook: "Two state AGs just made it harder to sell a franchise without doing the boring work."
  },
  {
    category: "us-franchise-policy",
    topic: "California AB 676 franchise law and how it changed franchise sales in California",
    stats: "Reference AB 676 factually — describe the rule, don't invent metrics",
    angle: "California-specific franchise compliance",
    hook: "California's AB 676 quietly rewrote the rules for selling a franchise in the state."
  },
  {
    category: "us-franchise-news",
    topic: "US multi-unit franchisee acquisitions, defaults, and refranchising deals reported in the last 90 days",
    stats: "Only describe what live news feeds report — no invented numbers",
    angle: "what large operators are actually doing",
    hook: "Multi-unit operators in the US are quietly resetting their portfolios."
  },
  {
    category: "us-franchise-facts",
    topic: "real cost of opening a franchise in the United States — Item 7 ranges, working capital, and what's usually missing",
    stats: "Describe FDD Item 7 framework — never invent average totals",
    angle: "factual breakdown of US franchise startup costs",
    hook: "The number on the Item 7 page is rarely the number you actually need."
  },
];

async function fetchRSSFeed(url: string): Promise<string[]> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "FranchiseLeadsPro Research Bot/2.0" },
    });
    if (!response.ok) return [];
    
    const xml = await response.text();
    const titles: string[] = [];
    const itemMatches = xml.matchAll(/<item>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>[\s\S]*?<\/item>/gi);
    for (const match of itemMatches) {
      if (match[1]) titles.push(match[1].trim());
    }
    return titles.slice(0, 10);
  } catch (e) {
    console.log(`Failed to fetch ${url}:`, e);
    return [];
  }
}

async function getResearchContext(): Promise<{ context: string; topicData: typeof RESEARCH_TOPICS[0] }> {
  const allHeadlines: string[] = [];
  
  // Fetch real-time news
  const feedPromises = FRANCHISE_NEWS_SOURCES.map(fetchRSSFeed);
  const results = await Promise.all(feedPromises);
  // Only keep headlines that actually mention franchise / FDD / FTC / IFA / SBA / franchisor / franchisee
  // so mainstream feeds (CNBC, Reuters, WSJ, etc.) only contribute on-topic items.
  const FRANCHISE_KEYWORDS = /franchis|fdd|ftc|ifa|sba|franchisor|franchisee|multi-unit|qsr/i;
  results.forEach(headlines => {
    headlines.forEach((h) => {
      if (FRANCHISE_KEYWORDS.test(h)) allHeadlines.push(h);
    });
  });
  
  // Pick a random topic from our combined categories
  const topicData = RESEARCH_TOPICS[Math.floor(Math.random() * RESEARCH_TOPICS.length)];
  
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const context = `
CURRENT DATE: ${currentDate}

LIVE FRANCHISE INDUSTRY NEWS (Reference these for timely relevance):
${allHeadlines.slice(0, 15).map((h, i) => `${i + 1}. ${h}`).join('\n')}

=== TODAY'S CONTENT ASSIGNMENT ===
CATEGORY: ${topicData.category.toUpperCase().replace('-', ' ')}
MAIN TOPIC: ${topicData.topic}
KEY DATA POINT: ${topicData.stats}
CONTENT ANGLE: ${topicData.angle}
OPENING HOOK: ${topicData.hook}

Write a blog post that combines current industry news with the assigned topic.
Make it feel like breaking insights that readers can't get anywhere else.
  `.trim();

  return { context, topicData };
}

// Breaking-news mode: scan RSS for the freshest USA franchise headline that
// hasn't already been covered in our last 20 posts. Returns null if nothing fresh.
async function getBreakingNewsContext(supabase: any): Promise<
  { context: string; topicData: typeof RESEARCH_TOPICS[0] } | null
> {
  const feedPromises = FRANCHISE_NEWS_SOURCES.map(fetchRSSFeed);
  const results = await Promise.all(feedPromises);
  const FRANCHISE_KEYWORDS = /franchis|fdd|ftc|ifa|sba|franchisor|franchisee|multi-unit|qsr/i;
  const headlines = results.flat().filter((h) => h && FRANCHISE_KEYWORDS.test(h));
  if (headlines.length === 0) return null;

  const { data: recent } = await supabase
    .from("blog_posts")
    .select("title")
    .order("created_at", { ascending: false })
    .limit(20);
  const recentTitles = (recent || []).map((r: any) => (r.title || "").toLowerCase());

  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  const isCovered = (h: string) => {
    const n = normalize(h);
    if (n.length < 12) return true;
    const words = n.split(/\s+/).filter((w) => w.length > 4).slice(0, 4);
    if (words.length < 2) return true;
    return recentTitles.some((t: string) => words.every((w) => t.includes(w)));
  };

  // Prefer USA-focused, franchise-focused headlines
  const usaTerms = ["us ", "u.s.", "usa", "america", "ftc", "sba", "nlrb", "california", "texas", "florida", "new york", "ifa", "franchise"];
  const ranked = headlines.filter((h) => {
    const l = h.toLowerCase();
    return usaTerms.some((t) => l.includes(t));
  });

  const candidate = (ranked.length ? ranked : headlines).find((h) => !isCovered(h));
  if (!candidate) {
    console.log("📰 Breaking-news: nothing fresh to cover.");
    return null;
  }

  console.log(`📰 Breaking-news pick: ${candidate}`);

  const topicData: typeof RESEARCH_TOPICS[0] = {
    category: "us-franchise-news",
    topic: `breaking US franchise industry news: "${candidate}"`,
    stats: "Reference real, named sources from the headline — never fabricate numbers",
    angle: "fresh news angle — what just happened in the US franchise space and why it matters today",
    hook: `Breaking: ${candidate}`,
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const context = `
CURRENT DATE: ${currentDate}
MODE: BREAKING NEWS

LEAD HEADLINE TO COVER FIRST:
${candidate}

OTHER LIVE FRANCHISE HEADLINES (context only):
${headlines.slice(0, 12).map((h, i) => `${i + 1}. ${h}`).join("\n")}

=== TODAY'S CONTENT ASSIGNMENT (BREAKING) ===
CATEGORY: US FRANCHISE NEWS
MAIN TOPIC: ${topicData.topic}
KEY DATA POINT: ${topicData.stats}
CONTENT ANGLE: ${topicData.angle}
OPENING HOOK: ${topicData.hook}

Write a US franchise news piece that leads with this headline as the news peg.
  `.trim();

  return { context, topicData };
}

// ============================================================
// IMAGE GENERATION + UPLOAD HELPERS
// ============================================================

// Generate image using the current Lovable AI Gateway image endpoint.
async function generateImageBase64(prompt: string): Promise<string | null> {
  const enhancedPrompt = `Create a premium editorial image for a franchise industry news article: ${prompt}. Photorealistic business journalism style, modern US commercial setting, natural light, credible newsroom/documentary feel, no brand logos, no readable text, no typography, no watermarks, no charts, no UI screens, no distorted hands or faces. The image should feel specific to franchising, business ownership, policy, retail expansion, or investor diligence.`;

  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  if (!lovableKey) {
    console.warn("LOVABLE_API_KEY missing — using fallback editorial SVG");
    return createFallbackImageDataUrl(prompt);
  }

  async function tryGatewayImage(body: Record<string, unknown>, label: string): Promise<string | null> {
    try {
      console.log(`🎨 Trying ${label}...`);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 75_000);
      const res = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify(body),
      });
      clearTimeout(timer);
      if (!res.ok) {
        const errText = await res.text();
        console.error(`${label} failed (${res.status}):`, errText.slice(0, 300));
        return null;
      }
      const data = await res.json();
      const b64 = data?.data?.[0]?.b64_json;
      if (b64 && typeof b64 === "string") {
        console.log(`✅ ${label} image ok`);
        return `data:image/png;base64,${b64}`;
      }
      console.warn(`${label} returned no image data`);
      return null;
    } catch (e) {
      console.error(`${label} error:`, (e as Error).message);
      return null;
    }
  }

  // OpenAI is the default/reliable image route. Gemini is kept as fallback.
  let result = await tryGatewayImage(
    {
      model: "openai/gpt-image-2",
      prompt: enhancedPrompt,
      quality: "low",
      size: "1024x1024",
      n: 1,
      stream: false,
    },
    "OpenAI GPT Image 2",
  );
  if (result) return result;

  result = await tryGatewayImage(
    {
      model: "openai/gpt-image-1-mini",
      prompt: enhancedPrompt,
      quality: "low",
      size: "1024x1024",
      n: 1,
      stream: false,
    },
    "OpenAI GPT Image mini fallback",
  );
  if (result) return result;

  result = await tryGatewayImage(
    {
      model: "google/gemini-3.1-flash-image",
      messages: [{ role: "user", content: enhancedPrompt }],
      modalities: ["image", "text"],
      stream: false,
    },
    "Gemini 3.1 Flash Image",
  );
  if (result) return result;

  result = await tryGatewayImage(
    {
      model: "google/gemini-2.5-flash-image",
      messages: [{ role: "user", content: enhancedPrompt }],
      modalities: ["image", "text"],
      stream: false,
    },
    "Gemini 2.5 Flash Image",
  );
  if (result) return result;

  // External fallback, then a local SVG fallback so posts never publish blank.
  console.log("🎨 Falling back to Pollinations...");
  const pollPrompt = `${enhancedPrompt}, 8k`;
  const negativePrompt = "text, letters, words, typography, watermark, logo, signature, caption, subtitle, ui, interface, low quality, blurry, distorted, deformed face, disfigured, bad anatomy, extra limbs, mutated hands, ugly, poorly drawn face";
  const seed = Math.floor(Math.random() * 1_000_000);
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(pollPrompt)}?width=1280&height=720&seed=${seed}&nologo=true&model=flux&enhance=true&negative=${encodeURIComponent(negativePrompt)}`;

  const MAX_ATTEMPTS = 3;
  const TIMEOUT_MS = 60_000;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) {
        const backoff = res.status === 429 ? 8000 * attempt : 2000 * attempt;
        await new Promise((r) => setTimeout(r, backoff));
        continue;
      }
      const buf = new Uint8Array(await res.arrayBuffer());
      if (buf.byteLength < 1000) continue;
      let binary = "";
      const CHUNK = 0x8000;
      for (let i = 0; i < buf.length; i += CHUNK) {
        binary += String.fromCharCode.apply(null, buf.subarray(i, i + CHUNK) as unknown as number[]);
      }
      const b64 = btoa(binary);
      console.log(`✅ Pollinations fallback ok (attempt ${attempt}, ${buf.byteLength} bytes)`);
      return `data:image/jpeg;base64,${b64}`;
    } catch (e) {
      clearTimeout(timer);
      console.error(`Pollinations attempt ${attempt} error:`, (e as Error).message);
    }
  }
  console.error("All AI image attempts exhausted — using fallback editorial SVG");
  return createFallbackImageDataUrl(prompt);
}

function createFallbackImageDataUrl(seedText: string): string {
  let hash = 0;
  for (let i = 0; i < seedText.length; i++) hash = (hash * 31 + seedText.charCodeAt(i)) >>> 0;
  const accent = ["#F15A29", "#0F766E", "#1D4ED8", "#7C2D12"][hash % 4];
  const accent2 = ["#111827", "#164E63", "#365314", "#7F1D1D"][(hash >> 3) % 4];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1536" height="1024" viewBox="0 0 1536 1024"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fafafa"/><stop offset="1" stop-color="#e5e7eb"/></linearGradient><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}"/><stop offset="1" stop-color="${accent2}"/></linearGradient></defs><rect width="1536" height="1024" fill="url(#g)"/><rect x="104" y="136" width="1328" height="752" rx="28" fill="#fff"/><rect x="104" y="136" width="1328" height="210" rx="28" fill="url(#a)"/><rect x="188" y="438" width="430" height="282" rx="18" fill="#111827" opacity=".08"/><rect x="674" y="438" width="674" height="54" rx="12" fill="#111827" opacity=".12"/><rect x="674" y="528" width="560" height="38" rx="10" fill="#111827" opacity=".09"/><rect x="674" y="594" width="626" height="38" rx="10" fill="#111827" opacity=".09"/><rect x="674" y="660" width="472" height="38" rx="10" fill="#111827" opacity=".09"/><circle cx="408" cy="584" r="96" fill="url(#a)" opacity=".9"/><path d="M272 726c66-82 139-123 218-123 88 0 156 41 204 123" fill="none" stroke="#fff" stroke-width="28" stroke-linecap="round" opacity=".86"/><path d="M230 302h1076" stroke="#fff" stroke-width="18" stroke-linecap="round" opacity=".42"/><path d="M230 254h732" stroke="#fff" stroke-width="28" stroke-linecap="round" opacity=".78"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function dataUrlToBytes(dataUrl: string): { bytes: Uint8Array; contentType: string } {
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) throw new Error("Invalid data URL");
  const contentType = match[1];
  const b64 = match[2];
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return { bytes, contentType };
}

async function uploadImageToStorage(
  supabase: any,
  dataUrl: string,
  fileName: string,
): Promise<string | null> {
  try {
    const { bytes, contentType } = dataUrlToBytes(dataUrl);
    const ext = contentType.includes("svg") ? "svg" : contentType.split("/")[1] || "png";
    const path = `auto/${fileName}.${ext}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(path, bytes, { contentType, upsert: true });

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    return data.publicUrl;
  } catch (e) {
    console.error("Upload exception:", e);
    return null;
  }
}

// ============================================================
// IMAGE REUSE / ROTATION
// Reuse existing blog cover images across new posts instead of generating
// new ones. Rotates so the same image isn't repeated back-to-back.
// ============================================================
async function pickRotatingExistingImage(
  supabase: any,
  excludeUrls: string[] = [],
): Promise<string | null> {
  try {
    const { data: pool, error: poolErr } = await supabase
      .from("blog_posts")
      .select("featured_image_url,created_at")
      .not("featured_image_url", "is", null)
      .order("created_at", { ascending: false })
      .limit(200);
    if (poolErr) {
      console.error("Image pool lookup failed:", poolErr.message);
      return null;
    }
    const valid = (pool || [])
      .map((p: any) => String(p.featured_image_url || "").trim())
      .filter((u: string) => u && /^https?:\/\//i.test(u));
    if (valid.length === 0) return null;

    const distinct = Array.from(new Set(valid));

    // Avoid the most recently used images (last 10) so we rotate.
    const recent = new Set([...valid.slice(0, 10), ...excludeUrls]);
    let candidates = distinct.filter((u) => !recent.has(u));
    if (candidates.length === 0) candidates = distinct;

    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    console.log(`♻️ Reusing existing image (${candidates.length} candidates).`);
    return pick;
  } catch (e) {
    console.error("pickRotatingExistingImage error:", (e as Error).message);
    return null;
  }
}

async function backfillMissingBlogImages(supabase: any, limit = 8) {
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id,title,slug,excerpt,featured_image_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .limit(Math.max(1, Math.min(20, limit)));

  if (error) throw new Error(`Backfill lookup failed: ${error.message}`);

  const missing = (posts || []).filter((p: any) => {
    const url = String(p.featured_image_url || "").trim();
    return !url || url.startsWith("/src/");
  });
  console.log(`🎨 Backfill found ${missing.length} posts without images`);

  const updated: Array<{ id: string; slug: string; imageUrl: string }> = [];
  const usedThisRun: string[] = [];
  for (const post of missing) {
    try {
      const imageUrl = await pickRotatingExistingImage(supabase, usedThisRun);
      if (!imageUrl) {
        console.warn(`No reusable image available for ${post.slug}`);
        continue;
      }
      const { error: updateError } = await supabase
        .from("blog_posts")
        .update({ featured_image_url: imageUrl })
        .eq("id", post.id);
      if (updateError) {
        console.error(`Backfill update failed for ${post.slug}:`, updateError.message);
        continue;
      }
      usedThisRun.push(imageUrl);
      updated.push({ id: post.id, slug: post.slug, imageUrl });
      console.log(`♻️ Reused image for ${post.slug}`);
    } catch (e) {
      console.error(`Backfill reuse failed for ${post.slug}:`, (e as Error).message);
    }
  }

  return { checked: posts?.length || 0, missing: missing.length, updated };
}

function slugifyHeading(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

// Strip a leading H1 / duplicate title from the model's content (we render the title separately)
function stripDuplicateTitle(content: string, title: string): string {
  let c = content.trimStart();
  // Remove leading "# Title" or "## Title"
  c = c.replace(/^#{1,3}\s+.+\n+/, "");
  // Remove a first line that's literally the title
  const firstLine = c.split("\n")[0]?.replace(/[*_#`>\s]+/g, " ").trim().toLowerCase();
  const t = title.replace(/[*_#`>\s]+/g, " ").trim().toLowerCase();
  if (firstLine && t && (firstLine === t || firstLine.startsWith(t))) {
    c = c.split("\n").slice(1).join("\n").trimStart();
  }
  // Remove generic intro fluff lines
  const fluffPatterns = [
    /^in this (article|post|blog).*\n/i,
    /^today,?\s+(we|i)('| wi)?ll.*\n/i,
    /^let'?s (dive|jump|get).*\n/i,
  ];
  for (const re of fluffPatterns) c = c.replace(re, "");
  return c.trimStart();
}

// Insert inline images after specific H2 headings (skipping FAQ section)
function injectInlineImages(content: string, imageUrls: string[]): string {
  if (imageUrls.length === 0) return content;

  const lines = content.split("\n");
  const h2Indices: number[] = [];
  lines.forEach((line, i) => {
    if (/^##\s+/.test(line) && !/faq|frequently asked/i.test(line)) {
      h2Indices.push(i);
    }
  });

  // Insert images after the 2nd and 4th content H2 headings
  const insertAfter: number[] = [];
  if (h2Indices[1] !== undefined) insertAfter.push(h2Indices[1]);
  if (h2Indices[3] !== undefined) insertAfter.push(h2Indices[3]);

  let imgIdx = 0;
  const result: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);
    if (insertAfter.includes(i) && imgIdx < imageUrls.length) {
      result.push("");
      result.push(`![Visual illustration](${imageUrls[imgIdx]})`);
      result.push("");
      imgIdx++;
    }
  }

  return result.join("\n");
}

// Append an internal-linking section pointing to other useful pages on the site
function buildInternalLinksSection(): string {
  return `

## Want To Dig Deeper?

If this got you thinking, here are a few more spots on the site that might help:

- [Read more posts on the FranchiseLeadsPro blog](/blog) — fresh stuff on franchise growth weekly.
- [See our franchise lead generation services](/services) — what we actually do for franchise brands.
- [Buy qualified franchise leads](/buy-franchise-leads) — if you'd rather skip the DIY grind.
- [Look at real client case studies](/case-studies) — the wins, the numbers, the stories.
- [Get in touch directly](/contact) — happy to chat, no pitch deck required.
`;
}

// Ensure a FAQ section exists. If the model skipped it, generate a topical fallback.
async function ensureFaqSection(content: string, topic: string): Promise<string> {
  if (/^##\s+(\d+\.\s+)?(faq|frequently asked)/im.test(content)) {
    return content;
  }
  console.log("⚠️  FAQ section missing — generating fallback");

  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  if (!GEMINI_API_KEY) return content;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: "You write factual US franchise FAQs as a trade-journal reporter. Plain English, contractions OK, no hype, no fabricated statistics." }] },
          contents: [{
            role: "user",
            parts: [{ text: `Generate a markdown FAQ section for a US franchise news article about: "${topic}".

Return EXACTLY this format (5 questions, no preamble, no closing):

## 5. FAQ

### Question one ending in a question mark?
Factual 2-3 sentence answer. Reference real US franchise sources where natural (FTC, IFA, SBA, FRANdata, state regulators). Never fabricate numbers.

### Question two ending in a question mark?
Factual 2-3 sentence answer.

### Question three ending in a question mark?
Factual 2-3 sentence answer.

### Question four ending in a question mark?
Factual 2-3 sentence answer.

### Question five ending in a question mark?
Factual 2-3 sentence answer.` }],
          }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1500 },
        }),
      }
    );
    if (!res.ok) return content;
    const data = await res.json();
    const faq = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!faq || !/^##\s+(\d+\.\s+)?FAQ/im.test(faq)) return content;
    return content.trimEnd() + "\n\n" + faq + "\n";
  } catch (e) {
    console.error("FAQ fallback failed:", e);
    return content;
  }
}


async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[]; coverImagePrompt?: string; inlineImagePrompts?: string[] }> {
  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY not configured");

  const systemPrompt = `You are a US franchise industry reporter writing for FranchiseLeadsPro. You cover what's actually happening in the United States franchise space — new brand launches, FTC and state regulatory shifts, SBA lending changes, private-equity activity, multi-unit operator moves, FDD facts, and enforcement actions. This is news and fact reporting, NOT marketing advice. No tips, no "how to do marketing better."

You write like a sharp trade-journal reporter who actually reads FDDs and follows the IFA, FRANdata, Franchise Times, Entrepreneur Franchise 500, and state regulator filings.

=== THE VOICE ===
- Reporter-grade. Calm, factual, opinionated only where the facts justify it.
- Plain English. Contractions OK. No hype, no exclamation marks, no emojis.
- Specific over general. Name the brand, the state, the agency, the rule.
- Quiet authority — "here's what changed" not "MIND-BLOWING update."
- US-market focused. Default reader is a US franchisor, franchisee, broker, or buyer.

=== STRUCTURE — MATCH THIS EXACTLY (hoopdesk-style numbered sections) ===
DO NOT include the title or any H1 at the top of the content — the title renders separately.
DO NOT start with "in this post" / "today we'll cover" / "let's dive in." Start straight with the lede.

Target length: **1,100 to 1,500 words.** 5-6 minute read.

Section blueprint — follow precisely:

1. **Opening lede** (no heading, ~150 words). 2-3 short paragraphs setting up the news/fact. What happened, where, who it affects.

2. **## 1. Background — what changed and when** (~220 words). The factual setup. Dates, agencies, brands, real names. No invented statistics.

3. **## 2. Why it matters for US franchisors and franchisees** (~250 words). Concrete impact. Who feels it first, who feels it later.

4. **## 3. The numbers and named sources** (~220 words). Reference real sources by name (FTC 16 CFR Part 436, IFA Economic Outlook, FRANdata, SBA Franchise Directory, state Franchise Investment Laws). Describe dynamics — never fabricate percentages or dollar figures.

5. **## 4. What franchise buyers and operators should watch next** (~220 words). 3-5 specific things to track in the coming weeks/months. Use a short bullet list if it genuinely helps.

6. **## 5. FAQ** (~250 words). Exactly 5 questions with ### headings, each ending in "?". Each answer 2-3 grounded factual sentences.

7. **## Conclusion** (~120 words). Two short paragraphs that summarize the factual takeaway. One quiet line about how FranchiseLeadsPro helps US franchise brands and brokers reach qualified buyers — only if it lands naturally. End on a single line that reframes the news.

=== INTERNAL LINKING ===
Weave at most 2 of these into actual sentences where they truly fit:
- [franchise lead generation services](/services)
- [buy qualified franchise leads](/buy-franchise-leads)
- [client case studies](/case-studies)
- [contact us](/contact)
Skip them if nothing fits.

=== FORMATTING ===
- ## for the five numbered sections and Conclusion. ### only inside FAQ.
- Paragraphs of 1-3 sentences.
- **Bold** sparingly — once or twice per section.
- One short blockquote (>) if a quote or rule excerpt earns it.
- Bullet lists only for 3+ parallel items.
- Real, verifiable references only. NEVER invent statistics, dollar figures, percentages, or unit counts. If you don't have a real number, describe the dynamic.
- Em dashes: max 3 in the entire post.

=== ABSOLUTELY FORBIDDEN ===
- Marketing tips, "how to generate more leads," "5 ways to grow," "ultimate guide"
- Repeating the title at the top
- Any emoji
- "In today's competitive market" / "ever-evolving" / "leverage" / "synergy" / "robust" / "cutting-edge" / "game-changer" / "unlock" / "supercharge"
- Made-up statistics ("studies show 87%") — describe the dynamic instead
- Hard sells, urgency lines, exclamation marks (max 1 in the whole post)

=== IMAGE PROMPTS ===
- coverImagePrompt: A quiet editorial photograph (16:9) suited to a US franchise news piece. 1-2 vivid sentences.
- inlineImagePrompts: 2 supporting images in the same restrained, factual tone.`;

  const userPrompt = `Write a US franchise ${topicData.category.replace('us-franchise-', '')} news piece based on this research:

${researchContext}

REQUIREMENTS (your draft will be rejected if these are missing):
- This is a NEWS / FACT piece — not a marketing-tips post. Reference real US franchise industry sources (FTC, NLRB, SBA, IFA, FRANdata, state regulators, Franchise Times, Entrepreneur Franchise 500) by name.
- Length: **1,100-1,500 words.**
- US-only focus. Default reader is a US franchisor, franchisee, broker, or buyer.
- Follow the numbered hoopdesk-style structure EXACTLY: opening lede, then "## 1. Background", "## 2. Why it matters", "## 3. The numbers and named sources", "## 4. What to watch next", "## 5. FAQ", "## Conclusion".
- Adapt the hook into your own words — never paste verbatim: "${topicData.hook}"
- Hold this angle throughout: "${topicData.angle}"
- DO NOT put the title at the top of the content.
- At most 2 internal links woven naturally into sentences. Skip if they don't fit.
- MANDATORY: "## 5. FAQ" with EXACTLY 5 ### questions ending in "?".
- MANDATORY: "## Conclusion" final section.
- NEVER fabricate statistics, dollar amounts, percentages, or unit counts. Describe the dynamic instead.

Write like a trade-journal reporter, not a content marketer.`;

  // Try preferred model first, then fallback to lite if rate-limit/quota errors hit
  const modelChain = ["gemini-2.5-flash", "gemini-2.5-flash-lite"];
  let lastError = "";

  // Gemini structured output via responseSchema
  const responseSchema = {
    type: "object",
    properties: {
      title: { type: "string", description: "Casual, friendly title under 70 chars" },
      excerpt: { type: "string", description: "1 sentence hook, max 160 chars" },
      content: { type: "string", description: "Full markdown body, 1,100-1,500 words in a premium founder voice. MUST NOT include the title or any H1. Start directly with the opening paragraph. Must include a ## FAQ section with exactly 5 ### questions and a ## Closing thought section." },
      slug: { type: "string", description: "SEO-friendly URL slug, lowercase, dashes only" },
      tags: { type: "array", items: { type: "string" }, description: "5 relevant tags" },
      coverImagePrompt: { type: "string", description: "Vivid 1-2 sentence description for the cover image" },
      inlineImagePrompts: { type: "array", items: { type: "string" }, description: "Exactly 2 vivid descriptions for inline images" },
    },
    required: ["title", "excerpt", "content", "slug", "tags", "coverImagePrompt", "inlineImagePrompts"],
  };

  for (const model of modelChain) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 24000,
            responseMimeType: "application/json",
            responseSchema,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      lastError = `${response.status} - ${errorText}`;
      console.error(`Model ${model} failed: ${lastError}`);
      // 429 = rate limit / quota -> try fallback model
      if (response.status === 429 || response.status === 503) continue;
      throw new Error(`Gemini generation failed: ${lastError}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error(`Model ${model} returned no text:`, JSON.stringify(data).slice(0, 500));
      lastError = "Gemini did not return content";
      continue;
    }

    try {
      const parsed = JSON.parse(text);
      console.log(`✅ Generated with Gemini model: ${model}`);
      return parsed;
    } catch (e) {
      console.error("JSON parse error:", e, text?.slice(0, 500));
      lastError = "Failed to parse Gemini JSON output";
      continue;
    }
  }

  throw new Error(`Gemini generation failed across all models. Last error: ${lastError}. If this is a 429 quota error, you've hit the free-tier daily limit (1500 req/day on flash, 1500 on flash-lite) — wait until midnight Pacific or upgrade your Google AI key.`);
}

async function getLastPostTime(supabase: any): Promise<Date | null> {
  const { data: lastPost } = await supabase
    .from('blog_posts')
    .select('created_at')
    .eq('author_name', 'FranchiseLeadsPro Research Team')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  return lastPost ? new Date(lastPost.created_at) : null;
}

async function shouldPublish(supabase: any, intervalHours: number): Promise<boolean> {
  const lastPostTime = await getLastPostTime(supabase);
  if (!lastPostTime) return true;

  const now = new Date();
  const hoursDiff = (now.getTime() - lastPostTime.getTime()) / (1000 * 60 * 60);
  
  return hoursDiff >= intervalHours;
}

// Count auto-generated posts published in the current UTC day.
async function getTodayPostCount(supabase: any): Promise<number> {
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  const { count } = await supabase
    .from('blog_posts')
    .select('id', { count: 'exact', head: true })
    .eq('author_name', 'FranchiseLeadsPro Research Team')
    .gte('created_at', start.toISOString());
  return count || 0;
}

// Heavy generation pipeline — extracted so it can run in background via EdgeRuntime.waitUntil
async function runGenerationPipeline(
  supabase: any,
  publishAsDraft: boolean,
  mode: "scheduled" | "breaking" = "scheduled",
) {
  let researchContext: string;
  let topicData: typeof RESEARCH_TOPICS[0];

  if (mode === "breaking") {
    console.log("📰 Breaking-news mode — scanning RSS for fresh USA franchise stories...");
    const breaking = await getBreakingNewsContext(supabase);
    if (!breaking) {
      console.log("📰 No fresh breaking news — skipping this run.");
      return { skipped: true } as any;
    }
    researchContext = breaking.context;
    topicData = breaking.topicData;
  } else {
    console.log("Researching current franchise news and trends...");
    const ctx = await getResearchContext();
    researchContext = ctx.context;
    topicData = ctx.topicData;
  }
  console.log(`Topic selected: [${topicData.category}] ${topicData.topic}`);

  console.log("Generating human-centric blog content...");
  const blogPost = await generateBlogWithAI(researchContext, topicData);
  console.log(`Generated: "${blogPost.title}"`);

  // ---- Images disabled per user request: text-only blog posts ----
  const coverUrl: string | null = null;
  const inlineUrls: string[] = [];

  let finalContent = stripDuplicateTitle(blogPost.content, blogPost.title);
  finalContent = await ensureFaqSection(finalContent, blogPost.title);

  finalContent = finalContent.trimEnd() + "\n" + buildInternalLinksSection();

  const wordCount = finalContent.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  let finalSlug = blogPost.slug;
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', finalSlug)
    .maybeSingle();
  if (existing) {
    finalSlug = `${blogPost.slug}-${Date.now().toString(36).slice(-5)}`;
  }

  const { data: savedPost, error: saveError } = await supabase
    .from('blog_posts')
    .insert({
      title: blogPost.title,
      slug: finalSlug,
      content: finalContent,
      excerpt: blogPost.excerpt,
      author_name: 'FranchiseLeadsPro Research Team',
      tags: blogPost.tags,
      is_published: !publishAsDraft,
      published_at: publishAsDraft ? null : new Date().toISOString(),
      read_time_minutes: readTime,
      seo_title: blogPost.title,
      seo_description: blogPost.excerpt,
      featured_image_url: coverUrl,
    })
    .select()
    .single();

  if (saveError) {
    throw new Error(`Database save failed: ${saveError.message}`);
  }

  console.log(`✅ Saved: ${savedPost.id} (${wordCount} words, ${readTime} min read)`);

  if (!publishAsDraft) {
    try {
      const postUrl = `https://www.franchiseleadspro.com/blog/${finalSlug}`;
      const sitemapUrls = [
        'https://www.franchiseleadspro.com/sitemap.xml',
        'https://www.franchiseleadspro.com/sitemap-blog.xml',
      ];
      const pingRequests: Promise<Response>[] = [];
      for (const sm of sitemapUrls) {
        pingRequests.push(fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sm)}`));
        pingRequests.push(fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sm)}`));
      }
      const indexNowKey = '8c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f';
      pingRequests.push(
        fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            host: 'www.franchiseleadspro.com',
            key: indexNowKey,
            keyLocation: `https://www.franchiseleadspro.com/${indexNowKey}.txt`,
            urlList: [postUrl, 'https://www.franchiseleadspro.com/blog'],
          }),
        })
      );
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      pingRequests.push(
        fetch(`${supabaseUrl}/functions/v1/google-indexing`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${supabaseKey}` },
          body: JSON.stringify({ urls: [postUrl, 'https://www.franchiseleadspro.com/blog'] }),
        })
      );
      pingRequests.push(fetch(postUrl, { method: 'GET' }));
      const results = await Promise.allSettled(pingRequests);
      const ok = results.filter(r => r.status === 'fulfilled').length;
      console.log(`🔔 Search engine ping: ${ok}/${results.length} successful`);
    } catch (pingErr) {
      console.error('Ping failed (non-fatal):', pingErr);
    }
  }

  return { savedPost, wordCount, readTime, topicData };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json().catch(() => ({}));
    if (body.operation === "generate-image") {
      console.log("♻️ Manual image request — reusing existing image from pool");
      const imageUrl = await pickRotatingExistingImage(supabase, []);
      if (!imageUrl) {
        throw new Error("No existing images available to reuse yet. Add at least one image to a blog post first.");
      }
      return new Response(
        JSON.stringify({ success: true, imageUrl, reused: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (body.operation === "backfill-missing-images") {
      const limit = Number(body.limit || 8);
      const backgroundBackfill = body.background !== false;
      if (backgroundBackfill) {
        // @ts-ignore — EdgeRuntime is provided by Supabase Edge Runtime
        EdgeRuntime.waitUntil(
          backfillMissingBlogImages(supabase, limit).then((result) => {
            console.log("🎨 Backfill complete:", JSON.stringify(result));
          }).catch((e) => {
            console.error("Backfill background error:", e);
          })
        );
        return new Response(
          JSON.stringify({ success: true, message: "Missing blog image backfill started.", background: true, limit }),
          { status: 202, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const result = await backfillMissingBlogImages(supabase, limit);
      return new Response(
        JSON.stringify({ success: true, ...result }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const {
      force = false,
      intervalHours = 24,
      publishAsDraft = false,
      background = true, // run in background by default to avoid HTTP timeouts
      mode = "scheduled", // "scheduled" | "breaking"
    } = body;

    console.log(`Auto-blog v3: mode=${mode}, force=${force}, interval=${intervalHours}h, draft=${publishAsDraft}, bg=${background}`);

    // Hard daily cap: max 1 scheduled post + 1 breaking post per UTC day.
    // Manual UI runs can bypass with bypassDailyCap=true.
    const bypassDailyCap = body.bypassDailyCap === true;
    if (!bypassDailyCap) {
      const todayCount = await getTodayPostCount(supabase);
      const dailyLimit = mode === "breaking" ? 2 : 1;
      if (todayCount >= dailyLimit) {
        console.log(`⛔ Daily cap reached (${todayCount}/${dailyLimit}) for mode=${mode} — skipping.`);
        return new Response(
          JSON.stringify({
            success: false,
            skipped: true,
            message: `Daily cap reached (${todayCount} post${todayCount === 1 ? '' : 's'} today). Only 1 scheduled + 1 breaking allowed per day.`,
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Skip interval gate for breaking-news runs (the function itself decides if anything fresh exists)
    if (!force && mode !== "breaking") {
      const canPublish = await shouldPublish(supabase, intervalHours);
      if (!canPublish) {
        const lastPost = await getLastPostTime(supabase);
        const nextTime = lastPost ? new Date(lastPost.getTime() + intervalHours * 60 * 60 * 1000) : new Date();
        return new Response(
          JSON.stringify({
            success: false,
            message: `Next post in ${Math.ceil((nextTime.getTime() - Date.now()) / (1000 * 60 * 60))} hours. Use force=true to override.`,
            nextScheduled: nextTime.toISOString(),
            intervalHours,
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Run pipeline in background so HTTP idle-timeout (150s) can't kill the DB save
    if (background) {
      // @ts-ignore — EdgeRuntime is provided by Supabase Edge Runtime
      EdgeRuntime.waitUntil(
        runGenerationPipeline(supabase, publishAsDraft, mode as "scheduled" | "breaking").catch((e) => {
          console.error("Background pipeline error:", e);
        })
      );
      return new Response(
        JSON.stringify({
          success: true,
          message: `Blog generation started in background (${mode}). New post will appear in ~60-90 seconds if fresh content is found.`,
          mode,
          background: true,
        }),
        { status: 202, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Synchronous path (rare — only when caller explicitly opts in)
    const result: any = await runGenerationPipeline(supabase, publishAsDraft, mode as "scheduled" | "breaking");
    if (result?.skipped) {
      return new Response(
        JSON.stringify({ success: true, skipped: true, message: "No fresh breaking news to cover." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const { savedPost, wordCount, readTime, topicData } = result;

    return new Response(
      JSON.stringify({
        success: true,
        message: publishAsDraft ? "Draft saved!" : "Blog published!",
        post: {
          id: savedPost.id,
          title: savedPost.title,
          slug: savedPost.slug,
          wordCount,
          readTime,
          isDraft: publishAsDraft,
        },
        category: topicData.category,
        topic: topicData.topic,
        intervalHours,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Auto-blog error:", error);
    return new Response(
      JSON.stringify({ success: false, error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
