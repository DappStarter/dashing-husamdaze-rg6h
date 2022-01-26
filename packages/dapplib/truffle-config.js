require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note peace purpose gesture hen blue village'; 
let testAccounts = [
"0xfa407c0dc20113a331bb5f87627517a63047cdbb663bd498448f82c0af9424cc",
"0x09e4a12974ebbd75c62056b6e9bcb0131b800cddfce8bee1658f8a332d034071",
"0x5841768f4badf72d9b359692393047a4cf513508ae141157054c99a6babceb8a",
"0x0ae1d57a033b1cc867d072ade71fcb43a71087b821de6a5666229854bb5089b8",
"0x5ee816e3aecac214e61bf2350192d965e77f3148a7719a114572dc6e11143981",
"0x01f4abe0c55da4b364feb98be0e00378e4d0b77be9dfbb5f40f08bee5a58238e",
"0x50cf4555e3677d5e5f98baf6b29ae2ef7b460ccfbdd6f6ad6982f1277c7d578c",
"0x2fcf5f9fe33301d790d7d3056a656cd5640e70ec39655a4caed16c0edd182f95",
"0x61465ac9633919ab5bf4480e94573a042ee39af1b38c5484a97a9f7f54dfbfdc",
"0x758446fb7cf70712552a5ef2141d6bb8ec5bcd393eaa8b4bebbbd606aa7f0c01"
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
            version: '^0.8.0'
        }
    }
};

