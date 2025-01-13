'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7f89143981f9424a715216dd0c1cf9df",
"assets/AssetManifest.bin.json": "6532f266e673e787d018c2e6bfb836be",
"assets/AssetManifest.json": "1b171e1e7f33e57762cc1a34b29a7095",
"assets/assets/animations/code_animation.json": "eb16c39204e0b21247516ba837214e3c",
"assets/assets/font/Minecraft-Seven_v2.ttf": "ca884ee3bef07e0848396df3d09679d4",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/contract-agreement-icon.svg": "8b40976a475089c34b5558a92e75f099",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/icons/gmail.svg": "01fa57e5f675bf7020de0d9ad9d619f1",
"assets/assets/icons/leetcode.svg": "602958e0674315e1cd989b3ac5f74567",
"assets/assets/icons/linkedin.svg": "a119dc13891e0fafc92ba1176712d3cc",
"assets/assets/icons/matrix.png": "9127a90a234090cbf8815bb0502fd873",
"assets/assets/icons/playstore.svg": "aaada2a103792cf75a90a9c39e766725",
"assets/assets/icons/project.svg": "799d4ae3ff12d912cf814b9c7abae488",
"assets/assets/icons/resume.svg": "1e64bb8c56238ce7852bdd65c0575ebf",
"assets/assets/icons/skill.svg": "0b9a7e861210ea9ea31e0d7c04a88d19",
"assets/assets/icons/topMate.png": "8f85d44acfac5e1e6f6e43f1ae2f88aa",
"assets/assets/icons/twitter.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/assets/icons/Untitled%2520canvas%2520(1).jpeg": "c6dc525251715432f231afaed7dd9060",
"assets/assets/icons/x.svg": "f6382415ae004d1ca598619f8bf8e22f",
"assets/assets/icons/youtube.svg": "3eb182663fd1181f048705dedec45580",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/images/profile_picture.jpg": "16f54a9d001aaa7199d65a620d9df47a",
"assets/assets/rive/books_drop.riv": "433c77c6d19fb3d2bbcaa6d3bc871ab1",
"assets/assets/rive/charachter.riv": "186ff6ac47cef67ffead7966e2081d4d",
"assets/assets/rive/dash_flutter_muscot.riv": "d0802f9a79fb2e387c86d44ce2bc2110",
"assets/assets/rive/male_character_sitting_on_a_chair_and_working_on_a_laptop.riv": "ec3a0622337c9ade77dd5fa0c53dab7e",
"assets/assets/rive/new_file.riv": "57c6ef42feca928c9f1da9e325038f5b",
"assets/assets/rive/pull-to-refresh_animation_example.riv": "58b1087e09e7fa4c8e0b4b893f5af04a",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/assets/rive/robot.riv": "338ebe6d64a995630bd54dc6176fbfe5",
"assets/assets/rive/ux_ui_designer%2520(1).riv": "e7cf0d59788fbe5a9cd6dd308df54f28",
"assets/assets/rive/working.riv": "e7cf0d59788fbe5a9cd6dd308df54f28",
"assets/FontManifest.json": "d8c6082004e1b4524e98b329feddfc5f",
"assets/fonts/MaterialIcons-Regular.otf": "41b2e242d80c5a1ed2c130c1d9a795c3",
"assets/NOTICES": "8e7c456e693fbb3cb9e30b8704aa7d7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f63a531dbf403ba029e4817f3a2d9641",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5bf379250b03272dd495cdbf2b7aa6f6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "012c28bf9e5a037bc56920ac7a9ea10f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5e8b7a35c1e826a35151e2da858ad723",
"icons/Icon-192.png": "3ca67fb37ca32550826333d270c6230f",
"icons/Icon-512.png": "1bf528dd16dc5e982937c8ad3bc12057",
"icons/Icon-maskable-192.png": "3ca67fb37ca32550826333d270c6230f",
"icons/Icon-maskable-512.png": "1bf528dd16dc5e982937c8ad3bc12057",
"index.html": "fdda44726886cba579fa7666772c0f7d",
"/": "fdda44726886cba579fa7666772c0f7d",
"main.dart.js": "dd21c7294531237cd14f37fa3270242b",
"manifest.json": "1ebcac5adbbb0be84bb13899ac3494cd",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
