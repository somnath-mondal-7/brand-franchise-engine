import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&#039;");

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { authorName, authorEmail, content, postId, postTitle, postSlug } = await req.json();

    if (!RESEND_API_KEY) {
      console.log("RESEND_API_KEY missing, logging only");
      return new Response(JSON.stringify({ success: true, logged: true }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const safeName = esc(authorName || "Anonymous");
    const safeEmail = esc(authorEmail || "—");
    const safeContent = esc(content || "").replace(/\n/g, "<br>");
    const safeTitle = esc(postTitle || "Blog post");
    const url = postSlug
      ? `https://franchiseleadspro.com/blog/${postSlug}`
      : `https://franchiseleadspro.com/blog`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FranchiseLeadsPro <support@franchiseleadspro.com>",
        to: ["iamsomnath@franchiseleadspro.com"],
        cc: ["support@franchiseleadspro.com"],
        reply_to: authorEmail || "support@franchiseleadspro.com",
        subject: `💬 New Blog Comment by ${safeName} on "${safeTitle}"`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2>New Blog Comment</h2>
            <p><strong>Post:</strong> <a href="${url}">${safeTitle}</a></p>
            <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
            <p><strong>Post ID:</strong> ${esc(postId || "")}</p>
            <hr>
            <p>${safeContent}</p>
            <hr>
            <p style="color:#666;font-size:12px">Sent automatically from FranchiseLeadsPro blog comments.</p>
          </div>
        `,
      }),
    });

    const data = await res.json();
    if (!res.ok) console.error("Resend error", data);
    return new Response(JSON.stringify({ success: res.ok, data }), {
      status: res.ok ? 200 : 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e: any) {
    console.error("send-blog-comment-notification error", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
