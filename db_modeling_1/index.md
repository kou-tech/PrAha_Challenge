# 課題1
## 回答
![ER図](./db_modeling_1_1.png)

## 説明
- 注文には消費税、税抜き金額、税込み金額
- 注文状態は拡張性を考慮して、マスタ値として保持する。
  - Ex.) 10: 支払い前, 20: 支払い済み

# 課題2
## 回答
![ER図](./db_modeling_1_2.png)

- 注文詳細テーブルにサイズ種別カラムを用意する。
Ex.) 1: 小, 2: 中, 3: 大

## 回答
![ER図](./db_modeling_1_2_2.png)
- 個別メニューとセットメニューの中間テーブルを作成する。

# 課題3
## 回答
- お好み寿司で「握り寿司」「軍艦、巻き寿司」「サイドメニュー」でカテゴリーを区別して表示する。(ネタのカテゴリーを分類基準は深く考慮する必要がないです。)

## 回答

![ER図](./db_modeling_1_3_2.png)

- カテゴリーテーブルと注文に紐づく注文予約テーブルを作成。
- さび抜き、サイズは注文詳細テーブルとお好みすし、セットメニューに対して関連テーブルを作成。
- セットメニューはより柔軟にセットのお好みすしとの関連テーブルを作成。

ここまで担保してテーブル設計するのはすごく大変...。