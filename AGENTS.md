# AI エージェント向け作業指示（PowerShell 5.1 / NoProfile）

- 適用範囲: このファイルが置かれたフォルダ配下すべて。

- UTF-8 実行ラッパ（必須・毎回付与）
  - 形式（`<COMMAND>` を実コマンドに置換）:
    - `[Console]::InputEncoding=[Text.UTF8Encoding]::new($false); [Console]::OutputEncoding=[Text.UTF8Encoding]::new($false); $OutputEncoding=[Text.UTF8Encoding]::new($false); chcp 65001 > $null; & { <COMMAND> }`

- ファイル書き込みの Encoding 指定（必須）
  - `Out-File -Encoding utf8` / `Set-Content -Encoding utf8` / `Add-Content -Encoding utf8`

## 翻訳

- 「シピルカくん」は以下のように翻訳すること
  - 시필카군（韓国語）
  - Shipilka君（中国語）
  - Shipilka（英語、ラテン文字）

中国語については、アバターを「模型」として翻訳すること。
