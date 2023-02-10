import { appState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"

class SandboxService {
    async getSandbox() {
        const res = await sandboxApi.get('gifts')
        appState.gifts = res.data
        console.log(appState.gifts);
        appState.emit('gifts')
    }
}

export const sandboxService = new SandboxService