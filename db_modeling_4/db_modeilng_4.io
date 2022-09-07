Table "ユーザー" as user {
  "ユーザーID" int [pk]
  "ユーザー名" varchar
}

Table "リマインダー宛先" as reminder_user {
  "リマインダー宛先ID" int [pk]
  "ユーザーID" int
  "リマインダーID" int
}

Table "リマインダー" as reminder {
  "リマインダーID" int [pk]
  "テキスト" text
  "登録日時" datetime
}

Table "リマインダースケジュール" as reminder_schedule {
  "リマインダースケジュールID" int [pk]
  "リマインダーID" int [pk]
  "単位時間" int
  "時間単位種別" int
  "初回送信日時" datetime
}

ref: user."ユーザーID" < reminder_user."ユーザーID"
ref: reminder."リマインダーID" - reminder_schedule."リマインダーID"
ref: reminder_user."リマインダーID" > reminder."リマインダーID"
