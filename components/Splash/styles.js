import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const styles= StyleSheet.create({

    bgImg:{
            width:'100%',
            height:'100%',
            resizeMode:'cover',
            justifyContent: 'space-between',
            alignItems:'center'
    },
    title:{
        fontSize:60,
        color: colors.WHITE,
        fontFamily: 'sans-serif-light',
        marginLeft:25,
         
    },

    button:{
        backgroundColor: colors.MAIN_COLOR,
        width:300,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
        
    },

    btnText:{
        color:colors.WHITE,
        fontSize:15,
    },
    searchbtnLogo:{
        flex:1,
        marginBottom:150,
        alignItems:'center',
        justifyContent:'flex-end'
    },

    searchbar:{
        backgroundColor:colors.WHITE,
        width:'90%',
        height:40,
        marginTop:30,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'

    }
});

export default styles;