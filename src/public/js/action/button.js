class Button{
    constructor(el) {
        this.config = utils.createComponent(el, 'button');
    }

    render() 
    {
        var root = this.config.root;
        if (root != null) {
            var button = document.createElement(this.config.type);

            button.innerText = this.config.text;
            button.config = this.config;
            button.id = this.config.id;
            this.config.renderer = true;

            utils.getCmp(this.config.root.id).items.push(button);
            root.appendChild(button);

            utils.addStyle(this.config.id, this.config.xtype)

            return this;
        }

        console.log('WARNING: Undefinded parent element');
    }
}