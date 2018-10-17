const DC = require('..')
const test = require('tape')

test('static method maybeValidAddr()', t => {
  t.is(DC.maybeValidAddr(null), false)
  t.is(DC.maybeValidAddr(''), false)
  t.is(DC.maybeValidAddr('uuu'), false)
  t.is(DC.maybeValidAddr('dd.tt'), false)
  t.is(DC.maybeValidAddr('tt.dd@uu'), false)
  t.is(DC.maybeValidAddr('u@d'), false)
  t.is(DC.maybeValidAddr('u@d.'), false)
  t.is(DC.maybeValidAddr('u@d.t'), false)
  t.is(DC.maybeValidAddr('u@.tt'), false)
  t.is(DC.maybeValidAddr('@d.tt'), false)
  t.is(DC.maybeValidAddr('user@domain.tld'), true)
  t.is(DC.maybeValidAddr('u@d.tt'), true)
  t.end()
})