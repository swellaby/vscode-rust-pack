'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Included Extensions Tests', () => {
    const extensions = manifest.extensionPack;

    test('Should have the correct number of extensions', () => {
        assert.deepEqual(extensions.length, 3);
    });

    test('Should include RLS extension', () => {
        assert.isTrue(extensions.includes('rust-lang.rust'));
    });

    test('Should include crates extension', () => {
        assert.isTrue(extensions.includes('serayuzgur.crates'));
    });

    test('Should include Even Better TOML extension', () => {
        assert.isTrue(extensions.includes('tamasfe.even-better-toml'));
    });
});
