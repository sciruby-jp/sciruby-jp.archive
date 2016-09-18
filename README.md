
[sciruby-jp.github.io](https://sciruby-jp.github.io)は、Rubyにおける科学技術計算/データ可視化ライブラリの現状をまとめたWebページです。

React.jsとcytoscape.jsを用いて作成しています。

# 開発方法

以下のコマンドを実行することで、開発サーバーが起動します。

```bash
$ npm install
$ npm start
```

# jsonファイルの更新方法

`src/ruby.json`、`src/python.json`の２つのファイルは、`src/library_graph.json`の内容を元に生成されています。
これらのファイルを再生成するには、以下のコマンドを実行します。

```bash
$ npm install
$ node src/generate_json.js ${your_github_id} ${your_github_password} # githubレポジトリのスター数を取得するため
```
