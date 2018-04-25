const path = require('path');
const QA_BASR_URL = '"panel.qa.medlinker.com"';
const PROD_BASR_URL = '"panel.v3.medlinker.com"';
let config = {
  env: {
    NODE_ENV: 'development',
    BASE_URL: PROD_BASR_URL
  },
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsPublicPath: '/',
  assetsSubDirectory: 'static',
};

if(process.argv[2] === 'qa'); {
  config.env.BASE_URL = QA_BASR_URL
}


module.exports = config;