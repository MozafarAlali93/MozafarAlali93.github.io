'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "17968e533757d5a8300beef25d97e5ae",
"assets/assets/animations/apiError.json": "53215ba3703f370a04e9819112d68919",
"assets/assets/animations/error.json": "639759d7c45373ca0c3c28c614fa9eb0",
"assets/assets/animations/image_loader.json": "a2f19c2ab97253fc43c85a3254f26f31",
"assets/assets/animations/loader.json": "0c2b668aa479882eadf547fcab69c818",
"assets/assets/animations/login.json": "a7e7ec8e7f34829062fbf8aa3db34372",
"assets/assets/fonts/Cairo/Cairo-Black.ttf": "4691baaaab6b5ad5a7f8fafe46b0ad02",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "e558b6a116119d88b796afd3254cc864",
"assets/assets/fonts/Cairo/Cairo-ExtraBold.ttf": "6204e46edfdb3ba1955021289dc06bd5",
"assets/assets/fonts/Cairo/Cairo-ExtraLight.ttf": "2fb2cbe26a952e8aa5bd87aac42e5ed4",
"assets/assets/fonts/Cairo/Cairo-Light.ttf": "481b7173d47d4235eed15c2effdb7e33",
"assets/assets/fonts/Cairo/Cairo-Medium.ttf": "fb96309e6902be422c107194e309f506",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "0e31c62ab5dd577225e5ab2983d06760",
"assets/assets/fonts/Cairo/Cairo-SemiBold.ttf": "e960fd57af8c69446c80b323539ce029",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/icon/ic_launcher.png": "bf13d66db479a7b2adbf90ed29f7a943",
"assets/assets/images/onboarding_1.png": "e76879d25280a53c74eba44a4de58146",
"assets/assets/images/onboarding_2.png": "487e9110887c67ee857019933191362b",
"assets/assets/images/onboarding_3.png": "a112bc1edfbbd55e9849ed280e7401af",
"assets/assets/lottie/payment-success.json": "057091e134bdbfe3b2ad5476b51dfb05",
"assets/assets/pro_logo/awa.png": "57877130e57b13f6c9215a97cf253501",
"assets/assets/pro_logo/booster.png": "2164df548c0c609081b87e179750966a",
"assets/assets/pro_logo/einaya.png": "30b4639de32c7feb03effbc8024384f4",
"assets/assets/pro_logo/hss.png": "8c8aa945f7ec031e37710edd3f531618",
"assets/assets/pro_logo/innovation.png": "0348773d8714ab72af8954d21abca110",
"assets/assets/pro_logo/manpower.png": "135744094e00cb92d7ff079406890f18",
"assets/assets/pro_logo/recovery.png": "dd36d052f263cf5b479b0e679ac6c163",
"assets/assets/pro_logo/stadiums_sync.png": "b68552eb483ad9ffef9568cfccec9761",
"assets/assets/pro_logo/tripjetset.png": "c2f65fb440345428404491b6ac18a36f",
"assets/assets/snackbars/back.svg": "8cdc05219e218423f0ebd2d79d4f0b00",
"assets/assets/snackbars/bubbles.svg": "5b13919135c373ecb104d19ea881cd4d",
"assets/assets/snackbars/failure.svg": "f9a890e8829d6d6daad90c3c802c872f",
"assets/assets/snackbars/help.svg": "08f0f0a5bbe15fe454e3bd59c973310a",
"assets/assets/snackbars/success.svg": "e74e73b44b7900099241e5d211d8ddaa",
"assets/assets/snackbars/warning.svg": "fea8151183fa6add29f7dd8c375b1ba7",
"assets/assets/svg/app_store.svg": "e51956d6f2c9218c6c0873ea12cd70cd",
"assets/assets/svg/google_play.svg": "70ef5d5eb43e8a465b994fdf23832215",
"assets/assets/svg/logo.svg": "7a7f2a4bd76355a404d6d4d0832082f1",
"assets/FontManifest.json": "cdf7bbad1eaea80ec2e7030447fad4e3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b587b3dd9fe080ffea20ac05bb4a4ade",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "432dbf8086faf68fc4930499a6bcca14",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "045c499a1acb1ba8e80269f8a00c0170",
"icons/Icon-512.png": "8e9b17642c128167d6ab176c49ba74f3",
"icons/Icon-maskable-192.png": "045c499a1acb1ba8e80269f8a00c0170",
"icons/Icon-maskable-512.png": "8e9b17642c128167d6ab176c49ba74f3",
"index.html": "d3c1e96fb5df0d59d34b33842ac1e0ca",
"/": "d3c1e96fb5df0d59d34b33842ac1e0ca",
"main.dart.js": "dfc24d87eb1d2c9f46a9c3d81fd5dbfa",
"manifest.json": "c82418befaa058a2c14ff39f0e540b8d",
"splash/img/dark-1x.png": "317455c577a8fe7055afbaffe2249ea1",
"splash/img/dark-2x.png": "114e175cfb3da2684fd6f871985aeead",
"splash/img/dark-3x.png": "d5e972b1e4a05345e9b73c69c8114d7b",
"splash/img/dark-4x.png": "8e9b17642c128167d6ab176c49ba74f3",
"splash/img/light-1x.png": "317455c577a8fe7055afbaffe2249ea1",
"splash/img/light-2x.png": "114e175cfb3da2684fd6f871985aeead",
"splash/img/light-3x.png": "d5e972b1e4a05345e9b73c69c8114d7b",
"splash/img/light-4x.png": "8e9b17642c128167d6ab176c49ba74f3",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"version.json": "d900b4f6b9beff8c3d978c6205c1462e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
