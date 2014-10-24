var TSXKP;
(function (TSXKP) {
    (function (Configs) {
        var AppleID = (function () {
            function AppleID() {
                this.symbol_alphabet = Configs.SymbolAlphabets.AppleID;
                this.separator_alphabet = Configs.SeparatorAlphabets.AppleID;
                this.word_length_min = 5;
                this.word_length_max = 7;
                this.num_words = 3;
                this.separator_character_type = 1 /* Random */;
                this.padding_digits_before = 2;
                this.padding_digits_after = 2;
                this.padding_type = 1 /* Fixed */;
                this.padding_character_type = 1 /* Random */;
                this.padding_characters_before = 1;
                this.padding_characters_after = 1;
                this.case_transform = 6 /* Random */;
                this.character_substitutions = {};
            }
            return AppleID;
        })();
        Configs.AppleID = AppleID;
    })(TSXKP.Configs || (TSXKP.Configs = {}));
    var Configs = TSXKP.Configs;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Configs) {
        (function (SeparatorCharacterType) {
            SeparatorCharacterType[SeparatorCharacterType["None"] = 0] = "None";
            SeparatorCharacterType[SeparatorCharacterType["Random"] = 1] = "Random";
            SeparatorCharacterType[SeparatorCharacterType["Specific"] = 2] = "Specific";
        })(Configs.SeparatorCharacterType || (Configs.SeparatorCharacterType = {}));
        var SeparatorCharacterType = Configs.SeparatorCharacterType;

        (function (PaddingType) {
            PaddingType[PaddingType["None"] = 0] = "None";
            PaddingType[PaddingType["Fixed"] = 1] = "Fixed";
            PaddingType[PaddingType["Adaptive"] = 2] = "Adaptive";
        })(Configs.PaddingType || (Configs.PaddingType = {}));
        var PaddingType = Configs.PaddingType;

        (function (PaddingCharacterType) {
            PaddingCharacterType[PaddingCharacterType["None"] = 0] = "None";
            PaddingCharacterType[PaddingCharacterType["Random"] = 1] = "Random";
            PaddingCharacterType[PaddingCharacterType["Separator"] = 2] = "Separator";
            PaddingCharacterType[PaddingCharacterType["Specific"] = 3] = "Specific";
        })(Configs.PaddingCharacterType || (Configs.PaddingCharacterType = {}));
        var PaddingCharacterType = Configs.PaddingCharacterType;

        (function (CaseTransform) {
            CaseTransform[CaseTransform["None"] = 0] = "None";
            CaseTransform[CaseTransform["Upper"] = 1] = "Upper";
            CaseTransform[CaseTransform["Lower"] = 2] = "Lower";
            CaseTransform[CaseTransform["Capitalise"] = 3] = "Capitalise";
            CaseTransform[CaseTransform["Invert"] = 4] = "Invert";
            CaseTransform[CaseTransform["Alternate"] = 5] = "Alternate";
            CaseTransform[CaseTransform["Random"] = 6] = "Random";
        })(Configs.CaseTransform || (Configs.CaseTransform = {}));
        var CaseTransform = Configs.CaseTransform;

        (function (RandomIncrement) {
            RandomIncrement[RandomIncrement["Auto"] = 0] = "Auto";
            RandomIncrement[RandomIncrement["Specific"] = 1] = "Specific";
        })(Configs.RandomIncrement || (Configs.RandomIncrement = {}));
        var RandomIncrement = Configs.RandomIncrement;

        Configs.RandomGenerator = function (count) {
            var numbers;
            var i;
            numbers = [];

            for (i = 0; i < count; ++i) {
                numbers.push(Math.random());
            }

            return numbers;
        };
    })(TSXKP.Configs || (TSXKP.Configs = {}));
    var Configs = TSXKP.Configs;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Configs) {
        var SeparatorAlphabets = (function () {
            function SeparatorAlphabets() {
            }
            SeparatorAlphabets.Standard = ["-", "+", "=", ".", "*", "_", "|", "~", ","];
            SeparatorAlphabets.AppleID = ["-", ":", ".", ","];
            return SeparatorAlphabets;
        })();
        Configs.SeparatorAlphabets = SeparatorAlphabets;
    })(TSXKP.Configs || (TSXKP.Configs = {}));
    var Configs = TSXKP.Configs;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Configs) {
        var SimpleAppleID = (function () {
            function SimpleAppleID() {
                this.symbol_alphabet = Configs.SymbolAlphabets.AppleID;
                this.separator_alphabet = Configs.SeparatorAlphabets.AppleID;
                this.word_length_min = 4;
                this.word_length_max = 8;
                this.num_words = 3;
                this.separator_character_type = 0 /* None */;
                this.padding_digits_before = 0;
                this.padding_digits_after = 2;
                this.padding_type = 0 /* None */;
                this.padding_character_type = 0 /* None */;
                this.case_transform = 3 /* Capitalise */;
                this.character_substitutions = {};
            }
            return SimpleAppleID;
        })();
        Configs.SimpleAppleID = SimpleAppleID;
    })(TSXKP.Configs || (TSXKP.Configs = {}));
    var Configs = TSXKP.Configs;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Configs) {
        var SymbolAlphabets = (function () {
            function SymbolAlphabets() {
            }
            SymbolAlphabets.Full = ["!", "@", "$", "%", "^", "&", "*", "-", "_", "+", "=", ":", "|", "~", "?"];
            SymbolAlphabets.Small = ["!", "@", "$", "%", "^", "&", "*", "+", "=", ":", "|", "~", "?"];
            SymbolAlphabets.AppleID = ["!", "?", "@", "&"];
            SymbolAlphabets.Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            return SymbolAlphabets;
        })();
        Configs.SymbolAlphabets = SymbolAlphabets;
    })(TSXKP.Configs || (TSXKP.Configs = {}));
    var Configs = TSXKP.Configs;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Configs) {
        var WPA2 = (function () {
            function WPA2() {
                this.symbol_alphabet = Configs.SymbolAlphabets.Small;
                this.separator_alphabet = Configs.SeparatorAlphabets.Standard;
                this.word_length_min = 4;
                this.word_length_max = 8;
                this.num_words = 6;
                this.separator_character_type = 1 /* Random */;
                this.padding_digits_before = 4;
                this.padding_digits_after = 4;
                this.padding_type = 2 /* Adaptive */;
                this.padding_character_type = 1 /* Random */;
                this.pad_to_length = 63;
                this.case_transform = 6 /* Random */;
                this.character_substitutions = {};
            }
            return WPA2;
        })();
        Configs.WPA2 = WPA2;
    })(TSXKP.Configs || (TSXKP.Configs = {}));
    var Configs = TSXKP.Configs;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Dictionaries) {
        var Dictionary = (function () {
            function Dictionary(words) {
                this.words = words;
                this.length = words.length;
            }
            Dictionary.prototype.get = function (index) {
                return this.words[index];
            };

            Dictionary.prototype.random = function (count) {
                var chosen;
                var i;

                for (chosen = [], i = 0; i < count; ++i) {
                    chosen.push(TSXKP.Generator.getRandomArrayElement(this.words));
                }

                return chosen;
            };
            return Dictionary;
        })();
        Dictionaries.Dictionary = Dictionary;
    })(TSXKP.Dictionaries || (TSXKP.Dictionaries = {}));
    var Dictionaries = TSXKP.Dictionaries;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    (function (Dictionaries) {
        (function (Loaders) {
            var SampleLoader = (function () {
                function SampleLoader(config) {
                    this.loaded = true;
                    this.words = [
                        "Africa",
                        "Alabama",
                        "Alaska",
                        "America",
                        "Amsterdam",
                        "April",
                        "Arizona",
                        "Asia",
                        "Athens",
                        "August",
                        "Australia",
                        "Austria",
                        "Barbados",
                        "Belfast",
                        "Belgium",
                        "Berlin",
                        "Botswana",
                        "Brazil",
                        "Britain",
                        "British",
                        "Bulgaria",
                        "California",
                        "Canada",
                        "Chile",
                        "China",
                        "Colombia",
                        "Congo",
                        "Copenhagen",
                        "Cuba",
                        "Damascus",
                        "December",
                        "Delaware",
                        "Denmark",
                        "Dublin",
                        "Earth",
                        "Egypt",
                        "England",
                        "English",
                        "Europe",
                        "February",
                        "Fiji",
                        "Finland",
                        "Florida",
                        "France",
                        "French",
                        "Friday",
                        "Germany",
                        "Gibraltar",
                        "God",
                        "Greece",
                        "Greek",
                        "Havana",
                        "Hawaii",
                        "Holland",
                        "I",
                        "Iceland",
                        "India",
                        "Indian",
                        "Ireland",
                        "Italy",
                        "Jamaica",
                        "Japan",
                        "Japanese",
                        "Jerusalem",
                        "Jordan",
                        "July",
                        "June",
                        "Jupiter",
                        "Kentucky",
                        "Kenya",
                        "Korea",
                        "Lisbon",
                        "London",
                        "Madrid",
                        "Malta",
                        "March",
                        "Mark",
                        "Mars",
                        "Maryland",
                        "Mercury",
                        "Mexico",
                        "Monday",
                        "Montana",
                        "Moon",
                        "Moscow",
                        "Nepal",
                        "Neptune",
                        "Netherlands",
                        "Nevada",
                        "Norway",
                        "November",
                        "October",
                        "Ohio",
                        "Oslo",
                        "Panama",
                        "Paris",
                        "Peru",
                        "Pluto",
                        "Poland",
                        "Portugal",
                        "Rome",
                        "Russia",
                        "Saturday",
                        "Saturn",
                        "Scotland",
                        "September",
                        "Singapore",
                        "Spain",
                        "Sun",
                        "Sunday",
                        "Sweden",
                        "Texas",
                        "Tokyo",
                        "Tuesday",
                        "Uranus",
                        "Venus",
                        "Vermont",
                        "Virginia",
                        "Wales",
                        "Warsaw",
                        "Washington",
                        "Wednesday",
                        "a",
                        "able",
                        "about",
                        "above",
                        "across",
                        "act",
                        "action",
                        "actually",
                        "add",
                        "addition",
                        "adjective",
                        "advance",
                        "afraid",
                        "after",
                        "again",
                        "against",
                        "age",
                        "ago",
                        "agree",
                        "agreed",
                        "ahead",
                        "air",
                        "airplane",
                        "all",
                        "allow",
                        "almost",
                        "alone",
                        "along",
                        "already",
                        "also",
                        "although",
                        "always",
                        "am",
                        "among",
                        "amount",
                        "an",
                        "and",
                        "anger",
                        "angle",
                        "angry",
                        "animal",
                        "another",
                        "answer",
                        "any",
                        "anything",
                        "appear",
                        "apple",
                        "are",
                        "area",
                        "arm",
                        "arms",
                        "army",
                        "around",
                        "arrive",
                        "arrived",
                        "art",
                        "article",
                        "as",
                        "ask",
                        "at",
                        "attempt",
                        "aunt",
                        "away",
                        "baby",
                        "back",
                        "bad",
                        "bag",
                        "ball",
                        "bank",
                        "banker",
                        "base",
                        "basket",
                        "battle",
                        "bay",
                        "be",
                        "bean",
                        "bear",
                        "beat",
                        "beautiful",
                        "beauty",
                        "became",
                        "because",
                        "become",
                        "bed",
                        "been",
                        "before",
                        "began",
                        "begin",
                        "behind",
                        "being",
                        "believe",
                        "bell",
                        "belong",
                        "below",
                        "beside",
                        "best",
                        "better",
                        "between",
                        "beyond",
                        "bicycle",
                        "big",
                        "bill",
                        "bird",
                        "birds",
                        "bit",
                        "black",
                        "block",
                        "blood",
                        "blow",
                        "blue",
                        "board",
                        "boat",
                        "body",
                        "bone",
                        "bones",
                        "book",
                        "born",
                        "borrow",
                        "both",
                        "bottle",
                        "bottom",
                        "box",
                        "boy",
                        "branch",
                        "branches",
                        "bread",
                        "break",
                        "bridge",
                        "bright",
                        "bring",
                        "broad",
                        "broke",
                        "broken",
                        "brother",
                        "brought",
                        "brown",
                        "bug",
                        "build",
                        "building",
                        "built",
                        "burn",
                        "burning",
                        "bus",
                        "business",
                        "busy",
                        "but",
                        "butter",
                        "buy",
                        "by",
                        "cake",
                        "call",
                        "came",
                        "can",
                        "cannot",
                        "capital",
                        "captain",
                        "car",
                        "care",
                        "carefully",
                        "carry",
                        "case",
                        "cat",
                        "catch",
                        "cattle",
                        "caught",
                        "cause",
                        "cells",
                        "cent",
                        "center",
                        "cents",
                        "century",
                        "certain",
                        "chair",
                        "chance",
                        "change",
                        "character",
                        "charge",
                        "chart",
                        "check",
                        "chief",
                        "child",
                        "childhood",
                        "children",
                        "choose",
                        "church",
                        "cigarette",
                        "circle",
                        "city",
                        "class",
                        "clean",
                        "clear",
                        "climbed",
                        "clock",
                        "close",
                        "cloth",
                        "clothes",
                        "cloud",
                        "coast",
                        "coat",
                        "cold",
                        "college",
                        "color",
                        "colour",
                        "column",
                        "come",
                        "common",
                        "company",
                        "compare",
                        "complete",
                        "compound",
                        "condition",
                        "conditions",
                        "consider",
                        "considerable",
                        "consonant",
                        "contain",
                        "continue",
                        "continued",
                        "control",
                        "cook",
                        "cool",
                        "copy",
                        "corn",
                        "corner",
                        "correct",
                        "cost",
                        "cotton",
                        "could",
                        "count",
                        "country",
                        "course",
                        "cover",
                        "covered",
                        "cows",
                        "create",
                        "cried",
                        "crops",
                        "cross",
                        "crowd",
                        "cry",
                        "cult",
                        "cup",
                        "current",
                        "cut",
                        "daily",
                        "dance",
                        "dare",
                        "dark",
                        "date",
                        "daughter",
                        "day",
                        "dead",
                        "deal",
                        "dear",
                        "death",
                        "decide",
                        "decided",
                        "decimal",
                        "deep",
                        "degree",
                        "delight",
                        "demand",
                        "describe",
                        "desert",
                        "design",
                        "desire",
                        "destroy",
                        "details",
                        "determine",
                        "developed",
                        "device",
                        "dictionary",
                        "did",
                        "die",
                        "died",
                        "difference",
                        "different",
                        "difficult",
                        "dig",
                        "dinner",
                        "direct",
                        "direction",
                        "discover",
                        "discovered",
                        "dish",
                        "distance",
                        "distant",
                        "divide",
                        "divided",
                        "division",
                        "do",
                        "doctor",
                        "does",
                        "dog",
                        "dollar",
                        "dollars",
                        "done",
                        "door",
                        "double",
                        "doubt",
                        "down",
                        "draw",
                        "drawing",
                        "dream",
                        "dress",
                        "dried",
                        "drink",
                        "drive",
                        "drop",
                        "dry",
                        "duck",
                        "during",
                        "dusk",
                        "duty",
                        "each",
                        "ear",
                        "early",
                        "ears",
                        "earth",
                        "east",
                        "easy",
                        "eat",
                        "edge",
                        "effect",
                        "effort",
                        "egg",
                        "eggs",
                        "eight",
                        "either",
                        "electric",
                        "electricity",
                        "elements",
                        "else",
                        "end",
                        "enemy",
                        "energy",
                        "engine",
                        "enjoy",
                        "enough",
                        "enter",
                        "entered",
                        "entire",
                        "equal",
                        "equation",
                        "escape",
                        "especially",
                        "etching",
                        "even",
                        "evening",
                        "ever",
                        "every",
                        "everyone",
                        "everything",
                        "exactly",
                        "example",
                        "except",
                        "exciting",
                        "exercise",
                        "expect",
                        "experience",
                        "experiment",
                        "explain",
                        "express",
                        "eye",
                        "face",
                        "fact",
                        "factories",
                        "factors",
                        "fail",
                        "fair",
                        "fall",
                        "family",
                        "famous",
                        "fancy",
                        "far",
                        "farm",
                        "farmers",
                        "fast",
                        "fat",
                        "father",
                        "favor",
                        "fear",
                        "feed",
                        "feel",
                        "feeling",
                        "feet",
                        "fell",
                        "fellow",
                        "felt",
                        "fence",
                        "few",
                        "field",
                        "fifteen",
                        "fifth",
                        "fifty",
                        "fig",
                        "fight",
                        "figure",
                        "fill",
                        "filled",
                        "finally",
                        "find",
                        "fine",
                        "finger",
                        "fingers",
                        "finish",
                        "finished",
                        "fire",
                        "firm",
                        "first",
                        "fish",
                        "fit",
                        "five",
                        "fix",
                        "flat",
                        "flier",
                        "floor",
                        "flow",
                        "flower",
                        "flowers",
                        "fly",
                        "follow",
                        "food",
                        "fool",
                        "foot",
                        "for",
                        "force",
                        "foreign",
                        "forest",
                        "forever",
                        "forget",
                        "form",
                        "fortieth",
                        "forty",
                        "forward",
                        "found",
                        "four",
                        "fraction",
                        "free",
                        "fresh",
                        "friend",
                        "friends",
                        "from",
                        "front",
                        "fruit",
                        "full",
                        "fun",
                        "further",
                        "future",
                        "gain",
                        "galaxy",
                        "game",
                        "garden",
                        "gas",
                        "gate",
                        "gather",
                        "gave",
                        "general",
                        "gentle",
                        "gentleman",
                        "get",
                        "gift",
                        "girl",
                        "give",
                        "gives",
                        "glad",
                        "glass",
                        "glossary",
                        "go",
                        "goes",
                        "gold",
                        "gone",
                        "good",
                        "goodbye",
                        "got",
                        "govern",
                        "government",
                        "grain",
                        "grass",
                        "grave",
                        "gray",
                        "great",
                        "green",
                        "grew",
                        "ground",
                        "group",
                        "grow",
                        "grown",
                        "guard",
                        "guess",
                        "guide",
                        "gun",
                        "had",
                        "hair",
                        "half",
                        "hall",
                        "halt",
                        "hand",
                        "hang",
                        "happen",
                        "happened",
                        "happy",
                        "hard",
                        "has",
                        "hat",
                        "have",
                        "he",
                        "head",
                        "health",
                        "hear",
                        "heard",
                        "heart",
                        "heat",
                        "heaven",
                        "heavy",
                        "height",
                        "held",
                        "hello",
                        "help",
                        "her",
                        "here",
                        "hers",
                        "high",
                        "hill",
                        "him",
                        "himself",
                        "his",
                        "history",
                        "hit",
                        "hold",
                        "hole",
                        "home",
                        "honor",
                        "hope",
                        "horse",
                        "hot",
                        "hour",
                        "hours",
                        "house",
                        "how",
                        "however",
                        "huge",
                        "human",
                        "hundred",
                        "hunger",
                        "hunt",
                        "hunting",
                        "hurry",
                        "hurt",
                        "husband",
                        "ice",
                        "idea",
                        "if",
                        "ill",
                        "important",
                        "in",
                        "inch",
                        "inches",
                        "include",
                        "increase",
                        "indeed",
                        "indicate",
                        "industry",
                        "information",
                        "insects",
                        "inside",
                        "instead",
                        "instruments",
                        "interest",
                        "into",
                        "iron",
                        "is",
                        "island",
                        "it",
                        "its",
                        "itself",
                        "job",
                        "join",
                        "joined",
                        "journey",
                        "joy",
                        "judge",
                        "jump",
                        "jumped",
                        "just",
                        "keep",
                        "kept",
                        "key",
                        "kill",
                        "killed",
                        "kind",
                        "king",
                        "kiss",
                        "kitchen",
                        "knew",
                        "know",
                        "known",
                        "labor",
                        "ladder",
                        "lady",
                        "lake",
                        "land",
                        "language",
                        "large",
                        "last",
                        "late",
                        "later",
                        "laugh",
                        "laughed",
                        "laughter",
                        "law",
                        "lay",
                        "lead",
                        "leader",
                        "learn",
                        "least",
                        "leave",
                        "led",
                        "left",
                        "leg",
                        "legs",
                        "lend",
                        "length",
                        "less",
                        "let",
                        "letter",
                        "level",
                        "liar",
                        "lie",
                        "life",
                        "lift",
                        "lifted",
                        "light",
                        "like",
                        "likely",
                        "line",
                        "list",
                        "listen",
                        "little",
                        "live",
                        "located",
                        "lone",
                        "long",
                        "look",
                        "lord",
                        "lose",
                        "loss",
                        "lost",
                        "lot",
                        "loud",
                        "love",
                        "low",
                        "lower",
                        "luna",
                        "machine",
                        "mad",
                        "made",
                        "mail",
                        "main",
                        "major",
                        "make",
                        "man",
                        "manner",
                        "many",
                        "map",
                        "march",
                        "mark",
                        "market",
                        "marry",
                        "master",
                        "match",
                        "material",
                        "matter",
                        "may",
                        "maybe",
                        "mayor",
                        "me",
                        "mean",
                        "measure",
                        "meat",
                        "meet",
                        "meeting",
                        "melody",
                        "member",
                        "members",
                        "men",
                        "met",
                        "metal",
                        "method",
                        "middle",
                        "might",
                        "mile",
                        "milk",
                        "million",
                        "mind",
                        "mine",
                        "minute",
                        "minutes",
                        "miss",
                        "mister",
                        "modern",
                        "molecules",
                        "moment",
                        "money",
                        "month",
                        "months",
                        "moon",
                        "more",
                        "morning",
                        "most",
                        "mother",
                        "mountain",
                        "mouth",
                        "move",
                        "movement",
                        "much",
                        "mud",
                        "music",
                        "must",
                        "my",
                        "nail",
                        "name",
                        "nation",
                        "natural",
                        "nature",
                        "near",
                        "nearly",
                        "necessary",
                        "neck",
                        "need",
                        "needle",
                        "neighbor",
                        "neither",
                        "nerve",
                        "never",
                        "new",
                        "news",
                        "next",
                        "nice",
                        "niece",
                        "night",
                        "nine",
                        "no",
                        "noise",
                        "none",
                        "noon",
                        "nor",
                        "north",
                        "northern",
                        "nose",
                        "not",
                        "note",
                        "nothing",
                        "notice",
                        "noun",
                        "now",
                        "number",
                        "numeral",
                        "object",
                        "observe",
                        "ocean",
                        "of",
                        "off",
                        "offer",
                        "office",
                        "often",
                        "oh",
                        "oil",
                        "old",
                        "on",
                        "once",
                        "one",
                        "only",
                        "open",
                        "opinion",
                        "opposite",
                        "or",
                        "order",
                        "orderly",
                        "other",
                        "ought",
                        "our",
                        "out",
                        "outer",
                        "outside",
                        "over",
                        "own",
                        "oxygen",
                        "page",
                        "paid",
                        "pain",
                        "paint",
                        "pair",
                        "paper",
                        "paragraph",
                        "park",
                        "part",
                        "partial",
                        "particular",
                        "party",
                        "pass",
                        "passed",
                        "past",
                        "pattern",
                        "pay",
                        "peace",
                        "people",
                        "per",
                        "perfect",
                        "perhaps",
                        "period",
                        "person",
                        "phrase",
                        "pick",
                        "picked",
                        "picture",
                        "piece",
                        "place",
                        "plain",
                        "plains",
                        "plan",
                        "plane",
                        "planet",
                        "plant",
                        "plants",
                        "play",
                        "pleasant",
                        "please",
                        "pleasure",
                        "plural",
                        "poem",
                        "point",
                        "pole",
                        "poor",
                        "position",
                        "possible",
                        "pot",
                        "pounds",
                        "power",
                        "practice",
                        "prepare",
                        "prepared",
                        "present",
                        "president",
                        "presidents",
                        "press",
                        "pretty",
                        "price",
                        "printed",
                        "probable",
                        "probably",
                        "problem",
                        "process",
                        "produce",
                        "products",
                        "promise",
                        "property",
                        "proud",
                        "prove",
                        "provide",
                        "public",
                        "pull",
                        "pulled",
                        "pure",
                        "push",
                        "pushed",
                        "put",
                        "quarter",
                        "queen",
                        "question",
                        "questions",
                        "quick",
                        "quickly",
                        "quiet",
                        "quite",
                        "race",
                        "radio",
                        "rain",
                        "raise",
                        "raised",
                        "ran",
                        "rather",
                        "reach",
                        "reached",
                        "read",
                        "ready",
                        "real",
                        "realize",
                        "really",
                        "reason",
                        "receive",
                        "received",
                        "record",
                        "red",
                        "region",
                        "remain",
                        "remember",
                        "repeated",
                        "reply",
                        "report",
                        "represent",
                        "require",
                        "resent",
                        "rest",
                        "result",
                        "return",
                        "rhythm",
                        "rich",
                        "ridden",
                        "ride",
                        "right",
                        "ring",
                        "rise",
                        "river",
                        "road",
                        "rock",
                        "roll",
                        "rolled",
                        "room",
                        "root",
                        "rope",
                        "rose",
                        "round",
                        "row",
                        "rule",
                        "run",
                        "rush",
                        "sad",
                        "safe",
                        "safety",
                        "said",
                        "sail",
                        "salt",
                        "same",
                        "sand",
                        "sat",
                        "save",
                        "saw",
                        "say",
                        "says",
                        "scale",
                        "scene",
                        "school",
                        "science",
                        "scientists",
                        "score",
                        "sea",
                        "season",
                        "seat",
                        "second",
                        "section",
                        "see",
                        "seed",
                        "seeds",
                        "seem",
                        "seen",
                        "self",
                        "sell",
                        "send",
                        "sense",
                        "sent",
                        "sentence",
                        "separate",
                        "serve",
                        "service",
                        "set",
                        "settle",
                        "settled",
                        "seven",
                        "several",
                        "shade",
                        "shake",
                        "shall",
                        "shape",
                        "share",
                        "sharp",
                        "she",
                        "shine",
                        "ship",
                        "shirt",
                        "shoe",
                        "shoes",
                        "shop",
                        "shore",
                        "short",
                        "shot",
                        "should",
                        "shoulder",
                        "shout",
                        "shouted",
                        "show",
                        "shown",
                        "sick",
                        "side",
                        "sight",
                        "sign",
                        "signal",
                        "silent",
                        "silver",
                        "similar",
                        "simple",
                        "since",
                        "sing",
                        "single",
                        "sir",
                        "sister",
                        "sit",
                        "six",
                        "size",
                        "skin",
                        "sky",
                        "sleep",
                        "slept",
                        "slow",
                        "slowly",
                        "small",
                        "smell",
                        "smiled",
                        "smoke",
                        "snow",
                        "so",
                        "soft",
                        "soil",
                        "sold",
                        "soldier",
                        "soldiers",
                        "solution",
                        "some",
                        "someone",
                        "something",
                        "sometimes",
                        "son",
                        "song",
                        "soon",
                        "sorry",
                        "sort",
                        "sound",
                        "south",
                        "southern",
                        "space",
                        "speak",
                        "special",
                        "speed",
                        "spell",
                        "spend",
                        "spent",
                        "spoke",
                        "spot",
                        "spread",
                        "spring",
                        "square",
                        "stand",
                        "star",
                        "stars",
                        "start",
                        "state",
                        "statement",
                        "station",
                        "stay",
                        "steel",
                        "step",
                        "stick",
                        "still",
                        "stock",
                        "stone",
                        "stood",
                        "stop",
                        "store",
                        "storm",
                        "story",
                        "straight",
                        "strange",
                        "stranger",
                        "stream",
                        "street",
                        "strength",
                        "stretched",
                        "strike",
                        "string",
                        "strong",
                        "student",
                        "students",
                        "study",
                        "subject",
                        "substances",
                        "succeed",
                        "success",
                        "such",
                        "sudden",
                        "suddenly",
                        "suffer",
                        "suffix",
                        "sugar",
                        "suggested",
                        "suit",
                        "sum",
                        "summer",
                        "sun",
                        "supply",
                        "suppose",
                        "sure",
                        "surface",
                        "surprise",
                        "sweet",
                        "swim",
                        "syllables",
                        "symbols",
                        "system",
                        "table",
                        "tail",
                        "take",
                        "taken",
                        "talk",
                        "tall",
                        "taste",
                        "teach",
                        "teacher",
                        "team",
                        "tear",
                        "tell",
                        "temperature",
                        "ten",
                        "terms",
                        "test",
                        "than",
                        "thank",
                        "that",
                        "the",
                        "their",
                        "them",
                        "themselves",
                        "then",
                        "there",
                        "therefore",
                        "these",
                        "they",
                        "thick",
                        "thin",
                        "thing",
                        "think",
                        "third",
                        "thirteen",
                        "this",
                        "those",
                        "though",
                        "thought",
                        "thousand",
                        "thousands",
                        "three",
                        "threw",
                        "through",
                        "throw",
                        "thrown",
                        "thus",
                        "tie",
                        "tied",
                        "till",
                        "time",
                        "tiny",
                        "to",
                        "today",
                        "together",
                        "told",
                        "tomorrow",
                        "tone",
                        "too",
                        "took",
                        "tools",
                        "top",
                        "tore",
                        "total",
                        "touch",
                        "tought",
                        "toward",
                        "town",
                        "track",
                        "trade",
                        "train",
                        "training",
                        "travel",
                        "tree",
                        "triangle",
                        "tried",
                        "tries",
                        "trip",
                        "trouble",
                        "truck",
                        "true",
                        "trust",
                        "try",
                        "tube",
                        "turn",
                        "twelve",
                        "twenty",
                        "two",
                        "type",
                        "uncle",
                        "under",
                        "underline",
                        "understand",
                        "understood",
                        "unit",
                        "until",
                        "up",
                        "upon",
                        "us",
                        "use",
                        "usual",
                        "usually",
                        "valley",
                        "value",
                        "various",
                        "verb",
                        "very",
                        "view",
                        "village",
                        "visit",
                        "voice",
                        "vowel",
                        "wagon",
                        "wait",
                        "walk",
                        "wall",
                        "want",
                        "wants",
                        "war",
                        "warm",
                        "was",
                        "wash",
                        "watch",
                        "water",
                        "wave",
                        "waves",
                        "way",
                        "we",
                        "weak",
                        "wear",
                        "weather",
                        "wedge",
                        "week",
                        "weight",
                        "welcome",
                        "well",
                        "went",
                        "were",
                        "west",
                        "western",
                        "wet",
                        "what",
                        "wheat",
                        "wheel",
                        "wheels",
                        "when",
                        "where",
                        "whether",
                        "which",
                        "while",
                        "white",
                        "who",
                        "whole",
                        "whom",
                        "whose",
                        "why",
                        "wide",
                        "wife",
                        "wild",
                        "will",
                        "win",
                        "wind",
                        "window",
                        "wing",
                        "wings",
                        "winter",
                        "wire",
                        "wise",
                        "wish",
                        "with",
                        "within",
                        "without",
                        "woman",
                        "women",
                        "won",
                        "wonder",
                        "wood",
                        "word",
                        "wore",
                        "work",
                        "workers",
                        "world",
                        "worn",
                        "worth",
                        "would",
                        "write",
                        "written",
                        "wrong",
                        "wrote",
                        "yard",
                        "year",
                        "yellow",
                        "yes",
                        "yesterday",
                        "yet",
                        "you",
                        "young",
                        "your",
                        "yourself"];
                    this.config = config;
                }
                SampleLoader.prototype.load = function (callback) {
                    var words;
                    var i;
                    var l;

                    if (!this.cache) {
                        words = [];
                        i = 0;
                        l = this.words.length;
                        for (; i < l; ++i) {
                            if (this.words[i].length >= this.config.word_length_min && this.words[i].length <= this.config.word_length_max) {
                                words.push(this.words[i]);
                            }
                        }

                        this.cache = new TSXKP.Dictionaries.Dictionary(words);
                    }

                    callback(undefined, this.cache);

                    return this;
                };
                return SampleLoader;
            })();
            Loaders.SampleLoader = SampleLoader;
        })(Dictionaries.Loaders || (Dictionaries.Loaders = {}));
        var Loaders = Dictionaries.Loaders;
    })(TSXKP.Dictionaries || (TSXKP.Dictionaries = {}));
    var Dictionaries = TSXKP.Dictionaries;
})(TSXKP || (TSXKP = {}));
var TSXKP;
(function (TSXKP) {
    

    

    var Generator = (function () {
        function Generator(loader, config) {
            this.config = config;
            this.loader = loader;
        }
        Generator.getRandomArrayElement = function (array) {
            return array[Math.floor(Math.random() * array.length)];
        };

        Generator.prototype.getRandomDigits = function (length) {
            var digits;
            var i;
            for (digits = [], i = 0; i < length; ++i) {
                digits.push(Generator.getRandomArrayElement(TSXKP.Configs.SymbolAlphabets.Numbers));
            }

            return digits.join("");
        };

        Generator.prototype.transformWordCase = function (word, case_transform) {
            switch (case_transform) {
                case 2 /* Lower */:
                    return word.toLocaleLowerCase();
                case 1 /* Upper */:
                    return word.toLocaleUpperCase();
                case 3 /* Capitalise */:
                    return word.length ? word[0].toLocaleUpperCase() + word.substr(1).toLocaleLowerCase() : word;
                case 4 /* Invert */:
                    return word.length ? word[0].toLocaleLowerCase() + word.substr(1).toLocaleUpperCase() : word;
                default:
                    return word;
            }
        };

        Generator.prototype.transformCase = function (words, case_transform) {
            if (typeof case_transform === "undefined") { case_transform = this.config.case_transform; }
            var i;
            var l;

            for (i = 0, l = words.length; i < l; ++i) {
                switch (case_transform) {
                    case 5 /* Alternate */:
                        words[i] = this.transformWordCase(words[i], i % 2 === 0 ? 2 /* Lower */ : 1 /* Upper */);
                        break;
                    case 6 /* Random */:
                        words[i] = this.transformWordCase(words[i], Math.random() < 0.5 ? 2 /* Lower */ : 1 /* Upper */);
                        break;
                    default:
                        words[i] = this.transformWordCase(words[i], this.config.case_transform);
                        break;
                }
            }

            return words;
        };

        Generator.prototype.getSeparator = function (separator_character_type) {
            if (typeof separator_character_type === "undefined") { separator_character_type = this.config.separator_character_type; }
            switch (separator_character_type) {
                case 2 /* Specific */:
                    return this.config.separator_character;
                case 1 /* Random */:
                    return Generator.getRandomArrayElement(this.config.separator_alphabet);
                case 0 /* None */:
                default:
                    return "";
            }
        };

        Generator.prototype.getPaddingCharacter = function (padding_character_type) {
            if (typeof padding_character_type === "undefined") { padding_character_type = this.config.padding_character_type; }
            switch (padding_character_type) {
                case 3 /* Specific */:
                    return this.config.padding_character;
                case 2 /* Separator */:
                    return this.getSeparator();
                case 1 /* Random */:
                    return Generator.getRandomArrayElement(this.config.symbol_alphabet);
                case 0 /* None */:
                default:
                    return "";
            }
        };

        Generator.prototype.generate = function (callback) {
            var _this = this;
            var words;
            var separator;
            var padding_char;
            var password;
            var i;

            this.loader.load(function (error, dictionary) {
                if (error) {
                    return callback(error);
                }

                words = dictionary.random(_this.config.num_words);
                words = _this.transformCase(words);
                separator = _this.getSeparator();
                padding_char = _this.getPaddingCharacter();

                password = words.join(separator);

                if (_this.config.padding_digits_before) {
                    password = _this.getRandomDigits(_this.config.padding_digits_before) + separator + password;
                }
                if (_this.config.padding_digits_after) {
                    password += separator + _this.getRandomDigits(_this.config.padding_digits_after);
                }

                switch (_this.config.padding_type) {
                    case 2 /* Adaptive */:
                        while (password.length < _this.config.pad_to_length) {
                            password = padding_char + password;
                        }
                        if (password.length > _this.config.pad_to_length) {
                            password = password.substr(0, _this.config.pad_to_length);
                        }
                        break;
                    case 1 /* Fixed */:
                        for (i = 0; i < _this.config.padding_characters_before; ++i) {
                            password = padding_char + password;
                        }
                        for (i = 0; i < _this.config.padding_characters_after; ++i) {
                            password += padding_char;
                        }
                        break;
                }

                console.log(password);

                return callback(undefined, password);
            });

            return this;
        };
        return Generator;
    })();
    TSXKP.Generator = Generator;
})(TSXKP || (TSXKP = {}));
//# sourceMappingURL=tsxkp.js.map
