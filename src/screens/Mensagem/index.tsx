import React, { useEffect, useState } from "react";
import { apiMessage } from "../../services/data";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles"
import { useAuth } from "../../hook/auth";
import { IResponseMessage } from "../../services/data/Message";
export function Mensagem() {
    const [message, setMessge] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessge(response.data)
        }
        setLoading(false)
        loadMessage()
    }, [])
    interface itemMessage {
        item:IResponseMessage
    }
    const renderItem = (({ item }: itemMessage)=>{
        return(
            <View style={styles.item}>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Menssagem: {item.message}</Text>
            </View>
        )
    })
    return (
        <View style={styles.container}>
            {
                message.length > 0 && (
                    <FlatList
                        data={message}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                    />
                        
                    
                )
            }
        </View>
    )
         
}