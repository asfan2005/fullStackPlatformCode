const practiceGoodConstruction = [
    {
      id: 1,
      title: "Oddiy konstruktor",
      description: "Person konstruktorini yarating",
      task: "name va age xususiyatlariga ega bo'lgan Person konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Person(name, age) {
    
  }`,
      hint: "this kalit so'zidan foydalaning",
      checkResult: (output) => {
        const person = new output("John", 25);
        return person.name === "John" && person.age === 25;
      }
    },
    {
      id: 2,
      title: "Metodli konstruktor",
      description: "Car konstruktorini metodlar bilan yarating",
      task: "model, year va start() metodiga ega bo'lgan Car konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Car(model, year) {
    
  }`,
      hint: "Metodlarni prototype orqali qo'shing",
      checkResult: (output) => {
        const car = new output("Toyota", 2020);
        return car.model === "Toyota" && car.year === 2020 && typeof car.start === "function";
      }
    },
    {
      id: 3,
      title: "Private xususiyatlar",
      description: "Private xususiyatli Bank konstruktorini yarating",
      task: "Private balance va public deposit(), withdraw() metodlariga ega Bank konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Bank(initialBalance) {
    
  }`,
      hint: "Closure dan foydalaning",
      checkResult: (output) => {
        const bank = new output(1000);
        return typeof bank.deposit === "function" && typeof bank.withdraw === "function";
      }
    },
    {
      id: 4,
      title: "Getter va Setter",
      description: "Temperature konstruktorini getter/setter bilan yarating",
      task: "Celsius va Fahrenheit o'rtasida konvertatsiya qiladigan Temperature konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Temperature(celsius) {
    
  }`,
      hint: "Object.defineProperty() dan foydalaning",
      checkResult: (output) => {
        const temp = new output(25);
        return temp.celsius === 25 && temp.fahrenheit === 77;
      }
    },
    {
      id: 5,
      title: "Meros olish",
      description: "Shape va Circle konstruktorlarini yarating",
      task: "Shape konstruktoridan meros oluvchi Circle konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Shape(color) {
    
  }
  function Circle(color, radius) {
    
  }`,
      hint: "call() metodidan foydalaning",
      checkResult: (output) => {
        const circle = new output[1]("red", 5);
        return circle instanceof output[0] && circle.color === "red" && circle.radius === 5;
      }
    },
    {
      id: 6,
      title: "Statik metodlar",
      description: "MathUtils konstruktorini statik metodlar bilan yarating",
      task: "add() va multiply() statik metodlariga ega MathUtils konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function MathUtils() {
    
  }`,
      hint: "Statik metodlarni to'g'ridan-to'g'ri konstruktorga qo'shing",
      checkResult: (output) => {
        return output.add(2, 3) === 5 && output.multiply(2, 3) === 6;
      }
    },
    {
      id: 7,
      title: "Chaining metodlar",
      description: "Calculator konstruktorini chaining metodlar bilan yarating",
      task: "add(), subtract() va getResult() metodlariga ega Calculator konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Calculator(initialValue) {
    
  }`,
      hint: "Har bir metodda this ni qaytaring",
      checkResult: (output) => {
        const calc = new output(10);
        return calc.add(5).subtract(3).getResult() === 12;
      }
    },
    {
      id: 8,
      title: "Factory metod",
      description: "UserFactory konstruktorini yarating",
      task: "createAdmin() va createUser() factory metodlariga ega UserFactory konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function UserFactory() {
    
  }`,
      hint: "Har xil turdagi foydalanuvchilar yarating",
      checkResult: (output) => {
        const factory = new output();
        const admin = factory.createAdmin("admin");
        const user = factory.createUser("user");
        return admin.role === "admin" && user.role === "user";
      }
    },
    {
      id: 9,
      title: "Singleton pattern",
      description: "Database singleton konstruktorini yarating",
      task: "Faqat bitta obyekt yaratish mumkin bo'lgan Database konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Database() {
    
  }`,
      hint: "Static instance dan foydalaning",
      checkResult: (output) => {
        const db1 = new output();
        const db2 = new output();
        return db1 === db2;
      }
    },
    {
      id: 10,
      title: "Observer pattern",
      description: "EventEmitter konstruktorini yarating",
      task: "on() va emit() metodlariga ega EventEmitter konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function EventEmitter() {
    
  }`,
      hint: "Hodisalarni Map da saqlang",
      checkResult: (output) => {
        const emitter = new output();
        let called = false;
        emitter.on("test", () => called = true);
        emitter.emit("test");
        return called === true;
      }
    },
    {
      id: 11,
      title: "Builder pattern",
      description: "QueryBuilder konstruktorini yarating",
      task: "select(), where() va build() metodlariga ega QueryBuilder konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function QueryBuilder() {
    
  }`,
      hint: "SQL so'rovini bosqichma-bosqich yarating",
      checkResult: (output) => {
        const builder = new output();
        return builder.select("users").where("age > 18").build() === "SELECT users WHERE age > 18";
      }
    },
    {
      id: 12,
      title: "Decorator pattern",
      description: "Coffee konstruktorini decorator bilan yarating",
      task: "addMilk() va addSugar() decoratorlariga ega Coffee konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Coffee() {
    
  }`,
      hint: "Har bir decorator yangi xususiyat qo'shadi",
      checkResult: (output) => {
        const coffee = new output();
        coffee.addMilk().addSugar();
        return coffee.ingredients.includes("milk") && coffee.ingredients.includes("sugar");
      }
    },
    {
      id: 13,
      title: "Proxy pattern",
      description: "UserProxy konstruktorini yarating",
      task: "Foydalanuvchi ma'lumotlariga kirishni cheklovchi UserProxy konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function UserProxy(user) {
    
  }`,
      hint: "get va set handlerlardan foydalaning",
      checkResult: (output) => {
        const proxy = new output({name: "John", role: "user"});
        return proxy.name === "John" && proxy.password === undefined;
      }
    },
    {
      id: 14,
      title: "Command pattern",
      description: "Calculator konstruktorini command pattern bilan yarating",
      task: "execute() va undo() metodlariga ega Calculator konstruktorini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  function Calculator() {
    
  }`,
      hint: "Har bir amalni alohida command sifatida saqlang",
      checkResult: (output) => {
        const calc = new output();
        calc.execute("+", 5);
        calc.execute("*", 2);
        calc.undo();
        return calc.getValue() === 5;
      }
    },
    {
      id: 15,
      title: "Module pattern",
      description: "Counter modulini yarating",
      task: "increment(), decrement() va getValue() metodlariga ega Counter modulini yarating",
      initialCode: `// Kodingizni shu yerda yozing
  const Counter = (function() {
    
  })();`,
      hint: "IIFE dan foydalaning",
      checkResult: (output) => {
        output.increment();
        output.increment();
        output.decrement();
        return output.getValue() === 1;
      }
    }
  ];
  
  export default practiceGoodConstruction;