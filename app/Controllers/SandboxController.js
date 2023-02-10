import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxService } from "../Services/SandboxService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
    let template = ''
    console.log('draw');
    appState.gifts.forEach(gift => {
        if (gift.opened) {
            template += Gift.giftOpenTemplate(gift)
        } else { template += Gift.giftsTemplate(gift) }
    }
    )
    setHTML('gift-cards', template)

}


export class SandboxController {
    constructor() {
        this.getSandbox()
        appState.on('gifts', _drawGifts)
    }

    async getSandbox() {
        try {
            await sandboxService.getSandbox()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}