---
title: Avatar コンポーネント
_description: Ignite UI for Angular の Avatar コントロールは、プロファイル ボタンなどのアプリケーションのインスタンスに画像、マテリアル アイコン、またはイニシャルを追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Avatar コンポーネント, Angular Avatar コントロール
---

##Avatar

<p class="highlight">Ignite UI for Angular の Avatar を使用し、リストまたはプロファイル ボタンでユーザーを表す場合などに画像、マテリアル アイコン、またはイニシャルを追加します。Avatar の形式は四角または丸で、3 つのサイズ オプションがあります。コントロールはマテリアル アイコン セットからすべての画像、さらにカスタム画像もサポートします。</p>
<div class="divider"></div>

### Avatar デモ

<div class="sample-container" style="height:512px">
    <iframe src='{environment:demosBaseUrl}/avatar' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<igx-avatar roundShape="true" icon="person" bgColor="#0375be" data-init="SS">
</igx-avatar>
```

<div class="divider--half"></div>

### API

| 名前         |   型    | 説明                                                                                                                                             |
| :----------- | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`        | string  | アバターの画像ソースを設定します。                                                                                                               |
| `initials`   | string  | アバターのイニシャルを設定します。                                                                                                               |
| `icon`       | string  | アバターのアイコンを設定します。現在、マテリアル アイコン セットのすべてのアイコンがサポートされます。イニシャルおよび画像アバターは適用外です。 |
| `bgColor`    | string  | イニシャルまたはアイコン アバターの背景色を設定します。                                                                                          |
| `color`      | string  | イニシャルまたはアイコン アバターの色を設定します。(オプション)                                                                                  |
| `roundShape` | boolean | アバターの図形を丸に設定します。既定の図形は四角です。                                                                                           |
| `size`       | string  | アバターのサイズを小、中、大に設定します。                                                                                                       |

<div class="divider--half"></div>
*igx-avatar プロパティをすべてコードで設定できます。
<div class="divider--half"></div>

### コード例

`igx-avatar` タグを使用してコントロールをアプリケーションに含みます。

```html
<igx-avatar roundShape="true" icon="person" bgColor="#0375be" data-init="SS">
</igx-avatar>
```

既存の igx-avatar インスタンスを `TypeScript` によって変更します。

```typescript
avatarInstance.srcImage('https://unsplash.it/60/60?image=55');
avatarInstance.size('small');
```

<div class="divider--half"></div>
