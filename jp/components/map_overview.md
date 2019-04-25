---
title: マップ | データ可視化ツール | Ignite UI for Angular | Infragistics
_description: マップを使用すると、ビュー モデルからの地理的位置を含むデータ、またはシェープ ファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics
_language: ja
---

## マップ

Ignite UI for Angular Map コンポーネントを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープ ファイルからロードされた地理空間データを地理的画像マップに表示できます。

### デモ

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-overview-iframe" src='{environment:demosBaseUrl}/maps/geo-map-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

地図コンポーネントを使用すると、Bing Maps™ および Open Street Maps から地理的画像をレンダリングできます。マップは何万ものデータポイントをプロットし、コントロールがリアルタイム フィードを処理できるように数ミリ秒ごとにそれらを更新します。

マップの `IgxSeriesComponent` プロパティは、無制限の地理的シリーズのレンダリングをサポートするために使用されます。このプロパティは、地理的シリーズ オブジェクトのコレクションで、任意のタイプの地理的シリーズをそれに追加できます。たとえば、都市などの地理的位置をプロットするために `GeographicSymbolSeries`、またこれらの地理的位置の間の接続 (道路など) をプロットするために `GeographicPolylineSeries` を追加できます。

Map は、マウス、キーボード、またはコードビハインドを使用して、マップ コンテンツをナビゲートするためのカスタマイズ可能なナビゲーション動作を提供します。

### 依存関係

地理マップコンポーネントを使用するには、はじめにこれらのパッケージをインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**
-   **npm install --save igniteui-angular-maps**

<!--
> [!NOTE]
> Angular:
>
> マップが `NgModule` としてエクスポートされるため、`AppModule` に _IgxMapModule_ をインポートする必要があります。
> `AppModule`:


> [!NOTE]
> WebComponents:
>
> マップを使用するには、読み込み中にアプリに
> `Ig$MapModule` を登録する必要があります。

> [!NOTE]
> React:
>
> マップを使用するには、読み込み中にアプリに
> `Ig$MapModule` を登録する必要があります。
-->

```typescript
// app.module.ts
import {IgxMapModule} from 'igniteui-angular-maps/ES5/igx-map-module'

@NgModule({
    imports: [
        // ...
        IgxMapModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

マップ モジュールがインポートされたので、次のステップは地理的地図を作成することです。次のコードは、これを実行して地図内でズームを有効にする方法を示しています。
