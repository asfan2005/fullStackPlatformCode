const dataReactServerMukammal = [
    {
        id: 1,
        title: "Basic Server Component",
        code: `
// Server Component
// app/page.js
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const result = await data.json();

  return (
    <div>
      <h1>Server Component Example</h1>
      {result.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}`,
        description: "React Server Component asosiy tuzilishi",
        result: `{
    "feature": "Server Component",
    "benefits": [
        "Zero Client-side JavaScript",
        "Direct Database Access",
        "Automatic Data Fetching",
        "Improved Performance"
    ]
}`
    },
    {
        id: 2,
        title: "Client and Server Component Integration",
        code: `
// Server Component
// app/ServerComponent.js
async function ServerComponent() {
  const data = await getData();
  return <div>{data.title}</div>;
}

// Client Component
'use client';
// app/ClientComponent.js
function ClientComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

// Integration
// app/page.js
export default function Page() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent onClick={() => alert('Clicked!')} />
    </div>
  );
}`,
        description: "Server va Client komponentlarni birlashtirish",
        result: `{
    "feature": "Component Integration",
    "patterns": [
        "Server-Client Boundary",
        "Event Handling",
        "Data Flow",
        "Component Composition"
    ]
}`
    },
    {
        id: 3,
        title: "Data Fetching in Server Components",
        code: `
// Database utility
async function getUser(id) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return user;
}

// Server Component with data fetching
async function UserProfile({ userId }) {
  const user = await getUser(userId);
  
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <img src={user.avatar} alt={user.name} />
      <div className="details">
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}`,
        description: "Server Componentlarda ma'lumotlarni olish",
        result: `{
    "feature": "Server-side Data Fetching",
    "advantages": [
        "Direct Database Access",
        "Reduced Client Bundle",
        "Secure Data Handling",
        "Improved SEO"
    ]
}`
    },
    {
        id: 4,
        title: "Streaming with Suspense",
        code: `
// Layout component
export default function Layout() {
  return (
    <div>
      <nav>Navigation</nav>
      <Suspense fallback={<LoadingSpinner />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}

// Slow loading component
async function SlowComponent() {
  const data = await fetch('https://api.example.com/slow-data');
  const result = await data.json();

  return (
    <div>
      {result.map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}`,
        description: "Suspense bilan streaming",
        result: `{
    "feature": "Streaming with Suspense",
    "capabilities": [
        "Progressive Loading",
        "Loading States",
        "Partial Hydration",
        "Enhanced UX"
    ]
}`
    },
    {
        id: 5,
        title: "Error Handling",
        code: `
// Error Boundary Component
'use client';
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

// Server Component with error handling
async function DataComponent() {
  try {
    const data = await fetchData();
    return <div>{data.content}</div>;
  } catch (error) {
    return <div>Error loading data</div>;
  }
}

// Usage
export default function Page() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <DataComponent />
      </Suspense>
    </ErrorBoundary>
  );
}`,
        description: "Xatolarni boshqarish",
        result: `{
    "feature": "Error Handling",
    "patterns": [
        "Error Boundaries",
        "Try-Catch Blocks",
        "Fallback UI",
        "Recovery Strategies"
    ]
}`
    },
    {
        id: 6,
        title: "Server Actions",
        code: `
// Server Action definition
async function submitForm(formData) {
  'use server';
  
  const name = formData.get('name');
  const email = formData.get('email');
  
  await db.insert('users', {
    name,
    email,
    createdAt: new Date()
  });
}

// Client Component using Server Action
'use client';
function FormComponent() {
  return (
    <form action={submitForm}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Submit</button>
    </form>
  );
}`,
        description: "Server Action'lardan foydalanish",
        result: `{
    "feature": "Server Actions",
    "benefits": [
        "Form Handling",
        "Secure Mutations",
        "Progressive Enhancement",
        "Optimistic Updates"
    ]
}`
    },
    {
        id: 7,
        title: "Server Component Patterns",
        code: `
// Nested Server Components
async function ProductList() {
  const products = await getProducts();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

async function ProductCard({ product }) {
  const details = await getProductDetails(product.id);
  const reviews = await getProductReviews(product.id);
  
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{details.description}</p>
      <ReviewsList reviews={reviews} />
    </div>
  );
}`,
        description: "Server Component patternlari",
        result: `{
    "feature": "Component Patterns",
    "patterns": [
        "Nested Data Fetching",
        "Component Hierarchy",
        "Data Composition",
        "Parallel Loading"
    ]
}`
    },
    {
        id: 8,
        title: "Cache and Revalidation",
        code: `
// Cached data fetching
async function getCachedData() {
  const res = await fetch('https://api.example.com/data', {
    next: {
      revalidate: 3600 // Cache for 1 hour
    }
  });
  return res.json();
}

// Component with cache control
async function CachedComponent() {
  const data = await getCachedData();
  
  return (
    <div>
      <h2>Cached Data</h2>
      <p>Last updated: {new Date().toLocaleString()}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`,
        description: "Kesh va qayta tekshirish",
        result: `{
    "feature": "Caching",
    "strategies": [
        "Time-based Cache",
        "Revalidation",
        "Cache Control",
        "Dynamic Updates"
    ]
}`
    },
    {
        id: 9,
        title: "Static and Dynamic Rendering",
        code: `
// Static rendering
export const dynamic = 'force-static';

async function StaticPage() {
  const data = await getData();
  return <div>{data.content}</div>;
}

// Dynamic rendering
export const dynamic = 'force-dynamic';

async function DynamicPage() {
  const data = await getData();
  return <div>{data.content}</div>;
}

// Mixed rendering
async function MixedPage() {
  return (
    <div>
      <StaticComponent />
      <Suspense fallback={<Loading />}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}`,
        description: "Statik va dinamik rendering",
        result: `{
    "feature": "Rendering Strategies",
    "options": [
        "Static Generation",
        "Dynamic Rendering",
        "Mixed Rendering",
        "Incremental Generation"
    ]
}`
    }
];

export default dataReactServerMukammal;