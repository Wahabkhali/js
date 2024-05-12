function joke (){
    let jokes =  [
       " mein insaan hon aur aap kya Hain _ 🤔khabardaar kisi ne meri nikal ki to _ 😅",
        "aik baat pohchani thi aap sab logon se _😎 jano ke age” war” laga ke uss ki qurbani ki ja sakti hai _ 🤩",
        "Admi: Mohabt Shadi Se Pehle Honi Chahye Ya shadi ke Bad Me? . Boy: Mohabt Shadi Se Pehle Ho Ya Shadi k Bad Bus Uski Khbar Bv Ko Nhi Honi Chye",
        "Aaina Kehta Hai, Kehna To Nahi Chahiye Tha.. Tu Abhi Tak Zinda Hai?? Rehna To Nahi Chahiye Tha.. :-D",
        "Mujhse Woh Kehti Hai k Tumhari Zindagi ko Jannat Bana dungi . . . . . . . . . . Banana Usko ‘Maggie’ bhi nahi aata … . . Per Confidence Dekho Bandi ka ;-):-D",
        "Dost: Yar Doctor ye Q Pochty Hain K Subah kya Khaya Raat kya Khaya.? . 2nd Dost: Yaar is Se Mareez ki Maali Halat ka Pata lag Jata Hain.",
        "1 admi ne FM radio pe call ki Admi: Mujay 1 batwa mila hai jis me boht sary paisy, credit cards aur NIC card hai. Address lakki marwat ka hai. Host: To ap unhein batwa wapis dena chahty hn? Admi:Hum ap ko pagal lagte hy, Usay meri taraf se 1 sad Song suna den.",
        "Sardar: Parson Meri Biwi Kowein me gir gayi. Bohat chot lagi bechari ko, bohat cheekh rahi thi… Dost: Ab kesi hai tumhari Biwi ? Sardar: Ab theek hai. Kalse Kowein me se Awaz nahi Ai …😛",
        "Agar aap ko raat mai neend nahi aati to Chokidaari ker k 4 paisy kama lain.ROZGARI TOTKA. 🙂",
        "WAKEEL: My lord, Qanoon ki kitaab ka safa number 15 k mutabik mere mowakkil ko ba-izzat bari kiya jaye JUDGE: Kitaab pesh ki jaye.(Kitaab pesh ki gayi) Judge ne safa number 15 khola to us mein 5000 k 10 note thay.JUDGE: Es tarha k 2 saboot aur pesh kiye jayen… 😉",
        "Apun 1 sher bolega:chaand uper se phenk raha hai light,bole to ho gayi hai night,band karneka light aur sone ka ek dam tight bole to kia good night.",
        "Ek waqt tha k duniya k sare nikamme aur nalayaq log apne kam kaj chor k mere sms parhte thy Alhamdulillah aaj bhi ye silsila jari hai… 🙂",
        "Na cheeno mere mulk k nojawanon se FACEBOOK ki service, “FaraZ”, Aik yehi to book hai jo wo dil laga kar parhtay hain..!",
        "Pathan raat ko lights off kar k so raha tha, achanak ek jugnu aa nikla.Pathan: Ya Khudaya Ye dengi machar to hum ko torch le kar dhoond raha hai.",
        "Teacher:Ye konsa tense hai? Pakistan mein load shedding khatam ho jaye gi.Student: Future Impossible Tense. 😀",
        "Ek Pathan ka raat ko cigerate peeny ko dil chaha.her taraf maachis dhoondi par kahin nahi mili…Aakhir mein na umeed ho kar Mom batti bujha k so gaya…Bechara 😀",
        "Jab rishte walay aap ko daikhnay aain to apny moun per Meezan oil lagain.kio k her cheez Meezan mein achi lagti hai… ",
        "Army Training k doraan 1 officer ne sipahi se pocha: Ye haath mein kia hai? Rab Nawaz: Sir Ye bandooq hai.Officer: Ye bandooq nahin tumhari izzat aur shan hai, tumhari Maa hai Maa.Phir Officer ne ek Pathan Sipahi se pocha: Tumharay hath mein ye kia hai? Pathan: Sir, Ye Rab Nawaz ki Ammi hai aur humari khaala hai.!",
        "Husband: Tumhari roz roz ki farmaishon se tang aa gaya hon is liye khudkushi karne ja raha hon. wife: 2,3 white suit to dila den, iddat k dino mein kia pehnu gi?",
        "Mezbaan: Lassi aap peety nahi,chaye hum pilatay nahi,roti ka time nahi,botal ka mosam nahi,ab batain kia khidmat karen ? Mehman:Easyload hi karwa den phir.",
        "Shadi ke kuch din baad beti apni maa se phone par: aaj meri unse larai hou gayi, Maa: beta shadi ke baad jhagray hote rehte hain, koi baat nahi, Beti: han woh toh theek hai lekin ab laash ka kya karoon",
      
    ];
    






    let jokegenerate = Math.random() * jokes.length;
    let round = Math.floor(jokegenerate);
    let roundjoke = jokes[round];
    let para = document.getElementById("para");
    para.innerText = roundjoke
    
}