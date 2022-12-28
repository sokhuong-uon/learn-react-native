import { useRef } from "react";
import { Animated } from "react-native";

export const useFadeAnimation = () => {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const scaleAnim = useRef(new Animated.Value(0)).current;
	const positionAnim = useRef(new Animated.Value(-150)).current;

	const animateInView = () => {
		Animated.spring(fadeAnim, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
		Animated.spring(scaleAnim, {
			toValue: 1,
			useNativeDriver: true,
		}).start();

		Animated.spring(positionAnim, {
			toValue: 0,
			useNativeDriver: true,
		}).start();
	};

	const animateOutView = () => {
		Animated.spring(fadeAnim, {
			toValue: 0,
			useNativeDriver: true,
		}).start();
		Animated.spring(scaleAnim, {
			toValue: 0,
			useNativeDriver: true,
		}).start();

		Animated.spring(positionAnim, {
			toValue: -150,
			useNativeDriver: true,
		}).start();
	};

	return {
		animateInView,
		animateOutView,
		fadeAnim,
		positionAnim,
		scaleAnim,
	};
};
