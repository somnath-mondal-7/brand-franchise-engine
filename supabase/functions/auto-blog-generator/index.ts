import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Comprehensive news sources covering franchise industry
const FRANCHISE_NEWS_SOURCES = [
  "https://www.franchising.com/rss/news.xml",
  "https://www.franchisedirect.com/blog/feed/",
  "https://www.entrepreneur.com/topic/franchises/feed",
  "https://www.forbes.com/franchise/feed/",
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
  results.forEach(headlines => allHeadlines.push(...headlines));
  
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

// ============================================================
// IMAGE GENERATION + UPLOAD HELPERS
// ============================================================

// Generate image using Lovable AI Gateway — Nano Banana Pro (gemini-3-pro-image-preview)
// for highest fidelity faces, with Nano Banana 2 and Pollinations as fallbacks.
async function generateImageBase64(prompt: string): Promise<string | null> {
  const enhancedPrompt = `Ultra-photorealistic editorial photograph, shot on Canon EOS R5 with 85mm f/1.4 lens: ${prompt}. Sharp focus on subjects, anatomically perfect human faces with realistic skin texture, natural pores, lifelike eyes with clear iris detail, accurate facial proportions, symmetrical features, natural expressions, professional studio-quality cinematic lighting, shallow depth of field, vibrant natural colors, 8k ultra-detailed, magazine-quality composition. Faces must be clear, fully visible, in-focus, and identifiable. ABSOLUTELY NO text, letters, typography, words, watermarks, logos, UI elements, charts, deformed faces, distorted features, extra limbs, or blurry faces. Pure photographic imagery only.`;

  const lovableKey = Deno.env.get("LOVABLE_API_KEY");

  // Helper to call Lovable AI Gateway with a given image model
  async function tryLovableModel(model: string, label: string): Promise<string | null> {
    if (!lovableKey) return null;
    try {
      console.log(`🎨 Trying ${label} (${model})...`);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 90_000);
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: enhancedPrompt }],
          modalities: ["image", "text"],
        }),
      });
      clearTimeout(timer);
      if (!res.ok) {
        const errText = await res.text();
        console.error(`${label} failed (${res.status}):`, errText.slice(0, 300));
        return null;
      }
      const data = await res.json();
      const imgUrl = data?.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      if (imgUrl && imgUrl.startsWith("data:image")) {
        console.log(`✅ ${label} image ok`);
        return imgUrl;
      }
      console.warn(`${label} returned no image data`);
      return null;
    } catch (e) {
      console.error(`${label} error:`, (e as Error).message);
      return null;
    }
  }

  // ---- Attempt 1: Nano Banana Pro (highest quality, best faces) ----
  let result = await tryLovableModel("google/gemini-3-pro-image-preview", "Nano Banana Pro");
  if (result) return result;

  // ---- Attempt 2: Nano Banana 2 (fast pro-quality) ----
  result = await tryLovableModel("google/gemini-3.1-flash-image-preview", "Nano Banana 2");
  if (result) return result;

  // ---- Attempt 3: Original Nano Banana ----
  result = await tryLovableModel("google/gemini-2.5-flash-image", "Nano Banana");
  if (result) return result;

  // ---- Attempt 4: Pollinations.ai fallback ----
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
  console.error("All image generation attempts exhausted");
  return null;
}

function dataUrlToBytes(dataUrl: string): { bytes: Uint8Array; contentType: string } {
  const match = dataUrl.match(/^data:(image\/[a-z]+);base64,(.+)$/);
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
    const ext = contentType.split("/")[1] || "png";
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
  if (/^##\s+(faq|frequently asked)/im.test(content)) {
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
          systemInstruction: { parts: [{ text: "You write blog FAQs in a casual, friendly, human voice. Use contractions. Sound like a friend giving advice, not a corporate FAQ." }] },
          contents: [{
            role: "user",
            parts: [{ text: `Generate a markdown FAQ section for a blog post about: "${topic}".

Return EXACTLY this format (5 questions, no preamble, no closing):

## FAQ

### Question one ending in a question mark?
Casual 2-3 sentence answer here. Use contractions and a friendly tone.

### Question two ending in a question mark?
Casual 2-3 sentence answer.

### Question three ending in a question mark?
Casual 2-3 sentence answer.

### Question four ending in a question mark?
Casual 2-3 sentence answer.

### Question five ending in a question mark?
Casual 2-3 sentence answer.` }],
          }],
          generationConfig: { temperature: 0.8, maxOutputTokens: 1500 },
        }),
      }
    );
    if (!res.ok) return content;
    const data = await res.json();
    const faq = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!faq || !/^##\s+FAQ/im.test(faq)) return content;
    return content.trimEnd() + "\n\n" + faq + "\n";
  } catch (e) {
    console.error("FAQ fallback failed:", e);
    return content;
  }
}


async function generateBlogWithAI(researchContext: string, topicData: typeof RESEARCH_TOPICS[0]): Promise<{ title: string; content: string; excerpt: string; slug: string; tags: string[]; coverImagePrompt?: string; inlineImagePrompts?: string[] }> {
  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY not configured");

  const systemPrompt = `You are the founder-voice writer for FranchiseLeadsPro — a premium, US-focused franchise marketing studio. You write like a sharp operator who has done this for a decade and sat down at 11pm after a client call to share what actually matters. Think: a quiet, confident insider memo — not a content-marketing blog post.

=== THE VOICE (NON-NEGOTIABLE) ===
- Calm, premium, opinionated. Like a senior advisor talking to a smart founder over coffee.
- First-person where natural ("I've seen this play out...", "Here's what I'd do instead"). Never use the name "Somnath".
- Confident, never loud. No hype, no exclamation marks, no all-caps, no emojis.
- Contractions: yes (it's, you're, don't, that's). Slang like "gonna/wanna/dude/real talk": no.
- Short sentences. Then a longer one when the idea needs room to breathe.
- Say the thing most people are too polite to say. One honest take per post.
- Specific over general. Name the platform, the situation, the cost.
- Quiet authority. Not "MIND-BLOWING insight" — just "here's what's actually happening."

=== PREMIUM VS GENERIC EXAMPLES ===
GOOD: "Most franchise brands buy leads the way people buy lottery tickets. Hopeful, expensive, and rarely audited."
BAD:  "In today's competitive franchise landscape, lead generation has become more important than ever!"

GOOD: "I'd stop running broad Meta campaigns by next Tuesday. They flatter the dashboard and starve the pipeline."
BAD:  "Leverage cutting-edge Meta strategies to unlock synergistic franchise growth opportunities!"

=== STRUCTURE (TIGHT, NOT LONG) ===
DO NOT include the title or any H1 at the top of the content — the title renders separately.
DO NOT start with "in this post" / "today we'll cover" / "let's dive in." Start in the middle of a thought.

Target length: **1,100 to 1,500 words.** Long enough to say something real, short enough that a busy franchise owner or broker reads it in one sitting (5-6 minutes). Posts over 1,700 words feel bloated. Under 900 feel thin.

Section blueprint (follow it, but make it feel written — not assembled):

1. **Opening** (no heading): 2-3 short paragraphs (~180 words). One sharp observation or a small scene from a recent client conversation. Earn the next scroll.

2. **## The part most people get wrong** (~250 words). The honest take. One contrarian point developed properly — not a list of five mistakes. Pick the most uncomfortable truth and sit with it.

3. **## What actually works** (~300 words). 3-4 specific moves. Name real tools where relevant (HubSpot, GoHighLevel, LinkedIn Sales Navigator, Calendly, Birdeye, Meta Ads, Google Ads). Skip the "comprehensive list" energy — only what you'd genuinely recommend.

4. **## A small example** (~180 words). One short, believable scene — a brand or broker, a city, a before-and-after. No invented statistics, no "we boosted ROI 412%." Keep it grounded.

5. **## If I were you, this week** (~180 words). 3-5 things worth doing in the next 7 days. Each concrete. Each starts with a verb.

6. **## FAQ** (~250 words). Exactly 5 questions with ### headings, each ending in "?". Each answer 2-3 substantive sentences in the same voice. No "Great question!"

7. **## Closing thought** (~120 words). 2 short paragraphs. One quiet line about how we help franchise brands and brokers — only if it lands naturally. End on a single line that reframes the whole piece. Not a call-to-action. A thought.

=== INTERNAL LINKING ===
Weave 2 (max 3) of these into actual sentences where they truly fit. Never stacked, never at the end:
- [franchise lead generation services](/services)
- [buy qualified franchise leads](/buy-franchise-leads)
- [client case studies](/case-studies)
- [contact us](/contact)
Skip them entirely if nothing fits. Forced links cheapen the piece.

=== FORMATTING ===
- ## for sections, ### only inside FAQ.
- Paragraphs of 1-3 sentences. Whitespace is part of the voice.
- Use **bold** sparingly — once or twice per section, only the line you'd underline.
- Use <mark>...</mark> on 1-2 phrases across the whole post — the single most quotable lines.
- One short blockquote (>) somewhere if a line earns it. Not more.
- Bullet lists only when you genuinely have 3+ parallel items. Otherwise write in sentences.
- Real numbers and specifics: yes. Made-up statistics: never. If you don't have a real number, describe the dynamic instead.
- Em dashes: max 3 in the entire post.

=== ABSOLUTELY FORBIDDEN ===
- Repeating the title at the top of the content
- Any emoji, anywhere
- "In today's competitive market" / "In the ever-evolving" / "In the modern landscape"
- "As we all know" / "It goes without saying" / "Needless to say"
- "Furthermore" / "Moreover" / "Additionally" / "In conclusion"
- "Leverage" / "Utilize" / "Synergy" / "Robust" / "Cutting-edge" / "Game-changer" / "Unlock" / "Supercharge" / "Skyrocket"
- Listing benefits in perfectly parallel grammar — it screams AI
- Fake or unverifiable statistics ("studies show 87%...") — describe the dynamic instead
- Hard sells, urgency lines, "don't miss out", "act now"
- Exclamation marks (one is the absolute max for the entire post)
- Trailing-off endings — every paragraph closes cleanly

=== IMAGE PROMPTS ===
- coverImagePrompt: A quiet, premium editorial photograph (16:9). Think Monocle magazine, not stock site. 1-2 vivid sentences.
- inlineImagePrompts: 2 supporting images in the same restrained tone.`;

  const userPrompt = `Write a ${topicData.category.replace('-', ' ')} piece based on this research:

${researchContext}

REQUIREMENTS (your draft will be rejected if these are missing):
- Length: **1,100-1,500 words.** Not longer. A premium reader will close anything that feels padded.
- Voice: founder-style, calm, opinionated, US-market-aware. Speak to franchise brands and brokers as peers, never as students.
- Every section must earn its place. If a sentence doesn't teach, observe, or land — cut it.
- Use real tools/platforms by name where helpful (HubSpot, GoHighLevel, LinkedIn Sales Navigator, Calendly, Birdeye, Meta Ads, Google Ads). Do NOT fabricate statistics.
- Adapt the hook into your own words — never paste it verbatim: "${topicData.hook}"
- The angle to hold throughout: "${topicData.angle}"
- DO NOT put the title at the top of the content. Start straight into the opening paragraph.
- Sprinkle at most 2-3 internal links naturally inside sentences: [services](/services), [buy franchise leads](/buy-franchise-leads), [case studies](/case-studies), [contact](/contact). Skip any that don't fit.
- MANDATORY: a "## FAQ" section near the end with EXACTLY 5 ### questions, each ending in "?". Each answer 2-3 grounded sentences in the same voice.
- Close with a "## Closing thought" section — a quiet, reframing ending. Not a pitch.

Every line should feel like it was written by a real person who has actually done this work. Premium, not corporate. Confident, not loud.`;

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

// Heavy generation pipeline — extracted so it can run in background via EdgeRuntime.waitUntil
async function runGenerationPipeline(supabase: any, publishAsDraft: boolean) {
  console.log("Researching current franchise news and trends...");
  const { context: researchContext, topicData } = await getResearchContext();
  console.log(`Topic selected: [${topicData.category}] ${topicData.topic}`);

  console.log("Generating human-centric blog content...");
  const blogPost = await generateBlogWithAI(researchContext, topicData);
  console.log(`Generated: "${blogPost.title}"`);

  // Image generation disabled — text-only blog posts
  console.log("⏭️  Image generation disabled (text-only mode)");
  const coverUrl: string | null = null;

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
    const {
      force = false,
      intervalHours = 24,
      publishAsDraft = false,
      background = true, // run in background by default to avoid HTTP timeouts
    } = body;

    console.log(`Auto-blog v3: force=${force}, interval=${intervalHours}h, draft=${publishAsDraft}, bg=${background}`);

    if (!force) {
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
        runGenerationPipeline(supabase, publishAsDraft).catch((e) => {
          console.error("Background pipeline error:", e);
        })
      );
      return new Response(
        JSON.stringify({
          success: true,
          message: "Blog generation started in background. New post will appear in ~60-90 seconds.",
          background: true,
        }),
        { status: 202, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Synchronous path (rare — only when caller explicitly opts in)
    const { savedPost, wordCount, readTime, topicData } = await runGenerationPipeline(supabase, publishAsDraft);

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
