---
title: ズーム スライダー | データ可視化ツール | Ignite UI for Angular | データ バインディング| インフラジスティックス
_description: データ チャートで ZoomSlider を使用して、データのサブセットを簡単に表示します。最小値および最大値を表す 2 つのハンドルで表示します。
mentionedTypes: ['ZoomSlider, XamDataChart']
_language: ja
---

### ズーム スライダー

ZoomSlider コントロールは、範囲対応コントロールにズーム機能を提供します。ZoomSlider には、水平スクロールバー、全範囲の縮小表示、サイズ変更可能なズーム範囲ウィンドウの機能があります。ZoomSlider は、スタンド アロン コントロールとして機能できません。または、DataChart や CategoryChart などの範囲ベースのコントロールの拡張機能として動作します。

### サンプル

<div class="sample-container loading" style="height: 600px">
    <iframe id="zoomslider-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/zoomslider-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="zoomslider-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 使用方法

| 機能名                    | 説明                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------- |
| スクロールバーのナビゲーション        | ZoomSlider スクロールバーの組み込み機能を使用して、スケールを変更してデータ範囲をスクロールできます。                                |
| パンとズーム                 | サムパッドの端をドラッグして表示スケールを調節し、現在の表示範囲を広げる (ズーム アウト)、または狭くする (ズーム イン) ことができます。                |
| 複数のユーザー インタラクション オプション | マウスによるすべてのインタラクションは、タッチ操作 (ほとんどはキーボードを介した操作) でもサポートされます。詳細は、ユーザー インタラクションと操作性を参照してください。 |
| タッチ サポート               | タッチ対応デバイスでは、ZoomSlider のすべての機能を使用できます。すべてのマウス操作は、タッチ環境でもサポートされます。                       |
| 拡張性                    | ZoomSlider コントロールは、追加設定なしで DataChart コントロール をサポートします。                                   |
| 構成可能なズーム範囲ウィンドウ        | ズーム範囲ウィンドウの初期幅、初期位置、最小サイズは、構成可能です。                                                      |

### 依存関係

chart パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### モジュールの要件

[`IgxZoomSliderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxzoomslidercomponent.html) は以下のモジュールを要求します。

```ts
import { IgxZoomSliderModule } from 'igniteui-angular-charts';
import { IgxZoomSliderComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxZoomSliderModule,
        // ...
    ]
})
export class AppModule {}
```

### コード スニペット

以下のコードは、ZoomSlider を設定する方法を示します。

```html
<igx-zoom-slider
  width="100%"
  height="150px">
</igx-zoom-slider>
```

<div class="divider--half"></div>
