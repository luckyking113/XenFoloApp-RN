/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {  
  StyleSheet,  
  View,
  Text,
  StatusBar,
  TouchableOpacity  
} from 'react-native';

export default class Login extends Component {
	render(){
		return (
			<View style={styles.container}>
				<StatusBar 
					backgroundColor="blue"
					barStyle="light-content"
				/>
				<Text style={{color:'white', fontSize:18}}>Login Screen</Text>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
	    );
	}  
};

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#455a64',
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	buttonText: {
		fontSize:16,
		fontWeight:'500',
		color:'white',
		textAlign:'center',
	},
	button:{
		backgroundColor:'#1c313a',
		borderRadius:25,
		marginVertical:10,		
		paddingVertical:16,
		width:200
	}
});
