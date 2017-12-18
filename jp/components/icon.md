---
title: Icon コンポーネント
_description: Ignite UI for Angular Icon コンポーネントを使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール
---

## Icon
<p class="highlight">Ignite UI for Angular Icon コンポーネントはアイコンおよびフォント セットを統合するため、交互の使用やマテリアル アイコンをマークアップに追加できます。コンポーネントはカスタム色をサポートします。アイコンを非アクティブに設定できます。</p>
<div class="divider"></div>

### 使用方法

```html
<igx-icon fontSet="material" name="home" color="magenta" isActive="false"></igx-icon>
```

`fontSet` を `fontSet="material"` に設定すると、マテリアル アイコン セット (デフォルト) を選択します。 _その他の設定も追加予定です。_

アイコンを設定するには、[マテリアル アイコン セット](https://material.io/icons/)の名前を提供します。例: `name="home"`。

アイコンの色を設定するには、色を示す文字列値を提供します。例: `color="#474747"`。

アイコンをアクティブまたは非アクティブに設定するには、isActive プロパティを true または false に設定します。例: `isActive="true"`。

次の属性を使用して、Icon コンポーネントのすべてのプロパティにアクセスできます。

`fontSet`

`name`

`color`

`isActive`


**セッター**
アイコンのすべてのプロパティを以下のアイコン セッターによってコードで設定できます。

`fontSet(fontFamily: string)` はアイコンのフォント ファミリを設定します。
`color(color: string)` はアイコンの色を設定します。
`name(icon: string)` はアイコンの名前を設定します。
`isActive(state: boolean)` は、false に設定される場合にアイコン スタイルを非アクティブに設定します。

**ゲッター**
アイコンのすべてのプロパティを以下のアイコン ゲッターによってコードで取得できます。

`getFontSet()` はアイコンのフォント ファミリを返します。
`getIconColor()` はアイコンの色を返します。
`getIconName()` はアイコンの名前を返します。
`getActive()` はアイコンのアクティブ状態を返します。
<div class="divider"></div>
