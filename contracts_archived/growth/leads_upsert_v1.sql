create or replace function public.leads_upsert_v1(
  p_email text,
  p_country_code text,
  p_ui_locale text,
  p_source text default 'kinly_web_get'
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_lead_id uuid;
  v_deduped boolean;
begin
  -- Normalize inputs
  p_email := lower(trim(p_email));
  p_country_code := upper(trim(p_country_code));
  p_ui_locale := trim(p_ui_locale);

  -- UPSERT logic
  insert into public.leads (email, country_code, ui_locale, source)
  values (p_email, p_country_code, p_ui_locale, p_source)
  on conflict (email) do update
  set
    country_code = excluded.country_code,
    ui_locale = excluded.ui_locale,
    updated_at = now()
  returning id, (xmax <> 0) as deduped
  into v_lead_id, v_deduped;

  return jsonb_build_object(
    'lead_id', v_lead_id,
    'deduped', (v_deduped is not null and v_deduped)
  );
end;
$$;
