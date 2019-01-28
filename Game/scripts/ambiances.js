const instrument1List = 
[
new InstrumentSampler('piano'),  
new InstrumentSampler('bassoon'), 
new InstrumentSampler('cello'), 
new InstrumentSampler('clarinet'), 
new InstrumentSampler('flute'), 
new InstrumentSampler('french-horn'), 
new InstrumentSampler('guitar-acoustic'), 
new InstrumentSampler('guitar-electric'),
new InstrumentSampler('guitar-nylon'), 
new InstrumentSampler('harmonium'), 
new InstrumentSampler('harp'), 
new InstrumentSampler('organ'), 
new InstrumentSampler('saxophone'), 
new InstrumentSampler('trombone'), 
new InstrumentSampler('trumpet'), 
new InstrumentSampler('tuba'), 
new InstrumentSampler('violin'), 
new InstrumentSampler('xylophone')
];

const instrument2List = 
[
new InstrumentSampler('bass-electric'), 
new InstrumentSampler('bassoon'), 
new InstrumentSampler('cello'), 
new InstrumentSampler('french-horn'), 
new InstrumentSampler('constrabass'), 
new InstrumentSampler('tuba')
];

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
	themeP1: new Theme
	(
		Theme.ModesNames[modeIndex] || 'modeName', 
		'leadInstrument', 
		'bassInstrument'
	),
	themeP2: new Theme
	(
		Theme.ModesNames[modeIndex] || 'modeName', 
		'leadInstrument', 
		'bassInstrument'
	),
}

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
	nom : "ambiance1",

	beat: new Beat(),

	player1Instrument1 : new InstrumentSampler('french-horn'),
	player1Instrument2 : new InstrumentSampler('french-horn'),
	player2Instrument1 : new InstrumentSampler('french-horn'),
	player2Instrument2 : new InstrumentSampler('french-horn'),
	
	themeP1: new Theme('minor', 3, 'guitar-acoustic', 'guitar-electric'),
	themeP2: new Theme('major', 3, 'flute', 'contrabass'),
	fx: new FXRack()
}

ambiance1.fx.selectFX('vibrato', {frequency: 2, depth: 0.5});
ambiance1.fx.selectFX('reverb', {reverb: 0.1});
ambiance1.fx.selectFX('pingPongDelay', {delayTime: "8n"});
ambiance1.themeP1.bass.catchFXs(ambiance1.fx);
ambiance1.themeP1.lead.catchFXs(ambiance1.fx);


const ambianceHarmony =
{
	nom : "ambianceHarmony",

	beat : new Beat(),

	player1Instrument1 : new InstrumentSampler('violin'),
	player1Instrument2 : new InstrumentSampler('violin'),
	player2Instrument1 : new InstrumentSampler('flute'),
	player2Instrument2 : new InstrumentSampler('flute'),

	themeP1: new Theme('minor', 3, 'guitar-acoustic', 'guitar-electric'),
	themeP2: new Theme('major', 3, 'flute', 'contrabass')
}

const ambianceDrum =
{
	nom : "ambianceDrum",

	beat : new Beat("techno"),

	player1Instrument1 : new InstrumentSampler('french-horn'),
	player1Instrument2 : new InstrumentSampler('french-horn'),
	player2Instrument1 : new InstrumentSampler('flute'),
	player2Instrument2 : new InstrumentSampler('french-horn'),

	themeP1: new Theme('minor', 3, 'guitar-acoustic', 'guitar-electric'),
	themeP2: new Theme('major', 3, 'flute', 'contrabass')
}

const ambianceDub = 
{
	nom : "ambianceDub",

	beat : new Beat("dub"),

	player1Instrument1 : new InstrumentSampler('violin'),
	player1Instrument2 : new InstrumentSampler('violin'),
	player2Instrument1 : new InstrumentSampler('trumpet'),
	player2Instrument2 : new InstrumentSampler('trumpet'),

	themeP1 : new Theme('major', 3, 'violin', 'trumpet'),
	themeP2 : new Theme('major', 3, 'violin', 'trumpet'),

	bassLine : createBassLine("A3", 0),

	fx : new FXRack()
}

//ambianceDub.fx.selectFX('reverb', {reverb : 0.55});
//ambianceDub.beat.snare.catchFXs(fx);


