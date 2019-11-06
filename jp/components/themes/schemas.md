---
title: スキーマ
_description: Ignite UI for Angular theming schemas allow you to create recipes for component themes.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
_language: ja
---

## スキーマ
<p class="highlight">Schemas はシンプルかつ宣言的にコンポーネントテーマで使用する可能性のあるすべてのプロパティをリストします。</p>

<div class="divider--half"></div>

### 概要
スキーマはレシピのようなものです。JSON 同様のシンプルな Sass マップでテーマが使用するすべてのプロパティを定義します。プロパティは、色、影、マージン、パディングなどでテーマが使用するあらゆる項目が `schema` として記述され、グローバルまたはコンポーネント テーマへ渡します。コンポーネント スキーマは既存コンポーネント スキーマを拡張し、前のプロパティをオーバーライドします。

次に avatar コンポーネントで使用されるデフォルトのスキーマについて説明します。

```scss
$_light-avatar: (
    icon-background: (
        igx-color: ('grays', 400)
    ),

    icon-color: (
        igx-color: ('grays', 800)
    ),

    initials-background: (
        igx-color: ('grays', 400)
    ),

    initials-color: (
        igx-color: ('grays', 800)
    ),

    image-background: transparent
);
```

上記の例では、コンポーネント スキーマが [Avatar テーマ]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) で使用するプロパティを定義します。前もって解決せずに色と avatar を指示します。

以下は、`icon-background` プロパティの例です。 avatar テーマにデフォルト背景をタイプ アイコンの新しい igx-avatar にすることを指示します。 

*`icon-background` は任意の値に割り当てることができ、CSS `background-color` プロパティに割り当てることができます。*上記サンプルのように `icon-background` にマップを割り当てることができます。マップを `icon-background` プロパティに割り当てます。たとえば、マップはキー名として関数を含む必要があり、また関数にはキー値として引数を含む必要があります。後ほど avatar テーマを作成する際に値を解決するために必要となります。ユーザーが avatar テーマへ渡す可能性のあるパレットがわからないため、後でパレットが確定したときに解決できるようになります。

その他の関数や引数をキー値ペアとして `icon-background` マップに追加ます。たとえば、通常 rgba で表される `grays` パレットの `400` 色バリアントの hex 値を解決するために `hexrgba` 関数を介して `igx-color: ('grays', 400)` から解決済みの結果を実行してもよいでしょう。 

次に追加する場合にスキーマを変更する方法を示します。

```scss
$_light-avatar: (
    icon-background: (
        igx-color: ('grays', 400),
        hexrgba: #fff
    ),
    ...
);
```
igx-color 関数の結果が最初の引数として `hexrgba` 関数に自動的に渡されます。`hexrgba` は背景色に 2 つ目の引数を受け取るため、上記例のように `hexrgba` キーの値として提供します。

<div class="divider"></div>

### スキーマの拡張
上記例からもわかるように、Schemas はシンプルなマップのためプロパティをオーバーライドして拡張できます。デフォルトの avatar スキーマは、その他すべてのプロパティを手動でコピーせずに icon-background を変更することもできます。`extend` 関数を使用して簡単に行うことができます。

```scss
$my-avatar-schema: extend($_light-avatar, (
    icon-background: limegreen
));
```

`$my-avatar-schema` の値は、`$my-avatar-schema` が `limegreen` に設定される以外の `$my-avatar-schema` のすべてのプロパティを含みます。

### スキーマの使用
以上がコンポーネント スキーマの概要と変更方法です。次に Sass プロジェクトのスキーマの使用方法について説明します。 

各コンポーネント スキーマはすべてのコンポーネントのグローバル スキーマとバンドルされます。`$_light-avatar` スキーマはグローバル `$light-schema` マップの一部です。`$light-schema` はコンポーネント スキーマをコンポーネント名にマップします。`$light-schema` は以下のようになります。

```scss
$light-schema: (
    igx-avatar: $_light-schema,
    igx-badge: $_light-badge,
    ...
);
```

`$light-schema` 全体を `igx-theme` mixin に渡すことができます。たとえば、デフォルトコンポーネントスキーマを置き換えて `$light-schema` を変更したい場合、avatar コンポーネントは以下を使用します。

```scss
$my-light-schema: extend($light-schema, (
    igx-avatar: $my-avatar-schema
));
```

これでグローバル テーマにすべて渡すことができます。

```scss
@include igx-theme(
    $schema: $my-light-schema,
    $palette: $default-palette
);
```

グローバル テーマ各アイコン avatar は、limegreen 背景を使用します。

ボタン スキーマなどコンポーネント スキーマの一部には丸み付けのためのプロパティ定義があります。すべてのボタンでデフォルトの丸みを変更できます。

最後にコンポーネント テーマで上記で作成したスキーマを使用する方法について説明します。

```scss
$my-avatar-theme: igx-avatar-theme(
    $schema: $my-light-schema
);
```
### まとめ

スキーマは、テーマ関数や mixins と比較してテーマ エンジンについてより多くの知識を必要としますが、コンポーネント テーマを宣言するためのパワフルな方法を提供します。 

スキーマの良い点は、ビルドする前にグローバル テーマを変更できるため、生成される CSS の量を削減できることです。

その他のテーマ スキーマの利点としてスキーマ数に制限がないことと必要に応じてスワップできる点です。**たとえば、デフォルトで light と dark テーマ両方を提供するスキーマを内部で使用します。アプリケーション全体の外観を切り替えることもできます。**

### API の概要
* [Light Avatar スキーマ]({environment:sassApiUrl}/index.html#variable-_light-avatar)
* [Light コンポーネント スキーマ]({environment:sassApiUrl}/index.html#variable-light-schema)
* [Dark コンポーネント スキーマ]({environment:sassApiUrl}/index.html#variable-dark-schema)
* [Global テーマ]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar テーマ]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
