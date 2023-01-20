import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const styles = StyleSheet.create({

    bg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        alignItems:'center'
},

    header:{

        backgroundColor: colors.WHITE,
        paddingLeft:10,
        height:100,
        width:'100%'
        
    },

    title:{
        backgroundColor:colors.WHITE,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingTop:20,
        
    },
    searchBar:{

            backgroundColor:colors.WHITE,
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
            backgroundColor: colors.WHITE, 
            height: 40,
            width:'90%' ,
            borderRadius:10,

        },

        visableFilter:{
            marginTop:40,
            width:'100%',
            height:30,
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
            width:80,
            borderWidth:1,
            borderColor:'black',
            borderRadius:10,
            backgroundColor:'black'
            

        }
});

export default styles;