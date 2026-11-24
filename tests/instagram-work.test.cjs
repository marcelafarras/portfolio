const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const source = file => fs.readFileSync(path.join(root, file), 'utf8');
test('the supplied brand work has unique entries and playable media', () => {
  const context = vm.createContext({});
  vm.runInContext(source('content.js') + '\n' + source('instagram-work.js'), context);
  const samples = vm.runInContext('SITE.samples.filter(x => x.id.startsWith("ig-"))', context);
  assert.equal(samples.length, 92);
  assert.equal(new Set(samples.map(x => x.id)).size, 92);
  for (const item of samples) {
    assert.match(item.origin, /Team collaboration/);
    assert.ok(fs.statSync(path.join(root, item.videoSrc)).size > 1000, item.id);
    assert.ok(fs.statSync(path.join(root, item.poster)).size > 0, item.id);
  }
  const counts = Object.fromEntries(['Agora Lifestyle Mall','Agora Sports Hall','Le Parc Luxury Residence','Thamrin Nine Complex','UP at Thamrin Nine'].map(brand => [brand,samples.filter(x => x.brand === brand).length]));
  assert.deepEqual(counts, {'Agora Lifestyle Mall':44,'Agora Sports Hall':6,'Le Parc Luxury Residence':7,'Thamrin Nine Complex':12,'UP at Thamrin Nine':23});
});
