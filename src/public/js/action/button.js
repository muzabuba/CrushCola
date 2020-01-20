class Button{
    constructor(el) {
        this.el = el;
        this.prefix = 'btn';
        this.name = 'button';
        this.text = 'Text';
        this.xtype = 'btn_def';
        this.renderer = false;

        this.id = utils.createId(this.prefix, ++btnCount);
    }

    addStyle() {
       utils.getCmp(this.id).classList.add('test');
    }

    addEvent(name, callback) {
        utils.getCmp(this.id).addEventListener(name, callback);
    }

    render() 
    {
        if (this.el != null) {
            var button = document.createElement('button');
            var config = {
                id: this.id, 
                name: this.name,
                text: this.text,
                xtype: this.xtype
            };

            button.id = config.id;
            button.innerText = config.text;
            button.className = this.xtype;
            button.renderer = true;

            button.config = config;

            $('#' + this.el.id)[0].items.push(button);
            this.el.appendChild(button);
            return this;
        }

        console.log('WARNING: Undefinded parent element');
    }
}