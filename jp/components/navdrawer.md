---
title: Navigation Drawer コンポーネント
_description: Ignite UI for Angular Navigation Drawer コンポーネントは、コードでスライド イン/アウト ナビゲーション コンテナーの実装が可能です。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navigation Drawer コンポーネント, Angular Navigation Drawer コントロール
_language: ja
---

## Navigation Drawer

<p class="highlight">Ignite UI for Angular Navigation Drawer コンポーネントは、スライドしてピン固定できるナビゲーション コンテナーです。使用されていない場合、縮小して非表示にもできます。ページの両端に配置できます。デフォルト位置は左側です。コンポーネントをコードで設定できます。選択済みのパネルを通知できます。また、ナビゲーション項目および非アクティブなヘッダーを設定できます。</p>
<div class="divider"></div>

### Navigation Drawer デモ

<div class="sample-container loading" style="height: 600px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navigation-drawer" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<ig-nav-drawer id="test"
    (opened)="logEvent($event)"
    [position]="position"
    [pin]="pin"
    [enableGestures]='gestures'
    [isOpen]="open"
    [width]="drawerWidth"
    [miniWidth]="drawerMiniWidth">
        <div class="ig-drawer-content">
            <h3>Drawer タイトル</h3>
            <div *ngFor="let navItem of navItems"><img src="http://www.infragistics.com/assets/images/favicon.ico" width='16' />
            <a routerLink="{{navItem.link}}"> {{navItem.text}} </a></div>
        </div>
        <div *ngIf="miniTemplate" class="ig-drawer-mini-content">
            <span class="hamburger" igxNavToggle="test" > &#9776; </span>
            <div *ngFor="let navItem of navItems"><img src="http://www.infragistics.com/assets/images/favicon.ico" width='16' /></div>
        </div>
</ig-nav-drawer>
```

<div class="divider--half"></div>

### API

#### プロパティ

| 名前             |   型    | 説明                                                                                                                                                        |
| :--------------- | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ID`             | string  | コンポーネントの ID。                                                                                                                                       |
| `position`       | string  | Navigation Drawer の位置。"left" (デフォルト値) または "right" です。固定されていない場合のみ効果があります。                                               |
| `enableGestures` | boolean | ドロアーを利用するために、端からスワイプ/パンニングして開く、スワイプ切り替え、およびパンニング ドラッグなどのタッチ ジェスチャの使用を有効にします。       |
| `isOpen`         | boolean | ドロアーの状態。                                                                                                                                            |
| `pin`            | boolean | ドロアーのピン固定状態。                                                                                                                                    |
| `pinThreshold`   | number  | 自動ピン固定を切り替えるためのデバイスの最小幅。デフォルト値は 1024 です。無視するには falsy 値に設定します。                                               |
| `width`          | string  | 開いたドロアーの幅。`.ig-nav-drawer` スタイルに基づいてデフォルト値は 300px です。幅をオーバーライドするか、幅を動的に変更するために使用できます。          |
| `miniWidth`      | string  | mini 状態でドロアーの幅。`.ig-nav-drawer.mini` スタイルに基づいてデフォルト値は 60px です。幅をオーバーライドするか、幅を動的に変更するために使用できます。 |

<div class="divider--half"></div>

### メソッド

| 名前                  | 説明                                                                                                                                                                                                   |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`                | Navigation Drawer を開きます。すでに開いている場合は効果がありません。 _@param_ fireEvents イベントを発生するかどうかを決定するオプションのフラグ。 _@return_ 操作が完了したときに解決される Promise。 |
| `close`               | Navigation Drawer を閉じます。すでに閉じている場合は効果がありません。 _@param_ fireEvents イベントを発生するかどうかを決定するオプションのフラグ。 _@return_ 操作が完了したときに解決される Promise。 |
| `expectedWidth()`     | 特定の状態の Drawer 幅を取得します。要求された状態を評価してキャッシュされようとします。                                                                                                               |
| `expectedMiniWidth()` | 特定の状態の Drawer の mini 幅を取得します。要求された状態を評価してキャッシュされようとします。                                                                                                       |

<div class="divider--half"></div>

### イベント

| 名前      | 説明                                               |
| :-------- | :------------------------------------------------- |
| `opening` | Navigation Drawer が開くときに発生するイベント。   |
| `opened`  | Navigation Drawer が開いたときに発生するイベント。 |
| `closing` | Navigation Drawer が閉じるときに発生するイベント。 |
| `closed`  | Navigation Drawer が閉じたときに発生するイベント。 |

<div class="divider--half"></div>

`TypeScript` で Drawer コンポーネントの構成:

```typescript
export class MainDrawerSampleComponent {
    navItems: Array<Object> = [
        { text: 'デフォルトのサンプル', link: '/navigation-drawer' },
        { text: 'ピン固定サンプル', link: '/navigation-drawer/pin' },
        { text: 'Mini サンプル', link: '/navigation-drawer/mini' }
    ];

    pin: boolean = false;
    open: boolean = false;
    position = 'left';
    drawerMiniWidth = '';
    @ViewChild(NavigationDrawer) viewChild: NavigationDrawer;
    /** Sample-specific configurations: */
    showMiniWidth: boolean = false;
    showEventLog: boolean = true;
    showToggle: boolean = true;

    logEvent(event) {
        if (event === 'closing') {
            // this will cause change detection, potentially run outside of angular
            this.open = false;
        }
    }
    testToggle() {
        this.viewChild.toggle().then(value => {
            this.logEvent('API call resolved: ' + value);
        });
    }
}
```
