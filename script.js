const map = L.map('map').setView([34.92, 139.63], 16); // 適宜緯度経度を修正

// 1. OpenStreetMapベースレイヤーを追加（任意）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  minZoom: 16,
  maxZoom: 18
}).addTo(map);

// 2. 筆ポリゴンの読み込み
fetch('fude.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: { color: 'blue', weight: 1, fillOpacity: 0.1 }
    }).addTo(map);
  });

// 3. 差分1
fetch('overlap_result.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: { color: 'red', weight: 2, fillOpacity: 0.3 }
    }).addTo(map);
  });

// 4. 差分2
fetch('overlap_result1.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: { color: 'orange', weight: 2, fillOpacity: 0.3 }
    }).addTo(map);
  });
