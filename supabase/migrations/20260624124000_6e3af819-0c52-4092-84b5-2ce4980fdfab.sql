
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'daily-broker-blog-post') THEN
    PERFORM cron.unschedule('daily-broker-blog-post');
  END IF;
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-franchise-news-blog') THEN
    PERFORM cron.unschedule('weekly-franchise-news-blog');
  END IF;
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'breaking-franchise-news-check') THEN
    PERFORM cron.unschedule('breaking-franchise-news-check');
  END IF;
END $$;

SELECT cron.schedule(
  'weekly-franchise-news-blog',
  '0 14 * * 1,2,4,6',
  $$
  SELECT net.http_post(
    url := 'https://yquuidpajigvecyonqir.supabase.co/functions/v1/auto-blog-generator',
    headers := '{"Content-Type": "application/json", "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg"}'::jsonb,
    body := '{"force": true, "mode": "scheduled", "publishAsDraft": false}'::jsonb
  );
  $$
);

SELECT cron.schedule(
  'breaking-franchise-news-check',
  '0 */6 * * *',
  $$
  SELECT net.http_post(
    url := 'https://yquuidpajigvecyonqir.supabase.co/functions/v1/auto-blog-generator',
    headers := '{"Content-Type": "application/json", "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg"}'::jsonb,
    body := '{"force": true, "mode": "breaking", "publishAsDraft": false}'::jsonb
  );
  $$
);
