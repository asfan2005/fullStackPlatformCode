const dataReactMobileOrta = [
    {
        id: 1,
        title: "React Mobile Development",
        description: "React Native va React Mobile ilovalarni yaratish bo'yicha to'liq ma'lumot",
        image: "https://www.etelligens.com/wp-content/uploads/2020/12/React-Native-App-Development-Boosts-Mobile-Applications.webp",
        mainTopics: {
            introduction: {
                title: "React Mobile Asoslari",
                points: [
                    "React Native frameworki",
                    "Mobile UI komponentlari",
                    "Mobile navigatsiya",
                    "Native API bilan ishlash",
                    "Mobile state management",
                    "Mobile performance"
                ],
                examples: [
                    {
                        title: "Basic Mobile App",
                        description: "Asosiy mobile app strukturasi",
                        code: `
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BasicMobileApp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mobile App Demo</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default BasicMobileApp;`
                    },
                    {
                        title: "Mobile Navigation",
                        description: "React Navigation bilan ishlash",
                        code: `
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
    <View style={styles.screen}>
        <Text>Home Screen</Text>
        <Button 
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
    </View>
);

const DetailsScreen = () => (
    <View style={styles.screen}>
        <Text>Details Screen</Text>
    </View>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};`
                    }
                ]
            },
            mobileComponents: {
                title: "Mobile Komponentlar",
                components: [
                    {
                        name: "Mobile UI Elements",
                        description: "Asosiy mobile UI elementlari",
                        code: `
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

const MobileUIDemo = () => {
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: 'https://example.com/image.jpg' }}
                style={styles.image}
            />
            
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
};`
                    },
                    {
                        name: "Mobile Forms",
                        description: "Mobile formalar yaratish",
                        code: `
import { TextInput, Switch, KeyboardAvoidingView } from 'react-native';

const MobileForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        notifications: false
    });

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TextInput
                style={styles.input}
                value={formData.username}
                onChangeText={(text) => setFormData({...formData, username: text})}
                placeholder="Username"
            />
            
            <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
                placeholder="Email"
                keyboardType="email-address"
            />
            
            <View style={styles.switchContainer}>
                <Text>Enable Notifications</Text>
                <Switch
                    value={formData.notifications}
                    onValueChange={(value) => 
                        setFormData({...formData, notifications: value})
                    }
                />
            </View>
        </KeyboardAvoidingView>
    );
};`
                    }
                ]
            },
            nativeFeatures: {
                title: "Native Xususiyatlar",
                features: [
                    {
                        name: "Camera Access",
                        description: "Kameradan foydalanish",
                        code: `
import { Camera } from 'expo-camera';

const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) return <View />;
    if (hasPermission === false) return <Text>No camera access</Text>;

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <TouchableOpacity
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
            </Camera>
        </View>
    );
};`
                    }
                ]
            },
            bestPractices: {
                title: "Eng Yaxshi Amaliyotlar",
                practices: [
                    {
                        name: "Performance Optimization",
                        tips: [
                            "useCallback va useMemo dan foydalanish",
                            "Image keshirlash",
                            "FlatList optimizatsiyasi",
                            "Memory leak oldini olish"
                        ]
                    },
                    {
                        name: "UI/UX Guidelines",
                        tips: [
                            "Platform-specific UI",
                            "Gesture handling",
                            "Responsive design",
                            "Loading states"
                        ]
                    }
                ]
            },
            additionalResources: {
                title: "Qo'shimcha Materiallar",
                links: [
                    {
                        name: "React Native Documentation",
                        url: "https://reactnative.dev/"
                    },
                    {
                        name: "Expo Documentation",
                        url: "https://docs.expo.dev/"
                    },
                    {
                        name: "React Navigation",
                        url: "https://reactnavigation.org/"
                    }
                ]
            }
        }
    }
];

export default dataReactMobileOrta;