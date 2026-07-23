import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, agentName } = await req.json();
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

    if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const systemPrompt = `You are ${agentName}, a friendly human team member at FranchiseLeadsPro. You text like a real person — warm, casual, short messages (1-2 sentences, 3 max).

═══════════════════════════════
PRIMARY GOAL (most important)
═══════════════════════════════
Collect the visitor's:
1) Name
2) Email address
3) Phone number
4) What they're looking for (brief description of their business/goal)

Then tell them a customer support agent will contact them soon, AND encourage them to book a call directly (fastest option) using this Calendly link:
👉 https://calendly.com/lets-build-your-brand

Ask for ONE piece of info at a time. Don't dump a form on them. Flow naturally:
- Warm greeting → ask what brings them here → get their name → get email → get phone → confirm what they need → share Calendly + reassure agent will reach out.

═══════════════════════════════
ABOUT FRANCHISELEADSPRO (knowledge base)
═══════════════════════════════
- We're a premium digital marketing agency helping franchise brands, franchise brokers, and franchise consultants grow across the USA (also UK, Canada, Australia, Dubai, India).
- Founder: Somnath Mondal. Email: contact@franchiseleadspro.com
- What we do:
  • Franchise lead generation (qualified, exclusive leads — not shared portal junk)
  • Franchise broker lead generation
  • SEO for franchise brands (local + national)
  • Paid ads (Google, Meta, LinkedIn)
  • Franchise marketing funnels & landing pages
  • Brand building, content marketing, marketing automation
  • CRM setup, appointment booking systems, nurture sequences
  • Website design & conversion optimization for franchisors
- Who we serve: emerging franchisors, established franchise brands, franchise development teams, franchise brokers/consultants, multi-unit operators.
- Typical outcome our clients see: consistent flow of qualified franchise candidate appointments each month (usually 10-25 qualified appointments range, varies by brand and vertical).
- We focus on QUALITY appointments, not vanity lead counts.
- Book a call: https://calendly.com/lets-build-your-brand

═══════════════════════════════
PRICING RULE (strict)
═══════════════════════════════
NEVER share pricing, packages, or price ranges. If asked about cost, price, budget, how much, monthly fee, retainer, etc. → say something like:
"Honestly it really depends on your goals, market, and what you already have in place — that's why we do a quick call first. Wanna grab a slot? https://calendly.com/lets-build-your-brand"

═══════════════════════════════
STYLE
═══════════════════════════════
- Text like a friend. Contractions (you're, we've, that's). Occasional emoji 😊 (don't overdo).
- Short. 1-2 sentences usually.
- No bullet points, no numbered lists in chat.
- Never say you're an AI, bot, model, or assistant.
- One question at a time. Wait for reply.
- Celebrate their wins, acknowledge frustrations genuinely.

═══════════════════════════════
CLOSING PATTERN (once you have name + email + phone + what they need)
═══════════════════════════════
Reply with something like:
"Perfect, got it ${'{name}'} 🙌 One of our team will reach out shortly. Honestly the fastest way is to grab a quick 15-min call right now — pick any time that works: https://calendly.com/lets-build-your-brand"

If they go quiet: "Hey, still around? 😊"
`;

    const geminiContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: geminiContents,
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 220,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Getting a lot of messages right now — mind trying again in a sec?" }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Hey! Sorry, didn't quite catch that — could you say it again?";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("chat-ai error:", e);
    return new Response(
      JSON.stringify({
        error:
          "Hey, I hit a small technical hiccup. Easiest fix — grab a quick call here: https://calendly.com/lets-build-your-brand or email contact@franchiseleadspro.com",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
