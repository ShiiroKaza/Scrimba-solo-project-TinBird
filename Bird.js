class Bird {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus() {
        this.hasBeenLiked = false
        this.hasBeenSwiped = true;
    }

    getBirdHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
            <div class="bird-container">
            
            <img class="bird-img" src="${avatar}">
            <div class="bird-info">
                    <h4> ${name}, <span>${age}<span> </h4>
                    <div class="bird-bio">
                    <p>${bio}<p>
                    </div>
                </div>
            </div>

            <div>
            </div>
                
        </div>`
    }

        yes() {
            return `<img id="like" src="images/badge-like_001.png" alt="badge-like">`
        }

        no() {
            return `<img id="nope" src="images/badge-nope_001.png" alt="badge-nope">`
        }
}

export default Bird