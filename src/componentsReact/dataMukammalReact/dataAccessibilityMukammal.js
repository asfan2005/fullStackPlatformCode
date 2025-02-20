const dataAccessibilityMukammal = [
    {
        id: 1,
        title: "Semantic HTML Elements",
        code: `
// Bad Example ❌
<div className="button" onClick={handleClick}>
  Click me
</div>

// Good Example ✅
<button onClick={handleClick} aria-label="Submit form">
  Click me
</button>

// Navigation Example
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`,
        description: "Semantik HTML elementlaridan to'g'ri foydalanish",
        result: `{
    "feature": "Semantic HTML",
    "benefits": [
        "Screen Reader Support",
        "Better SEO",
        "Clear Document Structure",
        "Improved User Experience"
    ]
}`
    },
    {
        id: 2,
        title: "ARIA Labels and Roles",
        code: `
// Form with ARIA labels
<form role="form" aria-label="Contact form">
  <div>
    <label htmlFor="name">Name:</label>
    <input
      id="name"
      type="text"
      aria-required="true"
      aria-invalid={errors.name ? "true" : "false"}
    />
  </div>
  
  {/* Custom toggle button */}
  <button
    role="switch"
    aria-checked={isOn}
    aria-label="Toggle dark mode"
    onClick={toggle}
  >
    {isOn ? "On" : "Off"}
  </button>
</form>`,
        description: "ARIA atributlari va rollaridan to'g'ri foydalanish",
        result: `{
    "feature": "ARIA Implementation",
    "attributes": [
        "aria-label",
        "aria-describedby",
        "aria-live",
        "role"
    ]
}`
    },
    {
        id: 3,
        title: "Keyboard Navigation",
        code: `
function AccessibleMenu() {
  const handleKeyPress = (event) => {
    switch(event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        // Activate item
        break;
      case 'ArrowDown':
        event.preventDefault();
        // Move to next item
        break;
      case 'ArrowUp':
        event.preventDefault();
        // Move to previous item
        break;
      case 'Escape':
        // Close menu
        break;
    }
  };

  return (
    <ul role="menu" onKeyDown={handleKeyPress}>
      <li role="menuitem" tabIndex={0}>Item 1</li>
      <li role="menuitem" tabIndex={0}>Item 2</li>
      <li role="menuitem" tabIndex={0}>Item 3</li>
    </ul>
  );
}`,
        description: "Klaviatura navigatsiyasini qo'llab-quvvatlash",
        result: `{
    "feature": "Keyboard Navigation",
    "requirements": [
        "Focus Management",
        "Key Handlers",
        "Tab Order",
        "Keyboard Shortcuts"
    ]
}`
    },
    {
        id: 4,
        title: "Focus Management",
        code: `
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Save previous focus
      const previousFocus = document.activeElement;
      
      // Focus modal
      modalRef.current?.focus();

      return () => {
        // Restore focus when modal closes
        previousFocus?.focus();
      };
    }
  }, [isOpen]);

  return isOpen ? (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      {children}
    </div>
  ) : null;
}`,
        description: "Fokusni boshqarish va modal oynalar",
        result: `{
    "feature": "Focus Management",
    "practices": [
        "Focus Trapping",
        "Focus Restoration",
        "Focus Indicators",
        "Tab Navigation"
    ]
}`
    },
    {
        id: 5,
        title: "Color Contrast and Themes",
        code: `
// Theme provider with accessible colors
const theme = {
  colors: {
    primary: {
      main: '#2B6CB0',      // WCAG AAA compliant
      contrast: '#FFFFFF'
    },
    error: {
      main: '#E53E3E',      // WCAG AA compliant
      contrast: '#FFFFFF'
    },
    text: {
      primary: '#1A202C',   // High contrast for readability
      secondary: '#4A5568'  // Meets WCAG AA for large text
    }
  },
  // Ensure focus visible styles
  focusStyles: {
    outline: '2px solid #2B6CB0',
    outlineOffset: '2px'
  }
};

function AccessibleButton({ children, variant = 'primary' }) {
  return (
    <button
      style={{
        backgroundColor: theme.colors[variant].main,
        color: theme.colors[variant].contrast,
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}`,
        description: "Rang kontrastligi va mavzular bilan ishlash",
        result: `{
    "feature": "Color Accessibility",
    "guidelines": [
        "WCAG Compliance",
        "Contrast Ratios",
        "Color Blindness Support",
        "Theme Flexibility"
    ]
}`
    },
    {
        id: 6,
        title: "Error Handling and Announcements",
        code: `
function FormWithAnnouncements() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    try {
      // Form submission logic
      setStatus('Form submitted successfully!');
    } catch (error) {
      setStatus('Error submitting form. Please try again.');
      setErrors({ submit: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Live region for status updates */}
      <div
        role="status"
        aria-live="polite"
        className="visually-hidden"
      >
        {status}
      </div>

      {/* Error summary */}
      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          aria-labelledby="error-heading"
        >
          <h2 id="error-heading">
            Please correct the following errors:
          </h2>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Form fields */}
    </form>
  );
}`,
        description: "Xatolarni ko'rsatish va e'lonlar",
        result: `{
    "feature": "Error Announcements",
    "components": [
        "Live Regions",
        "Error Messages",
        "Status Updates",
        "Form Validation"
    ]
}`
    },
    {
        id: 7,
        title: "Responsive and Zoom Support",
        code: `
// Accessible responsive design
const AccessibleLayout = styled.div\`
  // Base styles
  font-size: 16px;
  line-height: 1.5;
  
  // Ensure text remains readable when zoomed
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  // Support for increased text spacing
  @media screen and (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // Maintain readability at different viewport sizes
  max-width: 65ch;
  padding: clamp(1rem, 5vw, 3rem);
  margin: 0 auto;
\``,
        description: "Moslashuvchan dizayn va masshtablash qo'llab-quvvatlash",
        result: `{
    "feature": "Responsive Design",
    "considerations": [
        "Text Scaling",
        "Viewport Adaptation",
        "Motion Reduction",
        "Layout Flexibility"
    ]
}`
    },
    {
        id: 8,
        title: "Screen Reader Optimization",
        code: `
function ScreenReaderContent() {
  return (
    <div>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* Hidden text for context */}
      <span className="visually-hidden">
        Current page:
      </span>
      <h1>Dashboard</h1>

      {/* Complex widget with screen reader description */}
      <div
        role="region"
        aria-label="Data visualization"
        aria-describedby="chart-desc"
      >
        <div id="chart-desc" className="visually-hidden">
          Bar chart showing monthly sales data for 2023
        </div>
        {/* Chart component */}
      </div>

      {/* Icon button with accessible name */}
      <button
        aria-label="Close dialog"
        onClick={closeDialog}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}`,
        description: "Ekran o'quvchilari uchun optimallashtirilgan tarkib",
        result: `{
    "feature": "Screen Reader Support",
    "techniques": [
        "Skip Links",
        "Hidden Content",
        "ARIA Descriptions",
        "Semantic Structure"
    ]
}`
    }
];

export default dataAccessibilityMukammal;