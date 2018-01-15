import React from 'react';
import {
    StyleSheet,
    View,
    ToolbarAndroid,
    CheckBox,
    Button,
} from 'react-native';

class ToolBarDemo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title="Title"
                />
            </View>
        );
    }
}

export default class AndroidComponent extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                <CheckBox/>
                <CheckBox/>
                <CheckBox/>
                <CheckBox/>
                <CheckBox/>
                <Button title="lalala"/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolbar: {
        backgroundColor: '#e9eeee',
        width: 400,
        height: 56,
    },
});
