// How to use custom filters in Vue https://stackoverflow.com/a/45054257
import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (value) {
    return moment(value).format(format);
  }
  return '——';
});

Vue.filter('subContent', (value, start = 0, length, suffix = '') => {
  let result = value.substr(start, length);
  result = `${result}${suffix}`;
  return result;
});
