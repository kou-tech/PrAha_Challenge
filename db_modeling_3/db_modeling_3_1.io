Table "ユーザー" as user {
  "ユーザーID" int [pk]
  "ユーザー名" varchar
}

Table "ディレクトリ" as directory {
  "ディレクトリID" int [pk]
  "ディレクトリ名" varchar
  "更新日時" datetime
  "ルートフラグ" bool
}

Table "ドキュメント" as document {
  "ドキュメントID" int [pk]
  "ユーザーID" int
  "ディレクトリID" int
  "作成日時" datetime
}

Table "テキスト" as text {
  "テキストID" int [pk]
  "ドキュメントID" int
  "ユーザーID" int
  "タイトル" varchar
  "テキスト" text
  "更新日時" datetime
}

Table "ディレクトリ関係" as directory_relation {
  "祖先ディレクトリID" int
  "子孫ディレクトリID" int
  "深さ" int
}

ref: directory."ディレクトリID" < directory_relation."祖先ディレクトリID"
ref: directory."ディレクトリID" < directory_relation."子孫ディレクトリID"
ref: directory."ディレクトリID" < document."ディレクトリID"
ref: user."ユーザーID" < document."ユーザーID"
ref: document."ドキュメントID" < text."ドキュメントID"
ref: user."ユーザーID" < text."ユーザーID"