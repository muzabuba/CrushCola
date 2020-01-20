class Panel
{
    constructor(el) {
        this.el = el;
        this.prefix = 'pnl';
        this.name = 'panel';
        this.xtype = 'panel_def';
        this.renderer = false;
        this.items = [];

        this.id = utils.createId(this.prefix, ++pnlCount);
    }

    render(){
        if (this.el != null) {
            var panel = document.createElement('div');
            var config = {
                id: this.id, 
                name: this.name,
                text: this.text,
                xtype: this.xtype
            };

            panel.id = config.id;
            panel.className = this.xtype;
            panel.renderer = true;
            panel.items = this.items;

            panel.config = config;

            this.el.appendChild(panel);
            return this;
        }

        console.log('WARNING: Undefinded parent element');
    }
}