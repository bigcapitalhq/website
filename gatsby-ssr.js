const React = require("react")
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WYPGGFSFGW"
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WYPGGFSFGW');`,
        }}
      />
    </>
  )
}

function FacebookPixel() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '271381281551988');
        fbq('track', 'PageView');`,
      }}
    />
  )
}

function HotjarScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2438576,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      }}
    />
  )
}

function HubspotChatflow() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: ` (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: '6jCnDCDHw33cgrgzUcPTDdhN',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");`,
      }}
    />
  )
}

const headComponents = [
  process.env.NODE_ENV === "production" ? <GoogleAnalytics /> : null,
  process.env.NODE_ENV === "production" ? <FacebookPixel /> : null,
  process.env.NODE_ENV === "production" ? <HotjarScript /> : null,
  process.env.NODE_ENV === "production" ? <HubspotChatflow /> : null,
].filter(comp => comp)

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(headComponents)
}
