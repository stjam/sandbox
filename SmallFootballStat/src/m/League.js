function League(slots) {
    this.league = slots.league;
}

League.instances = {};

League.add = function (slots) {
    var league = new League(slots);
    League.instances[slots.league] = league;
    console.log("league added to favorite" + league);
};

League.saveAll = function () {
    var leagues = "", error = false, leaguesLength = Object.keys(League.instances).length;
    try {
        leagues = JSON.stringify(League.instances);
        window.localStorage.setItem("leagues",leagues);
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
        error = true;
    }
    if (!error) console.log(leaguesLength + " books saved.");
};

League.retrieveAll = function () {
    var key = "", keys = [], i = 0, league = "", leagues = {};
    try {
        if (localStorage["leagues"]) {
            league = window.localStorage.getItem("leagues");
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }
    if (league) {
        leagues = JSON.parse(league);
        keys = Object.keys(leagues);
        console.log(keys.length + " leagues loaded.");
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            League.instances[key] = League.convertRec2Obj(leagues[key]);
        }
    }
};
League.convertRec2Obj = function (leagueRow) {
    var league = new League(leagueRow);
    return league;
};