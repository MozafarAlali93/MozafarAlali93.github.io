'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "869151a2510d97320d3c7a9f5998e1f5",
"assets/AssetManifest.bin.json": "53c50c457e95d2578fafa311c286e6cb",
"assets/AssetManifest.json": "f153571d2951cbcc2e709e7415ae392f",
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
"assets/assets/icon/background.jpg": "34006503462ecd46b56443cf1209e094",
"assets/assets/icon/ic_launcher.png": "bf13d66db479a7b2adbf90ed29f7a943",
"assets/assets/icon/inverted_background.jpg": "a377fc49def761acdf4c77d11a5762ca",
"assets/assets/pro_logo/awa.png": "57877130e57b13f6c9215a97cf253501",
"assets/assets/pro_logo/booster.png": "2164df548c0c609081b87e179750966a",
"assets/assets/pro_logo/einaya.png": "30b4639de32c7feb03effbc8024384f4",
"assets/assets/pro_logo/hss.png": "8c8aa945f7ec031e37710edd3f531618",
"assets/assets/pro_logo/innovation.png": "0348773d8714ab72af8954d21abca110",
"assets/assets/pro_logo/manpower.png": "135744094e00cb92d7ff079406890f18",
"assets/assets/pro_logo/nostalgia.png": "767068970626121cd91bf7f70e11d15a",
"assets/assets/pro_logo/recovery.png": "dd36d052f263cf5b479b0e679ac6c163",
"assets/assets/pro_logo/stadiums_sync.png": "b68552eb483ad9ffef9568cfccec9761",
"assets/assets/pro_logo/tripjetset.png": "c2f65fb440345428404491b6ac18a36f",
"assets/assets/svg/app_store.svg": "e51956d6f2c9218c6c0873ea12cd70cd",
"assets/assets/svg/google_play.svg": "70ef5d5eb43e8a465b994fdf23832215",
"assets/assets/svg/logo.svg": "7a7f2a4bd76355a404d6d4d0832082f1",
"assets/FontManifest.json": "cdf7bbad1eaea80ec2e7030447fad4e3",
"assets/fonts/MaterialIcons-Regular.otf": "a667c28a8719674ffcedd030ebb3f412",
"assets/NOTICES": "1f57b9cd5f3fa0a382daa0a709318596",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "39b8d99a13c856fbf0f3fb0746438712",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "df39d2146e47ae507584ebc1f8c80f42",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "432dbf8086faf68fc4930499a6bcca14",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "045c499a1acb1ba8e80269f8a00c0170",
"icons/Icon-512.png": "8e9b17642c128167d6ab176c49ba74f3",
"icons/Icon-maskable-192.png": "045c499a1acb1ba8e80269f8a00c0170",
"icons/Icon-maskable-512.png": "8e9b17642c128167d6ab176c49ba74f3",
"index.html": "3f1e399d7db4b934695a7c4aacd06af0",
"/": "3f1e399d7db4b934695a7c4aacd06af0",
"main.dart.js": "0baa301511b03a8ca395ae1751a484ea",
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
"version.json": "d900b4f6b9beff8c3d978c6205c1462e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
