import React, { useState } from 'react';
import {
  Download,
  DollarSign,
  Brain,
  Bell,
  Ban as Bank,
  ChevronDown,
  Moon,
  Sun,
  Instagram,
  Twitter,
  Facebook,
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 transition-colors duration-200">
        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://raw.githubusercontent.com/plcoding/stoks/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
                alt="Stoks Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-blue-900 dark:text-gold">Stoks</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-gold" />
              ) : (
                <Moon className="w-6 h-6 text-blue-900" />
              )}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right order-2 md:order-1">
              <h1 className="text-5xl font-bold text-blue-900 dark:text-white mb-6">
                Stoks - مستشارك المالي الذكي
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                تابع أسعار الذهب والدولار، واحصل على تحليل ذكي للأخبار المالية، في مكان واحد!
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.plcoding.stoks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 dark:bg-gold text-white dark:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 dark:hover:bg-gold/90 transition-colors duration-200"
              >
                حمّل التطبيق الآن
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://raw.githubusercontent.com/plcoding/stoks/main/screenshots/screenshot_1.png"
                alt="Stoks App Screenshot"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<DollarSign className="w-12 h-12" />}
                title="تحديثات فورية"
                description="متابعة لحظية لأسعار الذهب والدولار"
              />
              <FeatureCard
                icon={<Brain className="w-12 h-12" />}
                title="تحليل ذكي"
                description="استخدم الذكاء الاصطناعي لفهم الأسواق المالية"
              />
              <FeatureCard
                icon={<Bell className="w-12 h-12" />}
                title="تنبيهات مخصصة"
                description="احصل على إشعارات بالتغيرات المهمة"
              />
              <FeatureCard
                icon={<Bank className="w-12 h-12" />}
                title="المنتجات البنكية"
                description="خدمات مالية لمساعدتك في إدارة استثماراتك (قريباً)"
              />
            </div>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-white mb-16">
              تجربة مستخدم مميزة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <img
                src="https://raw.githubusercontent.com/plcoding/stoks/main/screenshots/screenshot_2.png"
                alt="Stoks AI Chat"
                className="w-full rounded-2xl shadow-xl"
              />
              <img
                src="https://raw.githubusercontent.com/plcoding/stoks/main/screenshots/screenshot_3.png"
                alt="Stoks Market View"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-white mb-16">
              كيف يعمل التطبيق؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                number="1"
                title="حمّل التطبيق"
                description="قم بتحميل التطبيق من متجر التطبيقات"
              />
              <StepCard
                number="2"
                title="أنشئ حسابك"
                description="سجّل حساباً جديداً في دقيقة واحدة"
              />
              <StepCard
                number="3"
                title="ابدأ المتابعة"
                description="تابع الأسواق واحصل على التحليلات الذكية"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-white mb-16">
              الأسئلة الشائعة
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem
                question="كيف يتم تحديث الأسعار؟"
                answer="يتم تحديث الأسعار بشكل فوري من مصادر موثوقة ومتعددة لضمان الدقة"
              />
              <FAQItem
                question="هل التطبيق مجاني؟"
                answer="نعم، التطبيق مجاني للتحميل والاستخدام الأساسي"
              />
              <FAQItem
                question="كيف يعمل التحليل الذكي؟"
                answer="نستخدم تقنيات الذكاء الاصطناعي المتقدمة لتحليل البيانات والأخبار المالية"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 dark:bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="https://raw.githubusercontent.com/plcoding/stoks/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
                    alt="Stoks Logo"
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl font-bold">Stoks</h3>
                </div>
                <p className="text-gray-300">مستشارك المالي الذكي</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      الرئيسية
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      المميزات
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      الأسئلة الشائعة
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">حمّل التطبيق</h3>
                <div className="space-y-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plcoding.stoks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white text-blue-900 px-6 py-2 rounded-lg w-full text-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">© 2025 Stoks. جميع الحقوق محفوظة</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-right">
      <div className="text-blue-900 dark:text-gold mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-900 dark:bg-gold text-white dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full text-right py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronDown
          className={`w-6 h-6 text-blue-900 dark:text-gold transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <span className="text-lg font-semibold text-blue-900 dark:text-white">{question}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-right">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;