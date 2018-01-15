import React from 'react'
import {
    StyleSheet,
    View,
    Button,
    Alert,

} from 'react-native'

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

export default class TouchDemo extends React.Component {
    render() {
        return (
            <View style={styles.container}> 
                <Button
                    onPress={onButtonPress}
                    title="This looks great!"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 100,
        marginTop: 100,
        marginRight: 100,
    } 
});
