import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";

const KeyboardExample = () => {
	const [keyboardStatus, setKeyboardStatus] = useState("");

	useEffect(() => {
		const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
			setKeyboardStatus("Keyboard Shown");
		});
		const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
			setKeyboardStatus("Keyboard Hidden");
		});

		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	return (
		<View className="flex p-9">
			<TextInput
				placeholder="Click here…"
				onSubmitEditing={Keyboard.dismiss}
				className="p-2 border rounded-md"
			/>
			<Text className="p-2 text-center">{keyboardStatus}</Text>
		</View>
	);
};

export default KeyboardExample;
