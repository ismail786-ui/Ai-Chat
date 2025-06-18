document.addEventListener("DOMContentLoaded",()=>{
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");




    const botResponses = {
        hello: "Hello! How can I help you today?",
        hi:"Hi there! How can I assist you?",
        "how are you":"I'm doing Well, thank you! How about you?",
        "what can you do":
        "i can answer simple question and have basic conversation.Try asking me something else",
        bye:"Goodbye! Have a great day!",
        default:"I'm not sure I understand.Could you try asking something else?",
    };
 




   function addMessage(message,isUser = false){
    const messageDiv= document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageText = document = createElement("p");
    messageText.textContext = message;
    messageDiv.appendChildDiv(messageText);
       
    chatMessages.appentChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
   }



   function getBotResponse(userMessage){
    const lowerMessage = userMessage.toLowerCase();

     for(const[key,value] of Object.entries(botResponses)){
        if(lowerMessage.includes(key)){
            return value;
     }
     }
     return botResponses.default;
   }



    function sendMessage(){
        const message = userInput.value.trim();
        if(message){
        addMessage(message,true);
        userInput.value = "";

        setTimeout(()=>{
            const botResponse = getBotResponse(message);
            addMessage(botResponse);
           }, 500);
    }
    }
    sendButton.addEventListener("click",sendMessage);

    userInput.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            sendMessage();
        }
    })
    })