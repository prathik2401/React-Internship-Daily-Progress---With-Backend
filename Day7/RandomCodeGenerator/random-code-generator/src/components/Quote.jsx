import React, { useEffect , useState} from 'react'
function Quote() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    
    useEffect(() => {
        fetchNewQuote();
    } ,[setAuthor, setQuote]);

    function fetchNewQuote(){
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then((data) => {
            let num = pickRandomNumber();
            setQuote(data[num].text);
            setAuthor(data[num].author);
        });
    }
    function pickRandomNumber(){
        let randomInt = Math.floor(Math.random() * 15)
        return randomInt
    }
  return (
    <div>
        <h1>Random Quote Generator</h1>     
        <p>
            <h2>
                {quote}
            </h2>
            
        </p>
        <p> 
                - {author}
            </p>
        <button onClick={fetchNewQuote}>Next</button>
    </div>
  );
}

export default Quote