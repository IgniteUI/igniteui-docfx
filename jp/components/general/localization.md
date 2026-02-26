---
title: ローカライズ (i18n) - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular ローカライズ メカニズムはコンポーネントの文字列をローカライズ/変更する機能をサポートします。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ、ネイティブ Angular コンポーネント
_language: ja
---

# ローカライズ (i18n)

## ローカライズ (i18n)

>注: 20.2.0 以降、これが Ignite UI for Angular コンポーネントにローカライズを適用する推奨方法です。

この新しいローカライズでは、ローカライズ文字列の要件を減らしながらより多くの機能を提供し、`Intl` に基づいた利用可能なすべてのロケールの書式設定が含まれています。

現在、Ignite UI for Angular は次の言語のリソース文字列を提供しています: `ブルガリア語`、`チェコ語`、`デンマーク語`、`オランダ語`、`英語`、`フランス語`、`ドイツ語`、`ハンガリー語`、`イタリア語`、`日本語`、`韓国語`、`ノルウェー語`、`ポーランド語`、`ポルトガル語`、`ルーマニア語`、`スペイン語`、`スウェーデン語`、`トルコ語`、`繁体字中国語`、`簡体字中国語`。これらは、`igniteui-angular` のデフォルトのローカライズとして提供される英語を除き、`igniteui-angular-i18n` パッケージ経由で利用できます。

### Angular ローカライズの例

<code-view style="height:550px"
           explicit-editor="csb"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/services/localization-all-resources/"
           alt="Angular ローカライズの例">
</code-view>

>注: サンプルに含まれているヒンディー語 (HI) は、説明のみを目的としており、カスタム ローカライズ オブジェクトを渡す可能性を強調するためのものです。このサンプルでは、集計用にローカライズされたいくつかの文字列のみが含まれています。詳細については、以下の[カスタム ローカライズ リソース文字列](#カスタム-ローカライズ-リソース文字列)セクションをご覧ください。

### ロケール

ロケールとは、地球上のさまざまな言語と地域を定義する一般的な文字列を指します。この場合、[BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) タグ定義に基づいており、基本的なものの多くは [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) で説明されています。言語のリストについては、[ISO 639 言語標準](https://www.loc.gov/standards/iso639-2/)も参照してください。

これは、日付と数値の書式設定と、コンポーネントが使用するローカライズされたリソース文字列の両方に影響します。Ignite UI for Angular コンポーネントのデフォルトのロケールは `en-US` です。

ロケールを設定する方法はいくつかあります。グローバルに設定するか、コンポーネントごとに設定できます。

#### グローバル API

`igniteui-angular` パッケージから提供される `setCurrentI18n` メソッドを使用して、グローバルに使用されるロケールを設定できます。これは、すべてのコンポーネントで使用される書式設定とリソース文字列の両方に影響します。

```ts
setCurrentI18n('de');
```

`Intl` でサポートされている可能なロケールの全範囲をサポートしています。有効またはサポートされていないロケールを指定した場合、有効なロケールに変更するまで、デフォルトの `en-US` ロケールが使用されます。

一般的に、コンポーネントもローカライズされるように、使用する予定のタグの言語、地域、およびスクリプトの下にリソースを登録する必要があります。詳細については、[地域と文字](#地域と文字)セクションを参照してください。

#### `lang` 属性

この方法では、`HTML` タグの `lang` グローバル属性を通じてローカライズを設定できます。この属性は監視されており、変更されると、レンダリングされたすべてのコンポーネントが現在設定されている言語にリソース文字列を更新します。使用されるタグに関するすべてのルールは、上記の説明と同様に適用されます。

> 注: これはルート レベルでのみ機能し、ページ上の内部要素では機能しません。

```html
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

#### Angular API

Angular の組み込み [LOCALE_ID](https://angular.dev/api/core/LOCALE_ID) トークンを使用して、アプリケーション全体のロケールを設定することもできます。提供されたタグは、API の処理方法と比較して、コンポーネントに対して同じように機能します。

#### コンポーネントごと

各コンポーネントには独自の `locale` プロパティもあり、これを指定すると、グローバルロケールの影響を受けなくなります。

```html
<igx-grid [data]="data" locale="ja">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

### 書式設定

ロケールは、前述のように、日付、数値、およびそれらに関連する一部の文字列をレンダリングするすべての Ignite UI for Angular コンポーネントの書式設定に影響します。以前は、アプリで使用できるようにするために、Angular が提供する[グローバル バリアント](https://angular.dev/guide/i18n/import-global-variants)のロケール データをインポートする必要がありました。これはもう必要なく、デフォルトでローカライズに組み込まれているため、動作させるために何もインポートして登録する必要はありません。

この機能を導入したばかりなので、Angular の方法は引き続き利用可能で、以前と同様に非常にうまく機能しており、すでに使用している場合は依然としてデフォルトの方法です。

ただし、これから始める場合は、アプリ構成に `provideIgniteIntl()` メソッドを追加するだけで済みます。これにより、Angular のロケール データをインポートしている場合でも、新しい書式設定を使用することが保証されます:

```ts
export const appConfig: ApplicationConfig = {
    providers: [
        //...
        provideIgniteIntl()
    ]
};
```

#### 日付の書式

IgxGrid や IgxDatePicker などのコンポーネントでは、日付書式を指定できます (グリッドの場合は列ごと)。以下のリストは、設定可能な利用可能なオプション、または独自のカスタム書式を構築するために使用できるオプションを示しています。

利用可能な事前定義書式オプション:

| オプション | 相当形式 | 例 (en-US ロケールの場合) |
| ------ | --------------| --------------------------------|
| 'short' | 'M/d/yy, h:mm a' | 6/15/15, 9:03 AM |
| 'medium' | 'MMM d, y, h:mm:ss a' | Jun 15, 2015, 9:03:01 AM |
| 'long' | 'MMMM d, y, h:mm:ss a z' | June 15, 2015 at 9:03:01 AM GMT+1 |
| 'full' | 'EEEE, MMMM d, y, h:mm:ss a zzzz' | Monday, June 15, 2015 at 9:03:01 AM GMT+01:00 |
| 'shortDate' | 'M/d/yy' | 6/15/15 |
| 'mediumDate' | 'MMM d, y' | Jun 15, 2015 |
| 'longDate' | 'MMMM d, y' | June 15, 2015 |
| 'fullDate' | 'EEEE, MMMM d, y' | Monday, June 15, 2015 |
| 'shortTime' | 'h:mm a' | 9:03 AM |
| 'mediumTime' | 'h:mm:ss a' | 9:03:01 AM |
| 'longTime' | 'h:mm:ss a z' | 9:03:01 AM GMT+1 |
| 'fullTime' | 'h:mm:ss a zzzz' | 9:03:01 AM GMT+01:00 |

カスタム形式オプション:

| 日付フィールド | 値 | 説明 | 例 |
|-|-|-|-|
| 曜日 | c, cc, ccc, E, EE, EEE | 曜日の短縮表示 | Tue |
| | cccc, EEEE | 曜日の完全表示 | Tuesday |
| | ccccc, EEEEE | 曜日の最小表示 | T |
| 日| d | 数値表示 (可能な場合は 1 桁) | 1, 10 |
| | dd | 常に 2 桁表示 (ゼロ埋め)| 01, 10 |
| 月 | M, L | 数値表示 (可能な場合は 1 桁) | 8, 12 |
| | MM, LL | 常に 2 桁表示 (ゼロ埋め)| 08, 12 |
| | MMM, LLL | 月名の短縮表示 | Oct |
| | MMMM, LLLL | 月名の完全表示 | October |
| | MMMMM, LLLLL | 月名の最小表示 | O |
| 年 | y, yyy, yyyy | 数値表示 | 1, 24, 632, 2025 |
| | yy | 2 桁表示 (可能な場合はゼロ埋め) | 01, 24, 32, 25 |
| ISO 8601 年  | Y, YYY, YYYY | 数値表示 | 1, 24, 632, 2025 |
| | YY | 2 桁表示 (可能な場合はゼロ埋め) | 01, 24, 32, 25 |
| 年代 | G, GG, GGG | 短縮表示 | AD, BC |
| | GGGG | 完全表示 |  Anno Domini, Before Christ|
| | GGGGG | 最小表示 | A, B |
| 分 | m | 数値表示 (可能な場合は 1 桁) | 1, 5, 22 |
| | mm | 2 桁表示 (ゼロ埋め)| 01, 05, 22 |
| 時 (0-11) | h | 数値表示 (可能な場合は 1 桁) | 8, 12 |
| | hh | 2 桁表示 (ゼロ埋め) | 08, 13 |
| 時 (0-23) | H | 数値表示 (可能な場合は 1 桁) | 8, 21 |
| | HH | 2 桁表示 (ゼロ埋め)| 08, 21 |
| 時 (0-11) | K | 数値表示 (可能な場合は 1 桁) | 0, 11 |
| | KK | 2 桁表示 (ゼロ埋め) | 00, 11 |
| 秒 | s | 数値表示 (可能な場合は 1 桁) | 0...59 |
| | ss | 2 桁表示 (ゼロ埋め) | 00...59 |
| 小数秒 | S | 1 桁の数値表示 | 0...9 |
| | SS | 2 桁の数値表示 | 00...99 |
| | SSS | 3 桁の数値表示 | 000...999 |
| 時間帯 - 省略形 | a, t | 常に小文字 | am, pm |
| | aa, aaa, tt, ttt | 常に大文字 | AM, PM |
| | aaaa, tttt | ロケールに基づく大文字/小文字 | am, pm, AM, PM |
| | aaaaa, ttttt | 常に小文字の最小表示 | a, p |
| 時間帯 - 拡張 | b, bb, bbb, B, BB, BBB |短縮表示 (Intl ロケールに基づく) | en-GB: at night |
| | bbbb, BBBB | 完全表示 (Intl ロケールに基づく)| en-GB: at night |
| | bbbbb, BBBBB | 最小表示 (Intl ロケールに基づく) | en-GB: at night |
| タイムゾーン | z, zz, zzz, Z, ZZ, ZZZ, O, OO, OOO | 短縮表示 | GMT+4 |
| | zzzz, ZZZZ, OOOO | 完全表示 | GMT+0430 |

### ローカライズされたリソース文字列

Ignite UI for Angular のすべてのコンポーネントは、デフォルトで英語でレンダリングされ、上部にリストされている任意の言語でレンダリングすることもできます。グローバルに実現する方法が 3 つあり、コンポーネントごとに実現する方法が 1 つあります。現在利用できない言語の場合、API を通じて利用可能な各リソース文字列にカスタム翻訳を提供できます。

コンポーネント文字列の翻訳はリソース文字列に格納されており、コンポーネントが使用できるように、ローカライズ システムに登録する必要があります。

これを実現するには、まず、すべての言語のローカライズされたリソース文字列を含む `igniteui-angular-i18n` パッケージをインストールする必要があります:

```
npm install igniteui-angular-i18n --save-dev
```

その後、利用可能にしたい各言語を登録する必要があります。ドイツ語と日本語を例にします:

```ts
import { IgxResourceStringsDE, IgxResourceStringsJA } from 'igniteui-angular-i18n';

registerI18n(IgxResourceStringsDE, 'de');
registerI18n(IgxResourceStringsJA, 'ja');
```

また、それらが適用されるロケールも指定する必要があります。有効なタグが提供されていない場合、デフォルトの 'en-US' ロケールのリソースが設定されます。

#### 地域と文字

リソースの登録に使用したロケールから `言語 + 地域` または `言語 + 文字` を考慮します。これらが最も一般的に使用されるためです。これらは `-` で区切られ、地域/文字は通常 2 番目または 3 番目の位置に定義されます。たとえば、`en-US` と `en-GB`、または `en-Latn` です。

地域または文字を使用しない場合、登録したリソースは、たとえば `en` 言語を使用するすべてのロケールに適用されます。ただし、地域と文字のリソースも定義している場合を除きます。その場合、定義していないもののみが、この場合は `en` のリソースを返します。

文字は、リソースを登録する際に地域よりも優先度が高くなります。一般的には、両方を同時に混在させて使用せず、地域または文字のいずれかを使用することをお勧めします。そうすることで、設定したロケールに基づいて、どれが利用可能で使用すべきかを管理し、把握しやすくなります。

両方を使用する場合、たとえば `GB` 地域と `Latn` 文字を持つ `en` 言語を例にします。`en-GB` と `en-Latn` のように地域と文字の両方のリソースを定義し、後で地域と文字の両方を `en-Latn-GB` に設定してロケールを設定すると、最初に文字のリソースを取得します。それが利用できない場合は、利用可能な地域を返します。もちろん、明示的にロケールを `en-Latn` に設定した場合を除きます。どちらにもリソースが登録されていない場合は、利用可能であれば `en` のデフォルトを取得します。

### コンポーネントのカスタマイズ

アプリ内の特定のコンポーネントで、グローバルに登録されたリソースを使用しながら異なるローカライズを使用したい場合、またはそのリソース文字列を完全に置き換えたい場合は、次の方法で実行できます。

#### 言語と書式設定

コンポーネントにグローバル ローカライズとは異なるものを設定したい場合は、`locale` プロパティを設定することで実行できます。これらは結びついているため、使用されるリソース文字列の言語と書式設定の両方に影響します。

この方法では、利用可能なリソース文字列をグローバルに既に登録しておく必要があります:

```ts
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';

registerI18n(IgxResourceStringsJA, 'ja');
```

コンポーネントの `locale` プロパティを設定することで、現在使用中のグローバル ロケールをオーバーライドします:

```html
<igx-grid [data]="data" locale="ja">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

##### 言語のみ

ロケールを変更せずにコンポーネントの言語のみを変更したい場合は、`resourceStrings` プロパティを使用して各コンポーネントのリソース文字列を設定することもできます。これにより、グローバルに使用されているものをオーバーライドします:

```html
<igx-grid [data]="data" [resourceStrings]="resourcesDE">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

オーバーライドしたいコンポーネントに正しいリソース文字列タイプを使用していることを確認する必要があります。各コンポーネントには独自のリソース文字列セットがあります。この場合、グリッドのドイツ語:

```ts
import { GridResourceStringsDE } from 'igniteui-angular-i18n';

// Inside App Component:
public resourcesDE = GridResourceStringsDE;
```

### カスタム ローカライズされたリソース文字列

アプリをローカライズしたいが、使用している言語のリソース文字列が提供されておらず、独自の翻訳を提供したい場合は、いつでもカスタム リソース文字列を提供できます。これはグローバルに、またはコンポーネントごとに (`resourceStrings` プロパティを使用して) 実行できます。

>注: より多くの言語を含む [`igniteui-i18n-resources`](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources) パッケージに自由にコントリビュートしてください。`igniteui-angular-i18n` はこれらに基づいています。

すべてのコンポーネントに提供されている `IResourceStrings` タイプを使用して、使用されるリソース文字列の型指定を取得できます:

```ts
import { IResourceStrings } from 'igniteui-angular';

export const customResourcesForAll: IResourceStrings = {
    //...
};
registerI18n(customResourcesForAll, 'custom');
```

または、特定のコンポーネントを個別に、この場合はグリッド:

```ts
import { IGridResourceStrings } from 'igniteui-angular';

export const customGridResources: IGridResourceStrings = {
    grid_summary_count: 'गणना',
    grid_summary_min: 'न्यून',
    grid_summary_max: 'अधिक',
    grid_summary_sum: 'योग',
    grid_summary_average: 'औसत'
};

```

デフォルトのリソース文字列と、デフォルトの英語でもカスタマイズしたいものを、好きなように混在させることもできます:

```ts
import { IResourceStrings, CalendarResourceStringsEN, DatePickerResourceStringsEN } from 'igniteui-angular';

export const customResources: IResourceStrings = Object.assign(
    {},
    CalendarResourceStringsEN,
    DatePickerResourceStringsEN,
    {
        grid_summary_count: 'Custom count',
        grid_summary_min: 'Minium',
        grid_summary_max: 'Maximum',
        grid_summary_sum: 'Custom summary'
    }
);
registerI18n(customResources, 'en');

```

>注: 最後の例では、特定のリソース文字列のみを設定しています。つまり、残りは、使用中のコンポーネントで取得できない場合、デフォルトで英語になります。

### 利用可能なリソース文字列

- [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/BG/resources.ts)
- [IgxResourceStringsCS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/CS/resources.ts)
- [IgxResourceStringsDA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DA/resources.ts)
- [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DE/resources.ts)
- [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ES/resources.ts)
- [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/FR/resources.ts)
- [IgxResourceStringsHU](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/HU/resources.ts)
- [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/IT/resources.ts)
- [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/JA/resources.ts)
- [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/KO/resources.ts)
- [IgxResourceStringsNB](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NB/resources.ts)
- [IgxResourceStringsNL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NL/resources.ts)
- [IgxResourceStringsPL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PL/resources.ts)
- [IgxResourceStringsPT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PT/resources.ts)
- [IgxResourceStringsRO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/RO/resources.ts)
- [IgxResourceStringsSV](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/SV/resources.ts)
- [IgxResourceStringsTR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/TR/resources.ts)
- [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANS/resources.ts)
- [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANT/resources.ts)


## レガシー ローカライズ (i18n)

>注: これは 20.2.0 以降の古いローカライズ処理方法です。上記の新しい方法を使用することをお勧めします。これは、今後の通知があるまで引き続き機能します。

現在、Ignite UI for Angular は、次の言語と文字のリソース文字列を提供しています: ブルガリア語、チェコ語、デンマーク語、オランダ語、英語、フランス語、ドイツ語、ハンガリー語、イタリア語、日本語、韓国語、ノルウェー語、ポーランド語、ポルトガル語、ルーマニア語、スペイン語、スウェーデン語、トルコ語、繁体字中国語、簡体字中国語。これらは、`igniteui-angular` のデフォルトのローカライズとして提供される英語を除き、`igniteui-angular-i18n` パッケージ経由で利用できます。

最小限のコードで Ignite UI for Angular コンポーネントの文字列を簡単にローカライズできます。

### Angular ローカライズの例

<code-view style="height:550px"
           explicit-editor="csb"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/services/localization-all-resources-old/"
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
import { changei18n } from "igniteui-angular/core";
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

>注: より多くの言語を含む [`igniteui-angular-i18n`](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n) パッケージに自由にコントリビュートしてください。

#### 独自のローカライズされたリソースを活用する

`changei18n` 関数は `IResourceStrings` オブジェクトを必要とします。使用したい言語が `igniteui-angular-i18n` パッケージで利用できない場合、または単に特定の文字列を変更したい場合は、必要な言語とコンポーネントの文字列リソースを含むカスタム オブジェクトを渡すことができます。これにより、igniteui-angular コンポーネントのグローバル i18n が変更されます。

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, IGridResourceStrings } from "igniteui-angular/core";

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
import { changei18n, GridResourceStringsEN, TimePickerResourceStringsEN } from "igniteui-angular/core";

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

#### コンポーネントの特定のインスタンスの文字列をローカライズ

単一の `igx-grid` インスタンスのみをローカライズする方法があります。`resourceStrings` プロパティを使用し `IGridResourceStrings` の新しいインスタンスを設定します。

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

### 利用可能なリソース文字列

- [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/BG/resources.ts)
- [IgxResourceStringsCS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/CS/resources.ts)
- [IgxResourceStringsDA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DA/resources.ts)
- [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DE/resources.ts)
- [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ES/resources.ts)
- [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/FR/resources.ts)
- [IgxResourceStringsHU](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/HU/resources.ts)
- [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/IT/resources.ts)
- [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/JA/resources.ts)
- [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/KO/resources.ts)
- [IgxResourceStringsNB](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NB/resources.ts)
- [IgxResourceStringsNL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NL/resources.ts)
- [IgxResourceStringsPL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PL/resources.ts)
- [IgxResourceStringsPT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PT/resources.ts)
- [IgxResourceStringsRO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/RO/resources.ts)
- [IgxResourceStringsSV](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/SV/resources.ts)
- [IgxResourceStringsTR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/TR/resources.ts)
- [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANS/resources.ts)
- [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANT/resources.ts)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
- [Ignite UI for Angular **ResourceStrings** (英語)](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n)
