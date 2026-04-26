/**
 * Stash Policy Script: 新加坡代理组
 *
 * 功能：
 * 1️⃣ 将原来的新加坡节点全部放入策略组“新加坡”
 * 2️⃣ 常用网站 + Google/YouTube/Telegram/GPT 流量走新加坡组
 * 3️⃣ 其他流量走直连
 */

const singaporeGroup = "新加坡"; // 策略组名字
const fallback = "DIRECT";       // 直连策略名字

// 所有新加坡节点，Stash 会自动选择组内节点
const singaporeNodes = [
    "🇸🇬|新加坡-IEPL 01",
    "🇸🇬|新加坡-IEPL 02",
    "🇸🇬|新加坡-IEPL 03",
    "🇸🇬|新加坡-进阶IEPL 01",
    "🇸🇬|新加坡-进阶IEPL 02",
    "🇸🇬|新加坡-进阶IEPL 03",
    "🇸🇬|新加坡-进阶IEPL 04",
    "🇸🇬|新加坡-直连",
    "🇸🇬|新加坡-中转 01",
    "🇸🇬|新加坡-中转 02",
    "🇸🇬|新加坡-中转 03",
    "🇸🇬|新加坡-中转 04"
];

// 常用域名列表
const domains = [
  "google.com","googleapis.com","gstatic.com","ggpht.com",
  "youtube.com","ytimg.com",
  "telegram.org","t.me",
  "openai.com","chatgpt.com",
  "facebook.com","instagram.com","twitter.com","netflix.com",
  "linkedin.com","reddit.com","discord.com","wikipedia.org",
  "amazon.com","github.com"
];

// 判断请求是否匹配新加坡流量
function isSingaporeDomain(url) {
    return domains.some(domain => url.includes(domain));
}

// 策略脚本主逻辑
(async function() {
    const url = $request.url;

    if (isSingaporeDomain(url)) {
        // 匹配新加坡域名走策略组“新加坡”
        $done({ policy: singaporeGroup });
    } else {
        // 其他流量走直连
        $done({ policy: fallback });
    }
})();
