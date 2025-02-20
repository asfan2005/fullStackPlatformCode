const dataProgressiveWebMukammal = [
    {
        id: 1,
        title: "Service Worker Registration",
        code: `
// In index.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// service-worker.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});`,
        description: "Service Worker ro'yxatdan o'tkazish va keshni sozlash",
        result: `{
    "feature": "Service Worker",
    "benefits": [
        "Offline Access",
        "Cache Management",
        "Background Sync",
        "Push Notifications"
    ]
}`
    },
    {
        id: 2,
        title: "Web App Manifest",
        code: `
{
  "name": "My PWA App",
  "short_name": "PWA",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
        description: "Web App Manifest fayli sozlamalari",
        result: `{
    "feature": "Web Manifest",
    "properties": [
        "App Information",
        "Icons Configuration",
        "Display Settings",
        "Theme Colors"
    ]
}`
    },
    {
        id: 3,
        title: "Offline Data Storage",
        code: `
// IndexedDB usage
const dbName = 'MyPWADatabase';
const request = indexedDB.open(dbName, 1);

request.onupgradeneeded = event => {
  const db = event.target.result;
  const store = db.createObjectStore('notes', {
    keyPath: 'id',
    autoIncrement: true
  });
};

// Store data
function saveNote(note) {
  const db = request.result;
  const tx = db.transaction('notes', 'readwrite');
  const store = tx.objectStore('notes');
  store.add(note);
  return tx.complete;
}

// Retrieve data
function getNotes() {
  const db = request.result;
  const tx = db.transaction('notes', 'readonly');
  const store = tx.objectStore('notes');
  return store.getAll();
}`,
        description: "IndexedDB orqali offline ma'lumotlarni saqlash",
        result: `{
    "feature": "Offline Storage",
    "technologies": [
        "IndexedDB",
        "Cache Storage",
        "Local Storage",
        "Data Persistence"
    ]
}`
    },
    {
        id: 4,
        title: "Push Notifications",
        code: `
// Request notification permission
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    return subscription;
  }
}

// Handle push event in service worker
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: 'icons/icon-192x192.png',
    badge: 'icons/badge-72x72.png',
    vibrate: [100, 50, 100]
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});`,
        description: "Push bildirishnomalarini sozlash va boshqarish",
        result: `{
    "feature": "Push Notifications",
    "components": [
        "Permission Handling",
        "Subscription Management",
        "Notification Display",
        "Service Worker Integration"
    ]
}`
    },
    {
        id: 5,
        title: "App Shell Architecture",
        code: `
import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import('./components/Header'));
const Navigation = lazy(() => import('./components/Navigation'));
const Content = lazy(() => import('./components/Content'));

function AppShell() {
  return (
    <div className="app-shell">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Navigation />
        <main>
          <Content />
        </main>
      </Suspense>
    </div>
  );
}

// Cache app shell in service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-shell-v1').then(cache => {
      return cache.addAll([
        '/',
        '/static/js/main.js',
        '/static/css/main.css',
        '/static/media/logo.png'
      ]);
    })
  );
});`,
        description: "App Shell arxitekturasini qo'llash",
        result: `{
    "feature": "App Shell",
    "elements": [
        "Core Structure",
        "Fast Loading",
        "Cached Resources",
        "Instant Navigation"
    ]
}`
    },
    {
        id: 6,
        title: "Background Sync",
        code: `
// Register sync event in service worker
self.addEventListener('sync', event => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

// Background sync implementation
async function syncMessages() {
  try {
    const db = await openDB('messages-store', 1);
    const pendingMessages = await db.getAll('pending-messages');
    
    for (const message of pendingMessages) {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
      
      if (response.ok) {
        await db.delete('pending-messages', message.id);
      }
    }
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

// Register background sync in app
async function registerSync() {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    const registration = await navigator.serviceWorker.ready;
    try {
      await registration.sync.register('sync-messages');
      console.log('Background sync registered!');
    } catch (err) {
      console.error('Background sync registration failed:', err);
    }
  }
}`,
        description: "Fonda sinxronlash va offline ma'lumotlarni yuborish",
        result: `{
    "feature": "Background Sync",
    "capabilities": [
        "Offline Data Sync",
        "Network Resilience",
        "Queue Management",
        "Automatic Retry"
    ]
}`
    },
    {
        id: 7,
        title: "Cache Strategies",
        code: `
// Service worker with multiple cache strategies
self.addEventListener('fetch', event => {
  const strategies = {
    // Cache first, then network
    cacheFirst: async (request) => {
      const cache = await caches.open('static-cache-v1');
      const cached = await cache.match(request);
      if (cached) return cached;
      const networked = await fetch(request);
      cache.put(request, networked.clone());
      return networked;
    },

    // Network first, fallback to cache
    networkFirst: async (request) => {
      try {
        const networked = await fetch(request);
        const cache = await caches.open('dynamic-cache-v1');
        cache.put(request, networked.clone());
        return networked;
      } catch (error) {
        const cached = await caches.match(request);
        return cached || Promise.reject('no-match');
      }
    },

    // Stale while revalidate
    staleWhileRevalidate: async (request) => {
      const cache = await caches.open('swr-cache-v1');
      const cached = await cache.match(request);
      
      const networked = fetch(request)
        .then(response => {
          cache.put(request, response.clone());
          return response;
        });

      return cached || networked;
    }
  };

  // Apply strategies based on request type
  if (event.request.url.includes('/api/')) {
    event.respondWith(strategies.networkFirst(event.request));
  } else if (event.request.url.includes('/static/')) {
    event.respondWith(strategies.cacheFirst(event.request));
  } else {
    event.respondWith(strategies.staleWhileRevalidate(event.request));
  }
});`,
        description: "Turli xil kesh strategiyalarini qo'llash",
        result: `{
    "feature": "Cache Strategies",
    "types": [
        "Cache First",
        "Network First",
        "Stale While Revalidate",
        "Cache Only"
    ]
}`
    },
    {
        id: 8,
        title: "Workbox Implementation",
        code: `
// service-worker.js with Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.setConfig({ debug: false });

// Cache page shells
workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1.0.0' },
  { url: '/offline.html', revision: '1.0.0' },
  { url: '/styles/main.css', revision: '1.0.0' },
  { url: '/scripts/app.js', revision: '1.0.0' }
]);

// Route for images
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

// Route for API calls
workbox.routing.registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 24 * 60 * 60 // 24 hours
      })
    ]
  })
);

// Background sync for form submissions
workbox.routing.registerRoute(
  ({ url }) => url.pathname === '/api/submit-form',
  new workbox.strategies.NetworkOnly({
    plugins: [
      new workbox.backgroundSync.BackgroundSyncPlugin('form-queue', {
        maxRetentionTime: 24 * 60 // 24 hours
      })
    ]
  }),
  'POST'
);`,
        description: "Workbox kutubxonasi yordamida PWA ni optimallash",
        result: `{
    "feature": "Workbox",
    "benefits": [
        "Simplified Cache Management",
        "Built-in Strategies",
        "Automatic Precaching",
        "Background Sync Support"
    ]
}`
    }
];

export default dataProgressiveWebMukammal;