import React from 'react';
import { StatusBar as Stb,StatusBarProps, SafeAreaView } from 'react-native';

const StatusBar:React.FC<StatusBarProps> = () : JSX.Element =>{
    return (
        <SafeAreaView>
            <Stb backgroundColor={'#EE4E34'} translucent={true} barStyle='light-content' />
        </SafeAreaView>
    );
};

export default StatusBar;