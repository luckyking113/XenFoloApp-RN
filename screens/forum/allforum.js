/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View,StyleSheet,Image,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownItem from 'react-native-drop-down-item';

class AllForum extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}> 
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardPostHeader}>
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
                <Text style={{fontSize:18, opacity:0.5}}>3 hours ago</Text>
              </View>            
            </View>
          </Card>
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
                <Text style={{fontSize:18, opacity:0.5}}>3 hours ago</Text>
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

            <DropDownItem                  
              style={styles.dropDownItem}
              contentVisible={false}          
              header={
                <View style={styles.cardViewDetalFooter}>
                  <View style={styles.viewMore}>                
                    <Text style={styles.viewmoreDetail}>View More Detail</Text>
                  </View>
                  <View style={styles.viewicon}>                
                    <Icon name="keyboard-arrow-down" size={18} style={{color: '#000000', opacity:0.5, marginTop:0}} />                
                  </View> 
                </View>
              }
            >
              <View style={styles.viewDetailContainer}>
                <View style={styles.viewDetailHeader}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                  <View style={{flexDirection:'row', marginLeft:20,textAlign:'left'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Forum Title</Text>
                    <Text style={{fontSize:16, opacity:0.5, marginLeft:20}}>2 hours ago</Text>
                  </View>  
                </View>
                <Text style={styles.viewDetailBody}>
                    lerum Parum lerum Parum lerum Parum lerum Parum lerum Parum            
                </Text>
                <View style={styles.viewDetailSubScribe}>
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

              <View style={styles.viewDetailContainer}>
                <View style={styles.viewDetailHeader}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                  <View style={{flexDirection:'row', marginLeft:20,textAlign:'left'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Forum Title</Text>
                    <Text style={{fontSize:16, opacity:0.5, marginLeft:20}}>2 hours ago</Text>
                  </View>  
                </View>
                <Text style={styles.viewDetailBody}>
                    lerum Parum lerum Parum lerum Parum lerum Parum lerum Parum            
                </Text>
                <View style={styles.viewDetailSubScribe}>
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
            </DropDownItem>            
          </Card>      

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
                <Text style={{fontSize:18, opacity:0.5}}>3 hours ago</Text>
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

            <DropDownItem                  
              style={styles.dropDownItem}
              contentVisible={false}          
              header={
                <View style={styles.cardViewDetalFooter}>
                  <View style={styles.viewMore}>                
                    <Text style={styles.viewmoreDetail}>View More Detail</Text>
                  </View>
                  <View style={styles.viewicon}>                
                    <Icon name="keyboard-arrow-down" size={18} style={{color: '#000000', opacity:0.5, marginTop:0}} />                
                  </View> 
                </View>
              }
            >
              <View style={styles.viewDetailContainer}>
                <View style={styles.viewDetailHeader}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                  <View style={{flexDirection:'row', marginLeft:20,textAlign:'left'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Forum Title</Text>
                    <Text style={{fontSize:16, opacity:0.5, marginLeft:20}}>2 hours ago</Text>
                  </View>  
                </View>
                <Text style={styles.viewDetailBody}>
                    lerum Parum lerum Parum lerum Parum lerum Parum lerum Parum            
                </Text>
                <View style={styles.viewDetailSubScribe}>
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

              <View style={styles.viewDetailContainer}>
                <View style={styles.viewDetailHeader}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                  <View style={{flexDirection:'row', marginLeft:20,textAlign:'left'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Forum Title</Text>
                    <Text style={{fontSize:16, opacity:0.5, marginLeft:20}}>2 hours ago</Text>
                  </View>  
                </View>
                <Text style={styles.viewDetailBody}>
                    lerum Parum lerum Parum lerum Parum lerum Parum lerum Parum            
                </Text>
                <View style={styles.viewDetailSubScribe}>
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

              <View style={styles.viewDetailContainer}>
                <View style={styles.viewDetailHeader}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                  <View style={{flexDirection:'row', marginLeft:20,textAlign:'left'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Forum Title</Text>
                    <Text style={{fontSize:16, opacity:0.5, marginLeft:20}}>2 hours ago</Text>
                  </View>  
                </View>
                <Text style={styles.viewDetailBody}>
                    lerum Parum lerum Parum lerum Parum lerum Parum lerum Parum            
                </Text>
                <View style={styles.viewDetailSubScribe}>
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
            </DropDownItem>            
          </Card>     
        </ScrollView>
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
    marginBottom:10,
  },

  cardPostHeader:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'#ffffff',
    padding: 8
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
  },
  cardViewDetalFooter:{    
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'#f5f5ed',
    padding: 8,
    justifyContent:'space-between'
  },
  viewMore:{
    textAlign:'center',
    alignItems:'center',
  },
  viewmoreDetail:{
    fontSize: 13,
    fontWeight: '100',
    textAlign: 'center',    
    opacity:0.5,
    marginLeft:3
  },
  viewDetailContainer:{
    flex:1,    
    backgroundColor:'#ffffff',
    width:'100%',
    textAlign:'left',
  },
  viewDetailHeader:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',     
  },
  viewDetailBody: {
    // margin: 5,
    fontSize: 16,
    fontWeight: '100',
    textAlign: 'left',   
    opacity:0.5,
    marginLeft:45        
  },
  viewDetailSubScribe:{
    flexDirection:'row',
    alignSelf:'flex-end',
    marginTop:5,
  },
})
