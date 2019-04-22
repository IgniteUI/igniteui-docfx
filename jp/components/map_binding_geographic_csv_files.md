---
title: マップ | データ可視化ツール | Ignite UI for Angular | ジオグラフィック CSV データ | Infragistics
_description: マップを死傷してビューモデルの地理的位置や CSV ファイルからロードされた地理的位置を含むデータを表示できます。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: map, Ignite UI for Angular, infragistics
_language: ja
---

## Binding CSV Files with Geographic Locations

Ignite UI for Angular Map コンポーネントを使用すると、さまざまな種類のファイルからロードされた地理データをプロットできます。たとえば、カンマ区切り値 (CSV) ファイルから地理的な場所を読み込むことができます。

### デモ

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-data-csv-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-data-csv' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-csv-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### データ例

CSV ファイルからのデータの例:

### コード スニペット

次のコードは、マップコンポーネント内の `GeographicHighDensityScatterSeries` を、ロードされた CSV ファイルから作成された地理的位置を含むオブジェクトの配列にバインドします。
