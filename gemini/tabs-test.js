gemini.suite('tabs', (parent) => {
  parent.setUrl('src/web/components/global-nav/tests/tests-global-nav.html');

  gemini.suite('tabs', (suite) => {
    suite.setCaptureElements('.hig__global-nav__sub-nav__tabs')
         .capture('tabs');
  });

  gemini.suite('activated tab', (suite) => {
    suite.setCaptureElements('.hig__global-nav__sub-nav__tabs__tab.hig__global-nav__sub-nav__tabs__tab--active')
         .capture('activated tab');
  });

  gemini.suite('deactivated tab', (suite) => {
    suite.setCaptureElements('.hig__global-nav__sub-nav__tabs__tab:nth-child(2)')
         .capture('deactivated tab');
  });
});