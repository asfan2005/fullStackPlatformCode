import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { FaStar, FaTrophy, FaHtml5, FaQuestionCircle } from "react-icons/fa";
import "./h.css";

function HtmlPractice() {
  const [currentTask, setCurrentTask] = useState(0);
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(() => {
    const savedBalls = localStorage.getItem("balls");
    return savedBalls ? parseFloat(savedBalls) : 0;
  });
  const [yutuqlar, setYutuqlar] = useState(() => {
    const savedYutuqlar = localStorage.getItem("yutuqlar");
    return savedYutuqlar ? parseInt(savedYutuqlar, 10) : 0;
  });
  const [showModal, setShowModal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasks");
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });
  const [usedHelp, setUsedHelp] = useState(false);

  const tasks = [
    {
      title: "Birinchi HTML sahifa",
      description:
        "Oddiy HTML sahifa yarating va 'Salom, dunyo!' matnini qo'shing",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Birinchi sahifa</title>
  </head>
  <body>
      <!-- Shu yerga "Salom, dunyo!" matnini qo'shing -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Birinchi sahifa</title>
  </head>
  <body>
      <h1>Salom, dunyo!</h1>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const body = doc.body;
        return body.textContent.includes("Salom, dunyo!");
      },
    },
    {
      title: "Sarlavhalar",
      description: "Barcha darajadagi sarlavhalarni (h1 dan h6 gacha) qo'shing",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Sarlavhalar</title>
  </head>
  <body>
      <!-- h1 dan h6 gacha sarlavhalarni qo'shing -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Sarlavhalar</title>
  </head>
  <body>
      <h1>Birinchi sarlavha</h1>
      <h2>Ikkinchi sarlavha</h2>
      <h3>Uchinchi sarlavha</h3>
      <h4>To'rtinchi sarlavha</h4>
      <h5>Beshinchi sarlavha</h5>
      <h6>Oltinchi sarlavha</h6>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return doc.querySelectorAll("h1, h2, h3, h4, h5, h6").length === 6;
      },
    },
    {
      title: "Paragraflar",
      description: "3 ta paragraf yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Paragraflar</title>
  </head>
  <body>
      <!-- 3 ta paragraf yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Paragraflar</title>
  </head>
  <body>
      <p>Birinchi paragraf</p>
      <p>Ikkinchi paragraf</p>
      <p>Uchinchi paragraf</p>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return doc.getElementsByTagName("p").length >= 3;
      },
    },
    {
      title: "Matn formatlash",
      description: "Qalin, kursiv va tagiga chizilgan matnlarni yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Matn formatlash</title>
  </head>
  <body>
      <!-- Matnlarni formatlang -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Matn formatlash</title>
  </head>
  <body>
      <p><strong>Qalin matn</strong></p>
      <p><em>Kursiv matn</em></p>
      <p><u>Tagiga chizilgan matn</u></p>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("strong") &&
          doc.querySelector("em") &&
          doc.querySelector("u")
        );
      },
    },
    {
      title: "Havola yaratish",
      description: "Turli xil havolalarni yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Havolalar</title>
  </head>
  <body>
      <!-- Havolalarni yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Havolalar</title>
  </head>
  <body>
      <a href="https://example.com">Tashqi havola</a>
      <a href="about.html">Ichki havola</a>
      <a href="#top">Sahifa tepasiga</a>
      <a href="mailto:info@example.com">Email havola</a>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const links = doc.getElementsByTagName("a");
        return links.length >= 3;
      },
    },
    {
      title: "Rasmlar",
      description: "Rasm va rasm tavsifini qo'shing",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Rasmlar</title>
  </head>
  <body>
      <!-- Rasm va tavsifini qo'shing -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Rasmlar</title>
  </head>
  <body>
      <figure>
          <img src="https://picsum.photos/200/300" alt="Tasodifiy rasm">
          <figcaption>Rasm tavsifi</figcaption>
      </figure>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("figure") &&
          doc.querySelector("img[alt]") &&
          doc.querySelector("figcaption")
        );
      },
    },
    {
      title: "Tartibsiz ro'yxat",
      description: "Tartibsiz ro'yxat yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tartibsiz ro'yxat</title>
  </head>
  <body>
      <!-- Tartibsiz ro'yxat yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tartibsiz ro'yxat</title>
  </head>
  <body>
      <ul>
          <li>Birinchi element</li>
          <li>Ikkinchi element</li>
          <li>Uchinchi element</li>
      </ul>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const ul = doc.querySelector("ul");
        return ul && ul.getElementsByTagName("li").length >= 3;
      },
    },
    {
      title: "Tartibli ro'yxat",
      description: "Tartibli ro'yxat yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tartibli ro'yxat</title>
  </head>
  <body>
      <!-- Tartibli ro'yxat yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tartibli ro'yxat</title>
  </head>
  <body>
      <ol>
          <li>Birinchi element</li>
          <li>Ikkinchi element</li>
          <li>Uchinchi element</li>
      </ol>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const ol = doc.querySelector("ol");
        return ol && ol.getElementsByTagName("li").length >= 3;
      },
    },
    {
      title: "Tavsifli ro'yxat",
      description: "Tavsifli ro'yxat yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tavsifli ro'yxat</title>
  </head>
  <body>
      <!-- Tavsifli ro'yxat yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tavsifli ro'yxat</title>
  </head>
  <body>
      <dl>
          <dt>HTML</dt>
          <dd>Gipermatnli belgilash tili</dd>
          <dt>CSS</dt>
          <dd>Kaskadli stillar jadvali</dd>
      </dl>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("dl") &&
          doc.querySelector("dt") &&
          doc.querySelector("dd")
        );
      },
    },
    {
      title: "Oddiy jadval",
      description: "2x3 o'lchamli jadval yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Jadval</title>
  </head>
  <body>
      <!-- 2x3 jadval yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Jadval</title>
  </head>
  <body>
      <table border="1">
          <tr>
              <td>1-qator, 1-ustun</td>
              <td>1-qator, 2-ustun</td>
              <td>1-qator, 3-ustun</td>
          </tr>
          <tr>
              <td>2-qator, 1-ustun</td>
              <td>2-qator, 2-ustun</td>
              <td>2-qator, 3-ustun</td>
          </tr>
      </table>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const table = doc.querySelector("table");
        const rows = table?.getElementsByTagName("tr");
        return (
          rows?.length === 2 &&
          Array.from(rows).every(
            (row) => row.getElementsByTagName("td").length === 3
          )
        );
      },
    },
    {
      title: "Jadval sarlavhasi",
      description: "Sarlavhali jadval yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Jadval sarlavhasi</title>
  </head>
  <body>
      <!-- Sarlavhali jadval yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Jadval sarlavhasi</title>
  </head>
  <body>
      <table border="1">
          <thead>
              <tr>
                  <th>Ism</th>
                  <th>Yosh</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Ali</td>
                  <td>25</td>
              </tr>
          </tbody>
      </table>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("thead") &&
          doc.querySelector("tbody") &&
          doc.querySelector("th")
        );
      },
    },
    {
      title: "Oddiy forma",
      description: "Oddiy forma yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Forma</title>
  </head>
  <body>
      <!-- Oddiy forma yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Forma</title>
  </head>
  <body>
      <form action="/submit" method="post">
          <input type="text" name="username" placeholder="Foydalanuvchi nomi">
          <input type="password" name="password" placeholder="Parol">
          <button type="submit">Yuborish</button>
      </form>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const form = doc.querySelector("form");
        return (
          form &&
          form.querySelector('input[type="text"]') &&
          form.querySelector('input[type="password"]') &&
          form.querySelector('button[type="submit"]')
        );
      },
    },
    {
      title: "Forma elementlari",
      description: "Turli xil forma elementlarini qo'shing",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Forma elementlari</title>
  </head>
  <body>
      <!-- Forma elementlarini qo'shing -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Forma elementlari</title>
  </head>
  <body>
      <form>
          <input type="text" placeholder="Matn">
          <input type="email" placeholder="Email">
          <input type="number" placeholder="Raqam">
          <input type="date">
          <input type="color">
          <input type="range" min="0" max="100">
          <textarea placeholder="Xabar"></textarea>
          <button type="submit">Yuborish</button>
      </form>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const form = doc.querySelector("form");
        return (
          form &&
          form.querySelector('input[type="text"]') &&
          form.querySelector('input[type="email"]') &&
          form.querySelector("textarea")
        );
      },
    },
    {
      title: "Radio va checkbox",
      description: "Radio va checkbox elementlarini yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Radio va Checkbox</title>
  </head>
  <body>
      <!-- Radio va checkbox elementlarini yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Radio va Checkbox</title>
  </head>
  <body>
      <form>
          <div>
              <input type="radio" name="gender" id="male">
              <label for="male">Erkak</label>
              <input type="radio" name="gender" id="female">
              <label for="female">Ayol</label>
          </div>
          <div>
              <input type="checkbox" id="agree">
              <label for="agree">Shartlarga roziman</label>
          </div>
      </form>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector('input[type="radio"]') &&
          doc.querySelector('input[type="checkbox"]')
        );
      },
    },
    {
      title: "Tanlash ro'yxati",
      description: "Select va option elementlarini yarating",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tanlash ro'yxati</title>
  </head>
  <body>
      <!-- Select elementini yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Tanlash ro'yxati</title>
  </head>
  <body>
      <form>
          <select name="city">
              <option value="">Shahar tanlang</option>
              <option value="tashkent">Toshkent</option>
              <option value="samarkand">Samarqand</option>
              <option value="bukhara">Buxoro</option>
          </select>
      </form>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const select = doc.querySelector("select");
        return select && select.getElementsByTagName("option").length >= 3;
      },
    },
    {
      title: "Fieldset va Legend",
      description: "Forma elementlarini guruhlang",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Fieldset</title>
  </head>
  <body>
      <!-- Fieldset va legend yarating -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Fieldset</title>
  </head>
  <body>
      <form>
          <fieldset>
              <legend>Shaxsiy ma'lumotlar</legend>
              <input type="text" placeholder="Ism">
              <input type="text" placeholder="Familiya">
          </fieldset>
      </form>
  </body>
  </html>`,
      checkFunction: (doc) => {
        return doc.querySelector("fieldset") && doc.querySelector("legend");
      },
    },
    {
      title: "Audio element",
      description: "Audio elementini qo'shing",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Audio</title>
  </head>
  <body>
      <!-- Audio elementini qo'shing -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Audio</title>
  </head>
  <body>
      <audio controls>
          <source src="audio.mp3" type="audio/mpeg">
          Brauzeringiz audio elementini qo'llab-quvvatlamaydi.
      </audio>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const audio = doc.querySelector("audio");
        return audio && audio.hasAttribute("controls");
      },
    },
    {
      title: "Video element",
      description: "Video elementini qo'shing",
      initialCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Video</title>
  </head>
  <body>
      <!-- Video elementini qo'shing -->
  </body>
  </html>`,
      solutionCode: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Video</title>
  </head>
  <body>
      <video controls width="400">
          <source src="video.mp4" type="video/mp4">
          Brauzeringiz video elementini qo'llab-quvvatlamaydi.
      </video>
  </body>
  </html>`,
      checkFunction: (doc) => {
        const video = doc.querySelector("video");
        return video && video.hasAttribute("controls");
      },
    },
    {
      title: "Meta teglar",
      description: "Barcha muhim meta teglarni qo'shing",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Meta teglar</title>
    <!-- Meta teglarni qo'shing -->
</head>
<body>
    <h1>Meta teglar sahifasi</h1>
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Bu sahifa meta teglar haqida">
    <meta name="keywords" content="HTML, Meta, Tags">
    <meta name="author" content="Muallif ismi">
    <title>Meta teglar</title>
</head>
<body>
    <h1>Meta teglar sahifasi</h1>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("meta[charset]") &&
          doc.querySelector('meta[name="viewport"]') &&
          doc.querySelector('meta[name="description"]') &&
          doc.querySelector('meta[name="keywords"]')
        );
      },
    },
    {
      title: "Semantik teglar",
      description: "Asosiy semantik teglardan foydalaning",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Semantik teglar</title>
</head>
<body>
    <!-- Semantik teglarni qo'shing -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Semantik teglar</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Bosh sahifa</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <section>
                <h1>Asosiy sarlavha</h1>
                <p>Matn</p>
            </section>
        </article>
        <aside>
            <h2>Qo'shimcha ma'lumot</h2>
        </aside>
    </main>
    <footer>
        <p>&copy; 2024</p>
    </footer>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("header") &&
          doc.querySelector("nav") &&
          doc.querySelector("main") &&
          doc.querySelector("article") &&
          doc.querySelector("section") &&
          doc.querySelector("aside") &&
          doc.querySelector("footer")
        );
      },
    },
    {
      title: "Details va Summary",
      description: "Details va summary elementlarini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Details va Summary</title>
</head>
<body>
    <!-- Details va summary yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Details va Summary</title>
</head>
<body>
    <details>
        <summary>Ko'proq ma'lumot</summary>
        <p>Bu yerda yashirin ma'lumot bor.</p>
    </details>
    <details>
        <summary>Yana ma'lumot</summary>
        <p>Bu ham yashirin ma'lumot.</p>
    </details>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("details") && doc.querySelector("summary");
      },
    },
    {
      title: "Progress va Meter",
      description: "Progress va meter elementlarini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Progress va Meter</title>
</head>
<body>
    <!-- Progress va meter yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Progress va Meter</title>
</head>
<body>
    <progress value="70" max="100">70%</progress>
    <meter value="0.6">60%</meter>
    <meter value="90" min="0" max="100" low="33" high="66" optimum="50">90</meter>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("progress") && doc.querySelector("meter");
      },
    },
    {
      title: "Time va DateTime",
      description: "Vaqt va sana elementlarini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vaqt va Sana</title>
</head>
<body>
    <!-- Vaqt va sana elementlarini yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vaqt va Sana</title>
</head>
<body>
    <p>Nashr qilingan: 
        <time datetime="2024-03-20">20 Mart 2024</time>
    </p>
    <p>Ochilish vaqti: 
        <time datetime="09:00">9:00</time>
    </p>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("time") && doc.querySelector("time[datetime]");
      },
    },
    {
      title: "Iframe elementi",
      description: "Iframe elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Iframe</title>
</head>
<body>
    <!-- Iframe yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Iframe</title>
</head>
<body>
    <iframe 
        src="https://www.google.com/maps/embed"
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</body>
</html>`,
      checkFunction: (doc) => {
        const iframe = doc.querySelector("iframe");
        return iframe && iframe.hasAttribute("src");
      },
    },
    {
      title: "Canvas elementi",
      description: "Canvas elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Canvas</title>
</head>
<body>
    <!-- Canvas yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Canvas</title>
</head>
<body>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;">
        Brauzeringiz canvas elementini qo'llab-quvvatlamaydi.
    </canvas>
</body>
</html>`,
      checkFunction: (doc) => {
        const canvas = doc.querySelector("canvas");
        return (
          canvas &&
          canvas.hasAttribute("width") &&
          canvas.hasAttribute("height")
        );
      },
    },
    {
      title: "SVG elementi",
      description: "SVG elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>SVG</title>
</head>
<body>
    <!-- SVG yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>SVG</title>
</head>
<body>
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    <svg width="100" height="100">
        <rect width="60" height="60" x="20" y="20" fill="blue" />
    </svg>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("svg") &&
          (doc.querySelector("circle") || doc.querySelector("rect"))
        );
      },
    },
    {
      title: "Murakkab jadval",
      description: "Colspan va rowspan ishlatilgan jadval yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Murakkab jadval</title>
</head>
<body>
    <!-- Murakkab jadval yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Murakkab jadval</title>
</head>
<body>
    <table border="1">
        <tr>
            <th colspan="2">Sarlavha</th>
        </tr>
        <tr>
            <td rowspan="2">Birlashgan katak</td>
            <td>Oddiy katak</td>
        </tr>
        <tr>
            <td>Oddiy katak</td>
        </tr>
    </table>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("td[colspan]") ||
          doc.querySelector("td[rowspan]") ||
          doc.querySelector("th[colspan]") ||
          doc.querySelector("th[rowspan]")
        );
      },
    },
    {
      title: "Data atributlari",
      description: "Data atributlarini qo'llang",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Data atributlari</title>
</head>
<body>
    <!-- Data atributli elementlar yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Data atributlari</title>
</head>
<body>
    <ul>
        <li data-id="1" data-category="fruit">Olma</li>
        <li data-id="2" data-category="vegetable">Sabzi</li>
        <li data-id="3" data-category="fruit">Banan</li>
    </ul>
</body>
</html>`,
      checkFunction: (doc) => {
        const elements = doc.querySelectorAll("[data-id]");
        return elements.length > 0;
      },
    },
    {
      title: "Picture elementi",
      description: "Picture elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Picture</title>
</head>
<body>
    <!-- Picture elementini yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Picture</title>
</head>
<body>
    <picture>
        <source media="(min-width: 650px)" srcset="img_large.jpg">
        <source media="(min-width: 465px)" srcset="img_small.jpg">
        <img src="img_default.jpg" alt="Rasm" style="width:auto;">
    </picture>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("picture") &&
          doc.querySelector("source") &&
          doc.querySelector("img")
        );
      },
    },
    {
      title: "Dialog elementi",
      description: "Dialog (modal) elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dialog</title>
</head>
<body>
    <!-- Dialog elementini yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dialog</title>
</head>
<body>
    <dialog id="myDialog">
        <h2>Dialog oynasi</h2>
        <p>Bu modal oyna matni</p>
        <button>Yopish</button>
    </dialog>
    <button>Ochish</button>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("dialog");
      },
    },
    {
      title: "Datalist elementi",
      description: "Input bilan datalist yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Datalist</title>
</head>
<body>
    <!-- Datalist yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Datalist</title>
</head>
<body>
    <input list="browsers" name="browser">
    <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Safari">
        <option value="Edge">
    </datalist>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("datalist") && doc.querySelector("input[list]")
        );
      },
    },
    {
      title: "Output elementi",
      description: "Form bilan output elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Output</title>
</head>
<body>
    <!-- Output elementini yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Output</title>
</head>
<body>
    <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
        <input type="number" name="a" value="0"> +
        <input type="number" name="b" value="0"> =
        <output name="result">0</output>
    </form>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("output");
      },
    },
    {
      title: "Mark elementi",
      description: "Mark elementini matn ichida ishlating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mark</title>
</head>
<body>
    <!-- Mark elementini qo'llang -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mark</title>
</head>
<body>
    <p>Bu oddiy matn, lekin <mark>bu qism ajratilgan</mark> va <mark>bu ham</mark>.</p>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("mark");
      },
    },
    {
      title: "Ruby elementi",
      description: "Ruby annotatsiyasini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ruby</title>
</head>
<body>
    <!-- Ruby annotatsiyasini yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ruby</title>
</head>
<body>
    <ruby>
        明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
    </ruby>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("ruby") && doc.querySelector("rt");
      },
    },
    {
      title: "Wbr elementi",
      description: "Wbr elementini uzun so'zlarda qo'llang",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Wbr</title>
</head>
<body>
    <!-- Wbr elementini qo'llang -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Wbr</title>
</head>
<body>
    <p>Bu/juda/uzun/so<wbr>z/qator<wbr>ga/sig<wbr>masligi/mumkin</p>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("wbr");
      },
    },
    {
      title: "Bdi elementi",
      description: "Bdi elementini turli til yo'nalishlari uchun qo'llang",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bdi</title>
</head>
<body>
    <!-- Bdi elementini qo'llang -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bdi</title>
</head>
<body>
    <p>Foydalanuvchi <bdi>إيان</bdi>: 90 ball</p>
    <p>Foydalanuvchi <bdi>John</bdi>: 85 ball</p>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("bdi");
      },
    },
    {
      title: "Template elementi",
      description: "Template elementini yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Template</title>
</head>
<body>
    <!-- Template elementini yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Template</title>
</head>
<body>
    <template id="myTemplate">
        <div class="user-card">
            <h3>Foydalanuvchi</h3>
            <p>Email: example@mail.com</p>
        </div>
    </template>
    <div id="content"></div>
</body>
</html>`,
      checkFunction: (doc) => {
        return doc.querySelector("template");
      },
    },
    // Qo'shimcha 3 ta murakkab vazifa
    {
      title: "Murakkab Jadval Tuzilishi",
      description:
        "Murakkab jadval yarating (rowspan, colspan, thead, tbody, tfoot va boshqa elementlar bilan)",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Murakkab Jadval</title>
</head>
<body>
    <!-- Murakkab jadval yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Murakkab Jadval</title>
</head>
<body>
    <table border="1">
        <caption>2024-yil Hisoboti</caption>
        <colgroup>
            <col style="background-color: #f0f0f0">
            <col span="2">
            <col span="2" style="background-color: #e0e0e0">
        </colgroup>
        
        <thead>
            <tr>
                <th rowspan="2">Bo'lim</th>
                <th colspan="2">1-yarim yillik</th>
                <th colspan="2">2-yarim yillik</th>
            </tr>
            <tr>
                <th>Kirim</th>
                <th>Chiqim</th>
                <th>Kirim</th>
                <th>Chiqim</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>Marketing</th>
                <td>5000</td>
                <td>3000</td>
                <td>6000</td>
                <td>4000</td>
            </tr>
            <tr>
                <th>Ishlab chiqarish</th>
                <td>15000</td>
                <td>12000</td>
                <td>18000</td>
                <td>14000</td>
            </tr>
            <tr>
                <th>IT</th>
                <td>8000</td>
                <td>7000</td>
                <td>9000</td>
                <td>8000</td>
            </tr>
        </tbody>

        <tfoot>
            <tr>
                <th>Jami</th>
                <td colspan="2">50000</td>
                <td colspan="2">59000</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("table") &&
          doc.querySelector("thead") &&
          doc.querySelector("tbody") &&
          doc.querySelector("tfoot") &&
          doc.querySelector("colgroup") &&
          doc.querySelector("caption") &&
          doc.querySelector("th[rowspan]") &&
          doc.querySelector("th[colspan]")
        );
      },
    },
    {
      title: "HTML5 Media Player",
      description:
        "To'liq funksional media player yarating (audio, video va track elementlari bilan)",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Media Player</title>
</head>
<body>
    <!-- Media player yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Media Player</title>
</head>
<body>
    <div class="media-container">
        <h2>Video Player</h2>
        <video id="myVideo" width="640" height="360" controls crossorigin="anonymous">
            <source src="video.mp4" type="video/mp4">
            <source src="video.webm" type="video/webm">
            
            <track kind="subtitles" src="subtitles_uz.vtt" srclang="uz" label="O'zbek">
            <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English">
            <track kind="chapters" src="chapters.vtt" srclang="en">
            
            Brauzeringiz video elementini qo'llab-quvvatlamaydi.
        </video>

        <h2>Audio Player</h2>
        <audio id="myAudio" controls>
            <source src="audio.mp3" type="audio/mpeg">
            <source src="audio.ogg" type="audio/ogg">
            
            <track kind="captions" src="captions.vtt" srclang="uz" label="O'zbek">
            
            Brauzeringiz audio elementini qo'llab-quvvatlamaydi.
        </audio>

        <div class="playlist">
            <h3>Playlist</h3>
            <ul>
                <li><button onclick="playMedia('video1.mp4')">Video 1</button></li>
                <li><button onclick="playMedia('video2.mp4')">Video 2</button></li>
                <li><button onclick="playMedia('audio1.mp3')">Audio 1</button></li>
                <li><button onclick="playMedia('audio2.mp3')">Audio 2</button></li>
            </ul>
        </div>

        <div class="media-controls">
            <button onclick="document.getElementById('myVideo').playbackRate += 0.25">
                Tezroq
            </button>
            <button onclick="document.getElementById('myVideo').playbackRate -= 0.25">
                Sekinroq
            </button>
            <button onclick="toggleFullscreen()">
                To'liq ekran
            </button>
        </div>
    </div>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("video") &&
          doc.querySelector("audio") &&
          doc.querySelector("track") &&
          doc.querySelector("source") &&
          doc.querySelector(".playlist") &&
          doc.querySelector(".media-controls")
        );
      },
    },
    {
      title: "Interaktiv Web Forma",
      description:
        "Murakkab validatsiya va interaktiv elementlarga ega forma yarating",
      initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Interaktiv Forma</title>
</head>
<body>
    <!-- Interaktiv formani yarating -->
</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Interaktiv Forma</title>
</head>
<body>
    <form id="interactiveForm" action="/submit" method="post" autocomplete="on">
        <h2>Ro'yxatdan o'tish</h2>

        <!-- Shaxsiy ma'lumotlar -->
        <fieldset>
            <legend>Shaxsiy ma'lumotlar</legend>

            <div class="form-group">
                <label for="username">Foydalanuvchi nomi:</label>
                <input type="text" id="username" name="username" 
                       required minlength="3" maxlength="20"
                       pattern="[a-zA-Z0-9_]+" 
                       title="Faqat harflar, raqamlar va pastki chiziq">
                <meter id="usernameStrength" min="0" max="100" low="30" high="70" optimum="100"></meter>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" 
                       required multiple
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                <datalist id="emailSuggestions">
                    <option value="@gmail.com">
                    <option value="@yahoo.com">
                    <option value="@outlook.com">
                </datalist>
            </div>

            <div class="form-group">
                <label for="phone">Telefon:</label>
                <input type="tel" id="phone" name="phone"
                       pattern="\+998[0-9]{9}"
                       placeholder="+998901234567">
            </div>
        </fieldset>

        <!-- Xavfsizlik -->
        <fieldset>
            <legend>Xavfsizlik</legend>

            <div class="form-group">
                <label for="password">Parol:</label>
                <input type="password" id="password" name="password"
                       required minlength="8"
                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                       title="Kamida 8 ta belgi, 1 ta katta harf, 1 ta kichik harf va 1 ta raqam">
                <progress id="passwordStrength" value="0" max="100"></progress>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Parolni tasdiqlang:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
                <output name="passwordMatch"></output>
            </div>
        </fieldset>

        <!-- Qo'shimcha ma'lumotlar -->
        <fieldset>
            <legend>Qo'shimcha ma'lumotlar</legend>

            <div class="form-group">
                <label for="birthdate">Tug'ilgan sana:</label>
                <input type="date" id="birthdate" name="birthdate"
                       required min="1900-01-01">
            </div>

            <div class="form-group">
                <label>Jinsi:</label>
                <input type="radio" id="male" name="gender" value="male" required>
                <label for="male">Erkak</label>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Ayol</label>
            </div>

            <div class="form-group">
                <label for="interests">Qiziqishlar:</label>
                <select id="interests" name="interests[]" multiple required>
                    <optgroup label="Sport">
                        <option value="football">Futbol</option>
                        <option value="basketball">Basketbol</option>
                    </optgroup>
                    <optgroup label="San'at">
                        <option value="music">Musiqa</option>
                        <option value="painting">Rassom</option>
                    </optgroup>
                </select>
            </div>
        </fieldset>

        <!-- Fayl yuklash -->
        <fieldset>
            <legend>Fayllar</legend>

            <div class="form-group">
                <label for="avatar">Profil rasmi:</label>
                <input type="file" id="avatar" name="avatar"
                       accept="image/*"
                       capture="user">
            </div>

            <div class="form-group">
                <label for="documents">Hujjatlar:</label>
                <input type="file" id="documents" name="documents[]"
                       accept=".pdf,.doc,.docx"
                       multiple>
            </div>
        </fieldset>

        <!-- Tasdiqlash -->
        <fieldset>
            <legend>Tasdiqlash</legend>

            <div class="form-group">
                <input type="checkbox" id="terms" name="terms" required>
                <label for="terms">
                    <a href="#" target="_blank">Foydalanish shartlari</a>ga roziman
                </label>
            </div>

            <div class="form-group">
                <input type="checkbox" id="newsletter" name="newsletter">
                <label for="newsletter">Yangiliklarni olishga roziman</label>
            </div>
        </fieldset>

        <div class="form-actions">
            <button type="submit">Ro'yxatdan o'tish</button>
            <button type="reset">Tozalash</button>
        </div>
    </form>

    <dialog id="confirmDialog">
        <h3>Tasdiqlash</h3>
        <p>Barcha ma'lumotlar to'g'rimi?</p>
        <form method="dialog">
            <button value="cancel">Bekor qilish</button>
            <button value="confirm">Tasdiqlash</button>
        </form>
    </dialog>
</body>
</html>`,
      checkFunction: (doc) => {
        return (
          doc.querySelector("form") &&
          doc.querySelector('input[type="password"]') &&
          doc.querySelector('input[type="email"]') &&
          doc.querySelector('input[type="file"]') &&
          doc.querySelector("select[multiple]") &&
          doc.querySelector("progress") &&
          doc.querySelector("meter") &&
          doc.querySelector("dialog") &&
          doc.querySelector("output") &&
          doc.querySelector("datalist")
        );
      },
    },
  ];

  useEffect(() => {
    setCode(tasks[currentTask].initialCode);
  }, [currentTask]);

  useEffect(() => {
    localStorage.setItem("balls", balls.toString());
  }, [balls]);

  useEffect(() => {
    localStorage.setItem("yutuqlar", yutuqlar.toString());
  }, [yutuqlar]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const checkCode = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, "text/html");
    const result = tasks[currentTask].checkFunction(doc);

    if (result) {
      if (!completedTasks.includes(currentTask)) {
        setScore((prevScore) => prevScore + 1);
        setBalls((prevBalls) => {
          const newBalls = prevBalls + (usedHelp ? 0.4 : 1);
          localStorage.setItem("balls", newBalls.toString());
          return newBalls;
        });
        setCompletedTasks((prevCompletedTasks) => [
          ...prevCompletedTasks,
          currentTask,
        ]);
      } else {
        setResult(
          "Siz bu savolni allaqachon bajargansiz. Keyingi savolga o'ting."
        );
        setShowModal(true);
        return;
      }

      if (currentTask < tasks.length - 1) {
        setCurrentTask((prevTask) => prevTask + 1);
      } else {
        setYutuqlar((prevYutuqlar) => {
          const newYutuqlar = prevYutuqlar + 1;
          localStorage.setItem("yutuqlar", newYutuqlar.toString());
          return newYutuqlar;
        });
        setShowModal(true);
      }
    }

    setResult(
      result
        ? "To'g'ri! Keyingi vazifaga o'ting."
        : "Noto'g'ri. Qaytadan urinib ko'ring."
    );
  };

  const nextTask = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask(currentTask + 1);
    }
  };

  const prevTask = () => {
    if (currentTask > 0) {
      setCurrentTask(currentTask - 1);
    }
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
    setUsedHelp(true);
  };

  return (
    <div id="app-containery" className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-0">
        <span className="flex items-center">
          <FaHtml5 className="text-red-500 mr-2 text-2xl sm:text-4xl" />
          HTML Amaliyoti
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <FaStar className="text-yellow-500 mr-1 text-base sm:text-lg" />
            <span className="text-sm sm:text-base">{balls} Ball</span>
          </span>
          <span className="flex items-center bg-green-100 px-2 py-1 rounded-full">
            <FaTrophy className="text-green-500 mr-1 text-base sm:text-lg" />
            <span className="text-sm sm:text-base">{yutuqlar} Yutuq</span>
          </span>
        </div>
      </h1>

      <div className="bg-white shadow-md rounded-lg p-3 sm:p-6 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <span className="break-words">
            Vazifa {currentTask + 1}: {tasks[currentTask].title}
          </span>
          <button
            onClick={toggleHelp}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <FaQuestionCircle className="mr-2" />
            Yordam
          </button>
        </h2>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base">{tasks[currentTask].description}</p>

        {showHelp && (
          <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-3 sm:mb-4 overflow-x-auto">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Yordam:</h3>
            <pre className="bg-gray-200 p-2 rounded text-xs sm:text-sm">
              <code>{tasks[currentTask].solutionCode}</code>
            </pre>
          </div>
        )}

        {completedTasks.includes(currentTask) && (
          <p className="text-green-500 mb-3 sm:mb-4 text-sm sm:text-base">
            Siz bu savolni allaqachon bajargansiz. Keyingi savolga o'tishingiz mumkin.
          </p>
        )}

        <div className="h-[300px] w-full">
          <Editor
            height="100%"
            defaultLanguage="html"
            value={code}
            onChange={setCode}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: window.innerWidth < 640 ? 14 : 16,
            }}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevTask}
            disabled={currentTask === 0}
          >
            Oldingi
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={checkCode}
          >
            Kodni tekshirish
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextTask}
            disabled={currentTask === tasks.length - 1}
          >
            Keyingi
          </button>
        </div>

        {result && (
          <div className="mt-4 bg-gray-100 p-3 sm:p-4 rounded-md">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Natija:</h3>
            <p className="text-sm sm:text-base">{result}</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-[90%] sm:w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Ogohlantirish!
              </h3>
              <div className="mt-2 px-4 sm:px-7 py-3">
                <p className="text-sm text-gray-500">
                  Siz bu savolni allaqachon bajargansiz!
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => setShowModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HtmlPractice;
