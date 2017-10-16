pl.v.createLeague = {
    handleSaveButtonClickEvent: function (e) {
        console.log(e.target.id);
        var slots = {
            league: e.target.id
        };
        League.add(slots);
        League.saveAll();
    }
};