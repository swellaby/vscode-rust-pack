'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Included Extensions Tests', () => {
    const extensions = manifest.extensionPack;

    test('Should have the correct number of extensions', () => {
        assert.deepEqual(extensions.length, 4);
    });

    test('Should include RLS extension', () => {
        assert.isTrue(extensions.includes('rust-lang.rust'));
    });

    test('Should include crates.io extension', () => {
        assert.isTrue(extensions.includes('serayuzgur.crates'));
    });

    test('Should include better TOML extension', () => {
        assert.isTrue(extensions.includes('bungcip.better-toml'));
    });
    test('Should include Tabnine extension', () => {
        assert.isTrue(extensions.includes('TabNine.tabnine-vscode'));
    });
});
