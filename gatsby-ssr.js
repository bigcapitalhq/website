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
      fbq('init', '335023863850047');
      fbq('track', 'PageView');`,
      }}
    />
  )
}

const headComponents = [
  process.env.NODE_ENV === "production" ? <GoogleAnalytics /> : null,
  process.env.NODE_ENV === "production" ? <FacebookPixel /> : null,
].filter(comp => comp)

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(headComponents)
}
