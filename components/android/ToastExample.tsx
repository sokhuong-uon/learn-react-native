import React from "react";
import {
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	ToastAndroid,
	View,
} from "react-native";

const ToastExample = () => {
	const showToast = () => {
		ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
	};

	const showToastWithGravity = () => {
		ToastAndroid.showWithGravity(
			"All Your Base Are Belong To Us",
			ToastAndroid.SHORT,
			ToastAndroid.CENTER
		);
	};

	const showToastWithGravityAndOffset = () => {
		ToastAndroid.showWithGravityAndOffset(
			"A wild toast appeared!",
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM,
			25,
			50
		);
	};

	return (
		<View
			style={styles.container}
			className="relative flex items-center justify-center w-full h-full my-2"
		>
			<Pressable
				onPress={() => showToast()}
				className="relative w-56 my-2 rounded-lg shadow-md bg-black/80 shadow-black"
			>
				<Text className="p-2 text-center text-white">Toggle Toast</Text>
			</Pressable>

			<Pressable
				onPress={() => showToastWithGravity()}
				className="w-56 my-2 rounded-lg shadow-md bg-black/80 shadow-black"
			>
				<Text className="p-2 text-center text-white">
					Toggle Toast with Gravity
				</Text>
			</Pressable>

			<Pressable
				onPress={() => showToastWithGravityAndOffset()}
				className="w-56 my-2 rounded-lg shadow-md shadow-black bg-black/80"
			>
				<Text className="p-2 text-center text-white">
					Toggle Toast With Gravity & Offset
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
	},
});

export default ToastExample;
