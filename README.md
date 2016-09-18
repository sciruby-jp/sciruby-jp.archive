
[sciruby-jp.github.io](https://sciruby-jp.github.io)は、Rubyにおける科学技術計算/データ可視化ライブラリの現状をまとめたWebページです。

React.jsとcytoscape.jsを用いて作成しています。

# 開発方法

以下のコマンドを実行することで、開発サーバーが起動します。

```bash
$ npm install
$ npm start
```

# ライブラリの関係性グラフの更新

ライブラリの関係性グラフは、`src/ruby.json`、`src/python.json`の２つのファイルから生成されています。
また、`src/ruby.json`、`src/python.json`の２つのファイルは、`src/library_graph.json`の内容を元に生成されています。

関係性グラフにライブラリを追加するには、`src/library_graph.json`に追記し、`src/ruby.json`、`src/python.json`を再生成する必要があります。

## `src/library_graph.json`に追記する

Rubyのライブラリを追加するには、`src/library_graph.json`の、`"ruby_libraries"`キーの中に、

```javascript
    {
      "name": "some_ruby_library",
      "github": "https://github.com/repository_owner/some_ruby_library",
      "group": "computing"
    },
```

のようなHashを追記します。

また、ライブラリ間の関係を表す線を追加するには、`"ruby_edges"`キーの中に、

```javascript
    {
      "source": "library_name_using_target_library",
      "target": "library_name_used_by_source_library",
      "description": "library description",
      "type": "${depends|optional}"
    },
```

のようなHashを追記します。

## `src/ruby.json` `src/python.json`の生成
これらのファイルを再生成するには、以下のコマンドを実行します。

```bash
$ npm install
$ node src/generate_json.js ${your_github_id} ${your_github_password} # githubレポジトリのスター数を取得するため
```
