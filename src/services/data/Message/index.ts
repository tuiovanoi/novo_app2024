import { api } from "../../api"
export interface IMessage {
    tittle: string
    menssage: string
}
export interface IResponseMessage {
    id: number
    user_id: number
    tittle: string
    message: string
    created_at: string
    user: {
        id: number
        name: string
        email: string
    }
}
class MessageData {
    index() {
        return api.get<IResponseMessage[]>('/message')
    }
    store(data: IMessage) {
        return api.get('/message', data)
    }
}
export default new MessageData()