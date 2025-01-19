# 課題1

## A.

1. Sentry

アプリケーションのエラーモニタリングツールで、エラーの検出、追跡、通知をリアルタイムで行える。
Slackとの連携機能があり、特定の条件下でエラー通知を自動的に送信することが可能である。

https://docs.sentry.io/

2. Datadog

インフラストラクチャやアプリケーションのモニタリングプラットフォームで、エラートラッキング機能も備えている。
特定の条件でSlackへの通知を設定することができる。

https://docs.datadoghq.com/ja/integrations/slack/?tab=datadogforslack

3. Azure Application Insights + Azure Monitor

Azure Application Insightsは、アプリケーションのパフォーマンス監視とエラーログの収集を行うサービスである。
これにより、アプリケーションのクラッシュ情報を収集し、分析することが可能である。

Azure Monitorは、収集されたデータに基づいてアラートを設定し、特定の条件で通知をトリガーすることができる。
アラート機能を使用し、特定のログが出力された際にSlackに通知を送る仕組みを構築することが可能である。

## A.

1. Sentry

参考記事
- https://sentry.io/for/frontend/

2. Datadog

参考記事
- https://docs.datadoghq.com/ja/logs/log_collection/javascript/

## A.

1. Amazon CloudWatch と AWS Lambda の組み合わせ

Amazon CloudWatch は、AWS リソースの監視サービスで、EC2 インスタンスのステータスチェックを行い、異常を検知できる。CloudWatch アラームを設定し、ステータスチェックの失敗時にトリガーとして AWS Lambda 関数を実行し、インスタンスの再起動と Slack への通知を行うことが可能できる。

参考記事：
- https://blog.mmmcorp.co.jp/2023/11/27/statuscheck-alarm-notification/

2. Azure App ServiceのAuto-Heal機能

アプリケーションの健全性を監視し、特定の条件（例: メモリ使用量の増加、特定のHTTPステータスコードの頻発など）に達した場合、自動的にアプリケーションを再起動するAuto-Heal機能を提供している。

参考記事：
- https://learn.microsoft.com/ja-jp/azure/app-service/troubleshoot-performance-degradation

## A.
1. Amazon CloudWatch と AWS Lambda の組み合わせ

Amazon CloudWatchを使用してAPIのレスポンスタイムをモニタリングし、5秒以上のレスポンスタイムが全体の10%を超えた場合にアラームを発生させることができる。このアラームをトリガーとしてAWS Lambda関数を実行し、Slackへ自動通知を行うことが可能である。

## A.
1. Amazon CloudWatch Logs と AWS Lambda の組み合わせ

RDS のスロークエリログを CloudWatch Logs にエクスポートし、CloudWatch Logs Insights を使用して特定の条件（例: クエリ時間が5秒以上）に一致するログをクエリする。このクエリ結果を基に CloudWatch アラームを設定し、アラームがトリガーされた際に AWS Lambda を介して Slack に通知を送信する。

# 課題2
## A.
- サーバーのCPU使用率
- メモリ使用率
- ディスクI/O
- ネットワークトラフィック
- エラーレート
- アプリケーションのスレッド数
- HTTP ステータスコードの分布（特に4xx、5xxエラー）
- キャッシュのヒット率とミス率
- リクエスト数
- セッション数
