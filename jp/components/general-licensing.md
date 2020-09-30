---
title: Angular ライセンス | ドック マネージャー | Ignite UI for Angular | インフラジスティックス
_description: インフラジスティックスの Ignite UI for Angular ライセンス npm フィードの使用方法について説明します。
_keywords: npm package license,  $PlatformName$ license feed,  licensing, npm パッケージのライセンス, $PlatformName$ ライセンス フィード, ライセンス
_language: ja
---

# Angular 使用許諾契約

購入して使用する Ignite UI for Angular に関するすべての[使用条件](https://jp.infragistics.com/legal/license/igultimate-la)を知っておくことが重要です。

> [!NOTE]
> 2020 年第 2 四半期にライセンス条項とサブスクリプション モデルを更新しました。

**商用製品**をビルドする場合、またはライセンスが[期限切れ](http://jp.infragistics.com/renewal)の場合は、[商用ライセンスを取得する](https://jp.infragistics.com/how-to-buy/product-pricing)必要があります。これにより、<https://packages.infragistics.com/npm/js-licensed/>  でホストされるプライベート npm フィードを開発に使用できます。ここには、Ignite UI for Angular パッケージの最新バージョンがあります。有効な商用ライセンスがある場合、Ignite UI for Angular の製品版をプライベート フィードによりアクセスできます。

> [!NOTE]
> 現在、プライベート npm フィードで **igniteui-dockmanager** パッケージのみ使用できますが、今後は他の Ignite UI for Angular パッケージを追加する予定です。

**市販されない製品**をビルドする場合は、[お気軽にお、問い合わせください](https://jp.infragistics.com/about-us/contact-us)。適切なライセンスを提供します。

## プライベート npm フィードの使用

Npm は Node.js ランタイム環境で使用する一般的なデフォルト パッケージ マネージャーです。プロジェクトに依存するパッケージをすばやく簡単に処理できます。npm の使用方法の詳細については、[npm ヘルプ](https://docs.npmjs.com/)を参照してください。

Infragistics Ignite UI for Angular は npm パッケージで提供され、[いくつかの簡単な手順](./general-getting-started.md)でプロジェクトの依存関係として追加できます。この方法を選択する場合、npm を構成する必要はありません。このパッケージをインストールすると、製品の **Ignite UI for Angular トライアル版**の使用が開始されます。

> [!NOTE]
> 現在、[igniteui-dockmanager](https://www.npmjs.com/package/igniteui-dockmanager) の npm パッケージのみにトライアル ウォーターマークがありますが、今後は他の Ignite UI for Angular パッケージにも追加する予定です。

## プライベート npm フィードを使用するための環境設定方法

### 最初にプライベート レジストリを構成し、レジストリを Infragistics スコープと関連付けます。

これにより公開用の npm レジストリおよびプライベート Infragistics レジストリからのパッケージを同時に使用できます。Infragistics アカウントにログインするユーザー名およびパスワードを入力する必要があります。Infragistics プロファイルに登録されるメールも入力してください。

> [!NOTE]
>  **npm**  はユーザー名で **「@」** の使用を許可しません。ユーザー名が Infragistics アカウントのメール アドレスであるため、**「@」** 記号は既に含まれています。この制限を回避するには、 **「@」** 記号の代わりに **「!!」** (2 つの感嘆符) を使用します。たとえば、ユーザー名が **username@example.com** の場合、**username!!example.com** と入力します。

### npm を使用してプライベート フィードにログインするには、adduser コマンドを実行し、ユーザー アカウントとパスワードを指定します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm adduser --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics --always-auth
</pre>

### 完了した後に、ログイン済みの状態で、プロジェクトで Ignite UI の最新バージョンをインストールできます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm uninstall igniteui-dockmanager
npm install @infragistics/igniteui-dockmanager
</pre>

Ignite UI for Angular パッケージをスコープに設定したため、プライベート フィードおよび npmjs.org からのパッケージを同時にインストールするためにレジストリを変更する必要はありません。

### プロジェクト ソースに追加の変更が必要になる場合があります。

トライアル版からライセンス パッケージにアップグレードする場合:

-   プロジェクトの **tsconfig.json** に **paths** マッピングを追加します。

```json
{
  /* ... */
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    /* ... */
    "paths": {
      "igniteui-dockmanager": ["./node_modules/@infragistics/igniteui-dockmanager"],
      "igniteui-dockmanager/*": ["./node_modules/@infragistics/igniteui-dockmanager/*"],
    }
  }
}
```

-   テーマのインポートを以下のように変更します。

```ts
@import '~igniteui-dockmanager/dist/collection/styles/igc.themes';

// Should be changed to

@import '~@infragistics/igniteui-dockmanager/dist/collection/styles/igc.themes';
```

npm を既に使用していて、Ignite UI for Angular ライセンスがある場合、Infragistics プライベート フィードを構成してください。

## アクセス トークンの使用

アクセス トークンを使用してプライベート npm フィードの認証を受けることもできます。アクセストークンは [infragistics.com ユーザー アカウント](https://account.infragistics.com/access-tokens)で取得できます。アクセス トークン認証は、CI プロセスを Ignite UI for Angular ライセンス パッケージを使用する公開アクセス可能なリポジトリに統合する場合に推奨される代替方法です。

以下は、ローカル構成でアクセス トークンを使用してプライベート npm レジストリへの認証を設定する方法、Azure Pipelines のビルド手順、および Travis CI のビルド プロセスです。

-   <https://account.infragistics.com/access-tokens> からトークンを生成します。

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 600px"
  src="../images/general/generate-token.jpg"
  data-src="../images/general/generate-token.jpg"
  alt="New Token Generated"
  title="Generate new token" />

> 注: 各トークンは Base64 エンコードです。

-   以下を [.npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html) ファイルに追加します。

```json
@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:_auth={YOUR_ACCESS_TOKEN}
//packages.infragistics.com/npm/js-licensed/:username:{YOUR_USERNAME}
//packages.infragistics.com/npm/js-licensed/:always-auth=true
```

## Azure Pipelines の構成

以下の手順で azure-pipelines.yml を更新します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm config set @infragistics:registry $(npmRegistry)
npm config set always-auth true --scope:@infragistics
npm config set _auth=$(token) --scope:@infragistics
</pre>

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 380px"
  src="../images/general/azure-ci-pipelines-ci-yml-3.jpg"
  data-src="../images/general/azure-ci-pipelines-ci-yml-3.jpg"
  alt="Azure Pipelines CI yml update"
  title="Azure Pipelines CI yml update" />

**npm registry** および **token** 変数を追加します。

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 600px"
  src="../images/general/azure-ci-new-variable-2.jpg"
  data-src="../images/general/azure-ci-new-variable-2.jpg"
  alt="Set npm Registry and token variables"
  title="Set npm Registry and token variables" />

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 380px"
  src="../images/general/azure-ci-add-token-variable-1.jpg"
  data-src="../images/general/azure-ci-add-token-variable-1.jpg"
  alt="npm Registry and token variables"
  title="npm Registry and token variables" />

## Travis CI の構成

ここではほとんど同じ方法を使用しますが、構成は [before\_install](https://docs.travis-ci.com/user/job-lifecycle/#the-job-lifecycle) に設定されます。

```json
before_install:
- echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
- echo "//packages.infragistics.com/npm/js-licensed/:_auth=$TOKEN" >> ~/.npmrc
- echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
```

環境変数を定義する方法は、含まれる情報のタイプによって異なるため、[2 つ のオプションがあります](https://docs.travis-ci.com/user/environment-variables/)。

-   暗号化して [.travis.yml](https://docs.travis-ci.com/user/environment-variables/#defining-encrypted-variables-in-travisyml) に追加します。
-   [リポジトリ設定](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings)に追加します。
