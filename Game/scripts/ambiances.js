// MODELE /////////////////////////////////////////////////

/* AMBIANCE DESCRIPTION */
/*
*
*
*
*
*
*
*////////////////////////

/*

const ambianceX = 
{
	beat: new Beat(),
	melodyP1: new Melody
	(
		Melody.ModesNames[modeIndex] || 'modeName', 
		'leadInstrument', 
		'bassInstrument'
	),
	melodyP2: new Melody
	(
		Melody.ModesNames[modeIndex] || 'modeName', 
		'leadInstrument', 
		'bassInstrument'
	),
}
ambianceX.punctualMelodyP1: new PunctualMelody(ambianceX.melodyP1, 'instrument', octave),
ambianceX.punctualMelodyP2: new PunctualMelody(ambianceX.melodyP2, 'instrument', octave),

*/

///////////////////////////////////////////////////////////////////

/* AMBIANCE DESCRIPTION */
/*
*
*
*
*
*
*
*////////////////////////

const ambiance1 = 
{
	beat: new Beat(),
	melodyP1: new Melody
	(
		'minor',
		4,
		'violin', 
		'piano'
	),
	melodyP2: new Melody
	(
		'major', 
		3,
		'flute', 
		'contrabass'
	),
	punctualMelodyP1: new PunctualMelody('xylophone', 3),
	punctualMelodyP2: new PunctualMelody('violin', 4),
}


///////////////////////////////////////////////////////////////////

/* AMBIANCE DESCRIPTION */
/*
*
*
*
*
*
*
*////////////////////////

const ambianceDub = 
{
	beat : new Beat("dub"),
	bassLine : createBassLine("A3", 0),
	melody : new Melody(Melody.ModesNames[0], 4, 'violin'),
	fx : new FXRack()
}
ambianceDub.fx.selectFX('reverb', {reverb : 0.55});
ambianceDub.beat.snare.catchFXs(fx);