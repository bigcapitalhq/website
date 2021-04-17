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
  );
}

const headComponents = [
    process.env.NODE_ENV === 'production' ? <GoogleAnalytics /> : null,
].filter(comp => comp);

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(headComponents)
}
