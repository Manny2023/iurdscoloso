window.OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
        appId: "d7cce0be-3363-4a4f-b359-052bbbe8e096"
    });

    OneSignal.push(() => {
        OneSignal.isPushNotificationsEnabled().then(function(isEnabled) {
            if (isEnabled) {
                console.log("Push notifications are enabled!");
            } else {
                console.log("Push notifications are not enabled!");
                OneSignal.push(() => {
                    OneSignal.showNativePrompt(); // Muestra el prompt de notificaciones
                });
            }
        });
    });
});
