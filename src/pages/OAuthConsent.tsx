import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Mail, Lock } from "lucide-react";

type AuthOAuth = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
};
const oauth = () => (supabase.auth as unknown as { oauth: AuthOAuth }).oauth;

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";

  const [needsLogin, setNeedsLogin] = useState(false);
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadDetails = async () => {
    try {
      const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load authorization request");
    }
  };

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) return setError("Missing authorization_id");
      const { data: sess } = await supabase.auth.getSession();
      if (!active) return;
      if (!sess.session) {
        setNeedsLogin(true);
        return;
      }
      await loadDetails();
    })();
    return () => { active = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorizationId]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setBusy(false);
      return;
    }
    setNeedsLogin(false);
    await loadDetails();
    setBusy(false);
  };

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (error) { setBusy(false); return setError(error.message); }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) { setBusy(false); return setError("No redirect returned by the authorization server."); }
    window.location.href = target;
  }

  if (error && !needsLogin && !details) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader><CardTitle>Authorization error</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">{error}</p></CardContent>
        </Card>
      </main>
    );
  }

  if (needsLogin) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center"><Shield className="h-12 w-12 text-primary" /></div>
            <CardTitle className="text-2xl">Sign in to continue</CardTitle>
            <p className="text-muted-foreground text-sm">
              Sign in to approve connecting an app to your FranchiseLeadsPro account.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2"><Mail className="h-4 w-4" /> Email</Label>
                <Input id="email" type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)} disabled={busy} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2"><Lock className="h-4 w-4" /> Password</Label>
                <Input id="password" type="password" required value={password}
                  onChange={(e) => setPassword(e.target.value)} disabled={busy} />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={busy}>
                {busy ? "Signing in…" : "Sign in"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (!details) {
    return <main className="min-h-screen flex items-center justify-center">Loading…</main>;
  }

  const clientName = details.client?.name ?? details.client?.client_name ?? "an app";

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center"><Shield className="h-12 w-12 text-primary" /></div>
          <CardTitle className="text-2xl">Connect {clientName}?</CardTitle>
          <p className="text-muted-foreground text-sm">
            This lets <strong>{clientName}</strong> access FranchiseLeadsPro as you. It can
            list and search your blog posts, view leads submitted through your forms, and
            review chat conversations — subject to your account's permissions.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button onClick={() => decide(true)} disabled={busy} className="w-full">
            {busy ? "Working…" : "Approve"}
          </Button>
          <Button onClick={() => decide(false)} disabled={busy} variant="outline" className="w-full">
            Deny
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
