---
title: Angular ページ レイアウトの管理 | ドック マネージャー | Ignite UI | インフラジスティックス
_description: ピン固定、サイズ変更、移動、非表示が可能なペインでドック マネージャーを使用して Angular アプリケーションのレイアウトをカスタマイズする方法を説明します。
_keywords: manage angular page layout, Ignite UI for Angular, Infragistics, Angular ページ レイアウトの管理, インフラジスティックス
_language: ja
---
## ドック マネージャー

Ignite UI Dock Manager コンポーネントは、ペインでアプリケーションのレイアウトを管理する方法を提供します。エンド ユーザーはペインをピン固定、サイズ変更、移動、非表示にすることでカスタマイズできます。

### デモ

<div class="sample-container loading" style="height: 600px">
    <iframe id="dock-manager-overview-iframe" src='{environment:demosBaseUrl}/layouts/dock-manager-sample' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>


### 使用方法
ドック マネージャーは標準の [Web コンポーネント](https://developer.mozilla.org/ja-JP/docs/Web/Web_Components)であり、Angular アプリケーションで使用できます。

以下の手順に従って、ドック マネージャーのパッケージを Angular プロジェクトに追加し、コンポーネントを使用するためにセットアップします。

最初に、`igniteui-dockmanager` パッケージをインストールします。

```cmd
npm install igniteui-dockmanager
```

次に、`CUSTOM_ELEMENTS_SCHEMA` スキーマを `AppModule` に含めます。

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
`main.ts` ファイルの `defineCustomElements()` 関数を呼び出します。

```typescript
import { AppModule } from "./app/app.module";
import { defineCustomElements } from "igniteui-dockmanager/loader";
import { enableProdMode } from '@angular/core';
import { environment } from ".environments/environment";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

defineCustomElements();
```

Angular コンポーネント テンプレートで Dock Manager コンポーネントを使用する準備ができました。タグ名を使用します。

```html
<igc-dockmanager>
</igc-dockmanager>
```

Dock Manager コンポーネントの使用方法の詳細については、[このトピック (英語)](https://www.infragistics.com//products/ignite-ui-web-components/web-components/components/dock-manager.html) を参照してください。

さまざまな Ignite UI for Angular コンポーネントをホストするペインで Dock Manager コンポーネントを使用する高度な例については、このバージョンの[データ分析サンプル](./general/framework-and-features/data-analysis.md#Dock-Manager-のデータ分析)を参照してください。