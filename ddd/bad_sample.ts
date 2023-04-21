// 投稿サイトを想定
type Post = {
  id: string;
  title: string;
  body: string;
};

class User {
  constructor(
    public readonly id: string,
    public readonly isPremium: boolean,
    public readonly posts: Post[]
  ) {}
}

const user1 = new User("1", false, [
  { id: "1", title: "title1", body: "body1" },
  { id: "2", title: "title2", body: "body2" },
]);

// ## 投稿ユースケース
// 一般会員は投稿数が5件以上の場合は投稿できない
if (!user1.isPremium && user1.posts.length >= 5) {
  throw new Error("投稿数が5件以上です");
}
