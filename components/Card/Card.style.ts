import { StyleSheet} from "react-native"

export const style = StyleSheet.create({
    card:{
        backgroundColor:"white",
        height:100,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        borderRadius:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,

    },
    text:{
        fontSize:25
    },
    img:{
        width:20,
        height:20
    }
})