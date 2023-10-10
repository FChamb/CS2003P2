const movieData = `[{"director_name":"James Cameron","actor_2_name":"Joel David Moore","genres":"Action|Adventure|Fantasy|Sci-Fi","actor_1_name":"CCH Pounder","movie_title":"Avatar ","actor_3_name":"Wes Studi","plot_keywords":"avatar|future|marine|native|paraplegic","movie_imdb_link":"http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"},{"director_name":"Gore Verbinski","actor_2_name":"Orlando Bloom","genres":"Action|Adventure|Fantasy","actor_1_name":"Johnny Depp","movie_title":"Pirates of the Caribbean: At World\'s End ","actor_3_name":"Jack Davenport","plot_keywords":"goddess|marriage ceremony|marriage proposal|pirate|singapore","movie_imdb_link":"http://www.imdb.com/title/tt0449088/?ref_=fn_tt_tt_1"},{"director_name":"Sam Mendes","actor_2_name":"Rory Kinnear","genres":"Action|Adventure|Thriller","actor_1_name":"Christoph Waltz","movie_title":"Spectre ","actor_3_name":"Stephanie Sigman","plot_keywords":"bomb|espionage|sequel|spy|terrorist","movie_imdb_link":"http://www.imdb.com/title/tt2379713/?ref_=fn_tt_tt_1"},{"director_name":"Christopher Nolan","actor_2_name":"Christian Bale","genres":"Action|Thriller","actor_1_name":"Tom Hardy","movie_title":"The Dark Knight Rises ","actor_3_name":"Joseph Gordon-Levitt","plot_keywords":"deception|imprisonment|lawlessness|police officer|terrorist plot","movie_imdb_link":"http://www.imdb.com/title/tt1345836/?ref_=fn_tt_tt_1"},{"director_name":"Doug Walker","actor_2_name":"Rob Walker","genres":"Documentary","actor_1_name":"Doug Walker","movie_title":"Star Wars: Episode VII - The Force Awakens             ","actor_3_name":"","plot_keywords":"","movie_imdb_link":"http://www.imdb.com/title/tt5289954/?ref_=fn_tt_tt_1"},{"director_name":"Andrew Stanton","actor_2_name":"Samantha Morton","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Daryl Sabara","movie_title":"John Carter ","actor_3_name":"Polly Walker","plot_keywords":"alien|american civil war|male nipple|mars|princess","movie_imdb_link":"http://www.imdb.com/title/tt0401729/?ref_=fn_tt_tt_1"},{"director_name":"Sam Raimi","actor_2_name":"James Franco","genres":"Action|Adventure|Romance","actor_1_name":"J.K. Simmons","movie_title":"Spider-Man 3 ","actor_3_name":"Kirsten Dunst","plot_keywords":"sandman|spider man|symbiote|venom|villain","movie_imdb_link":"http://www.imdb.com/title/tt0413300/?ref_=fn_tt_tt_1"},{"director_name":"Nathan Greno","actor_2_name":"Donna Murphy","genres":"Adventure|Animation|Comedy|Family|Fantasy|Musical|Romance","actor_1_name":"Brad Garrett","movie_title":"Tangled ","actor_3_name":"M.C. Gainey","plot_keywords":"17th century|based on fairy tale|disney|flower|tower","movie_imdb_link":"http://www.imdb.com/title/tt0398286/?ref_=fn_tt_tt_1"},{"director_name":"Joss Whedon","actor_2_name":"Robert Downey Jr.","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Chris Hemsworth","movie_title":"Avengers: Age of Ultron ","actor_3_name":"Scarlett Johansson","plot_keywords":"artificial intelligence|based on comic book|captain america|marvel cinematic universe|superhero","movie_imdb_link":"http://www.imdb.com/title/tt2395427/?ref_=fn_tt_tt_1"},{"director_name":"David Yates","actor_2_name":"Daniel Radcliffe","genres":"Adventure|Family|Fantasy|Mystery","actor_1_name":"Alan Rickman","movie_title":"Harry Potter and the Half-Blood Prince ","actor_3_name":"Rupert Grint","plot_keywords":"blood|book|love|potion|professor","movie_imdb_link":"http://www.imdb.com/title/tt0417741/?ref_=fn_tt_tt_1"},{"director_name":"Zack Snyder","actor_2_name":"Lauren Cohan","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Henry Cavill","movie_title":"Batman v Superman: Dawn of Justice ","actor_3_name":"Alan D. Purwin","plot_keywords":"based on comic book|batman|sequel to a reboot|superhero|superman","movie_imdb_link":"http://www.imdb.com/title/tt2975590/?ref_=fn_tt_tt_1"},{"director_name":"Bryan Singer","actor_2_name":"Marlon Brando","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Kevin Spacey","movie_title":"Superman Returns ","actor_3_name":"Frank Langella","plot_keywords":"crystal|epic|lex luthor|lois lane|return to earth","movie_imdb_link":"http://www.imdb.com/title/tt0348150/?ref_=fn_tt_tt_1"},{"director_name":"Marc Forster","actor_2_name":"Mathieu Amalric","genres":"Action|Adventure","actor_1_name":"Giancarlo Giannini","movie_title":"Quantum of Solace ","actor_3_name":"Rory Kinnear","plot_keywords":"action hero|attempted rape|bond girl|official james bond series|revenge","movie_imdb_link":"http://www.imdb.com/title/tt0830515/?ref_=fn_tt_tt_1"},{"director_name":"Gore Verbinski","actor_2_name":"Orlando Bloom","genres":"Action|Adventure|Fantasy","actor_1_name":"Johnny Depp","movie_title":"Pirates of the Caribbean: Dead Man\'s Chest ","actor_3_name":"Jack Davenport","plot_keywords":"box office hit|giant squid|heart|liar\'s dice|monster","movie_imdb_link":"http://www.imdb.com/title/tt0383574/?ref_=fn_tt_tt_1"},{"director_name":"Gore Verbinski","actor_2_name":"Ruth Wilson","genres":"Action|Adventure|Western","actor_1_name":"Johnny Depp","movie_title":"The Lone Ranger ","actor_3_name":"Tom Wilkinson","plot_keywords":"horse|outlaw|texas|texas ranger|train","movie_imdb_link":"http://www.imdb.com/title/tt1210819/?ref_=fn_tt_tt_1"},{"director_name":"Zack Snyder","actor_2_name":"Christopher Meloni","genres":"Action|Adventure|Fantasy|Sci-Fi","actor_1_name":"Henry Cavill","movie_title":"Man of Steel ","actor_3_name":"Harry Lennix","plot_keywords":"based on comic book|british actor playing american character|final battle|origin of hero|reboot","movie_imdb_link":"http://www.imdb.com/title/tt0770828/?ref_=fn_tt_tt_1"},{"director_name":"Andrew Adamson","actor_2_name":"Pierfrancesco Favino","genres":"Action|Adventure|Family|Fantasy","actor_1_name":"Peter Dinklage","movie_title":"The Chronicles of Narnia: Prince Caspian ","actor_3_name":"Damián Alcázar","plot_keywords":"brother brother relationship|brother sister relationship|good versus evil|king|narnia","movie_imdb_link":"http://www.imdb.com/title/tt0499448/?ref_=fn_tt_tt_1"},{"director_name":"Joss Whedon","actor_2_name":"Robert Downey Jr.","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Chris Hemsworth","movie_title":"The Avengers ","actor_3_name":"Scarlett Johansson","plot_keywords":"alien invasion|assassin|battle|iron man|soldier","movie_imdb_link":"http://www.imdb.com/title/tt0848228/?ref_=fn_tt_tt_1"},{"director_name":"Rob Marshall","actor_2_name":"Sam Claflin","genres":"Action|Adventure|Fantasy","actor_1_name":"Johnny Depp","movie_title":"Pirates of the Caribbean: On Stranger Tides ","actor_3_name":"Stephen Graham","plot_keywords":"blackbeard|captain|pirate|revenge|soldier","movie_imdb_link":"http://www.imdb.com/title/tt1298650/?ref_=fn_tt_tt_1"},{"director_name":"Barry Sonnenfeld","actor_2_name":"Michael Stuhlbarg","genres":"Action|Adventure|Comedy|Family|Fantasy|Sci-Fi","actor_1_name":"Will Smith","movie_title":"Men in Black 3 ","actor_3_name":"Nicole Scherzinger","plot_keywords":"alien|criminal|m.i.b.|maximum security prison|prison","movie_imdb_link":"http://www.imdb.com/title/tt1409024/?ref_=fn_tt_tt_1"},{"director_name":"Peter Jackson","actor_2_name":"Adam Brown","genres":"Adventure|Fantasy","actor_1_name":"Aidan Turner","movie_title":"The Hobbit: The Battle of the Five Armies ","actor_3_name":"James Nesbitt","plot_keywords":"army|elf|hobbit|middle earth|orc","movie_imdb_link":"http://www.imdb.com/title/tt2310332/?ref_=fn_tt_tt_1"},{"director_name":"Marc Webb","actor_2_name":"Andrew Garfield","genres":"Action|Adventure|Fantasy","actor_1_name":"Emma Stone","movie_title":"The Amazing Spider-Man ","actor_3_name":"Chris Zylka","plot_keywords":"lizard|outcast|spider|spider man|teenager","movie_imdb_link":"http://www.imdb.com/title/tt0948470/?ref_=fn_tt_tt_1"},{"director_name":"Ridley Scott","actor_2_name":"William Hurt","genres":"Action|Adventure|Drama|History","actor_1_name":"Mark Addy","movie_title":"Robin Hood ","actor_3_name":"Scott Grimes","plot_keywords":"1190s|archer|england|king of england|robin hood","movie_imdb_link":"http://www.imdb.com/title/tt0955308/?ref_=fn_tt_tt_1"},{"director_name":"Peter Jackson","actor_2_name":"Adam Brown","genres":"Adventure|Fantasy","actor_1_name":"Aidan Turner","movie_title":"The Hobbit: The Desolation of Smaug ","actor_3_name":"James Nesbitt","plot_keywords":"dwarf|elf|lake town|mountain|sword and sorcery","movie_imdb_link":"http://www.imdb.com/title/tt1170358/?ref_=fn_tt_tt_1"},{"director_name":"Chris Weitz","actor_2_name":"Eva Green","genres":"Adventure|Family|Fantasy","actor_1_name":"Christopher Lee","movie_title":"The Golden Compass ","actor_3_name":"Kristin Scott Thomas","plot_keywords":"children|epic|friend|girl|quest","movie_imdb_link":"http://www.imdb.com/title/tt0385752/?ref_=fn_tt_tt_1"},{"director_name":"Peter Jackson","actor_2_name":"Thomas Kretschmann","genres":"Action|Adventure|Drama|Romance","actor_1_name":"Naomi Watts","movie_title":"King Kong ","actor_3_name":"Evan Parke","plot_keywords":"animal name in title|ape abducts a woman|gorilla|island|king kong","movie_imdb_link":"http://www.imdb.com/title/tt0360717/?ref_=fn_tt_tt_1"},{"director_name":"James Cameron","actor_2_name":"Kate Winslet","genres":"Drama|Romance","actor_1_name":"Leonardo DiCaprio","movie_title":"Titanic ","actor_3_name":"Gloria Stuart","plot_keywords":"artist|love|ship|titanic|wet","movie_imdb_link":"http://www.imdb.com/title/tt0120338/?ref_=fn_tt_tt_1"},{"director_name":"Anthony Russo","actor_2_name":"Scarlett Johansson","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Robert Downey Jr.","movie_title":"Captain America: Civil War ","actor_3_name":"Chris Evans","plot_keywords":"based on comic book|knife|marvel cinematic universe|returning character killed off|superhero","movie_imdb_link":"http://www.imdb.com/title/tt3498820/?ref_=fn_tt_tt_1"},{"director_name":"Peter Berg","actor_2_name":"Alexander Skarsgård","genres":"Action|Adventure|Sci-Fi|Thriller","actor_1_name":"Liam Neeson","movie_title":"Battleship ","actor_3_name":"Tadanobu Asano","plot_keywords":"box office flop|hawaii|naval|oahu hawaii|ship","movie_imdb_link":"http://www.imdb.com/title/tt1440129/?ref_=fn_tt_tt_1"},{"director_name":"Colin Trevorrow","actor_2_name":"Judy Greer","genres":"Action|Adventure|Sci-Fi|Thriller","actor_1_name":"Bryce Dallas Howard","movie_title":"Jurassic World ","actor_3_name":"Omar Sy","plot_keywords":"dinosaur|disaster film|experiment gone wrong|jurassic park|velociraptor","movie_imdb_link":"http://www.imdb.com/title/tt0369610/?ref_=fn_tt_tt_1"},{"director_name":"Sam Mendes","actor_2_name":"Helen McCrory","genres":"Action|Adventure|Thriller","actor_1_name":"Albert Finney","movie_title":"Skyfall ","actor_3_name":"Rory Kinnear","plot_keywords":"brawl|childhood home|computer cracker|intelligence agency|terrorist cell","movie_imdb_link":"http://www.imdb.com/title/tt1074638/?ref_=fn_tt_tt_1"},{"director_name":"Sam Raimi","actor_2_name":"James Franco","genres":"Action|Adventure|Fantasy|Romance","actor_1_name":"J.K. Simmons","movie_title":"Spider-Man 2 ","actor_3_name":"Kirsten Dunst","plot_keywords":"death|doctor|scientist|super villain|tentacle","movie_imdb_link":"http://www.imdb.com/title/tt0316654/?ref_=fn_tt_tt_1"},{"director_name":"Shane Black","actor_2_name":"Jon Favreau","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Robert Downey Jr.","movie_title":"Iron Man 3 ","actor_3_name":"Don Cheadle","plot_keywords":"armor|explosion|human bomb|missile attack|terrorist","movie_imdb_link":"http://www.imdb.com/title/tt1300854/?ref_=fn_tt_tt_1"},{"director_name":"Tim Burton","actor_2_name":"Alan Rickman","genres":"Adventure|Family|Fantasy","actor_1_name":"Johnny Depp","movie_title":"Alice in Wonderland ","actor_3_name":"Anne Hathaway","plot_keywords":"alice in wonderland|mistaking reality for dream|queen|shrinking|shrinking potion","movie_imdb_link":"http://www.imdb.com/title/tt1014759/?ref_=fn_tt_tt_1"},{"director_name":"Brett Ratner","actor_2_name":"Kelsey Grammer","genres":"Action|Adventure|Fantasy|Sci-Fi|Thriller","actor_1_name":"Hugh Jackman","movie_title":"X-Men: The Last Stand ","actor_3_name":"Daniel Cudmore","plot_keywords":"battle|mutant|outrage|walking through a wall|x men","movie_imdb_link":"http://www.imdb.com/title/tt0376994/?ref_=fn_tt_tt_1"},{"director_name":"Dan Scanlon","actor_2_name":"Tyler Labine","genres":"Adventure|Animation|Comedy|Family|Fantasy","actor_1_name":"Steve Buscemi","movie_title":"Monsters University ","actor_3_name":"Sean Hayes","plot_keywords":"cheating|fraternity|monster|singing in a car|university","movie_imdb_link":"http://www.imdb.com/title/tt1453405/?ref_=fn_tt_tt_1"},{"director_name":"Michael Bay","actor_2_name":"Kevin Dunn","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Glenn Morshower","movie_title":"Transformers: Revenge of the Fallen ","actor_3_name":"Ramon Rodriguez","plot_keywords":"autobot|decepticon|machine|sun|symbol","movie_imdb_link":"http://www.imdb.com/title/tt1055369/?ref_=fn_tt_tt_1"},{"director_name":"Michael Bay","actor_2_name":"Sophia Myles","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Bingbing Li","movie_title":"Transformers: Age of Extinction ","actor_3_name":"Kelsey Grammer","plot_keywords":"blockbuster|bumblebee the character|semi truck and trailer|texas|truck","movie_imdb_link":"http://www.imdb.com/title/tt2109248/?ref_=fn_tt_tt_1"},{"director_name":"Sam Raimi","actor_2_name":"Mila Kunis","genres":"Adventure|Family|Fantasy","actor_1_name":"Tim Holmes","movie_title":"Oz the Great and Powerful ","actor_3_name":"James Franco","plot_keywords":"circus|magic|magician|oz|witch","movie_imdb_link":"http://www.imdb.com/title/tt1623205/?ref_=fn_tt_tt_1"},{"director_name":"Marc Webb","actor_2_name":"Andrew Garfield","genres":"Action|Adventure|Fantasy|Sci-Fi","actor_1_name":"Emma Stone","movie_title":"The Amazing Spider-Man 2 ","actor_3_name":"B.J. Novak","plot_keywords":"costumed hero|death of girlfriend|masked vigilante|returning character killed off|teenager","movie_imdb_link":"http://www.imdb.com/title/tt1872181/?ref_=fn_tt_tt_1"},{"director_name":"Joseph Kosinski","actor_2_name":"Olivia Wilde","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Jeff Bridges","movie_title":"TRON: Legacy ","actor_3_name":"James Frain","plot_keywords":"arcade|bridge|disappearance|escape|warrior","movie_imdb_link":"http://www.imdb.com/title/tt1104001/?ref_=fn_tt_tt_1"},{"director_name":"John Lasseter","actor_2_name":"Thomas Kretschmann","genres":"Adventure|Animation|Comedy|Family|Sport","actor_1_name":"Joe Mantegna","movie_title":"Cars 2 ","actor_3_name":"Eddie Izzard","plot_keywords":"best friend|car race|conspiracy|gadget car|spy","movie_imdb_link":"http://www.imdb.com/title/tt1216475/?ref_=fn_tt_tt_1"},{"director_name":"Martin Campbell","actor_2_name":"Temuera Morrison","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Ryan Reynolds","movie_title":"Green Lantern ","actor_3_name":"Taika Waititi","plot_keywords":"autopsy|lantern|planet|ring|test pilot","movie_imdb_link":"http://www.imdb.com/title/tt1133985/?ref_=fn_tt_tt_1"},{"director_name":"Lee Unkrich","actor_2_name":"John Ratzenberger","genres":"Adventure|Animation|Comedy|Family|Fantasy","actor_1_name":"Tom Hanks","movie_title":"Toy Story 3 ","actor_3_name":"Don Rickles","plot_keywords":"college|day care|escape|teddy bear|toy","movie_imdb_link":"http://www.imdb.com/title/tt0435761/?ref_=fn_tt_tt_1"},{"director_name":"McG","actor_2_name":"Bryce Dallas Howard","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Christian Bale","movie_title":"Terminator Salvation ","actor_3_name":"Common","plot_keywords":"death row|future|machine|rescue|skynet","movie_imdb_link":"http://www.imdb.com/title/tt0438488/?ref_=fn_tt_tt_1"},{"director_name":"James Wan","actor_2_name":"Paul Walker","genres":"Action|Crime|Thriller","actor_1_name":"Jason Statham","movie_title":"Furious 7 ","actor_3_name":"Vin Diesel","plot_keywords":"car falling off a cliff|hospital|revenge|star died before release|terrorist","movie_imdb_link":"http://www.imdb.com/title/tt2820852/?ref_=fn_tt_tt_1"},{"director_name":"Marc Forster","actor_2_name":"Brad Pitt","genres":"Action|Adventure|Horror|Sci-Fi|Thriller","actor_1_name":"Peter Capaldi","movie_title":"World War Z ","actor_3_name":"Mireille Enos","plot_keywords":"chaos|disease|infection|pandemic|zombie","movie_imdb_link":"http://www.imdb.com/title/tt0816711/?ref_=fn_tt_tt_1"},{"director_name":"Bryan Singer","actor_2_name":"Peter Dinklage","genres":"Action|Adventure|Fantasy|Sci-Fi|Thriller","actor_1_name":"Jennifer Lawrence","movie_title":"X-Men: Days of Future Past ","actor_3_name":"Hugh Jackman","plot_keywords":"dystopia|super strength|supernatural power|time paradox|time travel","movie_imdb_link":"http://www.imdb.com/title/tt1877832/?ref_=fn_tt_tt_1"},{"director_name":"J.J. Abrams","actor_2_name":"Bruce Greenwood","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Benedict Cumberbatch","movie_title":"Star Trek Into Darkness ","actor_3_name":"Noel Clarke","plot_keywords":"admiral|captain|manhunt|mission|space","movie_imdb_link":"http://www.imdb.com/title/tt1408101/?ref_=fn_tt_tt_1"},{"director_name":"Bryan Singer","actor_2_name":"Ewen Bremner","genres":"Adventure|Fantasy","actor_1_name":"Eddie Marsan","movie_title":"Jack the Giant Slayer ","actor_3_name":"Ralph Brown","plot_keywords":"bean|giant|king|no opening credits|princess","movie_imdb_link":"http://www.imdb.com/title/tt1351685/?ref_=fn_tt_tt_1"},{"director_name":"Baz Luhrmann","actor_2_name":"Elizabeth Debicki","genres":"Drama|Romance","actor_1_name":"Leonardo DiCaprio","movie_title":"The Great Gatsby ","actor_3_name":"Steve Bisley","plot_keywords":"ingratitude|mansion|party|title appears in writing|tragedy","movie_imdb_link":"http://www.imdb.com/title/tt1343092/?ref_=fn_tt_tt_1"},{"director_name":"Mike Newell","actor_2_name":"Richard Coyle","genres":"Action|Adventure|Fantasy|Romance","actor_1_name":"Jake Gyllenhaal","movie_title":"Prince of Persia: The Sands of Time ","actor_3_name":"Reece Ritchie","plot_keywords":"alamut|dagger|king|persia|princess","movie_imdb_link":"http://www.imdb.com/title/tt0473075/?ref_=fn_tt_tt_1"},{"director_name":"Guillermo del Toro","actor_2_name":"Clifton Collins Jr.","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Charlie Hunnam","movie_title":"Pacific Rim ","actor_3_name":"Larry Joe Campbell","plot_keywords":"giant monster|kaiju|pilot|portal|robot","movie_imdb_link":"http://www.imdb.com/title/tt1663662/?ref_=fn_tt_tt_1"},{"director_name":"Michael Bay","actor_2_name":"Lester Speight","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Glenn Morshower","movie_title":"Transformers: Dark of the Moon ","actor_3_name":"Kevin Dunn","plot_keywords":"autobot|decepticon|job interview|moon|spacecraft","movie_imdb_link":"http://www.imdb.com/title/tt1399103/?ref_=fn_tt_tt_1"},{"director_name":"Steven Spielberg","actor_2_name":"Ray Winstone","genres":"Action|Adventure|Fantasy","actor_1_name":"Harrison Ford","movie_title":"Indiana Jones and the Kingdom of the Crystal Skull ","actor_3_name":"Jim Broadbent","plot_keywords":"cult figure|femme fatale|indiana jones|unsubtitled foreign language|year 1957","movie_imdb_link":"http://www.imdb.com/title/tt0367882/?ref_=fn_tt_tt_1"},{"director_name":"Peter Sohn","actor_2_name":"Jack McGraw","genres":"Adventure|Animation|Comedy|Family|Fantasy","actor_1_name":"A.J. Buckley","movie_title":"The Good Dinosaur ","actor_3_name":"Peter Sohn","plot_keywords":"apatosaurus|asteroid|dinosaur|fear|river","movie_imdb_link":"http://www.imdb.com/title/tt1979388/?ref_=fn_tt_tt_1"},{"director_name":"Mark Andrews","actor_2_name":"John Ratzenberger","genres":"Adventure|Animation|Comedy|Family|Fantasy","actor_1_name":"Kelly Macdonald","movie_title":"Brave ","actor_3_name":"Julie Walters","plot_keywords":"archery|coming of age|female warrior|princess|rebellious daughter","movie_imdb_link":"http://www.imdb.com/title/tt1217209/?ref_=fn_tt_tt_1"},{"director_name":"Justin Lin","actor_2_name":"Melissa Roxburgh","genres":"Action|Adventure|Sci-Fi|Thriller","actor_1_name":"Sofia Boutella","movie_title":"Star Trek Beyond ","actor_3_name":"Lydia Wilson","plot_keywords":"hatred|sequel|space opera|star trek|third part","movie_imdb_link":"http://www.imdb.com/title/tt2660888/?ref_=fn_tt_tt_1"},{"director_name":"Andrew Stanton","actor_2_name":"Fred Willard","genres":"Adventure|Animation|Family|Sci-Fi","actor_1_name":"John Ratzenberger","movie_title":"WALL·E ","actor_3_name":"Jeff Garlin","plot_keywords":"earth|obesity|plant|robot|soil","movie_imdb_link":"http://www.imdb.com/title/tt0910970/?ref_=fn_tt_tt_1"},{"director_name":"Brett Ratner","actor_2_name":"Dana Ivey","genres":"Action|Comedy|Crime|Thriller","actor_1_name":"Tzi Ma","movie_title":"Rush Hour 3 ","actor_3_name":"Noémie Lenoir","plot_keywords":"ambassador|assassination|chinese|french|triad","movie_imdb_link":"http://www.imdb.com/title/tt0293564/?ref_=fn_tt_tt_1"},{"director_name":"Roland Emmerich","actor_2_name":"Liam James","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Oliver Platt","movie_title":"2012 ","actor_3_name":"Tom McCarthy","plot_keywords":"ark|catastrophe|geologist|president|writer","movie_imdb_link":"http://www.imdb.com/title/tt1190080/?ref_=fn_tt_tt_1"},{"director_name":"Robert Zemeckis","actor_2_name":"Colin Firth","genres":"Animation|Drama|Family|Fantasy","actor_1_name":"Robin Wright","movie_title":"A Christmas Carol ","actor_3_name":"Gary Oldman","plot_keywords":"charles dickens|christmas|christmas eve|ghost|scrooge","movie_imdb_link":"http://www.imdb.com/title/tt1067106/?ref_=fn_tt_tt_1"},{"director_name":"Lana Wachowski","actor_2_name":"Mila Kunis","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Channing Tatum","movie_title":"Jupiter Ascending ","actor_3_name":"Eddie Redmayne","plot_keywords":"box office flop|critically bashed|planet earth|space opera|woman in bra and panties","movie_imdb_link":"http://www.imdb.com/title/tt1617661/?ref_=fn_tt_tt_1"},{"director_name":"David Yates","actor_2_name":"Alexander Skarsgård","genres":"Action|Adventure|Drama|Romance","actor_1_name":"Christoph Waltz","movie_title":"The Legend of Tarzan ","actor_3_name":"Casper Crump","plot_keywords":"africa|capture|jungle|male objectification|tarzan","movie_imdb_link":"http://www.imdb.com/title/tt0918940/?ref_=fn_tt_tt_1"},{"director_name":"Bryan Singer","actor_2_name":"Michael Fassbender","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Jennifer Lawrence","movie_title":"X-Men: Apocalypse ","actor_3_name":"Tye Sheridan","plot_keywords":"mutant|superhero|superhero team|x men|year 1983","movie_imdb_link":"http://www.imdb.com/title/tt3385516/?ref_=fn_tt_tt_1"},{"director_name":"Christopher Nolan","actor_2_name":"Heath Ledger","genres":"Action|Crime|Drama|Thriller","actor_1_name":"Christian Bale","movie_title":"The Dark Knight ","actor_3_name":"Morgan Freeman","plot_keywords":"based on comic book|dc comics|psychopath|star died before release|urban setting","movie_imdb_link":"http://www.imdb.com/title/tt0468569/?ref_=fn_tt_tt_1"},{"director_name":"Pete Docter","actor_2_name":"Delroy Lindo","genres":"Adventure|Animation|Comedy|Family","actor_1_name":"John Ratzenberger","movie_title":"Up ","actor_3_name":"Jess Harnell","plot_keywords":"balloon|house|promise|retirement|skeleton","movie_imdb_link":"http://www.imdb.com/title/tt1049413/?ref_=fn_tt_tt_1"},{"director_name":"Rob Letterman","actor_2_name":"Rainn Wilson","genres":"Action|Adventure|Animation|Comedy|Family|Sci-Fi","actor_1_name":"Amy Poehler","movie_title":"Monsters vs. Aliens ","actor_3_name":"Stephen Colbert","plot_keywords":"alien|alien invasion|alien space craft|giant|giantess","movie_imdb_link":"http://www.imdb.com/title/tt0892782/?ref_=fn_tt_tt_1"},{"director_name":"Jon Favreau","actor_2_name":"Jeff Bridges","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Robert Downey Jr.","movie_title":"Iron Man ","actor_3_name":"Jon Favreau","plot_keywords":"afghanistan|billionaire|inventor|playboy|u.s. air force","movie_imdb_link":"http://www.imdb.com/title/tt0371746/?ref_=fn_tt_tt_1"},{"director_name":"Martin Scorsese","actor_2_name":"Christopher Lee","genres":"Adventure|Drama|Family|Mystery","actor_1_name":"Chloë Grace Moretz","movie_title":"Hugo ","actor_3_name":"Ray Winstone","plot_keywords":"automaton|mechanical|railway station|steampunk|train","movie_imdb_link":"http://www.imdb.com/title/tt0970179/?ref_=fn_tt_tt_1"},{"director_name":"Barry Sonnenfeld","actor_2_name":"Salma Hayek","genres":"Action|Comedy|Sci-Fi|Western","actor_1_name":"Will Smith","movie_title":"Wild Wild West ","actor_3_name":"Bai Ling","plot_keywords":"buddy movie|general|inventor|steampunk|utah","movie_imdb_link":"http://www.imdb.com/title/tt0120891/?ref_=fn_tt_tt_1"},{"director_name":"Rob Cohen","actor_2_name":"Brendan Fraser","genres":"Action|Adventure|Fantasy|Horror|Thriller","actor_1_name":"Jet Li","movie_title":"The Mummy: Tomb of the Dragon Emperor ","actor_3_name":"Russell Wong","plot_keywords":"army|china|emperor|mummy|shangri la","movie_imdb_link":"http://www.imdb.com/title/tt0859163/?ref_=fn_tt_tt_1"},{"director_name":"David Ayer","actor_2_name":"Robin Atkin Downes","genres":"Action|Adventure|Comedy|Sci-Fi","actor_1_name":"Will Smith","movie_title":"Suicide Squad ","actor_3_name":"Ike Barinholtz","plot_keywords":"based on comic book|critically bashed|father daughter relationship|reference to superman|super villain","movie_imdb_link":"http://www.imdb.com/title/tt1386697/?ref_=fn_tt_tt_1"},{"director_name":"Tom Shadyac","actor_2_name":"Morgan Freeman","genres":"Comedy|Family|Fantasy","actor_1_name":"Jimmy Bennett","movie_title":"Evan Almighty ","actor_3_name":"Steve Carell","plot_keywords":"ark|change|congressman|depiction of god|flood","movie_imdb_link":"http://www.imdb.com/title/tt0413099/?ref_=fn_tt_tt_1"},{"director_name":"Doug Liman","actor_2_name":"Lara Pulver","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Tom Cruise","movie_title":"Edge of Tomorrow ","actor_3_name":"Noah Taylor","plot_keywords":"alien|combat|dying repeatedly|end of the world|time loop","movie_imdb_link":"http://www.imdb.com/title/tt1631867/?ref_=fn_tt_tt_1"},{"director_name":"Kevin Reynolds","actor_2_name":"Rick Aviles","genres":"Action|Adventure|Sci-Fi|Thriller","actor_1_name":"Jeanne Tripplehorn","movie_title":"Waterworld ","actor_3_name":"Zakes Mokae","plot_keywords":"future|sail|sea|smoker|water","movie_imdb_link":"http://www.imdb.com/title/tt0114898/?ref_=fn_tt_tt_1"},{"director_name":"Stephen Sommers","actor_2_name":"Dennis Quaid","genres":"Action|Adventure|Sci-Fi|Thriller","actor_1_name":"Joseph Gordon-Levitt","movie_title":"G.I. Joe: The Rise of Cobra ","actor_3_name":"Leo Howard","plot_keywords":"cobra|gi joe|snake|train|warhead","movie_imdb_link":"http://www.imdb.com/title/tt1046173/?ref_=fn_tt_tt_1"},{"director_name":"Pete Docter","actor_2_name":"Mindy Kaling","genres":"Adventure|Animation|Comedy|Drama|Family|Fantasy","actor_1_name":"Amy Poehler","movie_title":"Inside Out ","actor_3_name":"Phyllis Smith","plot_keywords":"anger|joy|memory|running away|sadness","movie_imdb_link":"http://www.imdb.com/title/tt2096673/?ref_=fn_tt_tt_1"},{"director_name":"Jon Favreau","actor_2_name":"Bill Murray","genres":"Adventure|Drama|Family|Fantasy","actor_1_name":"Scarlett Johansson","movie_title":"The Jungle Book ","actor_3_name":"Garry Shandling","plot_keywords":"fire|jungle|remake|tiger|wolf","movie_imdb_link":"http://www.imdb.com/title/tt3040964/?ref_=fn_tt_tt_1"},{"director_name":"Jon Favreau","actor_2_name":"Scarlett Johansson","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Robert Downey Jr.","movie_title":"Iron Man 2 ","actor_3_name":"Jon Favreau","plot_keywords":"hammer|military|monaco|revenge|tony stark","movie_imdb_link":"http://www.imdb.com/title/tt1228705/?ref_=fn_tt_tt_1"},{"director_name":"Rupert Sanders","actor_2_name":"Kristen Stewart","genres":"Action|Adventure|Drama|Fantasy","actor_1_name":"Chris Hemsworth","movie_title":"Snow White and the Huntsman ","actor_3_name":"Sam Claflin","plot_keywords":"evil queen|fairy tale|magic|queen|snow white","movie_imdb_link":"http://www.imdb.com/title/tt1735898/?ref_=fn_tt_tt_1"},{"director_name":"Robert Stromberg","actor_2_name":"Sharlto Copley","genres":"Action|Adventure|Family|Fantasy|Romance","actor_1_name":"Angelina Jolie Pitt","movie_title":"Maleficent ","actor_3_name":"Sam Riley","plot_keywords":"curse|dark fantasy|fairy|king|kingdom","movie_imdb_link":"http://www.imdb.com/title/tt1587310/?ref_=fn_tt_tt_1"},{"director_name":"Matt Reeves","actor_2_name":"Judy Greer","genres":"Action|Adventure|Drama|Sci-Fi","actor_1_name":"Gary Oldman","movie_title":"Dawn of the Planet of the Apes ","actor_3_name":"Kodi Smit-McPhee","plot_keywords":"ape|dam|leader|post apocalypse|sequel","movie_imdb_link":"http://www.imdb.com/title/tt2103281/?ref_=fn_tt_tt_1"},{"director_name":"Roland Joffé","actor_2_name":"Alice Englert","genres":"Action|Adventure|Romance|Sci-Fi","actor_1_name":"Tamsin Egerton","movie_title":"The Lovers ","actor_3_name":"Bipasha Basu","plot_keywords":"1770s|british india|great barrier reef|india|ring","movie_imdb_link":"http://www.imdb.com/title/tt1321869/?ref_=fn_tt_tt_1"},{"director_name":"Carl Rinsch","actor_2_name":"Cary-Hiroyuki Tagawa","genres":"Action|Adventure|Drama|Fantasy","actor_1_name":"Keanu Reeves","movie_title":"47 Ronin ","actor_3_name":"Jin Akanishi","plot_keywords":"box office flop|ronin|samurai|shogun|tournament","movie_imdb_link":"http://www.imdb.com/title/tt1335975/?ref_=fn_tt_tt_1"},{"director_name":"Anthony Russo","actor_2_name":"Chris Evans","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Scarlett Johansson","movie_title":"Captain America: The Winter Soldier ","actor_3_name":"Hayley Atwell","plot_keywords":"conspiracy|heroism|megalomaniac|super soldier|world domination","movie_imdb_link":"http://www.imdb.com/title/tt1843866/?ref_=fn_tt_tt_1"},{"director_name":"Mike Mitchell","actor_2_name":"Kathy Griffin","genres":"Adventure|Animation|Comedy|Family|Fantasy","actor_1_name":"Jon Hamm","movie_title":"Shrek Forever After ","actor_3_name":"Mary Kay Place","plot_keywords":"alternate world|fairy tale parody|female warrior|ogre|true love","movie_imdb_link":"http://www.imdb.com/title/tt0892791/?ref_=fn_tt_tt_1"},{"director_name":"Brad Bird","actor_2_name":"Chris Bauer","genres":"Action|Adventure|Family|Mystery|Sci-Fi","actor_1_name":"Judy Greer","movie_title":"Tomorrowland ","actor_3_name":"Thomas Robinson","plot_keywords":"boy genius|futuristic city|inventor|teenage girl|time travel","movie_imdb_link":"http://www.imdb.com/title/tt1964418/?ref_=fn_tt_tt_1"},{"director_name":"Don Hall","actor_2_name":"Daniel Henney","genres":"Action|Adventure|Animation|Comedy|Drama|Family|Sci-Fi","actor_1_name":"Damon Wayans Jr.","movie_title":"Big Hero 6 ","actor_3_name":"Abraham Benrubi","plot_keywords":"high tech|martial arts|masked man|robot|superhero","movie_imdb_link":"http://www.imdb.com/title/tt2245084/?ref_=fn_tt_tt_1"},{"director_name":"Rich Moore","actor_2_name":"Sarah Silverman","genres":"Adventure|Animation|Comedy|Family|Sci-Fi","actor_1_name":"Jack McBrayer","movie_title":"Wreck-It Ralph ","actor_3_name":"Joe Lo Truglio","plot_keywords":"arcade|candy|glitch|king|medal","movie_imdb_link":"http://www.imdb.com/title/tt1772341/?ref_=fn_tt_tt_1"},{"director_name":"Robert Zemeckis","actor_2_name":"Eddie Deezen","genres":"Adventure|Animation|Family|Fantasy","actor_1_name":"Tom Hanks","movie_title":"The Polar Express ","actor_3_name":"Peter Scolari","plot_keywords":"boy|christmas|christmas eve|north pole|train","movie_imdb_link":"http://www.imdb.com/title/tt0338348/?ref_=fn_tt_tt_1"},{"director_name":"Roland Emmerich","actor_2_name":"Sela Ward","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Vivica A. Fox","movie_title":"Independence Day: Resurgence ","actor_3_name":"Judd Hirsch","plot_keywords":"alien|battle|defense|independence day|mothership","movie_imdb_link":"http://www.imdb.com/title/tt1628841/?ref_=fn_tt_tt_1"},{"director_name":"Dean DeBlois","actor_2_name":"America Ferrera","genres":"Adventure|Animation|Family|Fantasy","actor_1_name":"Gerard Butler","movie_title":"How to Train Your Dragon ","actor_3_name":"Craig Ferguson","plot_keywords":"dragon|island|training|viking|village","movie_imdb_link":"http://www.imdb.com/title/tt0892769/?ref_=fn_tt_tt_1"},{"director_name":"Jonathan Mostow","actor_2_name":"M.C. Gainey","genres":"Action|Sci-Fi","actor_1_name":"Nick Stahl","movie_title":"Terminator 3: Rise of the Machines ","actor_3_name":"Carolyn Hennesy","plot_keywords":"drifter|exploding truck|future|machine|skynet","movie_imdb_link":"http://www.imdb.com/title/tt0181852/?ref_=fn_tt_tt_1"},{"director_name":"James Gunn","actor_2_name":"Vin Diesel","genres":"Action|Adventure|Sci-Fi","actor_1_name":"Bradley Cooper","movie_title":"Guardians of the Galaxy ","actor_3_name":"Djimon Hounsou","plot_keywords":"bounty hunter|outer space|raccoon|talking animal|tree","movie_imdb_link":"http://www.imdb.com/title/tt2015381/?ref_=fn_tt_tt_1"},{"director_name":"Christopher Nolan","actor_2_name":"Anne Hathaway","genres":"Adventure|Drama|Sci-Fi","actor_1_name":"Matthew McConaughey","movie_title":"Interstellar ","actor_3_name":"Mackenzie Foy","plot_keywords":"black hole|father daughter relationship|saving the world|space travel|wormhole","movie_imdb_link":"http://www.imdb.com/title/tt0816692/?ref_=fn_tt_tt_1"},{"director_name":"Christopher Nolan","actor_2_name":"Tom Hardy","genres":"Action|Adventure|Sci-Fi|Thriller","actor_1_name":"Leonardo DiCaprio","movie_title":"Inception ","actor_3_name":"Joseph Gordon-Levitt","plot_keywords":"ambiguous ending|corporate espionage|dream|subconscious|thief","movie_imdb_link":"http://www.imdb.com/title/tt1375666/?ref_=fn_tt_tt_1"},{"director_name":"Hideaki Anno","actor_2_name":"Shin\'ya Tsukamoto","genres":"Action|Adventure|Drama|Horror|Sci-Fi","actor_1_name":"Mark Chinnery","movie_title":"Godzilla Resurgence ","actor_3_name":"Atsuko Maeda","plot_keywords":"blood|godzilla|monster|sequel","movie_imdb_link":"http://www.imdb.com/title/tt4262980/?ref_=fn_tt_tt_1"},{"director_name":"Peter Jackson","actor_2_name":"Adam Brown","genres":"Adventure|Fantasy","actor_1_name":"Aidan Turner","movie_title":"The Hobbit: An Unexpected Journey ","actor_3_name":"James Nesbitt","plot_keywords":"dragon|dwarf|hobbit|orc|wizard","movie_imdb_link":"http://www.imdb.com/title/tt0903624/?ref_=fn_tt_tt_1"},{"director_name":"Rob Cohen","actor_2_name":"Vin Diesel","genres":"Action|Crime|Thriller","actor_1_name":"Paul Walker","movie_title":"The Fast and the Furious ","actor_3_name":"Jordana Brewster","plot_keywords":"eighteen wheeler|illegal street racing|truck|trucker|undercover cop","movie_imdb_link":"http://www.imdb.com/title/tt0232500/?ref_=fn_tt_tt_1"}]`;