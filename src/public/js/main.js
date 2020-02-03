var utils = new Utils();

var root = document.getElementById(rootEl);
var app = new Application();

app.init();
app.start();
app.printStart();

btnCount = 0;
pnlCount = 0;

var mainPnl = new Panel(root).render();
var pnl1 = new Panel(utils.getCmp(mainPnl.config.id)).render();
var pnl2 = new Panel(utils.getCmp(mainPnl.config.id)).render();

var btn = new Button(utils.getCmp(pnl1.config.id)).render();
var btn2 = new Button(utils.getCmp(pnl1.config.id)).render();
var btn1 = new Button(utils.getCmp(pnl2.config.id)).render();

utils.addStyle(btn2.config.id, 'btn_def');
utils.addEvent(btn2.config.id, 'click', function (e) {
    console.log(this.id);
});

