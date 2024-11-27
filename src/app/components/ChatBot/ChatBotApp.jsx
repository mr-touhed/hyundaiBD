"use client"

import ChatBot from "react-chatbotify";


const ChatBotApp = () => {

    const flow={
		start: {
			message: () => {
				const seenBefore = localStorage.getItem("example_welcome");
				if (seenBefore) {
					return `Welcome back ${seenBefore}!`;
				}
				return "Welcome there 👋! It's nice to meet you, what is your name?";
			},
			function: (params) => localStorage.setItem("example_welcome", params.userInput),
			path: "say_goodbye"
		},
		say_goodbye: {
			message: (params) => `Great to know you ${params.userInput}, hope to see you again!`,
			chatDisabled: true
		}
	}
 // styles here
 const styles = {
    bodyStyle:{
        fontSize:"14px",
        
    },
    tooltipStyle:{
        fontSize:"12px",
        bottom: "123px",
        right: '99px',
        background:"#002C5F",
        padding:"16px"
    },
    tooltipTail: {
background:"#002C5F"
    },
    headerStyle: {
      background: '#011732',
      color: '#ffffff',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f2f2f2',
    },
    chatButtonStyle: {
      backgroundColor:"white",
      backgroundImage:"none",
           width: "60px",
    height: "60px",
    bottom: "120px"
    },
    
    // ...other styles
  };
  
    return (
            <div className="sticky  z-50">

            
            <ChatBot 
            styles={styles}
            settings={{
            general: {embedded: false}, 
            fileAttachment:{disabled:true},
            chatButton:{icon:"/images/button_icon-02.png", width:"50px", height:"50px"},
            voice: { disabled: true }, // Removes voice icon
            notification: { disabled: true }, // Removes bell icon 
            header:{title:"Hyundai BD",avatar:"/images/header_icon-02.png",  }, 
            chatHistory: {storageKey: "example_smart_welcome"},
            footer:{text:"HYUNDAI BANGLADESH", fontSize: 12}
          }}
            
            flow={flow}/>
            </div>
      
    );
};

export default ChatBotApp;