class Start{
    constructor(){
        this.playerName = "Player";
        this.botName = "Yufibot";
        this.playerOptions;
        this.botOptions;
        this.winner = ""
    }

    get getBotOptions(){
        return this.botOptions;
    }

    set setBotOptions(option){
        this.botOptions = option;
    }

    get getPlayerOptions(){
        return this.playerOptions;
    }

    set setPlayerOptions (option) {
        this.playerOptions = option;
    }

    botBrain(){
        const options = ["🖐️", "✌️", "✊"];
        const bot = options[Math.floor(Math.random() * options.length)];
        return bot;
    }

    winCalculate(){
        if(this.botOptions == "🖐️" && this.playerOptions == "✌️"){
            return this.winner = this.playerName
        } else if(this.botOptions == "✌️" && this.playerOptions == "🖐️") {
            return this.winner = this.botName
        } else if(this.botOptions == "✌️" && this.playerOptions == "✊") {
            return this.winner = this.playerName
        } else if(this.botOptions == "✊" && this.playerOptions == "✌️") {
            return this.winner = this.botName
        } else if(this.botOptions == "✊" && this.playerOptions == "🖐️") {
            return this.winner = this.playerName
        } else if(this.botOptions == "🖐️" && this.playerOptions == "✊") {
            return this.winner = this.botName
        } else {
            return this.winner = "SERI"
        }
    }

    matchResult() {
        if (this.winner !== "SERI") {
            return `${this.winner} Menang!`;
        } else {
            return `WAAA ${this.winner}, GA ADA YANG MENANG 🤪`
        }
    }
}

function pickOption(params){
    const start = new Start();
    start.setPlayerOptions = params;
    start.setBotOptions = start.botBrain();
    start.winCalculate();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "...";
    result.textContent = "...";


    setTimeout(() => {
        inGame.textContent = `Player: ${start.getPlayerOptions} VS BOT: ${start.getBotOptions}`;
        result.textContent = start.matchResult();
    }, 1500);
    
    
}