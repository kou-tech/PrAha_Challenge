# 課題1

## A.
[成果物](https://github.com/kou-tech/praha-frontend)

# 課題2.

## A.
- CLIで作ったプロジェクトをそのまま使うと、職場のインフラ環境と合わず動かないことがある
    - 職場のサーバー環境を事前に確認する（言語、フレームワーク、パッケージマネージャーのバージョンなど）
    - SSRが必要な場合、デプロイ方法を検討する（VercelやFirebase Hostingなどのパブリッククラウドサービスの利用など）
- 設定ファイルの中身を理解しないと、トラブルが発生しても対応できない
    - `next.config.js` や `vite.config.ts` の内容を理解する
    - 環境に合った設定が必要か考える
- 依存関係を理解せずにアップデートすると動かなくなる可能性がある
    - `package.json` の `dependencies` を定期的に確認し、セキュリティの脆弱性や非推奨機能がないかチェックする
    - バージョンアップは、互換性の問題や機能への影響を十分に検証してから実施する

## A.

Chakra UIの例

```tsx
import { Box, Text, Button } from "@chakra-ui/react";

const ChatMessage = ({ message }) => {
  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <Text>{message}</Text>
      <Button colorScheme="blue">返信</Button>
    </Box>
  );
};

```

素のReact + CSS Modulesで実装したコンポーネントの例

```tsx
import styles from "./ChatMessage.module.css";

const ChatMessage = ({ message }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{message}</p>
      <button className={styles.button}>返信</button>
    </div>
  );
};
```

Chakra UIのコンポーネントを直接使わず、抽象化する

```tsx
import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  return <Button {...props} colorScheme="blue" />;
};

export default CustomButton;
```

Chakra UIはMVP開発では便利ですが、本番環境での利用には慎重な検討が必要である

デザインを完全にカスタマイズするためには、Chakra UIのテーマ設定を調整し、独自のコンポーネントを実装する必要がある

将来のデザイン変更やバージョンアップによる影響を最小限に抑えるため、コンポーネントの適切な抽象化を検討する必要がある

# 課題3.

## A.
私がNext.jsとshadcnの組み合わせを選んだ理由は、v0の恩恵を最大限に活用できることと、shadcnが広く知られているライブラリであり、私自身も開発経験があるため。
