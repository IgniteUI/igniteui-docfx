---
title: Map |データ可視化ツール|Ignite UI for Angular |Bing Maps|インフラジスティックス
_description: マップで Bing Mapsの画像を表示できます。詳細については、デモと使用方法をご覧ください。
_keywords: map, Ignite UI for Angular, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---

## Bing Maps 画像の表示

[`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) は、Microsoft® 社が提供する地理的画像マッピング サービスです。 世界の地理的画像タイルを 3 以上提供します。この地理的画像サービスは、<a href="http://www.bing.com/maps" target="_blank">www.bing.com/maps</a> に直接アクセスして利用できます。Ignite UI for Angular map コンポーネントは、[`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) クラスを使用して、地図の背景コンテンツに Bing Maps の地理的画像を表示します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-display-bing-imagery-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-display-bing-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-display-bing-imagery-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### コード スニペット

以下のコード スニペットは、[`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) を使用して [`IgxGeographicMapComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) で Bing Maps からの地理的画像を表示する方法を示します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { BingMapsMapImagery } from "igniteui-angular-maps/ES5/igx-bing-maps-map-imagery";
// ...
const tileSource = new BingMapsMapImagery();
let tileUri = tileSource.actualBingImageryRestUri;

// resolving BingMaps uri based on HTTP protocol of hosting website
const isHttpSecured = window.location.toString().startsWith("https:");
if (isHttpSecured) {
    tileUri = tileUri.replace("http:", "https:");
} else {
    tileUri = tileUri.replace("https:", "http:");
}
tileSource.bingImageryRestUri = tileUri;

this.map.backgroundContent = tileSource;
```

### プロパティ

以下の表で、[`BingMapsMapImagery`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html) クラスのプロパティを説明します。

| プロパティ名                                                                                                                | プロパティ タイプ                                                                                                        | 概要                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`apiKey`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html#apikey)             | string                                                                                                           | Bing Maps 画像サービスで必要となる API キーを設定するためのプロパティを表します。このキーは <a href="http://www.bingmapsportal.coms" target="_blank">www.bingmapsportal.com</a> ウェブサイトから取得してください。                                                                                                                                                                                                                                 |
| [`imageryStyle`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/bingmapsmapimagery.html#imagerystyle) | [`BingMapsImageryStyle`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/bingmapsimagerystyle.html) | Bing Maps 画像タイルのマップ スタイルを設定するプロパティを表します。このプロパティは、以下の [`BingMapsImageryStyle`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/bingmapsimagerystyle.html) 列挙値に設定できます。Aerial - 道路またはラベルオーバーレイなしの Aerial マップ スタイルを指定します。<ul><li> Aerial - 道路およびラベル付きの衛星地図スタイルを指定します。</li> <li> AerialWithLabels - 道路およびラベル付きの衛星地図スタイルを指定します。</li><li> Road - 衛星オーバーレイなしの道路地図スタイルを指定します。</li></ul> |
| `BingImageryRestUri`                                                                                                  | string                                                                                                           | TilePath と SubDomain の位置を指定する Bing Imagery REST URI を設定するためのプロパティを表します。これはオプションのプロパティです。指定されていない場合、デフォルトの REST URI を使用します。                                                                                                                                                                                                                                                                  |
| `CultureName`                                                                                                         | string                                                                                                           | タイル ソースのカルチャ名を設定するためのプロパティを表します。                                                                                                                                                                                                                                                                                                                                                            |
| `IsDeferredLoad`                                                                                                      | boolean                                                                                                          | Bing Maps サービスが有効なプロパティ値の割り当てで自動初期化するかどうかを指定するプロパティを表します。                                                                                                                                                                                                                                                                                                                                   |
| `IsInitialized`                                                                                                       | boolean                                                                                                          | True に設定されているプロパティは、Bing Maps サービスからの地理的画像タイルが初期化され、マップ コンポーネントでのレンダリングの準備ができたときに発生することを表します。                                                                                                                                                                                                                                                                                               |
| `SubDomains`                                                                                                          | `SubDomainsCollection`                                                                                           | URI サブ ドメインの画像コレクションを表します。                                                                                                                                                                                                                                                                                                                                                                  |
| `TilePath`                                                                                                            | string                                                                                                           | マップ タイル画像 URI を設定するプロパティを表します。これは Bing Maps の実際の位置です。                                                                                                                                                                                                                                                                                                                                       |
