-- Create admin user for blog management
-- This will create a user with email: admin@franchiseleads.com
-- Password: AdminPass123!

-- Insert admin user into auth.users
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@franchiseleads.com',
  crypt('AdminPass123!', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{"role":"admin"}',
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Create a simple admin_users table to track admin access
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access
CREATE POLICY "Only authenticated users can view admin_users" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() = user_id);

-- Insert admin record
INSERT INTO public.admin_users (user_id, email, role)
SELECT id, email, 'admin' 
FROM auth.users 
WHERE email = 'admin@franchiseleads.com';