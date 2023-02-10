export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
    }

    static giftsTemplate(gift) {
        return /*html */`
            <div class="col-3">
                <div class="card">
                    <div class="card-img">
                        <img
                        src="${gift.url}"
                        alt="" class="img-fluid rounded-top">
                    </div>
                <div class="card-body">${gift.tag}</div>
            </div>
        </div>`
    }

    static giftOpenTemplate(gift) {
        return /*html */`
            <div class="col-3">
                <div class="card align-items-center justify-content-middle bg-gift">
                <div class="card">${gift.tag}</div>
            </div>
        </div>`
    }


}