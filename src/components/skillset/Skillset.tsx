import React from 'react';
import './Skillset.css'
import html from '../../assets/images/html.png'
import javascript from '../../assets/images/javascript.png'
import typescript from '../../assets/images/Typescript.png'
import dart from '../../assets/images/Dart.png'
import clang from '../../assets/images/C.png'
import cpp from '../../assets/images/C++.png'
import python from '../../assets/images/Python.png'
import flask from '../../assets/images/Flask.png'
import mysql from '../../assets/images/mysql.png'
import sqlite from '../../assets/images/SQLite.png'
import linux from '../../assets/images/linux.png'
import git from '../../assets/images/github.png'

const Skillset: React.FC = () => {

  const skillsetData = [
    {
      image: html,
      name: "HTML5/CSS3",
      stars: 2,
      description: "HTMLとCSSの基本的な概念を押さえている。見出し、画像、リンクなどの基本的なHTML要素を使い、ウェブページの構造を作成できる。また、CSSを使用したレシポンシブデザインや簡単なアニメーションの作成が可能。"
    },
    {
      image: javascript,
      name: "JavaScript",
      stars: 2,
      description: "JavaScriptを用いたDOM操作、イベント処理、Fetch などの基本的なフロントエンド開発タスクを遂行できる。また、Reactライブラリを用いたstateの管理が可能で、モダンなアプリケーションを開発した経験がある。"
    },
    {
      image: typescript,
      name: "TypeScript",
      stars: 2,
      description: "JavaScriptの基本を理解しており、TypeScriptの型システムに慣れている。簡単なTypeScriptプロジェクトを設定し、基本的な型注釈とインターフェースを使用してコードの品質を高めることができる。"
    },
    {
      image: dart,
      name: "Dart",
      stars: 1,
      description: "趣味でモバイルアプリの開発をしようと思い、現在勉強中。基本的な文法から学んでいる。"
    },
    {
      image: clang,
      name: "C言語",
      stars: 4,
      description: "授業で使うことが多く、多数のデータ構造とアルゴリズムを実装した経験があり。ポインタ、構造体、メモリ管理などのC言語の高度な特性を活用して、クイックソートやダイクストラ法といった多様なアルゴリズムの作成可能。"
    },
    {
      image: cpp,
      name: "C++",
      stars: 5,
      description: "C++を主言語として毎週競技プログラミングに参加しており、レートも右肩上がりである。C++を触らない日がないほどの推し言語。アルゴリズムに加え、計算量分析を行い、多くのプログラムの効率を向上させる方法に精通している。"
    },
    {
      image: python,
      name: "Python",
      stars: 4,
      description: "機械学習においては、numpyでの数値計算、pandasでのデータ前処理、scikit-learnでのモデル構築と評価が可能。さらに、Webスクレイピング技術を活用したデータ収集やChatGPT APIを用いたアプリケーション開発も可能。"
    },
    {
      image: flask,
      name: "Flask",
      stars: 2,
      description: "Pythonの軽量フレームワークであるFlaskを使用して、ウェブアプリケーションを構築した経験あり。データベースとの連携、Jinja2テンプレートエンジンを用いたフロントエンド開発、ChatGPT-APIとの連携の経験がある。"
    },
    {
      image: mysql,
      name: "MySQL",
      stars: 1,
      description: "MySQLを用いて基本的なデータベース操作を行うことができる。これには、データの挿入、削除、更新、そして照会などが含まれる。ただし、より高度な操作や最適化にはまだ習熟していない。"
    },
    {
      image: sqlite,
      name: "SQLite",
      stars: 2,
      description: "SQLiteを用いて基本的なデータベース操作を行うことができる。これには、データの挿入、削除、更新、そして照会などが含まれる。ただし、より高度な操作や最適化にはまだ習熟していない。"
    },
    {
      image: linux,
      name: "Linux",
      stars: 5,
      description: "Ubuntu を主要なOSとして利用。基本的なターミナル操作はもちろん、効率化のために簡単なシェルスクリプトを自ら作成する経験もあり。公式ドキュメントを参考にして様々な環境構築を行うことができる。"
    },
    {
      image: git,
      name: "Git/Github",
      stars: 3,
      description: "Gitを使用したバージョン管理が可能。コードのステージング、コミット、プッシュ、マージなどブランチ管理も可能。ハッカソンやヒューリスティックコンテストのチーム開発においてGit、Githubを用いた経験あり。"
    },
  ];
  
  return (
    <div className="skillset-container">
      <div className="skill-title">
        <h2 id="target-skill">使用な技術</h2>
        <p>使用頻度をもとに5段階評価をしています。</p>
      </div>
      <div className="skills-frame">
        {skillsetData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-pic">
              <img src={skill.image} />
            </div>
            <div className="skill-caption">
              <h3>{skill.name}</h3>
              <div className="stars">
                {Array.from({ length: skill.stars }, (_, i) => (
                  <span className="star1" key={i}>&#9733;</span>
                ))}
                {Array.from({ length: 5 - skill.stars }, (_, i) => (
                  <span className="star0" key={i + skill.stars}>&#9733;</span>
                ))}
              </div>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skillset;
