// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;


if (typeof getbooleanindexopage == 'function') { 


var mainpage;
var pageindex = getbooleanindexopage();
if(pageindex == "1"){

mainpage = "jqmStyle.html";	
	
}
else{

mainpage = "responsiveStyle.html";	
	
}


}




rh.consts('DEFAULT_TOPIC', encodeURI("#index.php.htm".substring(1)));
rh.consts('HOME_FILEPATH', encodeURI("index.html"))
rh.consts('START_FILEPATH', encodeURI(mainpage));
rh.consts('HELP_ID', 'AE904F3C-552D-4CD7-B2B2-14F710C783A2' || 'preview');
rh.consts('LNG_STOP_WORDS', ["a", "about", "after", "against", "all", "also", "among", "an", "and", "are", "as", "at", "be", "became", "because", "been", "between", "but", "by", "can", "come", "do", "during", "each", "early", "for", "form", "found", "from", "had", "has", "have", "he", "her", "his", "however", "in", "include", "into", "is", "it", "its", "late", "later", "made", "many", "may", "me", "med", "more", "most", "near", "no", "non", "not", "of", "on", "only", "or", "other", "over", "several", "she", "some", "such", "than", "that", "the", "their", "then", "there", "these", "they", "this", "through", "to", "under", "until", "use", "was", "we", "were", "when", "where", "which", "who", "with", "you"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "rtl");
model.publish(rh.consts('KEY_LNG_NAME'), "ar_AE");
model.publish(rh.consts('KEY_LNG'), {"SearchResultsPerScreen":"نتائج البحث حسب الصفحة","Reset":"إعادة تعيين","SyncToc":"SyncToc","HomeButton":"الصفحة الرئيسية","WebSearchButton":"WebSearch","GlossaryFilterTerms":"تصفية المصطلحات","HighlightSearchResults":"تمييز نتائج البحث","ApplyTip":"تطبيق","Welcome_header":"مرحباً بك في مركز المساعدة","WebSearch":"WebSearch","Show":"إظهار","ShowAll":"الكل","EnableAndSearch":"عرض نتائج البحث لكل الكلمات","Welcome_text":"ما المساعدة التي يمكننا تقديمها لك اليوم؟","Next":"&gt;&gt;","PreviousLabel":"السابق","NoScriptErrorMsg":"قم بتمكين دعم JavaScript في المتصفح لمشاهدة هذه الصفحة.","Print":"طباعة","Contents":"المحتويات","Search":"بحث","Hide":"إخفاء","Canceled":"تم الإلغاء","ShowHide":"إظهار/إخفاء","Loading":"يجري الآن التحميل...","EndOfResults":"نهاية نتائج البحث","favoritesLabel":"المفضّلة","Logo":"شعار","ContentFilterChanged":"تغيّر عامل تصفية المحتوى، ابحث ثانيةً","SidebarToggleTip":"توسيع/طي","Logo/Author":"مدعوم من","JS_alert_LoadXmlFailed":"خطأ: فشل تحميل ملف xml.","Searching":"يجري الآن البحث...","SearchTitle":"بحث","Copyright":"© Copyright 2017. جميع الحقوق محفوظة","favoritesNameLabel":"الاسم","Disabled Next":"&gt;&gt;","JS_alert_InitDatabaseFailed":"خطأ: فشل في تهيئة قاعدة البيانات.","Cancel":"إلغاء","unsetAsFavorite":"حذف من المفضّلة","nofavoritesFound":"لم تقم بتحديد أي صفحة كمفضّلة.","UnknownError":"خطأ غير معروف","ResultsFoundText":"%1 نتيجة (نتائج) تم العثور عليها لـ %2","FilterIntro":"الرجاء اختيار المصنف","Index":"فهرس","Seperate":"|","SearchPageTitle":"نتائج البحث","TopicsNotFound":"لم يتم العثور على موضوعات","setAsFavorites":"أضف للمفضلة","setAsFavorite":"حدد كمفضّلة","Glossary":"المفردات","Filter":"عامل التصفية","SearchButtonTitle":"بحث","NextLabel":"التالي","TableOfContents":"جدول المحتويات","HideAll":"إخفاء الكل","Disabled Prev":"&lt;&lt;","SearchOptions":"خيارات البحث","Back":"الخلف","Prev":"&lt;&lt;","OpenLinkInNewTab":"فتح في علامة تبويب جديدة","JS_alert_InvalidExpression_1":"الكلمات التي كتبتها ليست تعبيراً صالحاً.","IndexFilterKewords":"تصفية الكلمات الأساسية","IeCompatibilityErrorMsg":"لا يمكن مشاهدة هذه الصفحة في Internet Explorer 8 أو أية نسخ أقدم.","NavTip":"قائمة","ToTopTip":"الذهاب إلى البداية","FavoriteBoxTitle":"المفضّلة","ShowTopicInContext":"الصفحة كاملة"});

model.publish(rh.consts('KEY_HEADER_DEFAULT_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_DEFAULT_BACKGROUND_COLOR'), "#025172");
model.publish(rh.consts('KEY_LAYOUT_DEFAULT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");

model.publish(rh.consts('KEY_HEADER_TITLE'), "New Help");
model.publish(rh.consts('KEY_HEADER_TITLE_COLOR'), "");
model.publish(rh.consts('KEY_HEADER_BACKGROUND_COLOR'), "");
model.publish(rh.consts('KEY_HEADER_LOGO_PATH'), "");
model.publish(rh.consts('KEY_LAYOUT_FONT_FAMILY'), "");

//javascript:location.href='\"#{logo}index.php.htm\"
//<button onClick='rh._.redirectToLayout()' class ='header_label'>Styles</button>


model.publish(rh.consts('KEY_HEADER_HTML'), "<img onclick='rh._.main_page(\"#{logo}index.php.htm\")' class ='header_img' align = 'right' src='#{logo}87px.png' height=\"15\" width=\"15\" /><button onClick='rh._.go_ReHTML()' type=\"button\" class ='header_label'>ReHTML Style</button><button onClick='rh._.go_jqm()' type=\"button\" class ='header_label'>JQM Style</button>\
");
model.publish(rh.consts('KEY_HEADER_CSS'), ".topic-header {}\
.logo {}\
.logo img {}\
.nav {}\
.title {}\
.gotohome {}\
.title span, .gotohome span { }");
})();