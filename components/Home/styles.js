import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const styles = StyleSheet.create({


    mapLay:{

        width: '100%',
        height: '100%',
        alignContent: 'center',
    },
    map: {
        flex:1,
        alignContent: 'center',
        zIndex:0,
    },

    bg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        alignItems:'center'
},

roomBody:{
    width:'100%',
    height:'75%',
},

    searchContent:{
        //position:'relative',
        //zIndex:1,
        height:50,
        backgroundColor:'black',
        //border:'10px',
        borderRadius: 40,
        borderColor:'black',
        //padding:10,
        width:'100%',
        //display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        //backgroundColor:'red',


    },

    searchIcon:{
        width:'70%',
        //backgroundColor:'yellow',
        borderRadius:10,
        borderRightColor:'lightgrey',
        borderRightWidth:1,
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        padding:5
    },

    filterPicker:{
        //position:'absolute',
        //top:0,
        //right:240,
        //width:'30%',
        //height:45,
        backgroundColor:'black',
        //zIndex:2,
    },
    header:{

        backgroundColor: colors.WHITE,
        
        height:'10%',
        width:'100%'
        
    },

    title:{
        backgroundColor:colors.WHITE,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingTop:20,
        height:'10%'
        
    },

   // textInputFocused:{

     //   border:1,
       // borderColor:'darkblue',
      //  height:50,
      //  borderRadius:25,

    //},
    searchBar:{

            position: 'absolute',
            top:10,
            left:0,
            right:0,
            zIndex:1,
            backgroundColor:colors.BLACK,
            color:'white',
            width:'90%',
            height:40,
            marginTop:10,
            marginHorizontal:'5%',
            borderRadius:10,
            flexDirection:'row',
            
            alignItems: 'center',
            
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.53,
shadowRadius: 13.97,

elevation: 21,

    
        
    },

    searchInput:{ 
            backgroundColor: colors.BLACK, 
            height: 40,
            width:'90%' ,
            borderRadius:10,
            color:'white'

        },

        visableFilter:{
            marginTop:10,
            width:'100%',
            height:'5%',
            flexDirection:'row',
            justifyContent:'space-around',
            
        },

        visableFilterLine:{
            justifyContent:'center', 
            alignItems:'center',
            width:60, 
            
            
        },
        underlinerFilter:{
            justifyContent:'center', 
            alignItems:'center',
            width:60, 
            borderBottomColor:colors.MAIN_COLOR,
            borderBottomWidth:2
        },

        postcard:{
            
            width:'90%',
            height:255,
            backgroundColor:colors.WHITE,            
            marginBottom:20,


            shadowColor: colors.WHITE,
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.53,
            shadowRadius: 13.97,
            
            elevation: 21,
        },

        cardView:{
           
            width:'100%',
            alignItems:'center'
        },

        postImg:{
            width:'100%',
            height:170,
            borderRadius:10
        },

        postDetails:{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:15,
            paddingTop:5
        },

        btnC:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
            borderWidth:1,
            borderColor:'black',
            borderRadius:50,
            backgroundColor:'black',

            border: 'none',
            padding: 2,
            cursor: 'pointer'

        },



        //autocomplete
         container: {
           flex: 0,
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      zIndex: 9999,


            
    backgroundColor: "darkblue",
    //paddingTop: 60,
    //paddingBottom: 25,
    //alignItems: "center",
    //borderBottomLeftRadius: 55,
    //borderBottomRightRadius: 55,
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 1 },
    //shadowOpacity: 0.1,
    //shadowRadius: 10,
    //elevation: 5,
    //marginBottom: 50,
  },
  googlePlacesText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    height: 44,
      color: '#000',
      fontSize: 16,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
    borderRadius: 25,
   // paddingLeft: 25,
   // shadowColor: "#000",
   // shadowOffset: { width: 0, height: 1 },
   // shadowOpacity: 0.1,
   // shadowRadius: 3,
   // elevation: 2,
  },

  containerHidden:{
    display:"none"
  },

  searchHandler:{
        
        position:'absolute',
        top:30,
        borderRadius:25,
        width:'100%',
        zIndex:2000,
        backgroundColor:"white",
        opacity:0.8,

  },
  inputContainer: {
    width: "100%",
    height:90,
    marginTop:10,
    opacity:0.9,
    //color:'yellow',
    //marginTop:20,
    //backgroundColor:'green',
    zIndex:1000,
  },
  textInputFocused: {
    
    borderWidth: 1,
    //backgroundColor:'black',
    //color:'white',
    borderColor: "darkblue",
    height: 44,
    fontSize:15,
    borderRadius: 25,
    paddingLeft: 25,
    //shadowColor: "#000",
    //shadowOffset: { width: 50, height: 50 },
    //shadowOpacity: 0.1,
    //shadowRadius: 3,
    //elevation: 2,
  },

  listView: {
      backgroundColor: '#fff',
      marginTop: 10,
    },
});

export default styles;

/*display: inline-block,
            borderRadius: 7,
            border: none,
            background:rgb(70, 233, 56),
            color: white,
            fontFamily: inherit,
            textAlign: center,
            fontSize: 13,
            //boxShadow: (0, 14, 56, -11)rgb(24, 255, 93),
            width: 10,
            padding: 1,
            transition: 'all 0.4s',
            cursor:pointer*/