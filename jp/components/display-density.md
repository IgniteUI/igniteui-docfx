---
title: サイズ (表示密度) | Ignite UI for Angular 
_description: Ignite UI for Angular は、アプリケーションまたはコンポーネント レベルで size (表示密度) プロパティの表示を設定できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular Components, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, density, 表示密度, サイズ
_language: ja
---

# サイズ (表示密度)

サイズ (表示密度) 設定の表示は、大規模データセットのビジュアル表示を大きく改善します。Ignite UI for Angular では、large (comfortable)、medium (cosy)、small (compact) の事前定義されたオプション セットが提供されています。

`--ig-size` カスタム CSS プロパティを使用すると、アプリケーションまたはコンポーネント レベルでサイズを設定できます。

## Angular サイズの例
<code-view style="height: 250px; width: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/density" alt="Angular サイズの例">
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[インストール](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) のトピックで手順をご確認ください。

## 使用方法

**アプリケーションやコンポーネント レベルでサイズを設定する**

サイズを設定するには、`--ig-size` CSS カスタム プロパティを使用します。body 要素で前述のプロパティを設定することで、アプリ内のすべてのコンポーネントのサイズを設定できます。

`--ig-size` に使用可能な値は、`--ig-size-small`、`--ig-size-medium`、`--ig-size-large` です。

```css
body {
    --ig-size: var(--ig-size-small);
}
```

コンポーネント レベルでサイズを設定するには、要素セレクターを対象とします。たとえば、入力グループのサイズを `small` に設定するには、次のようにします。

```css
igx-input-group {
    --ig-size: var(--ig-size-small);
}
```

## 独自のコンポーネントとレイアウトにサイズを組み込む

Ignite UI for Angular は、`--ig-size` CSS プロパティの変更に反応するレイアウトを実装できるようにするいくつかの Sass 関数とミックスインを公開します。

以下は、`--ig-size` の値に基づいて要素の幅と高さを変更する方法の例です。


```html
<div class="my-elem"></div>
```

```scss
@use "igniteui-angular/theming" as *;

.my-elem {
    // Make the element sizable
    @include sizable();

    // Define the default size of the element and hook it to the `--ig-size` property
    --component-size: var(--ig-size, var(--ig-size-large));

    // Define sizes for small (10px), medium (20px), and large (30px)
    --size: #{sizable(10px, 20px, 30px)};
    width: var(--size);
    height: var(--size);
}
```

これで、`--ig-size` の値が変更されるたびに、`.my-elem` のサイズが変更されます。

## API リファレンス
<div class="divider"></div>

* [テーマ - Sizable Mixin]({environment:sassApiUrl}/index.html#mixin-sizable)
* [テーマ - Sizable Function]({environment:sassApiUrl}/index.html#function-sizable)

### サイズと間隔の関数
* [ユーティリティ - Pad]({environment:sassApiUrl}/index.html#function-pad)
* [ユーティリティ - Pad Inline]({environment:sassApiUrl}/index.html#function-pad-inline)
* [ユーティリティ - Pad Block]({environment:sassApiUrl}/index.html#function-pad-block)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
