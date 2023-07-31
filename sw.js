/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3b6963d6'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/app-4dde72dc.js",
    "revision": null
  }, {
    "url": "assets/banner-logo-28fb64d0.js",
    "revision": null
  }, {
    "url": "assets/community-39f2fd5d.js",
    "revision": null
  }, {
    "url": "assets/Community-4b8621b3.js",
    "revision": null
  }, {
    "url": "assets/Community-9fc6eafb.css",
    "revision": null
  }, {
    "url": "assets/Guide-5d38c1cd.css",
    "revision": null
  }, {
    "url": "assets/Guide-b3c984a0.js",
    "revision": null
  }, {
    "url": "assets/Home-c0528c35.css",
    "revision": null
  }, {
    "url": "assets/Home-f803c58f.js",
    "revision": null
  }, {
    "url": "assets/index-55e10f2a.css",
    "revision": null
  }, {
    "url": "assets/Landing-5def14b2.css",
    "revision": null
  }, {
    "url": "assets/Landing-9b0e3009.js",
    "revision": null
  }, {
    "url": "assets/Map-14ce97e0.js",
    "revision": null
  }, {
    "url": "assets/Map-bedb3288.css",
    "revision": null
  }, {
    "url": "assets/Room-49d52900.css",
    "revision": null
  }, {
    "url": "assets/Room-97c3cbb2.js",
    "revision": null
  }, {
    "url": "assets/session-7aaf2eca.js",
    "revision": null
  }, {
    "url": "assets/Session-b3ec6612.js",
    "revision": null
  }, {
    "url": "assets/Session-d0a666d9.css",
    "revision": null
  }, {
    "url": "assets/Sponsor-6994095e.js",
    "revision": null
  }, {
    "url": "assets/Sponsor-a8b1b3ff.css",
    "revision": null
  }, {
    "url": "assets/Sponsorship-275d5f2e.js",
    "revision": null
  }, {
    "url": "assets/Sponsorship-da23f0b7.css",
    "revision": null
  }, {
    "url": "assets/Staff-1f93a0e9.js",
    "revision": null
  }, {
    "url": "assets/Staff-6697bdfd.css",
    "revision": null
  }, {
    "url": "assets/Topics-1c85730f.js",
    "revision": null
  }, {
    "url": "assets/Topics-34ac06ed.css",
    "revision": null
  }, {
    "url": "assets/Venue-4e15ca46.js",
    "revision": null
  }, {
    "url": "assets/Venue-90f90259.css",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-fe350f51.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-dc90f814.js",
    "revision": null
  }, {
    "url": "en/community.html",
    "revision": "75dc56ea0cb61f436f1c8ea422449d10"
  }, {
    "url": "en/community/index.html",
    "revision": "2384269b5a3469ee383afe0275729cc5"
  }, {
    "url": "en/index.html",
    "revision": "fcf3c2da7f46a179a7a01f30563106f6"
  }, {
    "url": "en/landing.html",
    "revision": "bee9ba3e62d6e4ad1ffa037e567fcc69"
  }, {
    "url": "en/landing/index.html",
    "revision": "d861b8ab8a0941c488f5edff91431ede"
  }, {
    "url": "en/map.html",
    "revision": "00eac3480d721616eb9e6e2294f88783"
  }, {
    "url": "en/map/index.html",
    "revision": "00eac3480d721616eb9e6e2294f88783"
  }, {
    "url": "en/room.html",
    "revision": "5d127df737fc5333484dff2f77d66d41"
  }, {
    "url": "en/room/index.html",
    "revision": "5d127df737fc5333484dff2f77d66d41"
  }, {
    "url": "en/session.html",
    "revision": "57af9de917b9bae42b0e30f3f6c673cf"
  }, {
    "url": "en/sponsor.html",
    "revision": "dbbc42b63bf7d2296ba187eb1ed66bb4"
  }, {
    "url": "en/sponsor/index.html",
    "revision": "dbbc42b63bf7d2296ba187eb1ed66bb4"
  }, {
    "url": "en/sponsorship.html",
    "revision": "a0e881c08c33d9c21db82c4568c9d928"
  }, {
    "url": "en/sponsorship/index.html",
    "revision": "a0e881c08c33d9c21db82c4568c9d928"
  }, {
    "url": "en/staff.html",
    "revision": "4200cc39dbe0e20bd63117ce6f01408d"
  }, {
    "url": "en/staff/index.html",
    "revision": "4200cc39dbe0e20bd63117ce6f01408d"
  }, {
    "url": "en/venue.html",
    "revision": "ef3689fb0aaa739b7d5168fc3f935dbb"
  }, {
    "url": "en/venue/index.html",
    "revision": "ef3689fb0aaa739b7d5168fc3f935dbb"
  }, {
    "url": "index.html",
    "revision": "ec2ab23018acff7e2dd0ba68d5c74d9e"
  }, {
    "url": "zh-TW/community.html",
    "revision": "870136352227386f12b3461a8e8ff552"
  }, {
    "url": "zh-TW/community/index.html",
    "revision": "941eb45590a7af7bb92fd6da91218958"
  }, {
    "url": "zh-TW/index.html",
    "revision": "a74a8b6fc83da3253c4282a1c434a8e3"
  }, {
    "url": "zh-TW/landing.html",
    "revision": "dff3e19e6eb8fc6758ae50e5aa8c0902"
  }, {
    "url": "zh-TW/landing/index.html",
    "revision": "41cb7019381f8f1b3dcae1f9b7673993"
  }, {
    "url": "zh-TW/map.html",
    "revision": "ac104dce459402d68ad4251fa7afdfd2"
  }, {
    "url": "zh-TW/map/index.html",
    "revision": "ac104dce459402d68ad4251fa7afdfd2"
  }, {
    "url": "zh-TW/room.html",
    "revision": "f3ed1aec8d505f844fbb1fdac36ced28"
  }, {
    "url": "zh-TW/room/index.html",
    "revision": "f3ed1aec8d505f844fbb1fdac36ced28"
  }, {
    "url": "zh-TW/session.html",
    "revision": "c87e542a4b836ef6ed06688b172ccb64"
  }, {
    "url": "zh-TW/sponsor.html",
    "revision": "614d743aec88d48ffa27060ef470285f"
  }, {
    "url": "zh-TW/sponsor/index.html",
    "revision": "614d743aec88d48ffa27060ef470285f"
  }, {
    "url": "zh-TW/sponsorship.html",
    "revision": "36b473617585df46b7be43df9c670624"
  }, {
    "url": "zh-TW/sponsorship/index.html",
    "revision": "36b473617585df46b7be43df9c670624"
  }, {
    "url": "zh-TW/staff.html",
    "revision": "33f1b942f12c6c750903e31b61470aab"
  }, {
    "url": "zh-TW/staff/index.html",
    "revision": "33f1b942f12c6c750903e31b61470aab"
  }, {
    "url": "zh-TW/venue.html",
    "revision": "c250035517d858c6d5b1b0516de54dab"
  }, {
    "url": "zh-TW/venue/index.html",
    "revision": "c250035517d858c6d5b1b0516de54dab"
  }, {
    "url": "favicon.svg",
    "revision": "481a70df0b95472a1f4b2223c1a6b8f5"
  }, {
    "url": "manifest.webmanifest",
    "revision": "8c75f3e785ec63f5510e3a7d0c61771b"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/.*\.(jpg|png|svg|json|js|xml|pdf)$/]
  }));
  workbox.registerRoute(/^https:\/\/script\.google\.com\/.*/i, new workbox.NetworkFirst({
    "cacheName": "room-status-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 2,
      maxAgeSeconds: 2592000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200, 301]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/coscup\.org\/2023\/json\/.*/i, new workbox.NetworkFirst({
    "cacheName": "json-data-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 432000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200, 301]
    })]
  }), 'GET');
  workbox.initialize({});

}));
