/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AllForum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
              }}
              style={{
                width: 45,
                height: 45,
              }}
            />
            <View style={{flexDirection:'column', marginLeft:20,textAlign:'left'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Forum Title</Text>
              <Text style={{fontSize:18, opacity:0.5}}>Post Date</Text>
            </View>            
          </View>
          <Text style={styles.cardBoody}>
            lerum Parum lerum Parum lerum Parum lerum Parum lerum Parum            
          </Text>
          <View style={styles.cardFooter}>
              <View style={styles.replyview}>
                <Icon name="reply" size={25} style={{color: '#000000', opacity:0.5,marginTop:-5}} />
                <Text style={styles.cardFooterTxt}>7 Replies</Text>
              </View>
              <View style={styles.subScribe}>
                <View style={styles.like}>                  
                    <Icon name="thumb-up" size={18} style={{color: '#000000', opacity:0.5, marginTop:0}} />
                    <Text style={styles.cardFooterTxt}>1</Text>                  
                </View>
                <View style={styles.unlike}>
                  <Icon name="thumb-down" size={18} style={{color: '#000000', opacity:0.5, marginTop:0}} />
                  <Text style={styles.cardFooterTxt}>12</Text>
                </View>                
              </View>
          </View>
        </Card>
      </View>
    );
  }
}

export default AllForum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',    
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: 15
  },
  cardContainer:{
    padding: 0, 
    margin:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'#e8e8df',
    padding: 8
  },
  cardBoody: {
    // margin: 5,
    fontSize: 16,
    fontWeight: '100',
    textAlign: 'left',
    padding: 10,
    opacity:0.5,
  },
  cardFooter:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'#e8e8df',
    padding: 8,
    justifyContent:'space-between'
  },
  cardFooterTxt:{
    fontSize: 13,
    fontWeight: '100',
    textAlign: 'left',    
    opacity:0.5,
    marginLeft:3
  },
  replyview:{
    flexDirection:'row'
  },
  subScribe:{
    flexDirection:'row'
  },
  like:{
    flexDirection:'row'
  },
  unlike:{
    flexDirection:'row',
    marginLeft:15
  }

})
