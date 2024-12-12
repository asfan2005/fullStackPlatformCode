import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CssPositionContent() {
  const [htmlCode1, setHtmlCode1] = useState(
    `<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="target-box">Target Box</div>
</div>`
  );

  const [cssCode1, setCssCode1] = useState(
    `.container {
  position: relative;
  height: 200px;
  border: 2px solid #ccc;
  padding: 20px;
}
.box {
  background: #4ade80;
  padding: 10px;
  margin: 10px;
  width: 100px;
}
.target-box {
  /* Your code here */
  background: #f87171;
  padding: 10px;
  width: 100px;
}`
  );

  const [htmlCode2, setHtmlCode2] = useState(
    `<div class="navbar">
  <div class="logo">Logo</div>
  <div class="menu">Menu</div>
  <div class="search">Search</div>
</div>
<div class="content">
  Main Content
</div>`
  );

  const [cssCode2, setCssCode2] = useState(
    `.navbar {
  /* Your code here */
  background: #60a5fa;
  padding: 15px;
  width: 100%;
}
.logo {
  display: inline-block;
  margin-right: 20px;
}
.menu {
  display: inline-block;
  margin-right: 20px;
}
.search {
  display: inline-block;
}
.content {
  padding: 20px;
  height: 400px;
  background: #f3f4f6;
}`
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">CSS Position Xususiyatlari</h1>

      {/* Static Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Static Position</h2>
        <div className="border-2 border-gray-300 p-4 relative h-40 mb-4">
          <div className="bg-blue-200 p-4 w-32 text-center">Static Element</div>
        </div>
        <p className="mt-2 mb-4 text-gray-600">
          Bu oddiy position: static elementi. U normal oqimda joylashadi.
        </p>

        {/* Kod namunasi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">HTML:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`<div class="static-element">
  Static Position
</div>`}</code>
            </pre>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">CSS:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`.static-element {
  position: static;
  /* Bu default qiymat */
  background: #bfdbfe;
  padding: 1rem;
  width: 8rem;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Relative Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Relative Position</h2>
        <div className="border-2 border-gray-300 p-4 relative h-40 mb-4">
          <div className="bg-green-200 p-4 w-32 text-center">Normal Element</div>
          <div className="bg-green-400 p-4 w-32 text-center relative left-40 top-8">
            Relative Element
          </div>
        </div>
        <p className="mt-2 mb-4 text-gray-600">
          Relative element o'zining normal pozitsiyasidan 40px chapga va 8px pastga siljitilgan.
        </p>

        {/* Kod namunasi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">HTML:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`<div class="container">
  <div class="normal-element">Normal</div>
  <div class="relative-element">Relative</div>
</div>`}</code>
            </pre>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">CSS:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`.relative-element {
  position: relative;
  left: 40px;
  top: 8px;
  background: #86efac;
  padding: 1rem;
  width: 8rem;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Absolute Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Absolute Position</h2>
        <div className="border-2 border-gray-300 p-4 relative h-40 mb-4">
          <div className="bg-red-200 p-4 w-32 text-center absolute top-0 right-0">
            Absolute Element
          </div>
          <div className="bg-red-100 p-4 w-32 text-center">Normal Element</div>
        </div>
        <p className="mt-2 mb-4 text-gray-600">
          Absolute element ota elementiga nisbatan yuqori o'ng burchakka joylashtirilgan.
        </p>

        {/* Kod namunasi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">HTML:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`<div class="container">
  <div class="absolute-element">Absolute</div>
  <div class="normal-element">Normal</div>
</div>`}</code>
            </pre>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">CSS:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`.container {
  position: relative;
}
.absolute-element {
  position: absolute;
  top: 0;
  right: 0;
  background: #fecaca;
  padding: 1rem;
  width: 8rem;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Fixed Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 break-words">4. Fixed Position</h2>
        <div className="border-2 border-gray-300 p-4 relative h-40 mb-4">
          <div className="bg-purple-200 p-4 text-center fixed bottom-8 right-8 shadow-lg rounded-md z-50 hover:bg-purple-300 transition-colors duration-300 max-w-[200px] sm:max-w-[150px] break-words">
            Fixed Element
          </div>
        </div>
        <p className="mt-2 mb-4 text-gray-600 break-words">
          Fixed element oyna bo'ylab harakatlanganda ham o'z joyida qoladi.
        </p>

        {/* Kod namunasi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <p className="text-gray-400 text-sm mb-2">HTML:</p>
            <pre className="text-gray-200 text-sm whitespace-pre-wrap break-words">
              <code>{`<div class="fixed-element">
  Fixed Element
</div>`}</code>
            </pre>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
            <p className="text-gray-400 text-sm mb-2">CSS:</p>
            <pre className="text-gray-200 text-sm whitespace-pre-wrap break-words">
              <code>{`.fixed-element {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #e9d5ff;
  padding: 1rem;
  max-width: 200px;
  width: 100%;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  z-index: 50;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.fixed-element:hover {
  background: #d8b4fe;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px -1px rgb(0 0 0 / 0.15);
}

/* Mobil moslashtirish */
@media (max-width: 1024px) {
  .fixed-element {
    max-width: 150px;
    padding: 0.875rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 768px) {
  .fixed-element {
    max-width: 120px;
    padding: 0.75rem;
    font-size: 0.815rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}

@media (max-width: 640px) {
  .fixed-element {
    max-width: 100px;
    padding: 0.625rem;
    font-size: 0.75rem;
    bottom: 1rem;
    right: 1rem;
  }
}

/* Juda kichik ekranlar uchun */
@media (max-width: 375px) {
  .fixed-element {
    max-width: 90px;
    padding: 0.5rem;
    font-size: 0.7rem;
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Sticky Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Sticky Position</h2>
        <div className="border-2 border-gray-300 p-4 h-80 overflow-auto mb-4">
          <div className="bg-yellow-200 p-4 sticky top-0 mb-4">Sticky Header</div>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-gray-100 p-4 mb-4">
              Content Block {item}
            </div>
          ))}
        </div>
        <p className="mt-2 mb-4 text-gray-600">
          Sticky element scroll qilinganda ham ko'rinib turadi, lekin o'z konteyneridan tashqariga chiqmaydi.
        </p>

        {/* Kod namunasi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">HTML:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`<div class="container">
  <div class="sticky-header">
    Sticky Header
  </div>
  <div class="content">
    <!-- Content blocks -->
  </div>
</div>`}</code>
            </pre>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">CSS:</p>
            <pre className="text-gray-200 text-sm">
              <code>{`.container {
  height: 20rem;
  overflow: auto;
}
.sticky-header {
  position: sticky;
  top: 0;
  background: #fef08a;
  padding: 1rem;
  margin-bottom: 1rem;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Position Properties */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Position Xossalari</h2>
        <div className="border-2 border-gray-300 p-4 relative h-60">
          <div className="bg-pink-200 p-4 w-32 text-center absolute top-0 left-0">
            Top Left
          </div>
          <div className="bg-pink-200 p-4 w-32 text-center absolute top-0 right-0">
            Top Right
          </div>
          <div className="bg-pink-200 p-4 w-32 text-center absolute bottom-0 left-0">
            Bottom Left
          </div>
          <div className="bg-pink-200 p-4 w-32 text-center absolute bottom-0 right-0">
            Bottom Right
          </div>
        </div>
        <p className="mt-2 text-gray-600 space-y-2 my-4">
          <span className="block font-semibold text-indigo-600">
            🎯 Position xossalari - web dizaynning sehrli kalitlari!
          </span>
          <span className="block">
            ⚡️ <span className="font-medium text-indigo-500">top</span> -
            elementni yuqoridan pastga,
            <span className="font-medium text-indigo-500"> right</span> -
            o'ngdan chapga,
            <span className="font-medium text-indigo-500"> bottom</span> -
            pastdan yuqoriga,
            <span className="font-medium text-indigo-500"> left</span> - chapdan
            o'ngga siljitish imkonini beradi.
          </span>
          <span className="block italic">
            💡 Bu xossalar yordamida elementlarni xuddi LEGO konstruktoridek
            istagan joyingizga aniq joylashtirishingiz mumkin!
          </span>
          <span className="block text-sm bg-indigo-50 p-2 rounded-md mt-2">
            🔥 Pro maslahat: Bu xossalarni px, %, em, rem kabi o'lchov
            birliklarida ishlatish mumkin. Masalan:{" "}
            <code className="text-indigo-600">top: 50%</code> yoki
            <code className="text-indigo-600"> left: 20px</code>
          </span>
        </p>
      </section>

      {/* Code Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💻 Kod Namunalari</h2>
        
        {/* Static Position Code */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-indigo-600 mb-3">1. Static Position Kodi</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">HTML:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`<div class="static-element">
  Static Position
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">CSS:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`.static-element {
  position: static;
  /* Bu default qiymat */
  background: #bfdbfe;
  padding: 1rem;
  width: 8rem;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Relative Position Code */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-indigo-600 mb-3">2. Relative Position Kodi</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">HTML:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`<div class="container">
  <div class="normal-element">Normal</div>
  <div class="relative-element">Relative</div>
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">CSS:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`.relative-element {
  position: relative;
  left: 40px;
  top: 8px;
  background: #86efac;
  padding: 1rem;
  width: 8rem;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Absolute Position Code */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-indigo-600 mb-3">3. Absolute Position Kodi</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">HTML:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`<div class="container">
  <div class="absolute-element">Absolute</div>
  <div class="normal-element">Normal</div>
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">CSS:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`.container {
  position: relative;
}
.absolute-element {
  position: absolute;
  top: 0;
  right: 0;
  background: #fecaca;
  padding: 1rem;
  width: 8rem;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Fixed Position Code */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-indigo-600 mb-3">4. Fixed Position Kodi</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">HTML:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`<div class="fixed-element">
  Fixed Element
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">CSS:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`.fixed-element {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: #e9d5ff;
  padding: 1rem;
  width: 8rem;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Sticky Position Code */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-indigo-600 mb-3">5. Sticky Position Kodi</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">HTML:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`<div class="container">
  <div class="sticky-header">
    Sticky Header
  </div>
  <div class="content">
    <!-- Content blocks -->
  </div>
</div>`}</code>
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">CSS:</p>
              <pre className="text-gray-200 text-sm">
                <code>{`.container {
  height: 20rem;
  overflow: auto;
}
.sticky-header {
  position: sticky;
  top: 0;
  background: #fef08a;
  padding: 1rem;
  margin-bottom: 1rem;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">🚀 Pro Tips:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Position xossalarini ishlatishda parent elementlar muhim rol o'ynaydi</li>
            <li>Absolute elementlar uchun container relative bo'lishi kerak</li>
            <li>Fixed elementlar scroll qilinganda ham o'z joyida qoladi</li>
            <li>Sticky elementlar uchun container overflow: auto bo'lishi kerak</li>
          </ul>
        </div>
      </section>

      {/* Amaliy topshiriqlar section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎯 Amaliy Topshiriqlar</h2>

        {/* 1-topshiriq */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">1-topshiriq: Absolute Position</h3>
          <p className="text-gray-600 mb-4">
            Target Box'ni container'ning o'ng pastki burchagiga joylashtiring. 
            Buning uchun <code className="bg-gray-100 px-1 rounded">position: absolute</code> va 
            tegishli xossalardan foydalaning.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2">HTML:</p>
              <Editor
                height="200px"
                defaultLanguage="html"
                value={htmlCode1}
                onChange={setHtmlCode1}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2">CSS:</p>
              <Editor
                height="200px"
                defaultLanguage="css"
                value={cssCode1}
                onChange={setCssCode1}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          </div>

          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <p className="text-gray-600 mb-2">Natija:</p>
            <iframe
              srcDoc={`
                <style>${cssCode1}</style>
                ${htmlCode1}
              `}
              className="w-full h-64 border-0"
              title="Natija 1"
            />
          </div>
        </div>

        {/* 2-topshiriq */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">2-topshiriq: Fixed Navigation</h3>
          <p className="text-gray-600 mb-4">
            Navbar'ni sahifaning yuqori qismiga mahkamlang, shunda scroll qilinganda ham 
            ko'rinib tursin. Buning uchun <code className="bg-gray-100 px-1 rounded">position: fixed</code> 
            xossasidan foydalaning.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 mb-2">HTML:</p>
              <Editor
                height="200px"
                defaultLanguage="html"
                value={htmlCode2}
                onChange={setHtmlCode2}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-2">CSS:</p>
              <Editor
                height="200px"
                defaultLanguage="css"
                value={cssCode2}
                onChange={setCssCode2}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          </div>

          <div className="border-2 border-gray-300 p-4 rounded-lg">
            <p className="text-gray-600 mb-2">Natija:</p>
            <iframe
              srcDoc={`
                <style>${cssCode2}</style>
                ${htmlCode2}
              `}
              className="w-full h-64 border-0"
              title="Natija 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CssPositionContent;
