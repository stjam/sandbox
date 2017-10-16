pl.v.createLeague = {
    listAll: function (e) {
        League.retrieveAll();
        keys = Object.keys(League.instances);
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            document.getElementById("data").innerHTML += "<p>" + League.instances[key].league + "</p>";
        }
    }
};