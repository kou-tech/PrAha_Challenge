Table "ユーザー" as user {
  "ユーザーID" int [pk]
  "ユーザー名" varchar
}

Table "ディレクトリ" as directory {
  "ディレクトリID" int [pk]
  "ユーザーID" int
  "ディレクトリ名" varchar
  "更新日時" datetime
}

Table "ドキュメント" as document {
  "ドキュメントID" int [pk]
  "ディレクトリID" int
  "ファイル名" varchar
  "作成日時" datetime
  "ソート番号" int
}

Table "テキスト" as text {
  "テキストID" int [pk]
  "ドキュメントID" int
  "ユーザーID" int
  "テキスト" text
  "更新日時" datetime
}

Table "ディレクトリ関係" as directory_relation {
  "祖先ディレクトリID" int
  "子孫ディレクトリID" int
  "深さ" int
}

ref: user."ユーザーID" < directory."ユーザーID"
ref: directory."ディレクトリID" < directory_relation."祖先ディレクトリID"
ref: directory."ディレクトリID" < directory_relation."子孫ディレクトリID"
ref: directory."ディレクトリID" < document."ディレクトリID"
ref: document."ドキュメントID" < text."ドキュメントID"
ref: user."ユーザーID" < text."ユーザーID"