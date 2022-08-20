Table "ユーザー" as user {
  "ユーザーID" int [pk]
  "ユーザー名" varchar
}

Table "注文" as order {
  "注文ID" int [pk]
  "ユーザーID" int
  "注文日時" datetime
  "税抜き合計注文金額" int
  "税込み合計注文金額" int
  "消費税" int
  "注文状態" tinyint
}

Table "注文詳細" as order_detail {
  "注文詳細ID" int [pk]
  "注文ID" int
  "注文数" int
  "税抜き商品金額" int
  "さび入り" int
  "サイズ" tinyint
}

Table "注文お好みすし" as order_single_menu {
  "注文お好みすしID" int [pk]
  "注文詳細ID" int
  "お好みすしID" int
}

Table "お好みすし" as single_menu {
  "お好みすしID" int [pk]
  "税抜き商品金額" int
  "商品名" varchar
  "削除日時" datetime
}

Table "注文セットメニュー" as order_set_menu {
  "注文セットメニューID" int [pk]
  "注文詳細ID" int
  "セットメニューID" int
}

Table "セットメニュー" as set_menu {
  "セットメニューID" int [pk]
  "税抜き商品金額" int
  "商品名" varchar
  "削除日時" datetime
}

Table "セットすしメニュー" as set_single_menu {
  "セットすしメニューID" int [pk]
  "お好みすしID" int
  "セットメニューID" int
  "削除日時" datetime
}


ref: user."ユーザーID" < order."ユーザーID"
ref: order."注文ID" < order_detail."注文ID"
ref: order_detail."注文詳細ID" < order_single_menu."注文詳細ID"
ref: single_menu."お好みすしID" < order_single_menu."お好みすしID"
ref: order_detail."注文詳細ID" < order_set_menu."注文詳細ID"
ref: set_menu."セットメニューID" < order_set_menu."セットメニューID"
ref: single_menu."お好みすしID" < set_single_menu."お好みすしID"
ref: set_menu."セットメニューID" < set_single_menu."セットメニューID"
