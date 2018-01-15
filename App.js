import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, SectionList, ToolbarAndroid} from 'react-native';
import ListViewDemo from "./js/ListViewDemo"
import LayoutDemo from "./js/LayoutDemo"
import TouchDemo from "./js/TouchDemo"
import AndroidComponent from "./js/AndroidComponent"

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
                <Text>{display}</Text>
        );
    }
}

class DemoView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Text>Test lalalalalalalalalalalalala</Text>

            <Image source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}
        style={{width: 400, height: 200}} />

            <Blink text='Blink yoyoyoyoyoyoyo'/>
            </View>
        );
    }
}


export default class App extends React.Component {
  render() {
    return (
        <AndroidComponent/>
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
        backgroundColor: '#e9e000',
        width: 400,
        height: 56,
    },
});

