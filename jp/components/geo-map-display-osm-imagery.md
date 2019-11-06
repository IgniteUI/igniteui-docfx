---
title: Map |データ可視化ツール |Ignite UI for Angular |オープンストリートマップ |Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## オープン ストリート マップからの画像のバインド

Open Street Maps は、世界中の OpenStreetMap© のコントリビューターが共同で作成した無料の地理的画像マッピングサービスです。これは、構成オプションなしで、道路地図スタイル限定で世界の地理的画像を提供します。この地理的画像サービスは、<a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> に直接アクセスして利用できます。
デフォルトでは、Ignite UI for Angular Map コンポーネントは、OpenStreetMapImagery クラスを使用して、地図の背景コンテンツにオープンストリートマップの地理的画像を表示します。したがって、Open Street Maps から地理的画像を表示するように、コントロールを構成する必要はありません。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-display-osm-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-osm-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="geo-map-display-osm-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コード スニペット

このコード例では、マップ コンポーネントの `BackgroundContent` を OpenStreetMap© コントリビューターの地理画像を提供する `OpenStreetMapImagery` オブジェクトに明示的に設定します。
