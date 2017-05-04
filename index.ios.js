/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Button,
	Alert,
    TextInput,
    Dimensions,
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

const onButtonPress = () => {
	Alert.alert('Button has been pressed!');
};

var {height, width} = Dimensions.get('window');



class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { width: width/2 };
        Dimensions.addEventListener('change', (size) => this.setState({ width: size.window.width/2 }));
    }
	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to my{'\n'}
					first React Native app!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
				<Button
					onPress={() => navigate('Second')}
					title="Press Me"
				/>
                <TextInput
                    style={[styles.text, {width: this.state.width}]}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Enter Text"
                />
			</View>
		);
	}
}

class SecondScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to my{'\n'}
					Second React Native app!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
				<Button
					onPress={() => navigate('SecondScreen')}
					title="Press Me"
				/>
			</View>
		);
	}
}

const AwesomeProject = StackNavigator({
	Home: { screen: MainScreen },
	Second: {screen: SecondScreen },
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#FF0000',
		// flex: 3
	},
	instructions: {
		textAlign: 'center',
		marginBottom: 5,
		color: 'green',
	},
	text: {
	    height: 40,
        alignSelf: 'center',
        // flex: 1,
        // flexDirection: 'column',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,

    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
