
var relativ=0;
if (relativ==1){
	gamme = minorRelative(gamme);
}

var harmonyInstrument = new InstrumentSampler('violin');

class Harmony {
	constructor(tonalite)
	{
		this.tonalite = tonalite;
		this.gamme = gammeMajor(tonalite);
		this.mesureCount = 0;
		this.randInt = 0;
		this.leftHand = this.createLeftHand(tonalite, 1);
		this.rightHand = this.createRightHand(tonalite, 1);

		this.stop = 0;
	}

	

	createLeftHand(tonalite, degré, finCadence=0)
	{
		var modifDegré = 1;
		switch(degré){
			case 5:
				modifDegré =  Math.pow(freqIncrement, 7);
				break;

			case 2:
				modifDegré =  Math.pow(freqIncrement, 2);
				break;

			case 4:
				modifDegré =  Math.pow(freqIncrement, 5);
				break;

			case 6:
				modifDegré =  Math.pow(freqIncrement, -3)*2;
				break;

			default:
				break;
		}
		let _gamme = this.gamme;
		var leftHand =  new Tone.Event(
			function(time){
				harmonyInstrument.play(
					Tone.Frequency(_gamme[0]*modifDegré/2).toNote(),
					Tone.Time("2n").toSeconds()*(1+2*finCadence),
					time
				);
				harmonyInstrument.play(
					Tone.Frequency(_gamme[4]*modifDegré/2).toNote(),
					Tone.Time("2n").toSeconds()*(1+2*finCadence),
					time
				);
			}
		);
		leftHand.loop = Infinity;
		leftHand.loopEnd = Tone.Time("1m").toMilliseconds()*(1+finCadence);
		return leftHand;
	}

	createRightHand(tonalite, degré, finCadence=0)
	{
		this.gamme = gammeMajor(tonalite);
		let _gamme = this.gamme;
		if (relativ==1){
			_gamme = minorRelative(_gamme);
		}
		var modifDegré = 1;
		switch(degré){
			case 5:
				modifDegré =  Math.pow(freqIncrement, 7);
				break;

			case 2:
				modifDegré =  Math.pow(freqIncrement, 2);
				_gamme = gammeMinor(tonalite);
				if (relativ==1){_gamme = minorRelative(_gamme);}
				break;

			case 4:
				modifDegré =  Math.pow(freqIncrement, 5);
				break;

			case 6:
				modifDegré =  Math.pow(freqIncrement, -3);
				_gamme = gammeMinor(tonalite);
				if (relativ==1){_gamme = minorRelative(_gamme);}
				break;

			default:
				break;
		}
		
		if (finCadence){
			var rightHand = new Tone.Event(
				function(time){
					harmonyInstrument.play(
						Tone.Frequency(_gamme[2]*modifDegré).toNote(),
						Tone.Time("2n").toSeconds()*3,
						time 
					);
					harmonyInstrument.play(
						Tone.Frequency(_gamme[4]*modifDegré).toNote(),
						Tone.Time("2n").toSeconds()*3,
						time 
					);
				}
			);
		}
		else{
			var rightHand = new Tone.Event(
				function(time){
					harmonyInstrument.play(
						Tone.Frequency(_gamme[2]*modifDegré).toNote(),
						"4n",
						time + Tone.Time("1m").toSeconds()*1/4
					);
					harmonyInstrument.play(
						Tone.Frequency(_gamme[4]*modifDegré).toNote(),
						"4n",
						time + Tone.Time("1m").toSeconds()*1/4
					);
					harmonyInstrument.play(
						Tone.Frequency(_gamme[2]*modifDegré).toNote(),					
						"4n",
						time + Tone.Time("1m").toSeconds()*3/4
					);
					harmonyInstrument.play(
						Tone.Frequency(_gamme[4]*modifDegré).toNote(),
						"4n",
						time + Tone.Time("1m").toSeconds()*3/4
					);
				}
			);
		}

		rightHand.loop = Infinity;
		rightHand.loopEnd = Tone.Time("1m").toMilliseconds()*(1+finCadence);
		return rightHand;
	}


	modifLeftHand(degré, finCadence =0)
	{
		if (data["player"]=="Black"){
			harmonyInstrument = ambianceHarmony.player1Instrument;
			if (relativ != 1){
				relativ = 1;
			}
		}
		else{
			harmonyInstrument = ambianceHarmony.player2Instrument;
			if (relativ != 0){
				relativ = 0;
			}		
		}
		this.leftHand.stop();
		this.leftHand = this.createLeftHand(this.tonalite, degré, finCadence);
		this.leftHand.start();
	}

	modifRightHand(degré, finCadence =0)
	{
		/*
		if (data["player"]=="Black"){
			harmonyInstrument =  ambianceHarmony.player1Instrument;
			if (relativ != 1){
				relativ = 1;
			}
		}
		else{
			harmonyInstrument =  ambianceHarmony.player2Instrument;
			if (relativ != 0){
				relativ = 0;
			}		
		}*/
		this.rightHand.stop();
		this.rightHand = this.createRightHand(this.tonalite, degré, finCadence);
		this.rightHand.start()
	}

	play(){
		harmony.stop = 0;
		updateHarmony();
	}

	end(){
		this.stop = 1;
	}

	incrementMesure(n)
	{
		if ((this.mesureCount+n) > 3){
			this.mesureCount += (n-4);
		}
		else{
			this.mesureCount += n;
		}
	}

	sequence0()
	{
		//console.log("sequence0");
		//console.log(this.mesureCount);

		if (this.mesureCount ==0){
			this.modifLeftHand(1);
			this.modifRightHand(1);
			//console.log("degré1");
		}
		else if (this.mesureCount==1){
			this.modifLeftHand(5);
			this.modifRightHand(5);
			//console.log("degré5");
		}
		else if (this.mesureCount==2){
			this.modifLeftHand(1, 1);
			this.modifRightHand(1, 1);
			//console.log("degré1");
		}

		this.incrementMesure(1);
		if (this.mesureCount !=0){
			window.setTimeout(this.sequence0.bind(this), Tone.Time("1m").toMilliseconds());
		}
	}

	sequence1()
	{
		//console.log("sequence1");
		//console.log(this.mesureCount);
		if (this.mesureCount ==0){
			this.modifLeftHand(5);
			this.modifRightHand(5);
			//console.log("degré1");
		}
		else if (this.mesureCount==1){
			this.modifLeftHand(1);
			this.modifRightHand(1);
			//console.log("degré5");
		}
		else if (this.mesureCount==2){
			this.modifLeftHand(5, 1);
			this.modifRightHand(5, 1);
			//console.log("degré1");
		}
		this.incrementMesure(1);
		if (this.mesureCount !=0){
			window.setTimeout(this.sequence1.bind(this), Tone.Time("1m").toMilliseconds());
		}
	}

	sequence2()
	{
		//console.log("sequence2");
		//console.log(this.mesureCount)
		if (this.mesureCount ==0){
			this.modifLeftHand(2);
			this.modifRightHand(2);
			//console.log("degré1");
		}
		else if (this.mesureCount==1){
			this.modifLeftHand(5);
			this.modifRightHand(5);
			//console.log("degré5");
		}
		else if (this.mesureCount==2){
			this.modifLeftHand(1, 1);
			this.modifRightHand(1, 1);
			//console.log("degré1");
		}
		this.incrementMesure(1);
		if (this.mesureCount !=0){
			window.setTimeout(this.sequence2.bind(this), Tone.Time("1m").toMilliseconds());
		}
	}

	sequence3()
	{
		//console.log("sequence3");
		if (this.mesureCount ==0){
			this.modifLeftHand(1);
			this.modifRightHand(1);
			//console.log("degré1");
		}
		else if (this.mesureCount ==1){
			this.modifLeftHand(4);
			this.modifRightHand(4);
			//console.log("degré4");
		}
		else if (this.mesureCount ==2){
			this.modifLeftHand(2);
			this.modifRightHand(2);
			//console.log("degré2");
		}
		else if (this.mesureCount ==3){
			this.modifLeftHand(5);
			this.modifRightHand(5);
			//console.log("degré5");
		}
		this.incrementMesure(1);
		if (this.mesureCount !=0){
			window.setTimeout(this.sequence3.bind(this), Tone.Time("1m").toMilliseconds());
		}
	}

	sequence4()
	{
		//console.log("sequence4");
		if (this.mesureCount ==0){
			this.modifLeftHand(2);
			this.modifRightHand(2);
			//console.log("degré1");
		}
		else if (this.mesureCount ==1){
			this.modifLeftHand(5);
			this.modifRightHand(5);
			//console.log("degré4");
		}
		else if (this.mesureCount ==2){
			this.modifLeftHand(1);
			this.modifRightHand(1);
			//console.log("degré2");
		}
		else if (this.mesureCount ==3){
			this.modifLeftHand(6);
			this.modifRightHand(6);
			//console.log("degré5");
		}
		this.incrementMesure(1);
		if (this.mesureCount !=0){
			window.setTimeout(this.sequence4.bind(this), Tone.Time("1m").toMilliseconds());
		}
	}
}


function updateHarmony()
{
	harmony.randInt = getRandomInt(5);

	switch (harmony.randInt)
	{
		case 0 :
			harmony.sequence0();
			break;

		case 1 :
			harmony.sequence1();
			break;

		case 2 :
			harmony.sequence2();
			break;

		case 3 :
			harmony.sequence3();
			break;

		case 4 :
			harmony.sequence4();
			break;

		default:
			break;
	}

	if (harmony.stop != 1){
		window.setTimeout(updateHarmony, Tone.Time("4m").toMilliseconds());
	}
}







