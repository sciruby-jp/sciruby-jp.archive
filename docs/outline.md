# タイトル
SciRuby プロジェクトへようこそ
## サブタイトル
科学技術計算 + Ruby ユーザー，開発者のためのハブサイト

# Text for both

## 序文
SciRuby は 科学技術計算，データ可視化用途のgem群の総称です．
結論から述べるとまだ「SciRubyはPythonの科学技術計算パッケージ群より未熟」で実用段階にありません．
我々は SciRuby 実用化へのタスクトラックへのリンクを Python と機能ネットワークと統合し可視化を行いました．
このハブサイトを閲覧されることで

- Python のこの機能は Ruby で実現できるか?
- 今 SciRuby プロジェクトにはどのようなタスクトラックがあるのか?
- なぜ我々は (Pythonだけ，を使うのではなく) 科学技術計算用途で未整備のRuby gem群を整備しているのか

がわかります．

### なぜ我々は (Pythonだけ使う，のではなく) 科学技術計算用途で未整備のRuby gem群を整備しているのか

- Ruby 言語開発者，サポート団体が言語の活用範囲を広げたいと考えているため
  - Ruby コミッターが何人か本プロジェクトに居ます．[@ko1](https://github.com/ko1) [@mrkn](https://github.com/mrkn) [@ngoto](https://github.com/ngoto)
  - Ruby を通じたまちづくりを行う島根県の[しまねソフト研究開発センター](http://www.s-itoc.jp/) も本プロジェクトをサポートしています

- Python よりも Ruby で書けると嬉しいと考えるユーザーがいるため
  - Ruby が Python よりも「楽しく」書けると感じているようです

- 複数言語の学習により見識を広めるため

## ネットワーク図の説明
Pythonボタン，Rubyボタンをクリックすることで各機能グループに対応するパッケージ群が切り替わります．
ネットワークのノードをつなぐ線は各パッケージが連携して機能することを表しています．ノードの大きさはGitHubでのstarの数を表しています．
Ruby のネットワークでノードをクリックすると各gemのタスクトラックへジャンプします．

# Text for Python network

- Python では numpy がほぼすべてのノードに対するハブとなっています．numpy を介して異なるpacakgeの連携が可能となっています
  - データ前処理 > 計算 > 可視化 といった連携がスムーズに行えます

# Text for Ruby network

## SciRuby は実用に足るのか?

- Pythonに比較して Ruby では narray がよく用いられてはいるもののgem間のインタフェースの統一が取れておらず科学技術計算のためのパイプラインが組めないのが現状です．
- 現状 Python の numpy に相当する [numo-narray](https://rubygems.org/gems/numo-narray/), pandas に相当する [daru](https://rubygems.org/gems/daru) 以外は未熟であると言わざるを得ません
  - これらは [100 narray exercises](https://github.com/ruby-numo/narray/wiki/100-narray-exercises) や [pandas tutorial with daru](https://github.com/sciruby-jp/survey) のように実例も比較的整っています．
