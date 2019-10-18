---
title: マップ | データ可視化ツール | Ignite UI for Angular | ジオグラフィック CSV データ | Infragistics
_description: マップを死傷してビューモデルの地理的位置や CSV ファイルからロードされた地理的位置を含むデータを表示できます。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: map, Ignite UI for Angular, infragistics, マップ,
_language: ja
---

## 地理的位置と CSV ファイルのバインド

Ignite UI for Angular Map コンポーネントは、さまざまな種類のファイルからロードされた地理データをプロットできます。たとえば、カンマ区切り値 (CSV) ファイルから地理的な場所を読み込むことができます。

### デモ

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-data-csv-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-csv' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-csv-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### データ例

CSV ファイルからのデータの例:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

### コード スニペット

次のコードは、マップコンポーネント内の [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) を、ロードされた CSV ファイルから作成された地理的位置を含むオブジェクトの配列にバインドします。
