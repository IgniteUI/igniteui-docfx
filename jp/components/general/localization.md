---
title: ローカライズ (i18n) - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular ローカライズ メカニズムはコンポーネントの文字列をローカライズ/変更する機能をサポートします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ、ネイティブ Angular コンポーネント
_language: ja
---

# ローカライズ (i18n)

現在、Ignite UI for Angular は、次の言語とスクリプトのリソース文字列で出荷されます: ブルガリア語、チェコ語、デンマーク語、オランダ語、英語、フランス語、ドイツ語、ハンガリー語、イタリア語、日本語、韓国語、ノルウェー語、ポーランド語、ポルトガル語、ルーマニア語、スペイン語、スウェーデン語、トルコ語、繁体字中国語、簡体字中国語。これらは、`igniteui-angular` のデフォルトのローカライズとして提供される英語を除き、`igniteui-angular-i18n` パッケージ経由で利用できます。

最小限のコードで Ignite UI for Angular コンポーネントの文字列を簡単にローカライズできます。

## Angular ローカライズの例

<code-view style="height:550px" 
           explicit-editor="csb"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/services/localization-all-resources" 
           alt="Angular ローカライズの例">
</code-view>

>注: サンプルに含まれているヒンディー語 (HI) は、説明のみを目的としており、カスタム ローカライズ オブジェクトを渡す可能性を強調するためのものです。このサンプルでは、集計用にローカライズされたいくつかの文字列のみが含まれています。詳細については、以下の[独自のローカライズされたリソースを使用する](#独自のローカライズされたリソースを活用する)セクションを参照してください。

## 使用方法

### npm パッケージからローカライズしたリソースを読み込む

次のように、`igniteui-angular-i18n` パッケージで利用可能な言語の 1 つでアプリケーションをローカライズできます。

`npm install igniteui-angular-i18n --save-dev` を実行してパッケージをインストールします。

目的の言語のリソース文字列をインポートし、コンポーネントの `resourceStrings` 入力を使用してコンポーネント インスタンスの文字列を変更します。

```html
<igx-grid [data]="data" [resourceStrings]="resourcesDE" [locale]="locale">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>German Locale</igx-grid-toolbar-title>
    </igx-grid-toolbar>
    <igx-column field="ProductName" header="Product Name" [groupable]="true">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" [hasSummary]="true"
        [dataType]="'currency'" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeDE from '@angular/common/locales/de';
import { GridResourceStringsDE } from 'igniteui-angular-i18n';

@Component({
    selector: 'app-locale',
    styleUrls: ['./locale.component.scss'],
    templateUrl: 'locale.component.html'
})
export class LocaleComponent implements OnInit {
    public resourcesDE = GridResourceStringsDE;
    public locale = 'DE';
    public data: any[];

    constructor() {
        registerLocaleData(localeDE);
    }
}
```

あるいは、対応するリソース オブジェクトを渡して `changei18n()` 関数を呼び出して、すべてのコンポーネントのローカライズを変更することもできます。

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n } from "igniteui-angular";
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        changei18n(IgxResourceStringsJA);
    }
}
```

>注: より多くの言語を含む [`igniteui-angular-i18n`](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n) パッケージに自由にコントリビュート してください。

### 独自のローカライズされたリソースを活用する
`changei18n` 関数は `IResourceStrings` オブジェクトを必要とします。使用したい言語が `igniteui-angular-i18n` パッケージで利用できない場合、または単に特定の文字列を変更したい場合は、必要な言語とコンポーネントの文字列リソースを含むカスタム オブジェクトを渡すことができます。これにより、igniteui-angular コンポーネントのグローバル i18n が変更されます。

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, IGridResourceStrings } from "igniteui-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public partialCustomHindi: IGridResourceStrings;

    public ngOnInit(): void {
        this.partialCustomHindi = {
            igx_grid_summary_count: 'गणना',
            igx_grid_summary_min: 'न्यून',
            igx_grid_summary_max: 'अधिक',
            igx_grid_summary_sum: 'योग',
            igx_grid_summary_average: 'औसत'
        };
        // This will change all grid application instances' strings to the newly provided ones
        changei18n(this.partialCustomHindi);
    }
}
```

または、現在利用可能なすべてのコンポーネント リソース文字列を取得することもできます。各コンポーネントには、ローカライズ可能な文字列を含むオブジェクトがあります。ローカライズするために値を置き換えることができ、オブジェクトをパラメーターとして `changei18n` 関数に渡すことができます。

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, GridResourceStringsEN, TimePickerResourceStringsEN } from "igniteui-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        const currentRS = {
            ...GridResourceStringsEN,
            ...TimePickerResourceStringsEN
        };

        for (const key of Object.keys(currentRS)) {
            currentRS[key] = '[Localized] '+ currentRS[key];
        }

        changei18n(currentRS);
    }
}
```

### コンポーネントの特定のインスタンスの文字列をローカライズ

単一の `igx-grid` インスタンスのみをローカライズする方法があります。`resourceStrings` プロパティを使用し `IGridResourceStrings` の新しいインスタンスを設定します。

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

### 利用可能なリソース文字列

* [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/BG/resources.ts)
* [IgxResourceStringsCS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/CS/resources.ts)
* [IgxResourceStringsDA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DA/resources.ts)
* [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DE/resources.ts)
* [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ES/resources.ts) 
* [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/FR/resources.ts) 
* [IgxResourceStringsHU](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/HU/resources.ts)
* [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/IT/resources.ts) 
* [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/JA/resources.ts) 
* [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/KO/resources.ts)
* [IgxResourceStringsNB](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NB/resources.ts)
* [IgxResourceStringsNL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NL/resources.ts)
* [IgxResourceStringsPL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PL/resources.ts)
* [IgxResourceStringsPT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PT/resources.ts)
* [IgxResourceStringsRO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/RO/resources.ts)
* [IgxResourceStringsSV](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/SV/resources.ts)
* [IgxResourceStringsTR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/TR/resources.ts)
* [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANS/resources.ts) 
* [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANT/resources.ts)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
* [Ignite UI for Angular **ResourceStrings** (英語)](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n)
