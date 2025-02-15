const dataErrorBoundaries = [
    {
        id: 1,
        title: "React Error Boundaries",
        description: "React ilovalaridagi xatolarni boshqarish va ulash usullari",
        image: "https://www.folio3.com/mobile/wp-content/uploads/2022/04/Screen-Shot-2022-04-21-at-2.03.13-PM.png",
        mainTopics: {
            introduction: {
                title: "Error Boundaries Asoslari",
                points: [
                    "Error Boundaries nima",
                    "Qachon ishlatiladi",
                    "Afzalliklari va kamchiliklari",
                    "Xatolarni ushlash mexanizmi",
                    "Production va Development farqlari",
                    "Error Boundary cheklovlari"
                ],
                examples: [
                    {
                        title: "Error Boundaries nima",
                        description: "Error Boundaries - React komponentlarida yuzaga keladigan JavaScript xatolarini ushlash va boshqarish uchun ishlatiladigan maxsus komponentlar",
                        code: `
// SimpleErrorBoundary.jsx
class SimpleErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Xatolik yuz berdi.</h1>;
    }
    return this.props.children;
  }
}`
                    },
                    {
                        title: "Qachon ishlatiladi",
                        description: "Error Boundaries asosan dinamik kontent, ma'lumotlar yuklash, forma validatsiyasi kabi holatlarda ishlatiladi",
                        code: `
// DataLoadingExample.jsx
const DataComponent = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => {
        if (!res.ok) throw new Error('Data yuklashda xatolik');
        return res.json();
      })
      .then(setData)
      .catch(error => {
        throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi');
      });
  }, []);

  return <div>{data.map(item => <div key={item.id}>{item.name}</div>)}</div>;
};

// Ishlatilishi
<ErrorBoundary>
  <DataComponent />
</ErrorBoundary>`
                    },
                    {
                        title: "Afzalliklari va kamchiliklari",
                        description: "Error Boundaries afzalliklari va kamchiliklarini ko'rsatuvchi misol",
                        code: `
// AdvantagesExample.jsx
class FeatureErrorBoundary extends React.Component {
  state = { hasError: false, errorLog: [] };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Afzallik: Xatolarni logging qilish
    this.setState(prevState => ({
      errorLog: [...prevState.errorLog, { error, errorInfo, time: new Date() }]
    }));
    
    // Afzallik: Analytics servicega yuborish
    logErrorToAnalytics(error, errorInfo);
  }

  render() {
    // Afzallik: Graceful degradation
    if (this.state.hasError) {
      return (
        <div>
          <h2>Xatolik yuz berdi</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Qayta urinish
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`
                    },
                    {
                        title: "Xatolarni ushlash mexanizmi",
                        description: "Turli xil xatolarni ushlash va qayta ishlash mexanizmlari",
                        code: `
// ErrorCatchingMechanism.jsx
class CompleteErrorBoundary extends React.Component {
  state = { 
    hasError: false,
    error: null,
    errorInfo: null
  };

  static getDerivedStateFromError(error) {
    // Render phase xatolarini ushlash
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Commit phase xatolarini ushlash
    this.setState({ errorInfo });
    
    // Xatoni serverga yuborish
    reportError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Xatolik tafsilotlari:</h2>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.errorInfo?.componentStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}`
                    },
                    {
                        title: "Production va Development farqlari",
                        description: "Production va Development muhitlaridagi farqlarni ko'rsatuvchi misol",
                        code: `
// EnvironmentAwareErrorBoundary.jsx
class EnvErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      // Development muhitida to'liq xato ma'lumotlarini ko'rsatish
      console.error('Development Error Details:', {
        error,
        errorInfo,
        componentStack: errorInfo.componentStack
      });
    } else {
      // Production muhitida faqat zarur ma'lumotlarni yuborish
      reportErrorToService({
        errorMessage: error.message,
        timestamp: new Date(),
        userAgent: navigator.userAgent
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return process.env.NODE_ENV === 'development' ? (
        <div className="dev-error">
          <h2>Development Mode Error</h2>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      ) : (
        <div className="prod-error">
          <h2>Xatolik yuz berdi</h2>
          <p>Iltimos, sahifani yangilang</p>
        </div>
      );
    }
    return this.props.children;
  }
}`
                    },
                    {
                        title: "Error Boundary cheklovlari",
                        description: "Error Boundaries cheklovlarini ko'rsatuvchi misollar",
                        code: `
// ErrorBoundaryLimitations.jsx
// 1. Event handlerlarda ishlamaydi
const EventExample = () => {
  const handleClick = () => {
    throw new Error('Event error'); // Error Boundary buni ushlay olmaydi
  };
  return <button onClick={handleClick}>Xato</button>;
};

// 2. Asinxron koddagi xatolar
const AsyncExample = () => {
  useEffect(() => {
    async function fetchData() {
      throw new Error('Async error'); // Error Boundary buni ushlay olmaydi
    }
    fetchData();
  }, []);
  return <div>Loading...</div>;
};

// 3. Server Side Rendering
const SSRExample = () => {
  if (typeof window === 'undefined') {
    throw new Error('SSR error'); // SSR paytidagi xatolar
  }
  return <div>Content</div>;
};

// To'g'ri yondashuv
const SafeComponent = () => {
  const [error, setError] = useState(null);

  // Event handlerlar uchun try-catch
  const handleClick = () => {
    try {
      // Xavfli kod
    } catch (error) {
      setError(error);
    }
  };

  // Asinxron kodlar uchun
  useEffect(() => {
    const fetchData = async () => {
      try {
        await api.getData();
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Xatolik: {error.message}</div>;
  }

  return <div>Safe Content</div>;
}`
                    }
                ]
            },
            codeExamples: {
                title: "Error Boundaries Namunalari",
                components: [
                    {
                        name: "1. Asosiy Error Boundary",
                        description: "Oddiy error boundary komponenti",
                        code: `
// BasicErrorBoundary.jsx
import React, { Component } from 'react';

class BasicErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Xatoni logging servisga yuborish
        console.error('Error caught:', error);
        console.error('Error info:', errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-container">
                    <h2>Kechirasiz, xatolik yuz berdi!</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        <summary>Xatolik tafsilotlari</summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="reset-button"
                    >
                        Qayta urinish
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}`
                    },
                    {
                        name: "2. Kengaytirilgan Error Boundary",
                        description: "Qo'shimcha funksionallikka ega error boundary",
                        code: `
// AdvancedErrorBoundary.jsx
import React, { Component } from 'react';

class AdvancedErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            errorCount: 0
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState(prevState => ({
            errorInfo,
            errorCount: prevState.errorCount + 1
        }));

        // Xatoni analitika servisga yuborish
        this.logErrorToService(error, errorInfo);
    }

    logErrorToService = (error, errorInfo) => {
        // Analytics service integration
        const errorData = {
            error: error.toString(),
            componentStack: errorInfo.componentStack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            errorCount: this.state.errorCount + 1
        };

        console.log('Sending error to service:', errorData);
        // Real service call would go here
    }

    resetErrorBoundary = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
        
        if (this.props.onReset) {
            this.props.onReset();
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="advanced-error-boundary">
                    <h2>{this.props.fallbackTitle || 'Xatolik yuz berdi!'}</h2>
                    
                    {this.props.fallbackComponent ? (
                        this.props.fallbackComponent({
                            error: this.state.error,
                            errorInfo: this.state.errorInfo,
                            resetError: this.resetErrorBoundary
                        })
                    ) : (
                        <div className="error-content">
                            <p>{this.props.fallbackMessage || 'Iltimos, sahifani qayta yuklang.'}</p>
                            
                            {this.props.showDetails && (
                                <details className="error-details">
                                    <summary>Texnik Tafsilotlar</summary>
                                    <pre>{this.state.error && this.state.error.toString()}</pre>
                                    <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                                </details>
                            )}

                            <div className="error-actions">
                                <button onClick={this.resetErrorBoundary}>
                                    Qayta urinish
                                </button>
                                <button onClick={() => window.location.reload()}>
                                    Sahifani yangilash
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}`
                    },
                    {
                        name: "3. Error Boundary Hooks",
                        description: "Error boundary bilan ishlatiladigan hooklar",
                        code: `
// useErrorBoundary.js
import { useState, useCallback } from 'react';

export function useErrorBoundary() {
    const [error, setError] = useState(null);

    const handleError = useCallback((error) => {
        setError(error);
    }, []);

    const resetError = useCallback(() => {
        setError(null);
    }, []);

    return [error, handleError, resetError];
}

// Usage Example
const ComponentWithErrorHandling = () => {
    const [error, handleError, resetError] = useErrorBoundary();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
                <button onClick={resetError}>Reset</button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => handleError(new Error('Test error'))}>
                Trigger Error
            </button>
        </div>
    );
}`
                    },
                    {
                        name: "4. Error Boundary with Retry Logic",
                        description: "Qayta urinish mantiqiga ega error boundary",
                        code: `
// RetryErrorBoundary.jsx
import React, { Component } from 'react';

class RetryErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            retryCount: 0
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        this.logError(error, errorInfo);
    }

    logError = (error, errorInfo) => {
        // Error logging logic
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }

    handleRetry = () => {
        this.setState(prevState => ({
            hasError: false,
            error: null,
            errorInfo: null,
            retryCount: prevState.retryCount + 1
        }));
    }

    render() {
        const { hasError, error, retryCount } = this.state;
        const { maxRetries = 3 } = this.props;

        if (hasError) {
            if (retryCount >= maxRetries) {
                return (
                    <div className="fatal-error">
                        <h2>Jiddiy xatolik yuz berdi</h2>
                        <p>Maksimal qayta urinishlar soni tugadi.</p>
                        <button onClick={() => window.location.reload()}>
                            Sahifani qayta yuklash
                        </button>
                    </div>
                );
            }

            return (
                <div className="retry-error">
                    <h3>Xatolik yuz berdi</h3>
                    <p>Qayta urinishlar: {retryCount + 1}/{maxRetries}</p>
                    <button onClick={this.handleRetry}>
                        Qayta urinish
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}`
                    }
                ],
                features: [
                    {
                        title: "Error Boundaries Xususiyatlari",
                        description: "Asosiy xususiyatlar va funksiyalar",
                        details: [
                            "Xatolarni ushlash",
                            "Xatolarni qayta ishlash",
                            "Fallback UI ko'rsatish",
                            "Xatolarni monitoring qilish",
                            "Recovery mexanizmlari"
                        ]
                    }
                ],
                bestPractices: {
                    title: "Error Boundaries Best Practices",
                    practices: [
                        {
                            name: "Strategik joylashuv",
                            tips: [
                                "Muhim komponentlarni o'rash",
                                "Ierarxik error handling",
                                "Granular error boundaries",
                                "Monitoring va logging",
                                "User feedback"
                            ]
                        }
                    ]
                }
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Error Boundaries Documentation",
                        url: "https://reactjs.org/docs/error-boundaries.html"
                    },
                    {
                        name: "Error Handling Patterns",
                        url: "https://kentcdodds.com/blog/use-react-error-boundary"
                    }
                ]
            }
        }
    }
];

export default dataErrorBoundaries;