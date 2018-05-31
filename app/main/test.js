import http from 'http'

import answer from 'the-answer'
import stringifyObject from 'stringify-object'

import foo from './tes'

console.log(http)

const obj = {
  foo: 'bar',
  'arr': [1, 2, 3],
  nested: { hello: "world" }
};

const pretty = stringifyObject(obj, {
  indent: '  ',
  singleQuotes: false
});

console.log(pretty);

export default function () {
  console.log('the answer is ' + answer);
}
