---
title: マップ|データ可視化ツール|Ignite UI for Angular|Bing Maps|Infragistics
_description: マップを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics
_language: ja
---

## Bing Maps からの画像のバインド

Bing Maps は Microsoft® のライセンス付きの地理画像マッピング サービスです。この地理的画像サービスは、<a href="http://www.bing.com/maps" target="blank"> www.bing.com/maps </a> Webサイトから直接アクセスできます。Ignite UI for Angular map コンポーネントは、`BingMapsMapImagery` クラスを使用して、地図の背景コンテンツに Bing Maps の地理的画像を表示します。ただし、map コンポーネントはデフォルトで Open Street Maps の地理画像をマップ背景コンテンツに表示します。Bing Maps の地理画像を表示するには、コントロールを構成する必要があります。Bing Maps の地理的画像を使用する前に、<a href="http://www.bingmapsportal.coms" target="_blank"> www.bingmapsportal.com </a> から Bing Map API キーを登録して取得する必要があります。 BingMapsMapImagery オブジェクトの ApiKey プロパティを設定するには、Bing Maps の API キーを使用する必要があります。

### デモ

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-bing-imagery-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-bing-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-bing-imagery-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

以下の表で、地理的シリーズのタイプごとに必要となるデータ構造を簡単に説明します。

| プロパティ名               | プロパティ型                       | 説明                                                                                                                                                                                                                                                                 |
| -------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ApiKey`             | 文字列                          | Bing Maps 画像サービスで必要となる API キーを設定するためのプロパティを表します。このキーは <a href="http://www.bingmapsportal.coms" target="blank"> www.bingmapsportal.com </a> ウェブサイトから取得してください。                                                                                                       |
| `BingImageryRestUri` | 文字列                          | TilePath と SubDomain の位置を指定する Bing Imagery REST URI を設定するためのプロパティを表します。これはオプションのプロパティです。指定されていない場合、デフォルトの REST URI を使用します。                                                                                                                                         |
| `CultureName`        | 文字列                          | タイル ソースのカルチャ名を設定するためのプロパティを表します。                                                                                                                                                                                                                                   |
| `ImageryStyle`       | BingMapsImageryStyle         | Bing Maps 画像タイルのマップ スタイルを設定するプロパティを表します。このプロパティは、次の BingMapsImageryStyle 列挙値に設定できます。<ul> <li> Aerial  - 道路またはラベルのオーバーレイなしの Aerial 地図スタイルを指定します</li> <li> AerialWithLabels  - 道路およびラベルのオーバーレイ付き航空地図スタイルを指定します。/ li> <li>道路 - 空中オーバーレイなしの道路マップ スタイルを指定します</li> </ul> |
| `IsDeferredLoad`     | Boolean                      | Bing Maps サービスが有効なプロパティ値の割り当てで自動初期化するかどうかを指定するプロパティを表します。                                                                                                                                                                                                          |
| `IsInitialized`      | Boolean                      | True に設定されているプロパティは、Bing Maps サービスからの地理的画像タイルが初期化され、マップ コンポーネントでのレンダリングの準備ができたときに発生することを表します。                                                                                                                                                                      |
| `SubDomains`         | ObservableCollection<string> | URI サブ ドメインの画像コレクションを表します。                                                                                                                                                                                                                                         |
| `TilePath`           | 文字列                          | マップ タイル画像 URI を設定するプロパティを表します。これは Bing Maps の実際の位置です。                                                                                                                                                                                                              |

### コード スニペット

次のコード スニペットは、Bing Maps の地理的画像をマップ コンポーネントの背景コンテンツに表示する方法を示しています。
