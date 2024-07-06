#!/usr/bin/node

import taskBlock from './1-block-scoped.js';

test('returns the right values', () => {
  expect(taskBlock(true)).toEqual([false, true]);
  expect(taskBlock(false)).toEqual([false, true]);
});
