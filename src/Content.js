import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <img src={this.props.imgUrl} ref="img" />
        <section>
          <h3>SciRubyとは</h3>
          <p>
            SciRubyは科学技術計算・データ可視化用途のgem群の総称で、このサイトでは
            <ul>
              <li>なぜ我々が(RuPythonだけを使うのではなく)科学技術計算用途で未整備のRuby gem群を整備しているのか</li>
              <li>Pythonのこの機能はRubyで実現できるか?</li>
              <li>今SciRubyプロジェクトにはどのようなタスクトラックがあるのか?</li>
            </ul>
            を可視化と共にお伝えします。
          </p>
        </section>
        <section>
          <h3>ネットワーク図の説明</h3>
          <p>
            Pythonではnumpyがほぼすべてのhubとなっています。numpy を介して異なるpacakgeの連携が可能となっています。
            データ前処理 {'>'} 計算 {'>'} 可視化といった連携がスムーズに行えます。
            一方Rubyではnarrayがよく用いられてはいるもののgem間のインタフェースの統一が取れておらず科学技術計算のためのパイプラインが組めないのが現状です。
          </p>
        </section>
        <section>
          <h3>なぜ我々が(Pythonだけ使うのではなく)科学技術計算用途で未整備のRuby gem群を整備しているのか</h3>
          <p>
            <ul>
              <li>
                Ruby言語開発者，サポート団体が言語の活用範囲を広げたいと考えているため
                <ul>
                  <li>Rubyコミッターが何人か本プロジェクトに居ます</li>
                  <li>Rubyを通じたまちづくりを行う島根県のしまねソフト研究開発センター も本プロジェクトをサポートしています</li>
                </ul>
              </li>

              <li>
                Python よりも Rubyで書けると嬉しいと考えるユーザーもいる
                <ul>
                  <li>RubyがPython よりも「楽しく」書けると感じているようです</li>
                </ul>
              </li>

              <li>
                複数言語学習により見識を広めるため
                <ul>
                  <li>Python 製パッケージだけを使っていると気がつかない(であろう)ことに(Rubyと比較をすることで)気が付く．(scikit-learnの優れた設計など)</li>
                </ul>
              </li>
            </ul>
          </p>
        </section>
      </div>
    );
  }
}

export default Content;
