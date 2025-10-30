import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CounterProps = {
    initialValue?: number;
};

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [count, setCount] = React.useState(initialValue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    const isAtZero = count === 0;

    const counterStyle = {
        fontSize: 100,
        color: isAtZero ? '#6d7074ff' : count > 0 ? '#10B981' : '#EF4444',

    } as const;

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.subtitle}>Presiona los botones para cambiar el valor</Text>

            <View style={styles.counterContainer}>
                <Text style={counterStyle}>{count}</Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[styles.button, styles.incrementButton]}
                    onPress={increment}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.decrementButton]}
                    onPress={decrement}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[ styles.resetButton, isAtZero && styles.disabledButton]}
                onPress={reset}
                disabled={isAtZero}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3c4560',
        marginTop: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#3c4560',
        marginBottom: 24,
        textAlign: 'center',
    },
    counterContainer: {
        marginBottom: 24,
        minHeight: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRow: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
    },
    button: {
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    incrementButton: {
        backgroundColor: '#10B981',
    },
    decrementButton: {
        backgroundColor: '#EF4444',
    },
    resetButton: {
        backgroundColor: '#6d7074ff',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 32,
    },
    disabledButton: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
    },
});

export default Counter;