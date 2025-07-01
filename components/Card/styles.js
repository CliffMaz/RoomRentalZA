import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors";

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({


    card_img:{
        width:deviceWidth,
        height:400,
        borderBottomLeftRadius:40,
        
    },

    info_card:{
        paddingLeft:20
    },

    info:{
        fontSize:20,
        fontWeight:'100',
        color: colors.MAIN_COLOR
    },
    info_head:{
        flexDirection:'row',
        justifyContent:"space-between"
    },

    info_head_price:{
        width:'25%',
        backgroundColor: colors.MAIN_COLOR,
        marginTop:10,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    },

    info_main:{
        flexDirection:'row',
        alignItems:'center'
    },

    info_text:{
        fontSize:16,
    },

    owner_container:{

        width:'90%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        marginTop:4,
        borderBottomColor: colors.LIGHT_GREY,
        borderBottomWidth:1,
        borderTopColor: colors.LIGHT_GREY,
        borderTopWidth:1
        
    },

    owner_pic:{
        width:50,
        height:50,
        borderRadius:50,
    },

    dots:{
        height:10,
        width:10,
        backgroundColor:colors.MAIN_COLOR,
        margin:5,
        borderRadius:50
    }

});

export default styles;