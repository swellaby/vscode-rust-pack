'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Extension Pack Tests', () => {
    const extensions = manifest.extensionPack;

    it ('Should include RLS extension', () => {
        assert.isTrue(extensions.includes('rust-lang.rust'));
    });

    it ('Should include crates.io extension', () => {
        assert.isTrue(extensions.includes('serayuzgur.crates'));
    });

    it ('Should include better TOML extension', () => {
        assert.isTrue(extensions.includes('bungcip.better-toml'));
    });
});
