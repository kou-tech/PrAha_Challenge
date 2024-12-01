## 課題1
次の手順で、EC2にNginxを導入し、それぞれのEC2インスタンスから別々のHTMLページを返すようにした。
1. 各AZのプライベートサブネットにEC2インスタンスを作成する。
2. 各EC2インスタンスにSSH接続する。
3. EC2にNginxをインストールするために、NATゲートウェイを経由してインターネットにアクセスできるようにする。
4. EC2のアウトバウンドルールを設定して、インターネットにアクセスできるようにする。
5. Nginxをインストールする。
```bash
sudo dnf install nginx
```

- Nginxを起動

```bash
sudo systemctl start nginx
```

- 自動起動を有効化

```bash
sudo systemctl enable nginx
```

6. HTMLページを作成
- AZ1のEC2インスタンスには「hello from AZ 1」と表示するページを作成
- AZ2のEC2インスタンスには「hello from AZ 2」と表示するページを作成

## 課題２

次の手順で、ALBを設置して、ALB経由でブラウザからNginxで設定したページにアクセスできるようにした。

ALBを作成
- パブリックサブネットにALBを作成
- セキュリティグループを設定して、HTTPトラフィックを許可
- ターゲットグループを作成
- ターゲットグループにEC2インスタンスを登録
- リスナーを設定して、ALBのDNS名でアクセスできるようにする

## 補足
Aレコードは、Domain Name System (DNS) のレコードタイプの一つである。

- ドメイン名をIPアドレスに関連付ける。例えば、「example.com」というドメイン名を「192.0.2.1」というIPアドレスに紐づける。
- ウェブサイトやサーバーにアクセスする際に使用される。ブラウザがドメイン名を入力すると、DNSサーバーがAレコードを参照してIPアドレスを返す。
- AWSのALBの場合、AレコードはALBのDNS名（例：my-load-balancer-1234567890.us-west-2.elb.amazonaws.com）をポイントする。
