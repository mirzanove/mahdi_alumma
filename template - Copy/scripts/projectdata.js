// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("#index.php.htm".substring(1)));
rh.consts('HOME_FILEPATH', encodeURI("index.html"));
rh.consts('START_FILEPATH', encodeURI('index.html'));
rh.consts('HELP_ID', '3EB7C706-C81D-4C33-B849-122E5AA82DFE' || 'preview');
rh.consts('LNG_STOP_WORDS', ["a", "about", "after", "against", "all", "also", "among", "an", "and", "are", "as", "at", "be", "became", "because", "been", "between", "but", "by", "can", "come", "do", "during", "each", "early", "for", "form", "found", "from", "had", "has", "have", "he", "her", "his", "however", "in", "include", "into", "is", "it", "its", "late", "later", "made", "many", "may", "me", "med", "more", "most", "near", "no", "non", "not", "of", "on", "only", "or", "other", "over", "several", "she", "some", "such", "than", "that", "the", "their", "then", "there", "these", "they", "this", "through", "to", "under", "until", "use", "was", "we", "were", "when", "where", "which", "who", "with", "you"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "rtl");
model.publish(rh.consts('KEY_LNG_NAME'), "ar_AE");
model.publish(rh.consts('KEY_LNG'), {"SearchResultsPerScreen":"نتائج البحث حسب الصفحة","Reset":"إعادة تعيين","SyncToc":"SyncToc","HomeButton":"الصفحة الرئيسية","WebSearchButton":"WebSearch","GlossaryFilterTerms":"تصفية المصطلحات","HighlightSearchResults":"تمييز نتائج البحث","ApplyTip":"تطبيق","Welcome_header":"مرحباً بك في مركز المساعدة","WebSearch":"WebSearch","Show":"إظهار","ShowAll":"الكل","EnableAndSearch":"عرض نتائج البحث لكل الكلمات","Welcome_text":"ما المساعدة التي يمكننا تقديمها لك اليوم؟","Next":"&gt;&gt;","PreviousLabel":"السابق","NoScriptErrorMsg":"قم بتمكين دعم JavaScript في المتصفح لمشاهدة هذه الصفحة.","Print":"طباعة","Contents":"المحتويات","Search":"بحث","Hide":"إخفاء","Canceled":"تم الإلغاء","ShowHide":"إظهار/إخفاء","Loading":"يجري الآن التحميل...","EndOfResults":"نهاية نتائج البحث","favoritesLabel":"المفضّلة","Logo":"شعار","ContentFilterChanged":"تغيّر عامل تصفية المحتوى، ابحث ثانيةً","SidebarToggleTip":"توسيع/طي","Logo/Author":"مدعوم من","JS_alert_LoadXmlFailed":"خطأ: فشل تحميل ملف xml.","Searching":"يجري الآن البحث...","SearchTitle":"بحث","Copyright":"© Copyright 2017. جميع الحقوق محفوظة","favoritesNameLabel":"الاسم","Disabled Next":"&gt;&gt;","JS_alert_InitDatabaseFailed":"خطأ: فشل في تهيئة قاعدة البيانات.","Cancel":"إلغاء","unsetAsFavorite":"حذف من المفضّلة","nofavoritesFound":"لم تقم بتحديد أي صفحة كمفضّلة.","UnknownError":"خطأ غير معروف","ResultsFoundText":"%1 نتيجة (نتائج) تم العثور عليها لـ %2","FilterIntro":"الرجاء اختيار المصنف","Index":"فهرس","Seperate":"|","SearchPageTitle":"نتائج البحث","TopicsNotFound":"لم يتم العثور على موضوعات","setAsFavorites":"أضف للمفضلة","setAsFavorite":"حدد كمفضّلة","Glossary":"المفردات","Filter":"عامل التصفية","SearchButtonTitle":"بحث","NextLabel":"التالي","TableOfContents":"جدول المحتويات","HideAll":"إخفاء الكل","Disabled Prev":"&lt;&lt;","SearchOptions":"خيارات البحث","Back":"الخلف","Prev":"&lt;&lt;","OpenLinkInNewTab":"فتح في علامة تبويب جديدة","JS_alert_InvalidExpression_1":"الكلمات التي كتبتها ليست تعبيراً صالحاً.","IndexFilterKewords":"تصفية الكلمات الأساسية","IeCompatibilityErrorMsg":"لا يمكن مشاهدة هذه الصفحة في Internet Explorer 8 أو أية نسخ أقدم.","NavTip":"قائمة","ToTopTip":"الذهاب إلى البداية","FavoriteBoxTitle":"المفضّلة","ShowTopicInContext":"الصفحة كاملة"});

model.publish(rh.consts('KEY_HEADER_DEFAULT_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_DEFAULT_BACKGROUND_COLOR'), "#025172");
model.publish(rh.consts('KEY_LAYOUT_DEFAULT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");

model.publish(rh.consts('KEY_HEADER_TITLE'), "New Help");
model.publish(rh.consts('KEY_HEADER_TITLE_COLOR'), "#dddddd");
model.publish(rh.consts('KEY_HEADER_BACKGROUND_COLOR'), "#232323");
model.publish(rh.consts('KEY_HEADER_LOGO_PATH'), "template/Charcoal_Grey/logo.png");
model.publish(rh.consts('KEY_LAYOUT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");
model.publish(rh.consts('KEY_HEADER_HTML'), "<div class='topic-header'>\
  <div class='logo' onClick='rh._.redirectToLayout()'>\
    <img src='#{logo}' />\
  </div>\
  <div class='nav'>\
    <div class='title' title='#{title}'>\
      <span onClick='rh._.redirectToLayout()'>#{title}</span>\
    </div>\
    <div class='gotohome' title='#{tooltip}' onClick='rh._.redirectToLayout()'>\
      <span>#{label}</span>\
    </div></div>\
  </div>\
<div class='topic-header-shadow'></div>\
");
model.publish(rh.consts('KEY_HEADER_CSS'), ".topic-header { background-color: #{background-color}; color: #{color}; width: calc(100%); height: 3em; position: fixed; left: 0; top: 0; font-family: #{font-family}; display: table; box-sizing: border-box; }\
.topic-header-shadow { height: 3em; width: 100%; }\
.logo { cursor: pointer; padding: 0.2em; height: calc(100% - 0.4em); text-align: center; display: table-cell; vertical-align: middle; }\
.logo img { max-height: 100%; display: block; }\
.nav { width: 100%; display: table-cell; }\
.title { width: 40%; height: 100%; float: left; line-height: 3em; cursor: pointer; }\
.gotohome { width: 60%; float: left; text-align: right; height: 100%; line-height: 3em; cursor: pointer; }\
.title span, .gotohome span { padding: 0em 1em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }");

})();