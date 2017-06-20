// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;


var mainpage;
var pageindex = getbooleanindexopage();
if(pageindex == "1"){

mainpage = "jqmStyle.html";	
	
}
else{

mainpage = "responsiveStyle.html";	
	
}


rh.consts('DEFAULT_TOPIC', encodeURI("#index.php.htm".substring(1)));
rh.consts('START_FILEPATH', encodeURI(mainpage));
rh.consts('HELP_ID', 'F77BFBC7-9E8F-4388-8CC8-E0411227464E' || 'preview');
rh.consts('LNG_STOP_WORDS', ["a", "about", "after", "against", "all", "also", "among", "an", "and", "are", "as", "at", "be", "became", "because", "been", "between", "but", "by", "can", "come", "do", "during", "each", "early", "for", "form", "found", "from", "had", "has", "have", "he", "her", "his", "however", "in", "include", "into", "is", "it", "its", "late", "later", "made", "many", "may", "me", "med", "more", "most", "near", "no", "non", "not", "of", "on", "only", "or", "other", "over", "several", "she", "some", "such", "than", "that", "the", "their", "then", "there", "these", "they", "this", "through", "to", "under", "until", "use", "was", "we", "were", "when", "where", "which", "who", "with", "you"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "rtl");
model.publish(rh.consts('KEY_LNG'), {"SearchResultsPerScreen":"نتائج البحث حسب الصفحة","Reset":"إعادة تعيين","SyncToc":"SyncToc","HomeButton":"الصفحة الرئيسية","WebSearchButton":"WebSearch","GlossaryFilterTerms":"تصفية المصطلحات","HighlightSearchResults":"تمييز نتائج البحث","ApplyTip":"تطبيق","WebSearch":"WebSearch","Show":"إظهار","ShowAll":"الكل","EnableAndSearch":"عرض نتائج البحث لكل الكلمات","Next":"&gt;&gt;","PreviousLabel":"السابق","NoScriptErrorMsg":"قم بتمكين دعم JavaScript في المتصفح لمشاهدة هذه الصفحة.","Print":"طباعة","Contents":"المحتويات","Search":"بحث","Hide":"إخفاء","Canceled":"تم الإلغاء","ShowHide":"إظهار/إخفاء","Loading":"يجري الآن التحميل...","EndOfResults":"نهاية نتائج البحث","Logo":"شعار","ContentFilterChanged":"تغيّر عامل تصفية المحتوى، ابحث ثانيةً","SidebarToggleTip":"توسيع/طي","Logo/Author":"مدعوم من","JS_alert_LoadXmlFailed":"خطأ: فشل تحميل ملف xml.","Searching":"يجري الآن البحث...","SearchTitle":"بحث","Disabled Next":"&gt;&gt;","JS_alert_InitDatabaseFailed":"خطأ: فشل في تهيئة قاعدة البيانات.","Cancel":"إلغاء","UnknownError":"خطأ غير معروف","ResultsFoundText":"%1 نتيجة (نتائج) تم العثور عليها لـ %2","Index":"فهرس","Seperate":"|","SearchPageTitle":"نتائج البحث","TopicsNotFound":"لم يتم العثور على موضوعات","Glossary":"المفردات","Filter":"عامل التصفية","NextLabel":"التالي","TableOfContents":"جدول المحتويات","HideAll":"إخفاء الكل","Disabled Prev":"&lt;&lt;","SearchOptions":"خيارات البحث","Back":"الخلف","Prev":"&lt;&lt;","OpenLinkInNewTab":"فتح في علامة تبويب جديدة","JS_alert_InvalidExpression_1":"الكلمات التي كتبتها ليست تعبيراً صالحاً.","IndexFilterKewords":"تصفية الكلمات الأساسية","IeCompatibilityErrorMsg":"لا يمكن مشاهدة هذه الصفحة في Internet Explorer 8 أو أية نسخ أقدم.","NavTip":"قائمة","ToTopTip":"الذهاب إلى البداية"});
})();