import { sendEmail } from './sendEmail.js';

// 先找到頁面上的「表格」和「多謝訊息」這兩個元素
const form = document.getElementById('signup-form');
const thankYou = document.getElementById('thank-you');

// 監聽表格的「submit（提交）」事件
form.addEventListener('submit', async function (event) {
  // 阻止瀏覽器預設行為（預設會整頁跳轉），改由我們自己用 JS 處理
  event.preventDefault();

  try {
    // 把表格內容打包，用 fetch 送到 Formspree
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' } // 叫 Formspree 回傳 JSON 而非跳轉
    });

    if (response.ok) {
      // 成功：收起表格，顯示多謝訊息
      form.style.display = 'none';
      thankYou.style.display = 'block';

      const email = data.get(email);
      sendEmail(email);
    } else {
      // Formspree 有回應但出錯（例如尚未換上你的表單 ID）
      alert('提交時出了點問題，請確認表格設定，或稍後再試一次。');
    }
  } catch (error) {
    // 完全連不上（例如未上網，或還沒填好 Formspree 的網址）
    alert('未能送出，請檢查網絡連線，或稍後再試一次。');
  }
});

/*
  社群反思文章的「展開／收合」功能：
  按一下按鈕，就把餘下段落（#reflection-more）的 .is-open 開關切換，
  同時更新按鈕文字與 aria-expanded（無障礙屬性）。
*/
const reflectionToggle = document.getElementById('reflection-toggle');
const reflectionMore = document.getElementById('reflection-more');

if (reflectionToggle && reflectionMore) {
  reflectionToggle.addEventListener('click', function () {
    const isOpen = reflectionMore.classList.toggle('is-open');
    reflectionToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    reflectionToggle.textContent = isOpen ? '收合 ▴' : '展開閱讀全文 ▾';
  });
}
