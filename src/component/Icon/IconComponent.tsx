import React from 'react';
import { View } from 'react-native';
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";


const IconComponent = ({ iconType, iconName, size, color }: any) => {
    // Map the iconType to the appropriate icon library
    const IconMap: any = {
        'FontAwesome6': FontAwesome6,
    };

    const Icon = IconMap[iconType];

    if (Icon) {
        return <Icon name={iconName} size={size} color={color} />;
    } else {
        // You might want to render a default icon or a placeholder view here
        return <View />;
    }
};

export default React.memo(IconComponent);