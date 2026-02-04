import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    SafeAreaView,
} from 'react-native';

// Simple Typing Animation Component
const TypingAnimation = ({ text, speed = 30 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const cursorOpacity = useRef(new Animated.Value(1)).current;

    // Cursor blinking animation
    useEffect(() => {
        const blinkAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(cursorOpacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(cursorOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        );
        blinkAnimation.start();

        return () => blinkAnimation.stop();
    }, []);

    // Character-by-character typing effect
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {displayedText}
                {currentIndex < text.length && (
                    <Animated.Text style={[styles.cursor, { opacity: cursorOpacity }]}>
                        ▋
                    </Animated.Text>
                )}
            </Text>
        </View>
    );
};

// Demo App
export default function App() {
    const staticText = "Hello! This is a ChatGPT-style typing animation built with React Native's Animated API. Watch as the text appears character by character with a smooth, natural typing effect.";

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Typing Animation Demo</Text>
                <TypingAnimation text={staticText} speed={30} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    textContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 18,
        lineHeight: 26,
        color: '#2d3748',
    },
    cursor: {
        color: '#10a37f',
        fontWeight: 'bold',
        fontSize: 20,
    },
});