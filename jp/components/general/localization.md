---
title: ローカライズ (i18n) - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular ローカライズ メカニズムはコンポーネントの文字列をローカライズ/変更する機能をサポートします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ、ネイティブ Angular コンポーネント
_language: ja
---

# ローカライズ (i18n)

現在、Ignite UI for Angular は、次の言語とスクリプトのリソース文字列で出荷されます: ドイツ語、フランス語、イタリア語、日本語、韓国語、スペイン語、繁体字中国語、簡体字中国語。これらは `igniteui-angular-i18n` パッケージを介して使用できます。

最小限のコードで Ignite UI for Angular コンポーネントの文字列を簡単にローカライズできます。

## Angular ローカライズの例
<div class="sample-container loading" style="height:800px">
    <iframe id="localization-all-resources-iframe" src="{environment:demosBaseUrl}/services/localization-all-resources" width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular ローカライズ例"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="localization-all-resources-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="localization-all-resources-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## 使用方法

### npm パッケージからローカライズしたリソースを読み込む

次のように、`igniteui-angular-i18n` パッケージで利用可能な言語の 1 つでアプリケーションをローカライズできます。

`npm install igniteui-angular-i18n--save-dev` を実行してパッケージをインストールします。

次に、目的の言語のリソース文字列をインポートし、対応するリソース オブジェクトを渡して `changei18n` 関数を呼び出します。

```typescript
// app.component.ts
...
import { changei18n } from "igniteui-angular";
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';
...
public ngOnInit(): void {
    ...
    changei18n(IgxResourceStringsJA);
    ...
}
```

>注: `igniteui-angular-i18n` パッケージに自由にコントリビュート してください。

### 独自のローカライズされたリソースを活用する
`changei18n` 関数は `IResourceStrings` オブジェクトを必要とします。使用したい言語が `igniteui-angular-i18n` パッケージで利用できない場合、または単に特定の文字列を変更したい場合は、必要な言語とコンポーネントの文字列リソースを含むカスタム オブジェクトを渡すことができます。これにより、app.module レベルの igniteui-angular コンポーネントのグローバル i18n が変更されます。App.module.ts だけでなくアプリ内どこでもローカライズ可能です。

```typescript
// app.component.ts
...
import { changei18n } from "igniteui-angular";
...

public customBG: IResourceStrings;
public ngOnInit(): void {
    ...
    this.customBG = {
        ...
        igx_grid_summary_count: 'Общ брой',
        igx_grid_summary_min: 'Минимум',
        igx_grid_summary_max: 'Максимум',
        igx_grid_summary_sum: 'Сума',
        igx_grid_summary_average: 'Средна стойност'
        ...
    };
    changei18n(this.customBG);
    ...
}
```

または、現在利用可能なすべてのリソース文字列を取得することもできます。`IResourceStrings` オブジェクトを返すグローバル関数 `getCurrentResourceStrings` があります。
ローカライズするために値を置き換えることができ、オブジェクトをパラメーターとして `changei18n` 関数に渡すことができます。

```typescript
// app.component.ts
...
import { changei18n } from "igniteui-angular";
...

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


## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings** (英語)](https://github.com/IgniteUI/igniteui-angular-i18n)
