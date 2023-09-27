import React from 'react';
import './Output.css'
import blog1 from '../../assets/images/taboo.png'
import blog2 from '../../assets/images/hack.png'
import syojin from '../../assets/images/精進コーダー.png'

const Contest: React.FC = () =>{
    return(
    <div className="programming-contest">
    <h3>・競技プログラミング</h3>
    <p>競技プログラミングのAtcoderを2023年2月19日に開始しました。</p>
    <p>2023年7月22日にレート400(所謂茶色コーダー)に到達しました。</p>
    <p>現在もレートを伸ばしており、年末までにレート800(緑コーダー)になれるよう新しいアルゴリズム、データ構造を学び続け、精進しています。</p>
    <div className="parti-sen">
        <p>現在のレートは以下のページから確認可能です。</p>
    </div>
    <a href="https://atcoder.jp/users/Dot_P" className="url-pro">https://atcoder.jp/users/Dot_P</a>
    </div>
    );
};

const Blog: React.FC = () =>{
    return(
    <div className="blog-container">
        <h3>・技術ブログ</h3>
        <div className="caption-container">
            <div className="blog-pics">
                <a href="https://qiita.com/DotP_engineer/items/9a3a2eea61d3efc6005a">
                <img src={blog1}/>
                </a>
                <a href="https://qiita.com/DotP_engineer/items/b2a5c3a3fc088e6520bb">
                <img src={blog2}/>
                </a>
            </div>
            <div className="blog-caption">
                <p>日本語の文献が少ない技術、参加したプロジェクトに関しての技術系ブログを書いています。オススメの記事を左にあげておきます。</p>
                <p>(画像クリックで記事にとびます)</p>
                <ul>
                    <li>スタイナー木問題とタブー探索</li>
                    <li>ハッカソンは個人参加とチーム参加どちらがいいのか</li>
                </ul>
            </div>
        </div>
    </div>
    );
};

const Artwork: React.FC = () =>{
    return(
    <div className="artwork-container">
        <h3 id="target-output">・制作物</h3>
        <a href="https://www.canva.com/design/DAFr9l7QC7c/yee8nfYD4GEeYVOorQjHBQ/view?utm_content=DAFr9l7QC7c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
            <img src={syojin}/>
        </a>
        <p>※ 画像をクリックすることでリンクに飛びます。</p>
        <h4>プロダクト概要 :</h4>
        <p>精進コーダーは競技プログラミングの学習サイトです。この学習サイトは、ユーザーの苦手分野に対応した問題推薦、フレミングの忘却曲線に基づくスコア評価、進捗分析、および気分に応じた学習オプションを提供します。これらを通じて、各ユーザーに最適化された効率的な学習環境を作り出しています。自然言語処理の基本的な理論、スクレイピング技術を用いています。マンスリーハッカソンvol.8でGMOインターネットグループ賞をいただき、入賞者のみが参加可能なアドバンスハッカソンに向け、開発を継続しています。</p>
        <h4>開発期間 :</h4>
        <p> 2 週間 (学習期間も含む) </p>
        <h4>使用技術 :</h4>
        <p>Node.js、Javascript、React、TypeScript、CSS、Python、Flask、Numpy、Matplotlib、Pandas、Scikit-learn、MeCab、SQLite、Selenium、Git、Github</p>
        <h4>挑戦したこと :</h4>
        <ul>
            <li>React-router-domの使用（前回のハッカソンからのリベンジ）</li>
            <li>MeCabを利用した形態素分析</li>
            <li>TF-IDFを用いた分類</li>
            <li>初めてのDB設計</li>
            <li>初めてのTypeScript、Flask</li>
        </ul>
    </div>
    );
};

const Output: React.FC = () => {
    
  return (
    <div className="output-container">
        <h2>アウトプット、制作物</h2>
        <Contest />
        <Blog />
        <Artwork />
    </div>
  );
};

export default Output;
