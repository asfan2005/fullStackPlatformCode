const dataReactArchitectureMukammal = [
    {
        id: 1,
        title: "Component Composition Pattern",
        code: `
// Composition example
const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    {children}
  </button>
);

const IconButton = ({ icon, children, ...props }) => (
  <Button {...props}>
    <span className="icon">{icon}</span>
    {children}
  </Button>
);

// Usage
const App = () => (
  <IconButton icon={<StarIcon />} onClick={() => console.log('clicked')}>
    Add to Favorites
  </IconButton>
);`,
        description: "Komponentlarni kompozitsiya qilish pattern",
        result: `{
    "feature": "Component Composition",
    "concepts": [
        "Reusability",
        "Props Forwarding",
        "Component Hierarchy",
        "Flexible Components"
    ]
}`
    },
    {
        id: 2,
        title: "Container/Presenter Pattern",
        code: `
// Container Component
const UserListContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return <UserListPresenter users={users} loading={loading} />;
};

// Presenter Component
const UserListPresenter = ({ users, loading }) => {
  if (loading) return <LoadingSpinner />;
  
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};`,
        description: "Container va Presenter pattern",
        result: `{
    "feature": "Container/Presenter",
    "concepts": [
        "Separation of Concerns",
        "Business Logic",
        "UI Logic",
        "Maintainability"
    ]
}`
    },
    {
        id: 3,
        title: "Custom Hooks Pattern",
        code: `
// Custom Hook
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { user, loading, login };
};

// Usage
const AuthComponent = () => {
  const { user, loading, login } = useAuth();

  if (loading) return <LoadingSpinner />;
  
  return user ? <UserDashboard /> : <LoginForm onLogin={login} />;
};`,
        description: "Custom Hook pattern",
        result: `{
    "feature": "Custom Hooks",
    "concepts": [
        "Logic Reuse",
        "State Management",
        "Side Effects",
        "Code Organization"
    ]
}`
    },
    {
        id: 4,
        title: "Render Props Pattern",
        code: `
// Mouse tracker component with render prop
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
const App = () => (
  <MouseTracker
    render={({ x, y }) => (
      <div>
        Mouse position: {x}, {y}
      </div>
    )}
  />
);`,
        description: "Render Props pattern",
        result: `{
    "feature": "Render Props",
    "concepts": [
        "Component Sharing",
        "Dynamic Rendering",
        "Prop Functions",
        "Reusable Logic"
    ]
}`
    },
    {
        id: 5,
        title: "Context API Pattern",
        code: `
// Theme context
const ThemeContext = React.createContext('light');

// Theme provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer component
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      style={{ background: theme === 'light' ? '#fff' : '#000' }}
    >
      Current theme: {theme}
    </button>
  );
};`,
        description: "Context API pattern",
        result: `{
    "feature": "Context API",
    "concepts": [
        "Global State",
        "Theme Management",
        "Props Drilling Prevention",
        "State Sharing"
    ]
}`
    },
    {
        id: 6,
        title: "Higher-Order Components (HOC)",
        code: `
// HOC for loading state
const withLoader = (WrappedComponent, loadingMessage = 'Loading...') => {
  return function WithLoaderComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>{loadingMessage}</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

// Component with authentication HOC
const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

// Usage
const UserProfile = ({ user }) => (
  <div>Welcome, {user.name}!</div>
);

const AuthenticatedUserProfile = withAuth(
  withLoader(UserProfile)
);`,
        description: "Higher-Order Components pattern",
        result: `{
    "feature": "HOC Pattern",
    "concepts": [
        "Component Enhancement",
        "Code Reuse",
        "Cross-Cutting Concerns",
        "Component Composition"
    ]
}`
    },
    {
        id: 7,
        title: "Compound Components Pattern",
        code: `
// Menu component with compound components
const Menu = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <MenuContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
};

Menu.Item = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(MenuContext);
  
  return (
    <div
      className={\`menu-item \${activeIndex === index ? 'active' : ''}\`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </div>
  );
};

// Usage
const App = () => (
  <Menu>
    <Menu.Item index={0}>Home</Menu.Item>
    <Menu.Item index={1}>About</Menu.Item>
    <Menu.Item index={2}>Contact</Menu.Item>
  </Menu>
);`,
        description: "Compound Components pattern",
        result: `{
    "feature": "Compound Components",
    "concepts": [
        "Implicit State Sharing",
        "Component API Design",
        "Flexible Composition",
        "Context Usage"
    ]
}`
    }
];

export default dataReactArchitectureMukammal;