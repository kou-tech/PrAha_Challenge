// 投稿サイトを想定
type Post = {
  id: string;
  title: string;
  body: string;
};

class User {
  constructor(
    private id: string,
    private age: number,
    private isPremium: boolean,
    private posts: Post[]
  ) {}

  canPost(): boolean {
    if (this.isPremium) {
      return true;
    }
    return this.posts.length < 5;
  }

  canShare(): boolean {
    return this.age >= 18;
  }
}

const user1 = new User("1", 18, false, [
  { id: "1", title: "title1", body: "body1" },
  { id: "2", title: "title2", body: "body2" },
]);

// ## 投稿ユースケース
// 一般会員は投稿数が5件以上の場合は投稿できない
if (!user1.canPost()) {
  throw new Error("投稿数が5件以上です");
}

// ## 共有ユースケース
// 18歳未満は共有できない
if (!user1.canShare()) {
  throw new Error("18歳未満は共有できません");
}
