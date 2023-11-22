// ==UserScript==
// @name     uBlock filters - Unbreak
// @namespace  unbreak
// @version   1.0
// @description Filters optimized for uBlock Origin, to unbreak sites broken as a result of 3rd-party filter lists enabled by default.
// @homepage  https://github.com/uBlockOrigin/uAssets
// @license   https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
// ==/UserScript==

(function() {
'use strict';

// GitHub issues
// https://github.com/uBlockOrigin/uAssets/issues/729
// https://github.com/NanoMeow/QuickReports/issues/1636
uBlockOrigin.addHideFilter('||2mdn.net/instream/video/client.js$script,redirect=noopjs,domain=video.foxnews.com');
uBlockOrigin.addHideFilter('||cdn.krxd.net^$script,redirect=noopjs,domain=video.foxnews.com');

// @@||akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com
uBlockOrigin.addHideFilter('akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com');
uBlockOrigin.addHideFilter('global.fncstatic.com^*/ads.js$script,domain=foxnews.com');
uBlockOrigin.addHideFilter('imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=insider.foxnews.com');

// Chrome store feedback
// To counter `top.mail.ru` in Peter Lowe's
uBlockOrigin.addHideFilter('top.mail.ru^$badfilter');
uBlockOrigin.addHideFilter('top.mail.ru^$3p');

// `amazon-adsystem.com` is blocked by Peter Lowe's. The neutered script should
// help lower chances of breakage. Examples:
// - http://www.food.com/recipe/oven-baked-sweet-plantains-80130 (slideshow controls broken)
// - [add more]
// https://github.com/uBlockOrigin/uAssets/issues/317
uBlockOrigin.addHideFilter('amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=amazon-adsystem.com/aax2/amzn_ads.js');
uBlockOrigin.addHideFilter('amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=noopjs,domain=player.performgroup.com');

// This potentially unbreaks sites broken by EasyPrivacy's `/b/ss/*&aqe=`
// Confirmed for:
// - http://www.surfline.com/video/ (links not working)
// - https://github.com/gorhill/uBlock/issues/529
// - http://www.scotrail.co.uk/check-your-journey (via https://twitter.com/andy_pee_tho/status/710508529405263872)
uBlockOrigin.addHideFilter('b/ss/*&aqe=$image,redirect=1x1-transparent.gif');

// This unbreak video player:
// - http://www.cnet.com/videos/big-mac-survives-molten-copper-and-heats-up-internet-ep-233/
// And possibly other sites -- `taboola.com` is blocked by Peter Lowe's.
uBlockOrigin.addHideFilter('cdn.taboola.com/libtrc/*/loader.js$script,redirect=noopjs,important,domain=cnet.com');

// https://adblockplus.org/forum/viewtopic.php?f=1&t=44930
// https://github.com/uBlockOrigin/uAssets/issues/4353#issuecomment-449159137
// https://github.com/jspenguin2017/uBlockProtector/issues/1085
uBlockOrigin.addHideFilter('s.ytimg.com/yts/jsbin/mobile/vj_ads_frontend_en


//============================================================================================================================================================

// ==UserScript==
// @name     uBlock filters - Badware risks
// @namespace  unbreak
// @version   1.0
// @description Filters optimized for uBlock Origin, to unbreak sites broken as a result of 3rd-party filter lists enabled by default.
// @homepage  https://github.com/uBlockOrigin/uAssets
// @license   https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
// ==/UserScript==

(function() {
'use strict';

// GitHub issues
// https://github.com/uBlockOrigin/uAssets/issues/729
// https://github.com/NanoMeow/QuickReports/issues/1636
uBlockOrigin.addHideFilter('||2mdn.net/instream/video/client.js$script,redirect=noopjs,domain=video.foxnews.com');
uBlockOrigin.addHideFilter('||cdn.krxd.net^$script,redirect=noopjs,domain=video.foxnews.com');

// @@||akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com
uBlockOrigin.addHideFilter('akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com');
uBlockOrigin.addHideFilter('global.fncstatic.com^*/ads.js$script,domain=foxnews.com');
uBlockOrigin.addHideFilter('imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=insider.foxnews.com');

// Chrome store feedback
// To counter `top.mail.ru` in Peter Lowe's
uBlockOrigin.addHideFilter('top.mail.ru^$badfilter');
uBlockOrigin.addHideFilter('top.mail.ru^$3p');

// `amazon-adsystem.com` is blocked by Peter Lowe's. The neutered script should
// help lower chances of breakage. Examples:
// - http://www.food.com/recipe/oven-baked-sweet-plantains-80130 (slideshow controls broken)
// - [add more]
// https://github.com/uBlockOrigin/uAssets/issues/317
uBlockOrigin.addHideFilter('amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=amazon-adsystem.com/aax2/amzn_ads.js');
uBlockOrigin.addHideFilter('amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=noopjs,domain=player.performgroup.com');

// This potentially unbreaks sites broken by EasyPrivacy's `/b/ss/*&aqe=`
// Confirmed for:
// - http://www.surfline.com/video/ (links not working)
// - https://github.com/gorhill/uBlock/issues/529
// - http://www.scotrail.co.uk/check-your-journey (via https://twitter.com/andy_pee_tho/status/710508529405263872)
uBlockOrigin.addHideFilter('b/ss/*&aqe=$image,redirect=1x1-transparent.gif');

// This unbreak video player:
// - http://www.cnet.com/videos/big-mac-survives-molten-copper-and-heats-up-internet-ep-233/
// And possibly other sites -- `taboola.com` is blocked by Peter Lowe's.
uBlockOrigin.addHideFilter('cdn.taboola.com/libtrc/*/loader.js$script,redirect=noopjs,important,domain=cnet.com');

// https://adblockplus.org/forum/viewtopic.php?f=1&t=44930
// https://github.com/uBlockOrigin/uAssets/issues/4353#issuecomment-449159137
// https://github.com/jspenguin2017/uBlockProtector/issues/1085
uBlockOrigin.addHideFilter('s.ytimg.com/yts/jsbin/mobile/vj_ads_frontend_en


// =============================================================================================================================================================

// ==UserScript==
// @name        uBlock filters – Privacy
// @namespace   unbreak
// @version     1.0
// @description Filters optimized for uBlock Origin, to unbreak sites broken as a result of 3rd-party filter lists enabled by default.
// @homepage  https://github.com/uBlockOrigin/uAssets
// @license   https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
// ==/UserScript==

(function() {
'use strict';

// GitHub issues
// https://github.com/uBlockOrigin/uAssets/issues/729
// https://github.com/NanoMeow/QuickReports/issues/1636
uBlockOrigin.addHideFilter('||2mdn.net/instream/video/client.js$script,redirect=noopjs,domain=video.foxnews.com');
uBlockOrigin.addHideFilter('||cdn.krxd.net^$script,redirect=noopjs,domain=video.foxnews.com');

// @@||akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com
uBlockOrigin.addHideFilter('akamaihd.net/player/*/akamai/amp/prebid/*$script,domain=static.foxnews.com');
uBlockOrigin.addHideFilter('global.fncstatic.com^*/ads.js$script,domain=foxnews.com');
uBlockOrigin.addHideFilter('imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=insider.foxnews.com');

// Chrome store feedback
// To counter `top.mail.ru` in Peter Lowe's
uBlockOrigin.addHideFilter('top.mail.ru^$badfilter');
uBlockOrigin.addHideFilter('top.mail.ru^$3p');

// `amazon-adsystem.com` is blocked by Peter Lowe's. The neutered script should
// help lower chances of breakage. Examples:
// - http://www.food.com/recipe/oven-baked-sweet-plantains-80130 (slideshow controls broken)
// - [add more]
// https://github.com/uBlockOrigin/uAssets/issues/317
uBlockOrigin.addHideFilter('amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=amazon-adsystem.com/aax2/amzn_ads.js');
uBlockOrigin.addHideFilter('amazon-adsystem.com/aax2/amzn_ads.js$script,redirect=noopjs,domain=player.performgroup.com');

// This potentially unbreaks sites broken by EasyPrivacy's `/b/ss/*&aqe=`
// Confirmed for:
// - http://www.surfline.com/video/ (links not working)
// - https://github.com/gorhill/uBlock/issues/529
// - http://www.scotrail.co.uk/check-your-journey (via https://twitter.com/andy_pee_tho/status/710508529405263872)
uBlockOrigin.addHideFilter('b/ss/*&aqe=$image,redirect=1x1-transparent.gif');

// This unbreak video player:
// - http://www.cnet.com/videos/big-mac-survives-molten-copper-and-heats-up-internet-ep-233/
// And possibly other sites -- `taboola.com` is blocked by Peter Lowe's.
uBlockOrigin.addHideFilter('cdn.taboola.com/libtrc/*/loader.js$script,redirect=noopjs,important,domain=cnet.com');

// https://adblockplus.org/forum/viewtopic.php?f=1&t=44930
// https://github.com/uBlockOrigin/uAssets/issues/4353#issuecomment-449159137
// https://github.com/jspenguin2017/uBlockProtector/issues/1085
uBlockOrigin.addHideFilter('s.ytimg.com/yts/jsbin/mobile/vj_ads_frontend_en X

                           
//==============================================================================================================================================================

// ==UserScript==
// @name        Ad-Shield
// @namespace   unbreak
// @version     1.0
// @description Filters optimized for Tampermonkey, to unbreak sites broken by Ad-Shield.
// @homepage  https://github.com/uBlockOrigin/uAssets
// @license   https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
// ==/UserScript==

(function() {
'use strict';

// loawa.com, ygosu.com, sportalkorea.com, algumon.com, hancinema.net, enetnews.co.kr, edaily.co.kr, economist.co.kr, etoday.co.kr, hankyung.com, isplus.com, hometownstation.com, kagit.kr, inven.co.kr, newdaily.co.kr
uBlockOrigin.addHideFilter('loawa.com,ygosu.com,sportalkorea.com,algumon.com,hancinema.net,enetnews.co.kr,edaily.co.kr,economist.co.kr,etoday.co.kr,hankyung.com,isplus.com,hometownstation.com,kagit.kr,inven.co.kr,newdaily.co.kr##+js(no-xhr-if, /07c225f3\.online|content-loader\.com/)');
uBlockOrigin.addHideFilter('07c225f3.online^$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('07c225f3.online/loader.min.js$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('content-loader.com^$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('content-loader.com/loader.min.js$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('$image,1p,domain=07c225f3.online|content-loader.com');
uBlockOrigin.addHideFilter('$image,3p,redirect=1x1.gif,domain=07c225f3.online|content-loader.com');
uBlockOrigin.addHideFilter('$doc,ping,font,css,domain=07c225f3.online|content-loader.com');

// genshinlab.com, a-ha.io, cboard.net, mobilitytv.co.kr, mememedia.co.kr, newautopost.co.kr, tvreport.co.kr, tenbizt.com, jjang0u.com, joongdo.co.kr, viva100.com
uBlockOrigin.addHideFilter('genshinlab.com,a-ha.io,cboard.net,mobilitytv.co.kr,mememedia.co.kr,new

                           
//===============================================================================================================================================================

// ==UserScript==
// @name        uBlock filters – Unbreak
// @namespace   unbreak
// @version     1.0
// @description Filters optimized for Tampermonkey, to unbreak sites broken by Ad-Shield.
// @homepage  https://github.com/uBlockOrigin/uAssets
// @license   https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
// ==/UserScript==

(function() {
'use strict';

// loawa.com, ygosu.com, sportalkorea.com, algumon.com, hancinema.net, enetnews.co.kr, edaily.co.kr, economist.co.kr, etoday.co.kr, hankyung.com, isplus.com, hometownstation.com, kagit.kr, inven.co.kr, newdaily.co.kr
uBlockOrigin.addHideFilter('loawa.com,ygosu.com,sportalkorea.com,algumon.com,hancinema.net,enetnews.co.kr,edaily.co.kr,economist.co.kr,etoday.co.kr,hankyung.com,isplus.com,hometownstation.com,kagit.kr,inven.co.kr,newdaily.co.kr##+js(no-xhr-if, /07c225f3\.online|content-loader\.com/)');
uBlockOrigin.addHideFilter('07c225f3.online^$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('07c225f3.online/loader.min.js$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('content-loader.com^$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('content-loader.com/loader.min.js$script,domain=ygosu.com|loawa.com|algumon.com|sportalkorea.com|hancinema.net|enetnews.co.kr|edaily.co.kr|economist.co.kr|etoday.co.kr|hankyung.com|isplus.com|hometownstation.com|kagit.kr|inven.co.kr|newdaily.co.kr');
uBlockOrigin.addHideFilter('$image,1p,domain=07c225f3.online|content-loader.com');
uBlockOrigin.addHideFilter('$image,3p,redirect=1x1.gif,domain=07c225f3.online|content-loader.com');
uBlockOrigin.addHideFilter('$doc,ping,font,css,domain=07c225f3.online|content-loader.com');

// genshinlab.com, a-ha.io, cboard.net, mobilitytv.co.kr, mememedia.co.kr, newautopost.co.kr, tvreport.co.kr, tenbizt.com, jjang0u.com, joongdo.co.kr, viva100.com
uBlockOrigin.addHideFilter('genshinlab.com,a-ha.io,cboard.net,mobilitytv.co.kr,mememedia.co.kr,
