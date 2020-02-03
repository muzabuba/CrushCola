class Panel
{
    constructor(el) {
        this.config = utils.createComponent(el, 'panel');
    }

    render(){
        var root = this.config.root;
        if (root != null) {
            var panel = document.createElement('div');

            panel.id = this.config.id;
            panel.config = this.config;
            panel.items = this.config.items;
            this.config.renderer = true;
            

            root.appendChild(panel);
            return this;
        }

        console.log('WARNING: Undefinded parent element');
    }
}