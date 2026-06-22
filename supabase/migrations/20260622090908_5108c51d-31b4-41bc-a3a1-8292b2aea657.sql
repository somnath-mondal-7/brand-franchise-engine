CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Remove old schedule if it exists
SELECT cron.unschedule('daily-broker-blog-post') WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'daily-broker-blog-post'
);

-- Schedule daily blog post at 14:00 UTC (9 AM ET)
SELECT cron.schedule(
  'daily-broker-blog-post',
  '0 14 * * *',
  $$
  SELECT net.http_post(
    url := 'https://yquuidpajigvecyonqir.supabase.co/functions/v1/auto-blog-generator',
    headers := '{"Content-Type": "application/json", "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg"}'::jsonb,
    body := '{"force": true, "intervalHours": 20, "publishAsDraft": false}'::jsonb
  );
  $$
);