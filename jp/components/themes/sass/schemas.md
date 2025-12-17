---
title: スキーマ
_description: Ignite UI for Angular テーマ化するスキーマを使用して、コンポーネント テーマのレシピを作成できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ 
_language: ja
---

# スキーマ

<p class="highlight">スキーマはシンプルかつ宣言的にコンポーネント テーマで使用する可能性のあるすべてのプロパティをリストします。</p>

<div class="divider--half"></div>

## 概要

スキーマはレシピのようなものです。JSON 同様のシンプルな Sass マップでテーマが使用するすべてのプロパティを定義します。プロパティは、カラー、エレベーション レベル、丸みなどでテーマが使用するあらゆる項目が `schema` (スキーマ) として記述され、グローバルまたはコンポーネント テーマへ渡します。コンポーネント スキーマは既存コンポーネント スキーマを拡張し、そのプロパティをオーバーライドします。

**スキーマは、コンポーネントのデフォルト テーマ プロパティを、CSS スタイル ルールまたは CSS 変数を複製しない方法で変更する場合に使用します。**

Light Material Avatar スキーマを見てみましょう。

```scss
$light-avatar: (
    background: (
        color: (
            'gray',
            400,
            0.54,
        ),
    ),
    color: (
        color: (
            'gray',
            800,
            0.96,
        ),
    ),
    icon-color: (
        color: (
            'gray',
            800,
            0.96,
        ),
    ),
    border-radius: rem(8px),
    size: (
        sizable: (
            rem(40px),
            rem(64px),
            rem(88px),
        ),
    ),
    default-size: 1,
);
```

上記の例では、コンポーネント スキーマが [Avatar テーマ]({environment:sassApiUrl}/themes#function-avatar-theme) で使用するプロパティを定義します。具体的なカラー パレット マップを参照せずに、アバターが使用するカラーを指定します。

以下は、`background` プロパティの例です。アバターのテーマにデフォルトの背景を指示します。

`background` は任意の値に割り当てることができ、CSS `background-color` プロパティに割り当てることができます。上記サンプルのように `background` にマップを割り当てることができます。マップを `background` プロパティに割り当てる場合、マップはキー名として関数 (`color` など) を含む必要があり、また関数にはキー値として引数を含む必要があります。後ほど avatar テーマを作成する際に値を解決するために必要となります。ユーザーが avatar テーマへ渡す可能性のあるパレットがわからないため、後でパレットが確定したときに解決できるようになります。

<div class="divider--half"></div>

## スキーマの拡張

上記例からもわかるように、スキーマはシンプルなマップのためプロパティをオーバーライドして拡張できます。デフォルトの material avatar schema は、その他すべてのプロパティを手動でコピーせずに `background` を変更することもできます。`extend` 関数を使用して簡単に行うことができます。

```scss
$my-avatar-schema: extend($light-avatar, (
    background: limegreen
));
```

これで `$my-avatar-schema` の値には `$_light-avatar` のすべてのプロパティが含まれますが、`background` の値は `limegreen` になります。

## 事前定義されたスキーマ

テーマ プリセットで使用する事前定義されたライト スキーマとダーク スキーマを提供します。

- ライト スキーマ
  - `$light-material-schema`
  - `$light-fluent-schema`
  - `$light-bootstrap-schema`
  - `$light-indigo-schema`
- ダーク スキーマ
  - `$dark-material-schema`
  - `$dark-fluent-schema`
  - `$dark-bootstrap-schema`
  - `$dark-indigo-schema`

コンポーネントのテーマを作成するために、ライト パレットとダーク パレットに応じてライト スキーマとダーク スキーマを使用します。たとえば、`$light-material-schema` を `$light-material-palette` と一緒に使用すると、すべてのライト マテリアル コンポーネントのテーマを作成するのに役立ちます。逆もまた同様です。`$dark-material-schema` を `$dark-material-palette` と一緒に使用すると、ダーク マテリアル コンポーネントのテーマが得られます。

## スキーマの使用

以上がコンポーネント スキーマの概要と作成方法です。次に Sass プロジェクトのスキーマの使用方法について説明します。

各コンポーネント スキーマはすべてのコンポーネントのグローバル スキーマとバンドルされます。したがって、`$light-avatar` スキーマは `$material-avatar` 変数に保存され、その後グローバル `$light-material-schema` で使用されます。`$light-material-schema` マップには、すべてのコンポーネント名がキーとして含まれ、対応するスキーマが値として含まれています。`$light-material-schema` は以下のようになります。

```scss
$light-material-schema: (
    action-strip: $material-action-strip,
    avatar: $material-avatar,
    badge: $material-badge,
    ...
);
```

`$light-material-schema` 全体を `theme` ミックスインに渡すことができます。たとえば、デフォルト コンポーネント スキーマを置き換えて `$light-material-schema` を変更したい場合、Avatar コンポーネントは以下を使用します。

```scss
$my-light-schema: extend($light-material-schema, (
    avatar: $my-avatar-schema
));
```

これでグローバル テーマ ミックスインにすべて渡すことができます。

```scss
// styles.scss
@include theme(
    $schema: $my-light-schema,
    $palette: $default-palette
);
```

グローバル テーマのアバターの背景にライムグリーン カラーが使用されます。

ボタン スキーマなどコンポーネント スキーマの一部には丸み付けのためのプロパティ定義があります。すべてのボタンでデフォルトの丸みを変更できます。

各コンポーネント テーマで上記で作成したスキーマを使用する方法について説明します。

```scss
$my-avatar-theme: avatar-theme(
    $schema: $my-avatar-schema
);
```

現在、スキーマの最も一般的な使用例は、特定の要素にグローバルのテーマとは異なるテーマを持たせたい場合です。
たとえば、グローバル テーマに `$light-material-schema` を適用していて、特定のアバター コンポーネント 1 つだけに `$light-indigo-schema` を使用させたい場合は、次のようにします。

```scss
// We only get the avatar part of the light-indigo-schema
$indigo-avatar: map.get($light-indigo-schema, avatar);

// We include the specific schema to a class which we can then set on the avatar component that we want
.indigo-avatar {
    @include css-vars(
        avatar-theme(
            $schema: $indigo-avatar
        )
    );
}
```

## まとめ

スキーマはテーマ関数およびミックスインと比較してテーマ ライブラリの知識が必要ですが、生成された CSS のサイズを増やすことなくコンポーネン トテーマを宣言できます。スキーマを使用するもう 1 つの利点は、シンプルな Sass マップであるため、再利用および拡張が可能なことです。コンポーネント スキーマを組み合わせてグローバル テーマ スキーマを作成できます。

内部でスキーマを使用してバリエーションを作成し、結果として Material、Bootstrap、Fluent、および Indigo のテーマがあらかじめバンドルされています。

## API の概要

- [Light コンポーネント スキーマ]({environment:sassApiUrl}/schemas#variable-light-material-schema)
- [Dark コンポーネント スキーマ]({environment:sassApiUrl}/schemas#variable-dark-material-schema)
- [グローバル テーマ]({environment:sassApiUrl}/themes#mixin-theme)
- [Avatar テーマ]({environment:sassApiUrl}/themes#function-avatar-theme)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
