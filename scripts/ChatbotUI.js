import { useState } from "react"; 
import { Mic, Send, X, Upload, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ChatbotUI() {
  const [messages, setMessages] = useState([
    { text: "I can explain how to use Canva features, answer editing questions, and help with billing issues.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "How can I help?", sender: "bot" }]);
      }, 1000);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <Card className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden fixed bottom-16 right-4">
          <div className="flex flex-col bg-gray-200 p-3 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Ask Annita</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 text-sm mt-1">Get AI-powered help</p>
          </div>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <label htmlFor="image-upload" className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
              {image ? <img src={image} alt="Uploaded" className="w-12 h-12 rounded-full object-cover" /> : <Upload size={20} className="text-gray-500" />}
            </label>
            <input type="file" id="image-upload" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <p className="text-gray-600 mt-2 text-sm">
              I can explain how to use Canva features, answer editing questions, and help with billing issues.
            </p>
            <div className="h-60 overflow-y-auto space-y-3 w-full mt-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[80%] ${msg.sender === "bot" ? "bg-gray-200 self-start" : "bg-blue-500 text-white self-end"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex items-center mt-4 border-t pt-2 w-full">
              <input
                type="text"
                className="flex-grow p-2 border rounded-lg focus:outline-none"
                placeholder="How can I help?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleSend} className="p-2 ml-2 text-blue-500">
                <Send size={20} />
              </button>
              <button className="p-2 ml-2 text-gray-500">
                <Mic size={20} />
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">Need more help? <a href="#" className="text-blue-500">Visit our Help Center</a></p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
