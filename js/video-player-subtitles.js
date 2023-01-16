var subtitles = {
    T_194315_video: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:02:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:03:30"), TTime("00:00:05:30"), "Robin Robin")
					
        ]
    },

	T_194315_video1_opg3: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:04:15"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese.<br />Susanne er Gourmetslagter \"Det fede ved mit fag\""),
			T(TTime("00:00:21:30"), TTime("00:00:24:15"), "Susanne Grunzig<br />En af Danmarks bedste gourmetslagtere"),
			T(TTime("00:00:46:00"), TTime("00:00:49:10"), "Jonas Hannibal Kristensen<br />Slagtermester Menu - Haderslev")
					
        ]
    },

	T_194315_video2_opg3: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:08:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese.<br />Henrik er VVS-Energispecialist \"Det fede ved mit fag\""),
			T(TTime("00:00:13:00"), TTime("00:00:17:00"), "Henrik Skovsgaard Bull<br />VVS-Energispecialist"),
			T(TTime("00:02:10:30"), TTime("00:02:15:00"), "Tobias Suni<br />Områdechef. VVS Søborg")
					
        ]
    },

	T_194315_video3_opg3: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:09:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese.<br />Alexander er Mediegrafiker \"Det fede ved mit fag\""),
			T(TTime("00:00:15:00"), TTime("00:00:21:00"), "Alexander Kjær Grote<br />Mediegrafiker"),
			T(TTime("00:01:38:00"), TTime("00:01:41:00"), "Ditte Rønn<br />Kreativ direktør og stifter. Heyday")
					
        ]
    },
};

/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if(arguments.length == 1) {
		frames = (arguments[0]*1)/24;
	}
	else if(arguments.length == 2) {
		frames = (arguments[1]*1)/24;
		seconds = arguments[0]*1;
	}
	else if(arguments.length == 3) {
		frames = (arguments[2]*1)/24;
		seconds = arguments[1]*1;
		minutes = (arguments[0]*1)*60;
	}
	else if(arguments.length == 4) {
		frames = (arguments[3]*1)/24;
		seconds = arguments[2]*1;
		minutes = (arguments[1]*1)*60;
		hours = (arguments[0]*1)*3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * @param {*} value 
 */
function UndefinedToZero(value) {
	if(typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 * @param {numeric} frames Not Required
 * @param {numeric} seconds Not Required
 * @param {numeric} minutes Not Required
 * @param {numeric} hours Not Required
 */
function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if(typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3]*1)/24;
	var seconds = split[2]*1;
	var minutes = (split[1]*1)*60;
	var hours = (split[0]*1)*3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}