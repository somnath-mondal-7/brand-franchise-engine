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
  name: "list_chat_conversations",
  title: "List chat conversations",
  description: "List recent visitor chat conversations from the site chat widget. Admin-only via RLS.",
  inputSchema: {
    limit: z.number().int().min(1).max(50).optional().describe("Max conversations to return (default 10)."),
    includeMessages: z.boolean().optional().describe("Include messages for each conversation (default false)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, includeMessages }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const sb = supabaseForUser(ctx);
    const { data: convos, error } = await sb
      .from("chat_conversations")
      .select("id,visitor_name,visitor_email,status,created_at,updated_at,ended_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 10);
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };

    let result: any = convos ?? [];
    if (includeMessages && convos && convos.length) {
      const ids = convos.map((c) => c.id);
      const { data: msgs } = await sb
        .from("chat_messages")
        .select("id,conversation_id,sender_type,message,created_at")
        .in("conversation_id", ids)
        .order("created_at", { ascending: true });
      const byConvo: Record<string, any[]> = {};
      (msgs ?? []).forEach((m: any) => {
        (byConvo[m.conversation_id] ||= []).push(m);
      });
      result = convos.map((c: any) => ({ ...c, messages: byConvo[c.id] ?? [] }));
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { conversations: result },
    };
  },
});
