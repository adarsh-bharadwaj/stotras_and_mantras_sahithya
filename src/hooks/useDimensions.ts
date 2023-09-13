import { useWindowDimensions } from "react-native";

interface Dimensions {
    widthCalc: (percentage: number) => number;
    heightCalc: (percentage: number) => number;
    dimensionCalc: (percentage: number) => number;
    isPotrait: boolean;
    height: number;
    width: number;
}

export const useDimensions = (): Dimensions => {
    const windowDimensions = useWindowDimensions();

    const widthCalc = (percentage: number): number => {
        return (percentage / 100) * windowDimensions.width;
    };

    const heightCalc = (percentage: number): number => {
        return (percentage / 100) * windowDimensions.height;
    };

    const dimensionCalc = (percentage: number): number => {
        return (percentage / 100) * (windowDimensions.height * windowDimensions.width);
    };

    return {
        widthCalc,
        heightCalc,
        dimensionCalc,
        isPotrait: windowDimensions.height > windowDimensions.width,
        height: windowDimensions.height,
        width: windowDimensions.width,
    };
};