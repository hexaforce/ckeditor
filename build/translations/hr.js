(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"*Change %0 content*":"*Promijeni %0 sadržaja*","*Change to:* %0":"*Promijeni u:* %0","*Check item*":"*Označi stavku*","*Format:* %0":"*Format:* %0","*Format:* change table cell properties":"*Format:* promijeni postavke ćelije","*Format:* change table properties":"*Format:* promijeni postavke tablice","*Format:* insert into %0":"*Format:* umetni u %0","*Format:* remove from %0":"*Format:* ukloni iz %0","*Format:* resize table":"*Format:* promjeni veličinu tablice","*Format:* set order to regular":"*Format:* postavi redoslijed na normalni","*Format:* set order to reversed":"*Format:* postavi obrnuti redoslijed","*Format:* set start index to %0":"*Format:* postavi početni indeks na %0","*Indent:* %0":"*Uvuci:* %0","*Insert:* %0":"*Ubaci:* %0","*Merge cells*":"*Spoji ćelije*","*Merge:* %0":"*Spoji:* %0","*Outdent:* %0":"*Izbaci:* %0","*Remove all formatting*":"*Ukloni formatiranje*","*Remove format:* %0":"*Ukloni format:* %0","*Remove highlight*":"*Ukloni isticanje*","*Remove image text alternative*":"*Ukloni alterantivni tekst na slikama*","*Remove link*":"*Ukloni link*","*Remove:* %0":"*Ukloni:* %0","*Replace image URL*":"","*Replace table cells*":"*Zamijeni ćelije tablice*","*Reset font background color*":"*Resetiraj boju pozadine fonta*","*Reset font color*":"*Resetiraj boju fonta*","*Reset font family*":"*Resetiraj porodicu fonta*","*Reset font size*":"*Resetiraj veličinu fonta*","*Reset image width*":"*Resetiraj širinu slike*","*Set font background color:* %0":"*Postavi boju pozadine fonta:* %0","*Set font color:* %0":"*Postavi boju fonta*: %0","*Set font family:* %0":"*Postavi porodicu fonta:\" %0","*Set font size:* %0":"*Postavi veličinu fonta:* %0","*Set format to:* %0":"*Postavi format na:* %0","*Set format:* %0":"","*Set highlight:* %0":"*Postavi isticanje:* %0","*Set image text alternative:* %0":"*Postavi alterantivni tekst slike:* %0","*Set image width:* %0":"*Postavi širinu slike:* %0","*Set link:* %0":"*Postavi link:* %0","*Split cell:* horizontally":"*Razdvoji ćelije:* vodoravno","*Split cell:* vertically":"*Razdvoji ćelije:* okomito","*Split:* %0":"*Razdvoji:* %0","*Uncheck item*":"*Odznači stavku*","%0 of %1":"%0 od %1",Accept:"Prihvati","Accept all selected suggestions":"Prihvati sve odabrane sugestije","Accept all suggestions":"Prihvati sve sugestije","Accept suggestion":"Prihvati sugestiju","Align center":"Poravnaj po sredini","Align left":"Poravnaj ulijevo","Align right":"Poravnaj udesno",Anonymous:"Anonimno",Aquamarine:"Akvamarin","Are you sure?":"Jeste li sigurni?",Big:"Veliki",Black:"Crna","Block quote":"Blok citat",Blue:"Plava","Blue marker":"Plavi marker",Bold:"Podebljano","Break text":"Prelomi tekst","Bulleted List":"Obična lista",Cancel:"Poništi","Cannot access default workspace.":"","Cannot determine a category for the uploaded file.":"Nije moguće utvrditi kategoriju prenesene datoteke.","Cannot upload file:":"Datoteku nije moguće poslati:","Caption for image: %0":"Naslov slike: %0","Caption for the image":"Naslov slike","Centered image":"Centrirana slika","Change image text alternative":"Promijeni alternativni tekst slike","Choose heading":"Odaberite naslov",Clear:"Obriši","Click to edit block":"",Column:"Kolona",Comment:"Komentar","Comment editor":"Editor komentara","Comment was made on an element":"Napravljen je komentar na elementu",COMMENTS_ARCHIVE:"Arhiva komentara",Default:"Podrazumijevano","Delete column":"Obriši kolonu","Delete comment thread?":"Obriši granu komentara?","Delete comment?":"Obriši komentar?","Delete row":"Obriši red","Dim grey":"Tamnosiva","Discard all selected suggestions":"Odbaci sve odabrane sugestije","Discard all suggestions":"Odbaci sve sugestije","Discard suggestion":"Odbaci sugestiju",Downloadable:"Moguće preuzeti","Drag to move":"","Dropdown toolbar":"Traka padajućeg izbornika",Edit:"Promijeni","Edit block":"Uredi blok","Edit link":"Uredi vezu","Editor block content toolbar":"Alatna traka sadržaja uređivača blokova","Editor contextual toolbar":"Kontekstualna alatna traka uređivača","Editor editing area: %0":"Područje Editora: %0","Editor toolbar":"Traka uređivača",ELEMENT_BLOCK_QUOTE:"citat",ELEMENT_BULLETED_LIST:"obična lista",ELEMENT_BULLETED_LIST_CIRCLE:"obična lista (krug)",ELEMENT_BULLETED_LIST_DEFAULT:"",ELEMENT_BULLETED_LIST_DISC:"obična lista (disk)",ELEMENT_BULLETED_LIST_SQUARE:"obična lista (kvadrat)",ELEMENT_CAPTION:"natpis",ELEMENT_CODE_BLOCK:["blok koda","%0 blokova koda","%0 blokova koda"],ELEMENT_HEADING:["zaglavlje (nivo %1)","%0 zaglavlja (nivo %1)","%0 zaglavlja (nivo %1)"],ELEMENT_HEADING_CUSTOM:["%0 naslov (%1)","%0 naslova (%1)","%0 naslovi (%1)"],ELEMENT_HORIZONTAL_LINE:["vodoravna linija","%0 vodoravnih linija","%0 vodoravnih linija"],ELEMENT_HTML_EMBED:["%0 ugrađeni HTMLa","%0 ugrađena HTMLa","%0 ugrađenih HTMLa"],ELEMENT_IMAGE:["slika","%0 slika","%0 slika"],ELEMENT_INLINE_IMAGE:["%0 slika","%0 slika","%0 slika"],ELEMENT_LINE_BREAK:["linija prekida","%0 linija prekida","%0 linija prekida"],ELEMENT_LIST_ITEM:["stavka liste","%0 liste stavaka","%0 liste stavaka"],ELEMENT_MEDIA:["stavka medija","%0 stavaka medija","%0 stavaka medija"],ELEMENT_NUMBERED_LIST:"brojčana lista",ELEMENT_NUMBERED_LIST_DECIMAL:"brojčana lista (decimalna)",ELEMENT_NUMBERED_LIST_DECIMAL_LEADING_ZERO:"brojčana lista (decimalna s vodećom nulom)",ELEMENT_NUMBERED_LIST_DEFAULT:"",ELEMENT_NUMBERED_LIST_LOWER_LATIN:"brojčana lista (mala slova)",ELEMENT_NUMBERED_LIST_LOWER_ROMAN:"brojčana lista (mali rimski brojevi)",ELEMENT_NUMBERED_LIST_UPPER_LATIN:"brojčana lista (velika slova)",ELEMENT_NUMBERED_LIST_UPPER_ROMAN:"brojčana lista (veliki rimski brojevi)",ELEMENT_PAGE_BREAK:["prekid stranice","%0 prekida stranice","%0 prekida stranice"],ELEMENT_PARAGRAPH:["paragraf","%0 paragrafa","%0 paragrafa"],ELEMENT_SPACE:["razmak","%0 razmaka","%0 razmaka"],ELEMENT_TABLE:["tablica","%0 tablice","%0 tablice"],ELEMENT_TABLE_COLUMN:["kolona tablice","%0 kolone tablice","%0 kolone tablice"],ELEMENT_TABLE_COLUMN_WITH_TEXT:["kolona tablice *sa tekstom* %1","%0 kolone tablice *sa tekstom* %1","%0 kolone tablice *sa tekstom* %1"],ELEMENT_TABLE_OF_CONTENTS:["%0 sadržaj","0% sadržaja","0% sadržaja"],ELEMENT_TABLE_ROW:["red tablice","%0 redova tablice","%0 redova tablice"],ELEMENT_TABLE_ROW_WITH_TEXT:["red tablice *sa tekstom* %1","%0 redova tablice *sa tekstom* %1","%0 redova tablice *sa tekstom* %1"],ELEMENT_TABLE_WITH_TEXT:"tablica *sa tekstom* %0",ELEMENT_TITLE:"naslov",ELEMENT_TODO_LIST:"lista zadataka",EMPTY_COMMENTS_ARCHIVE:"Nema arhiviranih komentara.","Enter image caption":"Unesite naslov slike",ENTER_COMMENT_ANNOUNCEMENT:"",ENTER_DELETION_SUGGESTION_ANNOUNCEMENT:"",ENTER_FORMATTING_SUGGESTION_ANNOUNCEMENT:"",ENTER_INSERTION_SUGGESTION_ANNOUNCEMENT:"",EXTERNAL_AVATAR:"Prikazano ime autora dolazi iz vanjskog izvora (dodan od %0)",EXTERNAL_COMMENT:"Ovaj komentar dolazi iz vanjskog izvora.",EXTERNAL_IMPORT_WORD_AVATAR:"Prikazano ime autora dolazi i Word dokumenta kojeg je uvezao %0",EXTERNAL_IMPORT_WORD_COMMENT:"Ovaj komentar dolazi iz uvezene Word datoteke.",EXTERNAL_IMPORT_WORD_SUGGESTION:"Prijedlog dolazi iz uvezene Word datoteke.",EXTERNAL_SUGGESTION:"Prijedlog dolazi iz vanjskog izvora.","Font Family":"Obitelj fonta","Font Size":"Veličina fonta",FORMAT_ALIGN_TO_CENTER:"poravnaj prema središtu",FORMAT_ALIGN_TO_LEFT:"poravnaj na lijevo",FORMAT_ALIGN_TO_RIGHT:"poravnaj na desno",FORMAT_ALIGNMENT:"",FORMAT_BOLD:"podebljaj",FORMAT_CODE:"kod",FORMAT_FONT_BACKGROUND:"",FORMAT_FONT_COLOR:"",FORMAT_FONT_FAMILY:"",FORMAT_FONT_SIZE:"",FORMAT_HEADER_COLUMN:"kolona zaglavlja",FORMAT_HEADER_ROW:"red zaglavlja",FORMAT_HIGHLIGHT:"osvijetli",FORMAT_IMAGE_SIZE:"",FORMAT_INDENT:"",FORMAT_ITALIC:"nakošeno",FORMAT_JUSTIFY_TEXT:"blok poravnanje",FORMAT_LIST_REVERSED:"",FORMAT_LIST_START:"",FORMAT_REGULAR_COLUMN:"obična kolona",FORMAT_REGULAR_ROW:"običan red",FORMAT_RESTRICTED_DISABLED:"*Onemogući u ograničenom načinu uređivanja*",FORMAT_RESTRICTED_ENABLED:"*Omogući u ograničenom načinu uređivanja*",FORMAT_SIDE_IMAGE:"slika",FORMAT_STRIKETHROUGH:"precrtano",FORMAT_STYLE:"",FORMAT_SUBSCRIPT:"",FORMAT_SUPERSCRIPT:"",FORMAT_UNDERLINE:"podcrtano","Full size image":"Slika pune veličine",Green:"Zelena","Green marker":"Zeleni marker","Green pen":"Zeleno pero",Grey:"Siva","Header column":"Kolona zaglavlja","Header row":"Red zaglavlja",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6",HEX:"",Highlight:"Istakni",Huge:"Ogroman","Image resize list":"Lista veličina slika","Image toolbar":"Traka za slike","image widget":"Slika widget","In line":"U istom redu","Insert column left":"Umetni stupac lijevo","Insert column right":"Umetni stupac desno","Insert image":"Umetni sliku","Insert image with file manager":"","Insert media":"Ubaci medij","Insert paragraph after block":"Umetni odlomak poslije bloka","Insert paragraph before block":"Umetni odlomak prije bloka","Insert row above":"Ubaci red iznad","Insert row below":"Ubaci red ispod","Insert table":"Ubaci tablicu","Insert with file manager":"",Italic:"Ukošeno",Justify:"Razvuci",LEAVE_COMMENT_ANNOUNCEMENT:"",LEAVE_DELETION_SUGGESTION_ANNOUNCEMENT:"",LEAVE_FORMATTING_SUGGESTION_ANNOUNCEMENT:"",LEAVE_INSERTION_SUGGESTION_ANNOUNCEMENT:"","Left aligned image":"Lijevo poravnata slika","Light blue":"Svijetloplava","Light green":"Svijetlozelena","Light grey":"Svijetlosiva",Link:"Veza","Link URL":"URL veze","Marked as resolved":"Označi kao riješeno","Media URL":"URL medija","media widget":"dodatak za medije","Merge cell down":"Spoji ćelije prema dolje","Merge cell left":"Spoji ćelije prema lijevo","Merge cell right":"Spoji ćelije prema desno","Merge cell up":"Spoji ćelije prema gore","Merge cells":"Spoji ćelije",Next:"Sljedeći",No:"Ne","No results found":"","No searchable items":"",NUMBER_OF_COMMENTS:["%0 komentar","0% komentara","%0 komentara"],"Numbered List":"Brojčana lista","Open file manager":"Otvori upravitelj datoteka","Open in a new tab":"Otvori u novoj kartici","Open link in new tab":"Otvori vezu u novoj kartici","Open media in new tab":"Otvori medije u novoj kartici",Orange:"Narančasta",Original:"Original",Paragraph:"Paragraf","Paste the media URL in the input.":"Zalijepi URL medija u ulaz.",PENDING_ACTION_COMMENT_THREAD:"Ne snimljene promjene u grani komentara.",PENDING_ACTION_SUGGESTION:"Ne snimljene promjene u sugestijama.","Pink marker":"Rozi marker","Press Enter to type after or press Shift + Enter to type before the widget":"Pritisnite Enter za upisivanje nakon ili pritisnite Shift + Enter za upisivanje prije widgeta",Previous:"Prethodni",Purple:"Ljubičasta",Red:"Crvena","Red pen":"Crveno pero",Redo:"Ponovi",Remove:"Ukloni","Remove Format":"Ukloni format","Remove highlight":"Ukloni isticanje",Reopen:"Ponovo otvori","Replace from computer":"","Replace image":"","Replace image from computer":"","Replace image with file manager":"","Replace with file manager":"",REPLACE_TEXT:"*Zamijeni:* %0 *sa* %1",Reply:"Odgovori...","Reply to reopen discussion...":"Odgovori na ponovno otvorenu raspravu...","Reply...":"Odgovori...","Resize image":"Promijeni veličinu slike","Resize image to %0":"Promijeni veličinu slike u %0","Resize image to the original size":"Vrati veličinu slike na originalnu veličinu",Resolve:"Riješi","Rich Text Editor":"Rich Text Editor","Right aligned image":"Slika poravnata desno",Row:"Red",Save:"Snimi","Select all":"Odaberi sve","Select column":"Odaberi stupac","Select row":"Odaberi redak","Show more items":"Prikaži više stavaka","Side image":"Slika sa strane",Small:"Mali","Split cell horizontally":"Razdvoji ćeliju vodoravno","Split cell vertically":"Razdvoji ćeliju okomito",Strikethrough:"Precrtano","Table toolbar":"Traka za tablice","Text alignment":"Poravnanje teksta","Text alignment toolbar":"Traka za poravnanje","Text alternative":"Alternativni tekst","Text highlight toolbar":"Traka za isticanje teksta","The URL must not be empty.":"URL ne smije biti prazan.","This link has no URL":"Ova veza nema URL","This media URL is not supported.":"URL nije podržan.",Tiny:"Sićušan","Tip: Paste the URL into the content to embed faster.":"Natuknica: Za brže ugrađivanje zalijepite URL u sadržaj.","Toggle caption off":"Isključite natpis","Toggle caption on":"Uključite natpis",TOO_LONG_COMMENT_ALERT:"Sadržaj komentara je predugačak. Vaš komentar sadrži %0 znakova, a ograničenje je %1 znakova.","Track changes":"Prati promjene",Turquoise:"Tirkizna",Underline:"Podcrtavanje",Undo:"Poništi",Unlink:"Ukloni vezu","Upload failed":"Slanje nije uspjelo","Upload from computer":"","Upload image from computer":"","Upload in progress":"Slanje u tijeku",White:"Bijela","Widget toolbar":"Traka sa spravicama","Wrap text":"Prelamanje teksta","Write a comment...":"Napiši komentar...",Yellow:"Žuta","Yellow marker":"Žuti marker",Yes:"Da"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));