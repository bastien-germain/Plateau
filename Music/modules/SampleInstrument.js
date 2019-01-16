/**
* @fileoverview A sample library and quick-loader for tone.js
* 
* @author N.P. Brosowsky (nbrosowsky@gmail.com)
* https://github.com/nbrosowsky/tonejs-instruments
*/

class SampleInstrument
{
    constructor(instrument)
    {   
        this.sampleLibrary = {
            'bass-electric': {
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'A#4': 'As4.[mp3|ogg]',
                'A#5': 'As5.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'C#5': 'Cs5.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'E5': 'E5.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G5': 'G5.[mp3|ogg]'
            },

            'bassoon': {
                'A3': 'A3.[mp3|ogg]',
                'C2': 'C2.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'G1': 'G1.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'A1': 'A1.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]'

            },

            'cello': {
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'F#4': 'Fs4.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'G#3': 'Gs3.[mp3|ogg]',
                'G#4': 'Gs4.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'A#4': 'As4.[mp3|ogg]',
                'B2': 'B2.[mp3|ogg]',
                'B3': 'B3.[mp3|ogg]',
                'B4': 'B4.[mp3|ogg]',
                'C2': 'C2.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'D#4': 'Ds4.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]'

            },

            'clarinet': {
                'D3': 'D3.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D5': 'D5.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'F#5': 'Fs5.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'A#4': 'As4.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]'

            },

            'contrabass': {
                'C1': 'C1.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]',
                'D1': 'D1.[mp3|ogg]',
                'E1': 'E1.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'F#0': 'Fs0.[mp3|ogg]',
                'F#1': 'Fs1.[mp3|ogg]',
                'G0': 'G0.[mp3|ogg]',
                'G#1': 'Gs1.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'A1': 'A1.[mp3|ogg]',
                'A#0': 'As0.[mp3|ogg]',
                'B2': 'B2.[mp3|ogg]'

            },

            'flute': {
                'A5': 'A5.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C6': 'C6.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'E5': 'E5.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]'

            },

            'french-horn': {
                'D2': 'D2.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D#1': 'Ds1.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'G1': 'G1.[mp3|ogg]',
                'A0': 'A0.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'C1': 'C1.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',

            },

            'guitar-acoustic': {
                'F3': 'F3.[mp3|ogg]',
                'F#1': 'Fs1.[mp3|ogg]',
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'G1': 'G1.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G#1': 'Gs1.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'G#3': 'Gs3.[mp3|ogg]',
                'A1': 'A1.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A#1': 'As1.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'B1': 'B1.[mp3|ogg]',
                'B2': 'B2.[mp3|ogg]',
                'B3': 'B3.[mp3|ogg]',
                'C2': 'C2.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'D1': 'D1.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D#1': 'Ds1.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'E1': 'E1.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'F1': 'F1.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]'

            },


            'guitar-electric': {
                'D#3': 'Ds3.[mp3|ogg]',
                'D#4': 'Ds4.[mp3|ogg]',
                'D#5': 'Ds5.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'F#4': 'Fs4.[mp3|ogg]',
                'F#5': 'Fs5.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A5': 'A5.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C6': 'C6.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]'
            },
            
            'guitar-nylon': {
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'F#4': 'Fs4.[mp3|ogg]',
                'F#5': 'Fs5.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G5': 'G3.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'G#4': 'Gs4.[mp3|ogg]',
                'G#5': 'Gs5.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A5': 'A5.[mp3|ogg]',
                'A#5': 'As5.[mp3|ogg]',
                'B1': 'B1.[mp3|ogg]',
                'B2': 'B2.[mp3|ogg]',
                'B3': 'B3.[mp3|ogg]',
                'B4': 'B4.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'C#5': 'Cs5.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D5': 'D5.[mp3|ogg]',
                'D#4': 'Ds4.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'E5': 'E5.[mp3|ogg]'
            },


            'harmonium': {
                'C2': 'C2.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'C#5': 'Cs5.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D5': 'D5.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'D#4': 'Ds4.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'G#3': 'Gs3.[mp3|ogg]',
                'G#4': 'Gs4.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'A#4': 'As4.[mp3|ogg]'
            },

            'harp': {
                'C5': 'C5.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D6': 'D6.[mp3|ogg]',
                'D7': 'D7.[mp3|ogg]',
                'E1': 'E1.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E5': 'E5.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'F6': 'F6.[mp3|ogg]',
                'F7': 'F7.[mp3|ogg]',
                'G1': 'G1.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G5': 'G5.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A6': 'A6.[mp3|ogg]',
                'B1': 'B1.[mp3|ogg]',
                'B3': 'B3.[mp3|ogg]',
                'B5': 'B5.[mp3|ogg]',
                'B6': 'B6.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]'

            },

            'organ': {
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C6': 'C6.[mp3|ogg]',
                'D#1': 'Ds1.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'D#4': 'Ds4.[mp3|ogg]',
                'D#5': 'Ds5.[mp3|ogg]',
                'F#1': 'Fs1.[mp3|ogg]',
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'F#4': 'Fs4.[mp3|ogg]',
                'F#5': 'Fs5.[mp3|ogg]',
                'A1': 'A1.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A5': 'A5.[mp3|ogg]',
                'C1': 'C1.[mp3|ogg]',
                'C2': 'C2.[mp3|ogg]'
            },

            'piano': {
                'A0': 'A0.[mp3|ogg]',
                'A1': 'A1.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A5': 'A5.[mp3|ogg]',
                'A6': 'A6.[mp3|ogg]',
                'A#0': 'As0.[mp3|ogg]',
                'A#1': 'As1.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'A#4': 'As4.[mp3|ogg]',
                'A#5': 'As5.[mp3|ogg]',
                'A#6': 'As6.[mp3|ogg]',
                'B0': 'B0.[mp3|ogg]',
                'B1': 'B1.[mp3|ogg]',
                'B2': 'B2.[mp3|ogg]',
                'B3': 'B3.[mp3|ogg]',
                'B4': 'B4.[mp3|ogg]',
                'B5': 'B5.[mp3|ogg]',
                'B6': 'B6.[mp3|ogg]',
                'C0': 'C0.[mp3|ogg]',
                'C1': 'C1.[mp3|ogg]',
                'C2': 'C2.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C6': 'C6.[mp3|ogg]',
                'C7': 'C7.[mp3|ogg]',
                'C#0': 'Cs0.[mp3|ogg]',
                'C#1': 'Cs1.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'C#5': 'Cs5.[mp3|ogg]',
                'C#6': 'Cs6.[mp3|ogg]',
                'D0': 'D0.[mp3|ogg]',
                'D1': 'D1.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D5': 'D5.[mp3|ogg]',
                'D6': 'D6.[mp3|ogg]',
                'D#0': 'Ds0.[mp3|ogg]',
                'D#1': 'Ds1.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'D#4': 'Ds4.[mp3|ogg]',
                'D#5': 'Ds5.[mp3|ogg]',
                'D#6': 'Ds6.[mp3|ogg]',
                'E0': 'E0.[mp3|ogg]',
                'E1': 'E1.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'E5': 'E5.[mp3|ogg]',
                'E6': 'E6.[mp3|ogg]',
                'F0': 'F0.[mp3|ogg]',
                'F1': 'F1.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'F5': 'F5.[mp3|ogg]',
                'F6': 'F6.[mp3|ogg]',
                'F#0': 'Fs0.[mp3|ogg]',
                'F#1': 'Fs1.[mp3|ogg]',
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'F#4': 'Fs4.[mp3|ogg]',
                'F#5': 'Fs5.[mp3|ogg]',
                'F#6': 'Fs6.[mp3|ogg]',
                'G0': 'G0.[mp3|ogg]',
                'G1': 'G1.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G5': 'G5.[mp3|ogg]',
                'G6': 'G6.[mp3|ogg]',
                'G#0': 'Gs0.[mp3|ogg]',
                'G#1': 'Gs1.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'G#3': 'Gs3.[mp3|ogg]',
                'G#4': 'Gs4.[mp3|ogg]',
                'G#5': 'Gs5.[mp3|ogg]',
                'G#6': 'Gs6.[mp3|ogg]'
            },

            'saxophone': {
                'D#4': 'Ds4.[mp3|ogg]',
                'E2': 'E2.[mp3|ogg]',
                'E3': 'E3.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'F#2': 'Fs2.[mp3|ogg]',
                'F#3': 'Fs3.[mp3|ogg]',
                'F#4': 'Fs4.[mp3|ogg]',
                'G2': 'G2.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'G#3': 'Gs3.[mp3|ogg]',
                'G#4': 'Gs4.[mp3|ogg]',
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'B2': 'B2.[mp3|ogg]',
                'B3': 'B3.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C#2': 'Cs2.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'C#4': 'Cs4.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]'

            },

            'trombone': {
                'A#2': 'As2.[mp3|ogg]',
                'C2': 'C2.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]',
                'C#1': 'Cs1.[mp3|ogg]',
                'C#3': 'Cs3.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D#1': 'Ds1.[mp3|ogg]',
                'D#2': 'Ds2.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'F1': 'F1.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'G#1': 'Gs1.[mp3|ogg]',
                'G#2': 'Gs2.[mp3|ogg]',
                'A#0': 'As0.[mp3|ogg]',
                'A#1': 'As1.[mp3|ogg]'

            },

            'trumpet': {
                'C5': 'C5.[mp3|ogg]',
                'D4': 'D4.[mp3|ogg]',
                'D#3': 'Ds3.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'F3': 'F3.[mp3|ogg]',
                'F4': 'F4.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'A2': 'A2.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A#3': 'As3.[mp3|ogg]',
                'C3': 'C3.[mp3|ogg]'

            },

            'tuba': {
                'A#1': 'As1.[mp3|ogg]',
                'A#2': 'As2.[mp3|ogg]',
                'D2': 'D2.[mp3|ogg]',
                'D3': 'D3.[mp3|ogg]',
                'D#1': 'Ds1.[mp3|ogg]',
                'F0': 'F0.[mp3|ogg]',
                'F1': 'F1.[mp3|ogg]',
                'F2': 'F2.[mp3|ogg]',
                'A#0': 'As0.[mp3|ogg]'

            },

            'violin': {
                'A3': 'A3.[mp3|ogg]',
                'A4': 'A4.[mp3|ogg]',
                'A5': 'A5.[mp3|ogg]',
                'A6': 'A6.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C6': 'C6.[mp3|ogg]',
                'C7': 'C7.[mp3|ogg]',
                'E4': 'E4.[mp3|ogg]',
                'E5': 'E5.[mp3|ogg]',
                'E6': 'E6.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G5': 'G5.[mp3|ogg]',
                'G6': 'G6.[mp3|ogg]'
                
            },

            'xylophone': {
                'C7': 'C7.[mp3|ogg]',
                'G3': 'G3.[mp3|ogg]',
                'G4': 'G4.[mp3|ogg]',
                'G5': 'G5.[mp3|ogg]',
                'G6': 'G6.[mp3|ogg]',
                'C4': 'C4.[mp3|ogg]',
                'C5': 'C5.[mp3|ogg]',
                'C6': 'C6.[mp3|ogg]'
            }
        };

        this.instrument = instrument;

        this.minify = false; // If true : loads less samples.
        this.ext = '.[mp3|ogg]';
        this.baseUrl = './samples/';
        this.onload = null;

        this.sampler = this.load();
    }

    load() 
    {
        return new Tone.Sampler(
            this.sampleLibrary[this.instrument], 
            {baseUrl: this.baseUrl + this.instrument + "/", onload: this.onload}
        )
    }

    switch(instrument) 
    {
        console.log(instrument);
        this.instrument = instrument;
        this.sampler = this.load();
    }

    play(note) 
    {           
        if (note.state === true) 
            this.sampler.triggerAttack(Tone.Frequency(note.note, "midi").toNote());
        else if (note.state === false) 
            this.sampler.triggerRelease(Tone.Frequency(note.note, "midi").toNote());
    }

    play(note ,time, duration) 
    {           
        if (note.state === true) 
            this.sampler.triggerAttack(Tone.Frequency(note.note, "midi").toNote(), time, duration);
        else if (note.state === false) 
            this.sampler.triggerRelease(Tone.Frequency(note.note, "midi").toNote(), time, duration);
    }
}


