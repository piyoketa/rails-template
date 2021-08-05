# 環境構築
## 1. 前提
- [nyshk97さんによるRailsのtemplate](https://github.com/nyshk97/rails_heroku_template) を元にしています。
- このレポジトリは、Docker および Visual Studio Code(以下 VSCode)のプラグインである[Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)を使用して開発することを推奨しています。

## 2. DB作成
```
$ cp .env.default .env
$ docker-compose build
$ docker-compose run web yarn upgrade #キャッシュが原因でこける場合あり。こけたらtmp/cacheを削除して対応
$ docker-compose up
$ docker-compose exec web rails db:create
$ docker-compose exec web rails db:migrate
```

## 3. VScode Remote Containerで開く
### 2-1. 下準備
- 参考記事: [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) の install の欄を見てください
1. VSCodeをinstallしてください。
1. VScodeの拡張機能ペインから、[Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) をインストールしてください。
1. お使いのOS用の [Docker](https://www.docker.com/products/docker-desktop) をインストールしてください。

### 2-3. Remote - Containersでレポジトリを開く
1. このレポジトリをVScodeで開いてください。
1. 左下のアイコンをクリックし、 `Remote-Containers: Reopen in Container` を選択します。
1. 自動的にcontainerが起動し、コンテナ内でVSCodeが開きます。（ビルドが必要な場合、長い時間がかかります）
- 起動に失敗する場合：
  - このプロジェクトのルートで`docker-compose build` `docker-compose up` を叩き、出てくるエラーメッセージを確認する。
  - Docker For Macを再起動するか、PCを再起動してもう一度試す。

### 2-4. Rails serverの起動
- VScodeの「実行とデバッグ」から「Rails Server」を起動
  - extensionのインストールを要求される場合があるので、その場合はインストールしてください
- http://0.0.0.0:3000 にアクセスして表示を確認
- BASIC認証:
  - user: `user`
  - password: `password`

### 2-5. overcommitの設定
- Remote Containerの中で以下のコマンドを実行しておきます。
```
$ overcommit --install
$ overcommit --sign
```

# SQLクライアント(TablePlus)の設定
## 接続情報
**dev**
- host: `localhost`
- port: `5432`
- User: `root`
- password: `password`

## DBのタイムゾーンを変更
それぞれのDBで以下を実行

```sql
show time zone;
ALTER DATABASE [db_name] SET timezone TO 'Asia/Tokyo';
```

# デバッグ方法について
- このレポジトリには、デバッグに役立つツールがいくつか入っています

## ブレークポイントを使用する場合
- VScodeの「実行とデバッグ」を選び、構成の「Rails Server」を選択して、Rails Serverを立ち上げてください
- VScode上でブレークポイントを指定することができます。
- 参考: https://www.atmarkit.co.jp/ait/articles/1707/21/news030.html

## byebugを使用する場合
- terminalから、`bundle exec rdebug-ide --debug --host 0.0.0.0 --port 1234 -- bin/rails server -p 3000 -b 0.0.0.0` を叩いてRails Serverを立ち上げてください。
- コード中に byebug を入れることで、そこでコードを止め、コマンドラインデバッグを行うことができます。
- 参考: https://qiita.com/aosho235/items/6f988a0b5262b95ca460

## binding_of_callerについて
- binding_of_caller: エラー画面でコマンドラインデバッグを行うことができるgem。
- 参考: https://qiita.com/terufumi1122/items/a6f9a939dce25b2d9a3e

# Mailcatcherについて
- アプリケーションで送信されたメールは、localhost:1080 にアクセスすることで見ることができます。
- メールの送信テストを行う場合は、`rake reminder:sample` を叩いてください。テストメールが送信されます。

# テスト(Rspec)について
- rubyのテストツールです。解説は[こちら](https://qiita.com/tororopop/items/5e590f2e451b7ff0a371)
- VScodeの拡張[Rails Test Runner](https://marketplace.visualstudio.com/items?itemName=davidpallinder.rails-test-runner)を入れて、コマンドから実行するのが便利です。

# 管理画面(Active Admin)
- `localhost:3000/admin/login` で見れます
- Usernameとパスワード: `DemoData::DemoDataGenerator` に入ってます
- CSSは `app/assets/stylesheets/active_admin.scss` にあります
  - これを修正した後は、 `bundle exec rake assets:precompile`を叩いてください
  - (ここだけSprocket管理です)

## 新しい管理画面を作る
`rails generate active_admin:resource モデル名`

# デモデータ ジェネレータ

## 使い方
`bundle exec rails runner DemoData::DemoDataGenerator.run`
を叩くと一通りのデモデータができます

# その他、入っているツール, よく使うコマンドの解説

## 1. overcommit
- git hooksの管理ツールです。
- git hooksとは、commitやpushの前にテストやlintツールなどを走らせる機能です。コードに問題がある場合、commitやpushをブロックすることで、コードの品質を保ちます。
- `.overcommit.yml` が設定ファイルです。
- 現在の設定では、commit時に`rubocop`, push時に `rspec` と `brakeman` を実行しています。

## 2. rubocop
- ruby用のlintツールです。解説は[こちら](https://qiita.com/tomohiii/items/1a17018b5a48b8284a8b)。
- よく使うコマンド
  - `rubocop -A` 自動修正。commitが通らない場合はまずこれを実行するとよし。
  - `rubocop --auto-gen-config` 警告を一度退避させる。

## 3. rspec

## 4. brakeman
- SQLインジェクションなどの脆弱性がないかを解析してくれるライブラリです。

## 5. dotenv
- `.env` ファイルで環境変数を管理できます。

## 6. Bullet
- N+1問題を検出します。解説は[こちら](https://www.techscore.com/blog/2012/12/25/rails%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E7%B4%B9%E4%BB%8B-n1%E5%95%8F%E9%A1%8C%E3%82%92%E6%A4%9C%E5%87%BA%E3%81%99%E3%82%8B%E3%80%8Cbullet%E3%80%8D/)

## 7. webpacker/webpack
- CSSのBuildにはwebpackerを使用しています。
- 動作が重くなるので、webpack-dev-serverは停止してあります。CSSを変更した場合は、下記コマンドを叩いてください。
- よく使うコマンド
  - `./bin/webpack` ローカルで閲覧する用にCSSをBuild
  - `RAILS_ENV=test bundle exec rails webpacker:compile` requests spec実行用にCSSをbuild
  - `RAILS_ENV=production bundle exec rails assets:precompile` herokuにアップロードする用に本番用にbuild
