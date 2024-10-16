<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('worker.js?'+Math.random()+'')
  });
}
</script>
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
