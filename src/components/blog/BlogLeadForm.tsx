import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Sparkles, Check } from "lucide-react";

/**
 * Compact lead-capture box shown alongside / inside a blog post.
 * Writes into the existing `contact_submissions` table.
 */
const BlogLeadForm = ({ compact = false }: { compact?: boolean }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast({ title: "Please fill name, email and phone" });
      return;
    }
    setSubmitting(true);
    const [first, ...rest] = name.trim().split(" ");
    const { error } = await supabase.from("contact_submissions").insert({
      first_name: first,
      last_name: rest.join(" ") || "—",
      email: email.trim(),
      phone: phone.trim(),
      role: "Blog Reader",
      service_interest: "Franchise Lead Generation",
      message: concern.trim() || "Submitted via blog concern box",
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not submit", description: error.message });
      return;
    }
    setDone(true);
    setName(""); setEmail(""); setPhone(""); setConcern("");
    toast({ title: "Got it!", description: "We'll be in touch shortly." });
  };

  return (
    <div
      className={`rounded-xl border border-[#F15A29]/40 bg-gradient-to-br from-[#FFF7F2] to-white p-6 shadow-sm ${
        compact ? "" : "md:p-8"
      }`}
    >
      <div className="flex items-center gap-2 mb-2 text-[#F15A29]">
        <Sparkles className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Have a franchise concern?
        </span>
      </div>
      <h4
        className="text-xl md:text-2xl font-bold text-neutral-900 mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Tell us what's slowing your franchise growth.
      </h4>
      <p className="text-sm text-neutral-600 mb-5">
        Drop your details and one concern — we'll personally read it and reply within 24 hours.
        No bots, no funnel.
      </p>

      {done ? (
        <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-md p-4">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Thanks — we'll reach out shortly.</span>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white"
            />
          </div>
          <Textarea
            placeholder="What's your biggest franchise concern right now? (optional)"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="bg-white min-h-[90px]"
          />
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#F15A29] text-white hover:bg-[#d94a1c]"
          >
            {submitting ? "Sending…" : "Send My Concern"}
          </Button>
          <p className="text-[11px] text-neutral-500 text-center">
            We never share your details. Replies come from a real person on our team.
          </p>
        </form>
      )}
    </div>
  );
};

export default BlogLeadForm;
