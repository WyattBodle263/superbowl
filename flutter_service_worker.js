'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "59a4c2e0201d2a6df1ed717082b88569",
"index.html": "419932df1a5fd444a19b447f3c7c82e4",
"/": "419932df1a5fd444a19b447f3c7c82e4",
"main.dart.js": "d98f1d59e09e976c66e063baba2329cc",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "3c240cb1f91cda5ad1dd278d22b3ff17",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bceae5d6c4e001314fdbb59ca81a216e",
".git/ORIG_HEAD": "ffc5eb9f09226eaf48f96ee954b6ba0c",
".git/config": "8611e335ab7e7348e630e157dc4bcc7c",
".git/objects/59/f7ff77dbaae93cbaebfdf44f5a33439e187350": "bdec0156558ab746bae4783cb22e2821",
".git/objects/66/75fbb8479912dd0e5b11262d0f4aaea8487edd": "5d3a10bb7802e154c0222e8ad333cf37",
".git/objects/68/3d2fdb20562757dcea931adbc53c13e188368c": "479798861e70ddb979241b340f00e2d3",
".git/objects/57/e602d16f0e7e4de5eb5b59fb55575c8d5f1992": "30dc0036194c3a3043a8dc5b58bb6650",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/cc7707c22abb86c517491b7295a38bf26c93ab": "0974f5f521e82057037cf72baef0b3ea",
".git/objects/ad/0bd4d66f61287e34d5c66f82502db355c09fb6": "5e8c196c0bc64e62ac9f53b808b7bc7a",
".git/objects/bb/66a0bccb5353ae01d8c0c3583f45fb6dbea630": "e48b5cd2f50c812290d099c3ceda3c23",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d1/d923f313259c14f0bbb1e87eab6be1cc2cfe52": "12581a5c672dcbf507166cf6f7970e9b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3636f647cfa7df9497ba817cfcf54366888299": "168d4593d1dc1b7dbf01547fd4862b92",
".git/objects/d8/ebbf91e183a049d93888f5c48eea2ba1b339f5": "a0c2e6aae72378d78f8ad40ce706ba76",
".git/objects/ab/66d0651bdfd58f89d9e1e40ef5451dee86e87d": "28c26baff78e9cfab7a5c1203c310758",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ca/20fd1804c34d93a3a6a022e5fe7a000695e109": "0cbb6e84d291693c4b2ca985eea3dec5",
".git/objects/ed/579b47570933e9cad36c54994f4539ca5eebfb": "6064d0b0304e5dc674d8e1716a30503a",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/42/e5c3940befd8be424b4f796e191245ec4ffa60": "07406e6d231f82c0ab4effcd626c3837",
".git/objects/28/531465a1fc6d77e78e2e7f927ac6b035d1136e": "fe115a83658050917f9e1c9e61e17a3a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/21/54467756e2bb69e7c54dc975a3b43ef65cd1b5": "953d2cb1edcba2bed43dc8f81b23d33a",
".git/objects/4d/190088462acf2a9fadd7d35dbba7acf3f50da1": "78d740f0fdd8a3cbb530e88f2d327c3d",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/8c03c382b98852a9f4227c585ad14583b14afe": "ab11fa3ea877f377e9c9876b218a6306",
".git/objects/08/e03dfc4e9fdeedc3ced2fc7567fd6293e57db4": "ffb89fc256ba25961eaa48d8db8d43b3",
".git/objects/01/9f53821548ec4c44ebe9ec2e7633a68de5f27f": "bb020204208b1bece124be9822159da6",
".git/objects/06/343b326252878fa5c41255af215b7b760fdd57": "5281cd6161c26637652de624a2f3cce2",
".git/objects/bf/a0534b7c7652442bd42c81134589dbcdd5e86e": "1b3d7263100512afec2f66941942e35c",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/eb2a58f3ae137936bf3c206a64956baeb83faa": "c47516505821eb82a8d20af434a68f90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/08b6aba4c2c5b10d9dd092995fe5b5f9565213": "c775fc801df59ea320e43160a3f589b9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/74059a5c0864de1e69b11ac972c01dfc8fb5db": "c145ba6705d6464f3df49713401bd088",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f8/763bc85d8cae98d3c33d954d8a17ff1592fda3": "6ea0fd2477e5d93b6a9c9b202ddace7d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/63f58bf9e37ad83a6c8ab97396daedf05337cb": "a1dc44db18506f242988a23568a644db",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/93ec316ea929b98c64db40fd958e84709b7ccc": "8c151786d7f6e5c976ce7bbea9072726",
".git/objects/23/82f8e8ba5974572383805f57dd782bf75af536": "7573cb83a4b1e488d77209b3371008fd",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/7f/b15f3afb5edcc4611d68cb2c15b4e1c01010f4": "a22be9d8546f71d1debc09e4ed250459",
".git/objects/7a/8cea1e5fd3bd24025d833e8a0d82d2d107a4be": "7ce511b26233f39cb83b89afc49d1b5e",
".git/objects/14/c91bd0cb8edee88b71f649701b1223f5ccf70d": "0900100107f6b3b93db90badb40403fc",
".git/objects/14/ee55f362373d2e564dacb0d7822de28b4cdbd0": "ff3aa119ba8de97fafeac1209936c982",
".git/objects/25/fb170a836fea8107e037e54002c1d4129afaf3": "bbbce6a8d0483c29c8a3554ef5b6d4aa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "030fd72274b500249c2d859e29ccbd67",
".git/logs/refs/heads/main": "0b49883247f77a0a5343f8a9c9d65335",
".git/logs/refs/remotes/origin/main": "5aab0dcfa626699c9b3ef74d208880e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "35db8ba8c1eee771c0f0eb77ff0e3030",
".git/refs/remotes/origin/main": "35db8ba8c1eee771c0f0eb77ff0e3030",
".git/index": "04e94b64b03d20fa1f39957e230cbeb2",
".git/COMMIT_EDITMSG": "47f1cbc884f509091f3e5f10259c4c48",
".git/FETCH_HEAD": "594de351d56b43bc8f0226facd8ebd73",
"assets/AssetManifest.json": "411c603f7cd126fd3a38d96963acf14f",
"assets/NOTICES": "f501ef97f00f515e8f24670bc447a516",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "75c064b2d249586c45b6ef5886c30fe4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "686c2514e40b170d87e9dc585fbc01a1",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/chiefs.png": "ff4bdbc3680f6164d22e4262ed9ec69c",
"assets/assets/fourtynine.png": "c0ff494a39e437356235486cf38774ba",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
