/* English for the site (2026-11-25, user: «زر فوق إنجليزي عربي بركي الشخص كان أجنبي»).
   Keys = the Arabic text exactly as the page shows it (text nodes trimmed, alt / aria-label / title); index.html swaps them when EN is on.
   Strings built in the page script (links, marquee, WhatsApp text, download sheet, title) are in SITE_EN_P below.
   Refresh the list after editing the Arabic copy: node test/site-i18n/collect.mjs http://localhost:8767/ test/site-i18n/strings.json */
window.SITE_EN = {
  // nav
  'المميزات': 'Features', 'اللوكات': 'Looks', 'كيف بتشتغل': 'How it works', 'السعر': 'Pricing', 'أسئلة': 'FAQ', 'واتساب': 'WhatsApp',
  'الحركات': 'Motions', 'مكتبتي': 'My library',
  // Retouch Beauty hero
  'إضافة لـ Adobe Premiere Pro': 'A plugin for Adobe Premiere Pro',
  'تنعيم بشرة، شيل حبوب وهالات، نحت وجه، ومكياج بلوكات جاهزة… على كل وجه بالفيديو، حتى لو كان جانبي. بكبسة وحدة، مباشرة على التايملاين، بلا تصدير ولا انتظار.':
    'Skin smoothing, blemish and dark-circle removal, face sculpting and ready-made makeup looks… on every face in your video, even in profile. One click, right on the timeline, no exporting, no waiting.',
  '✨ اشتري الآن': '✨ Buy now', 'تنزيل للويندوز': 'Download for Windows',
  'كلو على جهازك، بدون نت': 'All on your PC, offline', 'على كرت الشاشة': 'Runs on your GPU', 'تحديثات مجانية': 'Free updates',
  'يلقط الوجه بأي اتجاه': 'Finds faces at any angle', 'بشرة ناعمة طبيعية': 'Smooth, natural skin', 'لوك مكياج جاهز': 'ready makeup looks',
  'تعديل للبشرة والوجه والعيون': 'skin, face and eye controls', 'كبسة لكل الوجوه بالكادر': 'click for every face in frame',
  'تنعيم البشرة': 'Skin smoothing', 'شيل الحبوب': 'Blemish removal', 'الهالات': 'Dark circles', 'وجه V': 'V-shape face', 'تكبير العيون': 'Bigger eyes',
  'أحمر شفايف': 'Lipstick', 'كونتور': 'Contour', '13 لوك': '13 looks', 'كل الوجوه': 'Every face',
  // RB features
  'كل شي بمكان واحد': 'Everything in one place', 'تحكّم كامل بكل تفصيلة، وكل تعديل بيبيّن فوراً على المعاينة.': 'Full control over every detail, and every change shows instantly in the preview.',
  'بشرة نضيفة': 'Clean skin', 'تنعيم بيحافظ على ملمس البشرة الطبيعي، شيل الحبوب والبقع، التجاعيد، خطوط الضحكة، وتوحيد اللون.': 'Smoothing that keeps natural skin texture, removes blemishes, spots, wrinkles and smile lines, and evens out the tone.',
  'شكل الوجه': 'Face shape', 'تصغير وتنحيف، وجه V، الفك وعظام الخد، الدقن والجبهة، وشد الوجه، كلو بسلايدرات بسيطة.': 'Slimming, V-shape, jaw and cheekbones, chin and forehead, and face lift, all with simple sliders.',
  'العيون والحواجب': 'Eyes and brows', 'تكبير وتفتيح العيون، شيل الهالات والانتفاخ، رفع وتعبئة الحواجب، وعدسات ملوّنة.': 'Bigger, brighter eyes, no dark circles or puffiness, lifted and fuller brows, and coloured lenses.',
  'مكياج كامل': 'Full makeup', 'أحمر شفايف، بلاشر، آيلاينر ورموش، ظلال، كونتور وهايلايتر، و13 لوك جاهز بكبسة.': 'Lipstick, blush, eyeliner and lashes, eyeshadow, contour and highlighter, plus 13 one-click looks.',
  'كل الوجوه سوا': 'Every face at once', 'بيلقط كل الوجوه بالكادر ويتبعها حتى لو الوجه جانبي أو بيتحرك، بلا ما تعمل ماسك ولا تراكينغ.': 'Finds every face in the frame and follows it, even in profile or moving, with no masks and no tracking.',
  'لايف على التايملاين': 'Live on the timeline', 'إفكت حقيقي ببريمير: بيشتغل على كرت الشاشة، بيبيّن فوراً، وبيطلع بالتصدير متل ما شفته.': 'A real Premiere effect: it runs on your GPU, shows instantly, and exports exactly as you saw it.',
  // before / after
  'شوف الفرق': 'See the difference', 'صور حقيقية مرّت على Retouch Beauty جوّا بريمير: تنعيم، شيل حبوب، تفتيح عيون، نحت خفيف ومكياج ناعم، بلا أي فوتوشوب. اسحب الخط لتقارن.':
    'Real photos run through Retouch Beauty inside Premiere: smoothing, blemish removal, brighter eyes, light sculpting and soft makeup, no Photoshop at all. Drag the line to compare.',
  'قبل': 'Before', 'بعد': 'After', 'بشرة + مكياج': 'Skin + makeup', 'حبوب، عيون، خدود': 'blemishes, eyes, cheeks', 'وجه ملتفت': 'Turned face', 'بيلقطه بأي زاوية': 'caught at any angle',
  'وجه جانبي': 'Side face', 'حتى البروفايل': 'even in profile', 'الصور من': 'Photos from',
  // looks
  'مكياج بكبسة': 'Makeup in one click', 'اختار اللوك وعدّل قوته من سلايدر واحد، أو ركّب لوكك من الصفر.': 'Pick a look and set its strength with one slider, or build your own from scratch.',
  'كلين قيرل': 'Clean girl', 'كوكيت': 'Coquette', 'دمية': 'Doll', 'ملاك': 'Angel', 'طبيعي': 'Natural', 'وردي': 'Sugar plum', 'دافي': 'Hot girl', 'رومانسي': 'Romance',
  'سموكي': 'Smoky', 'منعش': 'Fresh', 'آيدول': 'Idol', 'لاتيه': 'Latte', 'للشباب': 'Boyfriend',
  // how (RB)
  'سهلة كتير': 'Really easy', 'نزّل وثبّت': 'Download and install', 'نزّل ملف التثبيت وشغّله. بيركّب الإضافة ببريمير لحالو.': 'Download the installer and run it. It adds the plugin to Premiere by itself.',
  'ابعتلنا رقم جهازك': 'Send us your device ID', 'افتح Window ← Extensions ← Retouch Beauty، انسخ رقم الجهاز وابعتلنا ياه على واتساب.': 'Open Window → Extensions → Retouch Beauty, copy the device ID and send it to us on WhatsApp.',
  'فعّل بالمفتاح': 'Activate with your key', 'بعد الدفع بيوصلك مفتاح التفعيل. الصقه باللوحة واكبس تفعيل.': 'After payment you get an activation key. Paste it in the panel and click Activate.',
  'حدد الكليب واكبس': 'Select the clip and click', 'حدد الفيديو بالتايملاين واكبس «تطبيق الريتاتش». خلص!': 'Select the video on the timeline and click "Apply retouch". Done!',
  'لو طلعتلك رسالة أمان وقت التثبيت': 'If a security message shows up while installing',
  'ويندوز بيطلّع هالرسالة لأي برنامج جديد، عادي. إذا طلعت «Windows protected your PC» اكبس': 'Windows shows this for any new app, that\'s normal. If you see "Windows protected your PC", click',
  'وبعدين': 'then', 'سكّر بريمير قبل التثبيت، وبعده افتحه ورح لـ': 'Close Premiere before installing, then open it and go to',
  // price (both)
  'عرض الإطلاق، لفترة محدودة': 'Launch offer, for a limited time', 'دفعة وحدة، بلا اشتراك شهري': 'One payment, no monthly subscription',
  'كل الأدوات: بشرة، شكل وجه، عيون، مكياج': 'Every tool: skin, face shape, eyes, makeup', '13 لوك مكياج جاهز': '13 ready makeup looks',
  'كل التحديثات الجاية مجاناً': 'All future updates free', 'دعم مباشر على واتساب': 'Direct support on WhatsApp', 'المفتاح لجهاز واحد': 'One key per computer',
  'اشتري على واتساب': 'Buy on WhatsApp', 'ويندوز 10 و 11': 'Windows 10 and 11', 'Premiere Pro 2022 وأحدث': 'Premiere Pro 2022 or newer', 'متوفر': 'Available',
  'ماك': 'Mac', 'قريباً، تابعنا ليوصلك خبر': 'Coming soon, follow us to hear first', 'قريباً': 'Soon', 'كرت الشاشة': 'Graphics card',
  'أسرع شي على كروت NVIDIA، وبيشتغل على باقي الكروت كمان': 'Fastest on NVIDIA cards, and works on other cards too',
  // FAQ (RB)
  'عندك سؤال؟': 'Got a question?', 'بتشتغل على بريمير تبعي؟': 'Does it work with my Premiere?',
  'إذا عندك Adobe Premiere Pro 2022 أو أحدث على ويندوز 10 أو 11، إي. نسخة الماك قريباً.': 'Yes, if you have Adobe Premiere Pro 2022 or newer on Windows 10 or 11. The Mac version is coming soon.',
  'بدها نت لتشتغل؟': 'Does it need internet?', 'لا. كل الشغل بيصير على جهازك، وما في ولا صورة من الفيديو بتطلع لبرّا. النت بس للتحديثات.': 'No. Everything runs on your computer, and not a single frame of your video leaves it. Internet is only for updates.',
  'بتبطّئ البريمير؟': 'Will it slow Premiere down?', 'الإفكت بيشتغل على كرت الشاشة، وأسرع شي على كروت NVIDIA. على الأجهزة الضعيفة فيك تخفف جودة المعاينة متل أي إفكت تاني.': 'The effect runs on your GPU and is fastest on NVIDIA cards. On slower computers you can lower the preview quality like with any other effect.',
  'بيطلع الريتاتش بالتصدير؟': 'Does the retouch show up in the export?', 'إي، هو إفكت حقيقي على الكليب، فبيطلع بالتصدير متل ما شفته بالمعاينة بالضبط.': 'Yes, it\'s a real effect on the clip, so the export looks exactly like the preview.',
  'فيني ركّبها على أكتر من جهاز؟': 'Can I install it on more than one computer?', 'كل مفتاح بيشتغل على جهاز واحد. إذا غيّرت جهازك أو بدك جهاز تاني، راسلنا على واتساب.': 'Each key works on one computer. If you change computers or need another one, message us on WhatsApp.',
  'إذا صارت معي مشكلة؟': 'What if something goes wrong?', 'جوّا اللوحة في زر «💬 بلّغ عن مشكلة». بيبعتلنا شو صار معك على واتساب، ومنصلحها بسرعة.': 'The panel has a "💬 Report a problem" button. It sends us what happened on WhatsApp, and we fix it fast.',
  'ريتاتش احترافي لكل وجه، بكبسة وحدة، جوّا بريمير.': 'Pro retouching for every face, in one click, inside Premiere.', 'اشتري الآن': 'Buy now',
  // Swift Motion hero
  'إضافة لـ Adobe After Effects': 'A plugin for Adobe After Effects',
  'نصوص متحركة، زجاج ولوحات متوهّجة، كروت، انتقالات بلا قطع وحركات ساس… اختار الحركة، اكبس، وكل شي بيتعدّل لايف من اللوحة: الألوان، السرعة، الحجم والنص.':
    'Animated text, glass and glowing panels, cards, seamless transitions and SaaS motion… pick a motion, click, and edit everything live from the panel: colours, speed, size and text.',
  'بدي التفاصيل': 'Get the details', 'كبسة وحدة': 'One click', 'عربي وإنجليزي': 'Arabic and English', 'حركة وإفكت جاهز': 'ready motions and effects',
  'أقسام: نصوص، زجاج، انتقالات…': 'sections: text, glass, transitions…', 'كبسة، وبعدها كلو لايف': 'click, then everything is live',
  // gallery
  'مرّر الماوس فوق أي وحدة': 'Hover over any of them', 'كل هالحركات طالعة من البلجن نفسه، على نصّك وألوانك.': 'Every one of these comes straight from the plugin, on your own text and colours.',
  'الكل': 'All', 'نصوص': 'Text', 'زجاج': 'Glass', 'انتقالات': 'Transitions', 'أشكال وكروت': 'Shapes & cards',
  '💎 عرض منتجات': '💎 Product showcase', '🌫 نص ضبابي': '🌫 Fog text', '🪩 نص كروم': '🪩 Chrome text', '🔆 لوحة متوهّجة': '🔆 Glow panel', '🪐 دويرة': '🪐 Orbit',
  '◫ صندوقين': '◫ Two boxes', '◩ صندوقين مائل': '◩ Two skewed boxes', '🎙 كرتين: مقدّم وضيف': '🎙 Two cards: host and guest', '🔲 صندوق زجاجي ضبابي': '🔲 Frosted glass box',
  '🌐 كرت موقع زجاجي': '🌐 Glass website card', '🔥 نص متوهّج': '🔥 Glowing text', '🎀 نص شريط': '🎀 Ribbon text', '🟤 حبوب بتنط': '🟤 Bouncing pills', '🌡 نص حراري': '🌡 Heatmap text',
  '🔘 نقاط زجاج': '🔘 Glass dots', '🪟 شاشة عايمة': '🪟 Floating screen', '🧊 مجسّم 3D': '🧊 3D object', '🪪 كرت متوهّج': '🪪 Glow card', '🪩 كروم ذهبي': '🪩 Gold chrome',
  '🔥 توهّج ناعم': '🔥 Soft glow', '🔮 نص غلاس': '🔮 Glass text', '🏝 نص جزيرة': '🏝 Island text', '🌫 نص انسيابي': '🌫 Liquid text', '〰 نص على مسار': '〰 Text on a path',
  '✨ حركة انسيابية': '✨ Smooth motion', '📱 تحديد آيفون': '📱 iPhone select', '💬 صندوق نص جديد': '💬 New text box', '📥 إشعار': '📥 Notification', '🎟 شريط تعريف': '🎟 Name bar',
  '➖ شريط بخط': '➖ Line bar', '💬 بطاقة رسالة': '💬 Message card', '🟩 هوك بادج': '🟩 Hook badge', '🟧 كشف بكسل': '🟧 Pixel reveal', '🌀 تدرّج ملتف': '🌀 Twirl gradient',
  // SM features
  'لوحة وحدة جوّا أفتر إفكتس، كل نوع بقسمه، وكل حركة بمربّع بيورجيك ياها قبل ما تكبس.': 'One panel inside After Effects, every kind in its own section, and every motion in a tile that shows it before you click.',
  'نصوص متحركة': 'Animated text', 'ضبابي، متوهّج، كروم، زجاج، ساس، جزيرة وتحديد آيفون… على نصّك انت، عربي أو إنجليزي.': 'Fog, glow, chrome, glass, SaaS, island and iPhone select… on your own text, Arabic or English.',
  'زجاج ولوحات': 'Glass and panels', 'صناديق زجاجية، كروت مواقع، نقاط زجاج ولوحات متوهّجة، وحوّل أي شيب لزجاج بكبسة.': 'Glass boxes, website cards, glass dots and glowing panels, and turn any shape into glass in one click.',
  'انتقالات بلا قطع': 'Seamless transitions', 'عنصر بيتحرك هو اللي بيقطع: صندوقين، شاشة عايمة، كرتين مقدّم وضيف، فيديو بكرت.': 'A moving element does the cut: two boxes, floating screen, host and guest cards, video in a card.',
  'أشكال وتدرّجات': 'Shapes and gradients', 'كرت متوهّج، نص حراري، تدرّج ملتف، دويرة، حبوب بتنط وكشف بكسل.': 'Glow card, heatmap text, twirl gradient, orbit, bouncing pills and pixel reveal.',
  'تعديل لايف': 'Live editing', 'كل سلايدر بيعدّل الطبقات نفسها بأفتر إفكتس، بلا ما يمسح ويعيد البناء، والنتيجة طبقة وحدة مرتّبة.': 'Every slider edits the actual layers in After Effects without deleting and rebuilding, and the result is one tidy layer.',
  'أدوات بتوفّر وقت': 'Time-saving tools', 'نسخ ولصق الإفكتات والحركة بين الطبقات، سنتر بكبسة، وكل نصوص الكومب بمكان واحد.': 'Copy and paste effects and motion between layers, one-click centring, and every text of the comp in one place.',
  // my library
  'جديد · مكتبتي': 'New · My library',
  'أي شغل عملته وعجبك، احفظه كقالب بمكتبتك، رتّبه بفولدر لكل عميل أو مشروع، ورجّعه لأي بروجكت جديد بكبسة.': 'Save any work you like as a template in your library, keep a folder for each client or project, and bring it back into any new project in one click.',
  'احفظ الكومب كقالب': 'Save the comp as a template', 'افتح الكومب واكبس الزر الأخضر، اختار اسم وفولدر. حددت طبقات منه؟ بينحفظوا لحالهم كقالب.': 'Open the comp, click the green button, pick a name and a folder. Selected some layers? Only they are saved as the template.',
  'رتّبها بفولدرات': 'Organise in folders', 'فولدر لكل عميل أو مشروع، مع صور القوالب جوّاه. نجمة للمفضلة، وبحث بكل قوالبك.': 'A folder for each client or project, with template previews inside. Star your favourites and search all your templates.',
  'كبسة وبيرجع للتايملاين': 'One click back to the timeline', 'كبسة على القالب بتحطه بالكومب المفتوح عند مؤشر الوقت، بكل طبقاته وملفاته.': 'Click a template to drop it into the open comp at the playhead, with all its layers and files.',
  'الكومب وكل اللي جوّاه بس': 'Just the comp and what\'s inside it', 'صورة لكل قالب تلقائياً': 'A preview for every template, automatically', 'مكتبتك على جهازك، بأي فولدر بتختاره': 'Your library on your PC, in any folder you choose',
  // how (SM)
  'نزّل ملف التثبيت وشغّله، بيركّب البلجن بأفتر إفكتس لحالو.': 'Download the installer and run it, it adds the plugin to After Effects by itself.',
  'افتح Window ← Extensions ← Swift Motion، انسخ رقم الجهاز وابعتلنا ياه على واتساب.': 'Open Window → Extensions → Swift Motion, copy the device ID and send it to us on WhatsApp.',
  'بيوصلك مفتاح التفعيل، الصقه باللوحة واكبس «فعّل».': 'You get an activation key: paste it in the panel and click "Activate".',
  'اختار واكبس': 'Pick and click', 'حدد النص أو الطبقة، اختار الحركة واكبس. عدّل من اللوحة على راحتك.': 'Select the text or layer, pick a motion and click. Then tweak it from the panel as you like.',
  'أكتر من 35 حركة وإفكت بـ 7 أقسام': 'Over 35 motions and effects in 7 sections', 'كل حركة بتتعدّل لايف من اللوحة': 'Every motion is editable live from the panel',
  'الحركات والتحديثات الجاية مجاناً': 'Future motions and updates free', 'After Effects 2024 وأحدث': 'After Effects 2024 or newer',
  'وقت التثبيت': 'while installing', 'إذا طلعت «Windows protected your PC» اكبس': 'If you see "Windows protected your PC", click',
  'سكّر أفتر إفكتس قبل التثبيت، وبعده افتحه ورح لـ': 'Close After Effects before installing, then open it and go to',
  // FAQ (SM)
  'بيشتغل على أفتر إفكتس تبعي؟': 'Does it work with my After Effects?', 'إذا عندك After Effects 2024 أو أحدث على ويندوز 10 أو 11، إي.': 'Yes, if you have After Effects 2024 or newer on Windows 10 or 11.',
  'بعد ما اكبس، فيني عدّل؟': 'Can I edit after I click?', 'إي، كل شي بيضل لايف: الألوان والسرعة والحجم والنص بيتعدّلوا من اللوحة على نفس الطبقات، بلا ما تعيد البناء.': 'Yes, everything stays live: colours, speed, size and text are edited from the panel on the same layers, with no rebuilding.',
  'بيدعم العربي؟': 'Does it support Arabic?', 'إي، النصوص العربية من اليمين لليسار، والإنجليزي كمان.': 'Yes, Arabic text right-to-left, and English too.',
  'فيني ركّبه على أكتر من جهاز؟': 'Can I install it on more than one computer?', 'في تحديثات؟': 'Are there updates?',
  'إي، وكلها مجانية. لما تنزل نسخة جديدة بيطلعلك إشعار جوّا اللوحة وبتنزّلها بكبسة.': 'Yes, and they\'re all free. When a new version is out you get a notice in the panel and install it in one click.',
  'راسلنا وبيوصلك كل تفاصيل Swift Motion.': 'Message us and we\'ll send you all the details of Swift Motion.',
  // footer + download sheet
  'الأدوات': 'Tools', 'موشن احترافي بكبسة · After Effects': 'Pro motion in one click · After Effects', 'ريتاتش ومكياج لكل الوجوه · Premiere Pro': 'Retouch and makeup for every face · Premiere Pro',
  '· Adobe و Premiere Pro و After Effects علامات تجارية لـ Adobe': '· Adobe, Premiere Pro and After Effects are trademarks of Adobe',
  'التنزيل بلّش ✓': 'Download started ✓', 'بيطلع الملف بمجلد التنزيلات (Downloads).': 'The file goes to your Downloads folder.',
  'إذا كروم قال إن الملف': 'If Chrome says the file is', 'مو منتشر': 'not commonly downloaded', ': افتح التنزيلات (Ctrl+J) واكبس': ': open Downloads (Ctrl+J) and click',
  'Keep / الاحتفاظ': 'Keep', 'إذا ويندوز قال': 'If Windows says', ': اكبس': ': click', 'سكّر البرنامج (بريمير أو أفتر) قبل التثبيت.': 'Close the app (Premiere or After Effects) before installing.',
  'ما بلّش؟ نزّله من هون': 'Didn\'t start? Download it here', 'تمام': 'OK',
  // image alts
  'ريتاتش متل كاب كات جوّا بريمير، لكل الوجوه': 'Retouch like CapCut inside Premiere, for every face', 'لوحة Retouch Beauty جوّا بريمير برو': 'The Retouch Beauty panel inside Premiere Pro',
  'كل اللي بتعملو بكاب كات… صار ببريمير': 'Everything you do in CapCut… now in Premiere', 'قبل وبعد، بكبسة وحدة': 'Before and after, one click',
  'بعد الريتاتش': 'After the retouch', 'قبل الريتاتش': 'Before the retouch', '13 لوك جاهز': '13 ready looks', 'من الشراء للريتاتش بدقايق': 'From purchase to retouch in minutes',
  'أسئلة متكررة': 'Frequently asked questions', 'جاهز تخلّي شغلك يلمع؟': 'Ready to make your work shine?', 'موشن احترافي بكبسة جوّا أفتر إفكتس': 'Pro motion in one click inside After Effects',
  'شوف شو بيعمل': 'See what it does', 'كل الحركات بمكان واحد': 'Every motion in one place', 'مكتبتك الخاصة، بكبسة': 'Your own library, one click',
  'نافذة حفظ الكومب كقالب: الاسم والفولدر': 'Save comp as template: name and folder', 'مكتبتي: فولدرات لكل عميل ومشروع': 'My library: a folder per client and project',
  'قوالب الفولدر، كبسة وحدة بتحطه بالتايملاين': 'A folder\'s templates, one click puts it on the timeline', 'من التثبيت للحركة بدقايق': 'From install to motion in minutes',
  'جاهز تحرّك شغلك؟': 'Ready to move your work?', 'أدوات للمبدعين': 'Tools for creators',
  'لوك كلين قيرل': 'Clean girl look', 'لوك كوكيت': 'Coquette look', 'لوك دمية': 'Doll look', 'لوك ملاك': 'Angel look', 'لوك طبيعي': 'Natural look', 'لوك وردي': 'Sugar plum look',
  'لوك دافي': 'Hot girl look', 'لوك رومانسي': 'Romance look', 'لوك سموكي': 'Smoky look', 'لوك منعش': 'Fresh look', 'لوك آيدول': 'Idol look', 'لوك لاتيه': 'Latte look', 'لوك للشباب': 'Boyfriend look'
};
// strings the page script builds (index.html P / download sheet / price tag)
window.SITE_EN_P = {
  rb: { msg: 'Hi, I\'d like to buy Retouch Beauty ✨', title: 'Retouch Beauty — retouch and makeup for every face in Premiere',
        marq: ['Skin smoothing', 'Blemish removal', 'Dark circles', 'V-shape face', 'Bigger eyes', 'Lipstick', 'Contour', '13 looks', 'Every face'] },
  sm: { msg: 'Hi, I\'d like the details of Swift Motion 🎬', title: 'Swift Motion — pro motion in one click inside After Effects',
        marq: ['Animated text', 'Your own library', 'Glass', 'Glowing panels', 'Seamless transitions', 'SaaS motion', 'Glow card', 'Heatmap text', 'iPhone select', 'Live editing'] },
  downloading: ' is downloading now to your Downloads folder.',
  offer: '<i></i> Launch offer, for a limited time'
};
