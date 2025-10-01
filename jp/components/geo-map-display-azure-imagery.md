---
title: Angular マップ | データ可視化ツール | Azure 画像の表示 | インフラジスティックス
_description: Infragistics の Angular を使用して Microsoft Azure Maps からの画像を表示します。Angular マップのチュートリアルを是非お試しください!
_keywords: Angular map, azure maps, Ignite UI for Angular, Infragistics, imagery tile source, map background, Angular マップ, azure マップ, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ["XamGeographicMap", "AzureMapsMapImagery"]
_language: ja
---

# Angular Azure Maps からの画像の表示

Angular `AzureMapsMapImagery` は、Microsoft® が提供する地理的画像マッピング サービスです。
世界の地理的画像タイルを複数のスタイルで供します。この地理的画像サービスは、<a href="https://azure.microsoft.com/ja-jp/products/azure-maps" target="_blank">www.azure.microsoft.com</a> ウェブサイトから直接アクセスできます。Ignite UI for Angular Map コンポーネントは、`AzureMapsMapImagery` クラスを使用して、地図の背景コンテンツに Azure Maps の地理的画像を表示します。

## Angular Azure Maps からの画像の表示例

<img src="../images/general/AzureMapsImagery.png" />

<div class="divider--half"></div>

<code-view style="height: 500px" alt="Angular Azure Maps からの画像の表示例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/display-azure-imagery"
                                                 github-src="maps/geo-map/display-azure-imagery">
</code-view>


## コード スニペット

以下のコード スニペットは、`AzureMapsMapImagery` クラスを使用して Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) で Azure Maps からの地理的画像タイルを表示する方法を示します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxAzureMapsMapImagery } from 'igniteui-angular-maps';
// ...
const tileSource = new IgxAzureMapsMapImagery();
tileSource.apiKey = "YOUR_Azure_MAPS_API_KEY";
tileSource.imageryStyle = AzureMapsImageryStyle.LabelsRoad; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Aerial; // or
tileSource.imageryStyle = AzureMapsImageryStyle.Road;

this.map.backgroundContent = tileSource;
```

## プロパティ

以下の表で、`AzureMapsMapImagery` クラスのプロパティを説明します。

| プロパティ名  | プロパティ タイプ   | 説明   |
|----------------|-----------------|---------------|
|`ApiKey`|string|Azure Maps 画像サービスで必要となる API キーを設定するためのプロパティを表します。このキーは <a href="https://azure.microsoft.com/ja-jp/products/azure-maps" target="_blank">azure.microsoft.com</a> ウェブサイトから取得してください。|
|`ImageryStyle`|`AzureMapsImageryStyle`|Azure Maps 画像タイルのマップ スタイルを設定するプロパティを表します。このプロパティは、以下の `AzureMapsImageryStyle` 列挙値に設定できます。 <ul><li> Aerial - 道路またはラベルのオーバーレイなしの Aerial 地図スタイルを指定します</li> <li> LabelsRoad - 道路およびラベルのオーバーレイ付き航空地図スタイルを指定します</li><li> Road - 空中オーバーレイなしの道路マップ スタイルを指定します</li></ul>|
|`AzureImageryRestUri`|string|TilePath と SubDomain の位置を指定する Azure Imagery REST URI を設定するためのプロパティを表します。これはオプションのプロパティです。指定されていない場合、デフォルトの REST URI を使用します。|
|`CultureName`|string|タイル ソースのカルチャ名を設定するためのプロパティを表します。|
|`IsDeferredLoad`|boolean|Azure Maps サービスが有効なプロパティ値の割り当てで自動初期化するかどうかを指定するプロパティを表します。|
|`IsInitialized`|boolean|True に設定されているプロパティは、Azure Maps サービスからの地理的画像タイルが初期化され、マップ コンポーネントでのレンダリングの準備ができたときに発生することを表します。|
|`SubDomains`|`SubDomainsCollection`|URI サブ ドメインの画像コレクションを表します。|
|`TilePath`|string|マップ タイル画像 URI を設定するプロパティを表します。これは Azure Maps の実際の位置です。|

## API リファレンス

*   `AzureMapsImageryStyle`
*   `AzureMapsMapImagery`
*   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
