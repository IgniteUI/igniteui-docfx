---
title: スペーシング | Ignite UI for Angular 
_description: Ignite UI for Angular は、アプリケーション レベルまたはコンポーネント レベルでパディングとマージンを簡単に調整する方法を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, スペーシング, パディング, マージン
_language: ja
---

# スペーシング

スペーシングの設定は、大量のデータを視覚的に表現する際に大きく役立ちます。Ignite UI for Angular では、パディングやマージンを調整するためのあらかじめ定義されたオプションを提供しています。

固定値を使用する代わりに、アプリケーションやコンポーネント単位でスペーシングを調整できるように、CSS カスタム プロパティを使用しています。

## スペーシングの仕組み

Ignite UI for Angular では、コンポーネントのサイズ (small、medium、large) に応じて動的にスケールする高度なスペーシング システムを提供しています。このシステムは CSS カスタム プロパティを中心に構築されており、カスタム CSS を記述することなく、グローバルまたはコンポーネント単位でスペーシングを制御できます。

## サイズとスペーシングの関係

Ignite UI のスペーシング システムは、コンポーネント サイズと密接に関連しています。コンポーネントには 3 つの異なるサイズがあります。
- **Small** - 密度の高いレイアウトに適したコンパクトなスペーシング
- **Medium** - デフォルトのバランスの取れたスペーシング
- **Large** - タッチ操作に適した余裕のあるスペーシング

アクティブなサイズに応じてスペーシングが自動的に適応し、アプリケーション全体で一貫したビジュアル階層を維持します。

## コア CSS カスタム プロパティ

スペーシング システムは、以下の主要な CSS カスタム プロパティを中心に構成されています。

### グローバル スペーシング プロパティ

- `--ig-spacing` - 基本のスペーシング乗数 (デフォルト: 1)
- `--ig-spacing-small` - Small サイズのコンポーネント用スペーシング
- `--ig-spacing-medium` - Medium サイズのコンポーネント用スペーシング
- `--ig-spacing-large` - Large サイズのコンポーネント用スペーシング

### 方向別スペーシング プロパティ

- `--ig-spacing-inline` - 水平方向のスペーシング制御
- `--ig-spacing-block` - 垂直方向のスペーシング制御
- `--ig-spacing-inline-small` - Small コンポーネント用の水平方向スペーシング
- `--ig-spacing-inline-medium` - Medium コンポーネント用の水平方向スペーシング
- `--ig-spacing-inline-large` - Large コンポーネント用の水平方向スペーシング
- `--ig-spacing-block-small` - Small コンポーネント用の垂直方向スペーシング
- `--ig-spacing-block-medium` - Medium コンポーネント用の垂直方向スペーシング
- `--ig-spacing-block-large` - Large コンポーネント用の垂直方向スペーシング

## サイズ検出用変数

コンポーネントは以下の CSS カスタム プロパティを利用して、自身のサイズを自動的に検出します。

- `--is-small` - コンポーネントが Small の場合は 1、それ以外は 0
- `--is-medium` - コンポーネントが Medium の場合は 1、それ以外は 0
- `--is-large` - コンポーネントが Large の場合は 1、それ以外は 0
- `--component-size` - 現在のサイズを示す数値 (1=Small、2=Medium、3=Large)

これらの変数はテーマ システムによって自動的に管理され、`--ig-size` によって制御されるコンポーネントのサイズ設定に基づいて変化します。

## 実用的な使用例

### グローバル スペーシング制御

アプリケーション全体のコンポーネントをよりコンパクトにする場合:

```css
:root {
  --ig-spacing: 0.8; /* 20% less spacing */
}
```

タッチ操作のアクセシビリティを高めるためにスペーシングを広げる場合:

```css
:root {
  --ig-spacing: 1.2; /* 20% more spacing */
}
```

### コンポーネント固有のスペーシング

特定のコンポーネントタイプのスペーシングを調整する場合:

```css
.my-grid {
  --ig-spacing: 0.5; /* More compact grid, 50% of the original spacing in all sizes */
}
```

### 方向別スペーシング制御

水平方向のスペーシングのみを減らし、垂直方向は通常のままにする場合:

```css
:root {
  --ig-spacing-inline: 0.7;
  --ig-spacing-block: 1.0;
}
```

### サイズ固有のスペーシング

特定のコンポーネントサイズに対してスペーシングをカスタマイズする場合:

```css
:root {
  --ig-spacing-small: 0.5;   /* Very tight for small components */
  --ig-spacing-medium: 1.0;  /* Normal for medium components */
  --ig-spacing-large: 1.5;   /* Extra spacious for large components */
}
```

## スペーシング乗数の仕組み

スペーシング システムでは、乗数を用いて基準値をスケーリングします。

- コンポーネント内のスペーシング値は、アクティブなスペーシング変数で乗算されます。
- 例: コンポーネントに `8px` の基本パディングがあり、`--ig-spacing: 1.5` を設定した場合、実際のパディングは `12px` になります。
- `--ig-spacing-large` のようなサイズ固有の乗数は、大サイズのコンポーネントに対して `--ig-spacing` をオーバーライドします。
- `--ig-spacing-inline` のような方向別乗数を使用すると、水平方向と垂直方向を個別にスケーリングできます。

このカスケード式の仕組みにより、一貫したスペーシング関係を維持しつつ、CSS カスタム プロパティだけで細かい制御が可能になります。

## API リファレンス

- [ユーティリティ - Pad]({environment:sassApiUrl}/utilities#function-pad)
- [ユーティリティ - Pad Inline]({environment:sassApiUrl}/utilities#function-pad-inline)
- [ユーティリティ - Pad Block]({environment:sassApiUrl}/utilities#function-pad-block)

### サイズ関数とミックスイン

- [テーマ - Sizable ミックスイン]({environment:sassApiUrl}/themes#mixin-sizable)
- [テーマ - Sizable 関数]({environment:sassApiUrl}/themes#function-sizable)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
