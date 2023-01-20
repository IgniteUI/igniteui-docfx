---
title: Angular マップ | データ可視化ツール | Open Street Maps 画像の表示 | インフラジスティックス
_description: インフラジスティックスの Angular を使用して OSM Maps からの画像を表示します。Ignite UI for Angular マップ チュートリアルを是非お試しください!
_keywords: Angular map, OSM, Ignite UI for Angular, Infragistics, imagery tile source, map background, Angular マップ, インフラジスティックス, 画像タイル ソース, マップ背景
mentionedTypes: ['XamGeographicMap']
_language: ja
---

# Angular オープン ストリート マップ画像の表示

Angular [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html) は、世界中の OpenStreetMap© のコントリビューターが共同で作成した無料の地理的画像マッピングサービスです。これは、構成オプションなしで、道路地図スタイル限定で世界の地理的画像を提供します。この地理的画像サービスは、<a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> に直接アクセスして利用できます。
デフォルトでは、Ignite UI for Angular マップ コンポーネントには、Open Street Maps の地理的画像が既に表示されています。したがって、Open Street Maps から地理的画像を表示するように、コントロールを構成する必要はありません。

## Angular オープン ストリート マップ画像の表示の例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-display-osm-imagery"
           alt="Angular オープン ストリート マップ画像の表示の例"
           github-src="maps/geo-map/display-osm-imagery">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/maps/geo-map/display-osm-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/maps/geo-map/display-osm-imagery?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

<div class="divider--half"></div>

## コード スニペット

このコード例では、マップ コンポーネントの `BackgroundContent` を OpenStreetMap© コントリビューターの地理画像を提供する [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html) オブジェクトに明示的に設定します。

```html
<igx-geographic-map #map
    width="100%"
    height="100%"
    zoomable="true" >
</igx-geographic-map>
```

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxOpenStreetMapImagery } from 'igniteui-angular-maps';
// ...
public map: IgxGeographicMapComponent;

const tileSource = new IgxOpenStreetMapImagery();
this.map.backgroundContent = tileSource;
```

## API リファレンス

-   `BackgroundContent`
-   [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html)
