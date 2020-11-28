'use strict'

const test = require('ava')
const fn = require('.')

test('node-boilerplate', t => {
	t.is(fn(), 'Hello, world!')
})
