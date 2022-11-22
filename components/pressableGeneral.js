import { Pressable } from "react-native";
export default function PressableGeneral({ onPress, style, ...rest }) {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    ...style,
                    borderRadius: 5,
                    backgroundColor: pressed ? "rgba(0, 90, 187, 0.1)" : undefined,
                }
            ]}
            onPress={onPress}
            {...rest}
        />
    )
}