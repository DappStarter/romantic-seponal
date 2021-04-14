require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind hole idea kiwi obscure sunset'; 
let testAccounts = [
"0xb35a5ebff6fcdf4fc4a3275d36621a17f594adbd4ad83c8040ff8b5ff060b45d",
"0xed1c36cb3b52ccfeef20f349743c474e9dcf02931ea33c5e138696c506a9b122",
"0xf743a353402aea91b2868be8e7fa62aa9f767f6d87ff6db1d1a87a9c84b572a2",
"0x2098677cf465fbf7c9ac33fcd6ca28a7d52d4e2d5d380e270b5658e8fbb4c046",
"0xa6309b6388f8fad0b22fe26185241eca8e446839cc05fd6996854fcda41900b5",
"0x4994b89f25c36e71d31bb75c8e232eafb430f3399898a2e87995ba8bee3d8ff6",
"0xb325d711cf0a2969cb71bcdb43c64d7231c967310340dc7f076125937b36966a",
"0x36fd304963a6934cfd3bfc4b8561a96fb5c5e6f0370fe53fe0963f67706d0f67",
"0x31d8aa16b502461b9021eeeaba6858134b5805fc64a659ca26cdd2dcfe42c1d3",
"0x52cc71c74517ac39a3ee42e2bad90ad0205eb71899cec47d1ab1a8be349ec827"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
