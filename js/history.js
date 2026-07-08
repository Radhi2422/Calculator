/**
 * Store previous calculations:
 * 
 */
class History {

    constructor(historyElement) {

        this.historyElement = historyElement;

    }

    render(historyList) {

        this.historyElement.innerHTML = "";

        historyList.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            this.historyElement.appendChild(li);

        });

    }

}