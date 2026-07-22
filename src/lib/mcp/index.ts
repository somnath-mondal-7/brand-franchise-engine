import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import searchBlogPosts from "./tools/search-blog-posts";
import listContactSubmissions from "./tools/list-contact-submissions";
import listChatConversations from "./tools/list-chat-conversations";

// Build issuer from Supabase project ref (Vite inlines this at build time).
// Never use SUPABASE_URL — on Lovable Cloud that's a proxy host and mcp-js
// rejects tokens whose issuer doesn't match the direct supabase.co host.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "franchiseleadspro-mcp",
  title: "FranchiseLeadsPro MCP",
  version: "0.1.0",
  instructions:
    "Tools for the FranchiseLeadsPro admin: list and search blog posts, view leads submitted via the contact/concern forms, and review visitor chat conversations. All tools act as the signed-in user and are governed by the site's row-level security.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listBlogPosts, searchBlogPosts, listContactSubmissions, listChatConversations],
});
