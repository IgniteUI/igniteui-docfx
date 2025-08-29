---
title: サイズ | Ignite UI for Angular 
_description: Ignite UI for Angular は、アプリケーションまたはコンポーネント レベルで size プロパティの表示を設定できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular Components, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, サイズ
_language: ja
---

# サイズ

size 設定の表示は、大規模データセットのビジュアル表示を大きく改善します。Ignite UI for Angular では、**large**、**medium**、**small** の事前定義されたオプション セットが提供されています。

`--ig-size` カスタム CSS プロパティを使用すると、アプリケーションまたはコンポーネント レベルでサイズを設定できます。

## Angular サイズの例
<code-view style="height: 250px; width: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/density/" alt="Angular サイズの例">
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[インストール](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#ignite-ui-for-angular-のインストール)のトピックで手順をご確認ください。

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

## CSS カスタム プロパティによるサイズの理解

Ignite UI のサイズ設定システムは、CSS カスタム プロパティのセットを通じて機能し、コンポーネントの寸法やスペーシングを自動的に調整します。`--ig-size ` プロパティを変更すると、コンポーネントはその変更を自動的に検出し、適切なサイズ値を適用します。

### サイズ検出用変数

コンポーネントは以下の CSS カスタム プロパティを利用してサイズ変更を検出し、それに応じて動作します。

- `--component-size` - グローバル `--ig-size` を数値にマッピングします (1=small、2=medium、3=large)
- `--is-small` - コンポーネントが Small の場合は 1、それ以外は 0
- `--is-medium` - コンポーネントが Medium の場合は 1、それ以外は 0
- `--is-large` - コンポーネントが Large の場合は 1、それ以外は 0

これらの変数は CSS の数式を用いて自動的に計算され、`--ig-size` が変更されるたびに更新されます。

### サイズ定数

テーマ設定システムでは、次の 3 つのサイズ定数が定義されています。

- `--ig-size-small` (値: 1)
- `--ig-size-medium` (値: 2)
- `--ig-size-large` (値: 3)

## カスタム コンポーネントへのサイズ対応の組み込み

Ignite UI の Sass ユーティリティを使用すると、カスタム コンポーネントをサイズ変更に対応させることができます。これらのユーティリティは、必要な CSS カスタム プロパティや数式を裏側で自動生成します。

### Sizable ミックスインと関数の使用

グローバル サイズ設定に応答するコンポーネントを作成する方法は次のとおりです。

```html
<div class="my-responsive-element"></div>
```

```scss
@use "igniteui-angular/theming" as *;

.my-responsive-element {
    // The sizable mixin sets up size detection CSS custom properties
    @include sizable();

    // Connect to the global size system
    --component-size: var(--ig-size, var(--ig-size-large));

    // Use the sizable function for responsive sizing
    --size: #{sizable(10px, 20px, 30px)};
    width: var(--size);
    height: var(--size);
}
```

### Sizable システムの仕組み

`@include sizable()` を使用すると、現在のコンポーネントサイズを検出する CSS カスタム プロパティが生成されます。

```css
.my-responsive-element {
    --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
    --is-medium: min(
        clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
        clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
    );
    --is-small: clamp(0, var(--ig-size-medium, 2) - var(--component-size, 1), 1);
}
```

`sizable(10px, 20px, 30px)` 関数は、現在のサイズ設定に基づいて適切な値を自動的に選択する CSS 式を生成します。

```css
--size: max(
    calc(var(--is-large, 1) * 30px),
    calc(var(--is-medium, 1) * 20px), 
    calc(var(--is-small, 1) * 10px)
);
```

この仕組みでは、`clamp()`、`min()`、`max()`、`calc()` 関数を組み合わせた数式的アプローチにより、コンポーネントは現在の `--ig-size` 設定に基づいて自動的にサイズ値を切り替えることができます。

## API リファレンス
<div class="divider"></div>

* [テーマ - Sizable Mixin]({environment:sassApiUrl}/themes#mixin-sizable)
* [テーマ - Sizable Function]({environment:sassApiUrl}/themes#function-sizable)

### サイズと間隔の関数
* [ユーティリティ - Pad]({environment:sassApiUrl}/utilities#function-pad)
* [ユーティリティ - Pad Inline]({environment:sassApiUrl}/utilities#function-pad-inline)
* [ユーティリティ - Pad Block]({environment:sassApiUrl}/utilities#function-pad-block)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
