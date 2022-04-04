

    const setOfWords = [
        "My Name is Chhatrapal Ahirwar and I am from India",
        "Hope you are having fun this is a simple game you can make and play",
        "This is totally created with pure HTML, CSS and Javascript and if you want the source code contact me Thanks!."
    ];

    const msg = document.getElementById("msg")
    const typewords = document.getElementById("mywords")
    const btn = document.getElementById("btn")
    let startTime, endTime

    let playGame = () => {
        let randomno = Math.floor(Math.random() * setOfWords.length)
        // console.log(randomno)
        msg.innerText = setOfWords[randomno]
        let date = new Date()
        startTime = date.getTime()
        btn.innerText = "Done"
    }

    const endPlay = () => {
        let date = new Date()
        endTime = date.getTime()
        let totalTime = ((endTime - startTime) / 1000)
        // console.log(totalTime)
        let totalstr = typewords.value
        let wordCount = wordCounter(totalstr)
        let speed = Math.round((wordCount / totalTime) * 60)
        // console.log(speed)
        finalmessage = `Your typing speed is ${speed} words per minute and `
        finalmessage += comparewords(msg.innerText, totalstr)
        msg.innerText = finalmessage
    }

    const comparewords = (str1, str2) => {
        let words1 = str1.split(" ")
        let words2 = str2.split(" ")
        let count = 0;
        words1.forEach(function (item, index) {
            if (item == words2[index]) {
                count++;
            }
        })
        let errorwords = (words1.length - count);
        return (`${count} words are correct out of ${words1.length} words and the total number of error are ${errorwords}.`)
    }
    const wordCounter = (str) => {
        let response = str.split(" ").length
        // console.log(response)
        return response
    }

    btn.addEventListener("click", function () {
        console.log(this)
  
        if (this.innerText == "Start") {
            typewords.disabled = false
            playGame()
        }
        else if (this.innerText == "Done") {
            typewords.disabled = true
            btn.innerText = "Start"
            endPlay()
        }
    })