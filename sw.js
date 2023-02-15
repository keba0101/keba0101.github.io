/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/30901.html","397cef7dc828c772fa172e598bd9fa38"],["/about/index.html","a32dd609c0b01c04a529ec2da6e4b322"],["/archives/2023/01/index.html","30cc53d58c99610cd48ceca00701f37f"],["/archives/2023/02/index.html","09d9d85c0a6dc759300bda58517eff6a"],["/archives/2023/index.html","e7f713b7f34fdfc8bbf9e36b7a8142ec"],["/archives/2023/page/2/index.html","af8b1870ae00f04ecfffd8a0f4241b7c"],["/archives/index.html","43719d607d95a808fe8c7095c68dc7dc"],["/archives/page/2/index.html","016aad5364850ab824229f00ca59ff8d"],["/categories/index.html","979c40a5dba2c65a6100944a2ab5d470"],["/categories/夜拂海棠/index.html","197baa21ccf533689fd205a76de47418"],["/categories/蝶冢/index.html","d28a1cd506021cf968ad76399341de2a"],["/css/custom.css","d31e433803ee199c32866ca300dd5250"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e57d62bd4e417cf0c5e32301cab8310d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/diezhong01.html","3415fbbe453f902f3d05cdc1c51d3f5b"],["/diezhong02.html","97623015c5c65f503244a4d078e9b12d"],["/diezhong03.html","9ae4da888a4cc24a5727eaed9adf6169"],["/diezhong04.html","076e9696811a0a876065e24c9a967df5"],["/diezhong05.html","955dbfce1d5b5551d277cf7dee99336d"],["/diezhong06.html","f42537e3fa175db5ae506d435c476bd7"],["/diezhong07.html","449a5a1007950d4aa628a7a409f044ac"],["/diezhong08.html","c3a87a6d63b2588d9f5eefc3f80ca98f"],["/diezhong09.html","f1a46afa06b67141301204cb2a331664"],["/img/0 (2).webp","0dd7c4a4670114fc77d9576047786fad"],["/img/0.webp","e7ea98183481abaa0e763ad1867f9ece"],["/img/1.jpg","0ba8629e5b4f8c21ff6afbd5d12802d7"],["/img/1.webp","0bd9875175140ffa8cfa84e19faf75ed"],["/img/10.jpg","5d9ab7f30fc17ba005707955441f22bb"],["/img/11.jpg","843ecbb0f1018b711f76fa9ac8ec9349"],["/img/12.jpg","3902800b861c66efefa653d838d5f76b"],["/img/13-副本.jpg","4bf81f5e35eedb1ac1d548da4e3f9862"],["/img/13.jpg","25023207fc6ee81f45c24737b09585f0"],["/img/14.jpg","1bb5ed024dcbbb91f20ee2bf6a448828"],["/img/15.jpg","06b910e7c6dfad9e6c7045e4f5a363ff"],["/img/16.jpg","de146ba71684ca267e0f5b68b9e7b4c7"],["/img/1bf7c95f6aaf446fb8fa66c6d19aafa8.jpg","1b7745cfea981aa0566e5f82a3719e03"],["/img/2.jpg","4e3915fb91e3338c6367bd2825f73078"],["/img/2.webp","0dd7c4a4670114fc77d9576047786fad"],["/img/257731aa40b54006aa68884c8753c4ce-副本.jpg","18856b8df9c1b89aaf64043ad2eb3c63"],["/img/257731aa40b54006aa68884c8753c4ce-副本1.jpg","453855d0ac752a305e9aa63c9c37e47d"],["/img/257731aa40b54006aa68884c8753c4ce.jpg","88fd74e884ee53597818a02fc905522d"],["/img/3.webp","d97467e3e1465d7862770c709c19643e"],["/img/3643e38a016ee8beaa97eb04ccce8230fd24be7a.jpg","d4d5af13abcad4366e179f207e16475d"],["/img/38e6b1c2740548059de3f1dc16260c14.jpg","d0803da067cb24870dd305910371f1ee"],["/img/4.jpg","12c4f5764552d22573dc00ab22941b73"],["/img/4.webp","3f8d19a53e0a1c9e572814a7dbe781ff"],["/img/4jiq2wefijd4jiq2wefijd.jpg","9e330c93574c790858f2d61674a149e6"],["/img/5.jpg","be5f4515506aec449081c0754caa2f85"],["/img/5.webp","5008376bca9f33b37af34170720c71ea"],["/img/51dd6b9f1e1469d3fb3cf10f777da42e03637fcf.jpg","6ae4d3fb7347a83408583e136d434c0a"],["/img/6.jpg","08344c1ae2849aaa4c68a2f77551613e"],["/img/6.webp","b8f558c3c6504baba283aba728259277"],["/img/6560d9bb5f76497192d22bc4f39a9bc2.png","a729026855f9fdcd945f406e1582c636"],["/img/671ca19cfbad400ea126de755b907a0f.jpg","d22d9f78c020c3a203f85cbc383f7552"],["/img/6e501611880511ebb6edd017c2d2eca2-副本.jpg","a2c506ce881e9459fbca2c587174e175"],["/img/6e501611880511ebb6edd017c2d2eca2.jpg","44b9ce74bb6cec98f60272e17e159aaf"],["/img/7.jpg","3093623206f7952ac4b6e4da16fba034"],["/img/7.webp","194e069dfacd279186c0f3017150fe3d"],["/img/793605c8d1684eee9aac9639b5ec8d12.jpg","9f2b43d88170f43608bb0168052633a1"],["/img/8.jpg","4d605e3cc6ff163c71fd3195dd769dda"],["/img/8.webp","aa65c2ebb65da1a95ba912865cd945bf"],["/img/875c3c7f2e8440d9b09d36a3b2f87d8a.jpg","b197ae24b69a5aa785a4549a7d5c5bb2"],["/img/9.jpg","d79e07127c325cc0c2ec96ef7356c6ca"],["/img/9.webp","fd670e326ee5f3bb2f8755f4f2779d7e"],["/img/93614f28fd684941811009d614c4a94b.jpg","7d59dc3562630331ad01573657972e50"],["/img/99cbd70d02c84a068396a26092d1101a.jpg","e2085f63cfaf63953a87ecbc308a2c03"],["/img/README.html","0182b1b3cb50e98236b59fc465bf00cb"],["/img/android-chrome-144x144.png","9fcbfe264b4f4fb0e4a667bd51cdfbcb"],["/img/android-chrome-192x192.png","f28b627e52e29802d3de1d56b90c1e08"],["/img/android-chrome-256x256.png","0db468a83ec20d7999c7358e73461f85"],["/img/android-chrome-36x36.png","64b6945f0954b78a2f63acdcbba096de"],["/img/android-chrome-384x384.png","5a6f885442a55d362daf3fa2837cca5d"],["/img/android-chrome-48x48.png","7cbba279b02e65b4265212ea476bbcce"],["/img/android-chrome-512x512.png","2f854dde5cb1f2623a04f24a2bfcbd82"],["/img/android-chrome-72x72.png","c043d4cf94804cc50538694733d86e61"],["/img/android-chrome-96x96.png","753b16c8a6fe1aa1772707cc89965b14"],["/img/apple-touch-icon.png","ce4333258cd2cbb5a7c59db542f1ba00"],["/img/bc0d0c93d14d2922d103a2cbe968d080b16ab6db.jpg","0068665760d00e9224e3202a3df83739"],["/img/browserconfig.xml","b0335142f63620dc599356e6ab93004b"],["/img/c1b1434d5ab341a39f01b69aed621325.png","71b3397dd65c5f645259596597763953"],["/img/cacdd32faef8677b1292d332f650fcf4a28c8b68.jpg","27e34e956aa9d3a70d24beffc4fa76b3"],["/img/db774528967d4c8ea161b07d3c0d2a40.jpg","d9d8651731a6e15627f675d3005f3ab6"],["/img/diezhong.jpg","9108dee345014ae24a04c273b7ab5a10"],["/img/ed57b8fd0562b54bd15e7bf5761a4269.jpg","0d76113ab00dba5c43c5400956b1f687"],["/img/favicon-16x16.png","8e4c0a30991756b0de4661eb591c1ab8"],["/img/favicon-32x32.png","4bf5dac43f67880a617039e1269b8a96"],["/img/mstile-150x150.png","d03a0a12033d3be8f4b3d6f551fc0d6d"],["/img/safari-pinned-tab.svg","4bfe803ec42dcabac1e497c9b63e99ab"],["/img/siteicon/android-chrome-144x144.png","f0e5df1ef460d4b4b1bc94b8a999f6cf"],["/img/siteicon/android-chrome-192x192.png","9800858cd836b43541faefb55451d725"],["/img/siteicon/android-chrome-256x256.png","1b541781c6c5f014f88530d4a9d3bbe3"],["/img/siteicon/android-chrome-36x36.png","67d9820f5ba1d664a52f69ab69cdf8d3"],["/img/siteicon/android-chrome-384x384.png","e1678593232e8b1fcba5964ca89ed06a"],["/img/siteicon/android-chrome-48x48.png","c59d55887aac5d917bb715e5437f2fca"],["/img/siteicon/android-chrome-512x512.png","803c7fe3ddb3c8e6badb170c5a326d2d"],["/img/siteicon/android-chrome-72x72.png","d454fa3247c4e435f8a09ede5f9ac228"],["/img/siteicon/android-chrome-96x96.png","2ea9ff10d17f91faf30160ab81d890e0"],["/img/siteicon/apple-touch-icon.png","016c967c39be0bfc0fe43761ec173763"],["/img/siteicon/browserconfig.xml","dc3c1a4a34117ae191f7af55f717b34c"],["/img/siteicon/favicon-16x16.png","6f24065e5cb6cf3b4c5ba9cc564624f0"],["/img/siteicon/favicon-32x32.png","af0b88f417b5730a0f6cd3b940d72221"],["/img/siteicon/mstile-150x150.png","797e61692e4f3d50afe799815f0821a6"],["/img/siteicon/safari-pinned-tab.svg","ede9620525585426f4555e67bb4147d9"],["/img/src=http___b-ssl.duitang.com_uploads_item_201607_12_20160712100923_HMKie.jpeg&refer=http___b-ssl.duitang.webp","1ff3b55592d09a0ce20875d921e3473f"],["/img/src=http___c-ssl.duitang.com_uploads_item_201508_13_20150813214317_KxmTe.jpeg&refer=http___c-ssl.duitang.webp","939be5d9fb6fe196c5b4d87463ba1ca4"],["/img/src=http___c-ssl.duitang.com_uploads_item_201709_03_20170903103130_RxSnJ.thumb.1000_0.jpeg&refer=http___c-ssl.duitang.webp","c805471165fe2c55c4c835e32dddfe6f"],["/img/微信.jpg","5f3fb873ef414cbcd8adfa29e77a0810"],["/img/微信.png","106e1f95bd01b6e7f291e07e2db4cb37"],["/img/支付宝.jpg","37c86d4ac9614d051ce3ce77c072b78e"],["/img/支付宝.png","d75907c4c9a63cd40a70b987495ab267"],["/index.html","72461a0de9b9b8d84a70a8cea2a327d0"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/pdfjs/build/pdf.js","81feffc1144eaf5172010d08ab0f9613"],["/js/pdfjs/build/pdf.sandbox.js","6fe0de15432c4c626557df2c4f894631"],["/js/pdfjs/build/pdf.worker.js","343c6e94125fc5ee3171115053008611"],["/js/pdfjs/web/debugger.css","2f4e5f817b75fa98bf936c4e8fa4cd7a"],["/js/pdfjs/web/debugger.js","454ea153ca826ac8aefccb4b3efcfdbd"],["/js/pdfjs/web/images/annotation-check.svg","1aac80711a19e2e435ef13aba855901f"],["/js/pdfjs/web/images/annotation-comment.svg","4f3d3d9b61d113ba0d284481d2454af4"],["/js/pdfjs/web/images/annotation-help.svg","6ec1ca7b8aa80a3e10325e74d7998894"],["/js/pdfjs/web/images/annotation-insert.svg","790992abfc5034ed777d4ca8b4865a96"],["/js/pdfjs/web/images/annotation-key.svg","40015bde172203a4ffa880a238d6d779"],["/js/pdfjs/web/images/annotation-newparagraph.svg","bb7062f13b8ce19185fc37ff7dc67566"],["/js/pdfjs/web/images/annotation-noicon.svg","6508f26ea254277f5c0df4ea5ab9f24d"],["/js/pdfjs/web/images/annotation-note.svg","832e3217eb765543d201f3b40005956d"],["/js/pdfjs/web/images/annotation-paperclip.svg","95261db8f4694ced4b753a5a14b7627c"],["/js/pdfjs/web/images/annotation-paragraph.svg","da51c08160d09ff8f5e8e09dc9e042eb"],["/js/pdfjs/web/images/annotation-pushpin.svg","cd64866e884b245796cb15d41b8c3c86"],["/js/pdfjs/web/images/cursor-editorFreeText.svg","3626649fe7b80fa3a71aad576edec17b"],["/js/pdfjs/web/images/cursor-editorInk.svg","6cf7a147a22611a98dbc409b9d44b56a"],["/js/pdfjs/web/images/findbarButton-next.svg","e2824495a76d61b21028ecfa27acaa43"],["/js/pdfjs/web/images/findbarButton-previous.svg","2c51564fbaeef89ee1d9e2ec7d3b8a24"],["/js/pdfjs/web/images/loading-dark.svg","2a0e614e86e1eac2096285f5d25ba096"],["/js/pdfjs/web/images/loading-icon.gif","faa74e8c61fc64d5edb11613c7eead2c"],["/js/pdfjs/web/images/loading.svg","28e82fa827563f85d2986895c1162311"],["/js/pdfjs/web/images/secondaryToolbarButton-documentProperties.svg","3a16ee3729687f1d1302712e664cee91"],["/js/pdfjs/web/images/secondaryToolbarButton-firstPage.svg","91a9b8bc9176f001354505d89d73a8ce"],["/js/pdfjs/web/images/secondaryToolbarButton-handTool.svg","0e155713a95a017cc5cc30a27040f8dc"],["/js/pdfjs/web/images/secondaryToolbarButton-lastPage.svg","c27d30a2455403e97bb8b04284cfd703"],["/js/pdfjs/web/images/secondaryToolbarButton-rotateCcw.svg","cf46d5e2ca6535f4fe837fd828b70d2f"],["/js/pdfjs/web/images/secondaryToolbarButton-rotateCw.svg","3fbd44c0002c0a429c9f274a1119f5ae"],["/js/pdfjs/web/images/secondaryToolbarButton-scrollHorizontal.svg","065b34ce2cca659d32af24945cdd6060"],["/js/pdfjs/web/images/secondaryToolbarButton-scrollPage.svg","f001ec02d59dd559f9ac188b789e9c93"],["/js/pdfjs/web/images/secondaryToolbarButton-scrollVertical.svg","b5a84c07efc4acf13bc9fd6789257e5e"],["/js/pdfjs/web/images/secondaryToolbarButton-scrollWrapped.svg","65eab208698a7e36ed4a36267ddf32f6"],["/js/pdfjs/web/images/secondaryToolbarButton-selectTool.svg","0995cdd62abae594b8953a5846f46c1f"],["/js/pdfjs/web/images/secondaryToolbarButton-spreadEven.svg","cb937aafab1ced8cf88d9a9b5eb20903"],["/js/pdfjs/web/images/secondaryToolbarButton-spreadNone.svg","b11634325efd950bb7fa91be259ba7f7"],["/js/pdfjs/web/images/secondaryToolbarButton-spreadOdd.svg","27a437431079dfec6eab0910088401fb"],["/js/pdfjs/web/images/shadow.png","ff1470fe29c003ba93ae2d1cc99b13f3"],["/js/pdfjs/web/images/toolbarButton-bookmark.svg","f92ef9c0fe7cc0f63da7c346326a8bea"],["/js/pdfjs/web/images/toolbarButton-currentOutlineItem.svg","7f4b752b494a196d26810587a2183d93"],["/js/pdfjs/web/images/toolbarButton-download.svg","1c49e5945ebbb8f01334868d4cf3eb41"],["/js/pdfjs/web/images/toolbarButton-editorFreeText.svg","c2cb766a28b28eb331836be1ecf9b0e5"],["/js/pdfjs/web/images/toolbarButton-editorInk.svg","8f1b37788128093e13e5c8ebf4ffa176"],["/js/pdfjs/web/images/toolbarButton-menuArrow.svg","f1e2c311332ee5bec43bebe6a9e6fadc"],["/js/pdfjs/web/images/toolbarButton-openFile.svg","b028067475ee9cb463cb332b80a4f118"],["/js/pdfjs/web/images/toolbarButton-pageDown.svg","f069204380261a6209e0a8d09296ecac"],["/js/pdfjs/web/images/toolbarButton-pageUp.svg","a7bde62b304e817fc82b3eb447a4e61f"],["/js/pdfjs/web/images/toolbarButton-presentationMode.svg","e5e5e2bd092da9563e9fe1683ca96814"],["/js/pdfjs/web/images/toolbarButton-print.svg","f72bda736f4134a6fbbabb07b2df33de"],["/js/pdfjs/web/images/toolbarButton-search.svg","460a4f30268e7ca89caf686bc6d158d8"],["/js/pdfjs/web/images/toolbarButton-secondaryToolbarToggle.svg","15c198a9e82f0acde67bcf984a2a392e"],["/js/pdfjs/web/images/toolbarButton-sidebarToggle.svg","6e9a87e8892bbc18d6c8c6ec92f928be"],["/js/pdfjs/web/images/toolbarButton-viewAttachments.svg","2624927ca6a9b27a89ea3771016667ae"],["/js/pdfjs/web/images/toolbarButton-viewLayers.svg","e05350ecb3f3a562a95c949d80618e7b"],["/js/pdfjs/web/images/toolbarButton-viewOutline.svg","3c685c673deb2a6d84fb7c0029b03e63"],["/js/pdfjs/web/images/toolbarButton-viewThumbnail.svg","b74203eb9c9b702676441ae7e844a0b5"],["/js/pdfjs/web/images/toolbarButton-zoomIn.svg","7393db490c10e1225af2bea630dff600"],["/js/pdfjs/web/images/toolbarButton-zoomOut.svg","950d42d1105146a1868ba45ac2ed54f5"],["/js/pdfjs/web/images/treeitem-collapsed.svg","57e07b703e74290b985879a5606283e5"],["/js/pdfjs/web/images/treeitem-expanded.svg","af9e269b3a6939136b579962c0fdb3ef"],["/js/pdfjs/web/standard_fonts/LiberationSans-Bold.ttf","a720cdc76cacedfaaddc13de2bb7e6b5"],["/js/pdfjs/web/standard_fonts/LiberationSans-BoldItalic.ttf","c190aa8a01fe181754e83d8fe9d6425d"],["/js/pdfjs/web/standard_fonts/LiberationSans-Italic.ttf","d235bec3a6ae3a86fec2a79f2ab42c97"],["/js/pdfjs/web/standard_fonts/LiberationSans-Regular.ttf","dceebf9db79d2acf4a12b8ef7c6fda3e"],["/js/pdfjs/web/viewer.css","347f2c053cb6db1c661dbe0579d29906"],["/js/pdfjs/web/viewer.html","63deed566f5bd7c5ef0d4f40958bc3fa"],["/js/pdfjs/web/viewer.js","f2de351f6ab4bbc5f8856690c38fa482"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a868d54e9f866bfbbd678e42a992ad39"],["/pdfjs/build/pdf.js","81feffc1144eaf5172010d08ab0f9613"],["/pdfjs/build/pdf.sandbox.js","6fe0de15432c4c626557df2c4f894631"],["/pdfjs/build/pdf.worker.js","343c6e94125fc5ee3171115053008611"],["/pdfjs/web/debugger.css","2f4e5f817b75fa98bf936c4e8fa4cd7a"],["/pdfjs/web/debugger.js","454ea153ca826ac8aefccb4b3efcfdbd"],["/pdfjs/web/images/annotation-check.svg","1aac80711a19e2e435ef13aba855901f"],["/pdfjs/web/images/annotation-comment.svg","4f3d3d9b61d113ba0d284481d2454af4"],["/pdfjs/web/images/annotation-help.svg","6ec1ca7b8aa80a3e10325e74d7998894"],["/pdfjs/web/images/annotation-insert.svg","790992abfc5034ed777d4ca8b4865a96"],["/pdfjs/web/images/annotation-key.svg","40015bde172203a4ffa880a238d6d779"],["/pdfjs/web/images/annotation-newparagraph.svg","bb7062f13b8ce19185fc37ff7dc67566"],["/pdfjs/web/images/annotation-noicon.svg","6508f26ea254277f5c0df4ea5ab9f24d"],["/pdfjs/web/images/annotation-note.svg","832e3217eb765543d201f3b40005956d"],["/pdfjs/web/images/annotation-paperclip.svg","95261db8f4694ced4b753a5a14b7627c"],["/pdfjs/web/images/annotation-paragraph.svg","da51c08160d09ff8f5e8e09dc9e042eb"],["/pdfjs/web/images/annotation-pushpin.svg","cd64866e884b245796cb15d41b8c3c86"],["/pdfjs/web/images/cursor-editorFreeText.svg","3626649fe7b80fa3a71aad576edec17b"],["/pdfjs/web/images/cursor-editorInk.svg","6cf7a147a22611a98dbc409b9d44b56a"],["/pdfjs/web/images/findbarButton-next.svg","e2824495a76d61b21028ecfa27acaa43"],["/pdfjs/web/images/findbarButton-previous.svg","2c51564fbaeef89ee1d9e2ec7d3b8a24"],["/pdfjs/web/images/loading-dark.svg","2a0e614e86e1eac2096285f5d25ba096"],["/pdfjs/web/images/loading-icon.gif","faa74e8c61fc64d5edb11613c7eead2c"],["/pdfjs/web/images/loading.svg","28e82fa827563f85d2986895c1162311"],["/pdfjs/web/images/secondaryToolbarButton-documentProperties.svg","3a16ee3729687f1d1302712e664cee91"],["/pdfjs/web/images/secondaryToolbarButton-firstPage.svg","91a9b8bc9176f001354505d89d73a8ce"],["/pdfjs/web/images/secondaryToolbarButton-handTool.svg","0e155713a95a017cc5cc30a27040f8dc"],["/pdfjs/web/images/secondaryToolbarButton-lastPage.svg","c27d30a2455403e97bb8b04284cfd703"],["/pdfjs/web/images/secondaryToolbarButton-rotateCcw.svg","cf46d5e2ca6535f4fe837fd828b70d2f"],["/pdfjs/web/images/secondaryToolbarButton-rotateCw.svg","3fbd44c0002c0a429c9f274a1119f5ae"],["/pdfjs/web/images/secondaryToolbarButton-scrollHorizontal.svg","065b34ce2cca659d32af24945cdd6060"],["/pdfjs/web/images/secondaryToolbarButton-scrollPage.svg","f001ec02d59dd559f9ac188b789e9c93"],["/pdfjs/web/images/secondaryToolbarButton-scrollVertical.svg","b5a84c07efc4acf13bc9fd6789257e5e"],["/pdfjs/web/images/secondaryToolbarButton-scrollWrapped.svg","65eab208698a7e36ed4a36267ddf32f6"],["/pdfjs/web/images/secondaryToolbarButton-selectTool.svg","0995cdd62abae594b8953a5846f46c1f"],["/pdfjs/web/images/secondaryToolbarButton-spreadEven.svg","cb937aafab1ced8cf88d9a9b5eb20903"],["/pdfjs/web/images/secondaryToolbarButton-spreadNone.svg","b11634325efd950bb7fa91be259ba7f7"],["/pdfjs/web/images/secondaryToolbarButton-spreadOdd.svg","27a437431079dfec6eab0910088401fb"],["/pdfjs/web/images/shadow.png","ff1470fe29c003ba93ae2d1cc99b13f3"],["/pdfjs/web/images/toolbarButton-bookmark.svg","f92ef9c0fe7cc0f63da7c346326a8bea"],["/pdfjs/web/images/toolbarButton-currentOutlineItem.svg","7f4b752b494a196d26810587a2183d93"],["/pdfjs/web/images/toolbarButton-download.svg","1c49e5945ebbb8f01334868d4cf3eb41"],["/pdfjs/web/images/toolbarButton-editorFreeText.svg","c2cb766a28b28eb331836be1ecf9b0e5"],["/pdfjs/web/images/toolbarButton-editorInk.svg","8f1b37788128093e13e5c8ebf4ffa176"],["/pdfjs/web/images/toolbarButton-menuArrow.svg","f1e2c311332ee5bec43bebe6a9e6fadc"],["/pdfjs/web/images/toolbarButton-openFile.svg","b028067475ee9cb463cb332b80a4f118"],["/pdfjs/web/images/toolbarButton-pageDown.svg","f069204380261a6209e0a8d09296ecac"],["/pdfjs/web/images/toolbarButton-pageUp.svg","a7bde62b304e817fc82b3eb447a4e61f"],["/pdfjs/web/images/toolbarButton-presentationMode.svg","e5e5e2bd092da9563e9fe1683ca96814"],["/pdfjs/web/images/toolbarButton-print.svg","f72bda736f4134a6fbbabb07b2df33de"],["/pdfjs/web/images/toolbarButton-search.svg","460a4f30268e7ca89caf686bc6d158d8"],["/pdfjs/web/images/toolbarButton-secondaryToolbarToggle.svg","15c198a9e82f0acde67bcf984a2a392e"],["/pdfjs/web/images/toolbarButton-sidebarToggle.svg","6e9a87e8892bbc18d6c8c6ec92f928be"],["/pdfjs/web/images/toolbarButton-viewAttachments.svg","2624927ca6a9b27a89ea3771016667ae"],["/pdfjs/web/images/toolbarButton-viewLayers.svg","e05350ecb3f3a562a95c949d80618e7b"],["/pdfjs/web/images/toolbarButton-viewOutline.svg","3c685c673deb2a6d84fb7c0029b03e63"],["/pdfjs/web/images/toolbarButton-viewThumbnail.svg","b74203eb9c9b702676441ae7e844a0b5"],["/pdfjs/web/images/toolbarButton-zoomIn.svg","7393db490c10e1225af2bea630dff600"],["/pdfjs/web/images/toolbarButton-zoomOut.svg","950d42d1105146a1868ba45ac2ed54f5"],["/pdfjs/web/images/treeitem-collapsed.svg","57e07b703e74290b985879a5606283e5"],["/pdfjs/web/images/treeitem-expanded.svg","af9e269b3a6939136b579962c0fdb3ef"],["/pdfjs/web/standard_fonts/LiberationSans-Bold.ttf","a720cdc76cacedfaaddc13de2bb7e6b5"],["/pdfjs/web/standard_fonts/LiberationSans-BoldItalic.ttf","c190aa8a01fe181754e83d8fe9d6425d"],["/pdfjs/web/standard_fonts/LiberationSans-Italic.ttf","d235bec3a6ae3a86fec2a79f2ab42c97"],["/pdfjs/web/standard_fonts/LiberationSans-Regular.ttf","dceebf9db79d2acf4a12b8ef7c6fda3e"],["/pdfjs/web/viewer.css","347f2c053cb6db1c661dbe0579d29906"],["/pdfjs/web/viewer.html","63deed566f5bd7c5ef0d4f40958bc3fa"],["/pdfjs/web/viewer.js","f2de351f6ab4bbc5f8856690c38fa482"],["/renruyuhelaoliumang.html","d8408c71a3fe50bffacc620a34ea8ea7"],["/search.xml","12a928faf4e7fd9681648cde27557422"],["/shenmezuizhengui.html","2286b000e2f0f5584f78348f8d3be4be"],["/sw-register.js","aaea65922643f70b10b5f47da86886e1"],["/tags/index.html","9840925c35b243bdc8503077a01a2e8f"],["/tags/黑花/index.html","deb7b473166e802bf19f50245c915c16"],["/tags/黑花/page/2/index.html","eb241cd54d37ad5efc2b7ecdf9220841"],["/tags/黑花H/index.html","9186f97e0e3f5c40c5638b97407a79d0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
