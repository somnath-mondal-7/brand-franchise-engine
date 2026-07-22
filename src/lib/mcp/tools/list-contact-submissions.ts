import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export default defineTool({
  name: "list_contact_submissions",
  title: "List contact submissions (leads)",
  description: "List recent leads submitted via the contact form and franchise concern box. Admin-only via RLS.",
  inputSchema: {
    limit: z.number().int().min(1).max(50).optional().describe("Max leads to return (default 10)."),
    status: z.string().optional().describe("Filter by status (e.g. 'new', 'contacted')."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, status }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const sb = supabaseForUser(ctx);
    let q = sb.from("contact_submissions")
      .select("id,first_name,last_name,email,phone,company,role,service_interest,message,status,created_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 10);
    if (status) q = q.eq("status", status);
    const { data, error } = await q;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { leads: data ?? [] },
    };
  },
});
