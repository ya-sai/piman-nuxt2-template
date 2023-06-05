# 規範

盡量不使用太高深的技巧、直覺的安排且盡量減輕依賴為最高原則，
達成方便維護、交接、提升容錯。


# 檔案、管理與 Cascade Layers

為了降低依賴 SASS/SCSS 且 只支援於新版的瀏覽器，使用純 CSS 編寫，
搭配 CSS Variables 與 使用巢狀寫法方便維護。

使用 Cascade Layers 輔助權重區別。
@layer reset, ui, vendor, variations, utilities, print;
基本概念為絕對不能被覆蓋掉的樣式放後面圖層。

一般被視為 global 的 css，請寫入 ui.css 或 @import 到 ui layer。

Component 一般來說是不應該被更動且獨立的，所以 Component 的 css 應該被放入到 /component 自己的檔案或資料夾裡。
非必要請不要建立一個 component layer。

如果不想修改原始檔但想方便覆蓋第三方的 css，請建立一個檔案並 @import 放入 vendor layer 中，
如果需要修改原始檔，則請複製貼上 第三方 css 至 vendor.css 裡修改。

variations 則是可以放入客製化、修改後的 css，例如您想改變一個第三方的

utilities 最小單位，基本都只有一個 css 屬性，因為其絕對不能再被覆蓋的特性，所以排在最後面，優先權較高。

print 因為是獨立且不可被覆蓋，所以也是放後面。


# 顏色

使用 CSS4 的 oklch(x% x.x x.x / x%)，可以使用的色域更廣，也對 a11y 更好。
若瀏覽器支援 CSS5，則可進一步使用 oklch(from x% x.x x.x l c h / x%) 計算與變化顏色，
可以更方便統一管理顏色（到時需要更改 CSS 顏色變數值以及寫法修正）。


# CSS 註解 Style

/*************************
  區塊說明
*************************/
空一行
.selector {
  .selector {
  }
  .selector {
  }
}
空一行
.selector {
  .selector {
  }
  .selector {
  }
}
空一行
空一行
/*************************
  區塊說明
*************************/
空一行
...


# 特別注意

因為 @media 不能使用 CSS Variables，故 breakpoint 請至 variables.css 裡參照使用真正的數值。