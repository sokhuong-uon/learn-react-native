import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type FadeInvokerPressableProps = TouchableOpacityProps & {
	text: string;
};

export const FadeInvokerPressable: React.FC<FadeInvokerPressableProps> = (
	props
) => {
	return (
		<TouchableOpacity
			{...props}
			className="justify-center w-24 h-12 bg-black rounded-lg"
			activeOpacity={0.6}
		>
			<Text className="text-center text-white">{props.text}</Text>
		</TouchableOpacity>
	);
};
