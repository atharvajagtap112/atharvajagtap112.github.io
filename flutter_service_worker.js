'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "28e5a2f7a15417b1effd67c5acfd0ade",
".git/config": "b717edfe824fec8d1a9edcb0b58703a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a42329e740adc61c0d29ab044d74576d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d224306ef37ba9944f374a75b868dff",
".git/logs/refs/heads/main": "9d224306ef37ba9944f374a75b868dff",
".git/logs/refs/remotes/origin/main": "a8294f58bda658ebca8d473a244dd170",
".git/objects/05/e8d842ee51dbc12a652c2a7db118a4fb52dc45": "a4fe46f51c056f951564315af123f31b",
".git/objects/07/3d6d457a80299583005406eaa3f3c67d48eab8": "c9a3b958e0daa46f688f87f51d778930",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/037801c7cbef178b94e90bf26a341debb662c0": "bbf3f449ce9146ace59091df6caeedbe",
".git/objects/0f/d50071de5e62951ce9b299a614fb0f64eee142": "b96533f7f6074ab5e47af4c28c04dc38",
".git/objects/11/d62abe9144fb55dae93aa5aa1fc94ec1f0ca32": "2e8282334ceb148fd74560230a06d368",
".git/objects/12/8bbf7866a54979eb3a578b1b3099fff07d8b02": "24f1832e26a8b3c37a5b252e3d486e7c",
".git/objects/14/186fa796e7f922124486cdda928da8be7f6c47": "c48b1ea729eead82e262d651ddf6b0ef",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/8318e1fbc7d1f6ea15a136d52077a908f12bb3": "e756ae23677f9cdb852373070bb55a49",
".git/objects/21/0d1d36d18ab080f872819ff79a85bac8e6026f": "f90f8ebd89574f4c91091ad182c5b52e",
".git/objects/29/a8b9788b6fe13997d2afec856c55bd06d4eaaa": "8e33a8155d88a416897e3d29ebb22db4",
".git/objects/2b/9b856dcc8a0d6c75bf567ac4071620fa9907d1": "23fed2a63378faddc52d61d550959357",
".git/objects/30/a18ad9e9cc780a129e409e16e2056abfe8e4a9": "646168da613266998067d249c09c76c0",
".git/objects/31/7b1575b8b969a2c6e811d3d82d53c0222cdaff": "a06ba7fdf36b17b90373aec8c7e39205",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/dc445c243adc11db03c0fe46cf6d097033273e": "61a52d9804ae51e766da1ff2c8aa9018",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/440fc0ea65c082e0203e2fc9d8af47dfc1d48d": "8af5ea0691e999387ada961ff87b0371",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/fa239d267fa0869b2741218a78d24e015375c0": "11d84cfeda293cc178efe194e9383253",
".git/objects/4c/d83be712141b4503d6d181149612cdcb1f46ae": "19ec3171743c3ec0c8eade1b775f9c8c",
".git/objects/4e/bf8a186509ea10db4b32fae16bd0db34a14162": "aef1be0a633605ba522a9c05f699a4a3",
".git/objects/53/fd8e67b662b04c33629add60a94160422630c5": "f51e255d1eec8c162c5d3d317716e845",
".git/objects/56/7183d2550f9084fc3680e18b89530de04a0015": "1323c30c86d849ea7ee908b66dae3ad8",
".git/objects/58/d5b9d2c4a00856c335d345e3d5987549342a07": "99dc652e44d75d7712cac1ddcc13b6ea",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/2051956c6135ed98456348267bb958ee5a9b9f": "a59fa4462b74e52ef89ef4417fa7b0f4",
".git/objects/5d/cd87b2fc92fde303e1896b74d18b94fe6d13e2": "2869c08210b720545b3fc1e96516784b",
".git/objects/5e/323f3367ae6ee9ab234db228bbb5a1b2173256": "0984bb065a07b36f4d151313fd7a449e",
".git/objects/60/5401416edfc969ab574fe4963abd4543130399": "a97885f38bce7df40a0f4a3a8331bd23",
".git/objects/65/4d6b061c7b6752936a71457780af9a14014152": "dd753bd269815f7e749c41b915da57ab",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "c32fa415589aad80a6ee35d0af7261ad",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/78da4cfad26bf653e1d460f657e8c1618239ff": "ac738ee15b7b7530be1718712324c9a1",
".git/objects/6f/b0c02a9fb500c17ceb680022b6d34d1c5b05a8": "176a5e810c90f1569688e1665aa3b8be",
".git/objects/7c/144efffcd36a963427e227e407cdeea7858098": "9d7a3c23aa79cd72f4afe7ae68ec52b6",
".git/objects/7c/7d3f4c649620b4db7169807b0a44fc7466567c": "9678c202a684d7019502c5376f281f06",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/89/24a65b2a5ba721ea09a80afad67c01f99071e1": "9e1f2caa66ccb1f104fd887a1788aeec",
".git/objects/8a/b0e4e5228fe06c9043107df76fa39de77c5953": "22c40b1b2e8064d44948c4aa2ad9743c",
".git/objects/90/2f2253260b870f8f1bdc0aa48d36bebbb8525a": "00fcd4452a614ddab210212c1d4e701a",
".git/objects/90/700ec97f1f140692560e06563bdb737e10933a": "a43a0152605340253915d14d5f7fb9f8",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/1b9b6709976ecf060babfca847a5d1aadc4d04": "6a6c33e6094fdf605fda2c846a749b9a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a0/055faf7120a96b505c2814a1e65420bd3fe6df": "cfb8c851625d810a7c5e110a47cf1fc5",
".git/objects/a2/426a9a985793a116ee53d8427eb1ae4cd341e5": "7e4c0a573f91032cdd71a904866c4e7d",
".git/objects/ac/168df93de16954efedba9f215bbe1e2647d8fa": "9a24e8258776359319a8ae8073625f02",
".git/objects/b0/1c226bb9f07ede3d6cd2972d80b9d7c554f656": "d9412989771e3d78b8c3a01178792fc8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/2e5b33996707fbed6374b0a9458ffd4fe3cc0b": "3c1ad675bd72f2029bc8863495300d45",
".git/objects/b8/8f0c1ba08b7a9210a7cf07d92c391270d6d8ea": "f6f0b6f67596b53b4d5d27198488c6ce",
".git/objects/ba/2395b5dc91420e9203ee13a96a13cab690e746": "8dddfb89c6e41f070a0cee90862dc781",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/1e688b70b5a96e3446f1b05716e0a43747403c": "01ee2eb640cd5a42d11f1c1fd797134a",
".git/objects/c0/c78be44385330eaa72173dbd8a27dc1a57886e": "89ea1bfb4f5dadd9897850825bb6204f",
".git/objects/c8/7b4398cc77c14003288ece1d4abb70369669dd": "bf3d091444c81a9a9043806e01bb56cd",
".git/objects/ca/ca47c34866cc45da0de2ce7f0b261e06d5b02b": "c595f81c46754ef2728a029e0af2a762",
".git/objects/cb/33e0306fd576d55b2b648747c3805f54848abd": "2115ade34dce11e814394d27f51c0c71",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/57c11e380bad55ffd260791909a9375b4501b1": "c5f2fe791d8f47dfb0ded39ecd1b8b0a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2442f1023d61a8827b011cfdc82633ab5193b3": "7e3f0d699898e6f591dd91bda755d3e5",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d9/b6264de849234386436db59fe02f6759948f3b": "004d8a24aae5a5d22286207bcfb63567",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/dbe61d997c29c8b3141b04825fff5b3f79c8bd": "07d8c67f4510ac8e5f74e3bc138fa8d2",
".git/objects/e0/c0148bb67eeb4f60aaac8da809a23d57f04a67": "a4a26d97a14e2e980f1d068034b438ea",
".git/objects/e5/4aa25736b44b2d1ef3f22fe5f6b35abeaf8450": "dd1fa11e3228b5d7d2c6b66a6786aa3b",
".git/objects/eb/25e926fc75f9f8ebe93f79f776d0e7fa54c385": "8e57e6b5dba23279ae076dbe304527d3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/7f5d43b8f03de23ee1f94167ce812f9b592964": "16e77d8fa0348fc125c20c45c32499c5",
".git/objects/f5/6e3c00b7ae1b48c9d2cca2d7e5d4bd4d45be51": "cc5045cd1d9ae1c32e6f1d8f95e6667b",
".git/objects/f8/db127f76bdb7e229a847bff39a8fc2a08e2f4d": "d924a72fc77acbb06b0c35b546389a6e",
".git/objects/fc/d894060b2527d3459b7acb273f95790b0e162e": "73df5b73182de216bb43033f704b465b",
".git/objects/fd/c3280539169e85622aad5d2b72c1b1080cd802": "6d09b6b7c0ac224a56cc38b9cba48c2b",
".git/objects/ff/a8141305832ece2bdf8807c67b57f1128ff890": "9526b718b6dcc5a71f713992cbcdd80f",
".git/objects/ff/aa9e40710a59c35f9f4281aa8b31e773e56070": "27479523ab7a8cf5cb39f86c22c151e8",
".git/refs/heads/main": "09083d873180d2e4cdb64030c02eb3bf",
".git/refs/remotes/origin/main": "09083d873180d2e4cdb64030c02eb3bf",
"assets/AssetManifest.bin": "7f89143981f9424a715216dd0c1cf9df",
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
"flutter_bootstrap.js": "50d6786e035da6acd01b0c8b2660ea4f",
"icons/Icon-192.png": "3ca67fb37ca32550826333d270c6230f",
"icons/Icon-512.png": "1bf528dd16dc5e982937c8ad3bc12057",
"icons/Icon-maskable-192.png": "3ca67fb37ca32550826333d270c6230f",
"icons/Icon-maskable-512.png": "1bf528dd16dc5e982937c8ad3bc12057",
"index.html": "fdda44726886cba579fa7666772c0f7d",
"/": "fdda44726886cba579fa7666772c0f7d",
"main.dart.js": "0e5b1ca5e1b3132ed44197650dd00ee8",
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
