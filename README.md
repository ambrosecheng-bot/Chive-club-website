# 韭菜俱樂部 The Chive Club — 招募網站

一個溫暖、自然、大地色系的**單頁招募網站**，用來吸引散居英格蘭、對種植有興趣的香港人認識並加入我們的社群「韭菜俱樂部」。整個頁面只有一個主要行動：**留下 Email／填聯絡表**。

## 🌐 網站連結

**線上瀏覽：** <https://ambrosecheng-bot.github.io/Chive-club-website/>

## ✨ 特色

- **單一檔案、免安裝**：所有 HTML、CSS、JavaScript 都寫在一個 `index.html` 裏，沒有任何 build tool，打開檔案就能看。
- **Mobile-first 響應式設計**：以手機為準設計，再往上加大到平板與桌面，手機與電腦都好看。
- **溫暖大地色系**：深森林綠、苔綠、焦橙、暖棕；大量留白、圓角卡片、柔和陰影。
- **繁體中文為主**：標題用 Noto Serif TC、內文用 Noto Sans TC（以 Google Fonts 載入）。
- **清楚的中文註解**：程式碼每一段都有中文說明，新手也能看懂。

## 📄 頁面結構

1. **Hero 區** — 主標題、副標題、行動按鈕（平滑捲動到聯絡表）
2. **三大主軸** — 互助種植、從土地到餐桌、知識與資源共享
3. **會員故事** — 三張故事卡（social proof）
4. **免費 5 天 Email 課程** — 留 Email 的誘因
5. **聯絡表 / Email 表格** — 用 Formspree 收集資料
6. **Footer** — 標語、信仰結語、WhatsApp 群組連結、版權

## 🚀 本機預覽

直接用瀏覽器打開 `index.html` 即可（雙擊檔案，或把檔案拖進瀏覽器視窗）。不需要安裝任何工具。

## 🔧 上線前需要替換的地方

程式碼裏所有需要你動手的位置，都用 `👉 請在這裏替換` 的中文註解標示。主要有：

| 項目 | 位置 | 做法 |
| --- | --- | --- |
| **會員與聚會照片** | `images/` 資料夾 | 見下方「照片檔案清單」，把相片存成指定檔名放進去 |
| **Hero 背景圖** | `.hero` 的 `background-image` | 換成你的後院種植照片路徑（目前用網上暫代圖片） |
| **Formspree 表單** | `<form>` 的 `action="..."` | 到 [formspree.io](https://formspree.io) 免費註冊，把 `your-id` 換成你的表單網址 |
| **WhatsApp 群組連結** | Footer 的 `.whatsapp-btn` | 換成你真正的群組邀請連結 |

## 📸 照片檔案清單（放進 `images/` 資料夾）

網站的會員故事與聚會花絮，都是用 `images/` 資料夾裏的真實照片。請把以下照片存成**指定檔名**放進去，網站就會自動顯示（檔名要完全一樣，包括英文大小寫與 `.jpg`）：

| 檔名 | 內容 | 顯示位置 |
| --- | --- | --- |
| `cammy-grapes.jpg` | Cammy 的葡萄照片 | 會員故事（第一張） |
| `blue-harvest.jpg` | Blue 的青菜收成照片 | 會員故事（第二張） |
| `dury-tomato.jpg` | Dury 的蕃茄照片（伯明翰） | 會員故事（第三張） |
| `farm-to-table-june2026.jpg` | Cafe Lamma'z 聚會・室內圍枱大合照 | 聚會花絮（左） |
| `farm-to-table-june2026-2.jpg` | Cafe Lamma'z 聚會・店外門口大合照 | 聚會花絮（右） |

> 💡 若某張照片還沒放進去，該位置會顯示不到圖片（破圖）。放好對應檔名的相片即可修正。
> Hero 頂部的背景照片目前仍用網上的暫代圖片，日後想換成自己的照片，見上面的替換表。

### 如何啟用 Formspree 表單（免費，約 3 分鐘）

1. 到 <https://formspree.io> 用你的 Email 免費註冊。
2. 登入後按 **+ New Form** 建立表單，填上你要收信的 Email。
3. Formspree 會給你一條網址，長得像 `https://formspree.io/f/xxxxxxx`。
4. 把 `index.html` 裏 `<form action="https://formspree.io/f/your-id">` 的網址換成你的，儲存即可。

之後每當有人填表，你就會收到 Email 通知。

## 📤 部署到 GitHub Pages

1. 把 `index.html` 與 `README.md` 上傳到你的 GitHub repository（`index.html` 要放在根目錄）。
2. 進入 repository 的 **Settings → Pages**。
3. **Source** 選 `Deploy from a branch`，Branch 選 `main`（資料夾選 `/root`），儲存。
4. 等一兩分鐘，網站就會上線於：
   <https://ambrosecheng-bot.github.io/Chive-club-website/>

## 📁 檔案結構

```
Chive-club-website/
├── index.html   # 整個網站（HTML + CSS + JavaScript，全在這一個檔案）
└── README.md    # 本說明文件
```

## 📜 版權

© 2026 韭菜俱樂部 The Chive Club．用心種植，用愛連結。
