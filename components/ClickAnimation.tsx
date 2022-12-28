import React from "react";
import { Animated, SafeAreaView, Text, View } from "react-native";
import { useFadeAnimation } from "../hooks/useFadeAnimation";
import { FadeInvokerPressable } from "./FadeInvokerPressable";

const ClickAnimation: React.FC = () => {
	const { animateInView, animateOutView, fadeAnim, positionAnim, scaleAnim } =
		useFadeAnimation();

	return (
		<SafeAreaView className="flex items-center justify-center flex-1">
			<Animated.View
				className={"  justify-center bg-black rounded-full w-32 h-32"}
				style={{
					opacity: fadeAnim,
					transform: [{ scale: scaleAnim }, { translateY: positionAnim }],
				}}
			>
				<Text className="text-2xl text-center text-teal-100">Fade</Text>
			</Animated.View>

			<View className="flex flex-row my-8 gap-x-2">
				<FadeInvokerPressable text="Fade In" onPress={animateInView} />
				<FadeInvokerPressable text="Fade Out" onPress={animateOutView} />
			</View>
		</SafeAreaView>
	);
};

export { ClickAnimation };
