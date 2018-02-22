﻿---
title: Toggle ディレクティブ
_description: Ignite UI for Angular Toggle ディレクティブは、ネイティブ Angular フレームワークで Toggle ディレクティブを実装する要素に含まれるコンテンツを直感的に開いたり、閉じたりできるボックスとして使用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Toggle ディレクティブ, Angular Toggle コントロール
---

## Toggle

<p class="highlight">Ignite UI for Angular Toggle ディレクティブは、コードまたは操作によって開いたり、閉じたりできるボックスにコンテンツをラップします。</p>
<div class="divider"></div>

### Toggle デモ

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
</div>

> [!WARNING]
> Ignite UI for Angular に [**HammerJS**](https://hammerjs.github.io/) の[ピア依存関係](https://nodejs.org/en/blog/npm/peer-dependencies/)があります。
> それを Angular プロジェクトに追加してください。
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

## 使用方法

Toggle は、簡単に開いたり、閉じたりできるボックスにコンテンツをラップします。

Ignite UI for Angular Toggle を初期化する前に、**IgxToggleModule** を **app.module.ts** ファイルにインポートします。また、**igxButton** ディレクティブを使用するため、**IgxButtonModule** も **app.module.ts** にインポートする必要があります。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

コンポーネントのテンプレートで、トグル可能になる要素にディレクティブを適用します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Strawberries</li>
            <li>Raspberry</li>
            <li>Cherry</li>
        </ul>
    </section>
</div>
```

このコンテンツを表示/非表示にするには、open または close メソッドを呼び出します。

```typescript
import { IgxToggleDirective } from 'igniteui-angular/main'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggle() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

以下は結果です:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" src='{environment:demosBaseUrl}/toggle-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
</div>

### トグル自動操作

このメソッドの呼び出しを回避するための `onClick` ハンドラーを含む、参照トグルの状態を変更できるディレクティブがあります。この機能を使用するには、同じ **IgxToggleModule** にある **IgxToggleActionDirective** を使用します。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

次にテンプレートで **IgxToggleDirective** を割り当てて **IgxToggleActionDirective** を宣言します。トリガー (トグル) として使用する要素で **IgxToggleActionDirective** を宣言します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <img src="link to random image"/>
    </section>
</div>
```

この変更後、トグルが以下のように動作します。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-2-iframe" src='{environment:demosBaseUrl}/toggle-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
</div>

### サービス プロバイダーを使用するトグル自動操作

状態を保持し、**igxToggle** をコマンドするには、**igxNavigationService** プロパイダーを使用します。アプリケーションで状態を追跡する場合に便利です。**igxToggle** ディレクティブの識別子を設定すると、サービスの登録が処理されます。この状態を自動的に制御するには、この識別子をヘルパー **igxToggleActionDirective** に渡します。

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" [closeOnOutsideClick]="true" class="toggle-button"  igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content" [collapsed]="false">
    <section class="toggle-section">
    <h3>Click 
        <br/> Out of the Box</h3>
    </section>
</div>
```

結果は以下のようになります。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-3-iframe" src='{environment:demosBaseUrl}/toggle-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       StackBlitz で表示
    </button>
</div>


## API まとめ

このトピックでは Toggle ディレクティブの使用方法について紹介しました。この動作を決定するコードでメソッドを呼び出して表示または非表示にすることができるコンテンツを作成しました。

さらに適切なトグル参照を使用して同じ動作を自動的に制御するその他のディレクティブを追加しました。最後に、ヘルパー **igxToggleAction** ディレクティブに提供された ID を使用して、**igxToggle** ディレクティブを **igxNavigationService** プロバイダーに登録しました。

### 入力
以下の入力は **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `collapsed` | Boolean | トグルが開くか閉じるかを決定します。 |
| `id` | Boolean | **igxNavigationService** に登録される識別子。 |

<div class="divider"></div>

以下の入力は **igxToggleAction** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `igxToggleAction` | IgxToggleDirective | 制御するトグルを受け付けます。 |
| `closeOnOutsideClick` | IgxToggleDirective | 外をクリックすると、トグルを閉じるかどうかを決定します。 |

<div class="divider"></div>

#### 出力
以下の出力は **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onOpen` | EventEmitter | トグル コンテナーが開いたときにイベントを発生します。 |
| `onClose` | EventEmitter | トグル コンテナーが閉じたときにイベントを発生します。 |

<div class="divider"></div>

#### メソッド
以下のメソッドは **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `open` | void | トグルを開きます。 |
| `close` | void | トグルを閉じます。 |
| `toggle` | void | 状態によってトグルを開くか、閉じます。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
