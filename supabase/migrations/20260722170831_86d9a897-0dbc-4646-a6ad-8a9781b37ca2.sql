DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'auto-blog-generator-daily') THEN
    PERFORM cron.unschedule('auto-blog-generator-daily');
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
  '0 9 * * 1,3,5',
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
  '0 */12 * * *',
  $$
  SELECT net.http_post(
    url := 'https://yquuidpajigvecyonqir.supabase.co/functions/v1/auto-blog-generator',
    headers := '{"Content-Type": "application/json", "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg"}'::jsonb,
    body := '{"force": true, "mode": "breaking", "publishAsDraft": false}'::jsonb
  );
  $$
);