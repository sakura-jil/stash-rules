/**
 * Surge Policy Script: 新加坡代理组
 * 功能：
 * 1️⃣ 指定常用网站 + Google/YouTube/Telegram/GPT 流量走新加坡 IEPL 01
 * 2️⃣ 其他流量走直连
 * 3️⃣ 可直接上传到 GitHub/Gist，生成 URL 导入 Surge
 */

const singaporeProxy = "🇸🇬|新加坡-IEPL 01";
const fallback = "DIRECT";

// 常用网站列表
const domains = [
  // Google
  "google.com", "googleapis.com", "gstatic.com", "ggpht.com",
  // YouTube
  "youtube.com", "ytimg.com",
  // Telegram
  "telegram.org", "t.me",
  // ChatGPT / OpenAI
  "openai.com", "chatgpt.com",
  // 常用社交 / 服务
  "facebook.com", "instagram.com", "twitter.com", "netflix.com",
  "linkedin.com", "reddit.com", "discord.com", "wikipedia.org",
  "amazon.com", "github.com"
];

// 判断请求是否匹配新加坡代理
function isSingaporeDomain(url) {
    return domains.some(domain => url.includes(domain));
}

// 策略脚本主逻辑
(async function() {
    const url = $request.url;

    if (isSingaporeDomain(url)) {
        // 匹配新加坡域名走新加坡 IEPL 01
        $done({ policy: singaporeProxy });
    } else {
        // 其他流量走直连
        $done({ policy: fallback });
    }
})();
