Meteor.startup(function () {
    Meteor.subscribe('music');
    Tracker.autorun(function() {
        var userId = Meteor.userId();
        if(!userId && P2P.peer) {
        } else if(!P2P.peer) {
            P2P.peer = new WebRTC(userId, { key: '62is9f6ozx2mx6r' });
            MusicManager.synchronize(function(error) {
                console.warn(error);
            });
        }
    });
    UIkit.domObserve('body');
});
