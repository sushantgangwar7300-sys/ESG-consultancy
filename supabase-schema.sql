-- ===============================================
-- KAI PRAKRITI — SUPABASE DATABASE SCHEMA
-- Run this in your Supabase SQL Editor:
-- https://app.supabase.com/project/_/sql
-- ===============================================

create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  ticket_id text not null,
  full_name text not null,
  email text not null,
  company text,
  phone text,
  service_pillar text,
  message text,
  readiness_score integer,
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Policy: Allow anonymous users to insert new leads (from website forms)
create policy "Allow anonymous lead submission"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- Policy: Allow service role / authenticated admins to view leads
create policy "Allow admin lead reads"
  on public.leads
  for select
  to anon, authenticated
  using (true);
