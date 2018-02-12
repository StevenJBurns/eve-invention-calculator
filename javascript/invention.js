var inventionSkills =[
																	{"id" : 23087, "name" : "Amarr Encryption Methods"},
																	{"id" : 21790, "name" : "Caldari Encryption Methods"},
																	{"id" : 23121, "name" : "Gallente Encryption Methods"},
																	{"id" : 21791, "name" : "Minmitar Encryption Methods"},
																	{"id" : 11448, "name" : "Electromagnetic Physics"},
																	{"id" : 11453, "name" : "Electronic Engineering"},
																	{"id" : 11446, "name" : "Graviton Physics"},
																	{"id" : 11433, "name" : "High Energy Physics"},
																	{"id" : 11443, "name" : "Hydromagnetic Physics"},
																	{"id" : 11447, "name" : "Laser Physics"},
																	{"id" : 11452, "name" : "Mechanical Engineering"},
																	{"id" : 11529, "name" : "Molecular Engineering"},
																	{"id" : 11442, "name" : "Nanite Engineering"},
																	{"id" : 11451, "name" : "Nuclear Physics"},
																	{"id" : 11441, "name" : "Plasma Physics"},
																	{"id" : 11455, "name" : "Quantum Physics"},
																	{"id" : 11449, "name" : "Rocket Science"}
																	];
																	
var interfaceTypes = [
																		{"id":25553, "name":"Cryptic Data Interface"},
																		{"id":25857, "name":"Cryptic Ship Data Interface"},
																		{"id":26597, "name":"Cryptic Tuner Data Interface"},
																		{"id":25555, "name":"Esoteric Data Interface"},
																		{"id":25853, "name":"Esoteric Ship Data Interface"},
																		{"id":26599, "name":"Esoteric Tuner Data Interface"},
																		{"id":25556, "name":"Incognito Data Interface"},
																		{"id":25855, "name":"Incognito Ship Data Interface"},
																		{"id":26601, "name":"Incognito Tuner Data Interface"},
																		{"id":25554, "name":"Occult Data Interface"},
																		{"id":25851, "name":"Occult Ship Data Interface"},
																		{"id":26603, "name":"Occult Tuner Data Interface"}
																		];

var decryptorTypes = [
																			{"id" : 21580, "modChance": 1.2, "modME" : 2, "modPE" : 5, "modRuns" : 1 , "name" : "Advanced Theories"},
																			{"id" : 21583, "modChance": 1.8, "modME" :-1, "modPE" : 2, "modRuns" : 4 , "name" : "Assembly Instructions"},
																			{"id" : 21579, "modChance": 1.1, "modME" : 3, "modPE" : 3, "modRuns" : 0 , "name" : "Calibration Data"},
																			{"id" : 21582, "modChance": 0.6, "modME" :-2, "modPE" : 1, "modRuns" : 9 , "name" : "Circuitry Schematics"},
																			{"id" : 21581, "modChance": 1.0, "modME" : 1, "modPE" : 4, "modRuns" : 2 , "name" : "Operation Handbook"},

																			{"id" : 23181, "modChance": 0.6, "modME" :-2, "modPE" : 1, "modRuns" : 9 , "name" : "Circular Logic"},
																			{"id" : 23179, "modChance": 1.2, "modME" : 2, "modPE" : 5, "modRuns" : 1 , "name" : "Classic Doctrine"},
																			{"id" : 23178, "modChance": 1.1, "modME" : 3, "modPE" : 3, "modRuns" : 0 , "name" : "Formation Layout"},
																			{"id" : 23180, "modChance": 1.0, "modME" : 1, "modPE" : 4, "modRuns" : 2 , "name" : "Sacred Manifesto"},
																			{"id" : 23182, "modChance": 1.8, "modME" :-1, "modPE" : 2, "modRuns" : 4 , "name" : "War Strategon"},

																			{"id" : 21577, "modChance": 1.8, "modME" :-1, "modPE" : 2, "modRuns" : 4 , "name" : "Installation Guide"},
																			{"id" : 21574, "modChance": 1.2, "modME" : 2, "modPE" : 5, "modRuns" : 1 , "name" : "Prototype Diagram"},
																			{"id" : 21573, "modChance": 1.1, "modME" : 3, "modPE" : 3, "modRuns" : 0 , "name" : "Tuning Instructions"},
																			{"id" : 21575, "modChance": 1.0, "modME" : 1, "modPE" : 4, "modRuns" : 2 , "name" : "User Manual"},
																			{"id" : 21576, "modChance": 0.6, "modME" :-2, "modPE" : 1, "modRuns" : 9 , "name" : "Interface Alignment Chart"},

																			{"id" : 23187, "modChance": 1.8, "modME" :-1, "modPE" : 2, "modRuns" : 4 , "name" : "Stolen Formulas"},
																			{"id" : 23184, "modChance": 1.2, "modME" : 2, "modPE" : 5, "modRuns" : 1 , "name" : "Test Reports"},
																			{"id" : 23183, "modChance": 1.1, "modME" : 3, "modPE" : 3, "modRuns" : 0 , "name" : "Collision Measurements"},
																			{"id" : 23185, "modChance": 1.0, "modME" : 1, "modPE" : 4, "modRuns" : 2 , "name" : "Engagement Plan"},
																			{"id" : 23186, "modChance": 0.6, "modME" :-2, "modPE" : 1, "modRuns" : 9 , "name" : "Symbiotic Figures"}
																			];
																

$(document).ready(function()
  {
  request = new XMLHttpRequest();

  $.getjson('/getBlueprint',{id:0},null);
  }
);