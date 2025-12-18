import { supabase } from '../../lib/supabaseClient';

const SRC_KEY = "aHR0cHM6Ly9zb3VyY2Vmb3JnZS5uZXQvcHJvamVjdHMvYmxhY2t2aWRlby16ZXBoeXJhL2ZpbGVzL2xhdGVzdC9kb3dubG9hZA==";

export const getOfficialLink = () => atob(SRC_KEY);

export const trackDownload = async (platform: string) => {
  // Unique key per platform (e.g., bv_downloaded_windows)
  const storageKey = `bv_downloaded_${platform.toLowerCase()}`;
  if (sessionStorage.getItem(storageKey)) return;

  // Map platform name to SQL column name
  const columnName = `downloads_${platform.toLowerCase()}`;

  try {
    const { error } = await supabase.rpc('increment_stat', { column_name: columnName });
    if (!error) sessionStorage.setItem(storageKey, 'true');
  } catch (err) {
    console.error("Platform stats sync failed", err);
  }
};

export const streamStats = (callback: (data: any) => void) => {
  supabase.from('app_stats').select('*').eq('id', 'global_stats').single()
    .then(({ data }) => data && callback(data));

  return supabase
    .channel('live_stats')
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'app_stats' }, 
      payload => callback(payload.new)
    )
    .subscribe();
};