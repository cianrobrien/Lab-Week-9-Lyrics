function lyrics(){
	for(int i=99; i>0; i=i+1){
		Document.getElementByID("main").innerHTML+=<br />+i+ “Bottles of Beer on the wall, “ +i+” bottles of beer” <br /> “Take one down and pass it around,“ +(i-1)+ “bottles of beer on the wall” <br />;
	}	
	
	Document.getElementByID(“main”).innerHTML+=”< br /> “2 bottles of beer on the wall, 2 bottles of beer” < br /> “Take one down and pass it around, 1 bottle of beer on the wall” < br /> "1 bottle of beer on the wall, 1 bottle of beer," < br /> "Take one down and pass it around, no more bottles of beer on the wall" < br /> "No more bottles of beer on the wall, no more bottles of beer" < br /> "Go to the store and buy some more, 99 bottles of beer on the wall";
}

}	