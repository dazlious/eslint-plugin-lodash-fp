'use strict';

var enhance = require('./core/enhance');

module.exports = function (context) {
  var info = enhance();

  return info.merge({
    CallExpression: function (node) {
      if (node.arguments.length === 0 && info.helpers.isLodashCall(node) !== false) {
        context.report(node, 'No call without arguments');
      }
    }
  });
};

module.exports.schema = [{
  type: 'string',
  enum: ['flow', 'flowRight', 'compose', 'pipe']
}];
