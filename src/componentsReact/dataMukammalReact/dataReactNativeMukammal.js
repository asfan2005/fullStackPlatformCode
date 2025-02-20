const dataReactNativeMukammal = [
    {
        id: 1,
        title: "Custom Navigation Animation",
        code: `
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

function CustomNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          cardStyleInterpolator: ({ current, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height, 0],
                  }),
                },
              ],
            },
          }),
        }}
      />
    </Stack.Navigator>
  );
}`,
        description: "React Native-da maxsus navigatsiya animatsiyalarini yaratish",
        result: `{
    "feature": "Custom Navigation",
    "concepts": [
        "Stack Navigator",
        "Custom Animations",
        "Screen Transitions",
        "Gesture Handling"
    ]
}`
    },
    {
        id: 2,
        title: "Advanced Gesture Handler",
        code: `
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';

function DraggableCard() {
  const position = useSharedValue({ x: 0, y: 0 });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startPosition = position.value;
    },
    onActive: (event, ctx) => {
      position.value = {
        x: ctx.startPosition.x + event.translationX,
        y: ctx.startPosition.y + event.translationY,
      };
    },
    onEnd: () => {
      position.value = withSpring({ x: 0, y: 0 });
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: position.value.x },
      { translateY: position.value.y },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text>Drag me!</Text>
      </Animated.View>
    </PanGestureHandler>
  );
}`,
        description: "Murakkab gesture va animatsiyalarni boshqarish",
        result: `{
    "feature": "Gesture Handling",
    "concepts": [
        "Pan Gesture",
        "Animated Values",
        "Spring Animation",
        "Gesture Events"
    ]
}`
    },
    {
        id: 3,
        title: "Custom Performance Optimization",
        code: `
import { memo, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';

const MemoizedItem = memo(({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.id)}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
));

function OptimizedList({ data }) {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => a.title.localeCompare(b.title));
  }, [data]);

  const handlePress = useCallback((id) => {
    console.log('Item pressed:', id);
  }, []);

  const renderItem = useCallback(({ item }) => (
    <MemoizedItem item={item} onPress={handlePress} />
  ), [handlePress]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <FlatList
      data={sortedData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={5}
      initialNumToRender={7}
    />
  );
}`,
        description: "React Native ilovalar uchun performance optimizatsiyasi",
        result: `{
    "feature": "Performance Optimization",
    "concepts": [
        "Memoization",
        "List Optimization",
        "Render Optimization",
        "Memory Management"
    ]
}`
    },
    {
        id: 4,
        title: "Custom Hooks with Native Modules",
        code: `
import { NativeModules, NativeEventEmitter } from 'react-native';
import { useEffect, useState } from 'react';

const { CustomNativeModule } = NativeModules;
const eventEmitter = new NativeEventEmitter(CustomNativeModule);

function useNativeFeature() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscription = eventEmitter.addListener(
      'NativeEvent',
      (eventData) => {
        setData(eventData);
      }
    );

    CustomNativeModule.initialize()
      .then(() => {
        CustomNativeModule.startListening();
      })
      .catch(setError);

    return () => {
      subscription.remove();
      CustomNativeModule.stopListening();
    };
  }, []);

  const triggerNativeAction = async () => {
    try {
      await CustomNativeModule.performAction();
    } catch (err) {
      setError(err);
    }
  };

  return { data, error, triggerNativeAction };
}`,
        description: "Native modullar bilan ishlash uchun custom hooklar",
        result: `{
    "feature": "Native Module Integration",
    "concepts": [
        "Native Modules",
        "Event Emitters",
        "Custom Hooks",
        "Native Bridge"
    ]
}`
    },
    {
        id: 5,
        title: "Advanced State Management",
        code: `
import { createContext, useContext, useReducer } from 'react';
import { persist } from 'zustand/middleware';
import create from 'zustand';

const useStore = create(
  persist(
    (set) => ({
      user: null,
      theme: 'light',
      setUser: (user) => set({ user }),
      setTheme: (theme) => set({ theme }),
      reset: () => set({ user: null, theme: 'light' }),
    }),
    {
      name: 'app-storage',
      getStorage: () => AsyncStorage,
    }
  )
);

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}`,
        description: "Murakkab holatlarni boshqarish va saqlash",
        result: `{
    "feature": "State Management",
    "concepts": [
        "Context API",
        "Zustand",
        "Persistence",
        "State Reducers"
    ]
}`
    },
    {
        id: 6,
        title: "Deep Linking and Universal Links",
        code: `
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  
  config: {
    screens: {
      Home: {
        path: 'home',
        screens: {
          Feed: 'feed/:id',
          Profile: 'profile/:id',
        },
      },
      Settings: {
        path: 'settings',
        parse: {
          id: (id) => \`\${id}\`,
        },
      },
    },
  },

  async getInitialURL() {
    const url = await Linking.getInitialURL();
    if (url != null) {
      return url;
    }
    // Handle universal links here
    return null;
  },

  subscribe(listener) {
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      listener(url);
    });

    return () => {
      linkingSubscription.remove();
    };
  },
};`,
        description: "Deep linking va universal linklar bilan ishlash",
        result: `{
    "feature": "Deep Linking",
    "concepts": [
        "URL Handling",
        "Navigation Integration",
        "Universal Links",
        "Route Configuration"
    ]
}`
    },
    {
        id: 7,
        title: "Custom UI Components",
        code: `
import { Animated, PanResponder } from 'react-native';

class CustomSwipeableCard extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        this.position.setValue({ 
          x: gesture.dx,
          y: gesture.dy 
        });
      },
      onPanResponderRelease: (_, gesture) => {
        if (Math.abs(gesture.dx) > 120) {
          Animated.spring(this.position, {
            toValue: { 
              x: gesture.dx * 2,
              y: gesture.dy 
            },
            useNativeDriver: false
          }).start(this.props.onSwipeComplete);
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }).start();
        }
      }
    });
  }

  render() {
    const rotateCard = this.position.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['-30deg', '0deg', '30deg']
    });

    return (
      <Animated.View
        style={[
          styles.card,
          {
            transform: [
              { translateX: this.position.x },
              { rotate: rotateCard }
            ]
          }
        ]}
        {...this.panResponder.panHandlers}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}`,
        description: "Murakkab UI komponentlarini yaratish",
        result: `{
    "feature": "Custom Components",
    "concepts": [
        "Animated API",
        "PanResponder",
        "Gesture Handling",
        "Custom Animation"
    ]
}`
    },
    {
        id: 8,
        title: "Background Tasks and Services",
        code: `
import BackgroundService from 'react-native-background-actions';
import BackgroundFetch from 'react-native-background-fetch';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const backgroundTask = async (taskData) => {
  await new Promise(async (resolve) => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      console.log(i);
      await sleep(1000);
    }
  });
};

const options = {
  taskName: 'Background Task',
  taskTitle: 'Background Service Running',
  taskDesc: 'Performing background operations',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  parameters: {
    delay: 1000,
  },
};

// Background Service Implementation
BackgroundService.start(backgroundTask, options);

// Background Fetch Implementation
BackgroundFetch.configure({
  minimumFetchInterval: 15,
  stopOnTerminate: false,
  enableHeadless: true,
  startOnBoot: true,
}, async (taskId) => {
  console.log('[BackgroundFetch] Task:', taskId);
  await performBackgroundTask();
  BackgroundFetch.finish(taskId);
}, (error) => {
  console.log('[BackgroundFetch] Failed:', error);
});`,
        description: "Fonda ishlaydigan vazifalar va xizmatlarni boshqarish",
        result: `{
    "feature": "Background Processing",
    "concepts": [
        "Background Services",
        "Background Fetch",
        "Task Scheduling",
        "Service Management"
    ]
}`
    },
    {
        id: 9,
        title: "Advanced Network Handling",
        code: `
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

class NetworkManager {
  constructor() {
    this.queue = [];
    this.isOnline = true;
    this.setupNetworkListener();
  }

  setupNetworkListener() {
    NetInfo.addEventListener(state => {
      const wasOffline = !this.isOnline;
      this.isOnline = state.isConnected;

      if (wasOffline && this.isOnline) {
        this.processQueue();
      }
    });
  }

  async makeRequest(config) {
    if (!this.isOnline) {
      this.queue.push(config);
      throw new Error('Offline - Request queued');
    }

    try {
      const response = await axios(config);
      return response;
    } catch (error) {
      if (!error.response) {
        this.queue.push(config);
      }
      throw error;
    }
  }

  async processQueue() {
    const queue = [...this.queue];
    this.queue = [];

    for (const config of queue) {
      try {
        await this.makeRequest(config);
      } catch (error) {
        console.error('Failed to process queued request:', error);
      }
    }
  }
}`,
        description: "Tarmoq bilan ishlashning murakkab usullari",
        result: `{
    "feature": "Network Management",
    "concepts": [
        "Offline Support",
        "Request Queuing",
        "Network Monitoring",
        "Error Handling"
    ]
}`
    },
    {
        id: 10,
        title: "Platform Specific Features",
        code: `
import { Platform, PixelRatio, Dimensions } from 'react-native';

class PlatformManager {
  static isIOS = Platform.OS === 'ios';
  static isAndroid = Platform.OS === 'android';
  
  static getStatusBarHeight() {
    if (this.isIOS) {
      return this.isIPhoneX() ? 44 : 20;
    }
    return 0;
  }

  static isIPhoneX() {
    const { height, width } = Dimensions.get('window');
    return (
      this.isIOS &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (height === 780 || width === 780 || height === 812 || width === 812)
    );
  }

  static normalize(size) {
    const scale = PixelRatio.getFontScale();
    return size * scale;
  }

  static select(config) {
    return Platform.select({
      ios: config.ios,
      android: config.android,
      default: config.default
    });
  }

  static getDeviceInfo() {
    return {
      version: Platform.Version,
      isPad: Platform.isPad,
      isTVOS: Platform.isTVOS,
      brand: Platform.select({
        android: Platform.constants.Brand,
        ios: 'Apple'
      })
    };
  }
}`,
        description: "Platformga xos xususiyatlarni boshqarish",
        result: `{
    "feature": "Platform Specifics",
    "concepts": [
        "Platform Detection",
        "Device Features",
        "Responsive Design",
        "Device Metrics"
    ]
}`
    }
];

export default dataReactNativeMukammal;