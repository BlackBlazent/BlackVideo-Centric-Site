import { incrementDownload, fetchDownloadStats } from './dev/main/statistics/download.stats';




window.addEventListener("DOMContentLoaded", () => {
  fetchDownloadStats();

  const platforms = ['windows', 'mac', 'linux', 'android', 'ios'];

  platforms.forEach((platform) => {
    const btn = document.getElementById(`download-stats-${platform}`);
    btn?.addEventListener("click", () => incrementDownload(platform as any));
  });
});


// For manual downloads (persistent)
incrementDownload('windows');