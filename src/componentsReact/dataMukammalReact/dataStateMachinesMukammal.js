const dataStateMachinesMukammal = [
    {
        id: 1,
        title: "Simple XState Toggle Machine",
        code: `
import { createMachine, interpret } from 'xstate';

const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { TOGGLE: 'active' }
        },
        active: {
            on: { TOGGLE: 'inactive' }
        }
    }
});

function ToggleComponent() {
    const [state, send] = useMachine(toggleMachine);

    return (
        <button onClick={() => send('TOGGLE')}>
            {state.value === 'inactive' ? 'Off' : 'On'}
        </button>
    );
}`,
        description: "XState da oddiy toggle state machine yaratish va ishlatish",
        result: `{
    "demo": "https://codesandbox.io/s/xstate-toggle",
    "output": {
        "states": ["inactive", "active"],
        "events": ["TOGGLE"]
    }
}`
    },
    {
        id: 2,
        title: "Traffic Light State Machine",
        code: `
import { createMachine, assign } from 'xstate';

const trafficLightMachine = createMachine({
    id: 'trafficLight',
    initial: 'red',
    context: {
        countdown: 0
    },
    states: {
        red: {
            entry: assign({ countdown: 30 }),
            after: {
                30000: 'green'
            }
        },
        yellow: {
            entry: assign({ countdown: 5 }),
            after: {
                5000: 'red'
            }
        },
        green: {
            entry: assign({ countdown: 20 }),
            after: {
                20000: 'yellow'
            }
        }
    }
});

function TrafficLight() {
    const [state] = useMachine(trafficLightMachine);
    
    return (
        <div className="traffic-light">
            <div className={\`light \${state.value === 'red' ? 'active' : ''}\`} />
            <div className={\`light \${state.value === 'yellow' ? 'active' : ''}\`} />
            <div className={\`light \${state.value === 'green' ? 'active' : ''}\`} />
            <div>Countdown: {state.context.countdown}</div>
        </div>
    );
}`,
        description: "Svetofor logikasini XState yordamida implementatsiya qilish",
        result: `{
    "demo": "https://codesandbox.io/s/traffic-light-xstate",
    "output": {
        "states": ["red", "yellow", "green"],
        "features": ["Automatic Transitions", "Context", "Timers"]
    }
}`
    },
    {
        id: 3,
        title: "Form Wizard State Machine",
        code: `
import { createMachine } from 'xstate';

const formWizardMachine = createMachine({
    id: 'formWizard',
    initial: 'personal',
    context: {
        formData: {}
    },
    states: {
        personal: {
            on: {
                NEXT: {
                    target: 'address',
                    guard: 'isPersonalValid'
                }
            }
        },
        address: {
            on: {
                PREV: 'personal',
                NEXT: {
                    target: 'review',
                    guard: 'isAddressValid'
                }
            }
        },
        review: {
            on: {
                PREV: 'address',
                SUBMIT: {
                    target: 'success',
                    guard: 'isFormValid'
                }
            }
        },
        success: {
            type: 'final'
        }
    }
});

function FormWizard() {
    const [state, send] = useMachine(formWizardMachine);

    return (
        <div className="wizard">
            {state.value === 'personal' && <PersonalForm onNext={() => send('NEXT')} />}
            {state.value === 'address' && (
                <AddressForm 
                    onNext={() => send('NEXT')}
                    onPrev={() => send('PREV')}
                />
            )}
            {state.value === 'review' && (
                <ReviewForm 
                    onSubmit={() => send('SUBMIT')}
                    onPrev={() => send('PREV')}
                />
            )}
            {state.value === 'success' && <SuccessMessage />}
        </div>
    );
}`,
        description: "Ko'p qadamli forma logikasini XState bilan boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/form-wizard-xstate",
    "output": {
        "states": ["personal", "address", "review", "success"],
        "features": ["Guards", "Multi-step Flow", "Form Validation"]
    }
}`
    },
    {
        id: 4,
        title: "Authentication State Machine",
        code: `
import { createMachine, assign } from 'xstate';

const authMachine = createMachine({
    id: 'auth',
    initial: 'idle',
    context: {
        user: null,
        error: null
    },
    states: {
        idle: {
            on: {
                LOGIN: 'loading'
            }
        },
        loading: {
            invoke: {
                src: 'loginService',
                onDone: {
                    target: 'authenticated',
                    actions: assign({
                        user: (_, event) => event.data,
                        error: null
                    })
                },
                onError: {
                    target: 'error',
                    actions: assign({
                        error: (_, event) => event.data,
                        user: null
                    })
                }
            }
        },
        authenticated: {
            on: {
                LOGOUT: {
                    target: 'idle',
                    actions: assign({
                        user: null,
                        error: null
                    })
                }
            }
        },
        error: {
            on: {
                RETRY: 'loading'
            }
        }
    }
});

function AuthComponent() {
    const [state, send] = useMachine(authMachine, {
        services: {
            loginService: async (context, event) => {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    body: JSON.stringify(event.data)
                });
                return response.json();
            }
        }
    });

    return (
        <div>
            {state.value === 'idle' && <LoginForm onSubmit={data => send('LOGIN', { data })} />}
            {state.value === 'loading' && <LoadingSpinner />}
            {state.value === 'authenticated' && (
                <UserDashboard user={state.context.user} onLogout={() => send('LOGOUT')} />
            )}
            {state.value === 'error' && (
                <ErrorMessage 
                    error={state.context.error}
                    onRetry={() => send('RETRY')}
                />
            )}
        </div>
    );
}`,
        description: "Autentifikatsiya logikasini XState yordamida boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/auth-xstate",
    "output": {
        "states": ["idle", "loading", "authenticated", "error"],
        "features": ["Async Services", "Error Handling", "Context Management"]
    }
}`
    },
    {
        id: 5,
        title: "Shopping Cart State Machine",
        code: `
import { createMachine, assign } from 'xstate';

const cartMachine = createMachine({
    id: 'cart',
    initial: 'browsing',
    context: {
        items: [],
        total: 0
    },
    states: {
        browsing: {
            on: {
                ADD_ITEM: {
                    actions: assign({
                        items: (context, event) => [...context.items, event.item],
                        total: (context, event) => context.total + event.item.price
                    })
                },
                CHECKOUT: {
                    target: 'checkout',
                    guard: 'hasItems'
                }
            }
        },
        checkout: {
            on: {
                SUBMIT: 'processing',
                CANCEL: 'browsing'
            }
        },
        processing: {
            invoke: {
                src: 'processPayment',
                onDone: 'success',
                onError: 'error'
            }
        },
        success: {
            type: 'final'
        },
        error: {
            on: {
                RETRY: 'processing',
                CANCEL: 'browsing'
            }
        }
    }
});`,
        description: "Xarid savatchasi logikasini XState bilan boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/cart-xstate",
    "output": {
        "states": ["browsing", "checkout", "processing", "success", "error"],
        "features": ["Context Management", "Guards", "Payment Processing"]
    }
}`
    },
    {
        id: 6,
        title: "Video Player State Machine",
        code: `
import { createMachine } from 'xstate';

const videoPlayerMachine = createMachine({
    id: 'videoPlayer',
    initial: 'loading',
    states: {
        loading: {
            on: {
                LOADED: 'ready',
                ERROR: 'error'
            }
        },
        ready: {
            initial: 'paused',
            states: {
                playing: {
                    on: {
                        PAUSE: 'paused',
                        END: 'ended',
                        BUFFER: 'buffering'
                    }
                },
                paused: {
                    on: {
                        PLAY: 'playing'
                    }
                },
                buffering: {
                    on: {
                        BUFFER_END: 'playing'
                    }
                },
                ended: {
                    on: {
                        REPLAY: 'playing'
                    }
                }
            }
        },
        error: {
            on: {
                RETRY: 'loading'
            }
        }
    }
});`,
        description: "Video player holatlarini XState yordamida boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/video-player-xstate",
    "output": {
        "states": ["loading", "ready", "error", "playing", "paused", "buffering", "ended"],
        "features": ["Nested States", "Media Controls", "Error Handling"]
    }
}`
    },
    {
        id: 7,
        title: "Game State Machine",
        code: `
import { createMachine, assign } from 'xstate';

const gameMachine = createMachine({
    id: 'game',
    initial: 'menu',
    context: {
        score: 0,
        highScore: 0,
        lives: 3
    },
    states: {
        menu: {
            on: {
                START: 'playing'
            }
        },
        playing: {
            entry: assign({
                score: 0,
                lives: 3
            }),
            on: {
                SCORE: {
                    actions: assign({
                        score: (context) => context.score + 10
                    })
                },
                LOSE_LIFE: {
                    actions: assign({
                        lives: (context) => context.lives - 1
                    }),
                    target: 'gameOver',
                    guard: (context) => context.lives <= 1
                },
                PAUSE: 'paused'
            }
        },
        paused: {
            on: {
                RESUME: 'playing',
                QUIT: 'menu'
            }
        },
        gameOver: {
            entry: assign({
                highScore: (context) => 
                    context.score > context.highScore ? context.score : context.highScore
            }),
            on: {
                RESTART: 'playing',
                MENU: 'menu'
            }
        }
    }
});`,
        description: "O'yin logikasini XState yordamida boshqarish",
        result: `{
    "demo": "https://codesandbox.io/s/game-xstate",
    "output": {
        "states": ["menu", "playing", "paused", "gameOver"],
        "features": ["Score Tracking", "Lives System", "High Score"]
    }
}`
    }
];

export default dataStateMachinesMukammal;