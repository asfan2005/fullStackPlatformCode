import React, { useState, useRef, useEffect } from 'react';

function FunksiyalarPro() {
  // Asosiy funksiyalar
  const basicFunctions = `// 1. Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("John")); // Hello, John!

// 2. Function Expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};
console.log(greet("Jane")); // Hello, Jane!

// 3. Arrow Function
const greet = (name) => \`Hello, \${name}!\`;
console.log(greet("Alice")); // Hello, Alice!

// 4. IIFE
(function () {
  console.log("Bu funksiya darhol chaqirildi!");
})();`;

  // Standart parametrlar
  const defaultParams = `function greet(name = "Mehmon") {
  return \`Salom, \${name}!\`;
}
console.log(greet()); // Salom, Mehmon!
console.log(greet("Aziz")); // Salom, Aziz!`;

  // Rest parametrlar
  const restParams = `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`;

  // Spread operator
  const spreadOperator = `function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 6`;

  // Callback funksiyalar
  const callbackExample = `function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function(name) {
  console.log(\`Hello, \${name}!\`);
}); // Hello, John!`;

  // Higher-Order Functions
  const higherOrder = `function higherOrderFunction(callback) {
  const result = callback(5, 10);
  return \`Natija: \${result}\`;
}

const sum = (a, b) => a + b;
console.log(higherOrderFunction(sum)); // Natija: 15`;

  // Rekursiya
  const recursion = `function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120`;

  // Closures
  const closures = `function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2`;

  // Currying
  const currying = `function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10
console.log(multiply(3)(4)); // 12`;

  // This keyword
  const thisKeyword = `const person = {
  name: "John",
  greet: function() {
    console.log(\`Hello, my name is \${this.name}\`);
  },
  arrowGreet: () => {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

person.greet(); // Hello, my name is John
person.arrowGreet(); // Hello, my name is undefined`;

  // Yangi misollar uchun kodlar
  const dragDropExample = `const DraggableButton = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      style={{
        position: 'relative',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Meni suring!
    </button>
  );
};`;

  const progressButtonExample = `const ProgressButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleClick = () => {
    setIsLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 0;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <button
      className="relative px-6 py-2 bg-indigo-600 text-white rounded-lg
                 overflow-hidden disabled:opacity-50"
      onClick={handleClick}
      disabled={isLoading}
    >
      <span className="relative z-10">
        {isLoading ? \`\${progress}%\` : 'Boshlash'}
      </span>
      <div
        className="absolute left-0 top-0 h-full bg-indigo-800 transition-all"
        style={{ width: \`\${progress}%\` }}
      />
    </button>
  );
};`;

  const loadingButtonExample = `const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setDots('');
    }, 3000);
  };

  return (
    <button
      className={\`px-6 py-2 rounded-lg transition-all \${
        isLoading 
          ? 'bg-gray-400 w-32' 
          : 'bg-green-500 hover:bg-green-600'
      }\`}
      onClick={handleClick}
      disabled={isLoading}
    >
      <span className="text-white font-medium">
        {isLoading ? \`Yuklanmoqda\${dots}\` : 'Yuklash'}
      </span>
    </button>
  );
};`;

  // Namuna komponentlar
  const DraggableButton = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startPos.x,
          y: e.clientY - startPos.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        style={{
          position: 'relative',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        Meni suring!
      </button>
    );
  };

  const ProgressButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    
    const handleClick = () => {
      setIsLoading(true);
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 0;
          }
          return prev + 5;
        });
      }, 100);
    };

    return (
      <button
        className="relative px-6 py-2 bg-indigo-600 text-white rounded-lg overflow-hidden disabled:opacity-50"
        onClick={handleClick}
        disabled={isLoading}
      >
        <span className="relative z-10">
          {isLoading ? `${progress}%` : 'Boshlash'}
        </span>
        <div
          className="absolute left-0 top-0 h-full bg-indigo-800 transition-all"
          style={{ width: `${progress}%` }}
        />
      </button>
    );
  };

  const LoadingButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dots, setDots] = useState('');
    
    useEffect(() => {
      let interval;
      if (isLoading) {
        interval = setInterval(() => {
          setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 300);
      }
      return () => clearInterval(interval);
    }, [isLoading]);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setDots('');
      }, 3000);
    };

    return (
      <button
        className={`px-6 py-2 rounded-lg transition-all ${
          isLoading 
            ? 'bg-gray-400 w-32' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
        onClick={handleClick}
        disabled={isLoading}
      >
        <span className="text-white font-medium">
          {isLoading ? `Yuklanmoqda${dots}` : 'Yuklash'}
        </span>
      </button>
    );
  };

  // Natijalarni ko'rsatish uchun funksiya
  const CodeExample = ({ title, description, code, result }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
      <div className="space-y-4">
        <div className="bg-gray-800 rounded-md p-4">
          <pre className="text-green-400 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
        {result && (
          <div className="bg-indigo-50 rounded-md p-4">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">
              Natija:
            </h3>
            <pre className="text-indigo-600 overflow-x-auto">
              <code>{result}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          JavaScript Funksiyalari - Kengaytirilgan
        </h1>

        {/* Asosiy Funksiyalar */}
        <CodeExample
          title="1. Asosiy Funksiya Turlari"
          description="JavaScript-da funksiyalarni turli usullarda e'lon qilish mumkin."
          code={basicFunctions}
          result={`Hello, John!
Hello, Jane!
Hello, Alice!
Bu funksiya darhol chaqirildi!`}
        />

        {/* Standart Parametrlar */}
        <CodeExample
          title="2. Standart Parametrlar"
          description="Funksiyaga standart qiymatlarni berish."
          code={defaultParams}
          result={`Salom, Mehmon!
Salom, Aziz!`}
        />

        {/* Rest va Spread */}
        <CodeExample
          title="3. Rest va Spread Operatorlar"
          description="Rest va Spread operatorlarining ishlatilishi."
          code={`${restParams}\n\n${spreadOperator}`}
          result={`Rest parametr natijasi: 10
Spread operator natijasi: 6`}
        />

        {/* Callback va Higher-Order */}
        <CodeExample
          title="4. Callback va Higher-Order Funksiyalar"
          description="Callback va Higher-Order funksiyalarning ishlatilishi."
          code={`${callbackExample}\n\n${higherOrder}`}
          result={`Hello, John!
Natija: 15`}
        />

        {/* Rekursiya */}
        <CodeExample
          title="5. Rekursiya"
          description="Rekursiv funksiyaning ishlatilishi."
          code={recursion}
          result="Faktorial(5) = 120"
        />

        {/* Closures */}
        <CodeExample
          title="6. Closures"
          description="Closure funksiyaning ishlatilishi."
          code={closures}
          result={`Birinchi chaqiruv: 1
Ikkinchi chaqiruv: 2`}
        />

        {/* Currying */}
        <CodeExample
          title="7. Currying"
          description="Currying funksiyaning ishlatilishi."
          code={currying}
          result={`multiplyByTwo(5) = 10
multiply(3)(4) = 12`}
        />

        {/* This Keyword */}
        <CodeExample
          title="8. This Kalit So'zi"
          description="This kalit so'zining turli kontekstlarda ishlatilishi."
          code={thisKeyword}
          result={`Hello, my name is John
Hello, my name is undefined`}
        />

        {/* Yangi misollar */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-indigo-600">
            Qo'shimcha Murakkab Misollar
          </h2>

          {/* Drag and Drop Button */}
          <CodeExample
            title="9. Drag and Drop Button"
            description="Sichqoncha bilan surish mumkin bo'lgan button."
            code={dragDropExample}
            result={
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <DraggableButton />
              </div>
            }
          />

          {/* Progress Button */}
          <CodeExample
            title="10. Progress Button"
            description="Progress bar ko'rsatadigan button."
            code={progressButtonExample}
            result={
              <div className="flex justify-center">
                <ProgressButton />
              </div>
            }
          />

          {/* Loading Button */}
          <CodeExample
            title="11. Loading Button"
            description="Animatsiyali loading button."
            code={loadingButtonExample}
            result={
              <div className="flex justify-center">
                <LoadingButton />
              </div>
            }
          />
        </div>

        {/* Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Muhim Eslatmalar
          </h2>
          <div className="grid gap-4">
            <div className="bg-yellow-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Funksiya Yozish Qoidalari
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Funksiya nomi aniq va tushunarli bo'lishi kerak</li>
                <li>Har bir funksiya faqat bitta vazifani bajarishi kerak</li>
                <li>Funksiya kodi qayta ishlatilishi mumkin bo'lishi kerak</li>
                <li>Funksiya parametrlari mantiqiy bo'lishi kerak</li>
                <li>Murakkab funksiyalarni kichik qismlarga bo'ling</li>
                <li>Funksiya dokumentatsiyasini yozishni unutmang</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunksiyalarPro;