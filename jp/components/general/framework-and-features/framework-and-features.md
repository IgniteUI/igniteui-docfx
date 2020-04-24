---
title: Ignite UI for Angular フレームワーク & 機能
_description: Ignite UI for Angular によって ARIA アクセシビリティと文字表記の方向を設定する方法を説明します。
_keywords: aria support, aria サポート, a11y, ignite ui for angular, infragistics, インフラジスティックス
---

## フレームワークと機能

### アクセシビリティと文字表記の方向

このセクションでは、フレームワークのアクセシビリティ (ARIA) サポートと、コンポーネントの`文字表記の方向`の簡単な管理を示します。

#### 右から左方向 (RTL) の有効化

`Ignite UI for Angular` ライブラリは、`html` または `body` タグの `dir` 属性を設定した場合のみ `文字表記の方向`操作の影響を受けます。また、ランタイムの変更は検出されないことに注意してください。

次の例に移動します。

##### 手順 1 - 両方のタグで ‘dir’ 属性を設定します。

```html
<html dir="rtl">
...
  <body dir="ltr">
  </body>
</html>
```

上記の場合、`body` タグの内部属性タグが優先されます。

##### Step 2 - 手順 2 - それぞれの方向の[テーマエンジン](../../themes/index.md)に通知します。

そのためには、[igx-core]({environment:sassApiUrl}/index.html#mixin-igx-core) mixin の `$direciton` パラメーターを設定します。

```scss 
@include igx-core($direction: rtl);
```

コンテンツを調整する手順はこれですべてになります。

