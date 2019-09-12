        var wins= document.getElementById("wins");
        var Current= document.getElementById("Current");
        var Guesses=document.getElementById("Guesses");
        var LettersGuessed=document.getElementById("LettersGuessed");
       
        var arrOfWords=["golden-experience","killer-queen","sticky-finger","crazy-dimand","Star Platinum","Hermit Purple","Hierophant Green","The World","Moody Blues"];
        var WordPick= arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
        console.log(WordPick);
        var GuessesLeft=12;
        var winsCounter=0;

        //split the picked word
        var PickedWordArr=WordPick.split('');

        //the arry to confirm if key is guessed
        var GuessedKey=[];
        // Key
        document.onkeyup=function(event){
            key= event.key;
            console.log(key);

            //using forloop to print which letter have been guessed right
            var PrintWord="";
            for(var i=0;i<WordPick.length;i++){
                if(GuessedKey.includes(WordPick.charAt(i))==true||key==WordPick.charAt(i)){
                    PrintWord=PrintWord+WordPick.charAt(i);
                }else{
                    PrintWord=PrintWord+"-";
                }

            }
            console.log(PrintWord);

            //var confirm is a boolean that if the key is include in the word, then the new key will join GuessedKey array 
            var confirm=GuessedKey.includes(key);
            
            if(confirm==false){
                GuessedKey.push(key);
                GuessesLeft--;
            }

            //resetGame Function 
            function resetGame(){
                WordPick= arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
                GuessesLeft=12;
                PrintWord="";
                GuessedKey=[];
                PickedWordArr=WordPick.split('');
            }
            console.log(LettersGuessed);
            //Text content
            LettersGuessed.textContent="Guessed letter:"+GuessedKey;
            Guesses.textContent="How many guesses left: "+GuessesLeft;
            Current.textContent="Tell me what is the word: "+PrintWord;
            wins.textContent="wins: "+winsCounter;

            //confirm if all chances of guess is used
            if(GuessesLeft==0){
                alert("MUDAMUDAMUDAMUDA!!!!!!!Dio has just beaten you up!!!!");
                resetGame();

            }

            //confirm if the word is complete
            if(PrintWord==WordPick){
                winsCounter++;
                alert("OLAOLAOLAOLAOLAOLA!!!!!! You just Beat Dio!!!")
                resetGame();
            }
            console.log(winsCounter);
        };