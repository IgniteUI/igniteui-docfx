---
title: Ignite UI CLI MCP と Ignite UI Theming MCP を使用したエンド ツー エンドのアプリ構築 - Ignite UI for Angular
_description: Ignite UI CLI MCP と Ignite UI Theming MCP を使用した Ignite UI for Angular のエンド ツー エンド ワークフローを紹介します。CLI ファーストで開始し、両方の MCP サーバーを接続して、チャットでアプリを作成または拡張し、ドキュメントに関する質問を行い、カスタム テーマを適用します。
_keywords: Angular, Ignite UI for Angular, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, ワークフロー, テーマ設定, プロンプト
_language: ja
---

# Ignite UI CLI MCP と Ignite UI Theming MCP を使用したエンド ツー エンドのアプリ構築

<p class="highlight">Ignite UI CLI MCP と Ignite UI Theming MCP を組み合わせることで、AI アシスタントがチャット プロンプトを通じて Ignite UI for Angular アプリケーションのスキャフォールド、拡張、テーマ設定を行えるようになります。CLI MCP はプロジェクトの作成、コンポーネント作業、およびドキュメントの質問を処理します。Theming MCP はパレット、テーマ、トークン、およびスタイリング ワークフローを処理します。このトピックでは、全体のプロセスをわかりやすい 1 つのフローで示します。</p>

<div class="divider"></div>

## CLI MCP と Theming MCP の責任分担

CLI MCP と Theming MCP は、Ignite UI for Angular 開発ワークフローにおいて、明確かつ重複しない責任を持つ 2 つの独立した STDIO トランスポート MCP サーバーです。

| 懸念事項                                              | サーバー      |
| ----------------------------------------------------- | ----------- |
| プロジェクト構造の作成とスキャフォールド              | CLI MCP     |
| Ignite UI for Angular コンポーネントの追加または更新  | CLI MCP     |
| コンポーネント API とドキュメントのクエリ             | CLI MCP     |
| カラー パレットとシェード バリエーションの生成        | Theming MCP |
| グローバル テーマ構成の作成と適用                     | Theming MCP |
| コンポーネントレベルのデザイン トークンの生成         | Theming MCP |
| スペーシング、サイジング、ボーダー半径の調整          | Theming MCP |

どちらのサーバーも自律的にステップを実行しません。AI アシスタントはプロンプトへの応答としてのみ MCP ツールを呼び出します。CLI MCP はテーマまたは Sass ファイルを生成または変更しません。Theming MCP はコンポーネントのスキャフォールド、アプリケーション ロジックの変更、またはドキュメントの質問への回答を行いません。両方のサーバーには STDIO トランスポートをサポートする MCP クライアントが必要です。ブラウザーのみのチャット インターフェースからは使用できません。

## 必要なもの

開始する前に、以下を確認してください:

- `npx` が使用可能な **Node.js** がインストールされていること
- MCP サポートがある対応 AI クライアント
- 初回使用時の `npx` パッケージ解決のためのインターネット アクセス
- プロジェクト用のフォルダー

このウォークスルーは、Ignite UI CLI がプロジェクトをスキャフォールドし、VS Code の最初の MCP 構成を自動的に準備する **CLI ファースト** のセットアップで最も効果的に機能します。

各クライアントの詳細なセットアップ リファレンスが必要な場合は、「[Angular Schematics & Ignite UI CLI](~/components/general/cli-overview.md)」および「[Ignite UI Theming MCP](~/components/ai/theming-mcp.md)」を参照してください。

## 手順 1: Ignite UI CLI から開始する

推奨される開始点は、まず Ignite UI CLI でプロジェクトを作成することです。

Ignite UI CLI は次のいずれかの方法で実行できます:

### グローバル インストール

```bash
npm install -g igniteui-cli
```

これにより、任意のターミナル セッションで `ig` コマンドが使用可能になります。

### グローバル インストールなしで実行

```bash
npx ig new
```

これはグローバルな `ig` コマンドの代わりに `npx` を通じて CLI を実行します。

オプションを案内してもらいたい場合は**ガイド モード**を使用できます:

```bash
ig new
```

`npx` での同等形式:

```bash
npx ig new
```

プロジェクト設定がわかっている場合は、直接コマンドを使用することもできます。

Angular の場合:

```bash
ig new my-app --framework=angular
```

`npx` での同等形式:

```bash
npx ig new my-app --framework=angular
```

次に行われること:

- Ignite UI CLI がプロジェクト構造を作成する
- 必要なプロジェクト パッケージがインストールされる
- CLI ファースト パスの場合、VS Code も初期 `.vscode/mcp.json` を取得する

## 手順 2: CLI MCP と Theming MCP を接続する

プロジェクトが作成されたら、AI クライアントで両方の MCP サーバーが使用可能であることを確認します。

### VS Code

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

### Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアント

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

構成を保存した後、AI クライアントを再起動して、`igniteui-cli` と `igniteui-theming` の両方が利用可能であることを確認します。

## 手順 3: アシスタントにプロジェクトを確認させる

両方の MCP サーバーが実行中になったら、新しいチャットを開き、プロジェクトレベルのコンテキストを提供することから始めます。

有用なプロンプト:

> _「このプロジェクトを確認して、機能を追加する前に現在の構造を説明してください。」_

> _「何が作成されたか、メイン エントリ ポイントはどこか、新しいページをどこに追加すべきかを教えてください。」_

次に行われること:

- CLI MCP が生成済みまたは既存のプロジェクトを検査する
- アシスタントが構造を要約する
- 次のステップの共通の開始点ができる

## 手順 4: チャットを通じて実際の機能を追加する

プロジェクト構造が明確になったら、具体的な機能を要求します。

プロンプト例:

> _「Ignite UI for Angular グリッドを含む Orders ページを追加してください。Order ID、Customer Name、Order Date、Total Amount の列を含め、グリッドをサンプル データにバインドしてください。」_

フォローアップ プロンプト:

> _「Orders グリッドのフィルタリング、ソート、ページングを有効にし、ページのレイアウトをアプリの他の部分と一致させてください。」_

次に行われること:

- CLI MCP が適切なページを追加または更新する
- アシスタントがコンポーネント コードを作成または更新する
- 機能が既存のアプリ構造に統合される

小さな改善を続けることもできます:

> _「グリッドの上にシンプルなツールバーを追加し、レイアウトをコンパクトに保ってください。」_

## 手順 5: 同じセッションでドキュメントの質問をする

コンポーネント API を調べるために会話を離れる必要はありません。

プロンプト例:

> _「Angular グリッドがサポートするフィルタリング オプションと、シンプルな Orders テーブルに最適なものはどれですか?」_

> _「コンボ コンポーネントが公開するイベントと、選択変更に使用すべきイベントはどれですか?」_

> _「サイド ナビゲーション レイアウトに最適な Ignite UI for Angular コンポーネントはどれですか、その理由は?」_

次に行われること:

- CLI MCP がドキュメント対応ツールを使用して質問に回答する
- すぐに実装リクエストでフォローアップできる

例えば:

> _「現在の Orders グリッドに推奨されるフィルタリング アプローチを適用してください。」_

## 手順 6: カスタム テーマを適用する

アプリ構造とメイン機能が整ったら、同じチャットで Theming MCP に切り替えます。

プロンプト例:

> _「アプリにプロフェッショナルなテーマを適用してください。ディープ ブルーのプライマリ カラー、ウォーム アンバーのセカンダリ カラーを使用し、スペーシングはコンパクトに保ってください。」_

次に行われること:

- Theming MCP がパレットとテーマ構成を生成する
- アシスタントが適切なテーマまたはスタイル ファイルを更新する
- アプリのスタイリングが現在の構造と整合性を保つ

より的を絞ったプロンプトでテーマをさらに改良できます:

> _「グリッド ヘッダーにプライマリ カラーを使用し、行の高さをわずかに増やし、ページの残りの部分をビジュアル的にクリーンに保ってください。」_

> _「グリッドのスタイリングを改良する前に、生成されたプライマリとセカンダリのパレット シェードを表示してください。」_

## 手順 7: 繰り返し改善する

このワークフローの最も強力な部分は、1 つの会話でプロジェクト作業、ドキュメントの質問、テーマ設定を行き来し続けられることです。

プロンプト例:

> _「現在の Orders ページ構造を維持しながら、レイアウトを簡素化し、フィルター エリアをよりコンパクトにしてください。」_

> _「現在のテーマを使用しながら、ダッシュボード カードとグリッドのスペーシングをアプリの他の部分とより一致させてください。」_

> _「生成されたファイルを確認し、行ったプロジェクト、コンポーネント、テーマの主な変更を説明してください。」_

次に行われること:

- CLI MCP がプロジェクトとコンポーネントの改良を処理する
- Theming MCP がテーマとトークンの改良を処理する
- アシスタントがワークフロー全体をエンド ツー エンドで接続し続ける

## トピックのまとめ

このワークフローは、プロジェクトのセットアップ、コンポーネント作業、ドキュメントの検索、テーマ設定を 1 つのチャット セッションにまとめたい場合に効果的です。

以下の場合に使用してください:

- 孤立したコード スニペットではなく、実際のプロジェクト スキャフォールドから開始したい場合
- 実装とドキュメントの質問を交互に行うことが予想される場合
- プロジェクト構造とビジュアル スタイリングを一緒に発展させたい場合

実際には、最も効果的なパターンは、CLI MCP をプロジェクトとコンポーネントの変更に使用し、必要に応じてドキュメントの質問のために一時停止し、同じ会話を離れずに Theming MCP を使用して結果を改良することです。

## 関連トピック

- [Angular Schematics & Ignite UI CLI](~/components/general/cli-overview.md)
- [Ignite UI Theming MCP](~/components/ai/theming-mcp.md)
- [Ignite UI for Angular スキル](~/components/ai/skills.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
