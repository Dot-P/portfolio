import React from 'react';
import './Certification.css'

const Certification: React.FC = () => {

    const timelineData = [
        { date: "2022.03.31", event: "群馬県立太田高等学校卒業" },
        { date: "2022.04.01", event: "東京理科大学 工学部 情報工学科 入学" },
        { date: "2023.06.23", event: "2022年度成績優秀者 受賞"},
        { date: "2023.07.22", event: "Atcoder レート400（茶色）到達"},
        { date: "2023.08.20", event: "マンスリーハッカソン GMOインターネットグループ 企業賞 受賞"},
        { date: "2023.08.29", event: "松尾研主催 GCI 2023 Summer修了"},
        { date: "2023.09.11", event: "Progate Path コミュニティー運営"},
        { date: "2023.09.15", event: "Progate Path 学生アンバサダー就任"},
        { date: "2023.10.31", event: "松尾研主催 LLM 2023 Summer修了"},
        { date: "2023.12.01", event: "株式会社Nebraskaにてインターン開始"},
        { date: "2023.12.02", event: "Atcoder レート800（緑色）到達"},
        { date: "2023.12.16", event: "技育CAMPアドバンス ウイングアーク1st 企業賞 受賞"},
        { date: "2023.01.27", event: "松尾研主催 深層強化学習 参加中"},
        { date: "2023.01.27", event: "松尾研主催 金融市場取引と機械学習 参加中"},
        { date: "2023.01.27", event: "松尾研主催 深層生成モデル 参加中"},
        { date: "2024.01.30", event: "現在、東京理科大学 工学部 情報工学科 2年生として在籍中"},
    ];

  return (
    <div className="Certification-container">
        <h2 className="section" id="target-certi">経歴・成績</h2>
        <ul>
      {timelineData.map((item, index) => (
        <li key={index}>
          <span className="underline-text">
            <p className="event-date">{item.date}</p>
            <p>{item.event}</p>
          </span>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Certification;
