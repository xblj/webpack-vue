const path = require('path');
function assetsPath(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ? require('../config/dev').assetsSubDirectory : require('../config/prod').assetsSubDirectory;
  // path.posix 会根据平台的不同转换输出不同的路劲格式
  return path.posix.join(assetsSubDirectory, _path);
}
module.exports = {
  assetsPath
};
