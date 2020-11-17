---
title: ローカライズ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular ローカライゼーション メカニズムはコンポーネントの文字列をローカライズ/変更する機能をサポートします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ、ネイティブ Angular コンポーネント
_language: ja
---

# ローカライズ

最小限のコードで Ignite UI for Angular コンポーネントの文字列を簡単にローカライズできます。

## Angular ローカライズ例
<div class="sample-container loading" style="height:550px">
    <iframe id="localization-sample-1-iframe" src="{environment:demosBaseUrl}/services/localization-sample-1" width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## 使用方法

### アプリケーション全体のローカライズ

すべてのリソース文字列を取得するには、`IResourceStrings` オブジェクトを返すグローバル関数 `getCurrentResourceStrings` があります。 
値はローカライズするために置き換えられます。次にオブジェクトはパラメーターとして `changei18n` 関数に渡して app.module レベルでコンポーネントのグローバル i18n を変更します。app.module.ts だけでなくアプリ内どこでもローカライズ可能です。

```typescript
// app.component.ts

public ngOnInit(): void {
    ...
    const currentRS = getCurrentResourceStrings();

    for (const key of Object.keys(currentRS)) {
    currentRS[key] = '[Localized]'+ currentRS[key];
    }

    changei18n(currentRS);
    ...
}
```
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-sample-src="{environment:demosBaseUrl}/services/localization-sample-2"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
</button>
</div>

### すべてのコンポーネントの特定の文字列をローカライズ

その他の方法としてすべてのコンポーネントの一部の文字列のみローカライズ/変更します。`IResourceStrings` タイプのローカライズ可能なコンポーネントに `resourceStrings` プロパティがあります。

```typescript
const currentRS = this.grid.resourceStrings;
currentRS.igx_grid_filter = '[Localized]Filter';
currentRS.igx_grid_filter_row_close = '[Localized]Close';
```

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-sample-src="{environment:demosBaseUrl}/services/localization-sample-3" 
        data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示
    </button>
</div>

### コンポーネントの特定のインスタンスの文字列をローカライズ

単一の `igx-grid` インスタンスのみをローカライズする方法があります。`resourceStrings` プロパティを使用し `IGridResourceStrings` の新しいインスタンスを設定します。

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="localization-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## ローカライズされたリソースを npm パッケージから読み込む

最初にリソース文字列を含むパッケージをインストールします。

`npm install igniteui-angular-i18n --save-dev`

日本語、韓国語またはスペイン語のリソース文字列を使用するには、以下のインポートをアプリケーションに追加して `changei18n` 関数を呼び出します。

```typescript
// app.component.ts

import { IgxResourceStringsJA } from 'igniteui-angular-i18n';
import { IgxResourceStringsKO } from 'igniteui-angular-i18n';
import { IgxResourceStringsES } from 'igniteui-angular-i18n';
...
public ngOnInit(): void {
    ...
    changei18n(IgxResourceStringsJA);
    ...
}
```

* [詳しい実装サンプルはこちら](https://kb.jp.infragistics.com/?p=535)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings** (英語) ](https://github.com/IgniteUI/igniteui-angular-i18n)
