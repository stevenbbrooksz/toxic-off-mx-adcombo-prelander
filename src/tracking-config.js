const trackingDomain = "https://pvvav.bemobtrcks.com";
const trackingHost = "pvvav.bemobtrcks.com";

const delegateClientHints = `<meta http-equiv="delegate-ch" content="sec-ch-ua https://${trackingHost}; sec-ch-ua-mobile https://${trackingHost}; sec-ch-ua-arch https://${trackingHost}; sec-ch-ua-model https://${trackingHost}; sec-ch-ua-platform https://${trackingHost}; sec-ch-ua-platform-version https://${trackingHost}; sec-ch-ua-bitness https://${trackingHost}; sec-ch-ua-full-version-list https://${trackingHost}; sec-ch-ua-full-version https://${trackingHost}">`;

const campaigns = {
  mobile: {
    campaignId: "cdcf5172-d8ee-41a5-a0b8-0a3b275ba6b3",
    landingId: "81380831-3fa8-4132-973b-e57737ef83b2",
  },
};

function hasTracking(config) {
  return Boolean(config.campaignId && config.landingId);
}

function ctaUrl(campaignId, landingId) {
  const ns = encodeURIComponent(`c=${campaignId}..l=${landingId}..a=0..b=0`);
  return `${trackingDomain}/click/1?ns=${ns}`;
}

function landingPixel(campaignId) {
  return `<script type="text/javascript">
function bemobCb(params) {
  var t = params.trackingDomain + '/click/';
  var re = new RegExp(t + '?(\\\\d*)');
  var e = document.querySelectorAll('a[href*="' + t + '"]');
  for (var i = 0; i < e.length; i++) {
    var ex = re.exec(e[i].href);
    if (ex) {
      e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex[1] || 1);
    }
  }
}
</script>
<script type="text/javascript">
!function(){
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = true;
  a.src = "${trackingDomain}/landing/${campaignId}?callback=bemobCb&rule=1&path=1&landing=1&" + window.location.search.substring(1);
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
}();
</script>
<noscript><img src="${trackingDomain}/landing/${campaignId}?rule=1&path=1&landing=1" alt=""></noscript>`;
}

export function getTracking(device = "mobile") {
  const config = campaigns[device] || campaigns.mobile;

  if (!hasTracking(config)) {
    return {
      ctaHref: "#confirmacion",
      isPlaceholder: true,
      metaTag: "",
      lpPixel: "",
    };
  }

  return {
    ctaHref: ctaUrl(config.campaignId, config.landingId),
    isPlaceholder: false,
    metaTag: delegateClientHints,
    lpPixel: landingPixel(config.campaignId),
  };
}
