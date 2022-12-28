import React, { useRef } from "react";
import {
	Animated,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	useWindowDimensions,
	View,
} from "react-native";

const images = [
	"https://images.unsplash.com/photo-1556740749-887f6717d7e4",
	"https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
	"https://images.unsplash.com/photo-1616044543567-a31e09b178ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
	"https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
	"https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
];

export const CarouselAnimation = () => {
	const scrollX = useRef(new Animated.Value(0)).current;

	const { width: windowWidth } = useWindowDimensions();

	return (
		<SafeAreaView className="flex items-center justify-center w-screen h-screen">
			<View className="items-center justify-center h-80">
				<ScrollView
					horizontal={true}
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: {
										x: scrollX,
									},
								},
							},
						],
						{
							useNativeDriver: false,
						}
					)}
					scrollEventThrottle={1}
				>
					{images.map((image, imageIndex) => {
						return (
							<View
								style={{ width: windowWidth, height: 250 }}
								key={imageIndex}
							>
								<ImageBackground
									source={{ uri: image }}
									className="flex items-center justify-center object-cover h-64 mx-4 my-1 overflow-hidden rounded-md w-12/12"
								></ImageBackground>
							</View>
						);
					})}
				</ScrollView>

				<View className="flex-row items-center justify-center">
					{images.map((_, imageIndex) => {
						const width = scrollX.interpolate({
							inputRange: [
								windowWidth * (imageIndex - 1),
								windowWidth * imageIndex,
								windowWidth * (imageIndex + 1),
							],
							outputRange: [8, 16, 8],
							extrapolate: "clamp",
						});
						return (
							<Animated.View
								key={imageIndex}
								style={[{ width }]}
								className="w-2 h-2 mx-1 rounded bg-zinc-400 "
							/>
						);
					})}
				</View>
			</View>
		</SafeAreaView>
	);
};
