# 🏔 Saviah

Saviah 是應用伯資訊社的設計系統的名字
Saviah is App Apeh design system.

## 開發目的

為了追求更有效率的開發方法以及訓練探索的精神，我們第一次嘗試開發設計系統
Saviah 將運用在應用伯未來開發的 web app，Saviah 包含：

For a better development and keep ourself to exploring, this is our very first Design System. Saviah will be using in App Apeh's new web apps, the design system including:

### 開發規範 Development Guide

1. 色彩計畫 Color palette
1. 文字 Typography
1. 易用性 Accessibility
1. HTML 零件 Element
1. HTML 組合 Componet
1. HTML 版型 Layout
1. 互動 Interaction
1. 動畫效果 Animation

### 使用者體驗規範 User Experinece Guide

1. 用字 Wording
1. 字彙定義 Terminoligy

### 行銷規範 Marketing Materials Guide

1. 應用伯識別系統 App Apeh Identity System

---

## 使用方式 How to use

include Saviah in package.json

```
    "dependencies": {
        "saviah": "git+https://github.com/wwwanyu/saviah.git"
    }
```

---

## Command 指令

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 在本機執行 Storybook

```
npm run storybook
```

---

## Pronounceation

[Saviah 發音 👄](https://e-dictionary.apc.gov.tw/bnn/terms/287087.htm)

---

## 基於 Bootstrap V4

使用 Saviah 時，也需要同時參考 [Bootstrap 文件](https://getbootstrap.com)，Saviah 現在的開發重心在於補齊 Bootstrap 缺乏、但是在應用伯開發專案時頻繁會需要使用的前端組件。

---

1. Style guidance

   1. Typography 字體
   2. Colors 顏色
   3. List 列表

2. Element
3. Button
4. Form
5. Icon

6. Components
7. Navigation
8. State 狀態
9. Zero State 空狀態

10. Layout
    待補

---

## Style guidance

Saviah 使用 SCSS 來編寫樣式，`$primary` 中的 `$` 是 SCSS 的變數功能

### Typography 字體

Heading 沿用 [Bootstrap Typography](https://getbootstrap.com/docs/4.5/content/typography/)

**_多行省略_**

### Colors 顏色

**功能性顏色**

| 顏色                                                                                                 | 名稱                      | 使用規範                                                                                                   | 變數名稱  | HEX 色碼  | RGB 色碼           |
| ---------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------- | --------- | --------- | ------------------ |
| <div style="background-color: #0065ff; width: 40px; height: 40px;"></div>                            | 主色 Primary              | 用於每一個組件的正面意義的主功能，例如確定新增、確定接受、正面提示；在每個組件希望引導使用者主要點擊的功能 | \$primary | `#0065ff` | `rgb(0, 101, 255)` |
| <div style="background-color: #555555; width: 40px; height: 40px;"></div>                            | 預設 Default              | 用於內文或一般訊息                                                                                         | \$default | `#555555` | `rgb(85,85,85)`    |
| <div style="background-color: #7BD41E; width: 40px; height: 40px;"></div>                            | 成功 Success              | 用於標示成功狀態，例如動作成功                                                                             | \$success | `#7BD41E` | `rgb(123,212,30)`  |
| <div style="background-color: #DE972F; width: 40px; height: 40px;"></div>                            | 警示 Warning              | 用於輕度負面訊息，例如期限、失敗                                                                           | \$success | `#7BD41E` | `rgb(123,212,30)`  |
| <div style="background-color: #e82800; width: 40px; height: 40px; border: 1px solid #B31F00;"></div> | 刪除、危險 Delete, Danger | 用於負面訊息，例如刪除、失敗；也可用於醒目的提示                                                           | \$danger  | `#B31F00` | `rgb(179,31,0)`    |

---

**背景色樣式**

| 顏色                                                                                                 | CSS 樣式名稱     |
| ---------------------------------------------------------------------------------------------------- | ---------------- |
| <div style="background-color: #11c7ff; width: 60px; height: 30px;"></div> 淺藍                       | .bg-blue         |
| <div style="background-color: #0065ff; width: 60px; height: 30px;"></div> 藍                         | .bg-blue         |
| <div style="background-color: #002d8a; width: 60px; height: 30px;"></div> 深藍                       | .bg-blue-dark    |
| <div style="background-color: #171943; width: 60px; height: 30px;"></div> 暗                         | .bg-dark         |
| <div style="background-color: #555555; width: 60px; height: 30px;"></div> 灰                         | .bg-grey         |
| <div style="background-color: #333333; width: 60px; height: 30px;"></div> 深灰                       | .bg-grey-dark    |
| <div style="background-color: #eeeeee; width: 60px; height: 30px;"></div> 淺灰                       | .bg-grey-light   |
| <div style="background-color: #ffffff; width: 60px; height: 30px; border: 1px solid #eee;"></div> 亮 | .bg-light        |
| <div style="background-color: #B31F00; width: 60px; height: 30px;"></div> 紅                         | .bg-red          |
| <div style="background-color: #E37B00; width: 60px; height: 30px;"></div> 橘                         | .bg-orange       |
| <div style="background-color: #f9dd00; width: 60px; height: 30px;"></div> 黃                         | .bg-yellow       |
| <div style="background-color: #E3C000; width: 60px; height: 30px;"></div> 黃褐                       | .bg-amber        |
| <div style="background-color: #7BD41E; width: 60px; height: 30px;"></div> 綠                         | .bg-green        |
| <div style="background-color: #00E300; width: 60px; height: 30px;"></div> 亮綠                       | .bg-green-bright |
| <div style="background-color: #4EBCBC; width: 60px; height: 30px;"></div> 青綠                       | .bg-teal-green   |
| <div style="background-color: #45369a; width: 60px; height: 30px;"></div> 紫                         | .bg-purple       |
| <div style="background-color: #E2B5FF; width: 60px; height: 30px;"></div> 粉紫                       | .bg-pink-purple  |

---

**背景色透明度樣式**

有 9 個透明度樣式，在背景色樣式名稱後面加上`-o1` 會是透明度 0.1，o 代表 opacity ；例如 `.bg-yellow-o1` 是透明度 0.1 的黃色背景。

| 顏色                                                                                  | CSS 樣式名稱  |
| ------------------------------------------------------------------------------------- | ------------- |
| <div style="background-color: rgba(249,221,0,.1); width: 120px; height: 30px;"></div> | .bg-yellow-o1 |
| <div style="background-color: rgba(249,221,0,.2); width: 120px; height: 30px;"></div> | .bg-yellow-o2 |
| <div style="background-color: rgba(249,221,0,.3); width: 120px; height: 30px;"></div> | .bg-yellow-o3 |
| <div style="background-color: rgba(249,221,0,.4); width: 120px; height: 30px;"></div> | .bg-yellow-o4 |
| <div style="background-color: rgba(249,221,0,.5); width: 120px; height: 30px;"></div> | .bg-yellow-o5 |
| <div style="background-color: rgba(249,221,0,.6); width: 120px; height: 30px;"></div> | .bg-yellow-o6 |
| <div style="background-color: rgba(249,221,0,.7); width: 120px; height: 30px;"></div> | .bg-yellow-o7 |
| <div style="background-color: rgba(249,221,0,.8); width: 120px; height: 30px;"></div> | .bg-yellow-o8 |
| <div style="background-color: rgba(249,221,0,.9); width: 120px; height: 30px;"></div> | .bg-yellow-o9 |
| <div style="background-color: rgba(69,54,154,.1); width: 120px; height: 30px;"></div> | .bg-purple-o1 |
| <div style="background-color: rgba(69,54,154,.9); width: 120px; height: 30px;"></div> | .bg-purple-o9 |

**交錯背景色**

`.saviah-stripe-bg` 會使第一層子元件加上背景色，預設的樣式是淺藍背景色與白色交錯。

使用結構：

```
<div class="stripe">
 <span>row</span>
 <div>row</div>
</div>
```

---

## Element 元件

### Button 按鈕

| 按鈕                                                                                                                                                                     | 定義             | 使用規範                                                                                                   | CSS 樣式名稱          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- |
| <button style="color: #ffffff; background-color: #0065ff; padding: 0.42rem 1rem; border-radius: 0.9rem; font-weight: bold;">新增</button>                                | 主按鈕 Primary   | 用於每一個組件的正面意義的主功能，例如確定新增、確定接受、正面提示；在每個組件希望引導使用者主要點擊的功能 | .saviah-btn-primary   |
| <button style="color: #555; border: 2px solid #eee; background-color: transparent; padding: 0.42rem 1rem; border-radius: 0.9rem; font-weight: bold;">取消</button>       | 副按鈕 Secondary | 用於每個組件次要功能                                                                                       | .saviah-btn-secondary |
| <button style="color: #fff; background-color: #e82800; padding: 0.42rem 1rem; border-radius: 0.9rem; font-weight: bold;">刪除</button>                                   | 刪除按鈕 Danger  | 當刪除功能為主時使用                                                                                       | .saviah-btn-danger    |
| <button style="color: #e82800; background-color: transparent; padding: 0.42rem 1rem; border-radius: 0.9rem; font-weight: bold; border: 2px solid #e82800;">刪除</button> | 刪除按鈕 Danger  | 當刪除功能為副時使用                                                                                       | .saviah-btn-danger    |

```
<button type="button" class="btn saviah-btn-primary">新增</button>
<a href="#" class="btn saviah-tn-primary">帳號設定</a>
```

---

## Component
